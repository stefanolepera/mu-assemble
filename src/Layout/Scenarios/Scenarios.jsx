import React, { useState, useContext } from "react";
import { DropBox } from '../../Components';
import DataContext from '../../Context/DataContext';

const Scenarios = () => {
    const [scenario, setScenario] = useState(null);
    const { config } = useContext(DataContext);

    const handleClickedItem = (evt) => {
        const result = config.Scenarios.find( ({ ID }) => ID === parseInt(evt.target.value) );
        setScenario(result);
    }

    return (
        <>
            <DropBox
                items={config.Scenarios}
                handleItem={handleClickedItem}
                itemValue='ID'
                itemName="ComicIssue"
                placeholder="issue"
                label="Scenarios"
            />
            {scenario && 
                <>
                    <div>{`Issue: ==> ${scenario.ComicIssue} ${scenario.Date}`}</div>
                    <div>{`Summary: ==> ${scenario.Summary}`}</div>
                    <div>{`Heroes: ==> ${scenario.Heroes}`}</div>
                    <div>{`Villain: ==> ${scenario.Villain}`}</div>
                </>
            }
        </>
    );
};

export default Scenarios;
