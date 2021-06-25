import React, { useContext } from "react";
import DataContext from '../../Context/DataContext';
import { ImgWrapper } from './Thumb.style';

const Thumb = ({ name }) => {
    const { setContext } = useContext(DataContext);

    const handleThumbClicked = () => {
        setContext({ thumbName: name });
    }
    return (
        <ImgWrapper
            onClick={handleThumbClicked}
            src={`images/thumbs/${name}.png`}
            alt={name}
        />
    );
};

export default Thumb;