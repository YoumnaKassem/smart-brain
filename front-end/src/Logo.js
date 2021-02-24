import React from 'react';
import Tilt from 'react-tilt';
import brain from './yomnLogo.png';
const Logo = ()=>{
return(

	<div className='ma4'>
		<Tilt className="" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner"> <img className='pt3' alt='logo' src={brain} /> </div>
		</Tilt>
	</div>


);



}
export default Logo;