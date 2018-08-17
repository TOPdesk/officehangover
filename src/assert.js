export default function (condition, message) {
	if (!condition) {
		throw message || "Assertion failed";
	}
}