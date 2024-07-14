export const cutPargraph = (text: string) => {
	return text.length > 50 ? text.slice(0, 50) + '...' : text
}
