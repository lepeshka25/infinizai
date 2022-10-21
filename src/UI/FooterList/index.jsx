import React from 'react';
import {useNavigate} from "react-router-dom";

const FooterList = ({cs , logo , list}) => {
	const navigate = useNavigate()
	return (
		<div className={cs.container}>
			<h2>{logo}</h2>
			<ul className={cs.list}>
				{
					list.map(item => (
						<li onClick={() => navigate(item.path)} className={cs.list_li} key={item.id}>
							{item.title}
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default FooterList;