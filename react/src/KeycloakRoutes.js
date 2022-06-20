import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import Secret from "./Secret";
import PrivateRoute from "../helpers/PrivateRoute";
import Nav from "./Nav";

const KeycloakRoutes =  () =>{
    console.log('Keycloak:', keycloak);
    return(
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <Nav />
                <BrowserRouter>
                    <Routes>
                        <Route exact path = "/secret" element= {
                            <PrivateRoute>
                                <Secret />
                            </PrivateRoute>
                        } />
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    );
}

export default KeycloakRoutes;