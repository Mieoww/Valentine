let head = document.getElementsByClassName('header_text')[0]; 
let headtext = document.createTextNode("Will you be my valentine?");
head.appendChild(headtext); 
// ============================================================
let gifcontainer = document.getElementsByClassName('gif')[0]; 

let ask1 = document.createElement("img");
ask1.src = "https://media3.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.gif"; 
ask1.alt = "Cute animated illustration"; 
// let ask2 = document.createElement("img");
// ask2.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHpkNGM2bXR1N3ptYXdxb2NqajY5b3U4OXBmNzV5NGVwcDNtN2lqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SvvfK2dco188Wk4ZTq/giphy.gif"; 
// ask2.alt = "Cute animated illustration"; 
gifcontainer.appendChild(ask1);
// gifcontainer.appendChild(ask2);
// ============================================================

let buttons = document.getElementsByClassName('buttons')[0];

let yes = document.createElement('button');
yes.id = 'yesButton';
yes.innerText = 'YES';
yes.onclick = happy; 
yes.className = "btn"; 


let no = document.createElement('button');
no.id = 'noButton';
no.innerText = 'NO';
no.addEventListener('mouseover', move); 
no.onclick = move; 
no.className = "btn";


buttons.appendChild(yes);
buttons.appendChild(no);
// ============================================================
let flag = 0; 
function move() {
    if(flag ==0)
    {
        changeSad(); 
    }
    console.log(window.innerWidth); 
    console.log(document.getElementById('noButton').offsetWidth); 
    console.log(window.innerHeight); 
    console.log(document.getElementById('noButton').offsetHeight); 
        
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 90;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 50;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    
    // console.log(x, y); 

}

function changeSad()
{
    let sad1 = document.createElement("img");
    sad1.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGZxZWUyaTZ3aXJ0N2I1em5jY29tZnRjeWFsaGJ3czJmYmpmM2NucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lPM06f2zvk94jBAzlP/giphy.gif"; 
    sad1.alt = "Cute animated illustration"; 
    // let sad2 = document.createElement("img");
    // sad2.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJvdXl3ZmdvM3Y1c3J2ejhiZDZ1ajZsd2h6dnI4cnl2OWIyaTZ2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/m9XLXeXcVxlZX0Mfps/giphy.gif"; 
    // sad2.alt = "Cute animated illustration"; 
    gifcontainer.replaceChild(sad1,ask1);
    // gifcontainer.replaceChild(sad2,ask2);
    flag=1; 
}
function happy() {

    remove(); 

    let texthappy = document.createTextNode("HAPPYYY!");
    head.replaceChild(texthappy, headtext); 
    let happy1 = document.createElement("img");
    happy1.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTNvb2Y1a25mZXcxM2sxN3Zic3hoZHNwOWp2YWR5OGIxZ2V5Ynl0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Q47i2kDz8w1utetr7i/giphy.gif"; 
    happy1.alt = "Cute animated illustration"; 
    // let happy2 = document.createElement("img");
    // happy2.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3ZkMnBxOHRpNXFodjg2OTZ1MnMzaTl4dTNmYXFvYzl0bm1idHY1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Yz2NW6XR6EvmU4uWpa/giphy.gif"; 
    // happy2.alt = "Cute animated illustration"; 
    gifcontainer.appendChild(happy1);
    // gifcontainer.appendChild(happy2);

    while (buttons.hasChildNodes()) {
        buttons.removeChild(buttons.firstChild);
      }
}

function remove()
{
    while (gifcontainer.hasChildNodes()) {
        gifcontainer.removeChild(gifcontainer.firstChild);
      }
}
