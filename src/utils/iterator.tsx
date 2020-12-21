export const iterator = (obj: object) => {
    let map = new Map;
    for (const [key,value] of Object.entries(obj)) {
        map.set(key, value.toString());
    }
    //console.log(map)
    
    return mapToArray(map);
};

const mapToArray = (map: Map<string, any>) => {
     const arr = [...map].map(([key,value]) => ( {key, value}) );
     //console.log(arr);
     return arr;
};