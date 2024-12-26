import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    }

    return (
        <>
            <h1 css={styles.h1}>This is Home</h1>
            <Button css={styles.btn} variant="contained" onClick={handleClick}>to About</Button>
        </>
    );
}

const styles = {
    h1: css`
        text-align: center;
    `,
    btn: css`
        background-color: pink;
    `
}