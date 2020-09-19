const friends = [
    {name: 'Nashed', money: 70},
    {name: 'Jashed', money: 20},
    {name: 'Kashed', money: 80},
    {name: 'Pashed', money: 50},
    {name: 'Munia', money: 100},
];

const total = friends.reduce((sum, friend) => {
    console.log(sum, friend);
    return sum + friend.money;
}, 0);
console.log(total);
const final = friends.reduce((sum, friend) => sum + friend.money, 0);
console.log(final);




// nums.map(num => num * 2);
// nums.filter(num => num > 20);
// nums.find(num => num > 23);