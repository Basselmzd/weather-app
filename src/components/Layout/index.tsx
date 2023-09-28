import React, { useState } from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Home } from "../../pages/Home";
import { Side } from "../Side";


import "./index.css";

export default function Layout(): JSX.Element {
	const [ isVisible , SetVisible ] = useState (false)

	return ( <div className="main_layout">
		<Side isVisible={isVisible} SetVisible={SetVisible} />
		<div className="body__clz">
			<div className="header__clz">
				<Header isVisible={isVisible} />
			</div>
			<div className="home__clz">
				<React.Suspense fallback="Loading...">
					<Home />
				</React.Suspense>
			</div>
			<div className="footer__clz">
				<Footer />
			</div>
		</div>
		</div>
	);
}
