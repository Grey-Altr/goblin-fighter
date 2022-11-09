export function renderRobit(robitData) {
    const robitEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const fpEl = document.createElement('p');

    robitEl.classList.add('robit');
    faceEl.classList.add('robitFace');

    nameEl.textContent = robitData.name;
    fpEl.id = `robit-fp-${robitData.id}`;
    fpEl.textContent = robitData.fp < 0 ? 0 : robitData.fp;

    faceEl.id = `robit-face-${robitData.id}`;
    faceEl.textContent = robitData.fp > 0 ? '🤖' : '💗🤖💗';

    if (robitData.fp < 0) {
        robitEl.classList.add('friends!');
    }

    robitEl.append(nameEl, faceEl, fpEl);

    return robitEl;
}
