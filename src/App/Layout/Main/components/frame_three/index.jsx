import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FutureoFeSports from "../../../../../UI/FUTURE OF eSPORTS/FUTUREOFeSPORTS";
import {useGetDataBase} from "../../../../../hooks/useGetDataBase";
import Cards from "./components/Cards";
import background from '../../../../../assets/frame3_background.svg'
import cs from './frame_three.module.scss';

const FrameThree = () => {
	const data = useGetDataBase()

	return (
		<div style={{background: `url(${background}) center / cover no-repeat`}} className={cs.frameThree}>
			<div className={cs.frameThree_container}>

				<div className={cs.container_text}>
					<div className={cs.container}>
						<FutureoFeSports/>
						<h1>Your one stop shop <br/> gaming needs!</h1>
						<p className={cs.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
					</div>
				</div>

				<div className={cs.cards_container}>
					{
						data?.framThree && Object.values(data.framThree).map(item => (
							<AnimationOnScroll key={item.title} animateIn="animate__bounceIn">
								<Cards text={item.value} title={item.title}/>
							</AnimationOnScroll>
						))
					}
				</div>

			</div>
		</div>
	);
};

export default FrameThree;