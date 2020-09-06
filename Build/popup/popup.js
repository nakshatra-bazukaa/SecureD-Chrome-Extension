const custom = document.querySelector('#custom');
const check = document.querySelector('#check');
const form = document.querySelector('.pass-type');
const passGen = document.querySelector('#passGen');
const generate = document.querySelector("#generate");
const hidden = document.querySelector(".hidden");
const copy = document.querySelector("#copyit");

check.addEventListener('click', e => {
    custom.classList.toggle('d-none');
    if (custom.classList.contains('d-none')) {
        form.reset();
    }
    if ((e.target.checked == false) && (hidden.classList.contains("d-none") == false)) {
        hidden.classList.add("d-none");
    } else if (e.target.checked == true && hidden.classList.contains("d-none") == false) {
        hidden.classList.add("d-none");
    }
});


const slider = document.getElementById("slider");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

