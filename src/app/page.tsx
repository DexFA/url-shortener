import Header from "../components/header/header";
import { Poppins } from "next/font/google";
import Banner from "@/components/banner/Banner";

const poppins = Poppins({
	weight: ["500", "700"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={poppins.className}>
			<Header />
			<main>
				<Banner />
			</main>
		</div>
	);
}
