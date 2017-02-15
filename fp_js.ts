const fruits = [
    {
        name: 'apple',
        weight: 0.18
    },
    {
        name: 'banana',
        weight: 0.25
    },
    {
        name: 'avocado',
        weight: 0.31
    },
    {
        name: 'watermelon',
        weight: 1.85
    }
];

const fruitNames = fruits.map(item => item.name);

console.log(fruitNames);
