let element = document.getElementById('mySection');
let content = '';

for (let i = 0; i < 4; i++) {
    content += "<section>";

    for (let k = 0; k < 5; k++) {
        content += `<img src='images/agac.jpg'>`;
    }
    content += "</section>";
}

element.innerHTML = content;
