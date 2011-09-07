// Let's define some template helpers to display our data.
// 
sencha_hdc.views.photoCellTemplate = function () {
    return "<div class='item-wrap'> " +

// using the image directly from Instagram
    	"<img class='photoCell-image' src='{thumbnail_url}' />" +

// using Src to resize the image in the cloud
//    "<img class='photoCell-image' width='120' height='120' src='http://src.sencha.io/286/{thumbnail_url}' />" +

    	"<div class='copy-wrap'>" +
			"<h2><span class='username'>{username}</span></h2>" +
			"<span class='created'>{created_time:date(\"m/d/Y\")}</span>" +
		"</div>" +
    "</div>";
};