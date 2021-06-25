export const checkHeroesListByFilters = (heroesList, filters) => {
    if (filters.length > 0) {
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].hasOwnProperty('affiliation') && filters[i].affiliation !== '') {
                const filteredByAffiliation = getHeroesListByAffiliation(heroesList, filters[i].affiliation);
                return filteredByAffiliation;
            }

            if (filters[i].hasOwnProperty('type') && filters[i].type !== '') {
                const filteredByType = getHeroesListByType(heroesList, filters[i].type);
                return filteredByType;
            }

            if (filters[i].hasOwnProperty('foes') && filters[i].foes !== '') {
                const filteredByFoes = getHeroesListByFoes(heroesList, filters[i].foes);
                return filteredByFoes;
            }
        }
    }
    
    return heroesList;
};

export const checkVillainsListByFilters = (villainsList, filters) => {
    if (filters.length > 0) {
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].hasOwnProperty('foes') && filters[i].foes !== '') {
                const filteredByGender = getVillainsListByFoes(villainsList, filters[i].foes);
                return filteredByGender;
            }
        }
    }
    
    return villainsList;
};

export const getVillainsListByFoes = (villainsList, foo) => {
    return villainsList.filter(villainList => {
        return villainList.Name === foo
    });
};

export const getHeroesListByFoes = (heroesList, foo) => {
    return heroesList.filter(heroList => {
        const foesList = heroList.Foes.split(',').map(item => item.trim());
        return foesList.indexOf(foo) !== -1;
    });
};

export const getHeroesListByType = (heroesList, type) => {
    return heroesList.filter(heroList => {
        const typeList = heroList.Type.split(',').map(item => item.trim());
        return typeList.indexOf(type) !== -1;
    });
};

export const getHeroesListByAffiliation = (heroesList, affiliation) => {
    return heroesList.filter(heroList => {
        const affiliationList = heroList.Affiliation.split(',').map(item => item.trim());
        return affiliationList.indexOf(affiliation) !== -1;
    });
};