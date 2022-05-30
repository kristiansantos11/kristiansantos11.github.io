const birbImage = document.querySelector(".random-birb");

const birbButton = document.getElementById("birb-button");

birbButton.addEventListener("click", getRandomBirb);

function getRandomBirb() {
    console.log("Fetching data.");
    try{
        fetch("https://some-random-api.ml/animal/birb")
        .then((response) => response.json())
        .then((data) => {
            birbImage.innerHTML = `<img src=${data.image}>`;
        });
    }catch (err){
        console.log("Empty JSON received");
    }
    
}