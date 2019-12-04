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

document.write(h);
document.write(":")
document.write(min);
if (hrs >= 12){
    document.write(" PM");
}else{
    document.write(" AM");
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
document.body.style.backgroundColor = "#02f085";


