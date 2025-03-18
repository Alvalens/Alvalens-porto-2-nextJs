"use client";

import dynamic from "next/dynamic";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});

export default function ClientTopProgressBar() {
	return <TopProgressBar />;
}
