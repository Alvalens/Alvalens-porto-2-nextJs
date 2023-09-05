"use client"
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
	return (
		<>
			<Sidebar />
			{children}
		</>
	);
}
