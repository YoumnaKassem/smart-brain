import React from 'react';
class Register extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:''
    }

  }
  onChangeName=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  onChangeEmail=(event)=>{
    this.setState({email:event.target.value})
  }

  onChangePass= (event)=>{
    this.setState({password:event.target.value})
  }


  onSubmitRegiser=()=>{
    fetch('http://localhost:8000/newuser', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      })
    })
    .then(res=>res.json())
    .then(user=>{
      
        this.props.loadUser(user);
        this.props.changeRoute('signIn');
      }
    )
    .catch(err=>console.log(err))
    
  }
  render(){
            return(
              <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-70-m w-35-l mw7 center">
                <main className="pa4 black-80">
                  <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name </label>
                        <input onChange={this.onChangeName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                      </div>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email </label>
                        <input onChange={this.onChangeEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                      </div>
                      <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={this.onChangePass} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                      </div>
                    </fieldset>
                    <div className="">
                      <input onClick={this.onSubmitRegiser} className="b ph3 pv2 input-reset ba b--grey bg-transparent grow pointer f6 dib"  value="Register"/>
                     
                    </div>
                    
                  </div>
                </main>
              </article>
            );
          }
}

export default Register;
