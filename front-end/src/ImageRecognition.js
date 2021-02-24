import React from 'react';
import bounding from './SignOnFace/style.css';


const ImageRecognition = ({imageInput, box})=>{
return(
		<div className='flex ma4 justify-center-ns'>
			<div className='absolute mt2'>
				<img id='imageId' alt='person pic' src={imageInput}/>
				<div className='bounding' 
				style={{top:box.topRow, bottom:box.bottomRow, right:box.rightCol, left:box.leftCol}}>
				</div>
			</div>

		</div>
	);



}
export default ImageRecognition;