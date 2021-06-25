import React, { useState, useEffect, useContext } from "react";
import DataContext from '../../Context/DataContext';
import { DropBox, TeamComposition, Image } from '../../Components';
import { getRandomIndexes } from '../../Utils/randomNumberGenerator';
import { SettingsWrapper } from './Settings.style';

const Settings = () => {
    const [players, setPlayers] = useState(2);
    const [heroesIndex, setHeroesIndex] = useState([]);
    const [villainsIndex, setVillainsIndex] = useState([]);
    const { config, filters, filtered, setContext } = useContext(DataContext);

    useEffect(() => {
        setHeroesIndex([]);
        setVillainsIndex([]);
    }, [filters]);

    const playersCount = [{ count: 2 }, { count: 3 }, { count: 4 }];

    const handleReset = (current) => {
        Array.from(document.querySelectorAll('select')).forEach(
            select => {
                if (select.name !== current && select.name !== 'players') {
                    return select.value = '';
                }
            }
        );
    };

    const handlePlayers = (evt) => {
        const result = parseInt(evt.target.value)
        setPlayers(result);
    }

    const handleAffiliation = (evt) => {
        const result = evt.target.value;
        setContext({ filters: [ { 'affiliation': result }] });
        handleReset('affiliation');
    }

    const handleType = (evt) => {
        const result = evt.target.value;
        setContext({ filters: [ { 'type': result }] });
        handleReset('type');
    }

    const handleFoes = (evt) => {
        const result = evt.target.value;
        setContext({ filters: [ { 'foes': result }] });
        handleReset('foes');
    }

    const handleScenarios = (evt) => {
        const result = config.Scenarios.find( ({ ID }) => ID === parseInt(evt.target.value) );
        console.log('result', result);
        // setScenario(result);
        handleReset('issue');
    }

    const onTeamAssembled = () => {
        const heroesIndexList = filtered ? filtered[0].heroes.length : config.Heroes.length;
        const villainsIndexList = filtered ? filtered[1].villains.length : config.Villains.length;
        if (heroesIndexList >= players) {
            setHeroesIndex([...getRandomIndexes(heroesIndexList, players)]);
        } else {
            setHeroesIndex([-1]);
        }
            
        setVillainsIndex([...getRandomIndexes(villainsIndexList, 1)]);
    }

    return (
        <SettingsWrapper>
            <h1>SETTINGS</h1>
            <DropBox
                items={playersCount}
                handleItem={handlePlayers}
                itemValue='count'
                itemName="count"
                placeholder="players"
                label="Players Count"
            />
            <DropBox
                items={config.Affiliation}
                handleItem={handleAffiliation}
                itemValue='Name'
                itemName="Name"
                placeholder="affiliation"
                label="Affiliation"
            />
            <DropBox
                items={config.Type}
                handleItem={handleType}
                itemValue='Name'
                itemName="Name"
                placeholder="type"
                label="Type"
            />
            <DropBox
                items={config.Villains}
                handleItem={handleFoes}
                itemValue='Name'
                itemName="Name"
                placeholder="foes"
                label="Foes"
            />
            <DropBox
                items={config.Scenarios}
                handleItem={handleScenarios}
                itemValue='ID'
                itemName="ComicIssue"
                placeholder="issue"
                label="Scenarios"
            />
            <button onClick={onTeamAssembled}>Assemble Team</button>
            <TeamComposition
                heroesIDS={heroesIndex}
                villainsID={villainsIndex}
                heroesList={filtered ? filtered[0].heroes : config.Heroes}
                villainsList={filtered ? filtered[1].villains : config.Villains}
            />
            <Image />
        </SettingsWrapper>
    );
};

export default Settings;
