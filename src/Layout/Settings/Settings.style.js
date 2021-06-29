import styled  from 'styled-components';

export const SettingsWrapper = styled.div`
    display: flex;
    margin: 0 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 1350px;
`;

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 300px;
`;

export const ButtonWrapper = styled.button`
    display: inline-block;
    padding: 0.7rem 3.7rem;
    cursor: pointer;
    margin: 0.3em 0.3em 0.3em 0.3em;
    border-radius: 0.2em;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    background-color: #3369ff;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15), inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    position: relative;

    :hover, :active {
        box-shadow: inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15), inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    }

    @media all and (max-width:30em) {
        display: block;
        margin: 0.4em auto;
    }
`;