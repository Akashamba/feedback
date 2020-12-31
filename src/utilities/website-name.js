export default function extractName(website) {
    return website.split("/").pop().split("-").map(word => word[0].toUpperCase()+word.substring(1)).join(" "); 
}