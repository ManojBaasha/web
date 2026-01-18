import {
	s as U,
	o as Y,
	d as u,
	i as _,
	l as E,
	c as $,
	e as d,
	g as b,
	m as q,
	h as g,
	j as v,
	n as A,
	b as k,
	p as R,
	q as j,
	a as O,
	f as T,
	t as B
} from '../chunks/Bit1RA6o.js';
import {
	S as H,
	i as J,
	d as x,
	t as m,
	a as p,
	m as w,
	c as C,
	b as S,
	g as P,
	e as I
} from '../chunks/C5IiiZmU.js';
import { e as D } from '../chunks/D6uY3Cwt.js';
import { b as M } from '../chunks/MbKfcN8g.js';
import { M as K, a as X, b as z, S as F } from '../chunks/DshTmGMi.js';
import { S as G } from '../chunks/DF8ELfCw.js';
import { C as Q } from '../chunks/DMVypNoV.js';
import { U as L } from '../chunks/Bn7WCPkH.js';
function N(i, r, s) {
	const n = i.slice();
	return ((n[5] = r[s]), n);
}
function W(i) {
	let r, s, n, e;
	const a = [te, ee],
		o = [];
	function l(t, f) {
		return t[1].length === 0 ? 0 : 1;
	}
	return (
		(s = l(i)),
		(n = o[s] = a[s](i)),
		{
			c() {
				((r = g('div')), n.c());
			},
			l(t) {
				r = $(t, 'DIV', {});
				const f = d(r);
				(n.l(f), f.forEach(u));
			},
			m(t, f) {
				(_(t, r, f), o[s].m(r, null), (e = !0));
			},
			p(t, f) {
				const c = s;
				((s = l(t)),
					s === c
						? o[s].p(t, f)
						: (P(),
							m(o[c], 1, 1, () => {
								o[c] = null;
							}),
							I(),
							(n = o[s]),
							n ? n.p(t, f) : ((n = o[s] = a[s](t)), n.c()),
							p(n, 1),
							n.m(r, null)));
			},
			i(t) {
				e || (p(n), (e = !0));
			},
			o(t) {
				(m(n), (e = !1));
			},
			d(t) {
				(t && u(r), o[s].d());
			}
		}
	);
}
function Z(i) {
	let r,
		s,
		n,
		e,
		a = 'Try typing something...',
		o;
	return (
		(s = new L({ props: { icon: 'i-carbon-search-locate-mirror', classes: 'text-2em' } })),
		{
			c() {
				((r = g('div')),
					S(s.$$.fragment),
					(n = v()),
					(e = g('span')),
					(e.textContent = a),
					this.h());
			},
			l(l) {
				r = $(l, 'DIV', { class: !0 });
				const t = d(r);
				(C(s.$$.fragment, t),
					(n = b(t)),
					(e = $(t, 'SPAN', { 'data-svelte-h': !0 })),
					R(e) !== 'svelte-16h9bak' && (e.textContent = a),
					t.forEach(u),
					this.h());
			},
			h() {
				E(
					r,
					'class',
					'flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]'
				);
			},
			m(l, t) {
				(_(l, r, t), w(s, r, null), k(r, n), k(r, e), (o = !0));
			},
			p: A,
			i(l) {
				o || (p(s.$$.fragment, l), (o = !0));
			},
			o(l) {
				(m(s.$$.fragment, l), (o = !1));
			},
			d(l) {
				(l && u(r), x(s));
			}
		}
	);
}
function ee(i) {
	let r,
		s,
		n = D(i[1]),
		e = [];
	for (let o = 0; o < n.length; o += 1) e[o] = V(N(i, n, o));
	const a = (o) =>
		m(e[o], 1, 1, () => {
			e[o] = null;
		});
	return {
		c() {
			r = g('div');
			for (let o = 0; o < e.length; o += 1) e[o].c();
			this.h();
		},
		l(o) {
			r = $(o, 'DIV', { class: !0 });
			const l = d(r);
			for (let t = 0; t < e.length; t += 1) e[t].l(l);
			(l.forEach(u), this.h());
		},
		h() {
			E(r, 'class', 'flex flex-row flex-wrap gap-1');
		},
		m(o, l) {
			_(o, r, l);
			for (let t = 0; t < e.length; t += 1) e[t] && e[t].m(r, null);
			s = !0;
		},
		p(o, l) {
			if (l & 2) {
				n = D(o[1]);
				let t;
				for (t = 0; t < n.length; t += 1) {
					const f = N(o, n, t);
					e[t]
						? (e[t].p(f, l), p(e[t], 1))
						: ((e[t] = V(f)), e[t].c(), p(e[t], 1), e[t].m(r, null));
				}
				for (P(), t = n.length; t < e.length; t += 1) a(t);
				I();
			}
		},
		i(o) {
			if (!s) {
				for (let l = 0; l < n.length; l += 1) p(e[l]);
				s = !0;
			}
		},
		o(o) {
			e = e.filter(Boolean);
			for (let l = 0; l < e.length; l += 1) m(e[l]);
			s = !1;
		},
		d(o) {
			(o && u(r), j(e, o));
		}
	};
}
function te(i) {
	let r,
		s,
		n,
		e,
		a = 'Oops ! nothing to show !',
		o;
	return (
		(s = new L({ props: { icon: 'i-carbon-cube', classes: 'text-2em' } })),
		{
			c() {
				((r = g('div')),
					S(s.$$.fragment),
					(n = v()),
					(e = g('span')),
					(e.textContent = a),
					this.h());
			},
			l(l) {
				r = $(l, 'DIV', { class: !0 });
				const t = d(r);
				(C(s.$$.fragment, t),
					(n = b(t)),
					(e = $(t, 'SPAN', { 'data-svelte-h': !0 })),
					R(e) !== 'svelte-1peshqu' && (e.textContent = a),
					t.forEach(u),
					this.h());
			},
			h() {
				E(
					r,
					'class',
					'flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]'
				);
			},
			m(l, t) {
				(_(l, r, t), w(s, r, null), k(r, n), k(r, e), (o = !0));
			},
			p: A,
			i(l) {
				o || (p(s.$$.fragment, l), (o = !0));
			},
			o(l) {
				(m(s.$$.fragment, l), (o = !1));
			},
			d(l) {
				(l && u(r), x(s));
			}
		}
	);
}
function ne(i) {
	let r,
		s,
		n,
		e = i[5].name + '',
		a,
		o,
		l;
	return (
		(r = new L({ props: { icon: i[5].icon } })),
		{
			c() {
				(S(r.$$.fragment), (s = v()), (n = g('span')), (a = B(e)), (o = v()));
			},
			l(t) {
				(C(r.$$.fragment, t), (s = b(t)), (n = $(t, 'SPAN', {})));
				const f = d(n);
				((a = T(f, e)), f.forEach(u), (o = b(t)));
			},
			m(t, f) {
				(w(r, t, f), _(t, s, f), _(t, n, f), k(n, a), _(t, o, f), (l = !0));
			},
			p(t, f) {
				const c = {};
				(f & 2 && (c.icon = t[5].icon),
					r.$set(c),
					(!l || f & 2) && e !== (e = t[5].name + '') && O(a, e));
			},
			i(t) {
				l || (p(r.$$.fragment, t), (l = !0));
			},
			o(t) {
				(m(r.$$.fragment, t), (l = !1));
			},
			d(t) {
				(t && (u(s), u(n), u(o)), x(r, t));
			}
		}
	);
}
function V(i) {
	let r, s;
	return (
		(r = new Q({
			props: {
				href: `${M}/${i[5].to}`,
				classes: 'flex flex-row items-center gap-2',
				$$slots: { default: [ne] },
				$$scope: { ctx: i }
			}
		})),
		{
			c() {
				S(r.$$.fragment);
			},
			l(n) {
				C(r.$$.fragment, n);
			},
			m(n, e) {
				(w(r, n, e), (s = !0));
			},
			p(n, e) {
				const a = {};
				(e & 2 && (a.href = `${M}/${n[5].to}`),
					e & 258 && (a.$$scope = { dirty: e, ctx: n }),
					r.$set(a));
			},
			i(n) {
				s || (p(r.$$.fragment, n), (s = !0));
			},
			o(n) {
				(m(r.$$.fragment, n), (s = !1));
			},
			d(n) {
				x(r, n);
			}
		}
	);
}
function re(i) {
	let r, s, n, e, a, o;
	const l = [Z, W],
		t = [];
	function f(c, h) {
		return c[0] ? 1 : 0;
	}
	return (
		(n = f(i)),
		(e = t[n] = l[n](i)),
		{
			c() {
				((r = g('div')), (s = v()), e.c(), (a = q()), this.h());
			},
			l(c) {
				((r = $(c, 'DIV', { class: !0 })),
					d(r).forEach(u),
					(s = b(c)),
					e.l(c),
					(a = q()),
					this.h());
			},
			h() {
				E(r, 'class', 'flex flex-col items-stretch gap-10 p-2');
			},
			m(c, h) {
				(_(c, r, h), _(c, s, h), t[n].m(c, h), _(c, a, h), (o = !0));
			},
			p(c, h) {
				const y = n;
				((n = f(c)),
					n === y
						? t[n].p(c, h)
						: (P(),
							m(t[y], 1, 1, () => {
								t[y] = null;
							}),
							I(),
							(e = t[n]),
							e ? e.p(c, h) : ((e = t[n] = l[n](c)), e.c()),
							p(e, 1),
							e.m(a.parentNode, a)));
			},
			i(c) {
				o || (p(e), (o = !0));
			},
			o(c) {
				(m(e), (o = !1));
			},
			d(c) {
				(c && (u(r), u(s), u(a)), t[n].d(c));
			}
		}
	);
}
function le(i) {
	let r, s;
	return (
		(r = new G({ props: { title: i[2], $$slots: { default: [re] }, $$scope: { ctx: i } } })),
		r.$on('search', i[3]),
		{
			c() {
				S(r.$$.fragment);
			},
			l(n) {
				C(r.$$.fragment, n);
			},
			m(n, e) {
				(w(r, n, e), (s = !0));
			},
			p(n, [e]) {
				const a = {};
				(e & 259 && (a.$$scope = { dirty: e, ctx: n }), r.$set(a));
			},
			i(n) {
				s || (p(r.$$.fragment, n), (s = !0));
			},
			o(n) {
				(m(r.$$.fragment, n), (s = !1));
			},
			d(n) {
				x(r, n);
			}
		}
	);
}
function se(i, r, s) {
	const { title: n } = F;
	let e = '',
		a = [];
	Y(() => {
		const l = new URLSearchParams(window.location.search);
		s(0, (e = l.get('q') ?? ''));
	});
	const o = (l) => s(0, (e = l.detail.search));
	return (
		(i.$$.update = () => {
			i.$$.dirty & 3 &&
				(s(1, (a = [])),
				a.push(
					...K.filter((l) => e && l.name.toLowerCase().includes(e)).map((l) => ({
						data: l,
						icon: 'i-carbon-cube',
						name: l.name,
						to: `projects/${l.slug}`
					}))
				),
				a.push(
					...X.filter((l) => e && l.name.toLowerCase().includes(e)).map((l) => ({
						data: l,
						icon: 'i-carbon-software-resource-cluster',
						name: l.name,
						to: `skills/${l.slug}`
					}))
				),
				a.push(
					...z
						.filter(
							(l) => e && (l.name.toLowerCase().includes(e) || l.company.toLowerCase().includes(e))
						)
						.map((l) => ({
							data: l,
							icon: 'i-carbon-development',
							name: `${l.name} @ ${l.company}`,
							to: `experience/${l.slug}`
						}))
				));
		}),
		[e, a, n, o]
	);
}
class _e extends H {
	constructor(r) {
		(super(), J(this, r, se, le, U, {}));
	}
}
export { _e as component };
