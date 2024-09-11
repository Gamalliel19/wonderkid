import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
// import MobileNav from "./MobileNav";

export default function Menubar({ items }) {
	const pathname = usePathname();
	const HeaderTitle =
		pathname.split("/").at(-1).charAt(0).toUpperCase() +
		pathname.split("/").at(-1).slice(1);
	return (
		<nav className="min-h-[48px] w-full p-4">
			<div className="flex justify-between items-center">
				<h1 className="font-bold">{HeaderTitle}</h1>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
				{/* <div className="block lg:hidden">
					<MobileNav items={items} />
				</div> */}
			</div>
		</nav>
	);
}
