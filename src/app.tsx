import React from "react";
import "./app.css";
import { Page } from "./components/page";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import LandingView from "./views/landing";
import SignUpView from "./views/signup";
import LoginView from "./views/login";
import SuburbView from "./views/suburb";
import CalculateView from "./views/calculate";
import NotFoundView from "./views/notfound";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    gql,
} from "@apollo/client";

const PageWrapper = styled(Page)`
    height: 100vh;
`;

const App = () => {
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
