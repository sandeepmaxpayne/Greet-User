var currentDate = new Date();
var hrs = currentDate.getHours();
var min = currentDate.getMinutes();
var h;
if (hrs > 12){
    h = hrs - 12;
}
if (hrs == 0){
    h = 00;
}

//document.write(min.toString().fontcolor('green').fontsize("20"));
var new_min;
document.write("Current Time: ".fontsize("3").fontcolor('blue'));
document.write(h.toString().fontsize("3").fontcolor("BlueViolet"));
document.write(":".fontsize("3").fontcolor('FireBrick'))
if (min.toString().length == 1){
    new_min = "0" + min.toString();
    document.write(new_min.toString().fontsize("3").fontcolor('BlueViolet'));
}else{
    document.write(min.toString().fontsize("3").fontcolor('BlueViolet'));
}

if (hrs >= 12){
    document.write(" PM".fontsize("3").fontcolor('DarkViolet'));
}else{
    document.write(" AM".fontsize("3").fontcolor('DeepPink'));
}

var greet;


if (hrs <= 12){
    greet = 'Good Morning'.fontcolor('magenta');
}
else if (hrs >= 12 && hrs <= 17){
    greet = 'Good AfterNoon'.fontcolor('green');
}
else if (hrs > 17 && hrs <= 24){
    greet = 'Good Evening'.fontcolor('purple');
}
document.getElementById('greetUser').outerHTML = greet;
document.body.style.backgroundColor = "GreenYellow";




