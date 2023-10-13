const green = document.getElementById("green");
const amber = document.getElementById("amber");
const red = document.getElementById("red");

const green2 = document.getElementById("green2");
const amber2 = document.getElementById("amber2");
const red2 = document.getElementById("red2");

green.style.backgroundColor = "rgba(0, 255, 0, 0.75)";

setInterval(() => {
    green.style.backgroundColor = "rgba(0, 255, 0, 0.75)";
    green.style.boxShadow = "0px 0px 50px 1px rgb(0, 255, 0)";
    amber.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
    red.style.backgroundColor = "rgba(255, 0, 0, 0.25)"

    setTimeout(() => {
        green.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
        green.style.boxShadow = "";

        amber.style.backgroundColor = "rgba(255, 255, 0, 0.75)";
        amber.style.boxShadow = "0px 0px 50px 1px rgb(255, 255, 0)";
    }, 3000);

    setTimeout(() => {
        amber.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
        amber.style.boxShadow = "";

        red.style.backgroundColor = "rgba(255, 0, 0, 0.75)";
        red.style.boxShadow = "0px 0px 50px 1px rgb(255, 0, 0)";
    }, 4000);

    setTimeout(() => {
        red.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
        red.style.boxShadow = "";

        amber.style.backgroundColor = "rgba(255, 255, 0, 0.75)";
        amber.style.boxShadow = "0px 0px 50px 1px rgb(255, 255, 0)";
    }, 9000);

    setTimeout(() => {
        amber.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
        amber.style.boxShadow = "";
    }, 10000);
}, 10000);

red2.style.backgroundColor = "rgba(255, 0, 0, 0.75)";


setInterval(() => {
    green2.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
    amber2.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
    red2.style.backgroundColor = "rgba(255, 0, 0, 0.75)"
    red2.style.boxShadow = "0px 0px 50px 1px rgb(255, 0, 0)";

    setTimeout(() => {
        red2.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
        red2.style.boxShadow = "";

        amber2.style.backgroundColor = "rgba(255, 255, 0, 0.75)";
        amber2.style.boxShadow = "0px 0px 50px 1px rgb(255, 255, 0)";
    }, 3000);

    setTimeout(() => {
        amber2.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
        amber2.style.boxShadow = "";

        green2.style.backgroundColor = "rgba(0, 255, 0, 0.75)";
        green2.style.boxShadow = "0px 0px 50px 1px rgb(0, 255, 0)";
    }, 4000);

    setTimeout(() => {
        green2.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
        green2.style.boxShadow = "";

        amber2.style.backgroundColor = "rgba(255, 255, 0, 0.75)";
        amber2.style.boxShadow = "0px 0px 50px 1px rgb(255, 255, 0)";
    }, 9000);

    setTimeout(() => {
        amber2.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
        amber2.style.boxShadow = "";
    }, 10000);
}, 10000);

setTimeout(() => {
    document.getElementById("loading").style.opacity = "0";
    document.getElementById("loading").style.pointerEvents = "none";
}, 10000);
