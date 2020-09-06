const details = document.querySelector(".pass-details");
const popup_wrap = document.querySelector('.popup-wrapper');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');
const Delete_All = document.querySelector('.btn1');
const cancel = document.querySelector('.btn2');
const popbtn = document.querySelector('.del-all'); // popup button
let all_pass = document.querySelectorAll(".saved-pass");
const theme = document.querySelector('#manage-style');
const btn_dark = document.querySelector("#dark-mode");
let delete_id = null;

// toogle dark mode

btn_dark.addEventListener("click", ()=> {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "style.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "darkmode.css";
    btn_dark.innerText = "Light mode";
    localStorage.setItem("theme" , "dark");
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "style.css";
    btn_dark.innerText = "Dark mode";
    localStorage.setItem("theme" , "light");
  }
});


let array_all_pass = Array.from(all_pass); 


function set_theme(){
  let get_theme_value = localStorage.getItem("theme");
  console.log(get_theme_value);
  if(get_theme_value == "null" || get_theme_value == "dark")
  {
      document.querySelector('#manage-style').href = "darkmode.css";
    document.querySelector("#dark-mode").innerText = "Light mode";
  }
  else if(get_theme_value == "light")
  {
      document.querySelector('#manage-style').href = "style.css";
    document.querySelector("#dark-mode").innerText = "Dark mode";
  }
}



popbtn.addEventListener('click', e => {
    popup_wrap.style.display = 'block';

})


cancel.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
})

close.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
});

popup_wrap.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
});
popup.addEventListener('click', (e) => {
    popup.style.display = 'block';
    e.stopPropagation();
});








