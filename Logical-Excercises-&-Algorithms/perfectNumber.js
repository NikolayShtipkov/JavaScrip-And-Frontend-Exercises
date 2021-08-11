// function uses Euclid–Euler theorem to calculate the perfect numbers
// can calculate up to the first 8 perfect

function calculatingPrimes() {
    const isPrime = (n) => {
        const limit = Math.sqrt(n);
        for(var i = 2 ; i <= limit ; i++) {
          if(n % i === 0) return false;
        }
        return true;
      }
    
    const primes = [];
    var i = 2;
    while(primes.length < 11) {
      if(isPrime(i)) primes.push(i);
      i++;
    }
    
    primes.forEach(p => {
        const m = Math.pow(2, p) - 1; // calculate 2^p - 1
      
        if(!isPrime(m)) {
          return; 
        }
      
        const perfectNumber = Math.pow(2, p - 1) * m;
        console.log(perfectNumber);
    });
}

// function can find the first 4 perfect numbers

function findPerfectNumbers (numsToFind) {
    let perfectNumbers = [];
    let potentialNumber = 6;

    while (perfectNumbers.length < numsToFind) {
        let divisors = [];

        for (let i = 0; i < potentialNumber; i++) {
            if (potentialNumber % i === 0) {
                divisors.push(i);
            } 
        }

        if (divisors.length > 0) {
            let sum = divisors.reduce((n , m) => n + m);

            if (sum === potentialNumber) {
                perfectNumbers.push(potentialNumber);
            }
        }

        let check = potentialNumber.toString().split('');
        let ending = parseInt(check[check.length - 1]);

        if (ending === 6) {
            potentialNumber += 2;
        } else if (ending === 8) {
            potentialNumber += 8;
        }
    }
}

calculatingPrimes()