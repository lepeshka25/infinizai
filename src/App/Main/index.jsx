import React from 'react';
import FrameOne from './components/frame_one'
import FrameTwo from "./components/frame_two";
import cs from './main.module.scss';

const Main = () => {
	return (
		<div className={cs.main}>
			<FrameOne/>
			<FrameTwo/>
		</div>
	);
};

export default Main;
