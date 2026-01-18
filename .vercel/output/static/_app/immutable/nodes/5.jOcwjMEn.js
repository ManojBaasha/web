import { b as be, E as xe, d as W, g as ie } from '../chunks/DshTmGMi.js';
import {
	s as ke,
	d as $,
	i as T,
	l as C,
	g as P,
	c as w,
	e as I,
	j as y,
	h as E,
	n as $e,
	b as _,
	p as de,
	q as ce,
	a as G,
	f as A,
	t as R
} from '../chunks/Bit1RA6o.js';
import {
	S as we,
	i as Ee,
	d as S,
	t as k,
	a as x,
	e as Z,
	m as M,
	c as N,
	b as j,
	g as ee
} from '../chunks/C5IiiZmU.js';
import { e as Q } from '../chunks/D6uY3Cwt.js';
import { C as Ce } from '../chunks/DhhK2uIV.js';
import { M as Ie } from '../chunks/DY8D3DT7.js';
import { b as fe } from '../chunks/MbKfcN8g.js';
import { B as De, M as Ve } from '../chunks/ChKwMNII.js';
import { T as Pe } from '../chunks/183A4Jdq.js';
import { C as he } from '../chunks/DMVypNoV.js';
import { U as ne } from '../chunks/Bn7WCPkH.js';
import { C as ye } from '../chunks/EoRxU2mJ.js';
function Te({ params: i }) {
	if (i.slug) return { experience: be.find((l) => l.slug === i.slug) };
}
const et = Object.freeze(
	Object.defineProperty({ __proto__: null, load: Te }, Symbol.toStringTag, { value: 'Module' })
);
function ue(i, e, l) {
	const t = i.slice();
	return ((t[3] = e[l]), t);
}
function pe(i, e, l) {
	const t = i.slice();
	return ((t[3] = e[l]), t);
}
function Se(i) {
	let e, l, t, r, n, f, a, s;
	l = new De({
		props: { img: W(i[0].experience.logo), $$slots: { default: [Ae] }, $$scope: { ctx: i } }
	});
	const m = [Ue, Re],
		o = [];
	function b(d, v) {
		return d[0].experience.description ? 0 : 1;
	}
	return (
		(f = b(i)),
		(a = o[f] = m[f](i)),
		{
			c() {
				((e = E('div')),
					j(l.$$.fragment),
					(t = y()),
					(r = E('div')),
					(n = E('div')),
					a.c(),
					this.h());
			},
			l(d) {
				e = w(d, 'DIV', { class: !0 });
				const v = I(e);
				(N(l.$$.fragment, v), (t = P(v)), (r = w(v, 'DIV', { class: !0 })));
				const B = I(r);
				n = w(B, 'DIV', { class: !0 });
				const V = I(n);
				(a.l(V), V.forEach($), B.forEach($), v.forEach($), this.h());
			},
			h() {
				(C(n, 'class', 'px-10px m-y-5'),
					C(r, 'class', 'pt-3 pb-1 overflow-x-hidden w-full'),
					C(e, 'class', 'flex flex-col items-center overflow-x-hidden'));
			},
			m(d, v) {
				(T(d, e, v), M(l, e, null), _(e, t), _(e, r), _(r, n), o[f].m(n, null), (s = !0));
			},
			p(d, v) {
				const B = {};
				(v & 1 && (B.img = W(d[0].experience.logo)),
					v & 257 && (B.$$scope = { dirty: v, ctx: d }),
					l.$set(B));
				const V = f;
				((f = b(d)),
					f === V
						? o[f].p(d, v)
						: (ee(),
							k(o[V], 1, 1, () => {
								o[V] = null;
							}),
							Z(),
							(a = o[f]),
							a ? a.p(d, v) : ((a = o[f] = m[f](d)), a.c()),
							x(a, 1),
							a.m(n, null)));
			},
			i(d) {
				s || (x(l.$$.fragment, d), x(a), (s = !0));
			},
			o(d) {
				(k(l.$$.fragment, d), k(a), (s = !1));
			},
			d(d) {
				(d && $(e), S(l), o[f].d());
			}
		}
	);
}
function Me(i) {
	let e,
		l,
		t,
		r,
		n = 'Could not load experience data...',
		f;
	return (
		(l = new ne({ props: { icon: 'i-carbon-cube', classes: 'text-3.5em' } })),
		{
			c() {
				((e = E('div')), j(l.$$.fragment), (t = y()), (r = E('p')), (r.textContent = n), this.h());
			},
			l(a) {
				e = w(a, 'DIV', { class: !0 });
				const s = I(e);
				(N(l.$$.fragment, s),
					(t = P(s)),
					(r = w(s, 'P', { class: !0, 'data-svelte-h': !0 })),
					de(r) !== 'svelte-1o82fhi' && (r.textContent = n),
					s.forEach($),
					this.h());
			},
			h() {
				(C(r, 'class', 'font-300'),
					C(e, 'class', 'p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]'));
			},
			m(a, s) {
				(T(a, e, s), M(l, e, null), _(e, t), _(e, r), (f = !0));
			},
			p: $e,
			i(a) {
				f || (x(l.$$.fragment, a), (f = !0));
			},
			o(a) {
				(k(l.$$.fragment, a), (f = !1));
			},
			d(a) {
				(a && $(e), S(l));
			}
		}
	);
}
function Ne(i) {
	let e = i[0].experience.name + '',
		l;
	return {
		c() {
			l = R(e);
		},
		l(t) {
			l = A(t, e);
		},
		m(t, r) {
			T(t, l, r);
		},
		p(t, r) {
			r & 1 && e !== (e = t[0].experience.name + '') && G(l, e);
		},
		d(t) {
			t && $(l);
		}
	};
}
function je(i) {
	let e,
		l,
		t,
		r,
		n = i[3].label + '',
		f,
		a,
		s;
	return (
		(l = new ne({ props: { icon: 'i-carbon-link' } })),
		{
			c() {
				((e = E('div')),
					j(l.$$.fragment),
					(t = y()),
					(r = E('span')),
					(f = R(n)),
					(a = y()),
					this.h());
			},
			l(m) {
				e = w(m, 'DIV', { class: !0 });
				const o = I(e);
				(N(l.$$.fragment, o), (t = P(o)), (r = w(o, 'SPAN', {})));
				const b = I(r);
				((f = A(b, n)), b.forEach($), o.forEach($), (a = P(m)), this.h());
			},
			h() {
				C(e, 'class', 'row-center gap-2');
			},
			m(m, o) {
				(T(m, e, o), M(l, e, null), _(e, t), _(e, r), _(r, f), T(m, a, o), (s = !0));
			},
			p(m, o) {
				(!s || o & 1) && n !== (n = m[3].label + '') && G(f, n);
			},
			i(m) {
				s || (x(l.$$.fragment, m), (s = !0));
			},
			o(m) {
				(k(l.$$.fragment, m), (s = !1));
			},
			d(m) {
				(m && ($(e), $(a)), S(l));
			}
		}
	);
}
function me(i) {
	let e, l;
	return (
		(e = new he({ props: { href: i[3].to, $$slots: { default: [je] }, $$scope: { ctx: i } } })),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				N(e.$$.fragment, t);
			},
			m(t, r) {
				(M(e, t, r), (l = !0));
			},
			p(t, r) {
				const n = {};
				(r & 1 && (n.href = t[3].to), r & 257 && (n.$$scope = { dirty: r, ctx: t }), e.$set(n));
			},
			i(t) {
				l || (x(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(k(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function Be(i) {
	let e,
		l,
		t,
		r = i[3].name + '',
		n,
		f,
		a;
	return (
		(e = new Ce({
			props: { src: W(i[3].logo), alt: i[3].name, radius: '0px', size: 15, classes: 'mr-2' }
		})),
		{
			c() {
				(j(e.$$.fragment), (l = y()), (t = E('span')), (n = R(r)), (f = y()), this.h());
			},
			l(s) {
				(N(e.$$.fragment, s), (l = P(s)), (t = w(s, 'SPAN', { class: !0 })));
				const m = I(t);
				((n = A(m, r)), m.forEach($), (f = P(s)), this.h());
			},
			h() {
				C(t, 'class', 'text-[0.9em]');
			},
			m(s, m) {
				(M(e, s, m), T(s, l, m), T(s, t, m), _(t, n), T(s, f, m), (a = !0));
			},
			p(s, m) {
				const o = {};
				(m & 1 && (o.src = W(s[3].logo)),
					m & 1 && (o.alt = s[3].name),
					e.$set(o),
					(!a || m & 1) && r !== (r = s[3].name + '') && G(n, r));
			},
			i(s) {
				a || (x(e.$$.fragment, s), (a = !0));
			},
			o(s) {
				(k(e.$$.fragment, s), (a = !1));
			},
			d(s) {
				(s && ($(l), $(t), $(f)), S(e, s));
			}
		}
	);
}
function _e(i) {
	let e, l;
	return (
		(e = new he({
			props: {
				classes: 'inline-flex flex-row items-center justify-center',
				href: `${fe}/skills/${i[3].slug}`,
				$$slots: { default: [Be] },
				$$scope: { ctx: i }
			}
		})),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				N(e.$$.fragment, t);
			},
			m(t, r) {
				(M(e, t, r), (l = !0));
			},
			p(t, r) {
				const n = {};
				(r & 1 && (n.href = `${fe}/skills/${t[3].slug}`),
					r & 257 && (n.$$scope = { dirty: r, ctx: t }),
					e.$set(n));
			},
			i(t) {
				l || (x(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(k(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function Ae(i) {
	let e,
		l,
		t,
		r,
		n,
		f = i[0].experience.company + '',
		a,
		s,
		m = i[0].experience.location + '',
		o,
		b,
		d = i[0].experience.type + '',
		v,
		B,
		V,
		J = ie(i[0].experience.period.from, i[0].experience.period.to) + '',
		K,
		te,
		H,
		z,
		le,
		L,
		re,
		O,
		U;
	((t = new Ie({ props: { $$slots: { default: [Ne] }, $$scope: { ctx: i } } })), (z = new ye({})));
	let X = Q(i[0].experience.links),
		h = [];
	for (let c = 0; c < X.length; c += 1) h[c] = me(pe(i, X, c));
	const ge = (c) =>
		k(h[c], 1, 1, () => {
			h[c] = null;
		});
	let Y = Q(i[0].experience.skills),
		g = [];
	for (let c = 0; c < Y.length; c += 1) g[c] = _e(ue(i, Y, c));
	const ve = (c) =>
		k(g[c], 1, 1, () => {
			g[c] = null;
		});
	return {
		c() {
			((e = E('div')),
				(l = E('div')),
				j(t.$$.fragment),
				(r = y()),
				(n = E('p')),
				(a = R(f)),
				(s = R(' · ')),
				(o = R(m)),
				(b = R(' · ')),
				(v = R(d)),
				(B = y()),
				(V = E('p')),
				(K = R(J)),
				(te = y()),
				(H = E('div')),
				j(z.$$.fragment),
				(le = y()),
				(L = E('div')));
			for (let c = 0; c < h.length; c += 1) h[c].c();
			((re = y()), (O = E('div')));
			for (let c = 0; c < g.length; c += 1) g[c].c();
			this.h();
		},
		l(c) {
			e = w(c, 'DIV', { class: !0 });
			const u = I(e);
			l = w(u, 'DIV', { class: !0 });
			const D = I(l);
			(N(t.$$.fragment, D), D.forEach($), (r = P(u)), (n = w(u, 'P', { class: !0 })));
			const p = I(n);
			((a = A(p, f)),
				(s = A(p, ' · ')),
				(o = A(p, m)),
				(b = A(p, ' · ')),
				(v = A(p, d)),
				p.forEach($),
				(B = P(u)),
				(V = w(u, 'P', { class: !0 })));
			const q = I(V);
			((K = A(q, J)), q.forEach($), (te = P(u)), (H = w(u, 'DIV', { class: !0 })));
			const se = I(H);
			(N(z.$$.fragment, se), se.forEach($), (le = P(u)), (L = w(u, 'DIV', { class: !0 })));
			const ae = I(L);
			for (let F = 0; F < h.length; F += 1) h[F].l(ae);
			(ae.forEach($), (re = P(u)), (O = w(u, 'DIV', { class: !0 })));
			const oe = I(O);
			for (let F = 0; F < g.length; F += 1) g[F].l(oe);
			(oe.forEach($), u.forEach($), this.h());
		},
		h() {
			(C(l, 'class', 'text-0.9em'),
				C(n, 'class', 'font-300 text-[var(--tertiary-text)] m-y-2 text-center'),
				C(V, 'class', 'font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center'),
				C(H, 'class', 'w-75%'),
				C(L, 'class', 'row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2'),
				C(O, 'class', 'row-center flex-wrap m-b-2'),
				C(e, 'class', 'col-center p-y-20'));
		},
		m(c, u) {
			(T(c, e, u),
				_(e, l),
				M(t, l, null),
				_(e, r),
				_(e, n),
				_(n, a),
				_(n, s),
				_(n, o),
				_(n, b),
				_(n, v),
				_(e, B),
				_(e, V),
				_(V, K),
				_(e, te),
				_(e, H),
				M(z, H, null),
				_(e, le),
				_(e, L));
			for (let D = 0; D < h.length; D += 1) h[D] && h[D].m(L, null);
			(_(e, re), _(e, O));
			for (let D = 0; D < g.length; D += 1) g[D] && g[D].m(O, null);
			U = !0;
		},
		p(c, u) {
			const D = {};
			if (
				(u & 257 && (D.$$scope = { dirty: u, ctx: c }),
				t.$set(D),
				(!U || u & 1) && f !== (f = c[0].experience.company + '') && G(a, f),
				(!U || u & 1) && m !== (m = c[0].experience.location + '') && G(o, m),
				(!U || u & 1) && d !== (d = c[0].experience.type + '') && G(v, d),
				(!U || u & 1) &&
					J !== (J = ie(c[0].experience.period.from, c[0].experience.period.to) + '') &&
					G(K, J),
				u & 1)
			) {
				X = Q(c[0].experience.links);
				let p;
				for (p = 0; p < X.length; p += 1) {
					const q = pe(c, X, p);
					h[p]
						? (h[p].p(q, u), x(h[p], 1))
						: ((h[p] = me(q)), h[p].c(), x(h[p], 1), h[p].m(L, null));
				}
				for (ee(), p = X.length; p < h.length; p += 1) ge(p);
				Z();
			}
			if (u & 1) {
				Y = Q(c[0].experience.skills);
				let p;
				for (p = 0; p < Y.length; p += 1) {
					const q = ue(c, Y, p);
					g[p]
						? (g[p].p(q, u), x(g[p], 1))
						: ((g[p] = _e(q)), g[p].c(), x(g[p], 1), g[p].m(O, null));
				}
				for (ee(), p = Y.length; p < g.length; p += 1) ve(p);
				Z();
			}
		},
		i(c) {
			if (!U) {
				(x(t.$$.fragment, c), x(z.$$.fragment, c));
				for (let u = 0; u < X.length; u += 1) x(h[u]);
				for (let u = 0; u < Y.length; u += 1) x(g[u]);
				U = !0;
			}
		},
		o(c) {
			(k(t.$$.fragment, c), k(z.$$.fragment, c), (h = h.filter(Boolean)));
			for (let u = 0; u < h.length; u += 1) k(h[u]);
			g = g.filter(Boolean);
			for (let u = 0; u < g.length; u += 1) k(g[u]);
			U = !1;
		},
		d(c) {
			(c && $(e), S(t), S(z), ce(h, c), ce(g, c));
		}
	};
}
function Re(i) {
	let e,
		l,
		t,
		r,
		n = 'No description...',
		f;
	return (
		(l = new ne({ props: { icon: 'i-carbon-text-font', classes: 'text-3.5em' } })),
		{
			c() {
				((e = E('div')), j(l.$$.fragment), (t = y()), (r = E('p')), (r.textContent = n), this.h());
			},
			l(a) {
				e = w(a, 'DIV', { class: !0 });
				const s = I(e);
				(N(l.$$.fragment, s),
					(t = P(s)),
					(r = w(s, 'P', { class: !0, 'data-svelte-h': !0 })),
					de(r) !== 'svelte-kl0ixf' && (r.textContent = n),
					s.forEach($),
					this.h());
			},
			h() {
				(C(r, 'class', 'font-300'),
					C(e, 'class', 'p-5 col-center gap-3 m-y-auto text-[var(--border)]'));
			},
			m(a, s) {
				(T(a, e, s), M(l, e, null), _(e, t), _(e, r), (f = !0));
			},
			p: $e,
			i(a) {
				f || (x(l.$$.fragment, a), (f = !0));
			},
			o(a) {
				(k(l.$$.fragment, a), (f = !1));
			},
			d(a) {
				(a && $(e), S(l));
			}
		}
	);
}
function Ue(i) {
	let e, l;
	return (
		(e = new Ve({
			props: { content: i[0].experience.description ?? 'This place is yet to be filled...' }
		})),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				N(e.$$.fragment, t);
			},
			m(t, r) {
				(M(e, t, r), (l = !0));
			},
			p(t, r) {
				const n = {};
				(r & 1 && (n.content = t[0].experience.description ?? 'This place is yet to be filled...'),
					e.$set(n));
			},
			i(t) {
				l || (x(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(k(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function qe(i) {
	let e, l, t, r, n, f;
	e = new Pe({ props: { title: i[1] } });
	const a = [Me, Se],
		s = [];
	function m(o, b) {
		return o[0].experience === void 0 ? 0 : 1;
	}
	return (
		(r = m(i)),
		(n = s[r] = a[r](i)),
		{
			c() {
				(j(e.$$.fragment), (l = y()), (t = E('div')), n.c(), this.h());
			},
			l(o) {
				(N(e.$$.fragment, o), (l = P(o)), (t = w(o, 'DIV', { class: !0 })));
				const b = I(t);
				(n.l(b), b.forEach($), this.h());
			},
			h() {
				C(t, 'class', 'pb-10 overflow-x-hidden col flex-1');
			},
			m(o, b) {
				(M(e, o, b), T(o, l, b), T(o, t, b), s[r].m(t, null), (f = !0));
			},
			p(o, [b]) {
				const d = {};
				(b & 2 && (d.title = o[1]), e.$set(d));
				const v = r;
				((r = m(o)),
					r === v
						? s[r].p(o, b)
						: (ee(),
							k(s[v], 1, 1, () => {
								s[v] = null;
							}),
							Z(),
							(n = s[r]),
							n ? n.p(o, b) : ((n = s[r] = a[r](o)), n.c()),
							x(n, 1),
							n.m(t, null)));
			},
			i(o) {
				f || (x(e.$$.fragment, o), x(n), (f = !0));
			},
			o(o) {
				(k(e.$$.fragment, o), k(n), (f = !1));
			},
			d(o) {
				(o && ($(l), $(t)), S(e, o), s[r].d());
			}
		}
	);
}
function ze(i, e, l) {
	let t,
		{ data: r } = e;
	const { title: n } = xe;
	return (
		(i.$$set = (f) => {
			'data' in f && l(0, (r = f.data));
		}),
		(i.$$.update = () => {
			i.$$.dirty & 1 && l(1, (t = r.experience ? `${r.experience.name} - ${n}` : n));
		}),
		[r, t]
	);
}
class tt extends we {
	constructor(e) {
		(super(), Ee(this, e, ze, qe, ke, { data: 0 }));
	}
}
export { tt as component, et as universal };
