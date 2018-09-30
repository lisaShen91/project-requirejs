/**
 * Created by shenlisha on 2018/9/25.
 */
require.config({
	baseUrl: 'static/js',
	paths: {
		'underscore': 'lib/underscore'
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}
});
