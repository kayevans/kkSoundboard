// namespace object
const kkSoundboard = {
    sounds: {
        bees: new Audio('./assets/chasedByBees.mp3'),
        DAL: new Audio('./assets/flyingToFriends.mp3'),
        newBug: new Audio('./assets/newBug.mp3'),
        stung: new Audio('./assets/stung.mp3'),
        mainTitle: new Audio('./assets/title.mp3'),
        nookMiles: new Audio('./assets/nookMilesAchievement.wav'),
        item: new Audio('./assets/pickingUpItem.wav'),
        furniture: new Audio('./assets/placeFurniture.wav'),
        tool: new Audio('./assets/toolTransformation.wav'),
        workBench: new Audio('./assets/craftingAtWorkBench.wav'),
        rock: new Audio('./assets/hittingAMoneyRock.wav'),
    }
};


// make init function
kkSoundboard.init = function(){
    
    // select all lis
    const buttons = document.querySelectorAll('.soundContainer button');

    // run for each loop to apply the event listener
    buttons.forEach(function(button){
        button.addEventListener('click', (event) => {

            // stop all other audio
            for (let sound in kkSoundboard.sounds){
                kkSoundboard.sounds[sound].pause();
            }
            
            // capture the key pressed in a variable
            const buttonPressed = event.target.classList[0];

            // capture the audio
            const audio = kkSoundboard.sounds[buttonPressed];
    
            // set the time to 0 to be able to spam the sound
            audio.currentTime = 0;
    
            // play the audio
            audio.play();
        });

        // add listeners for each button to remove styles
        button.addEventListener('transitionend', function(event){
            event.target.classList.remove('playing');
        })
    })

    // for trigger on key pressed
    document.addEventListener('keydown', function(event){

        // stop all other audio
        for (let sound in kkSoundboard.sounds){
            kkSoundboard.sounds[sound].pause();
        }

        // store the key pressed
        const key = event.key;

        // store the button class name for sound
        const buttonToSound = document.querySelector(`button.${key}`).classList[0];

        // add styles to the playing button
        document.querySelector(`button.${key}`).classList.add('playing');

        // capture the audio
        const audio = kkSoundboard.sounds[buttonToSound];

        // set the time to 0 to be able to spam the sound
        audio.currentTime = 0;
    
        // play the audio
        audio.play();



        
    })
    
    // when click button, stop all audio
    document.querySelector('.stop').addEventListener('click', function(){
        // stop all audio
        for (let sound in kkSoundboard.sounds){
            kkSoundboard.sounds[sound].pause();
        }
    })

}



// document ready
document.addEventListener("DOMContentLoaded", function() {

    // call initializing function
    kkSoundboard.init();
});
