import React, { useContext, useState, useEffect } from "react";
import DataContext from '../../Context/DataContext';
import { Thumb } from '../../Components';
import { checkHeroesListByFilters, checkVillainsListByFilters } from '../../Utils/dataFiltering';
import { MainWrapper, GalleryWrapper } from './Gallery.style';

const Gallery = () => {
    const [heroes, setHeroes] = useState([]);
    const [villains, setVillains] = useState([]);
    const { config, filters, setContext } = useContext(DataContext);

    useEffect(() => {
        if (filters && filters.length > 0) {
            const checkedHeroes = checkHeroesListByFilters(config.Heroes, filters);
            const checkedVillains = checkVillainsListByFilters(config.Villains, filters);
            setHeroes(checkedHeroes);
            setVillains(checkedVillains);
            setContext({ filtered: [ { 'heroes': checkedHeroes }, { 'villains': checkedVillains } ] });
        } else {
            setHeroes(config.Heroes);
            setVillains(config.Villains);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, config.Heroes, config.Villains]);

    if (config === null) {
        return null;
    }

    return (
        <MainWrapper>
            <h1>HEROES POOL</h1>
            <GalleryWrapper>
                {heroes.map(hero => {
                    return <Thumb key={hero.ID} name={hero.Name} />
                })}
            </GalleryWrapper>
            <h1>VILLAINS POOL</h1>
            <GalleryWrapper>
                {villains.map(villain => {
                    return <Thumb key={villain.ID} name={villain.Name} />
                })}
            </GalleryWrapper>
        </MainWrapper>
    );
};

export default Gallery;
