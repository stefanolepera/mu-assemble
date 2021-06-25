import React from 'react';
import { DropBoxWrapper } from './DropBox.style';

const DropBox = ({ items, handleItem, itemValue, itemName, placeholder, label }) => {
    return (
        <DropBoxWrapper>
            <div>{label}</div>
            <select name={placeholder} onChange={(evt) => handleItem(evt)}>
                {placeholder !== 'players' && <option value=''>{`-- ${placeholder} --`}</option>}
                {items.map(item => {
                    return (
                        <option
                            key={`${item[itemName]}${item[itemValue]}`}
                            value={item[itemValue]}
                        >
                            {item[itemName]}
                        </option>
                    )
                })}
            </select>
        </DropBoxWrapper>
    )
}

export default DropBox;