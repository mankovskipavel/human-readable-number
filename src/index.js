module.exports = function toReadable (number) {
//let a=''
let ed=""

if(number==0) return "zero"
let hundred=""
let hun=Math.floor(number/100)
if (number>99) {
    hundred=first12(hun)+" hundred"
        if (number%100!=0) {hundred+=" "}

}
let ndec=""

//while (number>0){
let a=number%100
if (a<=19){
switch(a)
{
case 1:ed='one';break;
case 2:ed='two';break;
case 3:ed='three';break;
case 4:ed='four';break;
case 5:ed='five';break;
case 6:ed='six';break;
case 7:ed='seven';break;
case 8:ed='eight';break;
case 9:ed='nine';break;
case 10:ed='ten';break;
case 11:ed='eleven';break;
case 12:ed='twelve';break;
case 13:ed='thirteen';break;
case 14:ed='fourteen';break;
case 15:ed='fifteen';break;
case 16:ed='sixteen';break;
case 17:ed='seventeen';break;
case 18:ed='eighteen';break;
case 19:ed='nineteen';break;
}
} else {ed=first12(number%10)}
            


if (a>19) {ndec=dec(Math.floor(number%100/10))
                if (number%10!=0) {ndec+=" "}}
//let result
//return
return hundred+ndec+ed

//}


}


function first12(aa){
    
let ed=""    
switch(aa)
    {
    case 1:ed='one';break;
    case 2:ed='two';break;
    case 3:ed='three';break;
    case 4:ed='four';break;
    case 5:ed='five';break;
    case 6:ed='six';break;
    case 7:ed='seven';break;
    case 8:ed='eight';break;
    case 9:ed='nine';break;
    case 10:ed='ten';break;
    case 11:ed='twelve';break;
    case 12:ed='two';break;
    }
    return ed
}

function dec(aa){
    let ed=""
    switch(aa){
        case 1:ed='ten';break;
        case 2:ed='twenty';break;
        case 3:ed='thirty';break;
        case 4:ed='forty';break;
        case 5:ed='fifty';break;
        case 6:ed='sixty';break;
        case 7:ed='seventy';break;
        case 8:ed='eighty';break;
        case 9:ed='ninety';break;
        //case 10:ed='ten';break;
    }
return ed

}

