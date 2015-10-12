# CSShare
jQuery plugin for making share buttons.
This plugin allows you to create share buttons.
You can look at other plugins and utilities for web development on the website [CrazySquirrel.ru](http://crazysquirrel.ru/).
## Parameters
### Parameters description
* types - An array with the names of views share.
		  May include the following values.
		  ["facebook","twitter","vkontakte","odnoklassniki","google","yahoo","misterwong","moimir","friendfeed","yandex","webmoney","vkrugu","juick","pinterest","myspace","googlebookmark","stumbleupon","instapaper","email","springpad","print","linkedin","readability","pinme","surfingbird","webdiscover","memori","livejournal","blogger","liveinternet","evernote","bobrdobr","moemesto","formspring","yazakladki","moikrug","bookmark","digg","tumblr","delicious"]

### Setting
The options for share buttons can be specified when invoking the plugin or via data - attributes.
When you call peredaetsa structured object as the default parameters.
If you specify options via data, you can use the following values.
* data-csshare-types - Sets types where value separet by ,

### Default parameters
```javascript
types: ["twitter","facebook","vkontakte","print"]
```
## Example
### HTML
```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>CSTiles</title>
<link rel="stylesheet" data-template-style="true" type="text/css" href="css/CSTiles-1.1.0.css">
<link rel="stylesheet" data-template-style="true" type="text/css" href="css/CSShare-1.0.0.css">
</head>

<body>
<div class="cstiles" data-cstiles-size="4,auto" data-cstiles-margin="5">
    <div class="cstiles__item" data-cstiles-size="2">
        <iframe class="cstiles__item-video" width="500" height="500" src="https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="cstiles__item" data-cstiles-size="1" data-cstiles-image_src="images/2.jpg">
    </div>
    <div class="cstiles__item" data-cstiles-size="1,2">
        <img class="cstiles__item-image" src="images/3.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="1" data-cstiles-order="1" data-cstiles-order-tablet="1">
         <img class="cstiles__item-image" src="images/4.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="2,1" data-cstiles-order="2" data-cstiles-order-tablet="2" data-cstiles-image_position="left,bottom">
        <img class="cstiles__item-image" src="images/5.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="1">
         <img class="cstiles__item-image" src="images/6.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="1">
        <img class="cstiles__item-image" src="images/7.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="2,1">
         <img class="cstiles__item-image" src="images/8.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="1">
        <img class="cstiles__item-image" src="images/9.jpg" alt=" ">
    </div>
    <div class="cstiles__item" data-cstiles-size="1">
      <img class="cstiles__item-image" src="images/10.jpg" alt=" ">
    </div>
</div>
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/jquery.CSTiles-1.1.0.min.js"></script>
<script src="js/jquery.CSShare-1.0.0.min.js"></script>
<script src="js/index.js"></script>
</body>
</html>
```
### JavaScript
```javascript
$(function(){
    $(".cstiles").CSTiles({
		shareTile: true,
		shareTypes: ["facebook","vkontakte","email","print"]		
	});
	/*
	$(".cstiles__item-content").CSShare({
		types: ["facebook","vkontakte","email","print"]	
	});
	*/
});
```