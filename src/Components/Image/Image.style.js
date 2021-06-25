import styled  from 'styled-components';

export const ImgWrapper = styled.img`
    text-align: center;
    width: 412px;
    height: 560px;
`;

export const PlaceholderWrapper = styled.div`
    width: 412px;
    height: 560px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${props => props.placeholder});
`;