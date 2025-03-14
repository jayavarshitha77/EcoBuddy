const wastes = document.querySelectorAll('.waste');
const bins = document.querySelectorAll('.bin');
const buildButton = document.getElementById('build-button');
const buildResult = document.getElementById('build-result');
const message = document.getElementById('message');

let sortedWaste = {};

wastes.forEach(waste => {
    waste.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', waste.id);
    });
});

bins.forEach(bin => {
    bin.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    bin.addEventListener('drop', (e) => {
        e.preventDefault();
        const wasteId = e.dataTransfer.getData('text/plain');
        const waste = document.getElementById(wasteId);
        const wasteType = waste.dataset.type;
        const binType = bin.dataset.type;

        if (wasteType === binType) {
            bin.appendChild(waste);
            sortedWaste[wasteId] = waste;
            checkAllSorted();
            message.textContent = '';
        } else {
            message.textContent = 'Incorrect bin!';
        }
    });
});

function checkAllSorted() {
    if (Object.keys(sortedWaste).length === wastes.length) {
        buildButton.disabled = false;
    }
}

buildButton.addEventListener('click', () => {
    buildResult.textContent = 'You built a beautiful sustainable park!';
});