import React from 'react';
import image1 from '../../../../../assets/frame6_image1.svg'
import image2 from '../../../../../assets/frame6_image2.svg'
import image3 from '../../../../../assets/frame6_image3.svg'
import cs from './frame_six.module.scss'

const FrameSix = () => {
	return (
		<div className={cs.frameSix}>
			<img src={image1} alt=""/>
			<img src={image2} alt=""/>
			<img src={image3} alt=""/>
		</div>
	);
};

export default FrameSix;