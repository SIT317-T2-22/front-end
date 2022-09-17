import React from "react";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    gql,
} from "@apollo/client";
import "./app.css";
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
    const typeDefs = gql`
        extend type Query {
            isLoggedIn: Boolean!
            cartItems: [Launch]!
        }

        extend type Launch {
            isInCart: Boolean!
        }

        extend type Mutation {
            addOrRemoveFromCart(id: ID!): [Launch]
        }
    `;

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.REACT_APP_API_URL ?? "http://localhost:4001",
        defaultOptions: {
            watchQuery: {
                fetchPolicy: "no-cache", // disable cache
            },
        },
        typeDefs,
    });

    return (
        <ApolloProvider client={client}>
            <PageWrapper>
                <Page>
                    <Routes>
                        <Route path="/" element={<LandingView />} />
                        <Route path="/calculate" element={<CalculateView />} />
                        <Route path="/suburbs" element={<SuburbView />} />
                        <Route path="/signup" element={<SignUpView />} />
                        <Route path="/login" element={<LoginView />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </Page>
            </PageWrapper>
        </ApolloProvider>
    );
};

export default App;
