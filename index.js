#! /usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";
figlet.defaults({ fontPath: "assets/fonts" });
function ready() {
    console.log(figlet.textSync("Countdown Timer"));
}
ready();
let countDownDate = new Date("March 1, 2023  10:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = countDownDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(days);
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(seconds);
    console.log(chalk.blue(days + "d " + hours + "hrs "
        + minutes + "min" + " " + seconds + "sec "));
    if (diff < 0) {
        clearInterval(x);
        "EXPIRED";
    }
}, 1000);
