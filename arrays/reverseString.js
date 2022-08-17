function reverse(str) {
    if (!str || typeof str != 'string' || str.length < 2) return str;

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

// Using built in functions: split, reverse, and join
function reverse2(str) {
    //check for valid input
    return str.split('').reverse().join('');
}

// ES6 way
const reverse3 = str => [...str].reverse().join('');

reverse('Timbits Hi')
reverse('Timbits Hi')
reverse3('Timbits Hi')