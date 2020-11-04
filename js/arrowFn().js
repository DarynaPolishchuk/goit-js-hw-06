// ==========отфильтровать числа в массиве, кторые больше 2-х=====================////////

// const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });
//  console.log(greaterThenTwo);

// ======>Стрелочное представление
// const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter(num=> num > 2);
// console.log(greaterThenTwo); 


//============Метод map=====================////////
// const multByTwo = greaterThenTwo.map(function(num) {
//     return num * 3
// });
// console.log(multByTwo);

// ======>>>Стрелочное представление
// const multByTwo = greaterThenTwo.map(num => num * 3);
// console.log(multByTwo);



//============Metod SORT==========================
// const sorted = multByTwo.sort(function (a, b) {
    // return a - b;
// });
// console.log(sorted);

// ======>>>>>Стрелочное представление
// const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted)



//============= Цепочка методов массива=====================////////
const numbers = [1, 5, 2, 4, 3];
// const res = numbers
//     .filter(function(num) {
//         return num > 2;
//     })
//     .map(function(num) {
//         return num * 3;
//     })
//     .sort(function(a,b) {
//         return a - b;
//     });
// console.log(res);
//======>>>>>>>>Стрелочное представление- если функция, которая в теле просто возвращает значение, не делая никаких манипуляций
// const res = numbers
//     .filter((num) => num > 2)
//     .map((num) => num * 3)
//     .sort((a,b) =>a - b );
// console.log(res);

//==================Объект, который выбирает всех пользователей онлайн и сортирует их по рангу
// const players = [
//     { id: 'player-1', name: 'Mango', isOnline: true, rank: 800 },
//     { id: 'player-2', name: 'Poly', isOnline: false, rank: 600 },
//     { id: 'player-3', name: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'player-4', name: 'Kiwi', isOnline: true, rank: 400 }
// ];
// const onlineAndSorted = players
//     .filter(function (player) { //выбирает всех игроков, которые онлайн
//         return player.isOnline;
//     })
//     .sort(function(prevPlayer, nextPlayer) {  // сортирует игроков по рангу от меньшего к большему
//         return prevPlayer.rank - nextPlayer.rank;
//     });
// console.log(onlineAndSorted);
//======>>>>>>>>Стрелочное представление
// const onlineAndSorted = players
//     .filter( (player) => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
// console.log(onlineAndSorted);

//================Увеличиваем количество поинтов каждого игрока
const players = [
    { id:'player-1', name: 'Mango', timePlayed:300, points:54, online: false},
    { id:'player-2', name: 'Poly', timePlayed:470, points:92, online: true},
    { id:'player-3', name: 'Ajax', timePlayed:230, points:548, online: true},
    { id:'player-4', name: 'Kiwi', timePlayed:150, points:71, online: false},
    { id:'player-5', name: 'Chelsy', timePlayed:80, points:48, online: true}
];
// const upatedPlayers = players.map(function (player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// })
// console.table(upatedPlayers);
//======>>>>>>>>Стрелочное представление(рефакторинг) способ №1
// const upatedPlayers = players.map(player=>{
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// })
//======>>>>>>>>Стрелочное представление(рефакторинг) способ №2
// const upatedPlayers = players.map(player => ({
//     ...player,
//         points: player.points + player.points * 0.1,
// }));
// console.table(upatedPlayers);



//================Увеличиваем количество часов игрока по id
// const playerIdToUpdate = 'player-3';

// const upatedPlayers = players.map(function (player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,        
//         };
//     }
//     return player;
// });
// console.table(upatedPlayers);

//======>>>>>>>>Стрелочное представление(рефакторинг) #1
// const playerIdToUpdate = 'player-3';

// const upatedPlayers = players.map( (player)=> {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,        
//         };
//     }
//     return player;
// });
// console.table(upatedPlayers);

//======>>>>>>>>Стрелочное представление(рефакторинг) #2 (тернарник, если что то присваиается или возвращается)
// const playerIdToUpdate = 'player-1';

// const upatedPlayers = players.map((player) => 
//     player.id === playerIdToUpdate
//         ? { ...player, timePlayed: player.timePlayed + 50 }
//         : player,
// );
// console.table(upatedPlayers);

//   ... -> это оператор spread (распыление) он берет объект, 
// создаем новый литерал объекта { ...player, timePlayed: player.timePlayed + 50 }
// мы берем оригинальный объект player и распыляем его на текущий
// (то есть мы буквально в этот новый литерал, ставим все свойства, 
// которые были в оригинальном объекте, а после распылния
// (они уже находяться в player) мы говорим, что оригинальное свойство 
// timePlayed замени на это значение player.timePlayed + 50)

