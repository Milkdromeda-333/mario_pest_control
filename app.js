const baddies = [
    {
        name: "goomba",
        coins: 5
    },
    {
        name: "bobomb",
        coins: 7
    },
    {
        name: "cheepcheep",
        coins: 11
    }
];


document.addEventListener("submit", (e) => {
    e.preventDefault();
    //this gets the value of the input field
    const goombas = document.getElementById("goomba").value;
    const bobombs = document.getElementById("bobomb").value;
    const cheepcheeps = document.getElementById("cheepcheep").value;
    // this is the accumulator of the values
    let goombaTotal = document.getElementById("goombaAccumulator");
    let bobombTotal = document.getElementById("bobombAccumulator");
    let cheepcheepTotal = document.getElementById("cheepcheepAccumulator");
    let coinsOwed = document.getElementById("totalCoins");
    // this sets the totals in the form
    goombaTotal.textContent = `${goombas} x goombas`;
    bobombTotal.textContent = `${bobombs} x bobombs`;
    cheepcheepTotal.textContent = `${cheepcheeps} x cheepcheeps`;
    // this function returns the amount of coins owed
    let grandTotal = totalCoinsCalculator(goombas, bobombs, cheepcheeps);
    // displays grand total
    coinsOwed.textContent = grandTotal;

});

function totalCoinsCalculator(goombas, bobombs, cheepcheeps) {
    const num1 = goombas * baddies[0].coins;
    const num2 = bobombs * baddies[1].coins;
    const num3 = cheepcheeps * baddies[2].coins;
    return num1 + num2 + num3;
}