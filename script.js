
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session'); 


    if(hrs >= 12){
        session.innerHTML  = 'PM';
    }else{
        session.innerHTML = 'AM';
    }
        

    
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;


}
setInterval(displayTime, 10);


var dateTime = new Date();
var hrs = dateTime.getHours();


 
if(hrs >= 18){
    document.querySelector(".bg").style.backgroundImage = "url('images/night.jpg')";
}else{
    document.querySelector(".bg").style.backgroundImage = "url('images/day.jpg')";
}