import { Separator } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";
export default function Sidebar({ items }) {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<>
			<div className="border-t border-b p-4 py-6 space-y-2">
				{items &&
					items.map((item, i) => (
						<Button
							key={i}
							disabled={item?.disabled}
							onClick={() => {
								router.push(item.pathname);
							}}
							variant={pathname === item.pathname ? "default" : "outline"}
							className="flex gap-2 w-full justify-start">
							{item.icon} {item.name}
						</Button>
					))}
			</div>

			<div className="border-b p-4 py-6 space-y-2">
				<h2>Filter:</h2>
				<Dropdown />
				<Dropdown />
				<Dropdown />
			</div>
			<div className="p-4 py-6 space-y-2">
				<p className="from-neutral-600">WONDERKID © 2022</p>
			</div>
		</>
	);
}
