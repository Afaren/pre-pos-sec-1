function inArray(element, array) {
	return array.indexOf(element) > -1;
}


function collect_same_elements(collection_a, collection_b) {
	var same = [];
	for (var i in collection_a) {
		if (inArray(collection_a[i], collection_b))
			same.push(collection_a[i]);
	}
	return same;
}

module.exports = collect_same_elements;
