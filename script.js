//Submit button
document.getElementById('submit').onclick = function () {
	addFunction();
};

function addFunction() {
	const create = document.createElement('div');
	create.innerText = document.querySelector('input').value;
	create.setAttribute('id', 'newdiv');
	document.body.append(create);
}

//Clear List button
document.getElementById('clear').onclick = function () {
	clearFunction();
};

function clearFunction() {
	const element = document.getElementById('newdiv');
	element.remove();
}
