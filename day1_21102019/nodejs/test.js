function pppp(login){
    let status;
    status = (login==='employee') ? 'Hello' :
    (login==='director') ? 'Greeting' :
    (login==='') ? 'No Login' : '';
    console.log(status);
    }
    
    pppp('')