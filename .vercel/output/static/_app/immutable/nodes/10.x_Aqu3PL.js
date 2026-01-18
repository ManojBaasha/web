import { a as se, e as re, d as O, M as ne, b as ae } from '../chunks/DshTmGMi.js';
import {
	s as oe,
	d,
	i as I,
	l as k,
	g as j,
	c as b,
	e as y,
	j as P,
	h as x,
	n as H,
	b as v,
	p as Q,
	q as ie,
	a as W,
	f as Z,
	t as ee
} from '../chunks/Bit1RA6o.js';
import {
	S as ce,
	i as fe,
	d as S,
	t as h,
	a as g,
	e as Y,
	m as D,
	c as M,
	b as T,
	g as q
} from '../chunks/C5IiiZmU.js';
import { e as J } from '../chunks/D6uY3Cwt.js';
import { C as ue } from '../chunks/EoRxU2mJ.js';
import { C as me } from '../chunks/DhhK2uIV.js';
import { M as pe } from '../chunks/DY8D3DT7.js';
import { b as X } from '../chunks/MbKfcN8g.js';
import { B as $e, M as de } from '../chunks/ChKwMNII.js';
import { T as _e } from '../chunks/183A4Jdq.js';
import { C as ge } from '../chunks/DMVypNoV.js';
import { U as te } from '../chunks/Bn7WCPkH.js';
function he({ params: i }) {
	if (i.slug) return { skill: se.find((l) => l.slug === i.slug) };
}
const Ue = Object.freeze(
	Object.defineProperty({ __proto__: null, load: he }, Symbol.toStringTag, { value: 'Module' })
);
function F(i, e, l) {
	const t = i.slice();
	return ((t[5] = e[l]), t);
}
function ve(i) {
	let e, l, t, s, n, c, o, r, m, a, $, C, w, N;
	l = new $e({
		props: { img: O(i[0].skill.logo), $$slots: { default: [xe] }, $$scope: { ctx: i } }
	});
	const z = [Ee, we],
		V = [];
	function A(f, u) {
		return f[0].skill.description ? 0 : 1;
	}
	((c = A(i)), (o = V[c] = z[c](i)), (a = new ue({})));
	let L = J(i[1]),
		p = [];
	for (let f = 0; f < L.length; f += 1) p[f] = G(F(i, L, f));
	const le = (f) =>
		h(p[f], 1, 1, () => {
			p[f] = null;
		});
	return {
		c() {
			((e = x('div')),
				T(l.$$.fragment),
				(t = P()),
				(s = x('div')),
				(n = x('div')),
				o.c(),
				(r = P()),
				(m = x('div')),
				T(a.$$.fragment),
				($ = P()),
				(C = x('div')),
				(w = x('div')));
			for (let f = 0; f < p.length; f += 1) p[f].c();
			this.h();
		},
		l(f) {
			e = b(f, 'DIV', { class: !0 });
			const u = y(e);
			(M(l.$$.fragment, u), (t = j(u)), (s = b(u, 'DIV', { class: !0 })));
			const E = y(s);
			n = b(E, 'DIV', { class: !0 });
			const R = y(n);
			(o.l(R), R.forEach(d), E.forEach(d), (r = j(u)), (m = b(u, 'DIV', { class: !0 })));
			const _ = y(m);
			(M(a.$$.fragment, _), _.forEach(d), ($ = j(u)), (C = b(u, 'DIV', { class: !0 })));
			const B = y(C);
			w = b(B, 'DIV', { class: !0 });
			const K = y(w);
			for (let U = 0; U < p.length; U += 1) p[U].l(K);
			(K.forEach(d), B.forEach(d), u.forEach(d), this.h());
		},
		h() {
			(k(n, 'class', 'px-10px m-y-5'),
				k(s, 'class', 'pt-3 pb-1 overflow-x-hidden w-full'),
				k(m, 'class', 'self-stretch mb-2'),
				k(w, 'class', 'px-10px'),
				k(C, 'class', 'flex flex-row gap-1 self-stretch flex-wrap'),
				k(e, 'class', 'flex flex-col items-center overflow-x-hidden'));
		},
		m(f, u) {
			(I(f, e, u),
				D(l, e, null),
				v(e, t),
				v(e, s),
				v(s, n),
				V[c].m(n, null),
				v(e, r),
				v(e, m),
				D(a, m, null),
				v(e, $),
				v(e, C),
				v(C, w));
			for (let E = 0; E < p.length; E += 1) p[E] && p[E].m(w, null);
			N = !0;
		},
		p(f, u) {
			const E = {};
			(u & 1 && (E.img = O(f[0].skill.logo)),
				u & 257 && (E.$$scope = { dirty: u, ctx: f }),
				l.$set(E));
			const R = c;
			if (
				((c = A(f)),
				c === R
					? V[c].p(f, u)
					: (q(),
						h(V[R], 1, 1, () => {
							V[R] = null;
						}),
						Y(),
						(o = V[c]),
						o ? o.p(f, u) : ((o = V[c] = z[c](f)), o.c()),
						g(o, 1),
						o.m(n, null)),
				u & 2)
			) {
				L = J(f[1]);
				let _;
				for (_ = 0; _ < L.length; _ += 1) {
					const B = F(f, L, _);
					p[_]
						? (p[_].p(B, u), g(p[_], 1))
						: ((p[_] = G(B)), p[_].c(), g(p[_], 1), p[_].m(w, null));
				}
				for (q(), _ = L.length; _ < p.length; _ += 1) le(_);
				Y();
			}
		},
		i(f) {
			if (!N) {
				(g(l.$$.fragment, f), g(o), g(a.$$.fragment, f));
				for (let u = 0; u < L.length; u += 1) g(p[u]);
				N = !0;
			}
		},
		o(f) {
			(h(l.$$.fragment, f), h(o), h(a.$$.fragment, f), (p = p.filter(Boolean)));
			for (let u = 0; u < p.length; u += 1) h(p[u]);
			N = !1;
		},
		d(f) {
			(f && d(e), S(l), V[c].d(), S(a), ie(p, f));
		}
	};
}
function ke(i) {
	let e,
		l,
		t,
		s,
		n = 'Could not load skill data.',
		c;
	return (
		(l = new te({ props: { icon: 'i-carbon-software-resource-cluster', classes: 'text-3.5em' } })),
		{
			c() {
				((e = x('div')), T(l.$$.fragment), (t = P()), (s = x('p')), (s.textContent = n), this.h());
			},
			l(o) {
				e = b(o, 'DIV', { class: !0 });
				const r = y(e);
				(M(l.$$.fragment, r),
					(t = j(r)),
					(s = b(r, 'P', { class: !0, 'data-svelte-h': !0 })),
					Q(s) !== 'svelte-o70gx3' && (s.textContent = n),
					r.forEach(d),
					this.h());
			},
			h() {
				(k(s, 'class', 'font-300'),
					k(e, 'class', 'p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]'));
			},
			m(o, r) {
				(I(o, e, r), D(l, e, null), v(e, t), v(e, s), (c = !0));
			},
			p: H,
			i(o) {
				c || (g(l.$$.fragment, o), (c = !0));
			},
			o(o) {
				(h(l.$$.fragment, o), (c = !1));
			},
			d(o) {
				(o && d(e), S(l));
			}
		}
	);
}
function be(i) {
	let e = i[0].skill.name + '',
		l;
	return {
		c() {
			l = ee(e);
		},
		l(t) {
			l = Z(t, e);
		},
		m(t, s) {
			I(t, l, s);
		},
		p(t, s) {
			s & 1 && e !== (e = t[0].skill.name + '') && W(l, e);
		},
		d(t) {
			t && d(l);
		}
	};
}
function xe(i) {
	let e, l;
	return (
		(e = new pe({ props: { $$slots: { default: [be] }, $$scope: { ctx: i } } })),
		{
			c() {
				T(e.$$.fragment);
			},
			l(t) {
				M(e.$$.fragment, t);
			},
			m(t, s) {
				(D(e, t, s), (l = !0));
			},
			p(t, s) {
				const n = {};
				(s & 257 && (n.$$scope = { dirty: s, ctx: t }), e.$set(n));
			},
			i(t) {
				l || (g(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(h(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function we(i) {
	let e,
		l,
		t,
		s,
		n = 'No description',
		c;
	return (
		(l = new te({ props: { icon: 'i-carbon-text-font', classes: 'text-3.5em' } })),
		{
			c() {
				((e = x('div')), T(l.$$.fragment), (t = P()), (s = x('p')), (s.textContent = n), this.h());
			},
			l(o) {
				e = b(o, 'DIV', { class: !0 });
				const r = y(e);
				(M(l.$$.fragment, r),
					(t = j(r)),
					(s = b(r, 'P', { class: !0, 'data-svelte-h': !0 })),
					Q(s) !== 'svelte-1ugej71' && (s.textContent = n),
					r.forEach(d),
					this.h());
			},
			h() {
				(k(s, 'class', 'font-300'),
					k(e, 'class', 'p-5 col-center gap-3 m-y-auto text-[var(--border)]'));
			},
			m(o, r) {
				(I(o, e, r), D(l, e, null), v(e, t), v(e, s), (c = !0));
			},
			p: H,
			i(o) {
				c || (g(l.$$.fragment, o), (c = !0));
			},
			o(o) {
				(h(l.$$.fragment, o), (c = !1));
			},
			d(o) {
				(o && d(e), S(l));
			}
		}
	);
}
function Ee(i) {
	let e, l;
	return (
		(e = new de({
			props: { content: i[0].skill.description ?? 'This place is yet to be filled...' }
		})),
		{
			c() {
				T(e.$$.fragment);
			},
			l(t) {
				M(e.$$.fragment, t);
			},
			m(t, s) {
				(D(e, t, s), (l = !0));
			},
			p(t, s) {
				const n = {};
				(s & 1 && (n.content = t[0].skill.description ?? 'This place is yet to be filled...'),
					e.$set(n));
			},
			i(t) {
				l || (g(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(h(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function ye(i) {
	let e,
		l,
		t,
		s = i[5].display + '',
		n,
		c,
		o;
	return (
		(e = new me({
			props: { src: i[5].img, alt: i[5].name, radius: '0px', size: 15, classes: 'mr-2' }
		})),
		{
			c() {
				(T(e.$$.fragment), (l = P()), (t = x('span')), (n = ee(s)), (c = P()), this.h());
			},
			l(r) {
				(M(e.$$.fragment, r), (l = j(r)), (t = b(r, 'SPAN', { class: !0 })));
				const m = y(t);
				((n = Z(m, s)), m.forEach(d), (c = j(r)), this.h());
			},
			h() {
				k(t, 'class', 'text-[0.9em]');
			},
			m(r, m) {
				(D(e, r, m), I(r, l, m), I(r, t, m), v(t, n), I(r, c, m), (o = !0));
			},
			p(r, m) {
				const a = {};
				(m & 2 && (a.src = r[5].img),
					m & 2 && (a.alt = r[5].name),
					e.$set(a),
					(!o || m & 2) && s !== (s = r[5].display + '') && W(n, s));
			},
			i(r) {
				o || (g(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				(h(e.$$.fragment, r), (o = !1));
			},
			d(r) {
				(r && (d(l), d(t), d(c)), S(e, r));
			}
		}
	);
}
function G(i) {
	let e, l;
	return (
		(e = new ge({
			props: {
				classes: 'inline-flex flex-row items-center justify-center',
				href: `${X}${i[5].url}`,
				$$slots: { default: [ye] },
				$$scope: { ctx: i }
			}
		})),
		{
			c() {
				T(e.$$.fragment);
			},
			l(t) {
				M(e.$$.fragment, t);
			},
			m(t, s) {
				(D(e, t, s), (l = !0));
			},
			p(t, s) {
				const n = {};
				(s & 2 && (n.href = `${X}${t[5].url}`),
					s & 258 && (n.$$scope = { dirty: s, ctx: t }),
					e.$set(n));
			},
			i(t) {
				l || (g(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(h(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function Ce(i) {
	let e, l, t, s, n, c;
	e = new _e({ props: { title: i[2] } });
	const o = [ke, ve],
		r = [];
	function m(a, $) {
		return a[0].skill === void 0 ? 0 : 1;
	}
	return (
		(s = m(i)),
		(n = r[s] = o[s](i)),
		{
			c() {
				(T(e.$$.fragment), (l = P()), (t = x('div')), n.c(), this.h());
			},
			l(a) {
				(M(e.$$.fragment, a), (l = j(a)), (t = b(a, 'DIV', { class: !0 })));
				const $ = y(t);
				(n.l($), $.forEach(d), this.h());
			},
			h() {
				k(t, 'class', 'pb-10 overflow-x-hidden col flex-1');
			},
			m(a, $) {
				(D(e, a, $), I(a, l, $), I(a, t, $), r[s].m(t, null), (c = !0));
			},
			p(a, [$]) {
				const C = {};
				($ & 4 && (C.title = a[2]), e.$set(C));
				const w = s;
				((s = m(a)),
					s === w
						? r[s].p(a, $)
						: (q(),
							h(r[w], 1, 1, () => {
								r[w] = null;
							}),
							Y(),
							(n = r[s]),
							n ? n.p(a, $) : ((n = r[s] = o[s](a)), n.c()),
							g(n, 1),
							n.m(t, null)));
			},
			i(a) {
				c || (g(e.$$.fragment, a), g(n), (c = !0));
			},
			o(a) {
				(h(e.$$.fragment, a), h(n), (c = !1));
			},
			d(a) {
				(a && (d(l), d(t)), S(e, a), r[s].d());
			}
		}
	);
}
function Ie(i, e, l) {
	let t,
		s,
		{ data: n } = e;
	const { title: c } = re,
		o = () => {
			const r = [],
				m = n.skill;
			return m
				? (ne.forEach((a) => {
						a.skills.some(($) => $.slug === m.slug) &&
							r.push({
								img: O(a.logo),
								display: `${a.name} (${a.type})`,
								name: a.name,
								type: 'projects',
								url: `/projects/${a.slug}`
							});
					}),
					ae.forEach((a) => {
						a.skills.some(($) => $.slug === m.slug) &&
							r.push({
								img: O(a.logo),
								display: `${a.name} @ ${a.company}`,
								name: a.name,
								type: 'experience',
								url: `/experience/${a.slug}`
							});
					}),
					r)
				: [];
		};
	return (
		(i.$$set = (r) => {
			'data' in r && l(0, (n = r.data));
		}),
		(i.$$.update = () => {
			(i.$$.dirty & 1 && l(2, (t = n.skill ? `${n.skill.name} - ${c}` : c)),
				i.$$.dirty & 1 && l(1, (s = n.skill ? o() : [])));
		}),
		[n, s, t]
	);
}
class Ye extends ce {
	constructor(e) {
		(super(), fe(this, e, Ie, Ce, oe, { data: 0 }));
	}
}
export { Ye as component, Ue as universal };
