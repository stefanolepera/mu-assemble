import styled, { createGlobalStyle }  from 'styled-components';

export const MainWrapper = styled.div`
    text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
	html {
		background-color: #f6f6f6;
	}
	body {
		font-family: Roboto !important;
		margin: 0 0;
	}
`