import React from 'react';
import {useGetDataBase} from "../../../hooks/useGetDataBase";
import Cards from './components/Cards';
import cs from './team.module.scss';

const Team = () => {
	const data = useGetDataBase()
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
						<Cards item={item} key={index}/>
					))
				}
			</div>
		</div>
	);
};

export default Team;