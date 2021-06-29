import React, { useState, useEffect, useContext } from "react";
import DataContext from '../../Context/DataContext';
import Placeholder from './Placeholder.png';
import { Spinner } from '../../Components';
import { ImgWrapper, PlaceholderWrapper } from './Thumb.style';

const Thumb = ({ name }) => {
    const { setContext } = useContext(DataContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
    }, [])

    const handleThumbClicked = () => {
        setContext({ thumbName: name });
    }

    return (
        <PlaceholderWrapper placeholder={Placeholder}>
            { !loaded && <Spinner marg='20px' /> }
            <ImgWrapper
                style={loaded ? {} : { display: 'none' }}
                onClick={handleThumbClicked}
                src={`images/thumbs/${name}.png`}
                alt={name}
                onLoad={() => setLoaded(true)}
            />
        </PlaceholderWrapper>
        
    );
};

export default Thumb;