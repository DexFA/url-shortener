import Image from "next/image";
import Header from "../components/header/header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["500", "700"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={poppins.className}>
			<Header />
			<main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
		</div>
	);
}
