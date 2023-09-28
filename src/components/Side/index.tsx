import React  , {useState} from "react";
import { AiOutlineUnorderedList , AiFillCloseSquare } from "react-icons/ai" ;

import "./index.css";

interface VisibleProps {
	isVisible: boolean,
	SetVisible: Function
}

export function Side(props : VisibleProps) {

	function tgbutton() {
		props.SetVisible( ! props.isVisible )
	}
	
    return ( 
		<div className="side">
			{
				! props.isVisible &&
			
		<div> 
			<button onClick={tgbutton}>
			<AiOutlineUnorderedList />
			</button>
		</div>
}

			{props.isVisible && 
			<div className="side-container__clz">
					
			
		<div> 
			<button onClick={tgbutton}>
			<AiFillCloseSquare />
			</button>
		</div>

				<div>
					<ul>
					<li >  <a>Home </a>
						 </li>
						 <li> <a>
							About 
							</a>
						 </li>
						 <li> <a>
							Settings
							</a>
						 </li>
						 </ul>
				</div>
			</div> }


		</div>
		);
}
