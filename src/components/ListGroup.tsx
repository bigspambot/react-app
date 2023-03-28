// import { Fragment } from "react";
// we could wrap the below in a div or fragment using the line above but can just use an empty tag
// only one element can be returned in react

// import { MouseEvent } from "react";

import { useState } from "react";

// or name ListGroupProps
interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	// items = [];

	// let selectedIndex = 0;
	// hook
	const [selectedIndex, setSelectedIndex] = useState(-1);
	// arr[0] // variable (selectedIndex)
	// arr[1] // updater function

	// const message = items.length === 0 ? <p>No items found</p> : null;
	// const getMessage = () => {
	// return items.length === 0 ? <p>No items found</p> : null;
	// }

	// event handler
	// const handleClick = (event: MouseEvent) => console.log(event);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
