import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);
    // return <>{user.username}</>;
    // if(!user) return <div>Please Login</div>
    // return <div>Welcome, {user.username}</div>
    return (
        <div className="profile">
            {!user && <div>Please Login</div>}
            {user && <div>Welcome, {user.username}</div>}
        </div>
    );
};

export default Profile;
