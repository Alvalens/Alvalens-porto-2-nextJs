import jsonData from "@/json/data.json";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = jsonData.Projects.find((item) => item.slug === slug);

	if (!project) {
		return { title: "Not Found | Alvalens" };
	}

	return {
		title: `${project.title} | Alvalens`,
		description: project.desc[0]?.slice(0, 160),
	};
}

export default function Layout({ children }) {
	return children;
}
