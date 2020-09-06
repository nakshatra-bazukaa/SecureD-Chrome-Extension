const custom = document.querySelector('#custom');
const check = document.querySelector('#check');
const form = document.querySelector('.pass-type');
const passGen = document.querySelector('#passGen');
const generate = document.querySelector("#generate");
const hidden = document.querySelector(".hidden");
const copy = document.querySelector("#copyit");
const save_password = document.querySelector("#save");


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

// custum password options

const upper = document.querySelector("input[name=uppercase]");
const lower = document.querySelector("input[name=lowercase]");
const number = document.querySelector("input[name=number]");
const special_char = document.querySelector("input[name=special_char]");


upper.addEventListener('change', e => sessionStorage.setItem("xs", e.target.checked));

lower.addEventListener('change', e => sessionStorage.setItem("ys", e.target.checked));

number.addEventListener('change', e => sessionStorage.setItem("zs", e.target.checked));

special_char.addEventListener('change', e => sessionStorage.setItem("ts", e.target.checked));

generate.addEventListener('click', myfunction1);

function myfunction1() {

  copy.innerHTML = "COPY TO CLIPBOARD";
  // To generate password
  if (check.checked) {
    const hasBA = sessionStorage.getItem("xs") == "true";
    const hasNBA = sessionStorage.getItem("ys") == "true";
    const spCh = sessionStorage.getItem("ts") == "true";
    const num = sessionStorage.getItem("zs") == "true";
    const len = slider.value;
    passGen.value = customPassword(hasBA, hasNBA, spCh, num, len);
  }
  else
    passGen.value = defaultPassword(24);
  if (hidden.classList.contains('d-none')) {
    hidden.classList.remove('d-none');
  }
}

// copy password


copy.addEventListener('click', () => {

    /* Select the text field */
    passGen.select();
    passGen.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
    copy.innerHTML = "COPIED";
  });
  
