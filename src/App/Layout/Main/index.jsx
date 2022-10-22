import React from 'react';
import FrameOne from './components/frame_one'
import FrameTwo from "./components/frame_two";
import FrameThree from "./components/frame_three";
import cs from './main.module.scss';

const Main = () => {
	return (
		<div className={cs.main}>
			<FrameOne/>
			<FrameTwo/>
			<FrameThree/>
		</div>
	);
};

export default Main;
