import React from "react";
import Button from "../Button";
import Image from "next/image";
import HeroImage from "../../../public/illustration-working.svg";

const Banner = () => {
	return (
		<div>
			<div className="flex max-w-screen-xl h-[70%] m-auto py-24 items-center">
				<div className="grid max-w-xl">
					<h1 className="font-[700] text-7xl">More than just shorten links</h1>
					<p className="max-w-md mt-4">
						Build your brand&apos;s recognitino and get detailed insights on how
						your links are performing.
					</p>
					<div className="mt-4">
						<Button buttonText="Get started" />
					</div>
				</div>
			</div>
			<Image src={HeroImage} alt="Picture of the author" />
		</div>
	);
};

export default Banner;
