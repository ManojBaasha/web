import {
	s as g,
	n as c,
	d,
	z as m,
	l as f,
	A as n,
	i as w,
	b as v,
	c as o,
	e as z,
	h as _
} from './Bit1RA6o.js';
import { S as C, i as b } from './C5IiiZmU.js';
function q(l) {
	let e, s, r, h;
	return {
		c() {
			((e = _('div')), (s = _('img')), this.h());
		},
		l(a) {
			e = o(a, 'DIV', { class: !0, style: !0 });
			const i = z(e);
			((s = o(i, 'IMG', { class: !0, src: !0, alt: !0, style: !0 })), i.forEach(d), this.h());
		},
		h() {
			(f(s, 'class', 'w-full h-full object-contain'),
				m(s.src, (r = l[0])) || f(s, 'src', r),
				f(s, 'alt', l[1]),
				n(s, 'max-width', l[2] + 'px'),
				n(s, 'max-height', l[2] + 'px'),
				f(e, 'class', (h = `rounded-${l[3]} ${l[4]} overflow-hidden`)),
				n(e, 'width', l[2] + 'px'),
				n(e, 'height', l[2] + 'px'));
		},
		m(a, i) {
			(w(a, e, i), v(e, s));
		},
		p(a, [i]) {
			(i & 1 && !m(s.src, (r = a[0])) && f(s, 'src', r),
				i & 2 && f(s, 'alt', a[1]),
				i & 4 && n(s, 'max-width', a[2] + 'px'),
				i & 4 && n(s, 'max-height', a[2] + 'px'),
				i & 24 && h !== (h = `rounded-${a[3]} ${a[4]} overflow-hidden`) && f(e, 'class', h),
				i & 4 && n(e, 'width', a[2] + 'px'),
				i & 4 && n(e, 'height', a[2] + 'px'));
		},
		i: c,
		o: c,
		d(a) {
			a && d(e);
		}
	};
}
function I(l, e, s) {
	let { src: r } = e,
		{ alt: h } = e,
		{ size: a = 50 } = e,
		{ radius: i = '15px' } = e,
		{ classes: u = '' } = e;
	return (
		(l.$$set = (t) => {
			('src' in t && s(0, (r = t.src)),
				'alt' in t && s(1, (h = t.alt)),
				'size' in t && s(2, (a = t.size)),
				'radius' in t && s(3, (i = t.radius)),
				'classes' in t && s(4, (u = t.classes)));
		}),
		[r, h, a, i, u]
	);
}
class x extends C {
	constructor(e) {
		(super(), b(this, e, I, q, g, { src: 0, alt: 1, size: 2, radius: 3, classes: 4 }));
	}
}
export { x as C };
