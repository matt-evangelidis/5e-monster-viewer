export const addPeriod = (s: string) => {
    if (s.charAt(s.length-1) === ".") {
        // console.log("addperiod", s);
        return s;
    }
    // console.log("addperiod result", s + ".");
    return s + ".";
};