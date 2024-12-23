import { css } from "@emotion/react";

export const Home = () => {
    return (
        <h1 css={styles.h1}>This is Home</h1>
    );
}

const styles = {
    h1: css`
        text-align: center;
    `
}