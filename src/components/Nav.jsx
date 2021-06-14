/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "../images/icon-hamburger.svg";
import arrowIcon from "../images/icon-chevron.svg";

function Nav({ breakPoints, planetData }) {

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		showMenu === false
		? setShowMenu(true)
		: setShowMenu(false)
	}

	return (
		<>
		<nav className="nav">
			<div className="container">
				<div className="nav__inner row spaced">

					<h2 className="nav__heading">THE PLANETS</h2>

					{breakPoints.mobile ?
						<img
						className="nav__hamburger"
						src={hamburgerIcon}
						alt="menu"
						onClick={toggleMenu}
						/>
						:
						<div className="row nav__list">
						{planetData.map((planet) => 
							<Link 
			    		className="link" 
			    		to={planet.path}
			    		key={planet.name}
			    		css={css`
				  			&:hover {
				  				border-bottom: 3px solid ${planet.color};
				  			}
				  			`}
			    		>
			    			<h4 className="nav__item">{planet.name}</h4>
			    		</Link>
						)}
							
						</div>
					}

				</div>
			</div>
		</nav> 

		{showMenu &&
		<div className="mobile-menu">
			<div className="container">
				{planetData.map((planet) => 
				<Link 
	  		className="link mobile-menu__link" 
	  		to={planet.path}
	  		key={planet.name}
	  		onClick={toggleMenu}
	  		css={css`
	  			&:hover {
	  				border-bottom: 3px solid ${planet.color};
	  				padding-bottom: 14px;
	  			}
	  			`}
	  		>
	  			<div 
	  			className="mobile-menu__circle"
	  			style={{
	  				backgroundColor: planet.color
	  			}}
	  			>
	  			</div>
	  			<h3 className="mobile-menu__heading">{planet.name}</h3>
	  			<img 
	  			className="mobile-menu__arrow"
	  			src={arrowIcon}
	  			alt=""
	  			/>
	  		</Link>
				)}
			</div>
		</div>
		}
		</>
	)
}

export default Nav