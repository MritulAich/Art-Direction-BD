import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="loading-spinner">Loading</div>
    }
    if(user){
        return children;
    }

    return (
        <Navigate to='/login' state={{from: location}} replace/>
    );
};

export default PrivateRoute;