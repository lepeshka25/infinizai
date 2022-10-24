import React from 'react';

const Cards = ({cs, image, title, text, fontTitle, fontText}) => {
	return (
		<div className={cs.cards}>
			<img src={image} alt=""/>
			<div className={cs.container}>
				<p style={{fontSize: fontTitle && fontTitle}} className={cs.title}>{title}</p>
				<p style={{fontSize: fontText && fontText}} className={cs.text}>{text}</p>
			</div>
		</div>
	);
};

export default Cards;