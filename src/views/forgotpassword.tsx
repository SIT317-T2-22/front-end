import React, { useState } from "react";
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
    SignInLink,
} from "../styles/CreateAccountElements";
import { ErrorMessage } from "../styles/ErrorMessageElements";
import Logo from "../assets/logo-coloured.png";
import MailLock from "../assets/mail-lock.png";
import { useNavigate } from "react-router-dom";

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
        };

        const objErrors: errors = {};
        if (!inputs.email) {
            objErrors.email = "Hold on, a email is required";
        } else if (inputs.email.match(cond)) {
            objErrors.email = "Hold on, that email doesn't look valid";
        }
        return objErrors;
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
                        {formState && <p className="modal">Email Sent</p>}
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
