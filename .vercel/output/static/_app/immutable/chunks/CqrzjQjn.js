import {
	s as G,
	n as X,
	d as j,
	z as Y,
	l as w,
	A as u,
	i as R,
	b as M,
	c as k,
	e as S,
	h as y,
	o as C,
	q as O,
	g as z,
	j as A,
	B as P,
	r as V
} from './Bit1RA6o.js';
import {
	S as L,
	i as U,
	t as D,
	a as I,
	g as Q,
	e as x,
	d as $,
	m as tt,
	c as et,
	b as nt
} from './C5IiiZmU.js';
import { e as T, a as st, s as at } from './D6uY3Cwt.js';
import { g as it, a as ot } from './CgU5AtxT.js';
import {
	c as rt,
	g as ct,
	s as lt,
	a as dt,
	b as gt,
	d as ht,
	w as ft,
	r as ut,
	e as mt,
	h as vt
} from './CRYyLF0A.js';
function _t(c) {
	let t, e, d;
	return {
		c() {
			((t = y('div')), (e = y('img')), this.h());
		},
		l(s) {
			t = k(s, 'DIV', { class: !0, 'data-direction': !0, style: !0 });
			const n = S(t);
			((e = k(n, 'IMG', { src: !0, alt: !0, class: !0 })), n.forEach(j), this.h());
		},
		h() {
			(Y(e.src, (d = c[0])) || w(e, 'src', d),
				w(e, 'alt', 'floating tech icon'),
				w(e, 'class', 'svelte-v2etxy'),
				w(t, 'class', 'floating-image svelte-v2etxy'),
				w(t, 'data-direction', c[5]),
				u(t, '--start-x', c[1] + 'px'),
				u(t, '--start-y', c[2] + 'px'),
				u(t, '--duration', c[3] + 's'),
				u(t, '--size', c[4] + 'px'),
				u(t, '--rotation', c[8] + 'deg'),
				u(t, '--diagonal-angle', c[6] + 'deg'),
				u(t, 'opacity', c[7]));
		},
		m(s, n) {
			(R(s, t, n), M(t, e));
		},
		p(s, [n]) {
			(n & 1 && !Y(e.src, (d = s[0])) && w(e, 'src', d),
				n & 32 && w(t, 'data-direction', s[5]),
				n & 2 && u(t, '--start-x', s[1] + 'px'),
				n & 4 && u(t, '--start-y', s[2] + 'px'),
				n & 8 && u(t, '--duration', s[3] + 's'),
				n & 16 && u(t, '--size', s[4] + 'px'),
				n & 256 && u(t, '--rotation', s[8] + 'deg'),
				n & 64 && u(t, '--diagonal-angle', s[6] + 'deg'),
				n & 128 && u(t, 'opacity', s[7]));
		},
		i: X,
		o: X,
		d(s) {
			s && j(t);
		}
	};
}
function wt(c, t, e) {
	let { src: d } = t,
		{ startX: s } = t,
		{ startY: n } = t,
		{ duration: h } = t,
		{ delay: f } = t,
		{ size: p } = t,
		{ direction: v } = t,
		{ rotation: o } = t,
		{ rotationSpeed: g } = t,
		{ diagonalAngle: r } = t,
		l = 0,
		a = o;
	return (
		C(() => {
			setTimeout(() => {
				e(7, (l = 1));
			}, f);
			const i = setInterval(() => {
				e(8, (a += g));
			}, 16);
			return () => clearInterval(i);
		}),
		(c.$$set = (i) => {
			('src' in i && e(0, (d = i.src)),
				'startX' in i && e(1, (s = i.startX)),
				'startY' in i && e(2, (n = i.startY)),
				'duration' in i && e(3, (h = i.duration)),
				'delay' in i && e(9, (f = i.delay)),
				'size' in i && e(4, (p = i.size)),
				'direction' in i && e(5, (v = i.direction)),
				'rotation' in i && e(10, (o = i.rotation)),
				'rotationSpeed' in i && e(11, (g = i.rotationSpeed)),
				'diagonalAngle' in i && e(6, (r = i.diagonalAngle)));
		}),
		[d, s, n, h, p, v, r, l, a, f, o, g]
	);
}
class pt extends L {
	constructor(t) {
		(super(),
			U(this, t, wt, _t, G, {
				src: 0,
				startX: 1,
				startY: 2,
				duration: 3,
				delay: 9,
				size: 4,
				direction: 5,
				rotation: 10,
				rotationSpeed: 11,
				diagonalAngle: 6
			}));
	}
}
const bt = '' + new URL('../assets/stick1.Zova7Vwo.png', import.meta.url).href;
function q(c, t, e) {
	const d = c.slice();
	return ((d[8] = t[e]), d);
}
function B(c) {
	let t, e;
	const d = [c[8]];
	let s = {};
	for (let n = 0; n < d.length; n += 1) s = P(s, d[n]);
	return (
		(t = new pt({ props: s })),
		{
			c() {
				nt(t.$$.fragment);
			},
			l(n) {
				et(t.$$.fragment, n);
			},
			m(n, h) {
				(tt(t, n, h), (e = !0));
			},
			p(n, h) {
				const f = h & 8 ? it(d, [ot(n[8])]) : {};
				t.$set(f);
			},
			i(n) {
				e || (I(t.$$.fragment, n), (e = !0));
			},
			o(n) {
				(D(t.$$.fragment, n), (e = !1));
			},
			d(n) {
				$(t, n);
			}
		}
	);
}
function Mt(c) {
	let t,
		e,
		d,
		s,
		n,
		h,
		f,
		p,
		v = T(c[3]),
		o = [];
	for (let r = 0; r < v.length; r += 1) o[r] = B(q(c, v, r));
	const g = (r) =>
		D(o[r], 1, 1, () => {
			o[r] = null;
		});
	return {
		c() {
			((t = y('div')),
				(e = y('div')),
				(d = A()),
				(s = y('div')),
				(n = A()),
				(h = y('div')),
				(f = A()));
			for (let r = 0; r < o.length; r += 1) o[r].c();
			this.h();
		},
		l(r) {
			t = k(r, 'DIV', { class: !0 });
			const l = S(t);
			((e = k(l, 'DIV', { class: !0 })),
				S(e).forEach(j),
				(d = z(l)),
				(s = k(l, 'DIV', { class: !0 })),
				S(s).forEach(j),
				(n = z(l)),
				(h = k(l, 'DIV', { class: !0 })),
				S(h).forEach(j),
				(f = z(l)));
			for (let a = 0; a < o.length; a += 1) o[a].l(l);
			(l.forEach(j), this.h());
		},
		h() {
			(w(e, 'class', 'stars stars1 svelte-crajdf'),
				w(s, 'class', 'stars stars2 svelte-crajdf'),
				w(h, 'class', 'stars stars3 svelte-crajdf'),
				w(t, 'class', 'star-background svelte-crajdf'));
		},
		m(r, l) {
			(R(r, t, l), M(t, e), c[4](e), M(t, d), M(t, s), c[5](s), M(t, n), M(t, h), c[6](h), M(t, f));
			for (let a = 0; a < o.length; a += 1) o[a] && o[a].m(t, null);
			p = !0;
		},
		p(r, [l]) {
			if (l & 8) {
				v = T(r[3]);
				let a;
				for (a = 0; a < v.length; a += 1) {
					const i = q(r, v, a);
					o[a]
						? (o[a].p(i, l), I(o[a], 1))
						: ((o[a] = B(i)), o[a].c(), I(o[a], 1), o[a].m(t, null));
				}
				for (Q(), a = v.length; a < o.length; a += 1) g(a);
				x();
			}
		},
		i(r) {
			if (!p) {
				for (let l = 0; l < v.length; l += 1) I(o[l]);
				p = !0;
			}
		},
		o(r) {
			o = o.filter(Boolean);
			for (let l = 0; l < o.length; l += 1) D(o[l]);
			p = !1;
		},
		d(r) {
			(r && j(t), c[4](null), c[5](null), c[6](null), O(o, r));
		}
	};
}
function jt(c, t, e) {
	let d, s, n;
	const h = [
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		rt,
		ct,
		st,
		lt,
		dt,
		gt,
		ht,
		ft,
		ut,
		at,
		bt,
		mt,
		vt
	];
	let f = [];
	C(() => {
		const g = (a) => {
			let i = '';
			for (let m = 0; m < a; m++) {
				const _ = Math.floor(Math.random() * 2e3),
					b = Math.floor(Math.random() * 2e3);
				((i += `${_}px ${b}px #FFF`), m < a - 1 && (i += ', '));
			}
			return i;
		};
		(d && e(0, (d.style.boxShadow = g(700)), d),
			s && e(1, (s.style.boxShadow = g(200)), s),
			n && e(2, (n.style.boxShadow = g(100)), n));
		const r = () => {
				const a = h[Math.floor(Math.random() * h.length)],
					i =
						Math.random() < 0.3
							? 'diagonal'
							: ['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)];
				let m = 0,
					_ = 0,
					b = 0;
				switch (i) {
					case 'left':
						((m = window.innerWidth), (_ = Math.random() * window.innerHeight));
						break;
					case 'right':
						((m = 0), (_ = Math.random() * window.innerHeight));
						break;
					case 'up':
						((m = Math.random() * window.innerWidth), (_ = window.innerHeight));
						break;
					case 'down':
						((m = Math.random() * window.innerWidth), (_ = 0));
						break;
					case 'diagonal': {
						switch (Math.floor(Math.random() * 4)) {
							case 0:
								((m = 0), (_ = 0), (b = 45));
								break;
							case 1:
								((m = window.innerWidth), (_ = 0), (b = 135));
								break;
							case 2:
								((m = 0), (_ = window.innerHeight), (b = 315));
								break;
							case 3:
								((m = window.innerWidth), (_ = window.innerHeight), (b = 225));
								break;
						}
						break;
					}
				}
				const E = 10 + Math.random() * 30,
					Z = 20,
					J = 1 - (E - 10) / 30,
					F = Z * J,
					H = Math.random() * 2e3,
					K = Math.random() * 360,
					N = (Math.random() - 0.5) * 2;
				(e(
					3,
					(f = [
						...f,
						{
							src: a,
							startX: m,
							startY: _,
							duration: F,
							delay: H,
							size: E,
							direction: i,
							rotation: K,
							rotationSpeed: N,
							diagonalAngle: b
						}
					])
				),
					setTimeout(
						() => {
							e(3, (f = f.filter((W) => W.src !== a)));
						},
						F * 1e3 + H + 1e3
					));
			},
			l = () => {
				if (f.length < 8) {
					const a = 1 + Math.floor(Math.random() * 2);
					for (let i = 0; i < a; i++) r();
				}
				setTimeout(l, 5e3 + Math.random() * 5e3);
			};
		l();
	});
	function p(g) {
		V[g ? 'unshift' : 'push'](() => {
			((d = g), e(0, d));
		});
	}
	function v(g) {
		V[g ? 'unshift' : 'push'](() => {
			((s = g), e(1, s));
		});
	}
	function o(g) {
		V[g ? 'unshift' : 'push'](() => {
			((n = g), e(2, n));
		});
	}
	return [d, s, n, f, p, v, o];
}
class At extends L {
	constructor(t) {
		(super(), U(this, t, jt, Mt, G, {}));
	}
}
export { At as S };
