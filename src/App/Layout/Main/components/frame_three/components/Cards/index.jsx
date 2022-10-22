import React from 'react';
import icon from '../../../../../../../assets/frame3_icon_card.svg'
import cs from './Cards.module.scss'

const Cards = ({title , text}) => {
	return (
		<div className={cs.cards}>
			<img src={icon} alt=""/>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
};

export default Cards;