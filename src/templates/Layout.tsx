import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Head from "next/head";
import React, { ReactNode } from "react";

const TemplateLayout = ({
	children,
	pageTitle,
}: {
	children: ReactNode;
	pageTitle: string;
}) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta
					content="Hi I'm Albert Manuel, Frontend Engineer"
					name="description"
				/>
			</Head>
			<Navbar />
			<div className="px-4 mt-20 lg:px-0 bg-white dark:bg-zinc-900">
				{children}
			</div>
			<Footer />
		</>
	);
};

export default TemplateLayout;
