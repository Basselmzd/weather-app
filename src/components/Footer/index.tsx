import React from "react";

import "./index.css";

export function Footer() {



    return (
			<footer
				className="my-selection-footer global-footer__clz">
				<div className="footer-text__clz justify-content-start">
					<div className="mt-4 mx-1 mb-md-4 px-4 text-footer__clz ">
						saber® {new Date().getFullYear()}
					</div>
				</div>
			</footer>
		);
}
