import {
	s as G,
	n as j,
	d as m,
	q as te,
	i as b,
	b as p,
	l as f,
	c as k,
	e as x,
	h as E,
	o as ne,
	z as ae,
	g as M,
	f as A,
	j as $,
	t as C,
	r as se,
	Q as Z,
	R as O,
	G as oe
} from '../chunks/Bit1RA6o.js';
import {
	S as H,
	i as L,
	d as P,
	t as V,
	a as z,
	e as re,
	m as R,
	c as U,
	b as F,
	g as ie
} from '../chunks/C5IiiZmU.js';
import { e as S } from '../chunks/D6uY3Cwt.js';
import { d as ce, I as D, u as Q, T as X, H as fe, f as ue } from '../chunks/DshTmGMi.js';
import {
	c as he,
	g as me,
	e as ge,
	a as de,
	h as pe,
	b as _e,
	w as ve,
	r as we,
	d as xe,
	s as be
} from '../chunks/CRYyLF0A.js';
import { M as ke } from '../chunks/DY8D3DT7.js';
import { i as Ee } from '../chunks/boLkdWn5.js';
const Me = '' + new URL('../assets/manoj.Cu1U-en-.png', import.meta.url).href;
function Y(n, t, l) {
	const a = n.slice();
	return ((a[10] = t[l]), a);
}
function J(n) {
	let t,
		l,
		a,
		s,
		e,
		o = n[10].name + '',
		r,
		c;
	return {
		c() {
			((t = E('div')), (l = E('img')), (s = $()), (e = E('span')), (r = C(o)), (c = $()), this.h());
		},
		l(v) {
			t = k(v, 'DIV', { class: !0 });
			const g = x(t);
			((l = k(g, 'IMG', { class: !0, src: !0, alt: !0 })),
				(s = M(g)),
				(e = k(g, 'SPAN', { class: !0 })));
			const _ = x(e);
			((r = A(_, o)), _.forEach(m), (c = M(g)), g.forEach(m), this.h());
		},
		h() {
			(f(l, 'class', 'w-120px h-120px aspect-square'),
				ae(l.src, (a = ce(n[10].logo))) || f(l, 'src', a),
				f(l, 'alt', n[10].name),
				f(e, 'class', 'text-center m-t-20px'),
				f(t, 'class', 'box-content w-150px p-15px col-center'));
		},
		m(v, g) {
			(b(v, t, g), p(t, l), p(t, s), p(t, e), p(e, r), p(t, c));
		},
		p: j,
		d(v) {
			v && m(t);
		}
	};
}
function $e(n) {
	let t,
		l,
		a = S(n[1]),
		s = [];
	for (let e = 0; e < a.length; e += 1) s[e] = J(Y(n, a, e));
	return {
		c() {
			((t = E('div')), (l = E('div')));
			for (let e = 0; e < s.length; e += 1) s[e].c();
			this.h();
		},
		l(e) {
			t = k(e, 'DIV', { class: !0 });
			const o = x(t);
			l = k(o, 'DIV', { class: !0 });
			const r = x(l);
			for (let c = 0; c < s.length; c += 1) s[c].l(r);
			(r.forEach(m), o.forEach(m), this.h());
		},
		h() {
			(f(l, 'class', 'row overflow-hidden box-content w-150px'),
				f(t, 'class', 'carrousel flex-[0.5] row-center'));
		},
		m(e, o) {
			(b(e, t, o), p(t, l));
			for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(l, null);
			n[3](l);
		},
		p(e, [o]) {
			if (o & 2) {
				a = S(e[1]);
				let r;
				for (r = 0; r < a.length; r += 1) {
					const c = Y(e, a, r);
					s[r] ? s[r].p(c, o) : ((s[r] = J(c)), s[r].c(), s[r].m(l, null));
				}
				for (; r < s.length; r += 1) s[r].d(1);
				s.length = a.length;
			}
		},
		i: j,
		o: j,
		d(e) {
			(e && m(t), te(s, e), n[3](null));
		}
	};
}
const Ie = 5e3;
function ye(n, t, l) {
	const a = [
		{ name: 'Me when im coding', logo: he },
		{ name: 'Me with music', logo: me },
		{ name: 'Me at 3am', logo: ge },
		{ name: 'Me when you sleep', logo: de },
		{ name: 'Me when you text @not_jonam', logo: pe },
		{ name: 'Me at the gym', logo: _e },
		{ name: 'Me asf', logo: Me },
		{ name: 'Me with 300mg Caffeine', logo: ve },
		{ name: 'Me when theres drama', logo: we },
		{ name: 'Me when im delulu', logo: xe },
		{ name: 'Me during the day', logo: be }
	];
	let s,
		e,
		o = 0,
		r = !0;
	const c = (_) => {
			_
				? o < a.length - 1
					? l(2, (o = o + 1))
					: (l(2, (o = o - 1)), (r = !1))
				: o > 0
					? l(2, (o = o - 1))
					: (l(2, (o = o + 1)), (r = !0));
		},
		v = (_) => {
			(clearTimeout(e),
				(e = setTimeout(() => {
					(c(_), v(r));
				}, Ie)));
		};
	ne(() => {
		v(!0);
	});
	function g(_) {
		se[_ ? 'unshift' : 'push'](() => {
			((s = _), l(0, s));
		});
	}
	return (
		(n.$$.update = () => {
			n.$$.dirty & 5 && s && s.scroll({ left: o * 150, behavior: 'smooth' });
		}),
		[s, a, o, g]
	);
}
class je extends H {
	constructor(t) {
		(super(), L(this, t, ye, $e, G, {}));
	}
}
const K = (n) =>
	n === D.Youtube
		? '0 0 461.001 461.001'
		: n === D.Facebook
			? '0 0 408.788 408.788'
			: [D.GitHub, D.Search, D.Code].includes(n)
				? '0 0 16 16'
				: '0 0 24 24';
function ze(n) {
	let t, l, a;
	return {
		c() {
			((t = O('svg')), (l = O('path')), this.h());
		},
		l(s) {
			t = Z(s, 'svg', { class: !0, viewBox: !0, fill: !0, height: !0, width: !0 });
			const e = x(t);
			((l = Z(e, 'path', { d: !0 })), x(l).forEach(m), e.forEach(m), this.h());
		},
		h() {
			(f(l, 'd', n[2]),
				f(t, 'class', 'inline-block'),
				f(t, 'viewBox', (a = K(n[2]))),
				f(t, 'fill', n[1]),
				f(t, 'height', n[0]),
				f(t, 'width', n[0]));
		},
		m(s, e) {
			(b(s, t, e), p(t, l), n[4](t));
		},
		p(s, [e]) {
			(e & 4 && f(l, 'd', s[2]),
				e & 4 && a !== (a = K(s[2])) && f(t, 'viewBox', a),
				e & 2 && f(t, 'fill', s[1]),
				e & 1 && f(t, 'height', s[0]),
				e & 1 && f(t, 'width', s[0]));
		},
		i: j,
		o: j,
		d(s) {
			(s && m(t), n[4](null));
		}
	};
}
function Be(n, t, l) {
	let a,
		{ size: s = '30px' } = t,
		{ color: e = 'var(--main-text)' } = t,
		{ icon: o } = t;
	function r(c) {
		se[c ? 'unshift' : 'push'](() => {
			((a = c), l(3, a));
		});
	}
	return (
		(n.$$set = (c) => {
			('size' in c && l(0, (s = c.size)),
				'color' in c && l(1, (e = c.color)),
				'icon' in c && l(2, (o = c.icon)));
		}),
		[s, e, o, a, r]
	);
}
class Te extends H {
	constructor(t) {
		(super(), L(this, t, Be, ze, G, { size: 0, color: 1, icon: 2 }));
	}
}
function W(n, t, l) {
	const a = n.slice();
	return ((a[7] = t[l]), a);
}
function De(n) {
	let t, l, a, s;
	return {
		c() {
			((t = C(n[3])), (l = $()), (a = C(n[1])), (s = C(',')));
		},
		l(e) {
			((t = A(e, n[3])), (l = M(e)), (a = A(e, n[1])), (s = A(e, ',')));
		},
		m(e, o) {
			(b(e, t, o), b(e, l, o), b(e, a, o), b(e, s, o));
		},
		p: j,
		d(e) {
			e && (m(t), m(l), m(a), m(s));
		}
	};
}
function ee(n) {
	let t, l, a, s;
	return (
		(l = new Te({ props: { icon: ue(n[7].platform), color: 'var(--accent-text)', size: '20px' } })),
		{
			c() {
				((t = E('a')), F(l.$$.fragment), (a = $()), this.h());
			},
			l(e) {
				t = k(e, 'A', { class: !0, href: !0, target: !0, rel: !0 });
				const o = x(t);
				(U(l.$$.fragment, o), (a = M(o)), o.forEach(m), this.h());
			},
			h() {
				(f(t, 'class', 'decoration-none'),
					f(t, 'href', `${n[5](n[7].link) ? 'mailto:' : ''}${n[7].link}`),
					f(t, 'target', '_blank'),
					f(t, 'rel', 'noreferrer'));
			},
			m(e, o) {
				(b(e, t, o), R(l, t, null), p(t, a), (s = !0));
			},
			p: j,
			i(e) {
				s || (z(l.$$.fragment, e), (s = !0));
			},
			o(e) {
				(V(l.$$.fragment, e), (s = !1));
			},
			d(e) {
				(e && m(t), P(l));
			}
		}
	);
}
function Ve(n) {
	let t, l, a, s, e, o, r, c, v, g, _, I, B;
	((document.title = t = Q(n[4], X)),
		(e = new ke({
			props: { classes: 'md:text-left ', $$slots: { default: [De] }, $$scope: { ctx: n } }
		})));
	let y = S(n[2]),
		u = [];
	for (let i = 0; i < y.length; i += 1) u[i] = ee(W(n, y, i));
	const le = (i) =>
		V(u[i], 1, 1, () => {
			u[i] = null;
		});
	return (
		(I = new je({})),
		{
			c() {
				((l = $()),
					(a = E('div')),
					(s = E('div')),
					F(e.$$.fragment),
					(o = $()),
					(r = E('p')),
					(c = C(n[0])),
					(v = $()),
					(g = E('div')));
				for (let i = 0; i < u.length; i += 1) u[i].c();
				((_ = $()), F(I.$$.fragment), this.h());
			},
			l(i) {
				(oe('svelte-gorrxo', document.head).forEach(m),
					(l = M(i)),
					(a = k(i, 'DIV', { class: !0 })));
				const w = x(a);
				s = k(w, 'DIV', { class: !0 });
				const h = x(s);
				(U(e.$$.fragment, h), (o = M(h)), (r = k(h, 'P', { class: !0 })));
				const T = x(r);
				((c = A(T, n[0])), T.forEach(m), (v = M(h)), (g = k(h, 'DIV', { class: !0 })));
				const N = x(g);
				for (let q = 0; q < u.length; q += 1) u[q].l(N);
				(N.forEach(m), h.forEach(m), (_ = M(w)), U(I.$$.fragment, w), w.forEach(m), this.h());
			},
			h() {
				(f(
					r,
					'class',
					'text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight'
				),
					f(g, 'class', 'row justify-center md:justify-start p-y-15px p-x-0px gap-2'),
					f(s, 'class', 'md:flex-1 gap-10px'),
					f(
						a,
						'class',
						'col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px'
					));
			},
			m(i, d) {
				(b(i, l, d),
					b(i, a, d),
					p(a, s),
					R(e, s, null),
					p(s, o),
					p(s, r),
					p(r, c),
					p(s, v),
					p(s, g));
				for (let w = 0; w < u.length; w += 1) u[w] && u[w].m(g, null);
				(p(a, _), R(I, a, null), (B = !0));
			},
			p(i, [d]) {
				(!B || d & 16) && t !== (t = Q(i[4], X)) && (document.title = t);
				const w = {};
				if ((d & 1024 && (w.$$scope = { dirty: d, ctx: i }), e.$set(w), d & 36)) {
					y = S(i[2]);
					let h;
					for (h = 0; h < y.length; h += 1) {
						const T = W(i, y, h);
						u[h]
							? (u[h].p(T, d), z(u[h], 1))
							: ((u[h] = ee(T)), u[h].c(), z(u[h], 1), u[h].m(g, null));
					}
					for (ie(), h = y.length; h < u.length; h += 1) le(h);
					re();
				}
			},
			i(i) {
				if (!B) {
					z(e.$$.fragment, i);
					for (let d = 0; d < y.length; d += 1) z(u[d]);
					(z(I.$$.fragment, i), (B = !0));
				}
			},
			o(i) {
				(V(e.$$.fragment, i), (u = u.filter(Boolean)));
				for (let d = 0; d < u.length; d += 1) V(u[d]);
				(V(I.$$.fragment, i), (B = !1));
			},
			d(i) {
				(i && (m(l), m(a)), P(e), te(u, i), P(I));
			}
		}
	);
}
function Ae(n) {
	const { description: t, lastName: l, links: a, name: s, title: e } = fe;
	return [
		t,
		l,
		a,
		s,
		e,
		(r) => {
			const c =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return !Ee(r) && c.test(r);
		}
	];
}
class Ge extends H {
	constructor(t) {
		(super(), L(this, t, Ae, Ve, G, {}));
	}
}
export { Ge as component };
