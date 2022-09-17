import React from "react";
import { useNavigate } from "react-router-dom";
import {
    NotFoundTextEl,
    NotFoundTextBox,
    ButtonEl,
} from "../styles/NotFoundElements";

const NotFoundView = () => {
    const navigate = useNavigate();
    return (
        <>
            <NotFoundTextBox>
                <NotFoundTextEl>
                    Wow you're <b>curious!</b> <br />
                    This page hasn't been implemented yet. <br />
                    <b>Come back again later!</b>
                </NotFoundTextEl>
                <div>
                    <br />
                </div>
                <ButtonEl onClick={() => navigate(-1)}>Go back</ButtonEl>
            </NotFoundTextBox>
        </>
    );
};

export default NotFoundView;
