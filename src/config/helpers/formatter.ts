export class Formatter {
	static capitalizeFirstLetter(string: string): string {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	static truncateParagraph(text: string): string {
		return text.length > 150 ? text.slice(0, 150) + '...' : text
	}
} 