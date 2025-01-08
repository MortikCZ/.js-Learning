const randomNumber = Math.floor(Math.random() * 9) + 1;

console.log("Question:       Is Codédex better than Udemy yet?");

if (randomNumber < 1) {
    console.log("Magic 8 Ball:   Yes - definitely.");
} else if (randomNumber < 2) {
    console.log("Magic 8 Ball:   It is decidedly so.");
} else if (randomNumber < 3) {
    console.log("Magic 8 Ball:   Without a doubt.");
} else if (randomNumber < 4) {
    console.log("Magic 8 Ball:   Reply hazy, try again.");
} else if (randomNumber < 5) {
    console.log("Magic 8 Ball:   Ask again later.");
} else if (randomNumber < 6) {
    console.log("Magic 8 Ball:   Better not tell you now.");
} else if (randomNumber < 7) {
    console.log("Magic 8 Ball:   My sources say no.");
} else if (randomNumber < 8) {
    console.log("Magic 8 Ball:   Outlook not so good.");
} else {
    console.log("Magic 8 Ball:   Very doubtful.")
}