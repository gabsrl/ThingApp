import styled from 'styled-components';

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    min-height: fit-content;
    margin: 0.5em 0;
    padding: 0.8em 1em;
    width: 100%;
    overflow: hidden;
    ${({ theme }) => `
        background-color: ${theme['default-white']};
        color: ${theme['text-color']};
    `}

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    button {
        border-style: none;
        justify-self: flex-end;
        background-color: transparent !important;
        margin-left: 1em;        
        ${({ theme }) => `
            color: ${theme['danger-red']} !important;
        `}

        &:hover {
            ${({ theme }) => `
                color: ${theme['constant-white']} !important;
                background-color: ${theme['danger-red']} !important;
            `}
        }       
    }

`;

