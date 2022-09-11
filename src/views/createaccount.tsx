import React, { useState } from "react";
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
import { ErrorMessage } from "../styles/ErrorMessage";
import Logo from "../assets/logo-coloured.png";

const CreateAccountView = () => {
    // const [data, setData] = useState();
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
                                width: "302px",
                                height: "94px",
                            }}
                        />
                        <Header>Create Account</Header>
                        <Body>
                            Create an account to get a tailored map and list of
                            the most affordable suburbs according to your
                            financial information.
                        </Body>
                        <InputEl
                            placeholder="Email Address"
                            type="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleInputChange}
                            autoFocus={false}
                            className="email_icon"
                        />
                        {errors.email && (
                            <p className="error_wrapper">
                                <ErrorMessage>{errors.email}</ErrorMessage>
                            </p>
                        )}
                        <InputEl
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={inputs.password}
                            onChange={handleInputChange}
                            autoFocus={false}
                            className="password_icon"
                        />
                        {errors.password && (
                            <p className="error_wrapper">
                                <ErrorMessage>{errors.password}</ErrorMessage>
                            </p>
                        )}
                        <Button
                            // type="submit"
                            style={{ cursor: "pointer" }}
                        >
                            Create Account
                        </Button>
                        {formState && <p className="modal">Account created</p>}
                        <SubText>
                            Already have an account?{" "}
                            <u>
                                <b>
                                    <SignInLink to="/signin">
                                        Sign In
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

export default CreateAccountView;
