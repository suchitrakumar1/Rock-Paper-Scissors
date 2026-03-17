let userinput;
let r = document.querySelector("#rock");
r.addEventListener("click", () => {
    userinput = "rock";
    checkwinner(userinput);
})
let p = document.querySelector("#paper");
p.addEventListener("click", () => {
    userinput = "paper";
    checkwinner(userinput);
})
let s = document.querySelector("#scissors");
s.addEventListener("click", () => {
    userinput = "scissors";
    checkwinner(userinput);
})
let user = document.querySelector("#user-score");
let computer = document.querySelector("#comp-score")
let msgbox = document.querySelector("#msg");
let countu = 0;
let countc = 0;
const checkwinner = (userinput) => {
    let compinput;
    let comp = Math.floor(Math.random() * 3);
    if (comp == 0) {
        compinput = "rock"
    }
    else if (comp == 1) {
        compinput = "paper";
    }
    else {
        compinput = "scissors"
    }
    if (compinput === userinput) {
        msgbox.innerText = "It Is a Draw";
        msgbox.style.color = "green";
    }
    else if (
        (compinput === "rock" && userinput === "scissors") ||
        (compinput === "paper" && userinput === "rock") ||
        (compinput === "scissors" && userinput === "paper")
    ) {
        countc++;
        computer.innerText = countc;
        msgbox.innerText = `You Lost! ${compinput} Beats ${userinput}`;
        msgbox.style.color = "red";
    } else {
        countu++;
        user.innerText = countu;
        msgbox.innerText = `You Won! ${userinput} beats ${compinput}`;
        msgbox.style.color = "green";
    }
}   
// Built on: (19 march)
// My current level: beginner (learning DOM + logic)
// Things I struggled with: event listeners, conditions, bugs