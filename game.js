let start = document.getElementById("start");
let boundaries = document.getElementsByClassName("boundary");


function startTheGame() {
    var score = 0;
    var state = false;
    let end = document.getElementById("end");
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "#eeeeee";
        boundaries[i].addEventListener("mouseover", function () {
            for (let i = 0; i < boundaries.length; i++) {
                boundaries[i].style.backgroundColor = "red";
                state = true;

            }
            if (state == true) {
                score -= 10;
                state = false;
            }
            else {
                end.addEventListener("mouseover",function(){
                    score += 5;
                    alert(score);
                });

            }

        })

    }

}






