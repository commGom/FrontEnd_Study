const loginInput=document.querySelector("#login-form input");
const loginButton=document.querySelector("#login-form button");

// function handleLoginBtnClick(){
//     console.log("click!!");
//     console.dir(loginInput.value);
// }
loginButton.addEventListener("click",()=>{
    console.dir(loginInput.value);
    console.log(loginInput.value);
})