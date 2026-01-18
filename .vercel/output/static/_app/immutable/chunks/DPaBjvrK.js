import {
	s as j,
	r as q,
	u as P,
	d as u,
	v as z,
	w as A,
	x as B,
	y as F,
	i as g,
	b as v,
	l as T,
	g as y,
	c as w,
	e as C,
	j as k,
	h as D,
	a as G,
	f as H,
	t as J
} from './Bit1RA6o.js';
import {
	S as K,
	i as L,
	f as N,
	d as E,
	t as d,
	a as $,
	m as I,
	c as M,
	b as S
} from './C5IiiZmU.js';
import { M as O } from './DY8D3DT7.js';
import { T as Q } from './183A4Jdq.js';
function R(l) {
	let e;
	return {
		c() {
			e = J(l[0]);
		},
		l(s) {
			e = H(s, l[0]);
		},
		m(s, r) {
			g(s, e, r);
		},
		p(s, r) {
			r & 1 && G(e, s[0]);
		},
		d(s) {
			s && u(e);
		}
	};
}
function U(l) {
	let e, s, r, f, i, _, n, m;
	function V(t) {
		l[2](t);
	}
	const b = {};
	(l[0] !== void 0 && (b.title = l[0]),
		(e = new Q({ props: b })),
		q.push(() => N(e, 'title', V)),
		(i = new O({ props: { $$slots: { default: [R] }, $$scope: { ctx: l } } })));
	const p = l[1].default,
		o = P(p, l, l[3], null);
	return {
		c() {
			(S(e.$$.fragment),
				(r = k()),
				(f = D('div')),
				S(i.$$.fragment),
				(_ = k()),
				(n = D('div')),
				o && o.c(),
				this.h());
		},
		l(t) {
			(M(e.$$.fragment, t), (r = y(t)), (f = w(t, 'DIV', { class: !0 })));
			const a = C(f);
			(M(i.$$.fragment, a), (_ = y(a)), (n = w(a, 'DIV', { class: !0 })));
			const c = C(n);
			(o && o.l(c), c.forEach(u), a.forEach(u), this.h());
		},
		h() {
			(T(n, 'class', 'col gap-5 flex-1'),
				T(f, 'class', 'flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12'));
		},
		m(t, a) {
			(I(e, t, a),
				g(t, r, a),
				g(t, f, a),
				I(i, f, null),
				v(f, _),
				v(f, n),
				o && o.m(n, null),
				(m = !0));
		},
		p(t, [a]) {
			const c = {};
			(!s && a & 1 && ((s = !0), (c.title = t[0]), z(() => (s = !1))), e.$set(c));
			const h = {};
			(a & 9 && (h.$$scope = { dirty: a, ctx: t }),
				i.$set(h),
				o && o.p && (!m || a & 8) && A(o, p, t, t[3], m ? F(p, t[3], a, null) : B(t[3]), null));
		},
		i(t) {
			m || ($(e.$$.fragment, t), $(i.$$.fragment, t), $(o, t), (m = !0));
		},
		o(t) {
			(d(e.$$.fragment, t), d(i.$$.fragment, t), d(o, t), (m = !1));
		},
		d(t) {
			(t && (u(r), u(f)), E(e, t), E(i), o && o.d(t));
		}
	};
}
function W(l, e, s) {
	let { $$slots: r = {}, $$scope: f } = e,
		{ title: i = 'Title' } = e;
	function _(n) {
		((i = n), s(0, i));
	}
	return (
		(l.$$set = (n) => {
			('title' in n && s(0, (i = n.title)), '$$scope' in n && s(3, (f = n.$$scope)));
		}),
		[i, r, _, f]
	);
}
class tt extends K {
	constructor(e) {
		(super(), L(this, e, W, U, j, { title: 0 }));
	}
}
export { tt as C };
