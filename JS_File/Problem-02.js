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