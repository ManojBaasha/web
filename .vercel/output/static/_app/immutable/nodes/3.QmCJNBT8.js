import {
	M as Re,
	N as Ke,
	s as Qe,
	d as l,
	O as z,
	z as g,
	l as e,
	P as $,
	i as Xe,
	b as t,
	c as s,
	e as c,
	g as m,
	p as Z,
	h as a,
	j as w,
	o as Ye
} from '../chunks/Bit1RA6o.js';
import {
	S as Ze,
	i as xe,
	d as et,
	t as tt,
	a as st,
	m as at,
	c as ot,
	b as it,
	h as F
} from '../chunks/C5IiiZmU.js';
import { S as nt } from '../chunks/CqrzjQjn.js';
function rt(n) {
	const r = n - 1;
	return r * r * r + 1;
}
function lt(n, { delay: r = 0, duration: u = 400, easing: I = Ke } = {}) {
	const i = +getComputedStyle(n).opacity;
	return { delay: r, duration: u, easing: I, css: (d) => `opacity: ${d * i}` };
}
function x(
	n,
	{ delay: r = 0, duration: u = 400, easing: I = rt, x: i = 0, y: d = 0, opacity: h = 0 } = {}
) {
	const y = getComputedStyle(n),
		ee = +y.opacity,
		te = y.transform === 'none' ? '' : y.transform,
		S = ee * (1 - h),
		[f, U] = Re(i),
		[se, ae] = Re(d);
	return {
		delay: r,
		duration: u,
		easing: I,
		css: (k, _) => `
			transform: ${te} translate(${(1 - k) * f}${U}, ${(1 - k) * se}${ae});
			opacity: ${ee - S * _}`
	};
}
function ct(n) {
	let r,
		u,
		I,
		i,
		d,
		h,
		y,
		ee = `<h2 class="svelte-1fwkte4">How It Started</h2> <p class="svelte-1fwkte4">My journey into tech didn&#39;t start in a classroom — it started with a problem I wanted to
						solve. During the pandemic, I created my first mobile app called 1Mark Mastery. At the
						time, I saw how difficult it was to send guides and study material across platforms, so
						I built an app to help. I immediately published it, and it ended up reaching more than
						100 students. That moment — realizing I could use technology to solve a real problem and
						help people — was the spark that started it all.</p>`,
		te,
		S,
		f,
		U,
		se,
		ae,
		k,
		_,
		R,
		T,
		oe,
		pe,
		P,
		je = `<h2 class="svelte-1fwkte4">Chasing Curiosity</h2> <p class="svelte-1fwkte4">I&#39;m driven, curious, and weirdly calm under pressure. I go by the motto &quot;It is what it
						is&quot; and push through whatever comes my way. I often pull all-nighters when I get curious
						about something and just can&#39;t sleep until I figure it out. Whether it&#39;s a last-minute
						hackathon or a product pitch for a startup idea, I&#39;m there with a whiteboard, a roadmap,
						and an open Figma tab.</p>`,
		ge,
		me,
		B,
		j,
		W,
		He = `<h2 class="svelte-1fwkte4">My Work in Tech</h2> <p class="svelte-1fwkte4">I build applications that solve problems, educate, and simplify lives. My motivation is
						simple: I want to build cool things that people can use every day. That drive has taken
						me through a wide spectrum of tech — I&#39;ve become well-versed in everything from embedded
						systems to mobile apps, web platforms, AI tools, and even game development. I enjoy
						learning about new fields and picking up the tools I need along the way.</p> <p class="svelte-1fwkte4">I&#39;ve never wanted to be limited to just one domain — I love wearing many hats, exploring
						new tools, and blending disciplines to create something meaningful. Right now, I&#39;m
						especially interested in leveraging AI to automate processes and enhance productivity.
						I&#39;m deep-diving into tools like Cursor AI and exploring how intelligent systems can
						support both developers and non-tech folks.</p>`,
		we,
		K,
		M,
		ie,
		ye,
		be,
		G,
		H,
		O,
		Ve = `<h2 class="svelte-1fwkte4">Beyond Code</h2> <p class="svelte-1fwkte4">Outside of tech, I play badminton regularly and love the energy it brings. I&#39;m also
						really into hiking — the longest one I&#39;ve done was the Half Dome hike, which took 12
						hours and left me with memories I&#39;ll never forget. I love chess as well and enjoy the
						quiet strategy behind it.</p> <p class="svelte-1fwkte4">And yes, I have an artsy side too. I dabble in graphic design for my clubs, and I&#39;m
						obsessed with pixel art — something about its simplicity and retro charm gets me every
						time. If I weren&#39;t in tech, I&#39;d probably be a designer, blending visuals with stories
						that speak.</p>`,
		Ie,
		Q,
		C,
		ne,
		ke,
		_e,
		A,
		V,
		X,
		D,
		re,
		Te,
		N,
		Le = `<h2 class="svelte-1fwkte4">Leading to Teach</h2> <p class="svelte-1fwkte4">One of the things I care deeply about is teaching others how to code. I&#39;m the President
						of the Google Developer Student Club, Co-founder and Director of the Swift Coding Club,
						and Vice President of Software at SacHacks — all roles I&#39;ve taken on with a single
						purpose: to give people a space where they can learn, build, and grow together.</p> <p class="svelte-1fwkte4">GDSC and Swift Coding Club now support over 150 developers working on projects and
						learning the foundations of software development. At SacHacks, I helped create an
						environment where over 400 developers built and launched projects within 24 hours.
						Across these communities, I&#39;ve hosted more than 20 workshops covering different areas of
						coding — from mobile development to cloud integration — all with the goal of making tech
						more accessible and exciting for everyone.</p>`,
		Me,
		Ce,
		q,
		L,
		J,
		$e = `<h2 class="svelte-1fwkte4">The Big Picture</h2> <p class="svelte-1fwkte4">At the end of the day, I&#39;m just someone who genuinely loves the process of building —
						not just the code, but the people and the purpose behind it. Whether it&#39;s designing a
						sensor-driven security system, developing an educational mobile app, or growing a
						supportive community of student developers, I find joy in creating things that matter.</p> <p class="svelte-1fwkte4">My goal has always been to bridge passion with practicality, and help others do the
						same. Every line of code, every workshop, and every idea shared is a small piece of a
						much bigger vision: to make tech feel human, collaborative, and empowering for anyone
						who&#39;s willing to try.</p> <p class="svelte-1fwkte4">Thanks for reading a bit about me. Feel free to check out my projects, reach out, or
						just say hi — I&#39;m always up for building something exciting with passionate people.</p>`,
		De,
		Y,
		E,
		le,
		Ee,
		Se,
		b;
	return (
		(u = new nt({})),
		{
			c() {
				((r = a('div')),
					it(u.$$.fragment),
					(I = w()),
					(i = a('div')),
					(d = a('section')),
					(h = a('div')),
					(y = a('div')),
					(y.innerHTML = ee),
					(te = w()),
					(S = a('div')),
					(f = a('img')),
					(ae = w()),
					(k = a('section')),
					(_ = a('div')),
					(R = a('div')),
					(T = a('img')),
					(pe = w()),
					(P = a('div')),
					(P.innerHTML = je),
					(me = w()),
					(B = a('section')),
					(j = a('div')),
					(W = a('div')),
					(W.innerHTML = He),
					(we = w()),
					(K = a('div')),
					(M = a('img')),
					(be = w()),
					(G = a('section')),
					(H = a('div')),
					(O = a('div')),
					(O.innerHTML = Ve),
					(Ie = w()),
					(Q = a('div')),
					(C = a('img')),
					(_e = w()),
					(A = a('section')),
					(V = a('div')),
					(X = a('div')),
					(D = a('img')),
					(Te = w()),
					(N = a('div')),
					(N.innerHTML = Le),
					(Ce = w()),
					(q = a('section')),
					(L = a('div')),
					(J = a('div')),
					(J.innerHTML = $e),
					(De = w()),
					(Y = a('div')),
					(E = a('img')),
					this.h());
			},
			l(o) {
				r = s(o, 'DIV', { class: !0 });
				const v = c(r);
				(ot(u.$$.fragment, v), (I = m(v)), (i = s(v, 'DIV', { class: !0 })));
				const p = c(i);
				d = s(p, 'SECTION', { class: !0 });
				const Pe = c(d);
				h = s(Pe, 'DIV', { class: !0 });
				const ce = c(h);
				((y = s(ce, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Z(y) !== 'svelte-18xe7wl' && (y.innerHTML = ee),
					(te = m(ce)),
					(S = s(ce, 'DIV', { class: !0 })));
				const Be = c(S);
				((f = s(Be, 'IMG', { src: !0, alt: !0, class: !0 })),
					Be.forEach(l),
					ce.forEach(l),
					Pe.forEach(l),
					(ae = m(p)),
					(k = s(p, 'SECTION', { class: !0 })));
				const We = c(k);
				_ = s(We, 'DIV', { class: !0 });
				const de = c(_);
				R = s(de, 'DIV', { class: !0 });
				const Ge = c(R);
				((T = s(Ge, 'IMG', { src: !0, alt: !0, class: !0 })),
					Ge.forEach(l),
					(pe = m(de)),
					(P = s(de, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Z(P) !== 'svelte-sawxc1' && (P.innerHTML = je),
					de.forEach(l),
					We.forEach(l),
					(me = m(p)),
					(B = s(p, 'SECTION', { class: !0 })));
				const Oe = c(B);
				j = s(Oe, 'DIV', { class: !0 });
				const ue = c(j);
				((W = s(ue, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Z(W) !== 'svelte-1s6hcb6' && (W.innerHTML = He),
					(we = m(ue)),
					(K = s(ue, 'DIV', { class: !0 })));
				const Ae = c(K);
				((M = s(Ae, 'IMG', { src: !0, alt: !0, class: !0 })),
					Ae.forEach(l),
					ue.forEach(l),
					Oe.forEach(l),
					(be = m(p)),
					(G = s(p, 'SECTION', { class: !0 })));
				const Ne = c(G);
				H = s(Ne, 'DIV', { class: !0 });
				const he = c(H);
				((O = s(he, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Z(O) !== 'svelte-we42vr' && (O.innerHTML = Ve),
					(Ie = m(he)),
					(Q = s(he, 'DIV', { class: !0 })));
				const qe = c(Q);
				((C = s(qe, 'IMG', { src: !0, alt: !0, class: !0 })),
					qe.forEach(l),
					he.forEach(l),
					Ne.forEach(l),
					(_e = m(p)),
					(A = s(p, 'SECTION', { class: !0 })));
				const Je = c(A);
				V = s(Je, 'DIV', { class: !0 });
				const ve = c(V);
				X = s(ve, 'DIV', { class: !0 });
				const ze = c(X);
				((D = s(ze, 'IMG', { src: !0, alt: !0, class: !0 })),
					ze.forEach(l),
					(Te = m(ve)),
					(N = s(ve, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Z(N) !== 'svelte-1cbuqdd' && (N.innerHTML = Le),
					ve.forEach(l),
					Je.forEach(l),
					(Ce = m(p)),
					(q = s(p, 'SECTION', { class: !0 })));
				const Fe = c(q);
				L = s(Fe, 'DIV', { class: !0 });
				const fe = c(L);
				((J = s(fe, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Z(J) !== 'svelte-1f5s8ll' && (J.innerHTML = $e),
					(De = m(fe)),
					(Y = s(fe, 'DIV', { class: !0 })));
				const Ue = c(Y);
				((E = s(Ue, 'IMG', { src: !0, alt: !0, class: !0 })),
					Ue.forEach(l),
					fe.forEach(l),
					Fe.forEach(l),
					p.forEach(l),
					v.forEach(l),
					this.h());
			},
			h() {
				(e(y, 'class', 'text-content'),
					g(f.src, (U = n[2]['How It Started'][n[1]['How It Started']])) || e(f, 'src', U),
					e(f, 'alt', '1Mark Mastery App'),
					e(f, 'class', 'svelte-1fwkte4'),
					$(f, 'active', !0),
					e(S, 'class', 'image-carousel svelte-1fwkte4'),
					e(h, 'class', 'section-content svelte-1fwkte4'),
					e(d, 'class', 'story-section svelte-1fwkte4'),
					g(T.src, (oe = n[2]['What Drives Me'][n[1]['What Drives Me']])) || e(T, 'src', oe),
					e(T, 'alt', 'Hackathon Projects'),
					e(T, 'class', 'svelte-1fwkte4'),
					$(T, 'active', !0),
					e(R, 'class', 'image-carousel svelte-1fwkte4'),
					e(P, 'class', 'text-content'),
					e(_, 'class', 'section-content svelte-1fwkte4'),
					e(k, 'class', 'story-section svelte-1fwkte4'),
					e(W, 'class', 'text-content'),
					g(M.src, (ie = n[2]['My Work in Tech'][n[1]['My Work in Tech']])) || e(M, 'src', ie),
					e(M, 'alt', 'My tech projects collage'),
					e(M, 'class', 'svelte-1fwkte4'),
					$(M, 'active', !0),
					e(K, 'class', 'image-carousel svelte-1fwkte4'),
					e(j, 'class', 'section-content svelte-1fwkte4'),
					e(B, 'class', 'story-section svelte-1fwkte4'),
					e(O, 'class', 'text-content'),
					g(C.src, (ne = n[2]['Beyond Code'][n[1]['Beyond Code']])) || e(C, 'src', ne),
					e(C, 'alt', 'Life beyond coding'),
					e(C, 'class', 'svelte-1fwkte4'),
					$(C, 'active', !0),
					e(Q, 'class', 'image-carousel svelte-1fwkte4'),
					e(H, 'class', 'section-content svelte-1fwkte4'),
					e(G, 'class', 'story-section svelte-1fwkte4'),
					g(D.src, (re = n[2]['Leading to Teach'][n[1]['Leading to Teach']])) || e(D, 'src', re),
					e(D, 'alt', 'Teaching and community leadership'),
					e(D, 'class', 'svelte-1fwkte4'),
					$(D, 'active', !0),
					e(X, 'class', 'image-carousel svelte-1fwkte4'),
					e(N, 'class', 'text-content'),
					e(V, 'class', 'section-content svelte-1fwkte4'),
					e(A, 'class', 'story-section svelte-1fwkte4'),
					e(J, 'class', 'text-content'),
					g(E.src, (le = n[2]['The Big Picture'][n[1]['The Big Picture']])) || e(E, 'src', le),
					e(E, 'alt', 'Section visual'),
					e(E, 'class', 'svelte-1fwkte4'),
					$(E, 'active', !0),
					e(Y, 'class', 'image-carousel svelte-1fwkte4'),
					e(L, 'class', 'section-content svelte-1fwkte4'),
					e(q, 'class', 'story-section svelte-1fwkte4'),
					e(i, 'class', 'content svelte-1fwkte4'),
					$(i, 'visible', n[0]),
					e(r, 'class', 'about-page svelte-1fwkte4'));
			},
			m(o, v) {
				(Xe(o, r, v),
					at(u, r, null),
					t(r, I),
					t(r, i),
					t(i, d),
					t(d, h),
					t(h, y),
					t(h, te),
					t(h, S),
					t(S, f),
					t(i, ae),
					t(i, k),
					t(k, _),
					t(_, R),
					t(R, T),
					t(_, pe),
					t(_, P),
					t(i, me),
					t(i, B),
					t(B, j),
					t(j, W),
					t(j, we),
					t(j, K),
					t(K, M),
					t(i, be),
					t(i, G),
					t(G, H),
					t(H, O),
					t(H, Ie),
					t(H, Q),
					t(Q, C),
					t(i, _e),
					t(i, A),
					t(A, V),
					t(V, X),
					t(X, D),
					t(V, Te),
					t(V, N),
					t(i, Ce),
					t(i, q),
					t(q, L),
					t(L, J),
					t(L, De),
					t(L, Y),
					t(Y, E),
					(b = !0));
			},
			p(o, [v]) {
				((!b || (v & 2 && !g(f.src, (U = o[2]['How It Started'][o[1]['How It Started']])))) &&
					e(f, 'src', U),
					(!b || (v & 2 && !g(T.src, (oe = o[2]['What Drives Me'][o[1]['What Drives Me']])))) &&
						e(T, 'src', oe),
					(!b || (v & 2 && !g(M.src, (ie = o[2]['My Work in Tech'][o[1]['My Work in Tech']])))) &&
						e(M, 'src', ie),
					(!b || (v & 2 && !g(C.src, (ne = o[2]['Beyond Code'][o[1]['Beyond Code']])))) &&
						e(C, 'src', ne),
					(!b || (v & 2 && !g(D.src, (re = o[2]['Leading to Teach'][o[1]['Leading to Teach']])))) &&
						e(D, 'src', re),
					(!b || (v & 2 && !g(E.src, (le = o[2]['The Big Picture'][o[1]['The Big Picture']])))) &&
						e(E, 'src', le),
					(!b || v & 1) && $(i, 'visible', o[0]));
			},
			i(o) {
				b ||
					(st(u.$$.fragment, o),
					o &&
						(se ||
							z(() => {
								((se = F(d, x, { y: 20, duration: 800, delay: 200 })), se.start());
							})),
					o &&
						(ge ||
							z(() => {
								((ge = F(k, x, { y: 20, duration: 800, delay: 400 })), ge.start());
							})),
					o &&
						(ye ||
							z(() => {
								((ye = F(B, x, { y: 20, duration: 800, delay: 600 })), ye.start());
							})),
					o &&
						(ke ||
							z(() => {
								((ke = F(G, x, { y: 20, duration: 800, delay: 800 })), ke.start());
							})),
					o &&
						(Me ||
							z(() => {
								((Me = F(A, x, { y: 20, duration: 800, delay: 1e3 })), Me.start());
							})),
					o &&
						(Ee ||
							z(() => {
								((Ee = F(q, x, { y: 20, duration: 800, delay: 1200 })), Ee.start());
							})),
					o &&
						(Se ||
							z(() => {
								((Se = F(r, lt, { duration: 500 })), Se.start());
							})),
					(b = !0));
			},
			o(o) {
				(tt(u.$$.fragment, o), (b = !1));
			},
			d(o) {
				(o && l(r), et(u));
			}
		}
	);
}
function dt(n, r, u) {
	let I = !1,
		i = {
			'How It Started': 0,
			'What Drives Me': 0,
			'My Work in Tech': 0,
			'Beyond Code': 0,
			'Leading to Teach': 0,
			'The Big Picture': 0
		};
	const d = {
		'How It Started': [
			'/about/howitstarted1.jpeg',
			'/about/howitstarted2.jpg',
			'/about/howitstarted3.jpg',
			'/about/howitstarted4.jpg',
			'/about/howitstarted5.jpg'
		],
		'What Drives Me': [
			'/about/whatdrivesme.jpg',
			'/about/whatdrivesme1.jpg',
			'/about/whatdrivesme2.JPG'
		],
		'My Work in Tech': [
			'/about/workintech.jpeg',
			'/about/workintech.png',
			'/about/workintech3.png',
			'/about/workintech4.png'
		],
		'Beyond Code': ['/about/beyondcode.png', '/about/beyondcode2.png', '/about/beyondcode3.png'],
		'Leading to Teach': [
			'/about/leadingtech.JPG',
			'/about/leadingtech2.JPG',
			'/about/leadingtech3.png'
		],
		'The Big Picture': ['/about/endofday.JPG', '/about/manoj 4.png']
	};
	return (
		Ye(() => {
			(u(0, (I = !0)),
				Object.keys(d).forEach((h) => {
					setInterval(() => {
						u(1, (i[h] = (i[h] + 1) % d[h].length), i);
					}, 5e3);
				}));
		}),
		[I, i, d]
	);
}
class ft extends Ze {
	constructor(r) {
		(super(), xe(this, r, dt, ct, Qe, {}));
	}
}
export { ft as component };
