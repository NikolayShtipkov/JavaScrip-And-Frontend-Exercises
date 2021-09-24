function frequency(s) {

    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < s.length; i++) {

        
        let count = 0;
        let str;
        let val;

        if (s[i + 1] === '(') {
            count = Number(s[i + 2]);
            str = s[i]
            val = Number(str);

            result[val - 1] += count;

            i += 3;

            continue;
        }
        
        if (s[i + 2] === '#') {

            if (s[i + 3] === '(') {
                count = Number(s[i + 2]);

                str = s[i] + s[i + 1] 
                val = Number(str);

                result[val - 1] += count;

                i += 5
            } else {
                str = s[i] + s[i + 1] 
                val = Number(str);

                result[val - 1]++;

                i += 2;
            }

            continue;
        }
            
            str = s[i];
            val = Number(str);

            result[val - 1]++;
    }

    

    return result;
}

console.log(frequency('2110#(2)'));


