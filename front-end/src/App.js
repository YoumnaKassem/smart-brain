
import './App.css';
import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import LinkToAnImage from './LinkToAnImage';
import Rank from './Rank';
import ImageRecognition from './ImageRecognition';
import Clarifai from 'clarifai';
import SignOnFace from './SignOnFace/SignOnFace';
import SignIn from './SignIn';
import Register from './Register';

const app = new Clarifai.App({
 		apiKey: 'b68ac6e0b95e4838b8cecdc89ea44ec5'
		});
class App extends Component {

	constructor(){
		super();
		this.state = {
			userInput:'',
			imageInput:'',
			box:{},
			route:'home',
			isSignedIn: false,
			userRank:0,
			theUser:{
				id:'',
				name:'',
				entries: 0,
				email:''
				
			}
		}	
	}

	userInputs=(userDetails)=>{

		this.setState({
			userRank:userDetails.entries
		})
	}


	computeFace=(generalModel)=>{
		let response= generalModel.outputs[0].data.regions[0].region_info.bounding_box;
		console.log(response);
		const image = document.getElementById('imageId');
		let width=Number(image.width);
		let height=Number(image.height);
		console.log('here are the width and the height');
		console.log(width, height);
		console.log("here are the 4 points: ");
		console.log(response.left_col);

		return ({
			leftCol: width * response.left_col,
			topRow: height * response.top_row,
			rightCol:width - (width*response.right_col),
			bottomRow:height - (height*response.bottom_row)

			});
	}
	loadUser=(user)=>{
		this.setState({
			theUser:{
				id:user.id,
				name:user.name,
				email:user.email,
				entries:user.entries
				
			}
		})
	}
	changeRoute=r=>{
		this.setState({
			route:r
		});
	
	}

	changingBoxState=box=> {
	
		this.setState({box})
	}

	onChangingInput =(e)=>{
			this.setState({
				userInput:e.target.value
			});
				
	}

	onClickingButton=(e)=>{
		this.setState({imageInput: this.state.userInput});
		app.models
		.predict(Clarifai.FACE_DETECT_MODEL, this.state.userInput)
		.then(response=>{
			if (response) {
          	  fetch('http://localhost:8000/image', {
	          method: 'put',
	          headers: {'Content-Type': 'application/json'},
	          body: JSON.stringify({
	          id: this.state.theUser.id
	            })
              })
             .then(response => response.json())
             .then(count => {
              this.setState(Object.assign(this.state.theUser, { entries: count}))
              })

            }
		  this.changingBoxState(this.computeFace(response))
	      })
		.catch(e=>console.log(e));
		}

render(){

	return(
			<div className="App">
			  <Navigation changeRoute={this.changeRoute} />
			  {
			  	this.state.route==='signIn'?
			  	   <div>
			  		  <Logo />
			      	  <Rank userName={this.state.theUser.name} entries={this.state.theUser.entries} />
			          <LinkToAnImage onChangingInput = {this.onChangingInput} onClickingButton = {this.onClickingButton} />
			          <ImageRecognition imageInput={this.state.imageInput} box={this.state.box}/>
			       </div>
			    :( this.state.route==='home'?
			    	<SignIn changeRoute={this.changeRoute} loadUser={this.loadUser}/>
			    :<Register loadUser={this.loadUser} changeRoute={this.changeRoute} />)
			   
		  	  }
		  	</div>
		    
		  );
	    }
}

export default App;
