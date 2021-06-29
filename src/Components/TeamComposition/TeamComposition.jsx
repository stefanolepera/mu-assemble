import React from "react";
import { Thumb } from '../../Components';
import { MainWrapper, TeamCompWrapper, WarningWrapper } from './TeamComposition.style';

const TeamComposition = ({ heroesIDS, villainsID, heroesList, villainsList }) => {
    const checkWarningMessage = () => {
        if (heroesIDS[0] === -1) {
            return <WarningWrapper>Not enough heroes!<br/>Check your Players Count</WarningWrapper>;
        }
        return (
            <>
                <Thumb key='Placeholder1' name='Placeholder' />
                <Thumb key='Placeholder2' name='Placeholder' />
            </>
        )
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
                    : checkWarningMessage()
                }
            </TeamCompWrapper>
            <h1>VILLAIN</h1>
            <TeamCompWrapper>
                {
                    villainsID.length > 0
                    ? villainsID.map(villainID => {
                        return <Thumb key={villainsList[villainID].ID} name={villainsList[villainID].Name} />
                    })
                    : <Thumb key='Placeholder3' name='Placeholder' />
                }
            </TeamCompWrapper>
        </MainWrapper>
    );
};

export default TeamComposition;
