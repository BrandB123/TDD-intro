export function reverseString(string){
    const chars = string.split("");
    let reversedString = "";
    for (let i = 1; i <= chars.length; i++){
        reversedString += chars[chars.length - i];
    }
    return reversedString;
}