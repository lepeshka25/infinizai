import React from 'react';
import cs from './cards.module.scss'

const Cards = ({item}) => {
	return (
		<div className={cs.card}>
			<p>{item}</p>
		</div>
	);
};

export default Cards;