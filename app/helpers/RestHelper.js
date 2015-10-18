var $ = require('jquery');

module.exports = {
	get: function(url) {
		return new Promise(function(resolve,reject) {
			$.ajax({
				url: url,
				dataType: "json",
				error: reject,
				success: resolve
			});
		});
	}, 
	post: function(url,data) {
		return new Promise(function(resolve,reject) {
			$.ajax({
				url: url,
				type: "POST",
				data: data,
				error: reject,
				success: resolve
			});
		});
	},
	patch: function(url,data) {
		return new Promise(function(resolve,reject) {
			$.ajax({
				url: url,
				type: "PATCH",
				data: data,
				error: reject,
				success: resolve
			});
		});
	},
	del: function(url) {
		console.log("Deleting");
		return new Promise(function(resolve,reject) {
			$.ajax({
				url: url,
				type: "DELETE",
				error: reject,
				success: resolve
			});
		});
	}
};