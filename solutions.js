const largestPalindromeExample = (str) => {
    let largestPalindrome = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length; j > i; j--) {
            const substring = str.substring(i, j)
            if (substring === substring.split("").reverse().join("")) {
                if (substring.length > largestPalindrome.length) {
                    largestPalindrome = substring;
                }
                break;
            }
        }
    }
    return largestPalindrome;
}