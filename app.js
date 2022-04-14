
class AudioPlayer{
    constructor(){
        this.audioFile = document.getElementById('audio');
        this.titleAudio = document.getElementById('title_audio');
        this.play = document.getElementById('play');
        this.pause = document.getElementById('pause');
        this.back = document.getElementById('back');
        this.next = document.getElementById('next');
        this.speed = document.getElementById('speed');
        this.sound = document.getElementById('sound');
        this.volumeValue = document.getElementById('volume_value');
        this.speedValue = document.getElementById('speed_value');

        this.divBefore = document.getElementById('div_before');

        this.divBefore2 =document.getElementById('div_before2');



        this.namesRadio = [];
        this.namesRadio[0] ="دمشق 88.30";
        this.namesRadio[1] ="صوت الشباب 88.70";
        this.namesRadio[2] ="ميلودي اف ام 97.90";
        this.namesRadio[3] ="الكرمة افم ام 104.4";
        this.namesRadio[4] ="90.88 العاصمة اف ام ";
        this.namesRadio[5] ="ريان اف ام 90.2 ";
        this.namesRadio[6] ="شام اف ام 92.3 ";
        this.namesRadio[7] ="101.1 نينار اف ام ";
        this.namesRadio[8] ="فويز اف ام 91.1 ";

        
        this.srcAudio = [];
        this.srcAudio [0]= "http://radioliveb.rtv.gov.sy:8008/RadioSouryana";
        this.srcAudio [1]= "http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.srcAudio [2]= "http://streaming.inet.sy:8000/melodyfm";
        this.srcAudio [3]= "http://radioliveb.rtv.gov.sy:8002/RadioKarma";
        this.srcAudio [4]= "http://ninarfm.grtvstream.com:8896/;";
        this.srcAudio [5]= "https://freeuk28.listen2myradio.com/live.mp3?typeportmount=s1_17532_stream_726858015";
        this.srcAudio [6]= "http://radioshamfm.grtvstream.com:8400/;stream.nsv";
        this.srcAudio [7]= "http://ninarfm.grtvstream.com:8896/;";
        this.srcAudio [8]= "http://192.99.17.12:4986/;stream.mp3";
        this.serverCounter = 0;





        this.setAudioSrc();


        this.play.addEventListener('click',()=>{
            this.playAudio();
            this.divBefore.classList.remove('endrotate');
            this.divBefore2.classList.remove('endrotate');
            this.divBefore.classList.add('rotate');
            this.divBefore2.classList.add('spin_width')
    
        });

        this.pause.addEventListener('click',()=>{
            this.pauseAudio();
            this.divBefore.classList.remove('rotate');
            this.divBefore2.classList.remove('spin_width')
            this.divBefore.classList.add('endrotate');
            this.divBefore2.classList.add('endrotate');



            
        });


        this.next.addEventListener('click',()=>{
            this.nextAudio();
        });

        this.back.addEventListener('click',()=>{
            this.backAudio();
        });

        this.sound.addEventListener('change',()=>{
            this.volume();
        });
        this.speed.addEventListener('click',()=>{
            this.speedAudio();
        });


        

    }


    setAudioSrc(){
        this.audioFile.src = this.srcAudio[this.serverCounter];
        this.titleAudio.innerHTML=this.namesRadio[this.serverCounter];
    }
    playAudio(){
        this.play.style.color = '#283593';
        this.pause.style.color = 'white';
        this.audioFile.play();
        this.divBefore.classList.add('rotate');

    }
    pauseAudio(){
        this.play.style.color = 'white';
        this.pause.style.color = '#283593';
        this.audioFile.pause();
    }

    nextAudio(){
        if(this.serverCounter<=this.srcAudio.length-1)
        {
            this.serverCounter++;
            
        }else{
            this.serverCounter = 0;
        }
        this.setAudioSrc();
        this.playAudio();
        
    }

    backAudio(){
        if(this.serverCounter>0)
        {
            this.serverCounter--;
        }else{
            this.serverCounter=this.srcAudio.length-1;
        }
        this.setAudioSrc();
        this.playAudio();

    }

    volume(){
        this.audioFile.volume = this.sound.value/100;
        setInterval(()=>{
            this.volumeValue.innerHTML = this.sound.value;
        },50)
    } 

    speedAudio(){
        this.audioFile.playbackRate =this.speed.value/100;
        setInterval(()=>{
            this.speedValue.innerHTML = this.speed.value;
        },50)
    }
}

onload = new AudioPlayer();








