import React from 'react';
import FrameOne from './components/frame_one'
import FrameTwo from "./components/frame_two";
import FrameThree from "./components/frame_three";
import FrameFour from "./components/frame_four";
import FrameFive from "./components/frame_five";
import FrameSix from "./components/frame_six";
import FrameSeven from "./components/frame_seven";
import cs from './main.module.scss';

const Main = () => {
	return (
		<div className={cs.main}>
			<FrameOne/>
			<FrameTwo/>
			<FrameThree/>
			<FrameFour/>
			<FrameFive/>
			<FrameSix/>
			<FrameSeven/>
		</div>
	);
};

export default Main;
