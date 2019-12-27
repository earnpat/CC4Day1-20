// function synchronous ทำต่อๆกันไปเลย
setTimeout(function () {
    console.log('second (show after \'first\' 1 sec))');
   }, 1000); //1000 ms
   console.log('first');