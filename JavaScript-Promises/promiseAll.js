let person = new Promise ((resolve, reject) => {

    let obj = {
        Name: 'Pesho',
        age: 21
    }

    if (obj.age >= 18) {
        resolve('You can drink!');
    } else {
        reject('Here, eat this carrot.');
    }

});

let randomNum = new Promise((resolve, reject) => {

    let num = Math.random();

    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
});

let status = new Promise((resolve, reject) => {

    let condition = true;

    if(condition) {
        resolve('Obvious promise is obvious');
    } else {
        reject('it will most likely not gonna be rejected... unless')
    }
});

let myPromises = Promise.all([person, randomNum, status]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
});