import React from "react";
import { Thumb } from '../../Components';
import { MainWrapper, TeamCompWrapper } from './TeamComposition.style';

const TeamComposition = ({ heroesIDS, villainsID, heroesList, villainsList }) => {
    const getWarningMessage = () => {
        if (heroesIDS[0] === -1) {
            return <div>Not enough heroes!<br/>Check your Players Count</div>;
        }
        return <div>Assemble your Team!</div>
    }

    return (
        <MainWrapper>
            <h1>HEROES</h1>
            <TeamCompWrapper>
                {
                    heroesIDS.length > 1
                    ? heroesIDS.map(heroID => {
                        return <Thumb key={heroesList[heroID].ID} name={heroesList[heroID].Name} />
                    })
                    : getWarningMessage()
                }
            </TeamCompWrapper>
            <h1>VILLAINS</h1>
            <TeamCompWrapper>
                {villainsID.map(villainID => {
                    return <Thumb key={villainsList[villainID].ID} name={villainsList[villainID].Name} />
                })}
            </TeamCompWrapper>
        </MainWrapper>
    );
};

export default TeamComposition;
