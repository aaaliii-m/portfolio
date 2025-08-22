/**
 * Truncates text to a specified number of words
 * @param text - The text to truncate
 * @param maxWords - Maximum number of words to keep
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxWords: number = 15): string => {
    const words = text.split(' ');
    if (words.length <= maxWords) {
        return text;
    }
    return words.slice(0, maxWords).join(' ') + '...';
};

/**
 * Truncates text to a specified number of characters
 * @param text - The text to truncate
 * @param maxChars - Maximum number of characters to keep
 * @returns Truncated text with ellipsis if needed
 */
export const truncateTextByChars = (text: string, maxChars: number = 100): string => {
    if (text.length <= maxChars) {
        return text;
    }
    return text.slice(0, maxChars) + '...';
};

/**
 * Truncates an array of technologies to fit on one line
 * @param technologies - Array of technology strings
 * @param maxTechnologies - Maximum number of technologies to show
 * @returns Truncated technologies string with ellipsis if needed
 */
export const truncateTechnologies = (technologies: string[], maxTechnologies: number = 3): string => {
    if (technologies.length <= maxTechnologies) {
        return technologies.join(' ');
    }
    return technologies.slice(0, maxTechnologies).join(' ') + '...';
}; 