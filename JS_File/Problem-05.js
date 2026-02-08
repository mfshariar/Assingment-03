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