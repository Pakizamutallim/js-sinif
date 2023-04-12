// var n=255 ;


// if (n>9 && n<100) { 
//     var t=n%10;
//     var o=(n-t)/10;

//     if (t==o) {
//         alert ("beraberdir");
//     }
//     if (t!=o) {
//         alert("b deyil")
//     }
// }  




// var n = prompt("Eded daxil edin:");   //1234
// if (n>999 && n<10000) {
//     var t=n%10;
//     var o=((n%100)-t)/10;
//     var y=((n%1000)-(n%100))/100;
//     var m= (n-(n%1000))/1000; 
//     var sum= t+o+y+m 
//     alert(sum);
// }


var month = prompt("Which month?"); 
switch (month) {
    case "yanvar": 
    console.log(31);
    break;

    case "fevral": 
    console.log(30);
    break;

    case "mart": 
    console.log(31); 
    break;

    case "aprel": 
    console.log(30);
    break;

    case "yanvar":
    case "iyul":
    case "avqust":
    console.log(31);
    break; 

    default: 30
        break;
}