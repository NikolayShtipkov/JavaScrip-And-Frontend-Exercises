let obj = {
    Name: 'Pesho',
    age: 21
}

let prom = new Promise ((resolve, reject) => {

    if (obj.age >= 18) {
        resolve('You can drink!');
    } else {
        reject('Here, eat this carrot.');
    }

});

prom
    .then((resolvedValue) => {
        console.log(resolvedValue);
    })
    .then(() => {
            console.log('Play happy song!');
    })
    .catch((rejected) => {
        console.log(rejected);
    });