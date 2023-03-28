import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	// a function with no params that returns void
	onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
	return (
		<div className="alert alert-primary alert-dissmissible">
			{children}
			<button
				type="button"
				className="btn-close"
				onClick={onClose}
				data-bs-dismiss="btn-alert"
			></button>
		</div>
	);
};

export default Alert;
