// Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.

// designerPdfViewer has the following parameter(s):

// h: an array of integers representing the heights of each letter
// word: a string

function designerPdfViewer(h, word) {
    const letters = word.split('')
    let wordSize = word.length
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let max = 0
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (letters[i] == alphabet[j]) {
                if (h[j] > max) {
                    max = h[j]
                }
            }
        }
    }
    return max * wordSize
}