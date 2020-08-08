declare namespace neoRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any NEO addresses in a string. Useful with `RegExp#test()` to check if a string is an NEO address.
		@default false
		*/
		readonly exact?: boolean;
	}
}

/**
Returns a regex for matching NEO addresses.
@example
```
import neoRegex = require('neo-regex')
neoRegex().test('nodejsrocks AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i');
//=> true
```
*/
declare function neoRegex(options?: neoRegex.Options): RegExp;

export = neoRegex;
