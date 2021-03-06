export const objectToMap = (obj: object) => {
    const map = new Map();
    for (const [key, value] of Object.entries(obj)) {
        map.set(key, value);
    }
    return map;
};