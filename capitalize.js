export function capitalize(string){
    const chars = string.split("");
    chars[0] = chars[0].toUpperCase();
    const formattedString = chars.join("");
    return formattedString;
}