const de = Object.defineProperty;
const he = (t, e, n) =>
	e in t ? de(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
const A = (t, e, n) => he(t, typeof e != 'symbol' ? e + '' : e, n);
import { o as Ct, K as Q } from './Bit1RA6o.js';
import { w as vt } from './BRf0lue5.js';
import { a as pe, b as L } from './MbKfcN8g.js';
class bt {
	constructor(e, n) {
		((this.status = e),
			typeof n == 'string'
				? (this.body = { message: n })
				: n
					? (this.body = n)
					: (this.body = { message: `Error: ${e}` }));
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class kt {
	constructor(e, n) {
		((this.status = e), (this.location = n));
	}
}
class Et extends Error {
	constructor(e, n, r) {
		(super(r), (this.status = e), (this.text = n));
	}
}
new URL('sveltekit-internal://');
function ge(t, e) {
	return t === '/' || e === 'ignore'
		? t
		: e === 'never'
			? t.endsWith('/')
				? t.slice(0, -1)
				: t
			: e === 'always' && !t.endsWith('/')
				? t + '/'
				: t;
}
function me(t) {
	return t.split('%25').map(decodeURI).join('%25');
}
function we(t) {
	for (const e in t) t[e] = decodeURIComponent(t[e]);
	return t;
}
function ut({ href: t }) {
	return t.split('#')[0];
}
function _e(t, e, n, r = !1) {
	const a = new URL(t);
	Object.defineProperty(a, 'searchParams', {
		value: new Proxy(a.searchParams, {
			get(o, i) {
				if (i === 'get' || i === 'getAll' || i === 'has') return (c, ...p) => (n(c), o[i](c, ...p));
				e();
				const l = Reflect.get(o, i);
				return typeof l == 'function' ? l.bind(o) : l;
			}
		}),
		enumerable: !0,
		configurable: !0
	});
	const s = ['href', 'pathname', 'search', 'toString', 'toJSON'];
	r && s.push('hash');
	for (const o of s)
		Object.defineProperty(a, o, {
			get() {
				return (e(), t[o]);
			},
			enumerable: !0,
			configurable: !0
		});
	return a;
}
function ye(...t) {
	let e = 5381;
	for (const n of t)
		if (typeof n == 'string') {
			let r = n.length;
			for (; r; ) e = (e * 33) ^ n.charCodeAt(--r);
		} else if (ArrayBuffer.isView(n)) {
			const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
			let a = r.length;
			for (; a; ) e = (e * 33) ^ r[--a];
		} else throw new TypeError('value must be a string or TypedArray');
	return (e >>> 0).toString(36);
}
new TextEncoder();
new TextDecoder();
function ve(t) {
	const e = atob(t),
		n = new Uint8Array(e.length);
	for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
	return n;
}
const be = window.fetch;
window.fetch = (t, e) => (
	(t instanceof Request ? t.method : (e == null ? void 0 : e.method) || 'GET') !== 'GET' &&
		B.delete(St(t)),
	be(t, e)
);
const B = new Map();
function ke(t, e) {
	const n = St(t, e),
		r = document.querySelector(n);
	if (r != null && r.textContent) {
		r.remove();
		let { body: a, ...s } = JSON.parse(r.textContent);
		const o = r.getAttribute('data-ttl');
		return (
			o && B.set(n, { body: a, init: s, ttl: 1e3 * Number(o) }),
			r.getAttribute('data-b64') !== null && (a = ve(a)),
			Promise.resolve(new Response(a, s))
		);
	}
	return window.fetch(t, e);
}
function Ee(t, e, n) {
	if (B.size > 0) {
		const r = St(t, n),
			a = B.get(r);
		if (a) {
			if (
				performance.now() < a.ttl &&
				['default', 'force-cache', 'only-if-cached', void 0].includes(n == null ? void 0 : n.cache)
			)
				return new Response(a.body, a.init);
			B.delete(r);
		}
	}
	return window.fetch(e, n);
}
function St(t, e) {
	let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request ? t.url : t)}]`;
	if ((e != null && e.headers) || (e != null && e.body)) {
		const a = [];
		(e.headers && a.push([...new Headers(e.headers)].join(',')),
			e.body && (typeof e.body == 'string' || ArrayBuffer.isView(e.body)) && a.push(e.body),
			(r += `[data-hash="${ye(...a)}"]`));
	}
	return r;
}
const Se = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Re(t) {
	const e = [];
	return {
		pattern:
			t === '/'
				? /^\/$/
				: new RegExp(
						`^${Ae(t)
							.map((r) => {
								const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
								if (a)
									return (
										e.push({ name: a[1], matcher: a[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/([^]*))?'
									);
								const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
								if (s)
									return (
										e.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!r) return;
								const o = r.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									o
										.map((l, c) => {
											if (c % 2) {
												if (l.startsWith('x+'))
													return dt(String.fromCharCode(parseInt(l.slice(2), 16)));
												if (l.startsWith('u+'))
													return dt(
														String.fromCharCode(
															...l
																.slice(2)
																.split('-')
																.map((f) => parseInt(f, 16))
														)
													);
												const p = Se.exec(l),
													[, h, _, u, m] = p;
												return (
													e.push({
														name: u,
														matcher: m,
														optional: !!h,
														rest: !!_,
														chained: _ ? c === 1 && o[0] === '' : !1
													}),
													_ ? '([^]*?)' : h ? '([^/]*)?' : '([^/]+?)'
												);
											}
											return dt(l);
										})
										.join('')
								);
							})
							.join('')}/?$`
					),
		params: e
	};
}
function xe(t) {
	return t !== '' && !/^\([^)]+\)$/.test(t);
}
function Ae(t) {
	return t.slice(1).split('/').filter(xe);
}
function Le(t, e, n) {
	const r = {},
		a = t.slice(1),
		s = a.filter((i) => i !== void 0);
	let o = 0;
	for (let i = 0; i < e.length; i += 1) {
		const l = e[i];
		let c = a[i - o];
		if (
			(l.chained &&
				l.rest &&
				o &&
				((c = a
					.slice(i - o, i + 1)
					.filter((p) => p)
					.join('/')),
				(o = 0)),
			c === void 0)
		) {
			l.rest && (r[l.name] = '');
			continue;
		}
		if (!l.matcher || n[l.matcher](c)) {
			r[l.name] = c;
			const p = e[i + 1],
				h = a[i + 1];
			(p && !p.rest && p.optional && h && l.chained && (o = 0),
				!p && !h && Object.keys(r).length === s.length && (o = 0));
			continue;
		}
		if (l.optional && l.chained) {
			o++;
			continue;
		}
		return;
	}
	if (!o) return r;
}
function dt(t) {
	return t
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function Ue({ nodes: t, server_loads: e, dictionary: n, matchers: r }) {
	const a = new Set(e);
	return Object.entries(n).map(([i, [l, c, p]]) => {
		const { pattern: h, params: _ } = Re(i),
			u = {
				id: i,
				exec: (m) => {
					const f = h.exec(m);
					if (f) return Le(f, _, r);
				},
				errors: [1, ...(p || [])].map((m) => t[m]),
				layouts: [0, ...(c || [])].map(o),
				leaf: s(l)
			};
		return ((u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length)), u);
	});
	function s(i) {
		const l = i < 0;
		return (l && (i = ~i), [l, t[i]]);
	}
	function o(i) {
		return i === void 0 ? i : [a.has(i), t[i]];
	}
}
function Gt(t, e = JSON.parse) {
	try {
		return e(sessionStorage[t]);
	} catch {}
}
function Nt(t, e, n = JSON.stringify) {
	const r = n(e);
	try {
		sessionStorage[t] = r;
	} catch {}
}
const Te = '1768774108936',
	Mt = 'sveltekit:snapshot',
	Ht = 'sveltekit:scroll',
	Wt = 'sveltekit:states',
	Pe = 'sveltekit:pageurl',
	q = 'sveltekit:history',
	G = 'sveltekit:navigation',
	O = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	Rt = location.origin;
function Yt(t) {
	if (t instanceof URL) return t;
	let e = document.baseURI;
	if (!e) {
		const n = document.getElementsByTagName('base');
		e = n.length ? n[0].href : document.URL;
	}
	return new URL(t, e);
}
function it() {
	return { x: pageXOffset, y: pageYOffset };
}
function D(t, e) {
	return t.getAttribute(`data-sveltekit-${e}`);
}
const jt = { ...O, '': O.hover };
function Jt(t) {
	let e = t.assignedSlot ?? t.parentNode;
	return ((e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e);
}
function zt(t, e) {
	for (; t && t !== e; ) {
		if (t.nodeName.toUpperCase() === 'A' && t.hasAttribute('href')) return t;
		t = Jt(t);
	}
}
function gt(t, e, n) {
	let r;
	try {
		if (
			((r = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)),
			n && r.hash.match(/^#[^/]/))
		) {
			const i = location.hash.split('#')[1] || '/';
			r.hash = `#${i}${r.hash}`;
		}
	} catch {}
	const a = t instanceof SVGAElement ? t.target.baseVal : t.target,
		s = !r || !!a || lt(r, e, n) || (t.getAttribute('rel') || '').split(/\s+/).includes('external'),
		o = (r == null ? void 0 : r.origin) === Rt && t.hasAttribute('download');
	return { url: r, external: s, target: a, download: o };
}
function Z(t) {
	let e = null,
		n = null,
		r = null,
		a = null,
		s = null,
		o = null,
		i = t;
	for (; i && i !== document.documentElement; )
		(r === null && (r = D(i, 'preload-code')),
			a === null && (a = D(i, 'preload-data')),
			e === null && (e = D(i, 'keepfocus')),
			n === null && (n = D(i, 'noscroll')),
			s === null && (s = D(i, 'reload')),
			o === null && (o = D(i, 'replacestate')),
			(i = Jt(i)));
	function l(c) {
		switch (c) {
			case '':
			case 'true':
				return !0;
			case 'off':
			case 'false':
				return !1;
			default:
				return;
		}
	}
	return {
		preload_code: jt[r ?? 'off'],
		preload_data: jt[a ?? 'off'],
		keepfocus: l(e),
		noscroll: l(n),
		reload: l(s),
		replace_state: l(o)
	};
}
function Dt(t) {
	const e = vt(t);
	let n = !0;
	function r() {
		((n = !0), e.update((o) => o));
	}
	function a(o) {
		((n = !1), e.set(o));
	}
	function s(o) {
		let i;
		return e.subscribe((l) => {
			(i === void 0 || (n && l !== i)) && o((i = l));
		});
	}
	return { notify: r, set: a, subscribe: s };
}
const Xt = { v: () => {} };
function $e() {
	const { set: t, subscribe: e } = vt(!1);
	let n;
	async function r() {
		clearTimeout(n);
		try {
			const a = await fetch(`${pe}/_app/version.json`, {
				headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
			});
			if (!a.ok) return !1;
			const o = (await a.json()).version !== Te;
			return (o && (t(!0), Xt.v(), clearTimeout(n)), o);
		} catch {
			return !1;
		}
	}
	return { subscribe: e, check: r };
}
function lt(t, e, n) {
	return t.origin !== Rt || !t.pathname.startsWith(e)
		? !0
		: n
			? t.pathname !== location.pathname
			: !1;
}
function cn(t) {}
const Qt = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...Qt];
const Ie = new Set([...Qt]);
[...Ie];
function Oe(t) {
	return t.filter((e) => e != null);
}
function xt(t) {
	return t instanceof bt || t instanceof Et ? t.status : 500;
}
function Ce(t) {
	return t instanceof Et ? t.text : 'Internal Error';
}
let S, M, ht;
const Ne = Ct.toString().includes('$$') || /function \w+\(\) \{\}/.test(Ct.toString());
Ne
	? ((S = {
			data: {},
			form: null,
			error: null,
			params: {},
			route: { id: null },
			state: {},
			status: -1,
			url: new URL('https://example.com')
		}),
		(M = { current: null }),
		(ht = { current: !1 }))
	: ((S = new (class {
			constructor() {
				A(this, 'data', $state.raw({}));
				A(this, 'form', $state.raw(null));
				A(this, 'error', $state.raw(null));
				A(this, 'params', $state.raw({}));
				A(this, 'route', $state.raw({ id: null }));
				A(this, 'state', $state.raw({}));
				A(this, 'status', $state.raw(-1));
				A(this, 'url', $state.raw(new URL('https://example.com')));
			}
		})()),
		(M = new (class {
			constructor() {
				A(this, 'current', $state.raw(null));
			}
		})()),
		(ht = new (class {
			constructor() {
				A(this, 'current', $state.raw(!1));
			}
		})()),
		(Xt.v = () => (ht.current = !0)));
function je(t) {
	Object.assign(S, t);
}
const qt = {
		spanContext() {
			return De;
		},
		setAttribute() {
			return this;
		},
		setAttributes() {
			return this;
		},
		addEvent() {
			return this;
		},
		setStatus() {
			return this;
		},
		updateName() {
			return this;
		},
		end() {
			return this;
		},
		isRecording() {
			return !1;
		},
		recordException() {
			return this;
		},
		addLink() {
			return this;
		},
		addLinks() {
			return this;
		}
	},
	De = { traceId: '', spanId: '', traceFlags: 0 },
	qe = new Set(['icon', 'shortcut icon', 'apple-touch-icon']),
	N = Gt(Ht) ?? {},
	H = Gt(Mt) ?? {},
	I = { url: Dt({}), page: Dt({}), navigating: vt(null), updated: $e() };
function At(t) {
	N[t] = it();
}
function Ve(t, e) {
	let n = t + 1;
	for (; N[n]; ) (delete N[n], (n += 1));
	for (n = e + 1; H[n]; ) (delete H[n], (n += 1));
}
function W(t, e = !1) {
	return (e ? location.replace(t.href) : (location.href = t.href), new Promise(() => {}));
}
async function Zt() {
	if ('serviceWorker' in navigator) {
		const t = await navigator.serviceWorker.getRegistration(L || '/');
		t && (await t.update());
	}
}
function Vt() {}
let Lt, mt, tt, T, wt, b;
const et = [],
	nt = [];
let v = null;
function _t() {
	let t;
	((t = v == null ? void 0 : v.fork) == null || t.then((e) => (e == null ? void 0 : e.discard())),
		(v = null));
}
const X = new Map(),
	te = new Set(),
	Ke = new Set(),
	F = new Set();
let w = { branch: [], error: null, url: null },
	ee = !1,
	at = !1,
	Kt = !0,
	Y = !1,
	K = !1,
	ne = !1,
	Ut = !1,
	ae,
	E,
	x,
	C;
const rt = new Set(),
	Bt = new Map();
async function hn(t, e, n) {
	let s, o, i, l, c;
	((s = globalThis.__sveltekit_9vsmsc) != null && s.data && globalThis.__sveltekit_9vsmsc.data,
		document.URL !== location.href && (location.href = location.href),
		(b = t),
		await ((i = (o = t.hooks).init) == null ? void 0 : i.call(o)),
		(Lt = Ue(t)),
		(T = document.documentElement),
		(wt = e),
		(mt = t.nodes[0]),
		(tt = t.nodes[1]),
		mt(),
		tt(),
		(E = (l = history.state) == null ? void 0 : l[q]),
		(x = (c = history.state) == null ? void 0 : c[G]),
		E || ((E = x = Date.now()), history.replaceState({ ...history.state, [q]: E, [G]: x }, '')));
	const r = N[E];
	function a() {
		r && ((history.scrollRestoration = 'manual'), scrollTo(r.x, r.y));
	}
	(n
		? (a(), await tn(wt, n))
		: (await V({
				type: 'enter',
				url: Yt(b.hash ? an(new URL(location.href)) : location.href),
				replace_state: !0
			}),
			a()),
		Ze());
}
function Be() {
	((et.length = 0), (Ut = !1));
}
function re(t) {
	nt.some((e) => (e == null ? void 0 : e.snapshot)) &&
		(H[t] = nt.map((e) => {
			let n;
			return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture();
		}));
}
function oe(t) {
	let e;
	(e = H[t]) == null ||
		e.forEach((n, r) => {
			let a, s;
			(s = (a = nt[r]) == null ? void 0 : a.snapshot) == null || s.restore(n);
		});
}
function Ft() {
	(At(E), Nt(Ht, N), re(x), Nt(Mt, H));
}
async function Fe(t, e, n, r) {
	let a;
	(e.invalidateAll && _t(),
		await V({
			type: 'goto',
			url: Yt(t),
			keepfocus: e.keepFocus,
			noscroll: e.noScroll,
			replace_state: e.replaceState,
			state: e.state,
			redirect_count: n,
			nav_token: r,
			accept: () => {
				(e.invalidateAll && ((Ut = !0), (a = [...Bt.keys()])),
					e.invalidate && e.invalidate.forEach(Qe));
			}
		}),
		e.invalidateAll &&
			Q()
				.then(Q)
				.then(() => {
					Bt.forEach(({ resource: s }, o) => {
						let i;
						a != null && a.includes(o) && ((i = s.refresh) == null || i.call(s));
					});
				}));
}
async function Ge(t) {
	if (t.id !== (v == null ? void 0 : v.id)) {
		_t();
		const e = {};
		(rt.add(e),
			(v = {
				id: t.id,
				token: e,
				promise: le({ ...t, preload: e }).then(
					(n) => (rt.delete(e), n.type === 'loaded' && n.state.error && _t(), n)
				),
				fork: null
			}));
	}
	return v.promise;
}
async function pt(t) {
	let n;
	const e = (n = await ct(t, !1)) == null ? void 0 : n.route;
	e && (await Promise.all([...e.layouts, e.leaf].map((r) => (r == null ? void 0 : r[1]()))));
}
async function se(t, e, n) {
	let a;
	w = t.state;
	const r = document.querySelector('style[data-sveltekit]');
	if (
		(r && r.remove(),
		Object.assign(S, t.props.page),
		(ae = new b.root({
			target: e,
			props: { ...t.props, stores: I, components: nt },
			hydrate: n,
			sync: !1
		})),
		await Promise.resolve(),
		oe(x),
		n)
	) {
		const s = {
			from: null,
			to: {
				params: w.params,
				route: { id: ((a = w.route) == null ? void 0 : a.id) ?? null },
				url: new URL(location.href)
			},
			willUnload: !1,
			type: 'enter',
			complete: Promise.resolve()
		};
		F.forEach((o) => o(s));
	}
	at = !0;
}
function ot({ url: t, params: e, branch: n, status: r, error: a, route: s, form: o }) {
	let i = 'never';
	if (L && (t.pathname === L || t.pathname === L + '/')) i = 'always';
	else for (const u of n) (u == null ? void 0 : u.slash) !== void 0 && (i = u.slash);
	((t.pathname = ge(t.pathname, i)), (t.search = t.search));
	const l = {
		type: 'loaded',
		state: { url: t, params: e, branch: n, error: a, route: s },
		props: { constructors: Oe(n).map((u) => u.node.component), page: Ot(S) }
	};
	o !== void 0 && (l.props.form = o);
	let c = {},
		p = !S,
		h = 0;
	for (let u = 0; u < Math.max(n.length, w.branch.length); u += 1) {
		const m = n[u],
			f = w.branch[u];
		((m == null ? void 0 : m.data) !== (f == null ? void 0 : f.data) && (p = !0),
			m && ((c = { ...c, ...m.data }), p && (l.props[`data_${h}`] = c), (h += 1)));
	}
	return (
		(!w.url || t.href !== w.url.href || w.error !== a || (o !== void 0 && o !== S.form) || p) &&
			(l.props.page = {
				error: a,
				params: e,
				route: { id: (s == null ? void 0 : s.id) ?? null },
				state: {},
				status: r,
				url: new URL(t),
				form: o ?? null,
				data: p ? c : S.data
			}),
		l
	);
}
async function Tt({ loader: t, parent: e, url: n, params: r, route: a, server_data_node: s }) {
	let p, h, _;
	let o = null,
		i = !0;
	const l = {
			dependencies: new Set(),
			params: new Set(),
			parent: !1,
			route: !1,
			url: !1,
			search_params: new Set()
		},
		c = await t();
	if ((p = c.universal) != null && p.load) {
		const u = function (...f) {
			for (const d of f) {
				const { href: g } = new URL(d, n);
				l.dependencies.add(g);
			}
		};
		const m = {
			tracing: { enabled: !1, root: qt, current: qt },
			route: new Proxy(a, { get: (f, d) => (i && (l.route = !0), f[d]) }),
			params: new Proxy(r, { get: (f, d) => (i && l.params.add(d), f[d]) }),
			data: (s == null ? void 0 : s.data) ?? null,
			url: _e(
				n,
				() => {
					i && (l.url = !0);
				},
				(f) => {
					i && l.search_params.add(f);
				},
				b.hash
			),
			async fetch(f, d) {
				f instanceof Request &&
					(d = {
						body: f.method === 'GET' || f.method === 'HEAD' ? void 0 : await f.blob(),
						cache: f.cache,
						credentials: f.credentials,
						headers: [...f.headers].length > 0 ? (f == null ? void 0 : f.headers) : void 0,
						integrity: f.integrity,
						keepalive: f.keepalive,
						method: f.method,
						mode: f.mode,
						redirect: f.redirect,
						referrer: f.referrer,
						referrerPolicy: f.referrerPolicy,
						signal: f.signal,
						...d
					});
				const { resolved: g, promise: y } = ie(f, d, n);
				return (i && u(g.href), y);
			},
			setHeaders: () => {},
			depends: u,
			parent() {
				return (i && (l.parent = !0), e());
			},
			untrack(f) {
				i = !1;
				try {
					return f();
				} finally {
					i = !0;
				}
			}
		};
		o = (await c.universal.load.call(null, m)) ?? null;
	}
	return {
		node: c,
		loader: t,
		server: s,
		universal: (h = c.universal) != null && h.load ? { type: 'data', data: o, uses: l } : null,
		data: o ?? (s == null ? void 0 : s.data) ?? null,
		slash: ((_ = c.universal) == null ? void 0 : _.trailingSlash) ?? (s == null ? void 0 : s.slash)
	};
}
function ie(t, e, n) {
	let r = t instanceof Request ? t.url : t;
	const a = new URL(r, n);
	a.origin === n.origin && (r = a.href.slice(n.origin.length));
	const s = at ? Ee(r, a.href, e) : ke(r, e);
	return { resolved: a, promise: s };
}
function Me(t, e, n, r, a, s) {
	if (Ut) return !0;
	if (!a) return !1;
	if ((a.parent && t) || (a.route && e) || (a.url && n)) return !0;
	for (const o of a.search_params) if (r.has(o)) return !0;
	for (const o of a.params) if (s[o] !== w.params[o]) return !0;
	for (const o of a.dependencies) if (et.some((i) => i(new URL(o)))) return !0;
	return !1;
}
function Pt(t, e) {
	return (t == null ? void 0 : t.type) === 'data'
		? t
		: (t == null ? void 0 : t.type) === 'skip'
			? (e ?? null)
			: null;
}
function He(t, e) {
	if (!t) return new Set(e.searchParams.keys());
	const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
	for (const r of n) {
		const a = t.searchParams.getAll(r),
			s = e.searchParams.getAll(r);
		a.every((o) => s.includes(o)) && s.every((o) => a.includes(o)) && n.delete(r);
	}
	return n;
}
function We({ error: t, url: e, route: n, params: r }) {
	return {
		type: 'loaded',
		state: { error: t, url: e, route: n, params: r, branch: [] },
		props: { page: Ot(S), constructors: [] }
	};
}
async function le({ id: t, invalidating: e, url: n, params: r, route: a, preload: s }) {
	if ((v == null ? void 0 : v.id) === t) return (rt.delete(v.token), v.promise);
	const { errors: o, layouts: i, leaf: l } = a,
		c = [...i, l];
	(o.forEach((d) => (d == null ? void 0 : d().catch(() => {}))),
		c.forEach((d) => (d == null ? void 0 : d[1]().catch(() => {}))));
	const p = w.url ? t !== st(w.url) : !1,
		h = w.route ? a.id !== w.route.id : !1,
		_ = He(w.url, n);
	let u = !1;
	const m = c.map(async (d, g) => {
		let P;
		if (!d) return;
		const y = w.branch[g];
		return d[1] === (y == null ? void 0 : y.loader) &&
			!Me(u, h, p, _, (P = y.universal) == null ? void 0 : P.uses, r)
			? y
			: ((u = !0),
				Tt({
					loader: d[1],
					url: n,
					params: r,
					route: a,
					parent: async () => {
						let z;
						const U = {};
						for (let k = 0; k < g; k += 1)
							Object.assign(U, (z = await m[k]) == null ? void 0 : z.data);
						return U;
					},
					server_data_node: Pt(
						d[0] ? { type: 'skip' } : null,
						d[0] ? (y == null ? void 0 : y.server) : void 0
					)
				}));
	});
	for (const d of m) d.catch(() => {});
	const f = [];
	for (let d = 0; d < c.length; d += 1)
		if (c[d])
			try {
				f.push(await m[d]);
			} catch (g) {
				if (g instanceof kt) return { type: 'redirect', location: g.location };
				if (rt.has(s))
					return We({
						error: await J(g, { params: r, url: n, route: { id: a.id } }),
						url: n,
						params: r,
						route: a
					});
				let y = xt(g),
					R;
				if (g instanceof bt) R = g.body;
				else {
					if (await I.updated.check()) return (await Zt(), await W(n));
					R = await J(g, { params: r, url: n, route: { id: a.id } });
				}
				const P = await Ye(d, f, o);
				return P
					? ot({
							url: n,
							params: r,
							branch: f.slice(0, P.idx).concat(P.node),
							status: y,
							error: R,
							route: a
						})
					: await fe(n, { id: a.id }, R, y);
			}
		else f.push(void 0);
	return ot({
		url: n,
		params: r,
		branch: f,
		status: 200,
		error: null,
		route: a,
		form: e ? void 0 : null
	});
}
async function Ye(t, e, n) {
	for (; t--; )
		if (n[t]) {
			let r = t;
			for (; !e[r]; ) r -= 1;
			try {
				return {
					idx: r + 1,
					node: { node: await n[t](), loader: n[t], data: {}, server: null, universal: null }
				};
			} catch {
				continue;
			}
		}
}
async function $t({ status: t, error: e, url: n, route: r }) {
	const a = {};
	const s = null;
	try {
		const o = await Tt({
				loader: mt,
				url: n,
				params: a,
				route: r,
				parent: () => Promise.resolve({}),
				server_data_node: Pt(s)
			}),
			i = { node: await tt(), loader: tt, universal: null, server: null, data: null };
		return ot({ url: n, params: a, branch: [o, i], status: t, error: e, route: null });
	} catch (o) {
		if (o instanceof kt) return Fe(new URL(o.location, location.href), {}, 0);
		throw o;
	}
}
async function Je(t) {
	const e = t.href;
	if (X.has(e)) return X.get(e);
	let n;
	try {
		const r = (async () => {
			let a =
				(await b.hooks.reroute({ url: new URL(t), fetch: async (s, o) => ie(s, o, t).promise })) ??
				t;
			if (typeof a == 'string') {
				const s = new URL(t);
				(b.hash ? (s.hash = a) : (s.pathname = a), (a = s));
			}
			return a;
		})();
		(X.set(e, r), (n = await r));
	} catch {
		X.delete(e);
		return;
	}
	return n;
}
async function ct(t, e) {
	if (t && !lt(t, L, b.hash)) {
		const n = await Je(t);
		if (!n) return;
		const r = ze(n);
		for (const a of Lt) {
			const s = a.exec(r);
			if (s) return { id: st(t), invalidating: e, route: a, params: we(s), url: t };
		}
	}
}
function ze(t) {
	return (
		me(b.hash ? t.hash.replace(/^#/, '').replace(/[?#].+/, '') : t.pathname.slice(L.length)) || '/'
	);
}
function st(t) {
	return (b.hash ? t.hash.replace(/^#/, '') : t.pathname) + t.search;
}
function ce({ url: t, type: e, intent: n, delta: r, event: a }) {
	let s = !1;
	const o = It(w, n, t, e);
	(r !== void 0 && (o.navigation.delta = r), a !== void 0 && (o.navigation.event = a));
	const i = {
		...o.navigation,
		cancel: () => {
			((s = !0), o.reject(new Error('navigation cancelled')));
		}
	};
	return (Y || te.forEach((l) => l(i)), s ? null : o);
}
async function V({
	type: t,
	url: e,
	popped: n,
	keepfocus: r,
	noscroll: a,
	replace_state: s,
	state: o = {},
	redirect_count: i = 0,
	nav_token: l = {},
	accept: c = Vt,
	block: p = Vt,
	event: h
}) {
	const _ = C;
	C = l;
	const u = await ct(e, !1),
		m =
			t === 'enter'
				? It(w, u, e, t)
				: ce({ url: e, type: t, delta: n == null ? void 0 : n.delta, intent: u, event: h });
	if (!m) {
		(p(), C === l && (C = _));
		return;
	}
	const f = E,
		d = x;
	(c(),
		(Y = !0),
		at && m.navigation.type !== 'enter' && I.navigating.set((M.current = m.navigation)));
	let g = u && (await le(u));
	if (!g) {
		if (lt(e, L, b.hash)) return await W(e, s);
		g = await fe(
			e,
			{ id: null },
			await J(new Et(404, 'Not Found', `Not found: ${e.pathname}`), {
				url: e,
				params: {},
				route: { id: null }
			}),
			404,
			s
		);
	}
	if (((e = (u == null ? void 0 : u.url) || e), C !== l))
		return (m.reject(new Error('navigation aborted')), !1);
	if (g.type === 'redirect') {
		if (i < 20) {
			(await V({
				type: t,
				url: new URL(g.location, e),
				popped: n,
				keepfocus: r,
				noscroll: a,
				replace_state: s,
				state: o,
				redirect_count: i + 1,
				nav_token: l
			}),
				m.fulfil(void 0));
			return;
		}
		g = await $t({
			status: 500,
			error: await J(new Error('Redirect loop'), { url: e, params: {}, route: { id: null } }),
			url: e,
			route: { id: null }
		});
	} else g.props.page.status >= 400 && (await I.updated.check()) && (await Zt(), await W(e, s));
	if (
		(Be(),
		At(f),
		re(d),
		g.props.page.url.pathname !== e.pathname && (e.pathname = g.props.page.url.pathname),
		(o = n ? n.state : o),
		!n)
	) {
		const k = s ? 0 : 1,
			j = { [q]: (E += k), [G]: (x += k), [Wt]: o };
		((s ? history.replaceState : history.pushState).call(history, j, '', e), s || Ve(E, x));
	}
	const y = u && (v == null ? void 0 : v.id) === u.id ? v.fork : null;
	((v = null), (g.props.page.state = o));
	let R;
	if (at) {
		const k = (await Promise.all(Array.from(Ke, ($) => $(m.navigation)))).filter(
			($) => typeof $ == 'function'
		);
		if (k.length > 0) {
			const $ = function () {
				k.forEach((ft) => {
					F.delete(ft);
				});
			};
			(k.push($),
				k.forEach((ft) => {
					F.add(ft);
				}));
		}
		((w = g.state), g.props.page && (g.props.page.url = e));
		const j = y && (await y);
		(j ? (R = j.commit()) : (ae.$set(g.props), je(g.props.page), (R = void 0)), (ne = !0));
	} else await se(g, wt, !1);
	const { activeElement: P } = document;
	(await R, await Q(), await Q());
	let U = n ? n.scroll : a ? it() : null;
	if (Kt) {
		const k = e.hash && document.getElementById(ue(e));
		if (U) scrollTo(U.x, U.y);
		else if (k) {
			k.scrollIntoView();
			const { top: j, left: $ } = k.getBoundingClientRect();
			U = { x: pageXOffset + $, y: pageYOffset + j };
		} else scrollTo(0, 0);
	}
	const z = document.activeElement !== P && document.activeElement !== document.body;
	(!r && !z && nn(e, U),
		(Kt = !0),
		g.props.page && Object.assign(S, g.props.page),
		(Y = !1),
		t === 'popstate' && oe(x),
		m.fulfil(void 0),
		F.forEach((k) => k(m.navigation)),
		I.navigating.set((M.current = null)));
}
async function fe(t, e, n, r, a) {
	return t.origin === Rt && t.pathname === location.pathname && !ee
		? await $t({ status: r, error: n, url: t, route: e })
		: await W(t, a);
}
function Xe() {
	let t, e, n;
	T.addEventListener('mousemove', (i) => {
		const l = i.target;
		(clearTimeout(t),
			(t = setTimeout(() => {
				s(l, O.hover);
			}, 20)));
	});
	function r(i) {
		i.defaultPrevented || s(i.composedPath()[0], O.tap);
	}
	(T.addEventListener('mousedown', r), T.addEventListener('touchstart', r, { passive: !0 }));
	const a = new IntersectionObserver(
		(i) => {
			for (const l of i) l.isIntersecting && (pt(new URL(l.target.href)), a.unobserve(l.target));
		},
		{ threshold: 0 }
	);
	async function s(i, l) {
		const c = zt(i, T),
			p = c === e && l >= n;
		if (!c || p) return;
		const { url: h, external: _, download: u } = gt(c, L, b.hash);
		if (_ || u) return;
		const m = Z(c),
			f = h && st(w.url) === st(h);
		if (!(m.reload || f))
			if (l <= m.preload_data) {
				((e = c), (n = O.tap));
				const d = await ct(h, !1);
				if (!d) return;
				Ge(d);
			} else l <= m.preload_code && ((e = c), (n = l), pt(h));
	}
	function o() {
		a.disconnect();
		for (const i of T.querySelectorAll('a')) {
			const { url: l, external: c, download: p } = gt(i, L, b.hash);
			if (c || p) continue;
			const h = Z(i);
			h.reload ||
				(h.preload_code === O.viewport && a.observe(i), h.preload_code === O.eager && pt(l));
		}
	}
	(F.add(o), o());
}
function J(t, e) {
	if (t instanceof bt) return t.body;
	const n = xt(t),
		r = Ce(t);
	return b.hooks.handleError({ error: t, event: e, status: n, message: r }) ?? { message: r };
}
function Qe(t) {
	if (typeof t == 'function') et.push(t);
	else {
		const { href: e } = new URL(t, location.href);
		et.push((n) => n.href === e);
	}
}
function Ze() {
	let e;
	((history.scrollRestoration = 'manual'),
		addEventListener('beforeunload', (n) => {
			let r = !1;
			if ((Ft(), !Y)) {
				const a = It(w, void 0, null, 'leave'),
					s = {
						...a.navigation,
						cancel: () => {
							((r = !0), a.reject(new Error('navigation cancelled')));
						}
					};
				te.forEach((o) => o(s));
			}
			r ? (n.preventDefault(), (n.returnValue = '')) : (history.scrollRestoration = 'auto');
		}),
		addEventListener('visibilitychange', () => {
			document.visibilityState === 'hidden' && Ft();
		}),
		((e = navigator.connection) != null && e.saveData) || Xe(),
		T.addEventListener('click', async (n) => {
			if (
				n.button ||
				n.which !== 1 ||
				n.metaKey ||
				n.ctrlKey ||
				n.shiftKey ||
				n.altKey ||
				n.defaultPrevented
			)
				return;
			const r = zt(n.composedPath()[0], T);
			if (!r) return;
			const { url: a, external: s, target: o, download: i } = gt(r, L, b.hash);
			if (!a) return;
			if (o === '_parent' || o === '_top') {
				if (window.parent !== window) return;
			} else if (o && o !== '_self') return;
			const l = Z(r);
			if (
				(!(r instanceof SVGAElement) &&
					a.protocol !== location.protocol &&
					!(a.protocol === 'https:' || a.protocol === 'http:')) ||
				i
			)
				return;
			const [p, h] = (b.hash ? a.hash.replace(/^#/, '') : a.href).split('#'),
				_ = p === ut(location);
			if (s || (l.reload && (!_ || !h))) {
				ce({ url: a, type: 'link', event: n }) ? (Y = !0) : n.preventDefault();
				return;
			}
			if (h !== void 0 && _) {
				const [, u] = w.url.href.split('#');
				if (u === h) {
					if (
						(n.preventDefault(),
						h === '' || (h === 'top' && r.ownerDocument.getElementById('top') === null))
					)
						scrollTo({ top: 0 });
					else {
						const m = r.ownerDocument.getElementById(decodeURIComponent(h));
						m && (m.scrollIntoView(), m.focus());
					}
					return;
				}
				if (((K = !0), At(E), t(a), !l.replace_state)) return;
				K = !1;
			}
			(n.preventDefault(),
				await new Promise((u) => {
					(requestAnimationFrame(() => {
						setTimeout(u, 0);
					}),
						setTimeout(u, 100));
				}),
				await V({
					type: 'link',
					url: a,
					keepfocus: l.keepfocus,
					noscroll: l.noscroll,
					replace_state: l.replace_state ?? a.href === location.href,
					event: n
				}));
		}),
		T.addEventListener('submit', (n) => {
			if (n.defaultPrevented) return;
			const r = HTMLFormElement.prototype.cloneNode.call(n.target),
				a = n.submitter;
			if (
				((a == null ? void 0 : a.formTarget) || r.target) === '_blank' ||
				((a == null ? void 0 : a.formMethod) || r.method) !== 'get'
			)
				return;
			const i = new URL(
				((a == null ? void 0 : a.hasAttribute('formaction')) &&
					(a == null ? void 0 : a.formAction)) ||
					r.action
			);
			if (lt(i, L, !1)) return;
			const l = n.target,
				c = Z(l);
			if (c.reload) return;
			(n.preventDefault(), n.stopPropagation());
			const p = new FormData(l, a);
			((i.search = new URLSearchParams(p).toString()),
				V({
					type: 'form',
					url: i,
					keepfocus: c.keepfocus,
					noscroll: c.noscroll,
					replace_state: c.replace_state ?? i.href === location.href,
					event: n
				}));
		}),
		addEventListener('popstate', async (n) => {
			let r;
			if (!yt) {
				if ((r = n.state) != null && r[q]) {
					const a = n.state[q];
					if (((C = {}), a === E)) return;
					const s = N[a],
						o = n.state[Wt] ?? {},
						i = new URL(n.state[Pe] ?? location.href),
						l = n.state[G],
						c = w.url ? ut(location) === ut(w.url) : !1;
					if (l === x && (ne || c)) {
						(o !== S.state && (S.state = o), t(i), (N[E] = it()), s && scrollTo(s.x, s.y), (E = a));
						return;
					}
					const h = a - E;
					await V({
						type: 'popstate',
						url: i,
						popped: { state: o, scroll: s, delta: h },
						accept: () => {
							((E = a), (x = l));
						},
						block: () => {
							history.go(-h);
						},
						nav_token: C,
						event: n
					});
				} else if (!K) {
					const a = new URL(location.href);
					(t(a), b.hash && location.reload());
				}
			}
		}),
		addEventListener('hashchange', () => {
			K &&
				((K = !1), history.replaceState({ ...history.state, [q]: ++E, [G]: x }, '', location.href));
		}));
	for (const n of document.querySelectorAll('link')) qe.has(n.rel) && (n.href = n.href);
	addEventListener('pageshow', (n) => {
		n.persisted && I.navigating.set((M.current = null));
	});
	function t(n) {
		((w.url = S.url = n), I.page.set(Ot(S)), I.page.notify());
	}
}
async function tn(
	t,
	{ status: e = 200, error: n, node_ids: r, params: a, route: s, server_route: o, data: i, form: l }
) {
	ee = !0;
	const c = new URL(location.href);
	let p;
	(({ params: a = {}, route: s = { id: null } } = (await ct(c, !1)) || {}),
		(p = Lt.find(({ id: u }) => u === s.id)));
	let h,
		_ = !0;
	try {
		const u = r.map(async (f, d) => {
				const g = i[d];
				return (
					g != null && g.uses && (g.uses = en(g.uses)),
					Tt({
						loader: b.nodes[f],
						url: c,
						params: a,
						route: s,
						parent: async () => {
							const y = {};
							for (let R = 0; R < d; R += 1) Object.assign(y, (await u[R]).data);
							return y;
						},
						server_data_node: Pt(g)
					})
				);
			}),
			m = await Promise.all(u);
		if (p) {
			const f = p.layouts;
			for (let d = 0; d < f.length; d++) f[d] || m.splice(d, 0, void 0);
		}
		h = ot({ url: c, params: a, branch: m, status: e, error: n, form: l, route: p ?? null });
	} catch (u) {
		if (u instanceof kt) {
			await W(new URL(u.location, location.href));
			return;
		}
		((h = await $t({
			status: xt(u),
			error: await J(u, { url: c, params: a, route: s }),
			url: c,
			route: s
		})),
			(t.textContent = ''),
			(_ = !1));
	}
	(h.props.page && (h.props.page.state = {}), await se(h, t, _));
}
function en(t) {
	return {
		dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
		params: new Set((t == null ? void 0 : t.params) ?? []),
		parent: !!(t != null && t.parent),
		route: !!(t != null && t.route),
		url: !!(t != null && t.url),
		search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
	};
}
let yt = !1;
function nn(t, e = null) {
	const n = document.querySelector('[autofocus]');
	if (n) n.focus();
	else {
		const r = ue(t);
		if (r && document.getElementById(r)) {
			const { x: s, y: o } = e ?? it();
			setTimeout(() => {
				const i = history.state;
				((yt = !0),
					location.replace(`#${r}`),
					b.hash && location.replace(t.hash),
					history.replaceState(i, '', t.hash),
					scrollTo(s, o),
					(yt = !1));
			});
		} else {
			const s = document.body,
				o = s.getAttribute('tabindex');
			((s.tabIndex = -1),
				s.focus({ preventScroll: !0, focusVisible: !1 }),
				o !== null ? s.setAttribute('tabindex', o) : s.removeAttribute('tabindex'));
		}
		const a = getSelection();
		if (a && a.type !== 'None') {
			const s = [];
			for (let o = 0; o < a.rangeCount; o += 1) s.push(a.getRangeAt(o));
			setTimeout(() => {
				if (a.rangeCount === s.length) {
					for (let o = 0; o < a.rangeCount; o += 1) {
						const i = s[o],
							l = a.getRangeAt(o);
						if (
							i.commonAncestorContainer !== l.commonAncestorContainer ||
							i.startContainer !== l.startContainer ||
							i.endContainer !== l.endContainer ||
							i.startOffset !== l.startOffset ||
							i.endOffset !== l.endOffset
						)
							return;
					}
					a.removeAllRanges();
				}
			});
		}
	}
}
function It(t, e, n, r) {
	let l, c;
	let a, s;
	const o = new Promise((p, h) => {
		((a = p), (s = h));
	});
	return (
		o.catch(() => {}),
		{
			navigation: {
				from: {
					params: t.params,
					route: { id: ((l = t.route) == null ? void 0 : l.id) ?? null },
					url: t.url
				},
				to: n && {
					params: (e == null ? void 0 : e.params) ?? null,
					route: { id: ((c = e == null ? void 0 : e.route) == null ? void 0 : c.id) ?? null },
					url: n
				},
				willUnload: !e,
				type: r,
				complete: o
			},
			fulfil: a,
			reject: s
		}
	);
}
function Ot(t) {
	return {
		data: t.data,
		error: t.error,
		form: t.form,
		params: t.params,
		route: t.route,
		state: t.state,
		status: t.status,
		url: t.url
	};
}
function an(t) {
	const e = new URL(t);
	return ((e.hash = decodeURIComponent(t.hash)), e);
}
function ue(t) {
	let e;
	if (b.hash) {
		const [, , n] = t.hash.split('#', 3);
		e = n ?? '';
	} else e = t.hash.slice(1);
	return decodeURIComponent(e);
}
export { hn as a, cn as l, I as s };
