// components/Intelliticks.js
"use client"
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat = () => {
	useEffect(() => {
		const loadChat = () => {
			if (window.iticks) return;
			(function (I, L, T, i, c, k, s) {
				if (I.iticks) return;
				I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] };
				var h = T.head || T.documentElement;
				var e = T.createElement(i);
				e.async = true;
				e.src = (L || c) + "/client/inject-v2.min.js";
				h.insertBefore(e, h.firstChild);
				I.iticks.call = function (a, b) {
					I.iticks.queue.push([a, b]);
				};
			})(
				window,
				"https://cdn-v1.intelliticks.com/prod/common",
				document,
				"script",
				"https://app.intelliticks.com",
				"u3cWw3sDpdKexqXCY_c",
				{}
			);
		};

		// Defer until browser is idle, or after 5s fallback
		if (typeof requestIdleCallback !== "undefined") {
			const id = requestIdleCallback(loadChat, { timeout: 5000 });
			return () => cancelIdleCallback(id);
		} else {
			const timer = setTimeout(loadChat, 3000);
			return () => clearTimeout(timer);
		}
	}, []);

	return null;
};

export default Chat;
