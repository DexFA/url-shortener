import React from "react";
import Link from "next/link";
import Button from "../Button";

const Header = () => {
	return (
		<header className="flex-1 max-w-screen-xl w-full m-auto py-8 align-middle">
			<div className="">
				<div className="flex justify-between">
					<nav className="flex items-center">
						<span className="font-bold text-3xl">Shortly</span>
						<ul className="flex gap-8 ml-12 text-Gray ">
							<li className="hover:text-VeryDarkBlue">
								<Link href="#">Features</Link>
							</li>
							<li className="hover:text-VeryDarkBlue">
								<Link href="#">Pricing</Link>
							</li>
							<li className="hover:text-VeryDarkBlue">
								<Link href="#">Resources</Link>
							</li>
						</ul>
					</nav>
					<div className="flex gap-8 items-center justify-end">
						<Link href="#" className="text-Gray hover:text-VeryDarkViolet">
							Login
						</Link>
						<Button buttonText="Sign Up" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
