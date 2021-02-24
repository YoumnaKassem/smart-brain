import React from 'react';


class SignIn extends React.Component {
  constructor(props){

    super(props);
    this.state={

      signInEmail:'',
      signInPass:''

    }

  }
  onEmailChange=(event)=>{
    this.setState({
      signInEmail:event.target.value
    })
  }

  onPasswordChange=(event)=>{
    this.setState({
      signInPass:event.target.value

    })
  }


  onSubmitSignIn=(e)=>{

    fetch('http://localhost:8000/signin', {

      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPass
      })
    })
    .then(res=>res.json())
    .then(user=>{
    
      if(user.id)
        {
          this.props.changeRoute('signIn');
          this.props.loadUser(user);

        } 
      else 
       console.log('wrong credentials');
    })
    
  }
    
  
  
  render(){
    return(
      <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-70-m w-35-l mw7 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label 
                 
                className="db fw6 lh-copy f6" htmlFor="email-address">Email </label>
                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" />
              </div>
              <div className="mv3">
                <label 
                 className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="pass"  id="password" />
              </div>
            </fieldset>
            <div className="">
              <input 
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--grey bg-transparent grow pointer f6 dib"  value="Sign in"/>
              <p onClick={()=>this.props.changeRoute('register')} class="f5 ma2 link dim black db">Register</p>
            </div>
            
          </div>
        </main>
      </article>
   );
  }
}

export default SignIn;
