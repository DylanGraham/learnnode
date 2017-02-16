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

const weight = fruits.reduce((result, item) => {
    return result + item.weight;
}, 0);

console.log(fruitNames);
console.log(weight + " kg");
