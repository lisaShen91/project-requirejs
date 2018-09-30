/**
 * Created by shenlisha on 2018/9/21.
 */

exports.perimeter = function(width) {
	return 4 * width;
};
module.exports.area = function(param) {
	return param;
};
exports = {
	area: function(width) {
		return width * width;
	}
};