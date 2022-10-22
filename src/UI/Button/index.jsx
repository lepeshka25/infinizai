import React from 'react';
import cs from './button.module.scss'

const Button = ({value}) => {
	return (
		<React.Fragment>
			<button className={cs.btn}>{value}</button>
		</React.Fragment>
	);
};

export default Button;