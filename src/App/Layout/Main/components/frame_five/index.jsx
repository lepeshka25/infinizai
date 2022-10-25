import React from 'react';
import Slider from "react-slick";
import FutureoFeSports from "../../../../../UI/FUTURE OF eSPORTS/FUTUREOFeSPORTS";
import Animation from "../../../../../UI/Animations";
import {useGetDataBase} from "../../../../../hooks/useGetDataBase";
import frameFive from '../../../../../assets/frame_five_image.svg'
import cs from './frame_five.module.scss'

const FrameFive = () => {
	const [dataBase, setDataBase] = React.useState(null)
	const {data , setUpdate} = useGetDataBase()


	React.useEffect(() => {
		setDataBase(data && Object.values(data?.frameFiveImage).filter(item => item !== 'key'))
	}, [data])

	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
	};

	(function (){
		if(window.innerWidth < 374){
			settings = {...settings , slidesToShow: 2, slidesToScroll: 1,}
		}
		if(window.innerWidth >= 375 & window.innerWidth <= 425){
			settings = {...settings , slidesToShow: 2, slidesToScroll: 1,}
		}
		if(window.innerWidth >= 425 & window.innerWidth <= 600){
			settings = {...settings , slidesToShow: 2, slidesToScroll: 1,}
		}
		if(window.innerWidth >= 600){
			settings = {...settings , slidesToShow: 3, slidesToScroll: 1,}
		}
	})()

	return (
		<div className={cs.frameFive}>
			<div className={cs.frameFive_container}>
				<div className={cs.left_container}>
					<img src={frameFive} alt=""/>
				</div>

				<div className={cs.right_container}>
					<FutureoFeSports/>

					<div className={cs.title_container}>
						<h1>Customize your</h1>
						<h1>Own Character</h1>
					</div>

					<p className={cs.text}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
					</p>

					<div className={cs.carousel_container}>
						<Slider className={cs.carousel} {...settings}>
							{
								dataBase?.map(item => (
									<Animation animation={'animate__backInRight'} key={item} className={cs.container_image}>
										<img src={item} alt=""/>
									</Animation>
								))
							}
						</Slider>
					</div>

				</div>
			</div>
		</div>
	);
};

export default FrameFive;