var elements = document.getElementsByClassName("copy");
var buttons = Array.prototype.slice.call(elements).map(x => x.firstElementChild);
buttons.forEach(e => makeButton(e));

function makeButton(e) {
    e.onclick = function () {
        let code = e.parentElement.previousElementSibling.innerHTML;
        let input = document.createElement('textarea');
        input.innerHTML = code;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    };
}

var clubElements = document.getElementsByClassName("club-copy");
var clubButtons = Array.prototype.slice.call(clubElements).map(x => x.firstElementChild);
clubButtons.forEach(e => makeButton(e));

var clubBtn = document.getElementById("club-btn");
clubBtn.onclick = function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px"
    }
};

var sportElements = document.getElementsByClassName("sport-copy");
var sportButtons = Array.prototype.slice.call(sportElements).map(x => x.firstElementChild);
sportButtons.forEach(e => makeButton(e));

var sportBtn = document.getElementById("sport-btn");
sportBtn.onclick = function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px"
    }
};