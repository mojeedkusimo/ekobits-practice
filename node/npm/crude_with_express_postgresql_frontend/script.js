// document.addEventListener('load', () => {
//     getFishes();
// });
let container = document.querySelector('#container');
let newName = document.querySelector('#name');
let newType = document.querySelector('#type');
let newFishForm = document.querySelector('#new-fish-form');
// let newNameValue = newName.value;
let inputArray = [];

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
    inputArray.push(newName.value);
    inputArray.push(newType.value);
    let id = inputArray[0];
    let data = { Kote: 'Latin' }
    let options = {
        method: 'PATCH',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(data)
    }
    const fishToAdd = await fetch(`http://localhost:3333/fishes/${id}`, options);
    // location.reload();
    console.log(await fishToAdd.json());
    console.log(data);
}

getFishes();

newFishForm.addEventListener('submit', addFish);

