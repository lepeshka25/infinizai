import React from 'react';
import background from '../../../../../assets/frame8_background.svg'
import image_text from '../../../../../assets/frame8_text.svg'
import cs from './frame_eighth.module.scss'
import {useGetDataBase} from "../../../../../hooks/useGetDataBase";

const FrameEighth = () => {
	const [input , setInput] = React.useState(null)
	const {setUpdate} = useGetDataBase()

	function onSubmit (value){
		fetch('https://testalmaz-b24d1-default-rtdb.firebaseio.com/gmailData/.json', {
			method: 'POST',
			body: JSON.stringify(value)
		})
		setUpdate(state => !state)
	}

	return (
		<div
			style={{background: `url("${background}") center / cover no-repeat`}}
			className={cs.frame_eighth}
		>
			<div className={cs.frame_eighth_container}>
				<img src={image_text} alt=""/>
				{/*<h1>Join the largest <br/> gaming community</h1>*/}
				<p>Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus</p>
				<p>
					lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo
				</p>
				<div className={cs.container}>
					<input onChange={event => setInput(event.target.value)} type="text" placeholder={'Your Email Address'}/>
					<button onClick={() => onSubmit(input)}>Subscribe Now</button>
				</div>
			</div>
		</div>
	);
};

export default FrameEighth;