// components/Intelliticks.js
"use client"
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat = () => {
	useEffect(() => {
		// Paste the Intelliticks script here
		(function (I, L, T, i, c, k, s) {
			if (I.iticks) return;
			I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] };
			var h = T.head || T.documentElement;
			var e = T.createElement(i);
			var l = I.location;
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
	}, []);

	return null;
};

export default Chat;
