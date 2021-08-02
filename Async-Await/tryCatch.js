let randomSuccess = () => {
    let num = Math.random();

    if (num < .5 ){
      return true;
    } else {
      return false;
    }
};

let slotMachine = () => {
    return new Promise((resolve, reject) => {
      console.log('waiting for results...');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('Winner Winner Chicken Dinner');
        } else {
          reject('Dinner is ruined!');
        }
      }, 1000);
    })
   };

   async function hostParty() {
    try {
      let money = await slotMachine();
      console.log(`${money}, lets gooo`);
    }
   catch(error) {
     console.log(error);
     console.log('No Money, no honey!');
   }
 }
 hostParty();