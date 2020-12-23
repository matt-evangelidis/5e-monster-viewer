export const iterator = (obj: object) => {
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
        arr.push( {key, value} );
    }
    return arr;
};