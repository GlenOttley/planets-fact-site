import { useState } from "react";
import sourceIcon from "../images/icon-source.svg";

function PlanetDetail({ planet, breakPoints }) {

	const [active, setActive] = useState("overview");

	return (
		<div className="planet">
			{breakPoints.mobile ?
			<div className="planet__menu">
				<div className="container">
					<div className="row spaced">
						<h4 
						className="menu__item" 
						style={{
							filter: active === "overview" ? "none" : null,
							borderBottom: active === "overview" ? `4px solid ${planet.color}` : null,
							color: active === "overview" ? "white" : null
						}}
						onClick={
							() => { setActive("overview") }
						}>
						OVERVIEW</h4>
						<h4 
						className="menu__item" 
						style={{
							filter: active === "structure" ? "none" : null,
							borderBottom: active === "structure" ? `4px solid ${planet.color}` : null,
							color: active === "structure" ? "white" : null
						}}
						onClick={
							() => { setActive("structure") }
						}>
						STRUCTURE</h4>
						<h4 
						className="menu__item" 
						style={{
							filter: active === "surface" ? "none" : null,
							borderBottom: active === "surface" ? `4px solid ${planet.color}` : null,
							color: active === "surface" ? "white" : null
						}}
						onClick={
							() => { setActive("surface") }
						}>
						SURFACE</h4>
					</div>
				</div>
			</div>
			: null
			}

			<div className="split">
				<div className="split__left">
					<div className="image__outer">
						<div className="image__inner">
							<img 
							className="image__main"
							alt={planet.name}
							src={
								active === "structure"
								? planet.structureImg
								: planet.overviewImg
							}
							/>
							{active === "surface" && 
							<img
							className="image__surface"
							alt={planet.name}
							src={planet.surfaceImg}
							/>
							}
						</div>
					</div>
				</div>

				<div className="split__right">
					<div className="info container">

						<div className="info__left">
							<h2 className="info__name">{planet.name}</h2>
							<p className="info__description">
								{active === "overview" ? planet.overview
								: active === "structure" ? planet.internalStructure
								: planet.surfaceGeology}
							</p>
							<p className="info__source">Source :&nbsp;
								<a 
								className="info__link"
								target="_blank"
								rel="noopener noreferrer"
								href={
									active === "overview" ? planet.overviewSource
									: active === "structure" ? planet.internalStructureSource
									: planet.surfaceGeologySource
								}>Wikipedia&nbsp;
									<object 
									className="source-icon"
									type="image/svg+xml" 
									data={sourceIcon}>
									source icon
									</object>
								</a>
							</p>
						</div>

						{breakPoints.tablet || breakPoints.desktop ? 
						<div className="info__right">

							<div 
							className="box"
							onClick={
								() => { setActive("overview") }
							}
							style={{
								backgroundColor: active === "overview" ? planet.color : null,
							}}>
								<p className="box__text box__text--num">01&nbsp;&nbsp;
									<span className="box__text">OVERVIEW</span>
								</p>
							</div>

							<div 
							className="box"
							onClick={
								() => { setActive("structure") }
							}
							style={{
								backgroundColor: active === "structure" ? planet.color : null,
							}}>
								<p className="box__text box__text--num">02&nbsp;&nbsp;
									<span className="box__text">INTERNAL STRUCTURE</span>
								</p>
							</div>

							<div 
							className="box"
							onClick={
								() => { setActive("surface") }
							}
							style={{
								backgroundColor: active === "surface" ? planet.color : null,
							}}>
								<p className="box__text box__text--num">03&nbsp;&nbsp;
									<span className="box__text">SURFACE GEOLOGY</span>
								</p>
							</div>

						</div>
						: null
						}

					</div>
				</div>
			</div>

			<div className="stats container">
				<div className="stat__box">
					<p className="stat__heading">ROTATION TIME</p>
					<h2 className="stat__info">{planet.rotationTime}</h2>
				</div>

				<div className="stat__box">
					<p className="stat__heading">REVOLUTION TIME</p>
					<h2 className="stat__info">{planet.revolutionTime}</h2>
				</div>

				<div className="stat__box">
					<p className="stat__heading">RADIUS</p>
					<h2 className="stat__info">{planet.radius}</h2>
				</div>

				<div className="stat__box">
					<p className="stat__heading">AVERAGE TEMP</p>
					<h2 className="stat__info">{planet.averageTemp}</h2>
				</div>
			</div>
			
		</div>
	)
}

export default PlanetDetail