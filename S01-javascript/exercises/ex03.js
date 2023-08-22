/** 
 * TODO: Write a JavaScript function to extract unique characters from a string.
 * ? Example string : "thequickbrownfoxjumpsoverthelazydog"
 * ? Expected Output : "thequickbrownfxjmpsvlazydg"
 */

const extractUniqueFromString = function (string) {
    const uniqueString = new Set(string);
    return [...uniqueString].join("");
}

console.log(extractUniqueFromString("thequickbrownfoxjumpsoverthelazydog"));