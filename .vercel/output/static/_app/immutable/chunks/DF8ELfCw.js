import {
	s as I,
	n as S,
	d as f,
	l as m,
	H as P,
	i as p,
	E as U,
	c as g,
	h as w,
	I as k,
	o as R,
	r as T,
	u as V,
	v as j,
	w as H,
	x as M,
	y as N,
	e as $,
	g as z,
	j as A
} from './Bit1RA6o.js';
import {
	S as y,
	i as C,
	d as E,
	t as v,
	a as b,
	m as q,
	c as D,
	b as L,
	f as B
} from './C5IiiZmU.js';
import { C as F } from './DPaBjvrK.js';
function G(o) {
	let e, t, n;
	return {
		c() {
			((e = w('input')), this.h());
		},
		l(s) {
			((e = g(s, 'INPUT', { placeholder: !0, class: !0 })), this.h());
		},
		h() {
			(m(e, 'placeholder', o[1]),
				m(
					e,
					'class',
					'text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em] svelte-c0g44u'
				));
		},
		m(s, i) {
			(p(s, e, i), P(e, o[0]), t || ((n = U(e, 'input', o[2])), (t = !0)));
		},
		p(s, [i]) {
			(i & 2 && m(e, 'placeholder', s[1]), i & 1 && e.value !== s[0] && P(e, s[0]));
		},
		i: S,
		o: S,
		d(s) {
			(s && f(e), (t = !1), n());
		}
	};
}
function J(o, e, t) {
	let { value: n = '' } = e,
		{ placeholder: s = '' } = e;
	function i() {
		((n = this.value), t(0, n));
	}
	return (
		(o.$$set = (r) => {
			('value' in r && t(0, (n = r.value)), 'placeholder' in r && t(1, (s = r.placeholder)));
		}),
		[n, s, i]
	);
}
class K extends y {
	constructor(e) {
		(super(), C(this, e, J, G, I, { value: 0, placeholder: 1 }));
	}
}
function O(o) {
	let e, t, n, s, i, r;
	function _(l) {
		o[4](l);
	}
	const u = { placeholder: 'Search...' };
	(o[0] !== void 0 && (u.value = o[0]), (t = new K({ props: u })), T.push(() => B(t, 'value', _)));
	const h = o[3].default,
		a = V(h, o, o[5], null);
	return {
		c() {
			((e = w('div')), L(t.$$.fragment), (s = A()), (i = w('div')), a && a.c(), this.h());
		},
		l(l) {
			e = g(l, 'DIV', { class: !0 });
			const c = $(e);
			(D(t.$$.fragment, c), c.forEach(f), (s = z(l)), (i = g(l, 'DIV', { class: !0 })));
			const d = $(i);
			(a && a.l(d), d.forEach(f), this.h());
		},
		h() {
			(m(e, 'class', 'w-100% row'), m(i, 'class', 'w-100% col flex-1'));
		},
		m(l, c) {
			(p(l, e, c), q(t, e, null), p(l, s, c), p(l, i, c), a && a.m(i, null), (r = !0));
		},
		p(l, c) {
			const d = {};
			(!n && c & 1 && ((n = !0), (d.value = l[0]), j(() => (n = !1))),
				t.$set(d),
				a && a.p && (!r || c & 32) && H(a, h, l, l[5], r ? N(h, l[5], c, null) : M(l[5]), null));
		},
		i(l) {
			r || (b(t.$$.fragment, l), b(a, l), (r = !0));
		},
		o(l) {
			(v(t.$$.fragment, l), v(a, l), (r = !1));
		},
		d(l) {
			(l && (f(e), f(s), f(i)), E(t), a && a.d(l));
		}
	};
}
function Q(o) {
	let e, t;
	return (
		(e = new F({ props: { title: o[1], $$slots: { default: [O] }, $$scope: { ctx: o } } })),
		{
			c() {
				L(e.$$.fragment);
			},
			l(n) {
				D(e.$$.fragment, n);
			},
			m(n, s) {
				(q(e, n, s), (t = !0));
			},
			p(n, [s]) {
				const i = {};
				(s & 2 && (i.title = n[1]), s & 33 && (i.$$scope = { dirty: s, ctx: n }), e.$set(i));
			},
			i(n) {
				t || (b(e.$$.fragment, n), (t = !0));
			},
			o(n) {
				(v(e.$$.fragment, n), (t = !1));
			},
			d(n) {
				E(e, n);
			}
		}
	);
}
function W(o, e, t) {
	let { $$slots: n = {}, $$scope: s } = e,
		{ title: i = 'Title' } = e,
		{ search: r = '' } = e;
	const _ = k();
	let u = !1;
	R(() => {
		const a = new URLSearchParams(window.location.search);
		(t(0, (r = a.get('q') ?? '')), t(2, (u = !0)));
	});
	function h(a) {
		((r = a), t(0, r));
	}
	return (
		(o.$$set = (a) => {
			('title' in a && t(1, (i = a.title)),
				'search' in a && t(0, (r = a.search)),
				'$$scope' in a && t(5, (s = a.$$scope)));
		}),
		(o.$$.update = () => {
			if (
				(o.$$.dirty & 1 && _('search', { search: r.trim().toLowerCase() }), o.$$.dirty & 5 && u)
			) {
				const a = new URLSearchParams(window.location.search);
				a.set('q', r);
				const l = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${a.toString()}`,
					c = window.history.state;
				window.history.replaceState(c, '', l);
			}
		}),
		[r, i, u, n, h, s]
	);
}
class x extends y {
	constructor(e) {
		(super(), C(this, e, W, Q, I, { title: 1, search: 0 }));
	}
}
export { x as S };
