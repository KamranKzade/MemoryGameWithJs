let DownloadImgs = ["images/agac.jpg", "images/agac2.jpg", "images/agac3.jpg", "images/gobelek.jpg", "images/kirpi.jpg", "images/qoza.jpg", "images/sabalid.jpg", "images/umbrella.jpg", "images/yarpaq.jpg", "images/gobelek2.jpg",
    "images/agac.jpg", "images/agac2.jpg", "images/agac3.jpg", "images/gobelek.jpg", "images/kirpi.jpg", "images/qoza.jpg", "images/sabalid.jpg", "images/umbrella.jpg", "images/yarpaq.jpg", "images/gobelek2.jpg"];



let element = document.getElementById('mySection');
let content = '';

let Array = [];

function StartGame() {
    for (let i = 0; i < 4; i++) {
        content += "<section>";
        let subArray = [];
        for (let k = 0; k < 5; k++) {
            let number = getRandom(DownloadImgs.length);
            let choiceImg = DownloadImgs[number];

            subArray.push(choiceImg);

            // let img = choiceImg.split("/")[1];

            // content += `<img src='${Imgs[number]}'>`;
            content += `<img id="${i}-${k}" onclick='ShowImage(id)' src='images/back.jpg'>`;

            const index = DownloadImgs.indexOf(choiceImg);
            DownloadImgs.splice(index, 1);
        }

        Array.push(subArray);
        content += "</section>";
    }

    element.innerHTML = content;
}


console.log(Array);


let IkiliArray = [];

function ShowImage(id) {
    let element = document.getElementById(id);
    let i = 0;
    let k = 0;
    let data = String(id).split("-");
    i = data[0];
    k = data[1];

    element.src = Array[i][k];
    IkiliArray.push(element.src);

    CheckCards();
}

function CheckCards() {
    if (IkiliArray.length == 2) {
        if (IkiliArray[0] == IkiliArray[1]) {

        }
    }
    else if (IkiliArray.length > 2) {
        StartGame();
        IkiliArray = [];
    }
}


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

StartGame();