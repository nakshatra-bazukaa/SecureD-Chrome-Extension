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
  if (check.checked) {
    let blockAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nonBlockAlpha = "abcdefghijklmnopqrstuvwxyz";
    let specialChar = "!@#$%^&*_=+-/.?<>)(";
    let numbers = "1234567890";
    /*console.log(blockAlpha[4]);*/
    let generatedPassword = "";
    let allowedValues = "";
    let st = 0;
    let i = 0;
    if (sessionStorage.getItem("xs") == "true") {
      allowedValues += blockAlpha;
      generatedPassword[st++] = blockAlpha.charAt(Math.floor(Math.random() * (blockAlpha.length)));
      /*console.log(generatedPassword);*/
    }
    if (sessionStorage.getItem("ys") == "true") {
      allowedValues += nonBlockAlpha;
      generatedPassword[st++] = nonBlockAlpha.charAt(Math.floor(Math.random() * (nonBlockAlpha.length)));
      /*console.log(generatedPassword);*/
    }
    if (sessionStorage.getItem("ts") == "true") {
      allowedValues += specialChar;
      generatedPassword[st++] = specialChar.charAt(Math.floor(Math.random() * (specialChar.length)));
      /*console.log(generatedPassword);*/
    }
    if (sessionStorage.getItem("zs") == "true") {
      allowedValues += numbers;
      generatedPassword[st++] = numbers.charAt(Math.floor(Math.random() * (numbers.length)));
      /*console.log(generatedPassword);*/
    }
    for (i = 0; i < slider.value; i++) {
      generatedPassword = generatedPassword + allowedValues.charAt(Math.floor(Math.random() * (allowedValues.length)));
    }
    passGen.value = generatedPassword;
  }


  // random pass generator
  else {
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_=+-/.?<>)(1234567890";
    let generatedPassword = "";
    let i = 0;
    for (i = 0; i < 24; i++) {
      generatedPassword = generatedPassword + values.charAt(Math.floor(Math.random() * (values.length - 1)));
    }

    passGen.value = generatedPassword;

  }

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
  