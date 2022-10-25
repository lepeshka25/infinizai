import React from 'react';
import {useGetDataBase} from "../../../hooks/useGetDataBase";
import Cards from './components/Cards';
import cs from './team.module.scss';
import Animation from "../../../UI/Animations";

const Team = () => {
	const {data} = useGetDataBase()
	const [dataBase , setDataBase] = React.useState(null)

	React.useEffect(() => {
		if(data?.gmailData){
			setDataBase(Object.values(data?.gmailData))
		}
	}, [data])

	return (
		<div className={cs.team}>
			<div className={cs.team_container}>

				<h1>Team</h1>

				{
					dataBase?.map((item , index) => (
						<Animation
							animation={index % 2 === 0 ? 'animate__bounceInLeft' : 'animate__bounceInRight'} key={index}
						>
							<Cards item={item}/>
						</Animation>
					))
				}

			</div>
		</div>
	);
};

export default Team;