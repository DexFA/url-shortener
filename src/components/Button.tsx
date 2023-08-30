import Link from "next/link";
import React from "react";

const Button = (props) => {
	return (
		<div>
			<button className="text-white bg-cyan hover:bg-cyanHover py-2 px-4 rounded-full">
				<Link href="#">{props.buttonText}</Link>
			</button>
		</div>
	);
};

export default Button;
