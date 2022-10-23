import React from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import FutureoFeSports from "../../../../../UI/FUTURE OF eSPORTS/FUTUREOFeSPORTS";
import image from '../../../../../assets/frame4_image.svg';
import Button from "../../../../../UI/Button";
import cs from './frameFour.module.scss';

const FrameFour = () => {

	return (
		<div className={cs.frame_four}>
			<div className={cs.frame_four_container}>
				<div className={cs.left_container}>
					<div className={cs.container_future}>
						<FutureoFeSports/>
					</div>
					<h1 className={cs.title}>The new era of <br/> cloud gaming here</h1>
					<p className={cs.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>
					<Button value={'Explore More'}/>
				</div>
				<div className={cs.right_container}>
					<AnimationOnScroll className={cs.animation} animateIn="animate__flipInY">
						<img src={image} alt=""/>
					</AnimationOnScroll>
				</div>
			</div>
		</div>
	);
};

export default FrameFour;