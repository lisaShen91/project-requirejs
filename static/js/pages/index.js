/**
 * Created by shenlisha on 2018/9/29.
 */

require([
	'lib/utils'
], function(Utils) {
	var utils = new Utils();
	var obj = {
		a:1,
		b: {
			bb: 1
		}
	};
	var flattenObj = utils.flatten(obj);
	console.log(flattenObj);
});

