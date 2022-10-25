import React from 'react';
import {useGetDataBase} from "../../../../../hooks/useGetDataBase";
import Cards from "./components/Cards";
import FutureoFeSports from "../../../../../UI/FUTURE OF eSPORTS/FUTUREOFeSPORTS";
import Button from "../../../../../UI/Button";
import cs from './frame_seven.module.scss'
import Animation from "../../../../../UI/Animations";

const FrameSeven = () => {
	const {data , setUpdate} = useGetDataBase()

	return (
		<div className={cs.frame_seven}>

			<div className={cs.frame_seven_header}>
				<div className={cs.container_text}>
					<FutureoFeSports/>
					<h1 className={cs.title}>Latest News & <br/> Articles</h1>
				</div>
				<div className={cs.container_btn}>
					<Button value={'Read More'}/>
				</div>
			</div>

			<div className={cs.frame_seven_body}>

				<Animation className={cs.animation_left} animation={'animate__backInLeft'}>
					<Cards
						cs={cs}
						text={'Esports Group teams up with the Indianapolis Colts'}
						title={'April 2, 2021'}
						image={data?.frame_seven?.big_image?.item}
					/>
				</Animation>

				<Animation className={cs.animation_right} animation={'animate__backInRight'}>
						{
							data && Object.values(data?.frame_seven?.small_image)?.map((item, index) => (
								<Cards
									cs={cs}
									key={index}
									text={item?.text}
									title={item?.title}
									image={item?.url}
								/>
							))
						}
				</Animation>

			</div>
		</div>
	);
};

export default FrameSeven;