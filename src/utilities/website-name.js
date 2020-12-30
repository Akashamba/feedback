export default function extractName(website) {
    return website.replace("/", "").split("-").map(word => word[0].toUpperCase()+word.substring(1)).join(" "); 
}