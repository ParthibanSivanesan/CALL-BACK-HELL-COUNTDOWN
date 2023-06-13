let countdown = document.getElementById("countdown");
let seconds = 10;
let Flag = document.getElementById("flag");

setTimeout(()=>{
    countdown.innerHTML = seconds;
    seconds--;
      setTimeout(()=>{
        countdown.innerHTML = seconds;
        seconds--;
          setTimeout(()=>{
            countdown.innerHTML = seconds;
            seconds--;
              setTimeout(()=>{
                countdown.innerHTML = seconds;
                seconds--;
                  setTimeout(()=>{
                    countdown.innerHTML = seconds;
                    seconds--;
                      setTimeout(()=>{
                        countdown.innerHTML = seconds;
                        seconds--;
                          setTimeout(()=>{
                            countdown.innerHTML = seconds;
                            seconds--;
                              setTimeout(()=>{
                                countdown.innerHTML = seconds;
                                seconds--;
                                  setTimeout(()=>{
                                    countdown.innerHTML = seconds;
                                    seconds--;
                                      setTimeout(()=>{
                                        countdown.innerHTML = seconds;
                                        seconds--;
                                          setTimeout(()=>{
                                              countdown.style.color = 'blue';
                                              countdown.innerHTML = "Happy Independence Day!";
                                              Flag.style.display ='block';
                                          },1000)
                                      },1000)
                                  },1000)
                              },1000)
                          },1000)
                      },1000)
                  },1000)
              },1000)
          },1000)
      },1000)

},1000)