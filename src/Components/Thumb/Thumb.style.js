import styled  from 'styled-components';

export const ImgWrapper = styled.img`
    text-align: center;
    cursor: pointer;
    width: 100px;
    height: 104px;
`;

export const PlaceholderWrapper = styled.div`
    width: 100px;
    height: 104px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${props => props.placeholder});
`;