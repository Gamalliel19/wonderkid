// Import Auth Library Modules from Clerk Authentication
import { ClerkProvider } from "@clerk/nextjs";

// Import css
import "@/styles/globals.css";

// Import Convex Provider
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Import Components
import Sidebar from "@/components/Sidebar";
import Menubar from "@/components/Menubar";
import Link from "next/link";

// Config Convex
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function App({ Component, pageProps }) {
	const items = [
		{
			name: "SCOUT",
			pathname: "/scout",
			disabled: false,
		},
		{
			name: "EVENTS",
			pathname: "/events",
			disabled: false,
		},
		{
			name: "PLAYER MARKED",
			pathname: "/player-marked",
			disabled: false,
		},
	];
	return (
		<ClerkProvider>
			<ConvexProvider client={convex}>
				<div className="flex h-screen">
					<aside className="hidden md:block md:w-[264px] border-r">
						<div className="border-b">
							<div className="flex h-16 items-center px-4">
								<Link href="/">
									<h1 className="font-bold">WONDERKID</h1>
								</Link>
							</div>
						</div>
						<Sidebar items={items} />
					</aside>
					<div className="flex-1 flex flex-col">
						<div className="border-b">
							<div className="flex h-16 items-center px-4">
								<Menubar items={items} />
							</div>
						</div>
						<div className="flex-1 overflow-y-scroll">
							<Component {...pageProps} />
						</div>
					</div>
				</div>
			</ConvexProvider>
		</ClerkProvider>
	);
}
