class Time{
    constructor(){
        this.timeClock();
        setInterval(this.timeClock,100);

    }

    timeClock(){
        var time = new Date();
        var clock = document.getElementById('time');
        clock.innerHTML = time.getHours()-12+":"+time.getMinutes()+":"+time.getSeconds();
    }
}
onload = new Time();