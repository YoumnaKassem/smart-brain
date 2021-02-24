import React from 'react';








const LinkToAnImage = ({onClickingButton, onChangingInput})=>{
	

return(
		<div className=' w-50 center '>
			<p className='f3 bold blue'>{'This Magic Brain will detect face in your pictures. Give it a try!'}</p>

			<div className='shadow-1 formyom'>
				<input className='w-30 f4 ma2 ph1 pv1 shadow-2 mt3' type="text" placeHolder='Enter the URL here '
				 onChange={onChangingInput} />
				<button className='w-10 link grow ph1 pv2 white bg-light-blue' onClick={onClickingButton}>{'Click'}</button>
			</div>

		</div>
	);



}
export default LinkToAnImage;