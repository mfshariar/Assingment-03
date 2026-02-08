function finalScore(omr) {
    //write your code here
    if (
        typeof omr !== "object" || Array.isArray(omr) || omr === null
    ){
        return "Invalid";
    }
    const{right, wrong, skip} = omr;
    

    if(
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ){
        return "Invalid";
    }
    if(
        right + wrong + skip !== 100
    ){
        return "Invalid";
    }
    const score = right - wrong * 0.5;
    return Math.round(score); 
}