import React from 'react';
import image1 from '../../../../../assets/frame6_image1.svg'
import image2 from '../../../../../assets/frame6_image2.svg'
import image3 from '../../../../../assets/frame6_image3.svg'
import cs from './frame_six.module.scss'
import Animation from "../../../../../UI/Animations";

const FrameSix = () => {
	return (
		<div className={cs.frameSix}>
			<Animation className={cs.animation} animation={'animate__bounceIn'}>
				<img src={image1} alt=""/>
			</Animation>
			<Animation className={cs.animation} animation={'animate__bounceIn'}>
				<img src={image2} alt=""/>
			</Animation>
			<Animation className={cs.animation} animation={'animate__bounceIn'}>
				<img src={image3} alt=""/>
			</Animation>
		</div>
	);
};

export default FrameSix;