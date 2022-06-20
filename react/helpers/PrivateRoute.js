import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({children}) =>{
    const { keycloak } = useKeycloak();
    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? children : nulll;
}

export default PrivateRoute;