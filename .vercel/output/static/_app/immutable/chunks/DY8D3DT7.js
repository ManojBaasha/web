import {
	s as u,
	u as m,
	d as c,
	w as _,
	x as h,
	y as d,
	l as f,
	i as x,
	A as o,
	c as g,
	e as p,
	h as k
} from './Bit1RA6o.js';
import { S as b, i as v, t as w, a as y } from './C5IiiZmU.js';
function M(n) {
	let e, i, a;
	const r = n[2].default,
		s = m(r, n, n[1], null);
	return {
		c() {
			((e = k('h1')), s && s.c(), this.h());
		},
		l(t) {
			e = g(t, 'H1', { class: !0, style: !0 });
			const l = p(e);
			(s && s.l(l), l.forEach(c), this.h());
		},
		h() {
			(f(
				e,
				'class',
				(i = `font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${n[0]}`)
			),
				o(e, 'background', 'linear-gradient(var(--main-text), var(--accent-text-hover))'),
				o(e, '-webkit-background-clip', 'text'),
				o(e, 'background-clip', 'text'),
				o(e, '-webkit-text-fill-color', 'transparent'));
		},
		m(t, l) {
			(x(t, e, l), s && s.m(e, null), (a = !0));
		},
		p(t, [l]) {
			(s && s.p && (!a || l & 2) && _(s, r, t, t[1], a ? d(r, t[1], l, null) : h(t[1]), null),
				(!a ||
					(l & 1 &&
						i !==
							(i = `font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${t[0]}`))) &&
					f(e, 'class', i));
		},
		i(t) {
			a || (y(s, t), (a = !0));
		},
		o(t) {
			(w(s, t), (a = !1));
		},
		d(t) {
			(t && c(e), s && s.d(t));
		}
	};
}
function S(n, e, i) {
	let { $$slots: a = {}, $$scope: r } = e,
		{ classes: s = '' } = e;
	return (
		(n.$$set = (t) => {
			('classes' in t && i(0, (s = t.classes)), '$$scope' in t && i(1, (r = t.$$scope)));
		}),
		[s, r, a]
	);
}
class A extends b {
	constructor(e) {
		(super(), v(this, e, S, M, u, { classes: 0 }));
	}
}
export { A as M };
