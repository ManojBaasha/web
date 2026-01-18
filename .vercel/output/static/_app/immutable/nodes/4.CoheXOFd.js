import {
	s as me,
	d,
	q as he,
	a as de,
	i as U,
	b as p,
	l as k,
	c as C,
	e as D,
	g as P,
	f as le,
	h as E,
	j as M,
	t as oe,
	n as Z,
	p as _e,
	m as se
} from '../chunks/Bit1RA6o.js';
import {
	S as ue,
	i as pe,
	d as I,
	t as w,
	a as _,
	m as V,
	c as y,
	b as L,
	g as re,
	e as ne
} from '../chunks/C5IiiZmU.js';
import { e as O, u as ve, o as we } from '../chunks/D6uY3Cwt.js';
import { g as be, c as ae, d as Q, E as xe } from '../chunks/DshTmGMi.js';
import { C as ke, a as Ce, b as K } from '../chunks/BeGvk43w.js';
import { C as Ee } from '../chunks/DhhK2uIV.js';
import { b as W } from '../chunks/MbKfcN8g.js';
import { U as G } from '../chunks/Bn7WCPkH.js';
import { S as De } from '../chunks/DF8ELfCw.js';
import { i as Ie } from '../chunks/boLkdWn5.js';
function ie(s, t, r) {
	const e = s.slice();
	return ((e[5] = t[r]), e);
}
function Ve(s) {
	let t, r;
	return (
		(t = new G({ props: { icon: 'i-carbon-building' } })),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				(V(t, e, n), (r = !0));
			},
			p: Z,
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				(w(t.$$.fragment, e), (r = !1));
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function ye(s) {
	let t, r;
	return (
		(t = new G({ props: { icon: 'i-carbon-location' } })),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				(V(t, e, n), (r = !0));
			},
			p: Z,
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				(w(t.$$.fragment, e), (r = !1));
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Le(s) {
	let t, r;
	return (
		(t = new G({ props: { icon: 'i-carbon-hourglass' } })),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				(V(t, e, n), (r = !0));
			},
			p: Z,
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				(w(t.$$.fragment, e), (r = !1));
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function ce(s) {
	let t, r;
	return (
		(t = new K({
			props: { logo: Q(s[5].logo), name: s[5].name, href: `${W}/skills/${s[5].slug}` }
		})),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				(V(t, e, n), (r = !0));
			},
			p(e, n) {
				const a = {};
				(n & 1 && (a.logo = Q(e[5].logo)),
					n & 1 && (a.name = e[5].name),
					n & 1 && (a.href = `${W}/skills/${e[5].slug}`),
					t.$set(a));
			},
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				(w(t.$$.fragment, e), (r = !1));
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Se(s) {
	let t,
		r,
		e,
		n,
		a,
		c,
		$,
		o,
		l,
		f,
		h,
		q,
		g,
		x,
		S,
		F,
		ee,
		R,
		A = s[0].shortDescription + '',
		J,
		te,
		B,
		H;
	((r = new Ee({ props: { src: Q(s[0].logo), alt: s[0].company, size: 75 } })),
		(c = new Ce({ props: { title: s[0].name } })),
		(l = new K({
			props: { name: `Company: ${s[0].company}`, $$slots: { default: [Ve] }, $$scope: { ctx: s } }
		})),
		(h = new K({
			props: { name: `Location: ${s[0].location}`, $$slots: { default: [ye] }, $$scope: { ctx: s } }
		})),
		(g = new K({
			props: { name: `Contract: ${s[0].contract}`, $$slots: { default: [Le] }, $$scope: { ctx: s } }
		})));
	let N = O(s[0].skills),
		u = [];
	for (let i = 0; i < N.length; i += 1) u[i] = ce(ie(s, N, i));
	const ge = (i) =>
		w(u[i], 1, 1, () => {
			u[i] = null;
		});
	return {
		c() {
			((t = E('div')),
				L(r.$$.fragment),
				(e = M()),
				(n = E('div')),
				(a = E('h3')),
				L(c.$$.fragment),
				($ = M()),
				(o = E('div')),
				L(l.$$.fragment),
				(f = M()),
				L(h.$$.fragment),
				(q = M()),
				L(g.$$.fragment),
				(x = M()),
				(S = E('div')),
				(F = oe(s[1])),
				(ee = M()),
				(R = E('div')),
				(J = oe(A)),
				(te = M()),
				(B = E('div')));
			for (let i = 0; i < u.length; i += 1) u[i].c();
			this.h();
		},
		l(i) {
			t = C(i, 'DIV', { class: !0 });
			const m = D(t);
			(y(r.$$.fragment, m), (e = P(m)), (n = C(m, 'DIV', { class: !0 })));
			const v = D(n);
			a = C(v, 'H3', { class: !0 });
			const X = D(a);
			(y(c.$$.fragment, X), X.forEach(d), ($ = P(v)), (o = C(v, 'DIV', { class: !0 })));
			const j = D(o);
			(y(l.$$.fragment, j),
				(f = P(j)),
				y(h.$$.fragment, j),
				(q = P(j)),
				y(g.$$.fragment, j),
				j.forEach(d),
				(x = P(v)),
				(S = C(v, 'DIV', { class: !0 })));
			const T = D(S);
			((F = le(T, s[1])), T.forEach(d), (ee = P(v)), (R = C(v, 'DIV', { class: !0 })));
			const Y = D(R);
			((J = le(Y, A)), Y.forEach(d), (te = P(v)), (B = C(v, 'DIV', { class: !0 })));
			const b = D(B);
			for (let z = 0; z < u.length; z += 1) u[z].l(b);
			(b.forEach(d), v.forEach(d), m.forEach(d), this.h());
		},
		h() {
			(k(
				a,
				'class',
				'flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center'
			),
				k(o, 'class', 'row flex-wrap m-b-2 gap-1 text-0.9em font-300'),
				k(S, 'class', 'text-[var(--accent-text)] text-[0.9em] font-200'),
				k(R, 'class', 'experience-description'),
				k(B, 'class', 'flex flex-row flex-wrap mt-5'),
				k(n, 'class', 'col ml-0 md:ml-[20px] gap-3 w-full'),
				k(t, 'class', 'col md:flex-row items-start gap-5 md:gap-1'));
		},
		m(i, m) {
			(U(i, t, m),
				V(r, t, null),
				p(t, e),
				p(t, n),
				p(n, a),
				V(c, a, null),
				p(n, $),
				p(n, o),
				V(l, o, null),
				p(o, f),
				V(h, o, null),
				p(o, q),
				V(g, o, null),
				p(n, x),
				p(n, S),
				p(S, F),
				p(n, ee),
				p(n, R),
				p(R, J),
				p(n, te),
				p(n, B));
			for (let v = 0; v < u.length; v += 1) u[v] && u[v].m(B, null);
			H = !0;
		},
		p(i, m) {
			const v = {};
			(m & 1 && (v.src = Q(i[0].logo)), m & 1 && (v.alt = i[0].company), r.$set(v));
			const X = {};
			(m & 1 && (X.title = i[0].name), c.$set(X));
			const j = {};
			(m & 1 && (j.name = `Company: ${i[0].company}`),
				m & 256 && (j.$$scope = { dirty: m, ctx: i }),
				l.$set(j));
			const T = {};
			(m & 1 && (T.name = `Location: ${i[0].location}`),
				m & 256 && (T.$$scope = { dirty: m, ctx: i }),
				h.$set(T));
			const Y = {};
			if (
				(m & 1 && (Y.name = `Contract: ${i[0].contract}`),
				m & 256 && (Y.$$scope = { dirty: m, ctx: i }),
				g.$set(Y),
				(!H || m & 1) && A !== (A = i[0].shortDescription + '') && de(J, A),
				m & 1)
			) {
				N = O(i[0].skills);
				let b;
				for (b = 0; b < N.length; b += 1) {
					const z = ie(i, N, b);
					u[b]
						? (u[b].p(z, m), _(u[b], 1))
						: ((u[b] = ce(z)), u[b].c(), _(u[b], 1), u[b].m(B, null));
				}
				for (re(), b = N.length; b < u.length; b += 1) ge(b);
				ne();
			}
		},
		i(i) {
			if (!H) {
				(_(r.$$.fragment, i),
					_(c.$$.fragment, i),
					_(l.$$.fragment, i),
					_(h.$$.fragment, i),
					_(g.$$.fragment, i));
				for (let m = 0; m < N.length; m += 1) _(u[m]);
				H = !0;
			}
		},
		o(i) {
			(w(r.$$.fragment, i),
				w(c.$$.fragment, i),
				w(l.$$.fragment, i),
				w(h.$$.fragment, i),
				w(g.$$.fragment, i),
				(u = u.filter(Boolean)));
			for (let m = 0; m < u.length; m += 1) w(u[m]);
			H = !1;
		},
		d(i) {
			(i && d(t), I(r), I(c), I(l), I(h), I(g), he(u, i));
		}
	};
}
function Pe(s) {
	let t, r;
	return (
		(t = new ke({
			props: {
				color: s[0].color,
				margin: '0px 0px 20px 0px',
				tiltDegree: 2,
				href: `${W}/experience/${s[0].slug}`,
				$$slots: { default: [Se] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				(V(t, e, n), (r = !0));
			},
			p(e, [n]) {
				const a = {};
				(n & 1 && (a.color = e[0].color),
					n & 1 && (a.href = `${W}/experience/${e[0].slug}`),
					n & 257 && (a.$$scope = { dirty: n, ctx: e }),
					t.$set(a));
			},
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				(w(t.$$.fragment, e), (r = !1));
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Me(s, t, r) {
	let { experience: e } = t;
	const n = be(e.period.from, e.period.to),
		a = `${ae(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,
		c = e.period.to ? `${ae(e.period.to.getMonth())} ${e.period.to.getFullYear()}` : 'Present',
		$ = `${a} - ${c} · ${n}`;
	return (
		(s.$$set = (o) => {
			'experience' in o && r(0, (e = o.experience));
		}),
		[e, $]
	);
}
class je extends ue {
	constructor(t) {
		(super(), pe(this, t, Me, Pe, me, { experience: 0 }));
	}
}
function fe(s, t, r) {
	const e = s.slice();
	return ((e[4] = t[r]), (e[6] = r), e);
}
function qe(s) {
	let t,
		r,
		e = [],
		n = new Map(),
		a,
		c,
		$ = O(s[0]);
	const o = (l) => l[4].slug;
	for (let l = 0; l < $.length; l += 1) {
		const f = fe(s, $, l),
			h = o(f);
		n.set(h, (e[l] = $e(h, f)));
	}
	return {
		c() {
			((t = E('div')), (r = M()));
			for (let l = 0; l < e.length; l += 1) e[l].c();
			((a = se()), this.h());
		},
		l(l) {
			((t = C(l, 'DIV', { class: !0 })), D(t).forEach(d), (r = P(l)));
			for (let f = 0; f < e.length; f += 1) e[f].l(l);
			((a = se()), this.h());
		},
		h() {
			k(
				t,
				'class',
				'w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded'
			);
		},
		m(l, f) {
			(U(l, t, f), U(l, r, f));
			for (let h = 0; h < e.length; h += 1) e[h] && e[h].m(l, f);
			(U(l, a, f), (c = !0));
		},
		p(l, f) {
			f & 1 &&
				(($ = O(l[0])), re(), (e = ve(e, f, o, 1, l, $, n, a.parentNode, we, $e, a, fe)), ne());
		},
		i(l) {
			if (!c) {
				for (let f = 0; f < $.length; f += 1) _(e[f]);
				c = !0;
			}
		},
		o(l) {
			for (let f = 0; f < e.length; f += 1) w(e[f]);
			c = !1;
		},
		d(l) {
			l && (d(t), d(r), d(a));
			for (let f = 0; f < e.length; f += 1) e[f].d(l);
		}
	};
}
function Be(s) {
	let t,
		r,
		e,
		n,
		a = 'Could not find anything...',
		c;
	return (
		(r = new G({ props: { icon: 'i-carbon-development', classes: 'text-3.5em' } })),
		{
			c() {
				((t = E('div')), L(r.$$.fragment), (e = M()), (n = E('p')), (n.textContent = a), this.h());
			},
			l($) {
				t = C($, 'DIV', { class: !0 });
				const o = D(t);
				(y(r.$$.fragment, o),
					(e = P(o)),
					(n = C(o, 'P', { class: !0, 'data-svelte-h': !0 })),
					_e(n) !== 'svelte-1jyyf6v' && (n.textContent = a),
					o.forEach(d),
					this.h());
			},
			h() {
				(k(n, 'class', 'font-300'),
					k(t, 'class', 'p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1'));
			},
			m($, o) {
				(U($, t, o), V(r, t, null), p(t, e), p(t, n), (c = !0));
			},
			p: Z,
			i($) {
				c || (_(r.$$.fragment, $), (c = !0));
			},
			o($) {
				(w(r.$$.fragment, $), (c = !1));
			},
			d($) {
				($ && d(t), I(r));
			}
		}
	);
}
function $e(s, t) {
	let r, e, n, a, c, $, o, l, f, h, q;
	return (
		(c = new G({ props: { icon: 'i-carbon-condition-point', classes: '' } })),
		(l = new je({ props: { experience: t[4] } })),
		{
			key: s,
			first: null,
			c() {
				((r = E('div')),
					(e = E('div')),
					(n = M()),
					(a = E('div')),
					L(c.$$.fragment),
					($ = M()),
					(o = E('div')),
					L(l.$$.fragment),
					(f = M()),
					this.h());
			},
			l(g) {
				r = C(g, 'DIV', { class: !0 });
				const x = D(r);
				((e = C(x, 'DIV', { class: !0 })),
					D(e).forEach(d),
					(n = P(x)),
					(a = C(x, 'DIV', { class: !0 })));
				const S = D(a);
				(y(c.$$.fragment, S), S.forEach(d), ($ = P(x)), (o = C(x, 'DIV', { class: !0 })));
				const F = D(o);
				(y(l.$$.fragment, F), F.forEach(d), (f = P(x)), x.forEach(d), this.h());
			},
			h() {
				(k(e, 'class', 'flex-1 hidden lg:flex'),
					k(a, 'class', 'hidden lg:inline p-15px bg-[var(--main)] rounded'),
					k(o, 'class', 'flex-1 col items-stretch'),
					k(
						r,
						'class',
						(h = `flex ${t[6] % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} relative items-center w-full my-[10px]`)
					),
					(this.first = r));
			},
			m(g, x) {
				(U(g, r, x),
					p(r, e),
					p(r, n),
					p(r, a),
					V(c, a, null),
					p(r, $),
					p(r, o),
					V(l, o, null),
					p(r, f),
					(q = !0));
			},
			p(g, x) {
				t = g;
				const S = {};
				(x & 1 && (S.experience = t[4]),
					l.$set(S),
					(!q ||
						(x & 1 &&
							h !==
								(h = `flex ${t[6] % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} relative items-center w-full my-[10px]`))) &&
						k(r, 'class', h));
			},
			i(g) {
				q || (_(c.$$.fragment, g), _(l.$$.fragment, g), (q = !0));
			},
			o(g) {
				(w(c.$$.fragment, g), w(l.$$.fragment, g), (q = !1));
			},
			d(g) {
				(g && d(r), I(c), I(l));
			}
		}
	);
}
function Ne(s) {
	let t, r, e, n;
	const a = [Be, qe],
		c = [];
	function $(o, l) {
		return o[0].length === 0 ? 0 : 1;
	}
	return (
		(r = $(s)),
		(e = c[r] = a[r](s)),
		{
			c() {
				((t = E('div')), e.c(), this.h());
			},
			l(o) {
				t = C(o, 'DIV', { class: !0 });
				const l = D(t);
				(e.l(l), l.forEach(d), this.h());
			},
			h() {
				k(t, 'class', 'col items-center relative mt-10 flex-1');
			},
			m(o, l) {
				(U(o, t, l), c[r].m(t, null), (n = !0));
			},
			p(o, l) {
				const f = r;
				((r = $(o)),
					r === f
						? c[r].p(o, l)
						: (re(),
							w(c[f], 1, 1, () => {
								c[f] = null;
							}),
							ne(),
							(e = c[r]),
							e ? e.p(o, l) : ((e = c[r] = a[r](o)), e.c()),
							_(e, 1),
							e.m(t, null)));
			},
			i(o) {
				n || (_(e), (n = !0));
			},
			o(o) {
				(w(e), (n = !1));
			},
			d(o) {
				(o && d(t), c[r].d());
			}
		}
	);
}
function Ue(s) {
	let t, r;
	return (
		(t = new De({ props: { title: s[1], $$slots: { default: [Ne] }, $$scope: { ctx: s } } })),
		t.$on('search', s[2]),
		{
			c() {
				L(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				(V(t, e, n), (r = !0));
			},
			p(e, [n]) {
				const a = {};
				(n & 129 && (a.$$scope = { dirty: n, ctx: e }), t.$set(a));
			},
			i(e) {
				r || (_(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				(w(t.$$.fragment, e), (r = !1));
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Fe(s, t, r) {
	const { items: e, title: n } = xe;
	let a = [...e];
	return [
		a,
		n,
		($) => {
			const o = $.detail.search;
			(Ie(o) && r(0, (a = e)),
				r(
					0,
					(a = e.filter(
						(l) =>
							l.name.toLowerCase().includes(o) ||
							l.company.toLowerCase().includes(o) ||
							l.description.toLowerCase().includes(o)
					))
				));
		}
	];
}
class Oe extends ue {
	constructor(t) {
		(super(), pe(this, t, Fe, Ue, me, {}));
	}
}
export { Oe as component };
