// const displayKey = document.querySelector(".key h2");
// const displayKeyCode = document.querySelector(".keyCode h2");
// const keyCodeDiv = document.querySelector(".keyCode");


// window.addEventListener("keydown", (e) => {
//   overlay.classList.add("hide");
//   displayKey.innerHTML = e.key;
//   displayKeyCode.innerHTML = e.keycode;
//   if (e.keycode === 32) {
//     displayKey.innerHTML = `'space'`;
//   }
// });


// keyCodeDiv.addEventListener("click", (e) => {
//   const textArea = document.createElement("textarea");
//   textArea.setAttribute("readonly", "");
//   textArea.style.position = "absolute";
//   textArea.value = displayKeyCode.innerText;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textArea);
//   keyCodeDiv.querySelector("p").innerText = "Copied";
//   setTimeout(() => {
//     keyCodeDiv.querySelector("p").innerText = "Click to Copy";
//   }, 2000);
// });

function keyCodeGenerator(event) {
  let Key = document.getElementById('lblkeycode'); // Find element in DOM
  let Code = document.getElementById('lblkey');
  let which = document.getElementById('lblwhich'); // Find element in DOM
  let BigkeyCode= document.getElementById('BigkeyCode');

  Key.innerHTML = event.key;
  Code.innerHTML = event.code; 
  which.innerHTML = event.which;
  BigkeyCode.innerHTML=event.which;
}

// This will bind event with a callback function
// key Press in DOM 
document.addEventListener("keydown", keyCodeGenerator);
// document.addEventListener("keyup" , keyCodeGenerator);
// Key Press For TextBox 
