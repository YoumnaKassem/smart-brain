import React from 'react';


const Rank = ({entries, userName})=>{
return(
		<div className='ma4'>
			<div className='f2 bold blue '>{`Hi ${userName}, Your current entry count is : `}
				<p className='bold pink bg-grey' >{entries}</p>

			</div>
			<div className='f3  black'>{""}


			</div>

		</div>
	);



}
export default Rank;