import React, { useState, useContext, useEffect } from "react";
import DataContext from '../../Context/DataContext';
import Placeholder from './Placeholder.png';
import { ImgWrapper, PlaceholderWrapper } from './Image.style';

const Image = () => {
    const { thumbName } = useContext(DataContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
    }, [thumbName])

    return (
        <PlaceholderWrapper placeholder={Placeholder}>
            <ImgWrapper
                style={loaded ? {} : { display: 'none' }}
                src={`images/fullsize/${thumbName || 'Default'}.jpg`}
                alt={thumbName}
                onLoad={() => setLoaded(true)}
            />
        </PlaceholderWrapper>
    );
};

export default Image;