import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex-1 max-w-screen-xl w-full m-auto py-8 align-middle">
			<div className="">
				<div className="flex justify-between">
					<nav className="flex items-center">
						<span className="font-bold text-3xl">Shortly</span>
						<ul className="flex gap-8 ml-12">
							<li>
								<Link href="#">Features</Link>
							</li>
							<li>
								<Link href="#">Pricing</Link>
							</li>
							<li>
								<Link href="#">Resources</Link>
							</li>
						</ul>
					</nav>
					<div className="flex gap-8 items-center justify-end">
						<Link href="#">Login</Link>
						<button className="text-white bg-cyan py-2 px-4 rounded-full">
							<Link href="#">Sign Up</Link>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;