const ti = Object.defineProperty;
const an = (o) => {
	throw TypeError(o);
};
const ni = (o, t, e) =>
	t in o ? ti(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (o[t] = e);
const I = (o, t, e) => ni(o, typeof t != 'symbol' ? t + '' : t, e),
	ii = (o, t, e) => t.has(o) || an('Cannot ' + e);
const on = (o, t, e) =>
	t.has(o)
		? an('Cannot add the same private member more than once')
		: t instanceof WeakSet
			? t.add(o)
			: t.set(o, e);
const Je = (o, t, e) => (ii(o, t, 'access private method'), e);
import {
	s as xn,
	n as kt,
	d as Ne,
	i as wn,
	l as Se,
	c as _t,
	e as St,
	h as Bt,
	o as ui,
	r as ri,
	u as si,
	w as ai,
	x as oi,
	y as li,
	S as ln,
	b as ci
} from './Bit1RA6o.js';
import { S as Tn, i as yn, t as pi, a as fi } from './C5IiiZmU.js';
import { j as cn, k as hi } from './DshTmGMi.js';
const Di =
		/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
	gi = Object.hasOwnProperty;
class _n {
	constructor() {
		(this.occurrences, this.reset());
	}
	slug(t, e) {
		const n = this;
		let i = di(t, e === !0);
		const r = i;
		for (; gi.call(n.occurrences, i); ) (n.occurrences[r]++, (i = r + '-' + n.occurrences[r]));
		return ((n.occurrences[i] = 0), i);
	}
	reset() {
		this.occurrences = Object.create(null);
	}
}
function di(o, t) {
	return typeof o != 'string'
		? ''
		: (t || (o = o.toLowerCase()), o.replace(Di, '').replace(/ /g, '-'));
}
let Sn = new _n(),
	Bn = [];
function Fi({ prefix: o = '', globalSlugs: t = !1 } = {}) {
	return {
		headerIds: !1,
		hooks: {
			preprocess(e) {
				return (t || mi(), e);
			}
		},
		renderer: {
			heading(e, n, i) {
				i = i
					.toLowerCase()
					.trim()
					.replace(/<[!\/a-z].*?>/gi, '');
				const r = `${o}${Sn.slug(i)}`,
					u = { level: n, text: e, id: r };
				return (
					Bn.push(u),
					`<h${n} id="${r}">${e}</h${n}>
`
				);
			}
		}
	};
}
function mi() {
	((Bn = []), (Sn = new _n()));
}
function Ai() {
	return {
		mangle: !1,
		walkTokens(o) {
			if (o.type !== 'link' || !o.href.startsWith('mailto:')) return;
			const t = o.href.substring(7),
				e = Ei(t);
			((o.href = `mailto:${e}`),
				!(o.tokens.length !== 1 || o.tokens[0].type !== 'text' || o.tokens[0].text !== t) &&
					((o.text = e), (o.tokens[0].text = e)));
		}
	};
}
function Ei(o) {
	let t = '',
		e,
		n;
	const i = o.length;
	for (e = 0; e < i; e++)
		((n = o.charCodeAt(e)),
			Math.random() > 0.5 && (n = 'x' + n.toString(16)),
			(t += '&#' + n + ';'));
	return t;
}
const vn = { exports: {} };
(function (o) {
	const t =
		typeof window < 'u'
			? window
			: typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope
				? self
				: {};
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 *
	 * @license MIT <https://opensource.org/licenses/MIT>
	 * @author Lea Verou <https://lea.verou.me>
	 * @namespace
	 * @public
	 */ const e = (function (n) {
		var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
			r = 0,
			u = {},
			a = {
				manual: n.Prism && n.Prism.manual,
				disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
				util: {
					encode: function p(c) {
						return c instanceof l
							? new l(c.type, p(c.content), c.alias)
							: Array.isArray(c)
								? c.map(p)
								: c
										.replace(/&/g, '&amp;')
										.replace(/</g, '&lt;')
										.replace(/\u00a0/g, ' ');
					},
					type: function (p) {
						return Object.prototype.toString.call(p).slice(8, -1);
					},
					objId: function (p) {
						return (p.__id || Object.defineProperty(p, '__id', { value: ++r }), p.__id);
					},
					clone: function p(c, f) {
						f = f || {};
						let D, g;
						switch (a.util.type(c)) {
							case 'Object':
								if (((g = a.util.objId(c)), f[g])) return f[g];
								((D = {}), (f[g] = D));
								for (const C in c) c.hasOwnProperty(C) && (D[C] = p(c[C], f));
								return D;
							case 'Array':
								return (
									(g = a.util.objId(c)),
									f[g]
										? f[g]
										: ((D = []),
											(f[g] = D),
											c.forEach(function (y, k) {
												D[k] = p(y, f);
											}),
											D)
								);
							default:
								return c;
						}
					},
					getLanguage: function (p) {
						for (; p; ) {
							const c = i.exec(p.className);
							if (c) return c[1].toLowerCase();
							p = p.parentElement;
						}
						return 'none';
					},
					setLanguage: function (p, c) {
						((p.className = p.className.replace(RegExp(i, 'gi'), '')),
							p.classList.add('language-' + c));
					},
					currentScript: function () {
						if (typeof document > 'u') return null;
						if ('currentScript' in document) return document.currentScript;
						try {
							throw new Error();
						} catch (D) {
							const p = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(D.stack) || [])[1];
							if (p) {
								const c = document.getElementsByTagName('script');
								for (const f in c) if (c[f].src == p) return c[f];
							}
							return null;
						}
					},
					isActive: function (p, c, f) {
						for (let D = 'no-' + c; p; ) {
							const g = p.classList;
							if (g.contains(c)) return !0;
							if (g.contains(D)) return !1;
							p = p.parentElement;
						}
						return !!f;
					}
				},
				languages: {
					plain: u,
					plaintext: u,
					text: u,
					txt: u,
					extend: function (p, c) {
						const f = a.util.clone(a.languages[p]);
						for (const D in c) f[D] = c[D];
						return f;
					},
					insertBefore: function (p, c, f, D) {
						D = D || a.languages;
						const g = D[p],
							C = {};
						for (const y in g)
							if (g.hasOwnProperty(y)) {
								if (y == c) for (const k in f) f.hasOwnProperty(k) && (C[k] = f[k]);
								f.hasOwnProperty(y) || (C[y] = g[y]);
							}
						const O = D[p];
						return (
							(D[p] = C),
							a.languages.DFS(a.languages, function (S, V) {
								V === O && S != p && (this[S] = C);
							}),
							C
						);
					},
					DFS: function p(c, f, D, g) {
						g = g || {};
						const C = a.util.objId;
						for (const y in c)
							if (c.hasOwnProperty(y)) {
								f.call(c, y, c[y], D || y);
								const k = c[y],
									O = a.util.type(k);
								O === 'Object' && !g[C(k)]
									? ((g[C(k)] = !0), p(k, f, null, g))
									: O === 'Array' && !g[C(k)] && ((g[C(k)] = !0), p(k, f, y, g));
							}
					}
				},
				plugins: {},
				highlightAll: function (p, c) {
					a.highlightAllUnder(document, p, c);
				},
				highlightAllUnder: function (p, c, f) {
					const D = {
						callback: f,
						container: p,
						selector:
							'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};
					(a.hooks.run('before-highlightall', D),
						(D.elements = Array.prototype.slice.apply(D.container.querySelectorAll(D.selector))),
						a.hooks.run('before-all-elements-highlight', D));
					for (var g = 0, C; (C = D.elements[g++]); ) a.highlightElement(C, c === !0, D.callback);
				},
				highlightElement: function (p, c, f) {
					const D = a.util.getLanguage(p),
						g = a.languages[D];
					a.util.setLanguage(p, D);
					let C = p.parentElement;
					C && C.nodeName.toLowerCase() === 'pre' && a.util.setLanguage(C, D);
					const y = p.textContent,
						k = { element: p, language: D, grammar: g, code: y };
					function O(V) {
						((k.highlightedCode = V),
							a.hooks.run('before-insert', k),
							(k.element.innerHTML = k.highlightedCode),
							a.hooks.run('after-highlight', k),
							a.hooks.run('complete', k),
							f && f.call(k.element));
					}
					if (
						(a.hooks.run('before-sanity-check', k),
						(C = k.element.parentElement),
						C &&
							C.nodeName.toLowerCase() === 'pre' &&
							!C.hasAttribute('tabindex') &&
							C.setAttribute('tabindex', '0'),
						!k.code)
					) {
						(a.hooks.run('complete', k), f && f.call(k.element));
						return;
					}
					if ((a.hooks.run('before-highlight', k), !k.grammar)) {
						O(a.util.encode(k.code));
						return;
					}
					if (c && n.Worker) {
						const S = new Worker(a.filename);
						((S.onmessage = function (V) {
							O(V.data);
						}),
							S.postMessage(
								JSON.stringify({ language: k.language, code: k.code, immediateClose: !0 })
							));
					} else O(a.highlight(k.code, k.grammar, k.language));
				},
				highlight: function (p, c, f) {
					const D = { code: p, grammar: c, language: f };
					if ((a.hooks.run('before-tokenize', D), !D.grammar))
						throw new Error('The language "' + D.language + '" has no grammar.');
					return (
						(D.tokens = a.tokenize(D.code, D.grammar)),
						a.hooks.run('after-tokenize', D),
						l.stringify(a.util.encode(D.tokens), D.language)
					);
				},
				tokenize: function (p, c) {
					const f = c.rest;
					if (f) {
						for (const D in f) c[D] = f[D];
						delete c.rest;
					}
					const g = new b();
					return (A(g, g.head, p), F(p, g, c, g.head, 0), N(g));
				},
				hooks: {
					all: {},
					add: function (p, c) {
						const f = a.hooks.all;
						((f[p] = f[p] || []), f[p].push(c));
					},
					run: function (p, c) {
						const f = a.hooks.all[p];
						if (!(!f || !f.length)) for (var D = 0, g; (g = f[D++]); ) g(c);
					}
				},
				Token: l
			};
		n.Prism = a;
		function l(p, c, f, D) {
			((this.type = p), (this.content = c), (this.alias = f), (this.length = (D || '').length | 0));
		}
		l.stringify = function p(c, f) {
			if (typeof c == 'string') return c;
			if (Array.isArray(c)) {
				let D = '';
				return (
					c.forEach(function (O) {
						D += p(O, f);
					}),
					D
				);
			}
			const g = {
					type: c.type,
					content: p(c.content, f),
					tag: 'span',
					classes: ['token', c.type],
					attributes: {},
					language: f
				},
				C = c.alias;
			(C && (Array.isArray(C) ? Array.prototype.push.apply(g.classes, C) : g.classes.push(C)),
				a.hooks.run('wrap', g));
			let y = '';
			for (const k in g.attributes)
				y += ' ' + k + '="' + (g.attributes[k] || '').replace(/"/g, '&quot;') + '"';
			return (
				'<' +
				g.tag +
				' class="' +
				g.classes.join(' ') +
				'"' +
				y +
				'>' +
				g.content +
				'</' +
				g.tag +
				'>'
			);
		};
		function d(p, c, f, D) {
			p.lastIndex = c;
			const g = p.exec(f);
			if (g && D && g[1]) {
				const C = g[1].length;
				((g.index += C), (g[0] = g[0].slice(C)));
			}
			return g;
		}
		function F(p, c, f, D, g, C) {
			for (const y in f)
				if (!(!f.hasOwnProperty(y) || !f[y])) {
					let k = f[y];
					k = Array.isArray(k) ? k : [k];
					for (let O = 0; O < k.length; ++O) {
						if (C && C.cause == y + ',' + O) return;
						const S = k[O],
							V = S.inside,
							Ce = !!S.lookbehind,
							be = !!S.greedy,
							lt = S.alias;
						if (be && !S.pattern.global) {
							const ct = S.pattern.toString().match(/[imsuy]*$/)[0];
							S.pattern = RegExp(S.pattern.source, ct + 'g');
						}
						for (
							let We = S.pattern || S, P = D.next, K = g;
							P !== c.tail && !(C && K >= C.reach);
							K += P.value.length, P = P.next
						) {
							let ce = P.value;
							if (c.length > p.length) return;
							if (!(ce instanceof l)) {
								var M = 1,
									Y;
								if (be) {
									if (((Y = d(We, K, p, Ce)), !Y || Y.index >= p.length)) break;
									var ne = Y.index,
										U = Y.index + Y[0].length,
										ee = K;
									for (ee += P.value.length; ne >= ee; ) ((P = P.next), (ee += P.value.length));
									if (((ee -= P.value.length), (K = ee), P.value instanceof l)) continue;
									for (
										let R = P;
										R !== c.tail && (ee < U || typeof R.value == 'string');
										R = R.next
									)
										(M++, (ee += R.value.length));
									(M--, (ce = p.slice(K, ee)), (Y.index -= K));
								} else if (((Y = d(We, 0, ce, Ce)), !Y)) continue;
								var ne = Y.index,
									De = Y[0],
									ie = ce.slice(0, ne),
									Be = ce.slice(ne + De.length),
									ge = K + ce.length;
								C && ge > C.reach && (C.reach = ge);
								let de = P.prev;
								(ie && ((de = A(c, de, ie)), (K += ie.length)), w(c, de, M));
								const qe = new l(y, V ? a.tokenize(De, V) : De, lt, De);
								if (((P = A(c, de, qe)), Be && A(c, P, Be), M > 1)) {
									const ue = { cause: y + ',' + O, reach: ge };
									(F(p, c, f, P.prev, K, ue), C && ue.reach > C.reach && (C.reach = ue.reach));
								}
							}
						}
					}
				}
		}
		function b() {
			const p = { value: null, prev: null, next: null },
				c = { value: null, prev: p, next: null };
			((p.next = c), (this.head = p), (this.tail = c), (this.length = 0));
		}
		function A(p, c, f) {
			const D = c.next,
				g = { value: f, prev: c, next: D };
			return ((c.next = g), (D.prev = g), p.length++, g);
		}
		function w(p, c, f) {
			for (var D = c.next, g = 0; g < f && D !== p.tail; g++) D = D.next;
			((c.next = D), (D.prev = c), (p.length -= g));
		}
		function N(p) {
			for (var c = [], f = p.head.next; f !== p.tail; ) (c.push(f.value), (f = f.next));
			return c;
		}
		if (!n.document)
			return (
				n.addEventListener &&
					(a.disableWorkerMessageHandler ||
						n.addEventListener(
							'message',
							function (p) {
								const c = JSON.parse(p.data),
									f = c.language,
									D = c.code,
									g = c.immediateClose;
								(n.postMessage(a.highlight(D, a.languages[f], f)), g && n.close());
							},
							!1
						)),
				a
			);
		const _ = a.util.currentScript();
		_ && ((a.filename = _.src), _.hasAttribute('data-manual') && (a.manual = !0));
		function T() {
			a.manual || a.highlightAll();
		}
		if (!a.manual) {
			const L = document.readyState;
			L === 'loading' || (L === 'interactive' && _ && _.defer)
				? document.addEventListener('DOMContentLoaded', T)
				: window.requestAnimationFrame
					? window.requestAnimationFrame(T)
					: window.setTimeout(T, 16);
		}
		return a;
	})(t);
	(o.exports && (o.exports = e),
		typeof cn < 'u' && (cn.Prism = e),
		(e.languages.markup = {
			comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
			prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
			doctype: {
				pattern:
					/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
				greedy: !0,
				inside: {
					'internal-subset': {
						pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
						lookbehind: !0,
						greedy: !0,
						inside: null
					},
					string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
					punctuation: /^<!|>$|[[\]]/,
					'doctype-tag': /^DOCTYPE/i,
					name: /[^\s<>'"]+/
				}
			},
			cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
			tag: {
				pattern:
					/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
				greedy: !0,
				inside: {
					tag: {
						pattern: /^<\/?[^\s>\/]+/,
						inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
					},
					'special-attr': [],
					'attr-value': {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: {
							punctuation: [
								{ pattern: /^=/, alias: 'attr-equals' },
								{ pattern: /^(\s*)["']|["']$/, lookbehind: !0 }
							]
						}
					},
					punctuation: /\/?>/,
					'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
				}
			},
			entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
		}),
		(e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity),
		(e.languages.markup.doctype.inside['internal-subset'].inside = e.languages.markup),
		e.hooks.add('wrap', function (n) {
			n.type === 'entity' && (n.attributes.title = n.content.replace(/&amp;/, '&'));
		}),
		Object.defineProperty(e.languages.markup.tag, 'addInlined', {
			value: function (i, r) {
				const u = {};
				((u['language-' + r] = {
					pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
					lookbehind: !0,
					inside: e.languages[r]
				}),
					(u.cdata = /^<!\[CDATA\[|\]\]>$/i));
				const a = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: u } };
				a['language-' + r] = { pattern: /[\s\S]+/, inside: e.languages[r] };
				const l = {};
				((l[i] = {
					pattern: RegExp(
						/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
							/__/g,
							function () {
								return i;
							}
						),
						'i'
					),
					lookbehind: !0,
					greedy: !0,
					inside: a
				}),
					e.languages.insertBefore('markup', 'cdata', l));
			}
		}),
		Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
			value: function (n, i) {
				e.languages.markup.tag.inside['special-attr'].push({
					pattern: RegExp(
						/(^|["'\s])/.source +
							'(?:' +
							n +
							')' +
							/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
						'i'
					),
					lookbehind: !0,
					inside: {
						'attr-name': /^[^\s=]+/,
						'attr-value': {
							pattern: /=[\s\S]+/,
							inside: {
								value: {
									pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
									lookbehind: !0,
									alias: [i, 'language-' + i],
									inside: e.languages[i]
								},
								punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
							}
						}
					}
				});
			}
		}),
		(e.languages.html = e.languages.markup),
		(e.languages.mathml = e.languages.markup),
		(e.languages.svg = e.languages.markup),
		(e.languages.xml = e.languages.extend('markup', {})),
		(e.languages.ssml = e.languages.xml),
		(e.languages.atom = e.languages.xml),
		(e.languages.rss = e.languages.xml),
		(function (n) {
			const i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
			((n.languages.css = {
				comment: /\/\*[\s\S]*?\*\//,
				atrule: {
					pattern: RegExp(
						'@[\\w-](?:' +
							/[^;{\s"']|\s+(?!\s)/.source +
							'|' +
							i.source +
							')*?' +
							/(?:;|(?=\s*\{))/.source
					),
					inside: {
						rule: /^@[\w-]+/,
						'selector-function-argument': {
							pattern:
								/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
							lookbehind: !0,
							alias: 'selector'
						},
						keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
					}
				},
				url: {
					pattern: RegExp(
						'\\burl\\((?:' + i.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
						'i'
					),
					greedy: !0,
					inside: {
						function: /^url/i,
						punctuation: /^\(|\)$/,
						string: { pattern: RegExp('^' + i.source + '$'), alias: 'url' }
					}
				},
				selector: {
					pattern: RegExp(
						`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ')*(?=\\s*\\{)'
					),
					lookbehind: !0
				},
				string: { pattern: i, greedy: !0 },
				property: {
					pattern:
						/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
					lookbehind: !0
				},
				important: /!important\b/i,
				function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
				punctuation: /[(){};:,]/
			}),
				(n.languages.css.atrule.inside.rest = n.languages.css));
			const r = n.languages.markup;
			r && (r.tag.addInlined('style', 'css'), r.tag.addAttribute('style', 'css'));
		})(e),
		(e.languages.clike = {
			comment: [
				{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
				{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
			],
			string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
			'class-name': {
				pattern:
					/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
				lookbehind: !0,
				inside: { punctuation: /[.\\]/ }
			},
			keyword:
				/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
			boolean: /\b(?:false|true)\b/,
			function: /\b\w+(?=\()/,
			number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
			operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
			punctuation: /[{}[\];(),.:]/
		}),
		(e.languages.javascript = e.languages.extend('clike', {
			'class-name': [
				e.languages.clike['class-name'],
				{
					pattern:
						/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
					lookbehind: !0
				}
			],
			keyword: [
				{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
				{
					pattern:
						/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
					lookbehind: !0
				}
			],
			function:
				/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
			number: {
				pattern: RegExp(
					/(^|[^\w$])/.source +
						'(?:' +
						(/NaN|Infinity/.source +
							'|' +
							/0[bB][01]+(?:_[01]+)*n?/.source +
							'|' +
							/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
							'|' +
							/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
							'|' +
							/\d+(?:_\d+)*n/.source +
							'|' +
							/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
								.source) +
						')' +
						/(?![\w$])/.source
				),
				lookbehind: !0
			},
			operator:
				/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
		})),
		(e.languages.javascript['class-name'][0].pattern =
			/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
		e.languages.insertBefore('javascript', 'keyword', {
			regex: {
				pattern: RegExp(
					/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
						/\//.source +
						'(?:' +
						/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
						'|' +
						/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
							.source +
						')' +
						/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					'regex-source': {
						pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
						lookbehind: !0,
						alias: 'language-regex',
						inside: e.languages.regex
					},
					'regex-delimiter': /^\/|\/$/,
					'regex-flags': /^[a-z]+$/
				}
			},
			'function-variable': {
				pattern:
					/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
				alias: 'function'
			},
			parameter: [
				{
					pattern:
						/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
					lookbehind: !0,
					inside: e.languages.javascript
				},
				{
					pattern:
						/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
					lookbehind: !0,
					inside: e.languages.javascript
				},
				{
					pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
					lookbehind: !0,
					inside: e.languages.javascript
				},
				{
					pattern:
						/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
					lookbehind: !0,
					inside: e.languages.javascript
				}
			],
			constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
		}),
		e.languages.insertBefore('javascript', 'string', {
			hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
			'template-string': {
				pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
				greedy: !0,
				inside: {
					'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
					interpolation: {
						pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
						lookbehind: !0,
						inside: {
							'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
							rest: e.languages.javascript
						}
					},
					string: /[\s\S]+/
				}
			},
			'string-property': {
				pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
				lookbehind: !0,
				greedy: !0,
				alias: 'property'
			}
		}),
		e.languages.insertBefore('javascript', 'operator', {
			'literal-property': {
				pattern:
					/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
				lookbehind: !0,
				alias: 'property'
			}
		}),
		e.languages.markup &&
			(e.languages.markup.tag.addInlined('script', 'javascript'),
			e.languages.markup.tag.addAttribute(
				/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
					.source,
				'javascript'
			)),
		(e.languages.js = e.languages.javascript),
		(function () {
			if (typeof e > 'u' || typeof document > 'u') return;
			Element.prototype.matches ||
				(Element.prototype.matches =
					Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
			const n = 'Loading…',
				i = function (_, T) {
					return '✖ Error ' + _ + ' while fetching file: ' + T;
				},
				r = '✖ Error: File does not exist or is empty',
				u = {
					js: 'javascript',
					py: 'python',
					rb: 'ruby',
					ps1: 'powershell',
					psm1: 'powershell',
					sh: 'bash',
					bat: 'batch',
					h: 'c',
					tex: 'latex'
				},
				a = 'data-src-status',
				l = 'loading',
				d = 'loaded',
				F = 'failed',
				b = 'pre[data-src]:not([' + a + '="' + d + '"]):not([' + a + '="' + l + '"])';
			function A(_, T, L) {
				const p = new XMLHttpRequest();
				(p.open('GET', _, !0),
					(p.onreadystatechange = function () {
						p.readyState == 4 &&
							(p.status < 400 && p.responseText
								? T(p.responseText)
								: p.status >= 400
									? L(i(p.status, p.statusText))
									: L(r));
					}),
					p.send(null));
			}
			function w(_) {
				const T = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_ || '');
				if (T) {
					const L = Number(T[1]),
						p = T[2],
						c = T[3];
					return p ? (c ? [L, Number(c)] : [L, void 0]) : [L, L];
				}
			}
			(e.hooks.add('before-highlightall', function (_) {
				_.selector += ', ' + b;
			}),
				e.hooks.add('before-sanity-check', function (_) {
					const T = _.element;
					if (T.matches(b)) {
						((_.code = ''), T.setAttribute(a, l));
						const L = T.appendChild(document.createElement('CODE'));
						L.textContent = n;
						let p = T.getAttribute('data-src'),
							c = _.language;
						if (c === 'none') {
							const f = (/\.(\w+)$/.exec(p) || [, 'none'])[1];
							c = u[f] || f;
						}
						(e.util.setLanguage(L, c), e.util.setLanguage(T, c));
						const D = e.plugins.autoloader;
						(D && D.loadLanguages(c),
							A(
								p,
								function (g) {
									T.setAttribute(a, d);
									const C = w(T.getAttribute('data-range'));
									if (C) {
										let y = g.split(/\r\n?|\n/g),
											k = C[0],
											O = C[1] == null ? y.length : C[1];
										(k < 0 && (k += y.length),
											(k = Math.max(0, Math.min(k - 1, y.length))),
											O < 0 && (O += y.length),
											(O = Math.max(0, Math.min(O, y.length))),
											(g = y.slice(k, O).join(`
`)),
											T.hasAttribute('data-start') || T.setAttribute('data-start', String(k + 1)));
									}
									((L.textContent = g), e.highlightElement(L));
								},
								function (g) {
									(T.setAttribute(a, F), (L.textContent = g));
								}
							));
					}
				}),
				(e.plugins.fileHighlight = {
					highlight: function (T) {
						for (var L = (T || document).querySelectorAll(b), p = 0, c; (c = L[p++]); )
							e.highlightElement(c);
					}
				}));
			let N = !1;
			e.fileHighlight = function () {
				(N ||
					(console.warn(
						'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
					),
					(N = !0)),
					e.plugins.fileHighlight.highlight.apply(this, arguments));
			};
		})());
})(vn);
const ki = vn.exports;
const Ci = hi(ki);
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */ const {
	entries: Rn,
	setPrototypeOf: pn,
	isFrozen: bi,
	getPrototypeOf: xi,
	getOwnPropertyDescriptor: wi
} = Object;
let { freeze: j, seal: J, create: vt } = Object,
	{ apply: Rt, construct: It } = typeof Reflect < 'u' && Reflect;
j ||
	(j = function (t) {
		return t;
	});
J ||
	(J = function (t) {
		return t;
	});
Rt ||
	(Rt = function (t, e) {
		for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
			i[r - 2] = arguments[r];
		return t.apply(e, i);
	});
It ||
	(It = function (t) {
		for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
			n[i - 1] = arguments[i];
		return new t(...n);
	});
const et = Z(Array.prototype.forEach),
	Ti = Z(Array.prototype.lastIndexOf),
	fn = Z(Array.prototype.pop),
	Ie = Z(Array.prototype.push),
	yi = Z(Array.prototype.splice),
	ut = Z(String.prototype.toLowerCase),
	Ct = Z(String.prototype.toString),
	bt = Z(String.prototype.match),
	Le = Z(String.prototype.replace),
	_i = Z(String.prototype.indexOf),
	Si = Z(String.prototype.trim),
	te = Z(Object.prototype.hasOwnProperty),
	q = Z(RegExp.prototype.test),
	Oe = Bi(TypeError);
function Z(o) {
	return function (t) {
		t instanceof RegExp && (t.lastIndex = 0);
		for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
			n[i - 1] = arguments[i];
		return Rt(o, t, n);
	};
}
function Bi(o) {
	return function () {
		for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
		return It(o, e);
	};
}
function x(o, t) {
	const e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ut;
	pn && pn(o, null);
	let n = t.length;
	for (; n--; ) {
		let i = t[n];
		if (typeof i == 'string') {
			const r = e(i);
			r !== i && (bi(t) || (t[n] = r), (i = r));
		}
		o[i] = !0;
	}
	return o;
}
function vi(o) {
	for (let t = 0; t < o.length; t++) te(o, t) || (o[t] = null);
	return o;
}
function ae(o) {
	const t = vt(null);
	for (const [e, n] of Rn(o))
		te(o, e) &&
			(Array.isArray(n)
				? (t[e] = vi(n))
				: n && typeof n == 'object' && n.constructor === Object
					? (t[e] = ae(n))
					: (t[e] = n));
	return t;
}
function $e(o, t) {
	for (; o !== null; ) {
		const n = wi(o, t);
		if (n) {
			if (n.get) return Z(n.get);
			if (typeof n.value == 'function') return Z(n.value);
		}
		o = xi(o);
	}
	function e() {
		return null;
	}
	return e;
}
const hn = j([
		'a',
		'abbr',
		'acronym',
		'address',
		'area',
		'article',
		'aside',
		'audio',
		'b',
		'bdi',
		'bdo',
		'big',
		'blink',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'center',
		'cite',
		'code',
		'col',
		'colgroup',
		'content',
		'data',
		'datalist',
		'dd',
		'decorator',
		'del',
		'details',
		'dfn',
		'dialog',
		'dir',
		'div',
		'dl',
		'dt',
		'element',
		'em',
		'fieldset',
		'figcaption',
		'figure',
		'font',
		'footer',
		'form',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hgroup',
		'hr',
		'html',
		'i',
		'img',
		'input',
		'ins',
		'kbd',
		'label',
		'legend',
		'li',
		'main',
		'map',
		'mark',
		'marquee',
		'menu',
		'menuitem',
		'meter',
		'nav',
		'nobr',
		'ol',
		'optgroup',
		'option',
		'output',
		'p',
		'picture',
		'pre',
		'progress',
		'q',
		'rp',
		'rt',
		'ruby',
		's',
		'samp',
		'search',
		'section',
		'select',
		'shadow',
		'slot',
		'small',
		'source',
		'spacer',
		'span',
		'strike',
		'strong',
		'style',
		'sub',
		'summary',
		'sup',
		'table',
		'tbody',
		'td',
		'template',
		'textarea',
		'tfoot',
		'th',
		'thead',
		'time',
		'tr',
		'track',
		'tt',
		'u',
		'ul',
		'var',
		'video',
		'wbr'
	]),
	xt = j([
		'svg',
		'a',
		'altglyph',
		'altglyphdef',
		'altglyphitem',
		'animatecolor',
		'animatemotion',
		'animatetransform',
		'circle',
		'clippath',
		'defs',
		'desc',
		'ellipse',
		'enterkeyhint',
		'exportparts',
		'filter',
		'font',
		'g',
		'glyph',
		'glyphref',
		'hkern',
		'image',
		'inputmode',
		'line',
		'lineargradient',
		'marker',
		'mask',
		'metadata',
		'mpath',
		'part',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'radialgradient',
		'rect',
		'stop',
		'style',
		'switch',
		'symbol',
		'text',
		'textpath',
		'title',
		'tref',
		'tspan',
		'view',
		'vkern'
	]),
	wt = j([
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDistantLight',
		'feDropShadow',
		'feFlood',
		'feFuncA',
		'feFuncB',
		'feFuncG',
		'feFuncR',
		'feGaussianBlur',
		'feImage',
		'feMerge',
		'feMergeNode',
		'feMorphology',
		'feOffset',
		'fePointLight',
		'feSpecularLighting',
		'feSpotLight',
		'feTile',
		'feTurbulence'
	]),
	Ri = j([
		'animate',
		'color-profile',
		'cursor',
		'discard',
		'font-face',
		'font-face-format',
		'font-face-name',
		'font-face-src',
		'font-face-uri',
		'foreignobject',
		'hatch',
		'hatchpath',
		'mesh',
		'meshgradient',
		'meshpatch',
		'meshrow',
		'missing-glyph',
		'script',
		'set',
		'solidcolor',
		'unknown',
		'use'
	]),
	Tt = j([
		'math',
		'menclose',
		'merror',
		'mfenced',
		'mfrac',
		'mglyph',
		'mi',
		'mlabeledtr',
		'mmultiscripts',
		'mn',
		'mo',
		'mover',
		'mpadded',
		'mphantom',
		'mroot',
		'mrow',
		'ms',
		'mspace',
		'msqrt',
		'mstyle',
		'msub',
		'msup',
		'msubsup',
		'mtable',
		'mtd',
		'mtext',
		'mtr',
		'munder',
		'munderover',
		'mprescripts'
	]),
	Ii = j([
		'maction',
		'maligngroup',
		'malignmark',
		'mlongdiv',
		'mscarries',
		'mscarry',
		'msgroup',
		'mstack',
		'msline',
		'msrow',
		'semantics',
		'annotation',
		'annotation-xml',
		'mprescripts',
		'none'
	]),
	Dn = j(['#text']),
	gn = j([
		'accept',
		'action',
		'align',
		'alt',
		'autocapitalize',
		'autocomplete',
		'autopictureinpicture',
		'autoplay',
		'background',
		'bgcolor',
		'border',
		'capture',
		'cellpadding',
		'cellspacing',
		'checked',
		'cite',
		'class',
		'clear',
		'color',
		'cols',
		'colspan',
		'controls',
		'controlslist',
		'coords',
		'crossorigin',
		'datetime',
		'decoding',
		'default',
		'dir',
		'disabled',
		'disablepictureinpicture',
		'disableremoteplayback',
		'download',
		'draggable',
		'enctype',
		'enterkeyhint',
		'exportparts',
		'face',
		'for',
		'headers',
		'height',
		'hidden',
		'high',
		'href',
		'hreflang',
		'id',
		'inert',
		'inputmode',
		'integrity',
		'ismap',
		'kind',
		'label',
		'lang',
		'list',
		'loading',
		'loop',
		'low',
		'max',
		'maxlength',
		'media',
		'method',
		'min',
		'minlength',
		'multiple',
		'muted',
		'name',
		'nonce',
		'noshade',
		'novalidate',
		'nowrap',
		'open',
		'optimum',
		'part',
		'pattern',
		'placeholder',
		'playsinline',
		'popover',
		'popovertarget',
		'popovertargetaction',
		'poster',
		'preload',
		'pubdate',
		'radiogroup',
		'readonly',
		'rel',
		'required',
		'rev',
		'reversed',
		'role',
		'rows',
		'rowspan',
		'spellcheck',
		'scope',
		'selected',
		'shape',
		'size',
		'sizes',
		'slot',
		'span',
		'srclang',
		'start',
		'src',
		'srcset',
		'step',
		'style',
		'summary',
		'tabindex',
		'title',
		'translate',
		'type',
		'usemap',
		'valign',
		'value',
		'width',
		'wrap',
		'xmlns',
		'slot'
	]),
	yt = j([
		'accent-height',
		'accumulate',
		'additive',
		'alignment-baseline',
		'amplitude',
		'ascent',
		'attributename',
		'attributetype',
		'azimuth',
		'basefrequency',
		'baseline-shift',
		'begin',
		'bias',
		'by',
		'class',
		'clip',
		'clippathunits',
		'clip-path',
		'clip-rule',
		'color',
		'color-interpolation',
		'color-interpolation-filters',
		'color-profile',
		'color-rendering',
		'cx',
		'cy',
		'd',
		'dx',
		'dy',
		'diffuseconstant',
		'direction',
		'display',
		'divisor',
		'dur',
		'edgemode',
		'elevation',
		'end',
		'exponent',
		'fill',
		'fill-opacity',
		'fill-rule',
		'filter',
		'filterunits',
		'flood-color',
		'flood-opacity',
		'font-family',
		'font-size',
		'font-size-adjust',
		'font-stretch',
		'font-style',
		'font-variant',
		'font-weight',
		'fx',
		'fy',
		'g1',
		'g2',
		'glyph-name',
		'glyphref',
		'gradientunits',
		'gradienttransform',
		'height',
		'href',
		'id',
		'image-rendering',
		'in',
		'in2',
		'intercept',
		'k',
		'k1',
		'k2',
		'k3',
		'k4',
		'kerning',
		'keypoints',
		'keysplines',
		'keytimes',
		'lang',
		'lengthadjust',
		'letter-spacing',
		'kernelmatrix',
		'kernelunitlength',
		'lighting-color',
		'local',
		'marker-end',
		'marker-mid',
		'marker-start',
		'markerheight',
		'markerunits',
		'markerwidth',
		'maskcontentunits',
		'maskunits',
		'max',
		'mask',
		'mask-type',
		'media',
		'method',
		'mode',
		'min',
		'name',
		'numoctaves',
		'offset',
		'operator',
		'opacity',
		'order',
		'orient',
		'orientation',
		'origin',
		'overflow',
		'paint-order',
		'path',
		'pathlength',
		'patterncontentunits',
		'patterntransform',
		'patternunits',
		'points',
		'preservealpha',
		'preserveaspectratio',
		'primitiveunits',
		'r',
		'rx',
		'ry',
		'radius',
		'refx',
		'refy',
		'repeatcount',
		'repeatdur',
		'restart',
		'result',
		'rotate',
		'scale',
		'seed',
		'shape-rendering',
		'slope',
		'specularconstant',
		'specularexponent',
		'spreadmethod',
		'startoffset',
		'stddeviation',
		'stitchtiles',
		'stop-color',
		'stop-opacity',
		'stroke-dasharray',
		'stroke-dashoffset',
		'stroke-linecap',
		'stroke-linejoin',
		'stroke-miterlimit',
		'stroke-opacity',
		'stroke',
		'stroke-width',
		'style',
		'surfacescale',
		'systemlanguage',
		'tabindex',
		'tablevalues',
		'targetx',
		'targety',
		'transform',
		'transform-origin',
		'text-anchor',
		'text-decoration',
		'text-rendering',
		'textlength',
		'type',
		'u1',
		'u2',
		'unicode',
		'values',
		'viewbox',
		'visibility',
		'version',
		'vert-adv-y',
		'vert-origin-x',
		'vert-origin-y',
		'width',
		'word-spacing',
		'wrap',
		'writing-mode',
		'xchannelselector',
		'ychannelselector',
		'x',
		'x1',
		'x2',
		'xmlns',
		'y',
		'y1',
		'y2',
		'z',
		'zoomandpan'
	]),
	dn = j([
		'accent',
		'accentunder',
		'align',
		'bevelled',
		'close',
		'columnsalign',
		'columnlines',
		'columnspan',
		'denomalign',
		'depth',
		'dir',
		'display',
		'displaystyle',
		'encoding',
		'fence',
		'frame',
		'height',
		'href',
		'id',
		'largeop',
		'length',
		'linethickness',
		'lspace',
		'lquote',
		'mathbackground',
		'mathcolor',
		'mathsize',
		'mathvariant',
		'maxsize',
		'minsize',
		'movablelimits',
		'notation',
		'numalign',
		'open',
		'rowalign',
		'rowlines',
		'rowspacing',
		'rowspan',
		'rspace',
		'rquote',
		'scriptlevel',
		'scriptminsize',
		'scriptsizemultiplier',
		'selection',
		'separator',
		'separators',
		'stretchy',
		'subscriptshift',
		'supscriptshift',
		'symmetric',
		'voffset',
		'width',
		'xmlns'
	]),
	tt = j(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
	Li = J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
	Oi = J(/<%[\w\W]*|[\w\W]*%>/gm),
	$i = J(/\$\{[\w\W]*/gm),
	Mi = J(/^data-[\-\w.\u00B7-\uFFFF]+$/),
	zi = J(/^aria-[\-\w]+$/),
	In = J(
		/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
	),
	Ni = J(/^(?:\w+script|data):/i),
	Pi = J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
	Ln = J(/^html$/i),
	Ui = J(/^[a-z][.\w]*(-[.\w]+)+$/i);
const Fn = Object.freeze({
	__proto__: null,
	ARIA_ATTR: zi,
	ATTR_WHITESPACE: Pi,
	CUSTOM_ELEMENT: Ui,
	DATA_ATTR: Mi,
	DOCTYPE_NAME: Ln,
	ERB_EXPR: Oi,
	IS_ALLOWED_URI: In,
	IS_SCRIPT_OR_DATA: Ni,
	MUSTACHE_EXPR: Li,
	TMPLIT_EXPR: $i
});
const Me = { element: 1, text: 3, progressingInstruction: 7, comment: 8, document: 9 },
	Hi = function () {
		return typeof window > 'u' ? null : window;
	},
	Gi = function (t, e) {
		if (typeof t != 'object' || typeof t.createPolicy != 'function') return null;
		let n = null;
		const i = 'data-tt-policy-suffix';
		e && e.hasAttribute(i) && (n = e.getAttribute(i));
		const r = 'dompurify' + (n ? '#' + n : '');
		try {
			return t.createPolicy(r, {
				createHTML(u) {
					return u;
				},
				createScriptURL(u) {
					return u;
				}
			});
		} catch {
			return (console.warn('TrustedTypes policy ' + r + ' could not be created.'), null);
		}
	},
	mn = function () {
		return {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		};
	};
function On() {
	const o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hi();
	const t = (E) => On(E);
	if (
		((t.version = '3.3.1'),
		(t.removed = []),
		!o || !o.document || o.document.nodeType !== Me.document || !o.Element)
	)
		return ((t.isSupported = !1), t);
	let { document: e } = o;
	const n = e,
		i = n.currentScript,
		{
			DocumentFragment: r,
			HTMLTemplateElement: u,
			Node: a,
			Element: l,
			NodeFilter: d,
			NamedNodeMap: F = o.NamedNodeMap || o.MozNamedAttrMap,
			HTMLFormElement: b,
			DOMParser: A,
			trustedTypes: w
		} = o,
		N = l.prototype,
		_ = $e(N, 'cloneNode'),
		T = $e(N, 'remove'),
		L = $e(N, 'nextSibling'),
		p = $e(N, 'childNodes'),
		c = $e(N, 'parentNode');
	if (typeof u == 'function') {
		const E = e.createElement('template');
		E.content && E.content.ownerDocument && (e = E.content.ownerDocument);
	}
	let f,
		D = '';
	const {
			implementation: g,
			createNodeIterator: C,
			createDocumentFragment: y,
			getElementsByTagName: k
		} = e,
		{ importNode: O } = n;
	let S = mn();
	t.isSupported =
		typeof Rn == 'function' && typeof c == 'function' && g && g.createHTMLDocument !== void 0;
	const {
		MUSTACHE_EXPR: V,
		ERB_EXPR: Ce,
		TMPLIT_EXPR: be,
		DATA_ATTR: lt,
		ARIA_ATTR: ct,
		IS_SCRIPT_OR_DATA: We,
		ATTR_WHITESPACE: P,
		CUSTOM_ELEMENT: K
	} = Fn;
	let { IS_ALLOWED_URI: ce } = Fn,
		M = null;
	const Y = x({}, [...hn, ...xt, ...wt, ...Tt, ...Dn]);
	let U = null;
	const ee = x({}, [...gn, ...yt, ...dn, ...tt]);
	let R = Object.seal(
			vt(null, {
				tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
				attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
				allowCustomizedBuiltInElements: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: !1
				}
			})
		),
		ne = null,
		De = null;
	const ie = Object.seal(
		vt(null, {
			tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
			attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }
		})
	);
	let Be = !0,
		ge = !0,
		de = !1,
		qe = !0,
		ue = !1,
		je = !0,
		Fe = !1,
		pt = !1,
		ft = !1,
		xe = !1,
		Ze = !1,
		Ye = !1,
		Gt = !0,
		Wt = !1;
	const Zn = 'user-content-';
	let ht = !0,
		ve = !1,
		we = {},
		re = null;
	const Dt = x({}, [
		'annotation-xml',
		'audio',
		'colgroup',
		'desc',
		'foreignobject',
		'head',
		'iframe',
		'math',
		'mi',
		'mn',
		'mo',
		'ms',
		'mtext',
		'noembed',
		'noframes',
		'noscript',
		'plaintext',
		'script',
		'style',
		'svg',
		'template',
		'thead',
		'title',
		'video',
		'xmp'
	]);
	let qt = null;
	const jt = x({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
	let gt = null;
	const Zt = x({}, [
			'alt',
			'class',
			'for',
			'id',
			'label',
			'name',
			'pattern',
			'placeholder',
			'role',
			'summary',
			'title',
			'value',
			'style',
			'xmlns'
		]),
		Xe = 'http://www.w3.org/1998/Math/MathML',
		Qe = 'http://www.w3.org/2000/svg',
		pe = 'http://www.w3.org/1999/xhtml';
	let Te = pe,
		dt = !1,
		Ft = null;
	const Yn = x({}, [Xe, Qe, pe], Ct);
	let Ve = x({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
		Ke = x({}, ['annotation-xml']);
	const Xn = x({}, ['title', 'style', 'font', 'a', 'script']);
	let Re = null;
	const Qn = ['application/xhtml+xml', 'text/html'],
		Vn = 'text/html';
	let H = null,
		ye = null;
	const Kn = e.createElement('form'),
		Yt = function (s) {
			return s instanceof RegExp || s instanceof Function;
		},
		mt = function () {
			let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (!(ye && ye === s)) {
				if (
					((!s || typeof s != 'object') && (s = {}),
					(s = ae(s)),
					(Re = Qn.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? Vn : s.PARSER_MEDIA_TYPE),
					(H = Re === 'application/xhtml+xml' ? Ct : ut),
					(M = te(s, 'ALLOWED_TAGS') ? x({}, s.ALLOWED_TAGS, H) : Y),
					(U = te(s, 'ALLOWED_ATTR') ? x({}, s.ALLOWED_ATTR, H) : ee),
					(Ft = te(s, 'ALLOWED_NAMESPACES') ? x({}, s.ALLOWED_NAMESPACES, Ct) : Yn),
					(gt = te(s, 'ADD_URI_SAFE_ATTR') ? x(ae(Zt), s.ADD_URI_SAFE_ATTR, H) : Zt),
					(qt = te(s, 'ADD_DATA_URI_TAGS') ? x(ae(jt), s.ADD_DATA_URI_TAGS, H) : jt),
					(re = te(s, 'FORBID_CONTENTS') ? x({}, s.FORBID_CONTENTS, H) : Dt),
					(ne = te(s, 'FORBID_TAGS') ? x({}, s.FORBID_TAGS, H) : ae({})),
					(De = te(s, 'FORBID_ATTR') ? x({}, s.FORBID_ATTR, H) : ae({})),
					(we = te(s, 'USE_PROFILES') ? s.USE_PROFILES : !1),
					(Be = s.ALLOW_ARIA_ATTR !== !1),
					(ge = s.ALLOW_DATA_ATTR !== !1),
					(de = s.ALLOW_UNKNOWN_PROTOCOLS || !1),
					(qe = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
					(ue = s.SAFE_FOR_TEMPLATES || !1),
					(je = s.SAFE_FOR_XML !== !1),
					(Fe = s.WHOLE_DOCUMENT || !1),
					(xe = s.RETURN_DOM || !1),
					(Ze = s.RETURN_DOM_FRAGMENT || !1),
					(Ye = s.RETURN_TRUSTED_TYPE || !1),
					(ft = s.FORCE_BODY || !1),
					(Gt = s.SANITIZE_DOM !== !1),
					(Wt = s.SANITIZE_NAMED_PROPS || !1),
					(ht = s.KEEP_CONTENT !== !1),
					(ve = s.IN_PLACE || !1),
					(ce = s.ALLOWED_URI_REGEXP || In),
					(Te = s.NAMESPACE || pe),
					(Ve = s.MATHML_TEXT_INTEGRATION_POINTS || Ve),
					(Ke = s.HTML_INTEGRATION_POINTS || Ke),
					(R = s.CUSTOM_ELEMENT_HANDLING || {}),
					s.CUSTOM_ELEMENT_HANDLING &&
						Yt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
						(R.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
					s.CUSTOM_ELEMENT_HANDLING &&
						Yt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
						(R.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
					s.CUSTOM_ELEMENT_HANDLING &&
						typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == 'boolean' &&
						(R.allowCustomizedBuiltInElements =
							s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
					ue && (ge = !1),
					Ze && (xe = !0),
					we &&
						((M = x({}, Dn)),
						(U = []),
						we.html === !0 && (x(M, hn), x(U, gn)),
						we.svg === !0 && (x(M, xt), x(U, yt), x(U, tt)),
						we.svgFilters === !0 && (x(M, wt), x(U, yt), x(U, tt)),
						we.mathMl === !0 && (x(M, Tt), x(U, dn), x(U, tt))),
					s.ADD_TAGS &&
						(typeof s.ADD_TAGS == 'function'
							? (ie.tagCheck = s.ADD_TAGS)
							: (M === Y && (M = ae(M)), x(M, s.ADD_TAGS, H))),
					s.ADD_ATTR &&
						(typeof s.ADD_ATTR == 'function'
							? (ie.attributeCheck = s.ADD_ATTR)
							: (U === ee && (U = ae(U)), x(U, s.ADD_ATTR, H))),
					s.ADD_URI_SAFE_ATTR && x(gt, s.ADD_URI_SAFE_ATTR, H),
					s.FORBID_CONTENTS && (re === Dt && (re = ae(re)), x(re, s.FORBID_CONTENTS, H)),
					s.ADD_FORBID_CONTENTS && (re === Dt && (re = ae(re)), x(re, s.ADD_FORBID_CONTENTS, H)),
					ht && (M['#text'] = !0),
					Fe && x(M, ['html', 'head', 'body']),
					M.table && (x(M, ['tbody']), delete ne.tbody),
					s.TRUSTED_TYPES_POLICY)
				) {
					if (typeof s.TRUSTED_TYPES_POLICY.createHTML != 'function')
						throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
					if (typeof s.TRUSTED_TYPES_POLICY.createScriptURL != 'function')
						throw Oe(
							'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
						);
					((f = s.TRUSTED_TYPES_POLICY), (D = f.createHTML('')));
				} else
					(f === void 0 && (f = Gi(w, i)),
						f !== null && typeof D == 'string' && (D = f.createHTML('')));
				(j && j(s), (ye = s));
			}
		},
		Xt = x({}, [...xt, ...wt, ...Ri]),
		Qt = x({}, [...Tt, ...Ii]),
		Jn = function (s) {
			let h = c(s);
			(!h || !h.tagName) && (h = { namespaceURI: Te, tagName: 'template' });
			const m = ut(s.tagName),
				$ = ut(h.tagName);
			return Ft[s.namespaceURI]
				? s.namespaceURI === Qe
					? h.namespaceURI === pe
						? m === 'svg'
						: h.namespaceURI === Xe
							? m === 'svg' && ($ === 'annotation-xml' || Ve[$])
							: !!Xt[m]
					: s.namespaceURI === Xe
						? h.namespaceURI === pe
							? m === 'math'
							: h.namespaceURI === Qe
								? m === 'math' && Ke[$]
								: !!Qt[m]
						: s.namespaceURI === pe
							? (h.namespaceURI === Qe && !Ke[$]) || (h.namespaceURI === Xe && !Ve[$])
								? !1
								: !Qt[m] && (Xn[m] || !Xt[m])
							: !!(Re === 'application/xhtml+xml' && Ft[s.namespaceURI])
				: !1;
		},
		se = function (s) {
			Ie(t.removed, { element: s });
			try {
				c(s).removeChild(s);
			} catch {
				T(s);
			}
		},
		me = function (s, h) {
			try {
				Ie(t.removed, { attribute: h.getAttributeNode(s), from: h });
			} catch {
				Ie(t.removed, { attribute: null, from: h });
			}
			if ((h.removeAttribute(s), s === 'is'))
				if (xe || Ze)
					try {
						se(h);
					} catch {}
				else
					try {
						h.setAttribute(s, '');
					} catch {}
		},
		Vt = function (s) {
			let h = null,
				m = null;
			if (ft) s = '<remove></remove>' + s;
			else {
				const z = bt(s, /^[\r\n\t ]+/);
				m = z && z[0];
			}
			Re === 'application/xhtml+xml' &&
				Te === pe &&
				(s =
					'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + '</body></html>');
			const $ = f ? f.createHTML(s) : s;
			if (Te === pe)
				try {
					h = new A().parseFromString($, Re);
				} catch {}
			if (!h || !h.documentElement) {
				h = g.createDocument(Te, 'template', null);
				try {
					h.documentElement.innerHTML = dt ? D : $;
				} catch {}
			}
			const W = h.body || h.documentElement;
			return (
				s && m && W.insertBefore(e.createTextNode(m), W.childNodes[0] || null),
				Te === pe ? k.call(h, Fe ? 'html' : 'body')[0] : Fe ? h.documentElement : W
			);
		},
		Kt = function (s) {
			return C.call(
				s.ownerDocument || s,
				s,
				d.SHOW_ELEMENT |
					d.SHOW_COMMENT |
					d.SHOW_TEXT |
					d.SHOW_PROCESSING_INSTRUCTION |
					d.SHOW_CDATA_SECTION,
				null
			);
		},
		At = function (s) {
			return (
				s instanceof b &&
				(typeof s.nodeName != 'string' ||
					typeof s.textContent != 'string' ||
					typeof s.removeChild != 'function' ||
					!(s.attributes instanceof F) ||
					typeof s.removeAttribute != 'function' ||
					typeof s.setAttribute != 'function' ||
					typeof s.namespaceURI != 'string' ||
					typeof s.insertBefore != 'function' ||
					typeof s.hasChildNodes != 'function')
			);
		},
		Jt = function (s) {
			return typeof a == 'function' && s instanceof a;
		};
	function fe(E, s, h) {
		et(E, (m) => {
			m.call(t, s, h, ye);
		});
	}
	const en = function (s) {
			let h = null;
			if ((fe(S.beforeSanitizeElements, s, null), At(s))) return (se(s), !0);
			const m = H(s.nodeName);
			if (
				(fe(S.uponSanitizeElement, s, { tagName: m, allowedTags: M }),
				(je &&
					s.hasChildNodes() &&
					!Jt(s.firstElementChild) &&
					q(/<[/\w!]/g, s.innerHTML) &&
					q(/<[/\w!]/g, s.textContent)) ||
					s.nodeType === Me.progressingInstruction ||
					(je && s.nodeType === Me.comment && q(/<[/\w]/g, s.data)))
			)
				return (se(s), !0);
			if (!(ie.tagCheck instanceof Function && ie.tagCheck(m)) && (!M[m] || ne[m])) {
				if (
					!ne[m] &&
					nn(m) &&
					((R.tagNameCheck instanceof RegExp && q(R.tagNameCheck, m)) ||
						(R.tagNameCheck instanceof Function && R.tagNameCheck(m)))
				)
					return !1;
				if (ht && !re[m]) {
					const $ = c(s) || s.parentNode,
						W = p(s) || s.childNodes;
					if (W && $) {
						const z = W.length;
						for (let X = z - 1; X >= 0; --X) {
							const he = _(W[X], !0);
							((he.__removalCount = (s.__removalCount || 0) + 1), $.insertBefore(he, L(s)));
						}
					}
				}
				return (se(s), !0);
			}
			return (s instanceof l && !Jn(s)) ||
				((m === 'noscript' || m === 'noembed' || m === 'noframes') &&
					q(/<\/no(script|embed|frames)/i, s.innerHTML))
				? (se(s), !0)
				: (ue &&
						s.nodeType === Me.text &&
						((h = s.textContent),
						et([V, Ce, be], ($) => {
							h = Le(h, $, ' ');
						}),
						s.textContent !== h &&
							(Ie(t.removed, { element: s.cloneNode() }), (s.textContent = h))),
					fe(S.afterSanitizeElements, s, null),
					!1);
		},
		tn = function (s, h, m) {
			if (Gt && (h === 'id' || h === 'name') && (m in e || m in Kn)) return !1;
			if (!(ge && !De[h] && q(lt, h))) {
				if (!(Be && q(ct, h))) {
					if (!(ie.attributeCheck instanceof Function && ie.attributeCheck(h, s))) {
						if (!U[h] || De[h]) {
							if (
								!(
									(nn(s) &&
										((R.tagNameCheck instanceof RegExp && q(R.tagNameCheck, s)) ||
											(R.tagNameCheck instanceof Function && R.tagNameCheck(s))) &&
										((R.attributeNameCheck instanceof RegExp && q(R.attributeNameCheck, h)) ||
											(R.attributeNameCheck instanceof Function && R.attributeNameCheck(h, s)))) ||
									(h === 'is' &&
										R.allowCustomizedBuiltInElements &&
										((R.tagNameCheck instanceof RegExp && q(R.tagNameCheck, m)) ||
											(R.tagNameCheck instanceof Function && R.tagNameCheck(m))))
								)
							)
								return !1;
						} else if (!gt[h]) {
							if (!q(ce, Le(m, P, ''))) {
								if (
									!(
										(h === 'src' || h === 'xlink:href' || h === 'href') &&
										s !== 'script' &&
										_i(m, 'data:') === 0 &&
										qt[s]
									)
								) {
									if (!(de && !q(We, Le(m, P, '')))) {
										if (m) return !1;
									}
								}
							}
						}
					}
				}
			}
			return !0;
		},
		nn = function (s) {
			return s !== 'annotation-xml' && bt(s, K);
		},
		un = function (s) {
			fe(S.beforeSanitizeAttributes, s, null);
			const { attributes: h } = s;
			if (!h || At(s)) return;
			const m = {
				attrName: '',
				attrValue: '',
				keepAttr: !0,
				allowedAttributes: U,
				forceKeepAttr: void 0
			};
			let $ = h.length;
			for (; $--; ) {
				const W = h[$],
					{ name: z, namespaceURI: X, value: he } = W,
					_e = H(z),
					Et = he;
				let G = z === 'value' ? Et : Si(Et);
				if (
					((m.attrName = _e),
					(m.attrValue = G),
					(m.keepAttr = !0),
					(m.forceKeepAttr = void 0),
					fe(S.uponSanitizeAttribute, s, m),
					(G = m.attrValue),
					Wt && (_e === 'id' || _e === 'name') && (me(z, s), (G = Zn + G)),
					je && q(/((--!?|])>)|<\/(style|title|textarea)/i, G))
				) {
					me(z, s);
					continue;
				}
				if (_e === 'attributename' && bt(G, 'href')) {
					me(z, s);
					continue;
				}
				if (m.forceKeepAttr) continue;
				if (!m.keepAttr) {
					me(z, s);
					continue;
				}
				if (!qe && q(/\/>/i, G)) {
					me(z, s);
					continue;
				}
				ue &&
					et([V, Ce, be], (sn) => {
						G = Le(G, sn, ' ');
					});
				const rn = H(s.nodeName);
				if (!tn(rn, _e, G)) {
					me(z, s);
					continue;
				}
				if (f && typeof w == 'object' && typeof w.getAttributeType == 'function' && !X)
					switch (w.getAttributeType(rn, _e)) {
						case 'TrustedHTML': {
							G = f.createHTML(G);
							break;
						}
						case 'TrustedScriptURL': {
							G = f.createScriptURL(G);
							break;
						}
					}
				if (G !== Et)
					try {
						(X ? s.setAttributeNS(X, z, G) : s.setAttribute(z, G), At(s) ? se(s) : fn(t.removed));
					} catch {
						me(z, s);
					}
			}
			fe(S.afterSanitizeAttributes, s, null);
		},
		ei = function E(s) {
			let h = null;
			const m = Kt(s);
			for (fe(S.beforeSanitizeShadowDOM, s, null); (h = m.nextNode()); )
				(fe(S.uponSanitizeShadowNode, h, null),
					en(h),
					un(h),
					h.content instanceof r && E(h.content));
			fe(S.afterSanitizeShadowDOM, s, null);
		};
	return (
		(t.sanitize = function (E) {
			let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
				h = null,
				m = null,
				$ = null,
				W = null;
			if (((dt = !E), dt && (E = '<!-->'), typeof E != 'string' && !Jt(E)))
				if (typeof E.toString == 'function') {
					if (((E = E.toString()), typeof E != 'string'))
						throw Oe('dirty is not a string, aborting');
				} else throw Oe('toString is not a function');
			if (!t.isSupported) return E;
			if ((pt || mt(s), (t.removed = []), typeof E == 'string' && (ve = !1), ve)) {
				if (E.nodeName) {
					const he = H(E.nodeName);
					if (!M[he] || ne[he]) throw Oe('root node is forbidden and cannot be sanitized in-place');
				}
			} else if (E instanceof a)
				((h = Vt('<!---->')),
					(m = h.ownerDocument.importNode(E, !0)),
					(m.nodeType === Me.element && m.nodeName === 'BODY') || m.nodeName === 'HTML'
						? (h = m)
						: h.appendChild(m));
			else {
				if (!xe && !ue && !Fe && E.indexOf('<') === -1) return f && Ye ? f.createHTML(E) : E;
				if (((h = Vt(E)), !h)) return xe ? null : Ye ? D : '';
			}
			h && ft && se(h.firstChild);
			const z = Kt(ve ? E : h);
			for (; ($ = z.nextNode()); ) (en($), un($), $.content instanceof r && ei($.content));
			if (ve) return E;
			if (xe) {
				if (Ze) for (W = y.call(h.ownerDocument); h.firstChild; ) W.appendChild(h.firstChild);
				else W = h;
				return ((U.shadowroot || U.shadowrootmode) && (W = O.call(n, W, !0)), W);
			}
			let X = Fe ? h.outerHTML : h.innerHTML;
			return (
				Fe &&
					M['!doctype'] &&
					h.ownerDocument &&
					h.ownerDocument.doctype &&
					h.ownerDocument.doctype.name &&
					q(Ln, h.ownerDocument.doctype.name) &&
					(X =
						'<!DOCTYPE ' +
						h.ownerDocument.doctype.name +
						`>
` +
						X),
				ue &&
					et([V, Ce, be], (he) => {
						X = Le(X, he, ' ');
					}),
				f && Ye ? f.createHTML(X) : X
			);
		}),
		(t.setConfig = function () {
			const E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			(mt(E), (pt = !0));
		}),
		(t.clearConfig = function () {
			((ye = null), (pt = !1));
		}),
		(t.isValidAttribute = function (E, s, h) {
			ye || mt({});
			const m = H(E),
				$ = H(s);
			return tn(m, $, h);
		}),
		(t.addHook = function (E, s) {
			typeof s == 'function' && Ie(S[E], s);
		}),
		(t.removeHook = function (E, s) {
			if (s !== void 0) {
				const h = Ti(S[E], s);
				return h === -1 ? void 0 : yi(S[E], h, 1)[0];
			}
			return fn(S[E]);
		}),
		(t.removeHooks = function (E) {
			S[E] = [];
		}),
		(t.removeAllHooks = function () {
			S = mn();
		}),
		t
	);
}
const Wi = On();
function $t() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
let ke = $t();
function $n(o) {
	ke = o;
}
const Mn = /[&<>"']/,
	qi = new RegExp(Mn.source, 'g'),
	zn = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	ji = new RegExp(zn.source, 'g'),
	Zi = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
	An = (o) => Zi[o];
function Q(o, t) {
	if (t) {
		if (Mn.test(o)) return o.replace(qi, An);
	} else if (zn.test(o)) return o.replace(ji, An);
	return o;
}
const Yi = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Xi(o) {
	return o.replace(
		Yi,
		(t, e) => (
			(e = e.toLowerCase()),
			e === 'colon'
				? ':'
				: e.charAt(0) === '#'
					? e.charAt(1) === 'x'
						? String.fromCharCode(parseInt(e.substring(2), 16))
						: String.fromCharCode(+e.substring(1))
					: ''
		)
	);
}
const Qi = /(^|[^\[])\^/g;
function v(o, t) {
	let e = typeof o == 'string' ? o : o.source;
	t = t || '';
	const n = {
		replace: (i, r) => {
			let u = typeof r == 'string' ? r : r.source;
			return ((u = u.replace(Qi, '$1')), (e = e.replace(i, u)), n);
		},
		getRegex: () => new RegExp(e, t)
	};
	return n;
}
function En(o) {
	try {
		o = encodeURI(o).replace(/%25/g, '%');
	} catch {
		return null;
	}
	return o;
}
const Pe = { exec: () => null };
function kn(o, t) {
	const e = o.replace(/\|/g, (r, u, a) => {
			let l = !1,
				d = u;
			for (; --d >= 0 && a[d] === '\\'; ) l = !l;
			return l ? '|' : ' |';
		}),
		n = e.split(/ \|/);
	let i = 0;
	if ((n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t))
		if (n.length > t) n.splice(t);
		else for (; n.length < t; ) n.push('');
	for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, '|');
	return n;
}
function nt(o, t, e) {
	const n = o.length;
	if (n === 0) return '';
	let i = 0;
	for (; i < n && o.charAt(n - i - 1) === t; ) i++;
	return o.slice(0, n - i);
}
function Vi(o, t) {
	if (o.indexOf(t[1]) === -1) return -1;
	let e = 0;
	for (let n = 0; n < o.length; n++)
		if (o[n] === '\\') n++;
		else if (o[n] === t[0]) e++;
		else if (o[n] === t[1] && (e--, e < 0)) return n;
	return -1;
}
function Cn(o, t, e, n) {
	const i = t.href,
		r = t.title ? Q(t.title) : null,
		u = o[1].replace(/\\([\[\]])/g, '$1');
	if (o[0].charAt(0) !== '!') {
		n.state.inLink = !0;
		const a = { type: 'link', raw: e, href: i, title: r, text: u, tokens: n.inlineTokens(u) };
		return ((n.state.inLink = !1), a);
	}
	return { type: 'image', raw: e, href: i, title: r, text: Q(u) };
}
function Ki(o, t) {
	const e = o.match(/^(\s+)(?:```)/);
	if (e === null) return t;
	const n = e[1];
	return t
		.split(
			`
`
		)
		.map((i) => {
			const r = i.match(/^\s+/);
			if (r === null) return i;
			const [u] = r;
			return u.length >= n.length ? i.slice(n.length) : i;
		}).join(`
`);
}
class rt {
	constructor(t) {
		I(this, 'options');
		I(this, 'rules');
		I(this, 'lexer');
		this.options = t || ke;
	}
	space(t) {
		const e = this.rules.block.newline.exec(t);
		if (e && e[0].length > 0) return { type: 'space', raw: e[0] };
	}
	code(t) {
		const e = this.rules.block.code.exec(t);
		if (e) {
			const n = e[0].replace(/^ {1,4}/gm, '');
			return {
				type: 'code',
				raw: e[0],
				codeBlockStyle: 'indented',
				text: this.options.pedantic
					? n
					: nt(
							n,
							`
`
						)
			};
		}
	}
	fences(t) {
		const e = this.rules.block.fences.exec(t);
		if (e) {
			const n = e[0],
				i = Ki(n, e[3] || '');
			return {
				type: 'code',
				raw: n,
				lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : e[2],
				text: i
			};
		}
	}
	heading(t) {
		const e = this.rules.block.heading.exec(t);
		if (e) {
			let n = e[2].trim();
			if (/#$/.test(n)) {
				const i = nt(n, '#');
				(this.options.pedantic || !i || / $/.test(i)) && (n = i.trim());
			}
			return {
				type: 'heading',
				raw: e[0],
				depth: e[1].length,
				text: n,
				tokens: this.lexer.inline(n)
			};
		}
	}
	hr(t) {
		const e = this.rules.block.hr.exec(t);
		if (e) return { type: 'hr', raw: e[0] };
	}
	blockquote(t) {
		const e = this.rules.block.blockquote.exec(t);
		if (e) {
			let n = e[0].replace(
				/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
				`
    $1`
			);
			n = nt(
				n.replace(/^ *>[ \t]?/gm, ''),
				`
`
			);
			const i = this.lexer.state.top;
			this.lexer.state.top = !0;
			const r = this.lexer.blockTokens(n);
			return ((this.lexer.state.top = i), { type: 'blockquote', raw: e[0], tokens: r, text: n });
		}
	}
	list(t) {
		let e = this.rules.block.list.exec(t);
		if (e) {
			let n = e[1].trim();
			const i = n.length > 1,
				r = {
					type: 'list',
					raw: '',
					ordered: i,
					start: i ? +n.slice(0, -1) : '',
					loose: !1,
					items: []
				};
			((n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
				this.options.pedantic && (n = i ? n : '[*+-]'));
			const u = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
			let a = '',
				l = '',
				d = !1;
			for (; t; ) {
				let F = !1;
				if (!(e = u.exec(t)) || this.rules.block.hr.test(t)) break;
				((a = e[0]), (t = t.substring(a.length)));
				let b = e[2]
						.split(
							`
`,
							1
						)[0]
						.replace(/^\t+/, (L) => ' '.repeat(3 * L.length)),
					A = t.split(
						`
`,
						1
					)[0],
					w = 0;
				this.options.pedantic
					? ((w = 2), (l = b.trimStart()))
					: ((w = e[2].search(/[^ ]/)), (w = w > 4 ? 1 : w), (l = b.slice(w)), (w += e[1].length));
				let N = !1;
				if (
					(!b &&
						/^ *$/.test(A) &&
						((a +=
							A +
							`
`),
						(t = t.substring(A.length + 1)),
						(F = !0)),
					!F)
				) {
					const L = new RegExp(
							`^ {0,${Math.min(3, w - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
						),
						p = new RegExp(
							`^ {0,${Math.min(3, w - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
						),
						c = new RegExp(`^ {0,${Math.min(3, w - 1)}}(?:\`\`\`|~~~)`),
						f = new RegExp(`^ {0,${Math.min(3, w - 1)}}#`);
					for (; t; ) {
						const D = t.split(
							`
`,
							1
						)[0];
						if (
							((A = D),
							this.options.pedantic && (A = A.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
							c.test(A) || f.test(A) || L.test(A) || p.test(t))
						)
							break;
						if (A.search(/[^ ]/) >= w || !A.trim())
							l +=
								`
` + A.slice(w);
						else {
							if (N || b.search(/[^ ]/) >= 4 || c.test(b) || f.test(b) || p.test(b)) break;
							l +=
								`
` + A;
						}
						(!N && !A.trim() && (N = !0),
							(a +=
								D +
								`
`),
							(t = t.substring(D.length + 1)),
							(b = A.slice(w)));
					}
				}
				r.loose || (d ? (r.loose = !0) : /\n *\n *$/.test(a) && (d = !0));
				let _ = null,
					T;
				(this.options.gfm &&
					((_ = /^\[[ xX]\] /.exec(l)),
					_ && ((T = _[0] !== '[ ] '), (l = l.replace(/^\[[ xX]\] +/, '')))),
					r.items.push({
						type: 'list_item',
						raw: a,
						task: !!_,
						checked: T,
						loose: !1,
						text: l,
						tokens: []
					}),
					(r.raw += a));
			}
			((r.items[r.items.length - 1].raw = a.trimEnd()),
				(r.items[r.items.length - 1].text = l.trimEnd()),
				(r.raw = r.raw.trimEnd()));
			for (let F = 0; F < r.items.length; F++)
				if (
					((this.lexer.state.top = !1),
					(r.items[F].tokens = this.lexer.blockTokens(r.items[F].text, [])),
					!r.loose)
				) {
					const b = r.items[F].tokens.filter((w) => w.type === 'space'),
						A = b.length > 0 && b.some((w) => /\n.*\n/.test(w.raw));
					r.loose = A;
				}
			if (r.loose) for (let F = 0; F < r.items.length; F++) r.items[F].loose = !0;
			return r;
		}
	}
	html(t) {
		const e = this.rules.block.html.exec(t);
		if (e)
			return {
				type: 'html',
				block: !0,
				raw: e[0],
				pre: e[1] === 'pre' || e[1] === 'script' || e[1] === 'style',
				text: e[0]
			};
	}
	def(t) {
		const e = this.rules.block.def.exec(t);
		if (e) {
			const n = e[1].toLowerCase().replace(/\s+/g, ' '),
				i = e[2]
					? e[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline.anyPunctuation, '$1')
					: '',
				r = e[3]
					? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1')
					: e[3];
			return { type: 'def', tag: n, raw: e[0], href: i, title: r };
		}
	}
	table(t) {
		const e = this.rules.block.table.exec(t);
		if (!e || !/[:|]/.test(e[2])) return;
		const n = kn(e[1]),
			i = e[2].replace(/^\||\| *$/g, '').split('|'),
			r =
				e[3] && e[3].trim()
					? e[3].replace(/\n[ \t]*$/, '').split(`
`)
					: [],
			u = { type: 'table', raw: e[0], header: [], align: [], rows: [] };
		if (n.length === i.length) {
			for (const a of i)
				/^ *-+: *$/.test(a)
					? u.align.push('right')
					: /^ *:-+: *$/.test(a)
						? u.align.push('center')
						: /^ *:-+ *$/.test(a)
							? u.align.push('left')
							: u.align.push(null);
			for (const a of n) u.header.push({ text: a, tokens: this.lexer.inline(a) });
			for (const a of r)
				u.rows.push(kn(a, u.header.length).map((l) => ({ text: l, tokens: this.lexer.inline(l) })));
			return u;
		}
	}
	lheading(t) {
		const e = this.rules.block.lheading.exec(t);
		if (e)
			return {
				type: 'heading',
				raw: e[0],
				depth: e[2].charAt(0) === '=' ? 1 : 2,
				text: e[1],
				tokens: this.lexer.inline(e[1])
			};
	}
	paragraph(t) {
		const e = this.rules.block.paragraph.exec(t);
		if (e) {
			const n =
				e[1].charAt(e[1].length - 1) ===
				`
`
					? e[1].slice(0, -1)
					: e[1];
			return { type: 'paragraph', raw: e[0], text: n, tokens: this.lexer.inline(n) };
		}
	}
	text(t) {
		const e = this.rules.block.text.exec(t);
		if (e) return { type: 'text', raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
	}
	escape(t) {
		const e = this.rules.inline.escape.exec(t);
		if (e) return { type: 'escape', raw: e[0], text: Q(e[1]) };
	}
	tag(t) {
		const e = this.rules.inline.tag.exec(t);
		if (e)
			return (
				!this.lexer.state.inLink && /^<a /i.test(e[0])
					? (this.lexer.state.inLink = !0)
					: this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1),
				!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0])
					? (this.lexer.state.inRawBlock = !0)
					: this.lexer.state.inRawBlock &&
						/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) &&
						(this.lexer.state.inRawBlock = !1),
				{
					type: 'html',
					raw: e[0],
					inLink: this.lexer.state.inLink,
					inRawBlock: this.lexer.state.inRawBlock,
					block: !1,
					text: e[0]
				}
			);
	}
	link(t) {
		const e = this.rules.inline.link.exec(t);
		if (e) {
			const n = e[2].trim();
			if (!this.options.pedantic && /^</.test(n)) {
				if (!/>$/.test(n)) return;
				const u = nt(n.slice(0, -1), '\\');
				if ((n.length - u.length) % 2 === 0) return;
			} else {
				const u = Vi(e[2], '()');
				if (u > -1) {
					const l = (e[0].indexOf('!') === 0 ? 5 : 4) + e[1].length + u;
					((e[2] = e[2].substring(0, u)), (e[0] = e[0].substring(0, l).trim()), (e[3] = ''));
				}
			}
			let i = e[2],
				r = '';
			if (this.options.pedantic) {
				const u = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
				u && ((i = u[1]), (r = u[3]));
			} else r = e[3] ? e[3].slice(1, -1) : '';
			return (
				(i = i.trim()),
				/^</.test(i) &&
					(this.options.pedantic && !/>$/.test(n) ? (i = i.slice(1)) : (i = i.slice(1, -1))),
				Cn(
					e,
					{
						href: i && i.replace(this.rules.inline.anyPunctuation, '$1'),
						title: r && r.replace(this.rules.inline.anyPunctuation, '$1')
					},
					e[0],
					this.lexer
				)
			);
		}
	}
	reflink(t, e) {
		let n;
		if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
			const i = (n[2] || n[1]).replace(/\s+/g, ' '),
				r = e[i.toLowerCase()];
			if (!r) {
				const u = n[0].charAt(0);
				return { type: 'text', raw: u, text: u };
			}
			return Cn(n, r, n[0], this.lexer);
		}
	}
	emStrong(t, e, n = '') {
		let i = this.rules.inline.emStrongLDelim.exec(t);
		if (!i || (i[3] && n.match(/[\p{L}\p{N}]/u))) return;
		if (!(i[1] || i[2] || '') || !n || this.rules.inline.punctuation.exec(n)) {
			const u = [...i[0]].length - 1;
			let a,
				l,
				d = u,
				F = 0;
			const b =
				i[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (b.lastIndex = 0, e = e.slice(-1 * t.length + u); (i = b.exec(e)) != null; ) {
				if (((a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !a)) continue;
				if (((l = [...a].length), i[3] || i[4])) {
					d += l;
					continue;
				} else if ((i[5] || i[6]) && u % 3 && !((u + l) % 3)) {
					F += l;
					continue;
				}
				if (((d -= l), d > 0)) continue;
				l = Math.min(l, l + d + F);
				const A = [...i[0]][0].length,
					w = t.slice(0, u + i.index + A + l);
				if (Math.min(u, l) % 2) {
					const _ = w.slice(1, -1);
					return { type: 'em', raw: w, text: _, tokens: this.lexer.inlineTokens(_) };
				}
				const N = w.slice(2, -2);
				return { type: 'strong', raw: w, text: N, tokens: this.lexer.inlineTokens(N) };
			}
		}
	}
	codespan(t) {
		const e = this.rules.inline.code.exec(t);
		if (e) {
			let n = e[2].replace(/\n/g, ' ');
			const i = /[^ ]/.test(n),
				r = /^ /.test(n) && / $/.test(n);
			return (
				i && r && (n = n.substring(1, n.length - 1)),
				(n = Q(n, !0)),
				{ type: 'codespan', raw: e[0], text: n }
			);
		}
	}
	br(t) {
		const e = this.rules.inline.br.exec(t);
		if (e) return { type: 'br', raw: e[0] };
	}
	del(t) {
		const e = this.rules.inline.del.exec(t);
		if (e) return { type: 'del', raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
	}
	autolink(t) {
		const e = this.rules.inline.autolink.exec(t);
		if (e) {
			let n, i;
			return (
				e[2] === '@' ? ((n = Q(e[1])), (i = 'mailto:' + n)) : ((n = Q(e[1])), (i = n)),
				{ type: 'link', raw: e[0], text: n, href: i, tokens: [{ type: 'text', raw: n, text: n }] }
			);
		}
	}
	url(t) {
		let n;
		let e;
		if ((e = this.rules.inline.url.exec(t))) {
			let i, r;
			if (e[2] === '@') ((i = Q(e[0])), (r = 'mailto:' + i));
			else {
				let u;
				do
					((u = e[0]),
						(e[0] = ((n = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : n[0]) ?? ''));
				while (u !== e[0]);
				((i = Q(e[0])), e[1] === 'www.' ? (r = 'http://' + e[0]) : (r = e[0]));
			}
			return {
				type: 'link',
				raw: e[0],
				text: i,
				href: r,
				tokens: [{ type: 'text', raw: i, text: i }]
			};
		}
	}
	inlineText(t) {
		const e = this.rules.inline.text.exec(t);
		if (e) {
			let n;
			return (
				this.lexer.state.inRawBlock ? (n = e[0]) : (n = Q(e[0])),
				{ type: 'text', raw: e[0], text: n }
			);
		}
	}
}
const Ji = /^(?: *(?:\n|$))+/,
	eu = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
	tu =
		/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
	He = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
	nu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
	Nn = /(?:[*+-]|\d{1,9}[.)])/,
	Pn = v(
		/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
	)
		.replace(/bull/g, Nn)
		.replace(/blockCode/g, / {4}/)
		.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
		.replace(/blockquote/g, / {0,3}>/)
		.replace(/heading/g, / {0,3}#{1,6}/)
		.replace(/html/g, / {0,3}<[^\n>]+>\n/)
		.getRegex(),
	Mt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
	iu = /^[^\n]+/,
	zt = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
	uu = v(
		/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
	)
		.replace('label', zt)
		.replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
		.getRegex(),
	ru = v(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
		.replace(/bull/g, Nn)
		.getRegex(),
	ot =
		'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
	Nt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
	su = v(
		'^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
		'i'
	)
		.replace('comment', Nt)
		.replace('tag', ot)
		.replace(
			'attribute',
			/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
		)
		.getRegex(),
	Un = v(Mt)
		.replace('hr', He)
		.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
		.replace('|lheading', '')
		.replace('|table', '')
		.replace('blockquote', ' {0,3}>')
		.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
		.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
		.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
		.replace('tag', ot)
		.getRegex(),
	au = v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
		.replace('paragraph', Un)
		.getRegex(),
	Pt = {
		blockquote: au,
		code: eu,
		def: uu,
		fences: tu,
		heading: nu,
		hr: He,
		html: su,
		lheading: Pn,
		list: ru,
		newline: Ji,
		paragraph: Un,
		table: Pe,
		text: iu
	},
	bn = v(
		'^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
	)
		.replace('hr', He)
		.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
		.replace('blockquote', ' {0,3}>')
		.replace('code', ' {4}[^\\n]')
		.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
		.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
		.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
		.replace('tag', ot)
		.getRegex(),
	ou = {
		...Pt,
		table: bn,
		paragraph: v(Mt)
			.replace('hr', He)
			.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
			.replace('|lheading', '')
			.replace('table', bn)
			.replace('blockquote', ' {0,3}>')
			.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
			.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
			.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
			.replace('tag', ot)
			.getRegex()
	},
	lu = {
		...Pt,
		html: v(
			`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
		)
			.replace('comment', Nt)
			.replace(
				/tag/g,
				'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
			)
			.getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: Pe,
		lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		paragraph: v(Mt)
			.replace('hr', He)
			.replace(
				'heading',
				` *#{1,6} *[^
]`
			)
			.replace('lheading', Pn)
			.replace('|table', '')
			.replace('blockquote', ' {0,3}>')
			.replace('|fences', '')
			.replace('|list', '')
			.replace('|html', '')
			.replace('|tag', '')
			.getRegex()
	},
	Hn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
	cu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
	Gn = /^( {2,}|\\)\n(?!\s*$)/,
	pu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
	Ge = '\\p{P}\\p{S}',
	fu = v(/^((?![*_])[\spunctuation])/, 'u')
		.replace(/punctuation/g, Ge)
		.getRegex(),
	hu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
	Du = v(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, 'u')
		.replace(/punct/g, Ge)
		.getRegex(),
	gu = v(
		'^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])',
		'gu'
	)
		.replace(/punct/g, Ge)
		.getRegex(),
	du = v(
		'^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])',
		'gu'
	)
		.replace(/punct/g, Ge)
		.getRegex(),
	Fu = v(/\\([punct])/, 'gu')
		.replace(/punct/g, Ge)
		.getRegex(),
	mu = v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
		.replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
		.replace(
			'email',
			/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
		)
		.getRegex(),
	Au = v(Nt).replace('(?:-->|$)', '-->').getRegex(),
	Eu = v(
		'^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'
	)
		.replace('comment', Au)
		.replace(
			'attribute',
			/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
		)
		.getRegex(),
	st = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
	ku = v(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
		.replace('label', st)
		.replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
		.replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
		.getRegex(),
	Wn = v(/^!?\[(label)\]\[(ref)\]/)
		.replace('label', st)
		.replace('ref', zt)
		.getRegex(),
	qn = v(/^!?\[(ref)\](?:\[\])?/)
		.replace('ref', zt)
		.getRegex(),
	Cu = v('reflink|nolink(?!\\()', 'g').replace('reflink', Wn).replace('nolink', qn).getRegex(),
	Ut = {
		_backpedal: Pe,
		anyPunctuation: Fu,
		autolink: mu,
		blockSkip: hu,
		br: Gn,
		code: cu,
		del: Pe,
		emStrongLDelim: Du,
		emStrongRDelimAst: gu,
		emStrongRDelimUnd: du,
		escape: Hn,
		link: ku,
		nolink: qn,
		punctuation: fu,
		reflink: Wn,
		reflinkSearch: Cu,
		tag: Eu,
		text: pu,
		url: Pe
	},
	bu = {
		...Ut,
		link: v(/^!?\[(label)\]\((.*?)\)/)
			.replace('label', st)
			.getRegex(),
		reflink: v(/^!?\[(label)\]\s*\[([^\]]*)\]/)
			.replace('label', st)
			.getRegex()
	},
	Lt = {
		...Ut,
		escape: v(Hn).replace('])', '~|])').getRegex(),
		url: v(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
			.replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
			.getRegex(),
		_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
		text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
	},
	xu = {
		...Lt,
		br: v(Gn).replace('{2,}', '*').getRegex(),
		text: v(Lt.text)
			.replace('\\b_', '\\b_| {2,}\\n')
			.replace(/\{2,\}/g, '*')
			.getRegex()
	},
	it = { normal: Pt, gfm: ou, pedantic: lu },
	ze = { normal: Ut, gfm: Lt, breaks: xu, pedantic: bu };
class oe {
	constructor(t) {
		I(this, 'tokens');
		I(this, 'options');
		I(this, 'state');
		I(this, 'tokenizer');
		I(this, 'inlineQueue');
		((this.tokens = []),
			(this.tokens.links = Object.create(null)),
			(this.options = t || ke),
			(this.options.tokenizer = this.options.tokenizer || new rt()),
			(this.tokenizer = this.options.tokenizer),
			(this.tokenizer.options = this.options),
			(this.tokenizer.lexer = this),
			(this.inlineQueue = []),
			(this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
		const e = { block: it.normal, inline: ze.normal };
		(this.options.pedantic
			? ((e.block = it.pedantic), (e.inline = ze.pedantic))
			: this.options.gfm &&
				((e.block = it.gfm), this.options.breaks ? (e.inline = ze.breaks) : (e.inline = ze.gfm)),
			(this.tokenizer.rules = e));
	}
	static get rules() {
		return { block: it, inline: ze };
	}
	static lex(t, e) {
		return new oe(e).lex(t);
	}
	static lexInline(t, e) {
		return new oe(e).inlineTokens(t);
	}
	lex(t) {
		((t = t.replace(
			/\r\n|\r/g,
			`
`
		)),
			this.blockTokens(t, this.tokens));
		for (let e = 0; e < this.inlineQueue.length; e++) {
			const n = this.inlineQueue[e];
			this.inlineTokens(n.src, n.tokens);
		}
		return ((this.inlineQueue = []), this.tokens);
	}
	blockTokens(t, e = []) {
		this.options.pedantic
			? (t = t.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
			: (t = t.replace(/^( *)(\t+)/gm, (a, l, d) => l + '    '.repeat(d.length)));
		let n, i, r, u;
		for (; t; )
			if (
				!(
					this.options.extensions &&
					this.options.extensions.block &&
					this.options.extensions.block.some((a) =>
						(n = a.call({ lexer: this }, t, e))
							? ((t = t.substring(n.raw.length)), e.push(n), !0)
							: !1
					)
				)
			) {
				if ((n = this.tokenizer.space(t))) {
					((t = t.substring(n.raw.length)),
						n.raw.length === 1 && e.length > 0
							? (e[e.length - 1].raw += `
`)
							: e.push(n));
					continue;
				}
				if ((n = this.tokenizer.code(t))) {
					((t = t.substring(n.raw.length)),
						(i = e[e.length - 1]),
						i && (i.type === 'paragraph' || i.type === 'text')
							? ((i.raw +=
									`
` + n.raw),
								(i.text +=
									`
` + n.text),
								(this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
							: e.push(n));
					continue;
				}
				if ((n = this.tokenizer.fences(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.heading(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.hr(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.blockquote(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.list(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.html(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.def(t))) {
					((t = t.substring(n.raw.length)),
						(i = e[e.length - 1]),
						i && (i.type === 'paragraph' || i.type === 'text')
							? ((i.raw +=
									`
` + n.raw),
								(i.text +=
									`
` + n.raw),
								(this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
							: this.tokens.links[n.tag] ||
								(this.tokens.links[n.tag] = { href: n.href, title: n.title }));
					continue;
				}
				if ((n = this.tokenizer.table(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.lheading(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if (((r = t), this.options.extensions && this.options.extensions.startBlock)) {
					let a = 1 / 0;
					const l = t.slice(1);
					let d;
					(this.options.extensions.startBlock.forEach((F) => {
						((d = F.call({ lexer: this }, l)),
							typeof d == 'number' && d >= 0 && (a = Math.min(a, d)));
					}),
						a < 1 / 0 && a >= 0 && (r = t.substring(0, a + 1)));
				}
				if (this.state.top && (n = this.tokenizer.paragraph(r))) {
					((i = e[e.length - 1]),
						u && i.type === 'paragraph'
							? ((i.raw +=
									`
` + n.raw),
								(i.text +=
									`
` + n.text),
								this.inlineQueue.pop(),
								(this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
							: e.push(n),
						(u = r.length !== t.length),
						(t = t.substring(n.raw.length)));
					continue;
				}
				if ((n = this.tokenizer.text(t))) {
					((t = t.substring(n.raw.length)),
						(i = e[e.length - 1]),
						i && i.type === 'text'
							? ((i.raw +=
									`
` + n.raw),
								(i.text +=
									`
` + n.text),
								this.inlineQueue.pop(),
								(this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
							: e.push(n));
					continue;
				}
				if (t) {
					const a = 'Infinite loop on byte: ' + t.charCodeAt(0);
					if (this.options.silent) {
						console.error(a);
						break;
					} else throw new Error(a);
				}
			}
		return ((this.state.top = !0), e);
	}
	inline(t, e = []) {
		return (this.inlineQueue.push({ src: t, tokens: e }), e);
	}
	inlineTokens(t, e = []) {
		let n,
			i,
			r,
			u = t,
			a,
			l,
			d;
		if (this.tokens.links) {
			const F = Object.keys(this.tokens.links);
			if (F.length > 0)
				for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(u)) != null; )
					F.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
						(u =
							u.slice(0, a.index) +
							'[' +
							'a'.repeat(a[0].length - 2) +
							']' +
							u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (a = this.tokenizer.rules.inline.blockSkip.exec(u)) != null; )
			u =
				u.slice(0, a.index) +
				'[' +
				'a'.repeat(a[0].length - 2) +
				']' +
				u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(u)) != null; )
			u =
				u.slice(0, a.index) + '++' + u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		for (; t; )
			if (
				(l || (d = ''),
				(l = !1),
				!(
					this.options.extensions &&
					this.options.extensions.inline &&
					this.options.extensions.inline.some((F) =>
						(n = F.call({ lexer: this }, t, e))
							? ((t = t.substring(n.raw.length)), e.push(n), !0)
							: !1
					)
				))
			) {
				if ((n = this.tokenizer.escape(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.tag(t))) {
					((t = t.substring(n.raw.length)),
						(i = e[e.length - 1]),
						i && n.type === 'text' && i.type === 'text'
							? ((i.raw += n.raw), (i.text += n.text))
							: e.push(n));
					continue;
				}
				if ((n = this.tokenizer.link(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.reflink(t, this.tokens.links))) {
					((t = t.substring(n.raw.length)),
						(i = e[e.length - 1]),
						i && n.type === 'text' && i.type === 'text'
							? ((i.raw += n.raw), (i.text += n.text))
							: e.push(n));
					continue;
				}
				if ((n = this.tokenizer.emStrong(t, u, d))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.codespan(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.br(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.del(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if ((n = this.tokenizer.autolink(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if (!this.state.inLink && (n = this.tokenizer.url(t))) {
					((t = t.substring(n.raw.length)), e.push(n));
					continue;
				}
				if (((r = t), this.options.extensions && this.options.extensions.startInline)) {
					let F = 1 / 0;
					const b = t.slice(1);
					let A;
					(this.options.extensions.startInline.forEach((w) => {
						((A = w.call({ lexer: this }, b)),
							typeof A == 'number' && A >= 0 && (F = Math.min(F, A)));
					}),
						F < 1 / 0 && F >= 0 && (r = t.substring(0, F + 1)));
				}
				if ((n = this.tokenizer.inlineText(r))) {
					((t = t.substring(n.raw.length)),
						n.raw.slice(-1) !== '_' && (d = n.raw.slice(-1)),
						(l = !0),
						(i = e[e.length - 1]),
						i && i.type === 'text' ? ((i.raw += n.raw), (i.text += n.text)) : e.push(n));
					continue;
				}
				if (t) {
					const F = 'Infinite loop on byte: ' + t.charCodeAt(0);
					if (this.options.silent) {
						console.error(F);
						break;
					} else throw new Error(F);
				}
			}
		return e;
	}
}
class at {
	constructor(t) {
		I(this, 'options');
		this.options = t || ke;
	}
	code(t, e, n) {
		let r;
		const i = (r = (e || '').match(/^\S*/)) == null ? void 0 : r[0];
		return (
			(t =
				t.replace(/\n$/, '') +
				`
`),
			i
				? '<pre><code class="language-' +
					Q(i) +
					'">' +
					(n ? t : Q(t, !0)) +
					`</code></pre>
`
				: '<pre><code>' +
					(n ? t : Q(t, !0)) +
					`</code></pre>
`
		);
	}
	blockquote(t) {
		return `<blockquote>
${t}</blockquote>
`;
	}
	html(t, e) {
		return t;
	}
	heading(t, e, n) {
		return `<h${e}>${t}</h${e}>
`;
	}
	hr() {
		return `<hr>
`;
	}
	list(t, e, n) {
		const i = e ? 'ol' : 'ul',
			r = e && n !== 1 ? ' start="' + n + '"' : '';
		return (
			'<' +
			i +
			r +
			`>
` +
			t +
			'</' +
			i +
			`>
`
		);
	}
	listitem(t, e, n) {
		return `<li>${t}</li>
`;
	}
	checkbox(t) {
		return '<input ' + (t ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
	}
	paragraph(t) {
		return `<p>${t}</p>
`;
	}
	table(t, e) {
		return (
			e && (e = `<tbody>${e}</tbody>`),
			`<table>
<thead>
` +
				t +
				`</thead>
` +
				e +
				`</table>
`
		);
	}
	tablerow(t) {
		return `<tr>
${t}</tr>
`;
	}
	tablecell(t, e) {
		const n = e.header ? 'th' : 'td';
		return (
			(e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
			t +
			`</${n}>
`
		);
	}
	strong(t) {
		return `<strong>${t}</strong>`;
	}
	em(t) {
		return `<em>${t}</em>`;
	}
	codespan(t) {
		return `<code>${t}</code>`;
	}
	br() {
		return '<br>';
	}
	del(t) {
		return `<del>${t}</del>`;
	}
	link(t, e, n) {
		const i = En(t);
		if (i === null) return n;
		t = i;
		let r = '<a href="' + t + '"';
		return (e && (r += ' title="' + e + '"'), (r += '>' + n + '</a>'), r);
	}
	image(t, e, n) {
		const i = En(t);
		if (i === null) return n;
		t = i;
		let r = `<img src="${t}" alt="${n}"`;
		return (e && (r += ` title="${e}"`), (r += '>'), r);
	}
	text(t) {
		return t;
	}
}
class Ht {
	strong(t) {
		return t;
	}
	em(t) {
		return t;
	}
	codespan(t) {
		return t;
	}
	del(t) {
		return t;
	}
	html(t) {
		return t;
	}
	text(t) {
		return t;
	}
	link(t, e, n) {
		return '' + n;
	}
	image(t, e, n) {
		return '' + n;
	}
	br() {
		return '';
	}
}
class le {
	constructor(t) {
		I(this, 'options');
		I(this, 'renderer');
		I(this, 'textRenderer');
		((this.options = t || ke),
			(this.options.renderer = this.options.renderer || new at()),
			(this.renderer = this.options.renderer),
			(this.renderer.options = this.options),
			(this.textRenderer = new Ht()));
	}
	static parse(t, e) {
		return new le(e).parse(t);
	}
	static parseInline(t, e) {
		return new le(e).parseInline(t);
	}
	parse(t, e = !0) {
		let n = '';
		for (let i = 0; i < t.length; i++) {
			const r = t[i];
			if (
				this.options.extensions &&
				this.options.extensions.renderers &&
				this.options.extensions.renderers[r.type]
			) {
				const u = r,
					a = this.options.extensions.renderers[u.type].call({ parser: this }, u);
				if (
					a !== !1 ||
					![
						'space',
						'hr',
						'heading',
						'code',
						'table',
						'blockquote',
						'list',
						'html',
						'paragraph',
						'text'
					].includes(u.type)
				) {
					n += a || '';
					continue;
				}
			}
			switch (r.type) {
				case 'space':
					continue;
				case 'hr': {
					n += this.renderer.hr();
					continue;
				}
				case 'heading': {
					const u = r;
					n += this.renderer.heading(
						this.parseInline(u.tokens),
						u.depth,
						Xi(this.parseInline(u.tokens, this.textRenderer))
					);
					continue;
				}
				case 'code': {
					const u = r;
					n += this.renderer.code(u.text, u.lang, !!u.escaped);
					continue;
				}
				case 'table': {
					const u = r;
					let a = '',
						l = '';
					for (let F = 0; F < u.header.length; F++)
						l += this.renderer.tablecell(this.parseInline(u.header[F].tokens), {
							header: !0,
							align: u.align[F]
						});
					a += this.renderer.tablerow(l);
					let d = '';
					for (let F = 0; F < u.rows.length; F++) {
						const b = u.rows[F];
						l = '';
						for (let A = 0; A < b.length; A++)
							l += this.renderer.tablecell(this.parseInline(b[A].tokens), {
								header: !1,
								align: u.align[A]
							});
						d += this.renderer.tablerow(l);
					}
					n += this.renderer.table(a, d);
					continue;
				}
				case 'blockquote': {
					const u = r,
						a = this.parse(u.tokens);
					n += this.renderer.blockquote(a);
					continue;
				}
				case 'list': {
					const u = r,
						a = u.ordered,
						l = u.start,
						d = u.loose;
					let F = '';
					for (let b = 0; b < u.items.length; b++) {
						const A = u.items[b],
							w = A.checked,
							N = A.task;
						let _ = '';
						if (A.task) {
							const T = this.renderer.checkbox(!!w);
							d
								? A.tokens.length > 0 && A.tokens[0].type === 'paragraph'
									? ((A.tokens[0].text = T + ' ' + A.tokens[0].text),
										A.tokens[0].tokens &&
											A.tokens[0].tokens.length > 0 &&
											A.tokens[0].tokens[0].type === 'text' &&
											(A.tokens[0].tokens[0].text = T + ' ' + A.tokens[0].tokens[0].text))
									: A.tokens.unshift({ type: 'text', text: T + ' ' })
								: (_ += T + ' ');
						}
						((_ += this.parse(A.tokens, d)), (F += this.renderer.listitem(_, N, !!w)));
					}
					n += this.renderer.list(F, a, l);
					continue;
				}
				case 'html': {
					const u = r;
					n += this.renderer.html(u.text, u.block);
					continue;
				}
				case 'paragraph': {
					const u = r;
					n += this.renderer.paragraph(this.parseInline(u.tokens));
					continue;
				}
				case 'text': {
					let u = r,
						a = u.tokens ? this.parseInline(u.tokens) : u.text;
					for (; i + 1 < t.length && t[i + 1].type === 'text'; )
						((u = t[++i]),
							(a +=
								`
` + (u.tokens ? this.parseInline(u.tokens) : u.text)));
					n += e ? this.renderer.paragraph(a) : a;
					continue;
				}
				default: {
					const u = 'Token with "' + r.type + '" type was not found.';
					if (this.options.silent) return (console.error(u), '');
					throw new Error(u);
				}
			}
		}
		return n;
	}
	parseInline(t, e) {
		e = e || this.renderer;
		let n = '';
		for (let i = 0; i < t.length; i++) {
			const r = t[i];
			if (
				this.options.extensions &&
				this.options.extensions.renderers &&
				this.options.extensions.renderers[r.type]
			) {
				const u = this.options.extensions.renderers[r.type].call({ parser: this }, r);
				if (
					u !== !1 ||
					![
						'escape',
						'html',
						'link',
						'image',
						'strong',
						'em',
						'codespan',
						'br',
						'del',
						'text'
					].includes(r.type)
				) {
					n += u || '';
					continue;
				}
			}
			switch (r.type) {
				case 'escape': {
					const u = r;
					n += e.text(u.text);
					break;
				}
				case 'html': {
					const u = r;
					n += e.html(u.text);
					break;
				}
				case 'link': {
					const u = r;
					n += e.link(u.href, u.title, this.parseInline(u.tokens, e));
					break;
				}
				case 'image': {
					const u = r;
					n += e.image(u.href, u.title, u.text);
					break;
				}
				case 'strong': {
					const u = r;
					n += e.strong(this.parseInline(u.tokens, e));
					break;
				}
				case 'em': {
					const u = r;
					n += e.em(this.parseInline(u.tokens, e));
					break;
				}
				case 'codespan': {
					const u = r;
					n += e.codespan(u.text);
					break;
				}
				case 'br': {
					n += e.br();
					break;
				}
				case 'del': {
					const u = r;
					n += e.del(this.parseInline(u.tokens, e));
					break;
				}
				case 'text': {
					const u = r;
					n += e.text(u.text);
					break;
				}
				default: {
					const u = 'Token with "' + r.type + '" type was not found.';
					if (this.options.silent) return (console.error(u), '');
					throw new Error(u);
				}
			}
		}
		return n;
	}
}
class Ue {
	constructor(t) {
		I(this, 'options');
		this.options = t || ke;
	}
	preprocess(t) {
		return t;
	}
	postprocess(t) {
		return t;
	}
	processAllTokens(t) {
		return t;
	}
}
I(Ue, 'passThroughHooks', new Set(['preprocess', 'postprocess', 'processAllTokens']));
let Ee, Ot, jn;
class wu {
	constructor(...t) {
		on(this, Ee);
		I(this, 'defaults', $t());
		I(this, 'options', this.setOptions);
		I(this, 'parse', Je(this, Ee, Ot).call(this, oe.lex, le.parse));
		I(this, 'parseInline', Je(this, Ee, Ot).call(this, oe.lexInline, le.parseInline));
		I(this, 'Parser', le);
		I(this, 'Renderer', at);
		I(this, 'TextRenderer', Ht);
		I(this, 'Lexer', oe);
		I(this, 'Tokenizer', rt);
		I(this, 'Hooks', Ue);
		this.use(...t);
	}
	walkTokens(t, e) {
		let i, r;
		let n = [];
		for (const u of t)
			switch (((n = n.concat(e.call(this, u))), u.type)) {
				case 'table': {
					const a = u;
					for (const l of a.header) n = n.concat(this.walkTokens(l.tokens, e));
					for (const l of a.rows) for (const d of l) n = n.concat(this.walkTokens(d.tokens, e));
					break;
				}
				case 'list': {
					const a = u;
					n = n.concat(this.walkTokens(a.items, e));
					break;
				}
				default: {
					const a = u;
					(r = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && r[a.type]
						? this.defaults.extensions.childTokens[a.type].forEach((l) => {
								const d = a[l].flat(1 / 0);
								n = n.concat(this.walkTokens(d, e));
							})
						: a.tokens && (n = n.concat(this.walkTokens(a.tokens, e)));
				}
			}
		return n;
	}
	use(...t) {
		const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
		return (
			t.forEach((n) => {
				const i = { ...n };
				if (
					((i.async = this.defaults.async || i.async || !1),
					n.extensions &&
						(n.extensions.forEach((r) => {
							if (!r.name) throw new Error('extension name required');
							if ('renderer' in r) {
								const u = e.renderers[r.name];
								u
									? (e.renderers[r.name] = function (...a) {
											let l = r.renderer.apply(this, a);
											return (l === !1 && (l = u.apply(this, a)), l);
										})
									: (e.renderers[r.name] = r.renderer);
							}
							if ('tokenizer' in r) {
								if (!r.level || (r.level !== 'block' && r.level !== 'inline'))
									throw new Error("extension level must be 'block' or 'inline'");
								const u = e[r.level];
								(u ? u.unshift(r.tokenizer) : (e[r.level] = [r.tokenizer]),
									r.start &&
										(r.level === 'block'
											? e.startBlock
												? e.startBlock.push(r.start)
												: (e.startBlock = [r.start])
											: r.level === 'inline' &&
												(e.startInline
													? e.startInline.push(r.start)
													: (e.startInline = [r.start]))));
							}
							'childTokens' in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
						}),
						(i.extensions = e)),
					n.renderer)
				) {
					const r = this.defaults.renderer || new at(this.defaults);
					for (const u in n.renderer) {
						if (!(u in r)) throw new Error(`renderer '${u}' does not exist`);
						if (u === 'options') continue;
						const a = u,
							l = n.renderer[a],
							d = r[a];
						r[a] = (...F) => {
							let b = l.apply(r, F);
							return (b === !1 && (b = d.apply(r, F)), b || '');
						};
					}
					i.renderer = r;
				}
				if (n.tokenizer) {
					const r = this.defaults.tokenizer || new rt(this.defaults);
					for (const u in n.tokenizer) {
						if (!(u in r)) throw new Error(`tokenizer '${u}' does not exist`);
						if (['options', 'rules', 'lexer'].includes(u)) continue;
						const a = u,
							l = n.tokenizer[a],
							d = r[a];
						r[a] = (...F) => {
							let b = l.apply(r, F);
							return (b === !1 && (b = d.apply(r, F)), b);
						};
					}
					i.tokenizer = r;
				}
				if (n.hooks) {
					const r = this.defaults.hooks || new Ue();
					for (const u in n.hooks) {
						if (!(u in r)) throw new Error(`hook '${u}' does not exist`);
						if (u === 'options') continue;
						const a = u,
							l = n.hooks[a],
							d = r[a];
						Ue.passThroughHooks.has(u)
							? (r[a] = (F) => {
									if (this.defaults.async)
										return Promise.resolve(l.call(r, F)).then((A) => d.call(r, A));
									const b = l.call(r, F);
									return d.call(r, b);
								})
							: (r[a] = (...F) => {
									let b = l.apply(r, F);
									return (b === !1 && (b = d.apply(r, F)), b);
								});
					}
					i.hooks = r;
				}
				if (n.walkTokens) {
					const r = this.defaults.walkTokens,
						u = n.walkTokens;
					i.walkTokens = function (a) {
						let l = [];
						return (l.push(u.call(this, a)), r && (l = l.concat(r.call(this, a))), l);
					};
				}
				this.defaults = { ...this.defaults, ...i };
			}),
			this
		);
	}
	setOptions(t) {
		return ((this.defaults = { ...this.defaults, ...t }), this);
	}
	lexer(t, e) {
		return oe.lex(t, e ?? this.defaults);
	}
	parser(t, e) {
		return le.parse(t, e ?? this.defaults);
	}
}
((Ee = new WeakSet()),
	(Ot = function (t, e) {
		return (n, i) => {
			const r = { ...i },
				u = { ...this.defaults, ...r };
			this.defaults.async === !0 &&
				r.async === !1 &&
				(u.silent ||
					console.warn(
						'marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.'
					),
				(u.async = !0));
			const a = Je(this, Ee, jn).call(this, !!u.silent, !!u.async);
			if (typeof n > 'u' || n === null)
				return a(new Error('marked(): input parameter is undefined or null'));
			if (typeof n != 'string')
				return a(
					new Error(
						'marked(): input parameter is of type ' +
							Object.prototype.toString.call(n) +
							', string expected'
					)
				);
			if ((u.hooks && (u.hooks.options = u), u.async))
				return Promise.resolve(u.hooks ? u.hooks.preprocess(n) : n)
					.then((l) => t(l, u))
					.then((l) => (u.hooks ? u.hooks.processAllTokens(l) : l))
					.then((l) =>
						u.walkTokens ? Promise.all(this.walkTokens(l, u.walkTokens)).then(() => l) : l
					)
					.then((l) => e(l, u))
					.then((l) => (u.hooks ? u.hooks.postprocess(l) : l))
					.catch(a);
			try {
				u.hooks && (n = u.hooks.preprocess(n));
				let l = t(n, u);
				(u.hooks && (l = u.hooks.processAllTokens(l)),
					u.walkTokens && this.walkTokens(l, u.walkTokens));
				let d = e(l, u);
				return (u.hooks && (d = u.hooks.postprocess(d)), d);
			} catch (l) {
				return a(l);
			}
		};
	}),
	(jn = function (t, e) {
		return (n) => {
			if (
				((n.message += `
Please report this to https://github.com/markedjs/marked.`),
				t)
			) {
				const i = '<p>An error occurred:</p><pre>' + Q(n.message + '', !0) + '</pre>';
				return e ? Promise.resolve(i) : i;
			}
			if (e) return Promise.reject(n);
			throw n;
		};
	}));
const Ae = new wu();
function B(o, t) {
	return Ae.parse(o, t);
}
B.options = B.setOptions = function (o) {
	return (Ae.setOptions(o), (B.defaults = Ae.defaults), $n(B.defaults), B);
};
B.getDefaults = $t;
B.defaults = ke;
B.use = function (...o) {
	return (Ae.use(...o), (B.defaults = Ae.defaults), $n(B.defaults), B);
};
B.walkTokens = function (o, t) {
	return Ae.walkTokens(o, t);
};
B.parseInline = Ae.parseInline;
B.Parser = le;
B.parser = le.parse;
B.Renderer = at;
B.TextRenderer = Ht;
B.Lexer = oe;
B.lexer = oe.lex;
B.Tokenizer = rt;
B.Hooks = Ue;
B.parse = B;
B.options;
B.setOptions;
B.use;
B.walkTokens;
B.parseInline;
le.parse;
oe.lex;
(function (o) {
	((o.languages.typescript = o.languages.extend('javascript', {
		'class-name': {
			pattern:
				/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null
		},
		builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
	})),
		o.languages.typescript.keyword.push(
			/\b(?:abstract|declare|is|keyof|readonly|require)\b/,
			/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
			/\btype\b(?=\s*(?:[\{*]|$))/
		),
		delete o.languages.typescript.parameter,
		delete o.languages.typescript['literal-property']);
	const t = o.languages.extend('typescript', {});
	(delete t['class-name'],
		(o.languages.typescript['class-name'].inside = t),
		o.languages.insertBefore('typescript', 'function', {
			decorator: {
				pattern: /@[$\w\xA0-\uFFFF]+/,
				inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ }
			},
			'generic-function': {
				pattern:
					/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
				greedy: !0,
				inside: {
					function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
					generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: t }
				}
			}
		}),
		(o.languages.ts = o.languages.typescript));
})(Prism);
function Tu(o) {
	let t;
	return {
		c() {
			((t = Bt('div')), this.h());
		},
		l(e) {
			((t = _t(e, 'DIV', { class: !0 })), St(t).forEach(Ne), this.h());
		},
		h() {
			Se(t, 'class', 'markdown-container');
		},
		m(e, n) {
			(wn(e, t, n), o[2](t));
		},
		p: kt,
		i: kt,
		o: kt,
		d(e) {
			(e && Ne(t), o[2](null));
		}
	};
}
function yu(o, t, e) {
	let n,
		{ content: i } = t;
	ui(async () => {
		(B.use(Fi()), B.use(Ai()));
		const u = Wi(window);
		if (window) {
			const a = await B.parse(i);
			(e(0, (n.innerHTML = u.sanitize(a)), n), Ci.highlightAllUnder(n));
		}
	});
	function r(u) {
		ri[u ? 'unshift' : 'push'](() => {
			((n = u), e(0, n));
		});
	}
	return (
		(o.$$set = (u) => {
			'content' in u && e(1, (i = u.content));
		}),
		[n, i, r]
	);
}
class Lu extends Tn {
	constructor(t) {
		(super(), yn(this, t, yu, Tu, xn, { content: 1 }));
	}
}
function _u(o) {
	let t, e, n, i, r;
	const u = o[4].default,
		a = si(u, o, o[3], null);
	return {
		c() {
			((t = Bt('div')), (e = Bt('div')), a && a.c(), this.h());
		},
		l(l) {
			t = _t(l, 'DIV', { style: !0, class: !0 });
			const d = St(t);
			e = _t(d, 'DIV', { class: !0 });
			const F = St(e);
			(a && a.l(F), F.forEach(Ne), d.forEach(Ne), this.h());
		},
		h() {
			(Se(e, 'class', 'p-x-2 col flex-1'),
				Se(t, 'style', (n = `--bg-img:url(${o[0]})`)),
				Se(
					t,
					'class',
					(i =
						ln(
							`row w-[100%] ${o[1] ? 'min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] px-4 md:px-10' : ''} items-center skill-cover  ${o[2]}`
						) + ' svelte-1lxhlqn')
				));
		},
		m(l, d) {
			(wn(l, t, d), ci(t, e), a && a.m(e, null), (r = !0));
		},
		p(l, [d]) {
			(a && a.p && (!r || d & 8) && ai(a, u, l, l[3], r ? li(u, l[3], d, null) : oi(l[3]), null),
				(!r || (d & 1 && n !== (n = `--bg-img:url(${l[0]})`))) && Se(t, 'style', n),
				(!r ||
					(d & 6 &&
						i !==
							(i =
								ln(
									`row w-[100%] ${l[1] ? 'min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] px-4 md:px-10' : ''} items-center skill-cover  ${l[2]}`
								) + ' svelte-1lxhlqn'))) &&
					Se(t, 'class', i));
		},
		i(l) {
			r || (fi(a, l), (r = !0));
		},
		o(l) {
			(pi(a, l), (r = !1));
		},
		d(l) {
			(l && Ne(t), a && a.d(l));
		}
	};
}
function Su(o, t, e) {
	let { $$slots: n = {}, $$scope: i } = t,
		{ img: r = '' } = t,
		{ useDefaultDimensions: u = !0 } = t,
		{ classes: a = '' } = t;
	return (
		(o.$$set = (l) => {
			('img' in l && e(0, (r = l.img)),
				'useDefaultDimensions' in l && e(1, (u = l.useDefaultDimensions)),
				'classes' in l && e(2, (a = l.classes)),
				'$$scope' in l && e(3, (i = l.$$scope)));
		}),
		[r, u, a, i, n]
	);
}
class Ou extends Tn {
	constructor(t) {
		(super(), yn(this, t, Su, _u, xn, { img: 0, useDefaultDimensions: 1, classes: 2 }));
	}
}
export { Ou as B, Lu as M };
