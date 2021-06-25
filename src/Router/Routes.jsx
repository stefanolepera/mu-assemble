import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Scenarios } from "../Layout";
import { Home } from "../Pages";
import DataContext from '../Context/DataContext';

const Routes = () => {
	const [context, setContext] = useState({
		config: null,
		filters: [],
		filtered: null,
		thumbName: 'Default'
	});

    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch('./config.json');
                const resp = await req.json();
                setContext({ config: resp });
            } catch (err) {
                console.error(err);
            }
        }

        getData();
	}, []);
	
	if (context.config === null) {
        return <div>Loading...</div>
    }

	return (
		<DataContext.Provider value={{...context, setContext: (data) => setContext({...context, ...data})}}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path={"/scenarios"}>
					<Scenarios />
				</Route>
			</Switch>
		</DataContext.Provider>
	);
};

export default Routes;
