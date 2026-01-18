import { a as x, t as A } from './C5IiiZmU.js';
import { C as B } from './Bit1RA6o.js';
function _(s) {
	return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function j(s, h) {
	A(s, 1, 1, () => {
		h.delete(s.key);
	});
}
function q(s, h, v, C, L, g, l, N, y, R, o, S) {
	let i = s.length,
		a = g.length,
		c = i;
	const u = {};
	for (; c--; ) u[s[c].key] = c;
	const f = [],
		w = new Map(),
		m = new Map(),
		M = [];
	for (c = a; c--; ) {
		const e = S(L, g, c),
			n = v(e);
		let t = l.get(n);
		(t ? M.push(() => t.p(e, h)) : ((t = R(n, e)), t.c()),
			w.set(n, (f[c] = t)),
			n in u && m.set(n, Math.abs(c - u[n])));
	}
	const U = new Set(),
		k = new Set();
	function p(e) {
		(x(e, 1), e.m(N, o), l.set(e.key, e), (o = e.first), a--);
	}
	for (; i && a; ) {
		const e = f[a - 1],
			n = s[i - 1],
			t = e.key,
			d = n.key;
		e === n
			? ((o = e.first), i--, a--)
			: w.has(d)
				? !l.has(t) || U.has(t)
					? p(e)
					: k.has(d)
						? i--
						: m.get(t) > m.get(d)
							? (k.add(t), p(e))
							: (U.add(d), i--)
				: (y(n, l), i--);
	}
	for (; i--; ) {
		const e = s[i];
		w.has(e.key) || y(e, l);
	}
	for (; a; ) p(f[a - 1]);
	return (B(M), f);
}
const z = '' + new URL('../assets/ai.BruENUPN.png', import.meta.url).href,
	D = '' + new URL('../assets/skull.524od_61.png', import.meta.url).href;
export { z as a, _ as e, j as o, D as s, q as u };
