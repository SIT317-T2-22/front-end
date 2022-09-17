import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from '@apollo/client';
import {
    OuterContainer,
    OuterForm,
    FormInner,
    Header,
    Body,
    Button,
    SubText,
    InputEl,
    SignInLink,
} from "../styles/CreateAccountElements";
import { ErrorMessage } from "../styles/ErrorMessageElements";
import Logo from "../assets/logo-coloured.png";
import MailLock from "../assets/mail-lock.png";
import { useNavigate } from "react-router-dom";
import mutations from "../settings/graphql-mutations";

const ForgotPasswordView = () => {
    // const [data, setData] = useState();
    let navigate = useNavigate();
    const [formState, setFormState] = useState(false);
    const [errors, setErrors] = useState<{ password?: string; email?: string }>(
        {}
    );
    const [inputs, setInputs] = useState<{ password?: string; email?: string }>(
        {}
    );
    const [signUp, signUpResult] = useMutation(mutations.signUp);
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState<{email?: string, password?: string}>({});

    const useForm = React.useCallback((initialValues: any) => {
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
    }, [inputs]);

    const validate =  React.useCallback((inputs: any) => {
        const cond = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            inputs.email
        );

        // email Errors
        type errors = {
            email?: string;
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
    }, [errors]);

    const handleSubmit = React.useCallback(async (e: any) => {
        e.preventDefault();
        const validationErrors = validate(inputs);
        const noErrors = Object.keys(validationErrors).length === 0;
        setErrors(validationErrors);
        if (noErrors) {
            signUp({variables: {
                user:{
                    email: inputs.email,
                    password: inputs.password,
                }
            }})
        } else {
            console.log("errors try again", validationErrors);
        }
    }, [inputs, signUp, validate]);

    const handleReset = React.useCallback(() => {
        setInputs(() => ({
            email: "",
            password: "",
        }));
    }, []);

    const { handleInputChange } = useForm({
        email: "",
        password: "",
        validate,
    });

    React.useEffect(() => {
        if(signUpResult){
            // console.log(signUpResult);
            // setFormState(true);
            // handleReset();
        }
    }, [handleReset, signUpResult])

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
                        <Header>Forgot your password</Header>
                        <Body>
                            Enter your email address and we'll send you a link
                            to reset your password.
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
                        <Button
                            // type="submit"
                            style={{ cursor: "pointer" }}
                        >
                            Reset Password
                        </Button>
                        {formState && <p className="modal">Account created</p>}
                        {!signUpResult.loading &&
                            signUpResult.error && (
                                <p className="error_wrapper">
                                    <ErrorMessage>{signUpResult.error.message}</ErrorMessage>
                                </p>
                            )
                        }
                        {!signUpResult.loading && signUpResult.data &&
                            signUpResult.data.addUser === null ? "User already exsists" : JSON.stringify(signUpResult.data?.addUser)
                        }
                        <SubText>
                            <u>
                                <b>
                                    <SignInLink to="/signin">
                                        Back to login
                                    </SignInLink>
                                </b>
                            </u>
                        </SubText>
                    </FormInner>
                </OuterForm>
            </OuterContainer>
        </>
    );
};

export default ForgotPasswordView;
