import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.div`
    margin: ${props => props.marg} auto;
    border: 5px solid #ccc;
    border-top: 5px solid #1251ff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;