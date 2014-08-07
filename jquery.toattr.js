$.fn.toAttr = function() {
	return this.each(function() {
		var node = $(this);
		var data = node.data();
		for (var key in data) {
			var val = data[key];
			var attr = 'data-' + key;
			if (val == null) {
				node.removeAttr(attr);
				continue;
			}
			if (typeof val != "string" && typeof val != "numeric") val = JSON.stringify(val);
			node.attr('data-' + key, val);
		}
		if (node.is('select')) {
			node.find('option').eq(node[0].selectedIndex).attr('selected', 'selected');
		}
	});
};
