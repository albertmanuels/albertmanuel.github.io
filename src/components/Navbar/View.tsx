import Link from "next/link";
import { useRouter } from "next/router";
import { PAGE_LIST } from "./View.constants";
import { useTheme } from "next-themes";
import ThemeSlider from "../ThemeSlider/View";

const Navbar = () => {
	const { asPath } = useRouter();

	return (
		<header
			className={`w-full fixed top-0 px-4 lg:px-0 bg-white dark:bg-zinc-900 z-10`}
		>
			<nav className="w-full max-w-[64rem] flex flex-row justify-between items-center mx-auto h-20">
				<div>
					<Link href="/" className="text-lg text-accent font-semibold">
						AMS
					</Link>
				</div>
				<div className="flex flex-row gap-5 items-center">
					<ul className="flex flex-row list-style-none m-0 p-0 gap-6">
						{PAGE_LIST.map((page, idx) => (
							<li
								key={idx}
								className={`
                ${
									asPath.includes(page.path)
										? "border border-x-0 border-t-0 border-b-2 border-b-accent pb-[2px] text-primary-200 dark:text-txt-300"
										: "border border-x-0 border-t-0 border-b-2 border-b-transparent pb-[2px] text-primary-200 dark:text-txt-300 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2 hover:border-b-accent hover:pb-[2px] hover:delay-150"
								} 
              
                font-medium
                
                `}
							>
								<Link href={page.path}>{page.name}</Link>
							</li>
						))}
					</ul>
					<ThemeSlider />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
