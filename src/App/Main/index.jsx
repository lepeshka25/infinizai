import React from 'react';
import FutureoFeSports from "../../components/FUTURE OF eSPORTS/FUTUREOFeSPORTS";
import banner_text from '../../assets/frame1_text.svg';
import frame1_banner from '../../assets/frame1_banner.svg';
import cs from './main.module.scss';

const Main = () => {
	return (
		<div className={cs.main}>
			<div className={cs.container_background}>
				<div className={cs.background}></div>
				<div className={cs.background_blue}></div>
			</div>

			<div className={cs.container}>

				<div className={cs.left_container}>
					<FutureoFeSports/>

					<div className={cs.container_absolute_text}>
						<p>FACEBOOK</p>
						<p>INSTAGRAM</p>
						<p>TWITCH</p>
					</div>

					<img className={cs.banner_text} src={banner_text} alt=""/>

					<p className={cs.text_lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>

					<div className={cs.container_btn}>
						<button>Explore More</button>
						<button>View our team</button>
					</div>
				</div>
				<div className={cs.right_container}>
					<img src={frame1_banner} alt=""/>
				</div>
			</div>

		</div>
	);
};

export default Main;
