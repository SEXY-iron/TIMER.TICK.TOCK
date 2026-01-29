function startTimer (duration, display) {
    /* creates a function called "startTimer" that takes two imputs... 
                     (duration) = how long to count + (display) = where to show it) */ 
    var timer = duration, minutes, seconds; 
    var intervalId = setInterval(function () {
                  /* setInterval = runs code repeatedly */
    }, 1000); 
    /* Every 1000 miliseconds (1 second) the code inside the brackets runs */ 
      minutes = parseInt(timer / 60, 10) 
                       /* timer (60, 10)= divide total seconds by 60 to = get minutes */


}
