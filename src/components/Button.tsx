import React from "react";

interface Props {
	children: string;
    // ? shows the value is optional
    color?: 'primary' | 'secondary' | 'danger';
	onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
	return (
		<button className={'btn btn-' + color} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
