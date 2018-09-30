/**
 * Created by shenlisha on 2018/9/28.
 */
define([
	'underscore'
], function(_) {
	function Utils () {
		this.flatten = function(obj) {
			var newObject = {};
			for (var i in obj) {
				if (_.isObject(obj[i])) {
					var object = this.flatten(obj[i]);
					for (var j in object) {
						newObject[i + '.' + j] = object[j];
					}
				} else {
					newObject[i] = obj[i];
				}
			}
			return newObject;
		};

		this.flattenObjectToString = function(obj) {
			var path = [],
				nodes = {},
				parseObject = function(obj) {
					if (obj instanceof Object) {
						if (obj instanceof Object) {
							for (var node in obj) {
								path.push(node);
								parseObject(obj[node]);
								path.pop();
							}
						}
					} else {
						nodes[path.join('.')] = obj;
					}
				};
			parseObject(obj);
			return nodes;
		};

		this.flattenObjectToString2 = function(obj) {
			var newObject = {};
			for (var attr in obj) {
				if (obj[attr] instanceof Object) {
					var flattedObject = this.flattenObjectToString2(obj[attr]);
					for (var subAttr in flattedObject) {
						newObject[attr + '.' + subAttr] = flattedObject[subAttr];
					}
				} else {
					newObject[attr] = obj[attr];
				}
			}
			return newObject
		};
	}
	return Utils
});












