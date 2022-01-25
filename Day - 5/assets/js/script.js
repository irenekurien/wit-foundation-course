const counterText = document.getElementById('counter');
const incrementBtn = document.getElementById('ButtonIncrement');
const decrementBtn = document.getElementById('ButtonDecrement');

let val = parseInt(counterText.innerText);

const incrementHandler = () => {
	val = val + 1;
	counterText.innerText = val;
};

const decrementHandler = () => {
	val = val - 1;
	counterText.innerText = val;
};

incrementBtn.addEventListener('click', incrementHandler);
decrementBtn.addEventListener('click', decrementHandler);
