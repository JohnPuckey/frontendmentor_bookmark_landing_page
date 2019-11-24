
// menu toggle

const menuBtn = document.querySelector('.toggle-btn');
const menuBtnImg = document.querySelector('.hamburger')
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('nav');

let showMenu = false // set initial state of showMenu

menuBtn.addEventListener('click', toggleMenu); // on click run toggleMenu

function toggleMenu() {
    if(!showMenu) {
        // if showMenu is false 
        navMenu.classList.add('show')
        logo.classList.add('toggle')
        menuBtnImg.src = "images/icon-close.svg"

        showMenu = true; //set showMenu as true
    } else {
        navMenu.classList.remove('show')
        logo.classList.remove('toggle')
        menuBtnImg.src = "images/icon-hamburger.svg"

        showMenu = false; //set showMenu as false

    }
}

// feature tabs

function openTab(evt, tabName) {

    //declare variables
    var i, tabcontent, tablinks

    // get all elements and clear tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    // get all tablink and remove active
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active')
        
    }

    // show current tabcontent add active to current 
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

document.getElementById("defaultOpen").click();


// collapsible buttons

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }   
    });
}

// email validation

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) // check email value against regex
}

function Validate() {
    var error = document.getElementById("error-msg")
    var email = document.getElementById("email")
    error.innerHTML = ""

    if (emailIsValid(email.value)) {
        error.innerHTML = ""
        document.getElementById("error-msg").style.display = "none"
        document.getElementById("error-icon").style.display = "none"
        document.getElementById("email").classList.remove("error")
        document.getElementById("submit-btn").classList.remove("error-btn")
        //return true
        email.value = ""
    } else {
        error.innerHTML = "Whoops, make sure it's an email"
        document.getElementById("error-msg").style.display = "block"
        document.getElementById("error-icon").style.display = "block"
        document.getElementById("email").classList.add("error")
        document.getElementById("submit-btn").classList.add("error-btn")
    }
    return false

}