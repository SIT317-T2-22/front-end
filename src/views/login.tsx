import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

import queries from "../settings/graphql-queries";

import styled from "styled-components";
import {
    OuterContainer,
    OuterForm,
    FormInner,
    Header,
    Body,
    Button,
    SubText,
    InputEl,
    ForgotPasswordLink,
} from "../styles/CreateAccountElements";
import { ErrorMessage } from "../styles/ErrorMessageElements";
import Logo from "../assets/logo-coloured.png";
import MailLock from "../assets/mail-lock.png";
import PassLock from "../assets/lock.png";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
    let navigate = useNavigate();
    const [getSignIn, signInResult] = useLazyQuery(queries.signIn);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    React.useEffect(() => {
        if (signInResult) {
            if (!signInResult.loading) {
                if (signInResult.error) console.error(signInResult.error);
                else if (signInResult.data) {
                    console.log(signInResult.data.signIn);
                    setIsSignedIn(signInResult.data.signIn);
                }
            }
            console.log(signInResult);
            // TODO:
            // SetContextAuthenticated(true);
        }
    }, [signInResult]);

    const [formState, setFormState] = useState(false);
    const [errors, setErrors] = useState<{
        password?: string;
        email?: string;
    }>({});
    const [inputs, setInputs] = useState<{
        password?: string;
        email?: string;
    }>({});

    const useForm = (initialValues: any) => {
        const handleSubmit = (e: any) => {
            if (e) {
                e.preventDefault();
            }
            console.log(inputs);
        };
        const handleInputChange = (e: any) => {
            e.persist();
            setInputs((inputs) => ({
                ...inputs,
                [e.target.name]: e.target.value,
            }));
        };
        return {
            handleSubmit,
            handleInputChange,
            inputs,
        };
    };

    const validate = (inputs: any) => {
        const cond = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            inputs.email
        );

        // email Errors
        type errors = {
            email?: string;
            password?: string;
        };

        const objErrors: errors = {};
        if (!inputs.email) {
            objErrors.email = "Hold on, a email is required";
        } else if (inputs.email.match(cond)) {
            objErrors.email = "Hold on, that email doesn't look valid";
        }
        if (!inputs.password) {
            // password Errors
        }
        return errors;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const validationErrors = validate(inputs);
        const noErrors = Object.keys(validationErrors).length === 0;
        setErrors(validationErrors);
        if (noErrors) {
            // const data = { ...inputs };
            // await api.noemail.create(data);
            setFormState(true);
            console.log("Authenticated", inputs);
            handleReset();
        } else {
            console.log("errors try again", validationErrors);
        }
    };

    const handleReset = () => {
        setInputs(() => ({
            email: "",
            password: "",
        }));
    };

    const { handleInputChange } = useForm({
        email: "",
        password: "",
        validate,
    });

    return (
        <>
            <OuterContainer>
                <OuterForm>
                    <FormInner onSubmit={handleSubmit}>
                        <img
                            src={Logo}
                            alt=""
                            style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginBottom: "50px",
                                width: "297px",
                                height: "47px",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate(-1)}
                        />
                        <Header>Login</Header>
                        <Body>
                            Login to get a tailored map and list of the most
                            affordable suburbs according to your financial
                            information.
                        </Body>
                        <div>
                            <img
                                src={MailLock}
                                alt=""
                                className="mail_lock"
                            ></img>
                            <InputEl
                                placeholder="Email Address"
                                type="email"
                                name="email"
                                value={inputs.email}
                                onChange={handleInputChange}
                                autoFocus={false}
                            />
                            {errors.email && (
                                <p className="error_wrapper">
                                    <ErrorMessage>{errors.email}</ErrorMessage>
                                </p>
                            )}
                        </div>
                        <div>
                            <img src={PassLock} alt="" className="lock"></img>
                            <InputEl
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={inputs.password}
                                onChange={handleInputChange}
                                autoFocus={false}
                                className="password_text"
                            />
                            {errors.password && (
                                <p className="error_wrapper">
                                    <ErrorMessage>
                                        {errors.password}
                                    </ErrorMessage>
                                </p>
                            )}
                        </div>
                        <Button
                            onClick={() =>
                                getSignIn({
                                    variables: {
                                        email: "markblashki1@gmail.com",
                                        password: "Password1",
                                    },
                                })
                            }
                        >
                            Login
                        </Button>
                        <br />
                        {isSignedIn ? "SIGNED IN" : "SIGNED OUT"}
                        {/* {formState && <p className="modal">Signed In</p>} */}
                        <SubText>
                            <u>
                                <b>
                                    <ForgotPasswordLink to="/forgotpassword">
                                        Forgot your password?
                                    </ForgotPasswordLink>
                                </b>
                            </u>
                        </SubText>
                    </FormInner>
                </OuterForm>
            </OuterContainer>
        </>
    );
};

export default LoginView;
