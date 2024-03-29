import React from "react";
import TemplateLayout from "../templates/Layout";
import Link from "next/link";
import {
	SiBootstrap,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiNodedotjs,
} from "react-icons/si";
import CloudinaryImage from "../components/CloudinaryImage/View";

const stacks = [
	{
		id: "nextjs",
		icon: SiNextdotjs,
	},
	{
		id: "react",
		icon: SiReact,
	},
	{
		id: "typescript",
		icon: SiTypescript,
	},
	{
		id: "javascript",
		icon: SiJavascript,
	},
	{
		id: "nodejs",
		icon: SiNodedotjs,
	},
	{
		id: "tailwind",
		icon: SiTailwindcss,
	},
	{
		id: "bootstrap",
		icon: SiBootstrap,
	},
	{
		id: "sass",
		icon: SiSass,
	},
];

const AboutPage = () => {
	return (
		<TemplateLayout
			pageTitle="About"
			description="Albert is a Frontend Engineer working with React ecosystems to build a cool stuff in a web platform"
		>
			<section className="pt-[24px] lg:pt-0">
				<main className="layout flex flex-col-reverse items-start justify-center sm:flex-row sm:items-center sm:justify-start">
					<div className="w-full sm:w-3/5 md:w-3/5 lg:w-3/5 sm:mr-6">
						<article className="mb-6">
							<h1 className="text-primary-200 dark:text-txt-200 text-2xl sm:text-4xl font-semibold mb-1 md:mb-4">
								About
							</h1>
							<h1 className="text-accent text-2xl sm:text-4xl font-semibold mb-3 fade-in">
								Albert Manuel Simbolon
							</h1>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								Hi! You can call me Albert, I&rsquo;m a Software Engineer who
								loves to creating a cool stuff thru coding and learn new things
								as much as possible.
							</p>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								I have been working as Software Engineer focusing on Frontend
								Development for 2 years in several industries includes
								e-commerce, startup, and software house. Since my first time job
								at 2021, I found my self enjoyed working with cross-function in
								a team and also individual work to solve the problem and making
								real impact.
							</p>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								Outside of my work, I enjoyed my free time to watch a movie
								(preferred action and horror genre), visit a coffee shop,
								explore places that I found interesting, and read a book (mostly
								self improvement related).
							</p>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								Beside that, in order to improve my skills and keep up-to-date,
								I also use my free time to take an online courses from udemy
								and/or watching youtube videos that related with programming and
								computer science in general.
							</p>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								In this website, I will share my thoughts, stories, and things
								that I have learned in some{" "}
								<Link href="/blog" className="text-accent">
									blog posts
								</Link>
								.
							</p>

							<p className="text-primary-200 dark:text-txt-200 font-light leading-relaxed mb-3">
								Yuppp, That&rsquo;s short about me! If you want to know more
								about me, feel free to connect and contact through my linkedin.
								I&rsquo;m always open to new opportunity and new friends.
							</p>

							<h3 className="text-primary-200 dark:text-txt-200 text-lg font-medium mb-4">
								Experienced and familiar with these technologies:
							</h3>
							<figure>
								<div className="flex flex-wrap gap-3 sm:gap-4">
									{stacks.map((tech) => (
										<tech.icon
											key={tech.id}
											className="w-10 h-10 fill-primary-100 dark:fill-txt-200"
										/>
									))}
								</div>
							</figure>
						</article>
					</div>

					<div className="w-full sm:w-2/8 md:w-2/6 lg:w-2/6 mb-8 sm:mt-[-10%] md:mt-0">
						<CloudinaryImage
							className="rounded-full mx-auto border-accent border-[3px] w-3/5 xs:w-80 sm:w-full"
							publicId="albertmanuel/images/profile-albert_ecwqic"
							width={600}
							height={(600 * 3) / 3}
							aspect={{ width: 3, height: 3 }}
							alt="profile pict"
							mdx={false}
						/>
					</div>
				</main>
			</section>
		</TemplateLayout>
	);
};
export default AboutPage;
