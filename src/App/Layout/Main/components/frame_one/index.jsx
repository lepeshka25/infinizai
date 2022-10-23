import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";
import FutureoFeSports from "../../../../../UI/FUTURE OF eSPORTS/FUTUREOFeSPORTS";
import banner_text from "../../../../../assets/frame1_text.svg";
import frame1_banner from "../../../../../assets/frame1_banner.svg";
import Button from "../../../../../UI/Button";
import cs from "./frame_one.module.scss";
import Animation from "../../../../../UI/Animations";

const FrameOne = () => {
	return (
		<div className={cs.frame_one}>
			<div className={cs.container_background}>
				<div className={cs.background}></div>
				<div className={cs.background_blue}></div>
			</div>

			<div className={cs.container}>

				<Animation className={cs.animation_container} animation={'animate__fadeInLeft'}>

					<div className={cs.left_container}>

						<FutureoFeSports/>

						<div className={cs.container_absolute_text}>
							<p>FACEBOOK</p>
							<p>INSTAGRAM</p>
							<p>TWITCH</p>
						</div>

						<img className={cs.banner_text} src={banner_text} alt=""/>

						<p className={cs.text_lorem}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
						</p>

						<div className={cs.container_btn}>
							<Button value={'Explore More'}/>
							<button>View our team</button>
						</div>
					</div>

				</Animation>

				<div className={cs.right_container}>
					<Animation className={cs.animation_container2} animation={"animate__fadeInRight"}>
						<img src={frame1_banner} alt=""/>
					</Animation>
				</div>

			</div>

		</div>
	);
};

export default FrameOne;