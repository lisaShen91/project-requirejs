define(function() {
	function Utils() {

	}

	Utils.prototype.flattenObjectToString = function(obj) {
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
	Utils.prototype.flattenObjectToString2 = function(obj) {
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
	return Utils
});



