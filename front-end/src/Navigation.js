import React from 'react';

const Navigation = ({changeRoute})=>{
return(
		<nav className='flex justify-end pr4 pv1'>
			<p onClick={()=>changeRoute('home')} className='f3 link dim underline pointer pa3'> Sign out </p>
		</nav>

	);



}
export default Navigation;