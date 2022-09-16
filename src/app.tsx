import React from "react";
import "./app.css";
import { Header } from "./components/header";
import { Page } from "./components/page";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import LandingView from "./views/landing";
import CreateAccountView from "./views/createaccount";
import SignInView from "./views/signin";
import SuburbView from "./views/suburb";
import CalculateView from "./views/calculate";
import NotFoundView from "./views/notfound";
import ForgotPasswordView from "./views/forgotpassword";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const PageWrapper = styled(Page)`
    height: 100vh;
`;

const App = () => {
    return (
        <PageWrapper>
            <Page>
                <Routes>
                    <Route path="/" element={<LandingView />} />
                    <Route path="/calculate" element={<CalculateView />} />
                    <Route path="/suburbs" element={<SuburbView />} />
                    <Route
                        path="/createaccount"
                        element={<CreateAccountView />}
                    />
                    <Route path="/signin" element={<SignInView />} />
                    <Route
                        path="/forgotpassword"
                        element={<ForgotPasswordView />}
                    />
                    <Route path="*" element={<NotFoundView />} />
                </Routes>
            </Page>
        </PageWrapper>
    );
};

export default App;
