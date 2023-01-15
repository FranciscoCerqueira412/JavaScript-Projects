const btn__add=document.querySelector('.btn-add');
const btn__remove=document.querySelector('.btn-remove');
const container=document.querySelector('.container');

btn__add.addEventListener('click', () => {

    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'field');
    newField.setAttribute('placeholder', 'Another Field');

    container.appendChild(newField);

});

btn__remove.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input');
    if (inputs.length>3) {
        container.removeChild(inputs[inputs.length-1]);
    
    }


});