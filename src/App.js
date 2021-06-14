import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import planetData from "./planetData";

import Nav from "./components/Nav";
import PlanetDetail from "./components/PlanetDetail";


function App() {

	const breakPoints = {
		mobile: useMediaQuery("(max-width: 767px)"),
		tablet: useMediaQuery("(min-width: 768px) and (max-width: 1199px)"),
		desktop: useMediaQuery("(min-width: 1200px)")
	}

  return (
    <Router basename={process.env.PUBLIC_URL}>
    	<Nav 
    	breakPoints={breakPoints}
    	planetData={planetData}
    	/>	

    	<Switch>
    		<Route exact path="/">
    			<Redirect to="/Earth" />
    		</Route>
    		{planetData.map((planet) => 
	    		<Route
	    		key={planet.name}
	    		exact path={planet.path}
	    		render={() => (

	    			<PlanetDetail
	    			key={planet.name}
	    			planet={planet}
	    			breakPoints={breakPoints} 
	    			/>
	    			)}

	    		/>
	    	)}
    	</Switch>

    </Router>
  );
}

export default App;
