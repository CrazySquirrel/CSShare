/**
 * CrazySquirrel
 * http://crazysquirrel.ru/
 *
 * @author Yastrebov Sergey
 * @version 1.0.0
 * @copyright 2015 CrazySquirrel
 */

;(function ( $ ) {
	"use strict";
	
	if(typeof $.CrazySquirrel === "undefined"){
		$.CrazySquirrel = {};
	}

	/**
	 * Class of share buttons
	 * 
	 * @namespace CrazySquirrel
	 * @class Share
	 * @param {JQuery object} that [JQuery object]
	 * @param {object} settings [object with share setings]
	 */
	$.CrazySquirrel.Share = function(that, settings){
		var i,x;
		/**
		 * Pointer to this object
		 * @type {object}
		 */
		var base = this;
		base.that = that.get(0);
		
		/**
		 * Get data attributes which belong to tiles
		 * @param  {JQuery object} that [share buttons wrapper]
		 * @return {object} data [object with settings from data attributes]
		 */
		base.getSettingsFromData = function(that){
			var i,j,k,x,y,z;
			var attrs = that.attributes;
			var data;
			if(typeof attrs !== "undefined"){
				for(i = 0; i < attrs.length; i++){
					x = attrs[i].nodeName.toString();
					y = attrs[i].nodeValue.toString();
					y = y.split(",");
					for(j=0;j<y.length;j++){
						if(y[j] === "Y" || y[j] === "true"){y[j] = true;} else 
						if(y[j] === "N" || y[j] === "false"){y[j] = false;} else 
						if(!isNaN(parseFloat(y[j])) && isFinite(y[j])){y[j] = parseInt(y[j]);}
					}
					if(y.length === 1){
						y = y[0];
					}
					
					if(x.indexOf("data-csshare") !== -1){
						x = x.split("-");
						for(j=1;j<x.length;j++){
							z = x[j].split("_");
							if(z.length>1){
								for(k=1;k<z.length;k++){
									z[k] = z[k].slice(0,1).toUpperCase() + z[k].slice(1).toLowerCase();
								}
							}
							z = z.join("");
							x[j] = z;
						}
						switch(x[2]){
							default:
								if(typeof data === "undefined"){data={};}
								data[x[2]] = y;
						}
					}
				}
			}
			return data;
		};
		
		var data = base.getSettingsFromData(base.that);
		
		base.settings = {};
		
		for(i in $.CrazySquirrel.Share.defaultSettings){
			if($.CrazySquirrel.Share.defaultSettings.hasOwnProperty(i)){
				switch(i){
					default:
						if(typeof settings !== "undefined" && typeof settings[i] !== "undefined"){
							base.settings[i] = settings[i];
						}else if(typeof data !== "undefined" && typeof data[i] !== "undefined"){
							base.settings[i] = data[i];
						}else{
							base.settings[i] = $.CrazySquirrel.Share.defaultSettings[i];
						}
					break;
				}
			}
		}
		
		x="";
		for(i=0;i<base.settings.types.length;i++){
			x+="<div class='csshare-item is-"+base.settings.types[i]+"' data-csshare-type='"+base.settings.types[i]+"'></div>";
		}
		$(base.that).append("<div class='csshare'>"+x+"</div>");
		
		/**
		 * Share event function
		 */
		$(base.that).find(".csshare-item").click(
			function(){
				var type = $(this).attr('data-csshare-type');
				var title;
				var description;
				var img;
				var u;
				var url;
				var chars;
				var k;
				
				if($(this).closest('.csshare').attr('data-csshare-title')){
					title = $(this).closest('.tiles__item').attr('data-csshare-title');
				}else if($("meta[type='og:title']").size()>0){
					title = $("meta[type='og:title']").attr("content");
				}else if($(".og-title").size()>0){
					title = $(".og-title").attr("data-title");
				}else{
					title = $("title").text();
				}
				
				if($(this).closest('.csshare').attr('data-csshare-description')){
					description = $(this).closest('.tiles__item').attr('data-csshare-description');
				}else if($("meta[type='og:description']").size()>0){
					description = $("meta[type='og:description']").attr("content");
				}else if($("meta[type='description']").size()>0){
					description = $("meta[type='description']").attr("content");
				}else if($(".og-description").size()>0){
					description = $(".og-description").attr("data-description");
				}else{
					description = "";
				}
				
				if($(this).closest('.csshare').attr('data-csshare-image')){
					img = $(this).closest('.tiles__item').attr('data-csshare-image');
				}else if($("meta[type='og:image']").size()>0){
					img = $("meta[type='og:image']").attr("content");
				}else if($(".og-image").size()>0){
					img = $(".og-image").attr("data-image");
				}else if($(".logo img").size()>0){
					img = 'http://'+location.host+$("img:first").attr("src");
				}
				
				if($(this).closest('.csshare').attr('data-csshare-url')){
					u = $(this).closest('.csshareisGridHasPlace').attr('data-csshare-url');
				}else{
					u = location.href;
				}
				
				if(type === "print"){
					print();
				}else if(type === "email"){
					location.href="mailto:?subject="+title+"&body="+description+"\r\n"+u;
				}else{
					url = '';
					chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
					k = '';
					for( var i=0; i < 5; i++ ){
						k += chars.charAt(Math.floor(Math.random() * chars.length));
					}
				
					url = '';
					url += 'http://share.pluso.ru/process?';
					url += 'act=share';
					url += '&u='+encodeURIComponent(u);
					url += '&w='+screen.width;
					url += '&h='+screen.height;
					url += '&ref=';
					url += '&uid=1364166423835';
					url += '&k='+k;
					url += '&type='+type;
					url += '&t='+encodeURIComponent(title);
					url += '&s='+encodeURIComponent(description);
					url += '&img='+encodeURIComponent(img);
				
					window.open(url,type, 'toolbar=0,status=0,width=626,height=436');
					
				}
				
				return false;
			}
		);
	};
	
	/**
	 * Default share settings
	 * @type {Object}
	 */
	$.CrazySquirrel.Share.defaultSettings = {
		types: ["twitter","facebook","vkontakte","print"]
	};
	
	/**
	 * CSTiles plugin registration
	 *
	 * @namespace fn
	 * @param {object} options [object with share buttons settings]
	 */
	$.fn.CSShare = function (options) {
		return this.each(function () {
			(new $.CrazySquirrel.Share($(this), options));
		});
	};
	
})( jQuery );