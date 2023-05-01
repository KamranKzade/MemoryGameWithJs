let DownloadImgs = ["images/agac.jpg", "images/agac2.jpg", "images/agac3.jpg", "images/gobelek.jpg", "images/kirpi.jpg", "images/qoza.jpg", "images/sabalid.jpg", "images/umbrella.jpg", "images/yarpaq.jpg", "images/gobelek2.jpg",    "images/agac.jpg", "images/agac2.jpg", "images/agac3.jpg", "images/gobelek.jpg", "images/kirpi.jpg", "images/qoza.jpg", "images/sabalid.jpg", "images/umbrella.jpg", "images/yarpaq.jpg", "images/gobelek2.jpg"];


let Array = [];



function StartGame() {

    let element = document.getElementById('mySection');
    let content = '';

    for (let i = 0; i < 4; i++) {

        content += "<section>";
        let subArray = [];

        for (let k = 0; k < 5; k++) {

            let number = getRandom(DownloadImgs.length);
            let choiceImg = DownloadImgs[number];

            subArray.push(choiceImg);

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


let count = 0;
let IkiliArray = [];
let saygac = 0;


function ShowImage(id) {
    let element = document.getElementById(id);
    let i = 0;
    let k = 0;
    let data = String(id).split("-");
    i = data[0];
    k = data[1];

    element.src = Array[i][k];
    IkiliArray.push(element.src);


    // Check Card
    
    if (IkiliArray.length == 2) {
        if (IkiliArray[0] == IkiliArray[1]) {
            element.src = Array[i][k];
            IkiliArray = [];
            count++;
        }
    }
    
    else if (IkiliArray.length > 2) {
        StartGame();
        IkiliArray = [];
        count = 0;
    }
    
    ++saygac;

    if (count == 10) {
        setTimeout(() => {
            alert("You Win");
            StartGame();
            count = 0;
        }, 1000);
    }

    if (saygac == 16) {
        alert("Game Over");
        StartGame();
        saygac = 0;
    }
}



function getRandom(max) {
    return Math.floor(Math.random() * max);
}



StartGame();