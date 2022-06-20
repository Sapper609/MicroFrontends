import React from "react";
import keycloak from "./keycloak";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () =>{
  const { isKeycloak, initialized } = useKeycloak(); 
    return (
        <div>
          <div>
            <ul>
              <li>
                <a className="welcome" href="/react">Welcome</a>
              </li>
              <li>
                <a className="secret" href="/secret">Secret</a>
              </li>
            </ul>
          </div>
          <div>
            { !isKeycloak.authenticated && (
              <button type = "button" 
                      onClick ={ ()=> keycloak.login().then(
                        console.log('hey')
                      ).catch(
                        console.log('cathed')
                      )} >
                      Login
              </button>
            )}
            { isKeycloak.authenticated && (
              <button type = "button"
                      onClick ={ ()=> keycloak.logout().then(
                        console.log("success")
                      ).catch(
                        console.log("failed not really")
                      )} >
                      Logout</button>
            )}
          </div>
        </div>
    )
}

export default Nav;