import { checkItemsListByFilters } from '../dataFiltering';

const mockData = [
    {
        "ID": 50,
        "Name": "Thor",
        "Season": "Season 1",
        "Gender": "him",
        "Expansion": "Tales of Asgard",
        "Type": "Specialized, Extra Attack",
        "Actions": {
            "Wild": 3,
            "Move": 6,
            "Attack": 6,
            "Heroic": 4
        },
        "Special Cards": 3,
        "Affiliation": "Asgard, Avengers, Guardians of the Galaxy",
        "Allies": "Beta Ray Bill, Captain America, Doctor Strange, Drax, Hulk, Iron Man, Korg, Nova, Valkyrie",
        "Foes": "Hela, Green Goblin, Loki, Red Skull, Proxima Midnight, Thanos, Ultron"
    },
    {
        "ID": 51,
        "Name": "Valkyrie",
        "Season": "Season 1",
        "Gender": "her",
        "Expansion": "Tales of Asgard",
        "Type": "Attack, Move",
        "Actions": {
            "Wild": 3,
            "Move": 3,
            "Attack": 7,
            "Heroic": 4
        },
        "Special Cards": 3,
        "Affiliation": "Asgard, Defenders",
        "Allies": "Captain Marcel, Ghost Rider, Hulk, Korg, Luke Cage, Thor, Wasp",
        "Foes": "Hela, Loki, Green Goblin"
    },
    {
        "ID": 52,
        "Name": "Venom",
        "Season": "Season 1",
        "Gender": "him",
        "Expansion": "KS Stretch Goals",
        "Type": "Attack, Varied",
        "Actions": {
            "Wild": 3,
            "Move": 5,
            "Attack": 8,
            "Heroic": 2
        },
        "Special Cards": 3,
        "Affiliation": "Hydra",
        "Allies": "Black Cat, Daredevil, Hulk, Spider-Man",
        "Foes": "Carnage, Mysterio"
    },
    {
        "ID": 35,
        "Name": "Nova",
        "Season": "Season 1",
        "Gender": "him",
        "Expansion": "KS Stretch Goals",
        "Type": "Specialized, Heroic",
        "Actions": {
            "Wild": 6,
            "Move": 2,
            "Attack": 3,
            "Heroic": 6
        },
        "Special Cards": 3,
        "Affiliation": "Avengers, Nova Corps",
        "Allies": "Beta Ray Bill, Falcon, Gamora, Iron Man, Luke Cage, Miles Morales, Ms Marvel, Rocket, Spider-Woman, Vision",
        "Foes": "Carnage, Proxima Midnight, Red Skull, Sandman"
    }
]

describe('checkItemsListByFilters', () => {
    it('should correctly return only females', () => {
        const res = checkItemsListByFilters(mockData, [{ 'gender': 'her' }]);
        expect(res).toEqual([{
            "ID": 51,
            "Name": "Valkyrie",
            "Season": "Season 1",
            "Gender": "her",
            "Expansion": "Tales of Asgard",
            "Type": "Attack, Move",
            "Actions": {
                "Wild": 3,
                "Move": 3,
                "Attack": 7,
                "Heroic": 4
            },
            "Special Cards": 3,
            "Affiliation": "Asgard, Defenders",
            "Allies": "Captain Marcel, Ghost Rider, Hulk, Korg, Luke Cage, Thor, Wasp",
            "Foes": "Hela, Loki, Green Goblin"
        }])
    });

    it('should correctly return the Nova Corps affiliation', () => {
        const res = checkItemsListByFilters(mockData, [{ 'affiliation': 'Nova Corps' }]);
        expect(res).toEqual([{
            "ID": 35,
            "Name": "Nova",
            "Season": "Season 1",
            "Gender": "him",
            "Expansion": "KS Stretch Goals",
            "Type": "Specialized, Heroic",
            "Actions": {
                "Wild": 6,
                "Move": 2,
                "Attack": 3,
                "Heroic": 6
            },
            "Special Cards": 3,
            "Affiliation": "Avengers, Nova Corps",
            "Allies": "Beta Ray Bill, Falcon, Gamora, Iron Man, Luke Cage, Miles Morales, Ms Marvel, Rocket, Spider-Woman, Vision",
            "Foes": "Carnage, Proxima Midnight, Red Skull, Sandman"
        }])
    });
});