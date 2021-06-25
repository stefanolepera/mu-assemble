import React, { useContext } from "react";
import DataContext from '../../Context/DataContext';
import { ImgWrapper } from './Image.style';

const Image = () => {
    const { thumbName } = useContext(DataContext);

    return (
        <ImgWrapper
            src={`images/fullsize/${thumbName || 'Default'}.jpg`}
            alt={thumbName}
        />
    );
};

export default Image;