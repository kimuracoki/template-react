import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    }

    return (
        <>
            <h1 css={styles.h1}>This is Home</h1>
            <button onClick={handleClick}>to About</button>
        </>
    );
}

const styles = {
    h1: css`
        text-align: center;
    `
}