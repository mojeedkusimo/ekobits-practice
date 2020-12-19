// document.addEventListener('load', () => {
//     getFishes();
// });
let container = document.querySelector('#container');
let newName = document.getElementById('name').value;
let newType = document.querySelector('#type');
let newFishForm = document.querySelector('#new-fish-form');
let newNameValue = newName.value;

const getFishes = async () => {
    const result = await fetch('http://localhost:3333/fishes/');
    const allFishesArray = await result.json();

    allFishesArray.forEach(fish => {
        let listElem = document.createElement('li');
        listElem.textContent = `${fish.name} : ${fish.type}`;
        container.appendChild(listElem);

    });

    console.log(allFishesArray);
}

const addFish = async (e) => {
    e.preventDefault();
    // const data = { newName: newType }
    // let options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }
    // const fishToAdd = await fetch('http://localhost:3333/fishes/', options);
    // location.reload();
    console.log(newName);
}

getFishes();

newFishForm.addEventListener('submit', addFish);

