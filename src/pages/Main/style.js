import styled from 'styled-components';

export const GridContainer = styled.div `
    display: grid;
    grid-template-rows: minmax(75px, 80px) 75% minmax(10%, auto);
    grid-template-areas:
    'header'
    'content'
    'footer';
    height: 100%;
`

export const Header = styled.header `
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5em 1em;
    ${({ theme }) => `
    background-color: ${theme['default-white']};
    `}

    h1 {
        color: ${({ theme }) => theme['text-color']};
        text-transform: lowercase;
        text-align: center;
        height: fit-content;
        margin: 0;
    }
`;

export const Content = styled.section`
    grid-area: content;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    max-width: 600px;
    overflow-y: scroll;
    padding: 0.5em 0.5em;

    h2 {
        font-size: 2em;
        color: #999;
        align-self: center;
        margin: auto;
    }
`;

export const Footer = styled.form `
    grid-area: footer;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: ${({ theme }) => theme['default-dark']};
    width: 100%;

    input {
        padding: 1em;
        margin-right: 0.5em;
        width: 50%;
        max-width: 500px;
        border-radius: 8px;
        border-style: none;
    }
    button {
        padding: 0.5em;
        height: 40px;
        min-width: 40px;
        color: ${({ theme }) => theme['constant-white']};
        background-color: ${({ theme }) => theme['success-green']};
        font-size: 1em;
        font-weight: bolder;
        border-style: none;
        border-radius: 5px;
        cursor:pointer;

        &:hover {
            color: ${({ theme }) => theme['success-green']};
            background-color: ${({ theme }) => theme['constant-white']};
        }
    }

`;