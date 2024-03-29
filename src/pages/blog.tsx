import TemplateLayout from "../templates/Layout";
import { BlogFrontmatter } from "./api/types";
import { getAllFilesFrontmatter } from "./api/api";
import BlogCard from "../components/BlogCard/View";

const sortData = (data: BlogFrontmatter[]) => {
	return data.sort(
		(a: { date: string }, b: { date: string }) =>
			Number(new Date(b.date)) - Number(new Date(a.date))
	);
};

export default function BlogPage({ posts }: { posts: BlogFrontmatter[] }) {
	return (
		<TemplateLayout
			pageTitle="Blog"
			description="So, here is my digital garden where I share my thoughts, knowledge and
    things that I have learned."
		>
			<section className="layout pt-[24px]">
				<h4 className="mb-5 text-md font-medium text-primary-200 dark:text-txt-200">
					So, here is my digital garden where I share my thoughts, knowledge and
					things that I have learned.
				</h4>
				{posts.length === 0 ? (
					<div className="flex w-full align-middle justify-center">
						<p className="text-xl text-primary-200 dark:text-txt-200">
							Sorry, no articles are currently posted
						</p>
					</div>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
						{sortData(posts)?.map((post) => (
							<BlogCard key={post.slug} post={post} />
						))}
					</div>
				)}
			</section>
		</TemplateLayout>
	);
}

export async function getStaticProps() {
	const files: BlogFrontmatter[] = await getAllFilesFrontmatter("blog");

	const allFiles = JSON.parse(JSON.stringify(files));
	const posts = allFiles.sort(
		(postA: { date: string }, postB: { date: string }) =>
			Number(new Date(postB.date)) - Number(new Date(postA.date))
	);

	return {
		props: {
			posts,
		},
	};
}
