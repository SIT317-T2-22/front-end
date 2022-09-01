import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundView = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>Page not found, sorry!</div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default NotFoundView;
