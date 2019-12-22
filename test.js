import test from 'ava';
import m from '.';

const fixtures = [
	'AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i',
	'AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT',
	'AddZkjqPoPyhDhWoA8f9CXQeHQRDr8HbPo',
	'APMyYHutJZsZVWAQRe9h4eVrzzD3HLroQW',
	'ANpB7FBPoPpqjxKFWiiAD3arFgsQtwYUPb'
];

const fixturesNot = [
	'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
	'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
	'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
	'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
	'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
	'nikolaskam{at}gmail{dot}com'
];

test('Exact NEO addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact NEO addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}

	t.is(m().exec('neo:AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i')[0], 'AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i');
});

test('Non-NEO addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});
