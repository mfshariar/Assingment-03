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
