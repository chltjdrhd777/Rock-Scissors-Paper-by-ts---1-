var imgCoords = '0';
//interface RSP {
//    readonly ROCK : string;
//      readonly SCISSORS : string;
//      readonly PAPER : string;
//} about interface, If the property has a wide range of declariation like string, number .... I can put readonly to make as const.
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
}; //as const; // to prevent this const can be used another way.
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; }); //Object.keys() = makes the array which is made of property names. In this case, ['ROCK','PAPER','SCISSORS'/ .find = detect the first element that satisfies the precondition in the array. 
}
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var myChoice = this.textContent; // In this case, "this.textContent" === "parameter.target.textContent"
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) { // it means the option that I and computer chose is the same
            document.write('It is tie');
        }
        else if ([-1, 2].indexOf(diff)) { //*[a,b,c,d,e.....].indexOf(A) = in the middle of A, is there a,b,c,d,e.....? / and also it means I win.
            document.write('I win');
        }
        else {
            document.write('Computer win');
        }
    });
});
