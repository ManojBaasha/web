import {
	s as p,
	d as h,
	i as g,
	m as b,
	o as S,
	u as q,
	B,
	C as D,
	w as F,
	x as M,
	y as P,
	D as v,
	E as c,
	c as U,
	e as j,
	h as A,
	F as m,
	r as G
} from './Bit1RA6o.js';
import { S as H, i as I, t as y, a as k } from './C5IiiZmU.js';
import { g as J } from './CgU5AtxT.js';
function d(e) {
	let t, a, u, l;
	const n = e[7].default,
		i = q(n, e, e[6], null);
	let _ = [{ href: e[0] }, { class: e[2] }],
		f = {};
	for (let s = 0; s < _.length; s += 1) f = B(f, _[s]);
	return {
		c() {
			((t = A(e[0] ? 'a' : 'button')), i && i.c(), this.h());
		},
		l(s) {
			t = U(s, (e[0] ? 'a' : 'button').toUpperCase(), { href: !0, class: !0 });
			const o = j(t);
			(i && i.l(o), o.forEach(h), this.h());
		},
		h() {
			v(e[0] ? 'a' : 'button')(t, f);
		},
		m(s, o) {
			(g(s, t, o),
				i && i.m(t, null),
				e[12](t),
				(a = !0),
				u ||
					((l = [
						c(t, 'click', e[8]),
						c(t, 'keydown', e[9]),
						c(t, 'keypress', e[10]),
						c(t, 'keyup', e[11])
					]),
					(u = !0)));
		},
		p(s, o) {
			(i && i.p && (!a || o & 64) && F(i, n, s, s[6], a ? P(n, s[6], o, null) : M(s[6]), null),
				v(s[0] ? 'a' : 'button')(
					t,
					(f = J(_, [(!a || o & 1) && { href: s[0] }, (!a || o & 4) && { class: s[2] }]))
				));
		},
		i(s) {
			a || (k(i, s), (a = !0));
		},
		o(s) {
			(y(i, s), (a = !1));
		},
		d(s) {
			(s && h(t), i && i.d(s), e[12](null), (u = !1), D(l));
		}
	};
}
function K(e) {
	let t = e[0] ? 'a' : 'button',
		a,
		u,
		l = (e[0] ? 'a' : 'button') && d(e);
	return {
		c() {
			(l && l.c(), (a = b()));
		},
		l(n) {
			(l && l.l(n), (a = b()));
		},
		m(n, i) {
			(l && l.m(n, i), g(n, a, i), (u = !0));
		},
		p(n, [i]) {
			(n[0],
				t
					? p(t, n[0] ? 'a' : 'button')
						? (l.d(1), (l = d(n)), (t = n[0] ? 'a' : 'button'), l.c(), l.m(a.parentNode, a))
						: l.p(n, i)
					: ((l = d(n)), (t = n[0] ? 'a' : 'button'), l.c(), l.m(a.parentNode, a)));
		},
		i(n) {
			u || (k(l, n), (u = !0));
		},
		o(n) {
			(y(l, n), (u = !1));
		},
		d(n) {
			(n && h(a), l && l.d(n));
		}
	};
}
function L(e, t, a) {
	let u,
		{ $$slots: l = {}, $$scope: n } = t,
		i,
		{ active: _ = !1 } = t,
		{ size: f = 'auto' } = t,
		{ classes: s = '' } = t,
		{ href: o = '' } = t;
	S(() => {
		i.style.setProperty('--size', f);
	});
	function w(r) {
		m.call(this, e, r);
	}
	function z(r) {
		m.call(this, e, r);
	}
	function C(r) {
		m.call(this, e, r);
	}
	function N(r) {
		m.call(this, e, r);
	}
	function E(r) {
		G[r ? 'unshift' : 'push'](() => {
			((i = r), a(1, i));
		});
	}
	return (
		(e.$$set = (r) => {
			('active' in r && a(3, (_ = r.active)),
				'size' in r && a(4, (f = r.size)),
				'classes' in r && a(5, (s = r.classes)),
				'href' in r && a(0, (o = r.href)),
				'$$scope' in r && a(6, (n = r.$$scope)));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 40 &&
				a(
					2,
					(u = `row-center cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms] font-light  ${_ ? 'bg-[var(--accent)] hover:bg-[var(--accent-hover)]' : 'bg-transparent hover:bg-[var(--main-hover)]'} ${s}`)
				);
		}),
		[o, i, u, _, f, s, n, l, w, z, C, N, E]
	);
}
class T extends H {
	constructor(t) {
		(super(), I(this, t, L, K, p, { active: 3, size: 4, classes: 5, href: 0 }));
	}
}
export { T as C };
