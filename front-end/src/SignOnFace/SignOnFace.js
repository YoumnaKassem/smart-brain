import React from 'react';
import bounding from './style.css';


const SignOnFace = ({box})=>{
	console.log("in SignOnFace component this is the box : ");
	console.log(box);
return(
		<div className='bounding' style={{top:box.topRow, bottom:box.bottomRow, right:box.rightCol, left:box.leftCol}}>
			
		</div>
	);



}
export default SignOnFace;