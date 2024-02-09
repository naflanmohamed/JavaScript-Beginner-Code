// for(var year = 2023; year< 2025; year++){
//     console.log(year);
// }

for(var year = 2023; year< 2025; year++){   //outer loop
    console.log(year);
        for(var month = 6; month <9 ; month++){ //inner loop
            console.log(month);
        }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

