/* Imports */
import { renderRobit } from './render-utils.js';
/* Get DOM Elements */
const playerFPEl = document.querySelector('#player-fp');
const befriendedNumEl = document.querySelector('#befriend-num');
const form = document.querySelector('form');
const robitListEl = document.querySelector('.robits');
/* State */
let playerFP = 10;
let befriendedRobitCount = 0;
let currentId = 3;
let robits = [
    { id: 1, name: '451-170n', fp: 3 },
    { id: 2, name: '83nn1', fp: 4 },
    { id: 3, name: '573v3', fp: 7 },
];
/* Events */

// Invite Robit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const robitName = data.get('robit-name');
    const newRobit = {
        id: currentId,
        name: robitName,
        fp: Math.ceil(Math.random() * 5),
    };

    currentId++;
    robits.push(newRobit);

    displayRobits();
});

// robit clickHandler
function robitClickHandler(robitData) {
    if (robitData.fp <= 0) return;
    if (Math.random() < 0.33) {
        robitData.fp--;
        alert("You're really impressing " + robitData.name + '!');
    } else {
        alert('Keep chatting. ' + robitData.name + " isn't so sure about you...");
    }

    if (Math.random() < 0.5) {
        playerFP--;
        alert('Actually... ' + robitData.name + " isn't feeling this convo...");
    } else {
        alert(robitData.name + ' is unamused, but still listening...');
    }

    if (robitData.fp === 0) {
        alert('You and ' + robitData.name + " really hit it off!! You're positively magnetic!");
        befriendedRobitCount++;
    }

    if (playerFP === 0) {
        alert(
            "Wow... Robits just don't seen to find you that interesting. Maybe just stick to organics from now on?"
        );
    }

    playerFPEl.textContent = playerFP;
    befriendedNumEl.textContent = befriendedRobitCount;

    const fpEl = document.getElementById(`robit-fp-${robitData.id}`);
    fpEl.textContent = robitData.fp < 0 ? 0 : robitData.fp;
    const faceEl = document.getElementById(`robit-face-${robitData.id}`);
    faceEl.textContent = robitData.fp > 0 ? '🤖' : '💗🤖💗';
}
/* Display Functions */
function displayRobits() {
    robitListEl.textContent = '';

    for (let robit of robits) {
        const robitEl = renderRobit(robit);
        robitEl.addEventListener('click', () => {
            robitClickHandler(robit);
        });
        robitListEl.append(robitEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayRobits();
