let engGreet = 'Hello';
let turGreet = 'Selam';
let porGreet = 'Ola';

let count = ['one','two','three','four'];
let counting = count.join('-');

console.log(counting);

let engMessage = `${engGreet}, how are you?`;
let turMessage = `${turGreet}, nasilsiniz?`;
let porMessage = `${porGreet}, como vai você?`;

let language = 'Turkish';

switch(language){
    case 'English' : 
        console.log(engMessage); 
        break;
    case 'Turkish' :
        console.log(turMessage); 
        break;
    case 'Portguese' :
        console.log(porMessage); 
        break;
}

console.log(engMessage);
console.log(turMessage);
console.log(porMessage);

const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];

// stars.forEach((star, index) => {
//     console.log(star, index)
// });

// const brightStars = stars.map((star) => {
//     return star+' is very bright!';
// });
// console.log(brightStars);

const evenStars = stars.filter((star, index) => {
    return index % 2 === 0;
})

console.log('Even Indexed Stars are: ', evenStars);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sum); // prints total sum of numbers

const firstEvenItem = numbers.find((num) => {
    return num%2 === 0;
});
console.log(firstEvenItem);
