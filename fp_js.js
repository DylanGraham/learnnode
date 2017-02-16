var fruits = [
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
var fruitNames = fruits.map(function (item) { return item.name; });
var weight = fruits.reduce(function (result, item) {
    return result + item.weight;
}, 0);
console.log(fruitNames);
console.log(weight + " kg");
