import React from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll';

const Animation = ({children, animation , className}) => {
	return (
		<AnimationOnScroll
			className={className && className}
			animateIn={`${animation}`}
		>
			{children}
		</AnimationOnScroll>
	);
};

export default Animation;