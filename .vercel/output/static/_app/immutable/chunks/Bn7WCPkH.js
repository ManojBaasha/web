import { s as r, n as c, d as l, l as o, i as f, c as h, e as m, h as u } from './Bit1RA6o.js';
import { S as _, i as d } from './C5IiiZmU.js';
function I(i) {
	let s, t;
	return {
		c() {
			((s = u('i')), this.h());
		},
		l(e) {
			((s = h(e, 'I', { class: !0 })), m(s).forEach(l), this.h());
		},
		h() {
			o(s, 'class', (t = `${i[0]} ${i[1]}`));
		},
		m(e, a) {
			f(e, s, a);
		},
		p(e, [a]) {
			a & 3 && t !== (t = `${e[0]} ${e[1]}`) && o(s, 'class', t);
		},
		i: c,
		o: c,
		d(e) {
			e && l(s);
		}
	};
}
function S(i, s, t) {
	let { icon: e = '' } = s,
		{ classes: a = '' } = s;
	return (
		(i.$$set = (n) => {
			('icon' in n && t(0, (e = n.icon)), 'classes' in n && t(1, (a = n.classes)));
		}),
		[e, a]
	);
}
class q extends _ {
	constructor(s) {
		(super(), d(this, s, S, I, r, { icon: 0, classes: 1 }));
	}
}
export { q as U };
