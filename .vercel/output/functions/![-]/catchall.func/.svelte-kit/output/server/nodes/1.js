export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.Dy6TmQP2.js',
	'_app/immutable/chunks/Bit1RA6o.js',
	'_app/immutable/chunks/C5IiiZmU.js',
	'_app/immutable/chunks/D01eNnTx.js',
	'_app/immutable/chunks/Bc6wCebM.js',
	'_app/immutable/chunks/BRf0lue5.js',
	'_app/immutable/chunks/MbKfcN8g.js'
];
export const stylesheets = [];
export const fonts = [];
