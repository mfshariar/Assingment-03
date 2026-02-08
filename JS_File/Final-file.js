// Problem-01
function newPrice(currentPrice, discount) {
    // Your code here
    
    if(
        typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
    ){
     return "Invalid";
    }
    const discountAmount = (currentPrice * discount) / 100;
    const finalPrice = currentPrice - discountAmount;
    return finalPrice.toFixed(3);
}



// Problem-02
function validOtp(otp) {
    // Your code here
    if(
        typeof otp !== "string"
    ){
        return "Invalid";
    }
    if (
        otp.length === 8 && otp.startsWith("ph-")
    ){
        return true;
    }
    return false;
}




// Problem-03
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





// Problem-04
function gonoVote(array) {
    //write your code here
    if(
        !Array.isArray(array)
    ){
        return "Invalid"
    }
    let haCount = 0;
    let naCount = 0;

    for(
        let i = 0; i < array.length; i++
    ){
        if (array[i] === "ha"){
            haCount++;
        }
        else if (array[i] === "na"){
            naCount++;
        }
    }
    if(
        haCount > naCount
    ){
        return true;
        }
        else if (
            haCount === naCount
        ){
            return "equal";
        }
        else{
            return false;
        }
}





// Problem-05
function analyzeText(str) {
    // Your code here
    if(
        typeof str !== "string"
    ){
        return "Invalid"
    }
    if(
        str.trim().length === 0
    ){
        return "Invalid"
    }

    const token = str.split (" ").join("").length;
    const words = str.split(" ");
    let longwords = words[0];
    for(
        let i =0;
        i < words.length; i++
    ){
        if (words[i].length > longwords.length){
            longwords = words[i];
        }
    }
    return{
        longwords: longwords,
        token: token
    }
}