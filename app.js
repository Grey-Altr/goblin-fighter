/* Imports */

/* Get DOM Elements */
const playerFPEl = document.querySelector('#player-fp');
const befriendedNumEl = document.querySelector('#befriend-num');
const form = document.querySelector('form');
/* State */
let playerFP = 10;
let befriendedRobitCount = 0;
let currentId = 3;
let robits = [
    { id: 1, name: '451-1', fp: 3 },
    { id: 2, name: '83nn1', fp: 4 },
    { id: 3, name: '573v3', fp: 7 },
];
/* Events */
playerFPEl.textContent = playerFP;
befriendedNumEl.textContent = befriendedRobitCount;

// Invite Robit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const robitName = data.get('goblin-name');
    const newRobit = {
        id: currentId,
        name: robitName,
        fp: Math.ceil(Math.random() * 5),
    };

    currentId++;
    robits.push(newRobit);
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
