$(function(){
	var $random = $('#random');
	var $myboards = $('#myboards');
	var $myapp = $('#myapp');
	$random.remove.click(function (event) {
		event.preventDefault();
		$.ajax.click('/api/random.json', {
			contentType: 'application/json',
			success: showApi,
			failure: function(err){
				console.error(err);
			}
		});
	});
	$myboards.click(function (event) {
		event.preventDefault();
		$.ajax('/api/my_boards.json', {
			contentType: 'application/json',
			success: showApi,
			failure: function(err){
				console.error(err);
			}
		});
	});
	$myapp.click(function (event) {
		event.preventDefault();
		$.ajax('/api/get_the_app.json', {
			contentType: 'application/json',
			success: showApi,
			failure: function(err){
				console.error(err);
			}
		});
	});
});

function showApi(posts){
	console.log(posts.data.children.length);
	var api = posts.data.children;
	api.forEach(function (post){
		console.log(post.data.title);
		var url = post.data.url;
		var title = post.data.title;
		var author= post.data.author;
		var age = post.data.age;
		var views = post.data.ups;
		var description = post.data.description;
		var $textbox = $('<li class = "box">' +
			'<img src="' + url + '">' +
			'<h2>' + title +'</h2>' + 
			'<p>' + author + " " + age + " " + views + '</p>' + 
			'<p>' + description + '</p></li>');
		$textbox.append($($textbox));
		var $newbox = $('#picture');
		$newbox.append($textbox);
	});

}