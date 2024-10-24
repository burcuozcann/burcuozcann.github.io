const lightbulbSwitch=document.querySelector('#lightbulb-switch');
const lightbulImage=document.querySelector('#lightBulb-image');
let isLightBulbOn=false;


lightbulbSwitch.addEventListener('click',function(){
    if(isLightBulbOn){
        lightbulImage.src='lightBulb-off.png';
        isLightBulbOn=false;
    }
    else{
        lightbulImage.src='lightBulb-on.png';
        isLightBulbOn=true;
    } 
});
