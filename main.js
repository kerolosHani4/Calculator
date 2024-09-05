let parant = document.createElement("div");
parant.setAttribute("id", "parent");
document.body.appendChild(parant);

let logo = document.createElement("h1");
logo.appendChild(document.createTextNode("Calculator"));
parant.appendChild(logo);

let screen = document.createElement("h1");
let equal = document.createElement("h1");

let lcd = document.createElement("div");
lcd.setAttribute("class", "lcd");

lcd.appendChild(screen);
lcd.appendChild(equal);
parant.appendChild(lcd);

for (let i = 1; i <= 19; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", `button${i}`);
    button.appendChild(document.createTextNode(`${i}`));
    parant.appendChild(button);

    button.style.cssText = `
    grid-area: button${i};
    border-radius:50%;
    margin:8px;
    font-size:30px;
    color:white;
    font-weight:bold;
    background-color:#333333;
    `;
}
let footer = document.createElement("div");
parant.appendChild(footer);
footer.appendChild(document.createTextNode("<Made©By KeRo Hany>"));
document.querySelector("#parent h1").style.cssText = `
    grid-area: logo;
    background-color:white;
    margin:0;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 0px 0px;`;

lcd.style.cssText = `
    grid-area:lcd;
    background-image: url(calc.png);
    background-size:cover;
    overflow:hidden;
    border-top:black solid 1px;
    border-bottom:gray solid 1px;
    color:white;
    position: relative;
    z-index: 1;`;

let style=document.createElement("style");
document.head.appendChild(style);
style.innerHTML=`
    .lcd::before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.655);
        z-index: -1;
    }`;

screen.style.cssText = `margin:10px 10px;`;
equal.style.cssText = `margin:10px 10px;`;

footer.style.cssText = `
    grid-area: footer;
    background-color: white;
    border-radius:0px 0px 15px 15px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;`;

parant.style.cssText = `display: grid;
    width:430.4px;
    height:100vh;
    grid-template-columns: repeat(4,calc(100% / 4));
    grid-template-rows: 50px 200px repeat(5,auto) 40px;
    border-radius: 15px;
    border:black 1px solid; 
    background-color:black;`;

parant.style.setProperty(
    "grid-template-areas",
    `"logo logo logo logo"
    "lcd lcd lcd lcd"
    "button1 button2 button3 button4"
    "button5 button6 button7 button8"
    "button9 button10 button11 button12"
    "button13 button14 button15 button16"
    "button17 button17 button18 button19"
    "footer footer footer footer"`);

document.body.style.cssText = `
    margin:0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: cursive;
    background-color: rgba(0, 0, 0, 0.655);`;

let allElements = document.querySelectorAll("*");
allElements.forEach((element) =>
    element.style.setProperty("box-sizing", "border-box"));

let x = document.querySelectorAll("button");
x[0].textContent = "C";
x[0].style.setProperty("background-color", "#a5a5a5");
x[1].textContent = "DEL";
x[1].style.setProperty("background-color", "#a5a5a5");
x[2].textContent = "%";
x[2].style.setProperty("background-color", "#a5a5a5");
x[3].innerHTML = "&#247;";
x[3].style.setProperty("background-color", "#ff9f0a");
x[4].textContent = "7";
x[5].textContent = "8";
x[6].textContent = "9";
x[7].textContent = "x";
x[7].style.setProperty("background-color", "#ff9f0a");
x[8].textContent = "4";
x[9].textContent = "5";
x[10].textContent = "6";
x[11].textContent = "—";
x[11].style.setProperty("background-color", "#ff9f0a");
x[11].style.setProperty("font-size", "20px");
x[12].textContent = "1";
x[13].textContent = "2";
x[14].textContent = "3";
x[15].textContent = "+";
x[15].style.setProperty("background-color", "#ff9f0a");
x[16].textContent = "0";
x[16].style.setProperty("border-radius", "40px");
x[17].textContent = ".";
x[18].textContent = "=";
x[18].style.setProperty("background-color", "#ff9f0a");

let str = "",w = "";
function check() {
if (str.length == 18) {
    screen.textContent = `Max digits is 17 digit.`;
    str = "";}

else 
    screen.textContent = `${str}`;

equal.textContent = `${""}`;
}

x[1].onclick = function () {
    let q = str.split("");
    q.pop();
    str = q.join("");
    screen.textContent = `${str}`;
};

x[0].onclick = (_) => {
    str = "";
    check();
};
x[2].onclick = (_) => {
    str += "%";
    check();
};
x[3].onclick = (_) => {
    str += "/";
    check();
};
x[4].onclick = (_) => {
    if (str === w) str = "";
    str += "7";
    check();
};
x[5].onclick = (_) => {
    if (str === w) str = "";
    str += "8";
    check();
};
x[6].onclick = (_) => {
    if (str === w) str = "";
    str += "9";
    check();
};
x[7].onclick = (_) => {
    str += "*";
    check();
};
x[8].onclick = (_) => {
    if (str === w) str = "";
    str += "4";
    check();
};
x[9].onclick = (_) => {
    if (str === w) str = "";
    str += "5";
    check();
};
x[10].onclick = (_) => {
    if (str === w) str = "";
    str += "6";
    check();
};
x[11].onclick = (_) => {
    str += "-";
    check();
};
x[12].onclick = (_) => {
    if (str === w) str = "";
    str += "1";
    check();
};
x[13].onclick = (_) => {
    if (str === w) str = "";
    str += "2";
    check();
};
x[14].onclick = (_) => {
    if (str === w) str = "";
    str += "3";
    check();
};
x[15].onclick = (_) => {
    str += "+";
    check();
};
x[16].onclick = (_) => {
    if (str === w) str = "";
    str += "0";
    check();
};
x[17].onclick = (_) => {
    if (str === w) str = "";
    str += ".";
    check();
};
x[18].onclick = (_) => {
    if (isNaN(parseInt(str[str.length - 1])) || isNaN(parseInt(str[0]))) {
        str += "=";
        screen.textContent = `${str}`;
        equal.textContent = `undefined`;
        str = "";
    } else {
        w = eval(str);
        str += "=";
        screen.textContent = `${str}`;
        equal.textContent = `${w}`;
        str = w;
    }
};
