import {
	s as pe,
	d as b,
	q as Ee,
	i as ae,
	b as u,
	E as Se,
	l as h,
	c as w,
	e as x,
	g as P,
	f as Y,
	p as Ae,
	h as k,
	j as B,
	t as Z,
	k as ee,
	n as Pe,
	u as Be,
	w as Me,
	x as Ne,
	y as Te,
	S as fe,
	o as Ve
} from '../chunks/Bit1RA6o.js';
import {
	S as $e,
	i as be,
	d as H,
	t as j,
	a as y,
	g as de,
	e as me,
	m as C,
	c as L,
	b as U
} from '../chunks/C5IiiZmU.js';
import { e as he } from '../chunks/D6uY3Cwt.js';
import { p as we } from '../chunks/D01eNnTx.js';
import { N as Q, t as De, H as ve, i as ke, o as Ie } from '../chunks/DshTmGMi.js';
import { b as te } from '../chunks/MbKfcN8g.js';
import { U as O } from '../chunks/Bn7WCPkH.js';
import { S as qe } from '../chunks/CqrzjQjn.js';
function _e(t, e, a) {
	const n = t.slice();
	return ((n[5] = e[a]), n);
}
function ge(t) {
	let e,
		a,
		n,
		r,
		p = t[5].title + '',
		l,
		$,
		v;
	return (
		(a = new O({ props: { icon: t[5].icon, classes: 'text-1.3em' } })),
		{
			c() {
				((e = k('a')),
					U(a.$$.fragment),
					(n = B()),
					(r = k('span')),
					(l = Z(p)),
					($ = B()),
					this.h());
			},
			l(d) {
				e = w(d, 'A', { href: !0, class: !0 });
				const i = x(e);
				(L(a.$$.fragment, i), (n = P(i)), (r = w(i, 'SPAN', { class: !0 })));
				const o = x(r);
				((l = Y(o, p)), o.forEach(b), ($ = P(i)), i.forEach(b), this.h());
			},
			h() {
				(h(r, 'class', 'nav-menu-item-label svelte-z8k68j'),
					h(e, 'href', `${te}${t[5].to}`),
					h(e, 'class', 'nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j'));
			},
			m(d, i) {
				(ae(d, e, i), C(a, e, null), u(e, n), u(e, r), u(r, l), u(e, $), (v = !0));
			},
			p: Pe,
			i(d) {
				v || (y(a.$$.fragment, d), (v = !0));
			},
			o(d) {
				(j(a.$$.fragment, d), (v = !1));
			},
			d(d) {
				(d && b(e), H(a));
			}
		}
	);
}
function ze(t) {
	let e, a;
	return (
		(e = new O({ props: { icon: 'i-carbon-sun' } })),
		{
			c() {
				U(e.$$.fragment);
			},
			l(n) {
				L(e.$$.fragment, n);
			},
			m(n, r) {
				(C(e, n, r), (a = !0));
			},
			i(n) {
				a || (y(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				(j(e.$$.fragment, n), (a = !1));
			},
			d(n) {
				H(e, n);
			}
		}
	);
}
function He(t) {
	let e, a;
	return (
		(e = new O({ props: { icon: 'i-carbon-moon' } })),
		{
			c() {
				U(e.$$.fragment);
			},
			l(n) {
				L(e.$$.fragment, n);
			},
			m(n, r) {
				(C(e, n, r), (a = !0));
			},
			i(n) {
				a || (y(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				(j(e.$$.fragment, n), (a = !1));
			},
			d(n) {
				H(e, n);
			}
		}
	);
}
function Ce(t) {
	let e,
		a,
		n,
		r,
		p,
		l,
		$ = ve.name + '',
		v,
		d,
		i = ve.lastName + '',
		o,
		_,
		A,
		G,
		T,
		re =
			'<a href="https://manojbaasha.github.io/blog/" class="nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j"><span class="nav-menu-item-label svelte-z8k68j">Blog</span></a>',
		J,
		M,
		V,
		D,
		K,
		N,
		E,
		S,
		W,
		R,
		se;
	r = new O({ props: { icon: 'i-carbon-code', classes: 'text-2em' } });
	let I = he(t[1]),
		c = [];
	for (let s = 0; s < I.length; s += 1) c[s] = ge(_e(t, I, s));
	const je = (s) =>
		j(c[s], 1, 1, () => {
			c[s] = null;
		});
	D = new O({ props: { icon: 'i-carbon-search' } });
	const oe = [He, ze],
		q = [];
	function le(s, g) {
		return s[0] ? 0 : 1;
	}
	return (
		(E = le(t)),
		(S = q[E] = oe[E](t)),
		{
			c() {
				((e = k('div')),
					(a = k('nav')),
					(n = k('a')),
					U(r.$$.fragment),
					(p = B()),
					(l = k('span')),
					(v = Z($)),
					(d = B()),
					(o = Z(i)),
					(_ = B()),
					(A = k('div')));
				for (let s = 0; s < c.length; s += 1) c[s].c();
				((G = B()),
					(T = k('div')),
					(T.innerHTML = re),
					(J = B()),
					(M = k('div')),
					(V = k('a')),
					U(D.$$.fragment),
					(K = B()),
					(N = k('button')),
					S.c(),
					this.h());
			},
			l(s) {
				e = w(s, 'DIV', { class: !0 });
				const g = x(e);
				a = w(g, 'NAV', { class: !0 });
				const m = x(a);
				n = w(m, 'A', { href: !0, class: !0 });
				const f = x(n);
				(L(r.$$.fragment, f), (p = P(f)), (l = w(f, 'SPAN', { class: !0 })));
				const z = x(l);
				((v = Y(z, $)),
					(d = P(z)),
					(o = Y(z, i)),
					z.forEach(b),
					f.forEach(b),
					(_ = P(m)),
					(A = w(m, 'DIV', { class: !0 })));
				const ie = x(A);
				for (let X = 0; X < c.length; X += 1) c[X].l(ie);
				(ie.forEach(b),
					(G = P(m)),
					(T = w(m, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Ae(T) !== 'svelte-nktavv' && (T.innerHTML = re),
					(J = P(m)),
					(M = w(m, 'DIV', { class: !0 })));
				const F = x(M);
				V = w(F, 'A', { href: !0, class: !0 });
				const ce = x(V);
				(L(D.$$.fragment, ce), ce.forEach(b), (K = P(F)), (N = w(F, 'BUTTON', { class: !0 })));
				const ue = x(N);
				(S.l(ue), ue.forEach(b), F.forEach(b), m.forEach(b), g.forEach(b), this.h());
			},
			h() {
				(h(l, 'class', 'ml-2 text-md font-bold hidden md:inline'),
					h(n, 'href', `${te}/`),
					h(
						n,
						'class',
						'nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]'
					),
					h(A, 'class', 'flex flex-row flex-1 self-center justify-center'),
					h(T, 'class', 'flex flex-row flex-1 self-center justify-center'),
					h(V, 'href', `${te}/search`),
					h(
						V,
						'class',
						'text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]'
					),
					h(
						N,
						'class',
						'bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2'
					),
					h(M, 'class', 'flex flex-row self-stretch items-stretch gap-1 text-1.15em'),
					h(a, 'class', 'container !justify-between flex flex-row items-center text-sm'),
					h(e, 'class', 'nav-menu svelte-z8k68j'));
			},
			m(s, g) {
				(ae(s, e, g),
					u(e, a),
					u(a, n),
					C(r, n, null),
					u(n, p),
					u(n, l),
					u(l, v),
					u(l, d),
					u(l, o),
					u(a, _),
					u(a, A));
				for (let m = 0; m < c.length; m += 1) c[m] && c[m].m(A, null);
				(u(a, G),
					u(a, T),
					u(a, J),
					u(a, M),
					u(M, V),
					C(D, V, null),
					u(M, K),
					u(M, N),
					q[E].m(N, null),
					(W = !0),
					R || ((se = Se(N, 'click', t[3])), (R = !0)));
			},
			p(s, [g]) {
				if (g & 2) {
					I = he(s[1]);
					let f;
					for (f = 0; f < I.length; f += 1) {
						const z = _e(s, I, f);
						c[f]
							? (c[f].p(z, g), y(c[f], 1))
							: ((c[f] = ge(z)), c[f].c(), y(c[f], 1), c[f].m(A, null));
					}
					for (de(), f = I.length; f < c.length; f += 1) je(f);
					me();
				}
				const m = E;
				((E = le(s)),
					E !== m &&
						(de(),
						j(q[m], 1, 1, () => {
							q[m] = null;
						}),
						me(),
						(S = q[E]),
						S || ((S = q[E] = oe[E](s)), S.c()),
						y(S, 1),
						S.m(N, null)));
			},
			i(s) {
				if (!W) {
					y(r.$$.fragment, s);
					for (let g = 0; g < I.length; g += 1) y(c[g]);
					(y(D.$$.fragment, s), y(S), (W = !0));
				}
			},
			o(s) {
				(j(r.$$.fragment, s), (c = c.filter(Boolean)));
				for (let g = 0; g < c.length; g += 1) j(c[g]);
				(j(D.$$.fragment, s), j(S), (W = !1));
			},
			d(s) {
				(s && b(e), H(r), Ee(c, s), H(D), q[E].d(), (R = !1), se());
			}
		}
	);
}
function Le(t, e, a) {
	let n, r;
	(ee(t, we, ($) => a(2, (n = $))), ee(t, ke, ($) => a(0, (r = $))));
	const p = [
			{ title: Q.about, to: '/about', icon: 'i-carbon-user-profile' },
			{ title: Q.personal, to: '/projects', icon: 'i-carbon-cube' },
			{ title: Q.career, to: '/experience', icon: 'i-carbon-development' },
			{ title: Q.resume, to: '/resume', icon: 'i-carbon-result' }
		],
		l = () => De();
	return (
		(t.$$.update = () => {
			t.$$.dirty & 4 && n && n.url.pathname;
		}),
		[r, p, n, l]
	);
}
class Ue extends $e {
	constructor(e) {
		(super(), be(this, e, Le, Ce, pe, {}));
	}
}
const Oe = '@vercel/analytics',
	We = '1.6.1',
	Fe = () => {
		window.va ||
			(window.va = function (...e) {
				(window.vaq = window.vaq || []).push(e);
			});
	};
function ye() {
	return typeof window < 'u';
}
function xe() {
	try {
		const t = 'production';
	} catch {}
	return 'production';
}
function Qe(t = 'auto') {
	if (t === 'auto') {
		window.vam = xe();
		return;
	}
	window.vam = t;
}
function Ge() {
	return (ye() ? window.vam : xe()) || 'production';
}
function ne() {
	return Ge() === 'development';
}
function Je(t) {
	return t.scriptSrc
		? t.scriptSrc
		: ne()
			? 'https://va.vercel-scripts.com/v1/script.debug.js'
			: t.basePath
				? `${t.basePath}/insights/script.js`
				: '/_vercel/insights/script.js';
}
function Ke(t = { debug: !0 }) {
	let e;
	if (!ye()) return;
	(Qe(t.mode),
		Fe(),
		t.beforeSend && ((e = window.va) == null || e.call(window, 'beforeSend', t.beforeSend)));
	const a = Je(t);
	if (document.head.querySelector(`script[src*="${a}"]`)) return;
	const n = document.createElement('script');
	((n.src = a),
		(n.defer = !0),
		(n.dataset.sdkn = Oe + (t.framework ? `/${t.framework}` : '')),
		(n.dataset.sdkv = We),
		t.disableAutoTrack && (n.dataset.disableAutoTrack = '1'),
		t.endpoint
			? (n.dataset.endpoint = t.endpoint)
			: t.basePath && (n.dataset.endpoint = `${t.basePath}/insights`),
		t.dsn && (n.dataset.dsn = t.dsn),
		(n.onerror = () => {
			const r = ne()
				? 'Please check if any ad blockers are enabled and try again.'
				: 'Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.';
			console.log(`[Vercel Web Analytics] Failed to load script from ${a}. ${r}`);
		}),
		ne() && t.debug === !1 && (n.dataset.debug = 'false'),
		document.head.appendChild(n));
}
function Re({ route: t, path: e }) {
	let a;
	(a = window.va) == null || a.call(window, 'pageview', { route: t, path: e });
}
function Xe() {
	try {
		return;
	} catch {}
}
function Ye(t = {}) {
	(Ke({ ...t, basePath: Xe(), disableAutoTrack: !0, framework: 'sveltekit' }),
		we.subscribe(({ route: e, url: a }) => {
			e != null && e.id && Re({ route: e.id, path: a.pathname });
		}));
}
function Ze(t) {
	let e, a, n, r, p, l, $, v;
	((a = new qe({})), (r = new Ue({})));
	const d = t[2].default,
		i = Be(d, t, t[1], null);
	return {
		c() {
			((e = k('div')),
				U(a.$$.fragment),
				(n = B()),
				U(r.$$.fragment),
				(p = B()),
				(l = k('div')),
				i && i.c(),
				this.h());
		},
		l(o) {
			e = w(o, 'DIV', { class: !0 });
			const _ = x(e);
			(L(a.$$.fragment, _),
				(n = P(_)),
				L(r.$$.fragment, _),
				(p = P(_)),
				(l = w(_, 'DIV', { class: !0 })));
			const A = x(l);
			(i && i.l(A), A.forEach(b), _.forEach(b), this.h());
		},
		h() {
			(h(l, 'class', 'content container svelte-db9gw8'),
				h(
					e,
					'class',
					($ = fe(`body contents ${t[0] ? 'theme-dark' : 'theme-light'}`) + ' svelte-db9gw8')
				));
		},
		m(o, _) {
			(ae(o, e, _),
				C(a, e, null),
				u(e, n),
				C(r, e, null),
				u(e, p),
				u(e, l),
				i && i.m(l, null),
				(v = !0));
		},
		p(o, [_]) {
			(i && i.p && (!v || _ & 2) && Me(i, d, o, o[1], v ? Te(d, o[1], _, null) : Ne(o[1]), null),
				(!v ||
					(_ & 1 &&
						$ !==
							($ =
								fe(`body contents ${o[0] ? 'theme-dark' : 'theme-light'}`) + ' svelte-db9gw8'))) &&
					h(e, 'class', $));
		},
		i(o) {
			v || (y(a.$$.fragment, o), y(r.$$.fragment, o), y(i, o), (v = !0));
		},
		o(o) {
			(j(a.$$.fragment, o), j(r.$$.fragment, o), j(i, o), (v = !1));
		},
		d(o) {
			(o && b(e), H(a), H(r), i && i.d(o));
		}
	};
}
function et(t, e, a) {
	let n;
	ee(t, ke, (l) => a(0, (n = l)));
	let { $$slots: r = {}, $$scope: p } = e;
	return (
		Ve(() => {
			(Ie(), Ye());
		}),
		(t.$$set = (l) => {
			'$$scope' in l && a(1, (p = l.$$scope));
		}),
		[n, p, r]
	);
}
class ct extends $e {
	constructor(e) {
		(super(), be(this, e, et, Ze, pe, {}));
	}
}
export { ct as component };
