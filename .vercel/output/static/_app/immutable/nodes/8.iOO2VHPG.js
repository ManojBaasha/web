import {
	s as S,
	d as f,
	i as h,
	l as m,
	c as p,
	e as $,
	h as g,
	q,
	b as D,
	g as I,
	j as O,
	f as V,
	t as w,
	n as P
} from '../chunks/Bit1RA6o.js';
import {
	S as R,
	i as j,
	d,
	t as _,
	a as u,
	m as b,
	c as v,
	b as k,
	g as z,
	e as A
} from '../chunks/C5IiiZmU.js';
import { e as C } from '../chunks/D6uY3Cwt.js';
import { C as x } from '../chunks/DMVypNoV.js';
import { C as B } from '../chunks/DPaBjvrK.js';
import { R as M } from '../chunks/DshTmGMi.js';
function E(a, e, n) {
	const t = a.slice();
	return ((t[2] = e[n]), t);
}
function U(a) {
	let e, n;
	return (
		(e = new x({ props: { $$slots: { default: [G] }, $$scope: { ctx: a } } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				v(e.$$.fragment, t);
			},
			m(t, r) {
				(b(e, t, r), (n = !0));
			},
			p(t, r) {
				const s = {};
				(r & 32 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s));
			},
			i(t) {
				n || (u(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				(_(e.$$.fragment, t), (n = !1));
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function F(a) {
	let e,
		n,
		t = C(a[0]),
		r = [];
	for (let l = 0; l < t.length; l += 1) r[l] = y(E(a, t, l));
	const s = (l) =>
		_(r[l], 1, 1, () => {
			r[l] = null;
		});
	return {
		c() {
			e = g('div');
			for (let l = 0; l < r.length; l += 1) r[l].c();
			this.h();
		},
		l(l) {
			e = p(l, 'DIV', { class: !0 });
			const c = $(e);
			for (let o = 0; o < r.length; o += 1) r[o].l(c);
			(c.forEach(f), this.h());
		},
		h() {
			m(e, 'class', 'resume-grid svelte-14g4sb');
		},
		m(l, c) {
			h(l, e, c);
			for (let o = 0; o < r.length; o += 1) r[o] && r[o].m(e, null);
			n = !0;
		},
		p(l, c) {
			if (c & 1) {
				t = C(l[0]);
				let o;
				for (o = 0; o < t.length; o += 1) {
					const i = E(l, t, o);
					r[o]
						? (r[o].p(i, c), u(r[o], 1))
						: ((r[o] = y(i)), r[o].c(), u(r[o], 1), r[o].m(e, null));
				}
				for (z(), o = t.length; o < r.length; o += 1) s(o);
				A();
			}
		},
		i(l) {
			if (!n) {
				for (let c = 0; c < t.length; c += 1) u(r[c]);
				n = !0;
			}
		},
		o(l) {
			r = r.filter(Boolean);
			for (let c = 0; c < r.length; c += 1) _(r[c]);
			n = !1;
		},
		d(l) {
			(l && f(e), q(r, l));
		}
	};
}
function G(a) {
	let e;
	return {
		c() {
			e = w('Ooops! no CV at the moment.');
		},
		l(n) {
			e = V(n, 'Ooops! no CV at the moment.');
		},
		m(n, t) {
			h(n, e, t);
		},
		d(n) {
			n && f(e);
		}
	};
}
function H(a) {
	let e = a[2].name + '',
		n;
	return {
		c() {
			n = w(e);
		},
		l(t) {
			n = V(t, e);
		},
		m(t, r) {
			h(t, n, r);
		},
		p: P,
		d(t) {
			t && f(n);
		}
	};
}
function y(a) {
	let e, n, t, r;
	return (
		(n = new x({ props: { size: '1.25em', $$slots: { default: [H] }, $$scope: { ctx: a } } })),
		{
			c() {
				((e = g('a')), k(n.$$.fragment), (t = O()), this.h());
			},
			l(s) {
				e = p(s, 'A', { href: !0, target: !0, rel: !0, class: !0 });
				const l = $(e);
				(v(n.$$.fragment, l), (t = I(l)), l.forEach(f), this.h());
			},
			h() {
				(m(e, 'href', a[2].url),
					m(e, 'target', '_blank'),
					m(e, 'rel', 'noopener noreferrer'),
					m(e, 'class', 'svelte-14g4sb'));
			},
			m(s, l) {
				(h(s, e, l), b(n, e, null), D(e, t), (r = !0));
			},
			p(s, l) {
				const c = {};
				(l & 32 && (c.$$scope = { dirty: l, ctx: s }), n.$set(c));
			},
			i(s) {
				r || (u(n.$$.fragment, s), (r = !0));
			},
			o(s) {
				(_(n.$$.fragment, s), (r = !1));
			},
			d(s) {
				(s && f(e), d(n));
			}
		}
	);
}
function J(a) {
	let e, n, t, r;
	const s = [F, U],
		l = [];
	function c(o, i) {
		return o[0] && o[0].length > 0 ? 0 : 1;
	}
	return (
		(n = c(a)),
		(t = l[n] = s[n](a)),
		{
			c() {
				((e = g('div')), t.c(), this.h());
			},
			l(o) {
				e = p(o, 'DIV', { class: !0 });
				const i = $(e);
				(t.l(i), i.forEach(f), this.h());
			},
			h() {
				m(e, 'class', 'resume svelte-14g4sb');
			},
			m(o, i) {
				(h(o, e, i), l[n].m(e, null), (r = !0));
			},
			p(o, i) {
				t.p(o, i);
			},
			i(o) {
				r || (u(t), (r = !0));
			},
			o(o) {
				(_(t), (r = !1));
			},
			d(o) {
				(o && f(e), l[n].d());
			}
		}
	);
}
function K(a) {
	let e, n;
	return (
		(e = new B({ props: { title: a[1], $$slots: { default: [J] }, $$scope: { ctx: a } } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				v(e.$$.fragment, t);
			},
			m(t, r) {
				(b(e, t, r), (n = !0));
			},
			p(t, [r]) {
				const s = {};
				(r & 32 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s));
			},
			i(t) {
				n || (u(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				(_(e.$$.fragment, t), (n = !1));
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function L(a) {
	const { items: e, title: n } = M;
	return [e, n];
}
class Z extends R {
	constructor(e) {
		(super(), j(this, e, L, K, S, {}));
	}
}
export { Z as component };
