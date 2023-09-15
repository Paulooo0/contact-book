const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputTel = document.querySelector('#tel');
const names = [];
const tels = [];

let rows = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addRow();
    updateTbody();
})

inputTel.addEventListener('keyup', function(e) {
    adjustPhone();
});

function adjustPhone() {
    const phone = inputTel.value;
    const digitsOnly = phone.replace(/\D/g, '');

    let adjustedPhone = '';
    if (digitsOnly.length <= 2) {
        adjustedPhone = digitsOnly;
    } else if (digitsOnly.length <= 5) {
        adjustedPhone = `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2)}`;
    } else if (digitsOnly.length <= 9) {
        adjustedPhone = `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2, 6)}-${digitsOnly.slice(6)}`;
    } else {
        adjustedPhone = `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2, 7)}-${digitsOnly.slice(7, 11)}`;
    }

    inputTel.value = adjustedPhone;
}

function addRow() {
    names.push(inputName.value);
    tels.push(inputTel.value);

    let row = '<tr>';
    row += `<td>${inputName.value}</td>`;
    row += `<td><a href="tel:${inputTel.value}">${inputTel.value}</a></td>`;
    row += '</tr>';

    rows += row;

    inputName.value = '';
    inputTel.value = '';
}

function updateTbody() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
}