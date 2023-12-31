"use client";

import { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
	children: ReactNode;
}

function ContextProvider({ children }: Props) {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsReady(true);
		}, 250);
	}, []);

	if (!isReady) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<span className="loader"></span>
			</div>
		);
	}

	return (
		<GlobalProvider>
			<Toaster />
			{children}
		</GlobalProvider>
	);
}

export default ContextProvider;
