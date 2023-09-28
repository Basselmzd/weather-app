import React from "react";


import "./index.css";
import { Recherche } from "../Recherche";

interface VisibleProps {
	isVisible: boolean
}

export function Header(props : VisibleProps) {
    return (
			<div className="header-container__clz">
				{!props.isVisible &&
				<h5 className="text-header-container__clz" >
					  <a>  Weather-App </a>
				
					<Recherche />
				</h5>
				}
			</div>
		);
}
