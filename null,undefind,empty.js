var text = "abc";
var display = text.match(/a/);
console.log(display);

//NULL
var text = "abc";
var display = text.match(/d/);  
console.log(display);   //NULL

//Undefind
var noise;
console.log(noise); //Undefind

noise = 'thunder';  
console.log(noise);

var game = {
    score: 1000
}
console.log(game.Score);    //Undefind

//Empty String

var name1 = "";
var name2 = '';