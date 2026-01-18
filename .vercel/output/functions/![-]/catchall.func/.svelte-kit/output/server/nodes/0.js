import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/0.C0szykbx.js',
	'_app/immutable/chunks/Bit1RA6o.js',
	'_app/immutable/chunks/C5IiiZmU.js',
	'_app/immutable/chunks/D6uY3Cwt.js',
	'_app/immutable/chunks/D01eNnTx.js',
	'_app/immutable/chunks/Bc6wCebM.js',
	'_app/immutable/chunks/BRf0lue5.js',
	'_app/immutable/chunks/MbKfcN8g.js',
	'_app/immutable/chunks/DshTmGMi.js',
	'_app/immutable/chunks/Bn7WCPkH.js',
	'_app/immutable/chunks/CqrzjQjn.js',
	'_app/immutable/chunks/CgU5AtxT.js',
	'_app/immutable/chunks/CRYyLF0A.js'
];
export const stylesheets = [
	'_app/immutable/assets/StarBackground.4yJs9L6d.css',
	'_app/immutable/assets/0.D_2Ok0If.css'
];
export const fonts = [];
