module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber);
    let seconds = turns / (turnsSpeed / 3600);
    console.log({turns, seconds});
    return {turns, seconds};
}