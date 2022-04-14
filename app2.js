class Screen{
    constructor(){
        var mainPlayer = document.getElementById('main_player');
        var section_control = document.getElementById('section_control');
        var section_main = document.getElementById('section_main');
        mainPlayer.style.height = screen.height +"px";
        if(screen.width<500)
        {
            mainPlayer.style.width = screen.width +"px";
            section_main.style.width = screen.width +"px";
            section_control.style.width = screen.width +"px";
            section_main.style.height = "380px";
            section_control.style.height = screen.height +"px";

            // mainPlayer.style.overflow = "hidden";
            // document.body.style.overflow ="hidden";
        }

        this.mode11 = document.getElementById('mode1');
        this.mode22 = document.getElementById('mode2');
        this.mode33 = document.getElementById('mode3');

        this.mode11.addEventListener('click',()=>{
            mainPlayer.classList.remove('mode22','mode33');
            mainPlayer.classList.add('mode11');
            document.body.classList.remove('mode22','mode33');
            document.body.classList.add('mode11');
        });
        this.mode22.addEventListener('click',()=>{
            mainPlayer.classList.remove('mode11','mode33');
            mainPlayer.classList.add('mode22');
            document.body.classList.remove('mode11','mode33');
            document.body.classList.add('mode22');
        });
        this.mode33.addEventListener('click',()=>{
            mainPlayer.classList.remove('mode11','mode22');
            mainPlayer.classList.add('mode33');
            document.body.classList.remove('mode11','mode22');
            document.body.classList.add('mode33');
        });

    }
}
onload = new Screen();