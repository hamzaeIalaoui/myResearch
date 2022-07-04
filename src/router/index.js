import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from "../shared/layout";


// Public
import publicRoutes from './public';
import PublicRoute from './public/route';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Layout>
                    {/* Public routes */}
                    {publicRoutes.map((item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            exact
                            render={() => (
                                <PublicRoute
                                    title={item.title}
                                    component={item.component}
                                    route={item.path}
                                />
                            )}
                        />
                    ))}
                </Layout>
            </Switch>
        </Router>
    );
}