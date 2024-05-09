import sortHeroes from '../matchers';

test.each([
    [
        [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 }
        ],
        [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 }
        ]
    ]
])('testing function sortHeroes', (input, expected) => {
    const result = sortHeroes(input);
    expect(result).toEqual(expected);
});
