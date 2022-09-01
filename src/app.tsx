import React from "react";
import "./app.css";
import { Header } from "./components/header";
import { Page } from "./components/page";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import LandingView from "./views/landing";
import SignUpView from "./views/signup";
import LoginView from "./views/login";
import SubscriptionView from "./views/subscription";
import NotFoundView from "./views/notfound";

const PageWrapper = styled(Page)`
    height: 100vh;
`;

const App = () => {
    return (
        <PageWrapper>
            <Page>
                <Routes>
                    <Route path="/" element={<LandingView />} />
                    <Route path="/signup" element={<SignUpView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route
                        path="/subscription"
                        element={<SubscriptionView />}
                    />
                    <Route path="*" element={<NotFoundView />} />
                </Routes>
            </Page>
        </PageWrapper>
    );
};

export default App;
