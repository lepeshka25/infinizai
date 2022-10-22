import React from 'react';
import frame2_text from '../../../../../assets/frame2_text.svg'
import {useGetDataBase} from "../../../../../hooks/useGetDataBase";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import cs from './frame_two.module.scss';

const FrameTwo = () => {
	const data = useGetDataBase()

	return (
		<div className={cs.frame_two}>
			<div className={cs.frame_two_container}>
				<img src={frame2_text} alt=""/>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>

				<div className={cs.container_cards}>
					{
						data?.imageData?.map(item => (
							<AnimationOnScroll key={item} className={cs.cards} animateIn="animate__swing">
								<img src={item} alt=""/>
							</AnimationOnScroll>
						))
					}
				</div >

			</div>
		</div>
	);
};

export default FrameTwo;