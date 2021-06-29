import React from 'react';
import { DropBoxWrapper, LabelWrapper, SelectWrapper } from './DropBox.style';

const DropBox = ({ items, handleItem, itemValue, itemName, placeholder, label }) => {
    return (
        <DropBoxWrapper>
            <LabelWrapper>{label}</LabelWrapper>
            <SelectWrapper name={placeholder} onChange={(evt) => handleItem(evt)}>
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
            </SelectWrapper>
        </DropBoxWrapper>
    )
}

export default DropBox;