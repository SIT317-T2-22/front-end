import { useLazyQuery } from "@apollo/client";
import React from "react";

import queries from "../settings/graphql-queries";

const LoginView = () => {
    const [getSignIn, signInResult] = useLazyQuery(queries.signIn);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    React.useEffect(() => {
        if(signInResult){
            if(!signInResult.loading)
            {
                if(signInResult.error) console.error(signInResult.error)
                else if (signInResult.data) {
                    console.log(signInResult.data.signIn)
                    setIsSignedIn(signInResult.data.signIn)
                }
            }
            console.log(signInResult);
            // TODO:
            // SetContextAuthenticated(true);
        }
    }, [signInResult])
    
    
    return (
        <div>
            <div>LoginView</div>
            <button onClick={() => getSignIn({variables:{email: "markblashki1@gmail.com", password: "Password1"}})}>Login</button>
            <br />
            {isSignedIn ? "SIGNED IN" : "SIGNED OUT"}
        </div>
    );
};

export default LoginView;
