function cleanSet(set, startString) {
    let str = []; // Declaring str outside of the if block
    if (typeof startString == 'string' && startString !== '') {
        for (const x of set) {
            if (x.indexOf(startString) == 0) {
                str.push(x.slice(startString.length));
            }
        }
    }
    return str.join('-');
}

export default cleanSet;
