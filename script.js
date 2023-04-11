
const drumButtons =document.querySelectorAll(".drumset");

drumButtons.forEach((button) => {
    button.addEventListener ("click", () => {
        const audio = makeSound(button.classList[0]);
        audio.play ();
    });
});


document.addEventListener("keypress", (event) =>{
    const audio = makeSound ( event.key)
    audio.play ();
});



const makeSound = (button) => {

    
    switch(button){

        case "a":
        return new Audio("Sounds/boom.wav");
        break;

        case "s":
        return new Audio("Sounds/clap.wav");
        break;

        case "d":
        return new Audio("Sounds/hihat.wav");
        break;

        case "f":
        return new Audio("Sounds/kick.wav");
        break;

        case "g":
        return new Audio("Sounds/openhat.wav");
        break;

        case "h":
        return new Audio("Sounds/ride.wav");
        break;

        case "j":
        return new Audio("Sounds/snare.wav");
        break;

        case "k":
        return new Audio("Sounds/tink.wav");
        break;

        case "l":
        return new Audio("Sounds/tom.wav");
        break;
    }
    };

    