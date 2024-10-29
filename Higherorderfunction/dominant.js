function dominantDirection(text) {
    const counted = countBy(text, char => {
        const script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    if (counted.length === 0) return "ltr"; // Default if no scripts are found

    // Find the direction with the maximum count
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// Example usage:
console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl
