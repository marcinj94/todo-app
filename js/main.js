const ul = document.querySelector('ul');
const form = document.querySelector('form');
const numberOfTasks = document.querySelector('.tasks h2 span');
const input = document.querySelector('input');

const listOfTasks = [];

const generateList = () => {
    ul.textContent = '';
    listOfTasks.forEach((li, index) => {
        li.dataset.key = index;
        ul.appendChild(li);
    });
}

const remove = (e) => {
    const index = e.target.parentNode.dataset.key;
    listOfTasks.splice(index, 1);
    numberOfTasks.textContent = listOfTasks.length;
    generateList();
}

const add = (e) => {
    e.preventDefault();

    const inputValue = input.value;
    if (inputValue === "") return;

    //Create li element
    const liElement = document.createElement('li');
    liElement.innerHTML = inputValue + '<button class="delete">Delete</button>';
    listOfTasks.push(liElement);

    generateList();

    ul.appendChild(liElement);
    input.value = '';
    numberOfTasks.textContent = listOfTasks.length;

    const removeBtn = liElement.querySelector('button');
    removeBtn.addEventListener('click', remove);
}
form.addEventListener('submit', add);


//Add "done" marked when clicked on!!
const done = (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}
ul.addEventListener('click', done);