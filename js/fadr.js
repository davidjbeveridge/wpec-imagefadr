/**
 * @author David Beveridge <davidjbeveridge@gmail.com>
 */
(function($){
	$(document).ready(function(docLoad){
		var fadr = {};
		fadr.mainImageLink = $('.preview_link').eq(0);
		fadr.mainImageElement = $('img',fadr.mainImageLink).eq(0);
		fadr.galleryBox = new $('.wpcart_gallery').eq(0);
		var tempImage = new Image();
		tempImage.onload = function(e)	{
			fadr.galleryBox.append($('\
			<a href="' + fadr.mainImageLink.attr('href') + '" style="display: inline-block; overflow: hidden; width: ' + fadr.galleryBox.find('img').eq(0).width() + 'px; height: ' + fadr.galleryBox.find('img').eq(0).height() + 'px;">\
				<img src="'+fadr.mainImageLink.attr('href')+'" style="width: ' + fadr.galleryBox.find('img').eq(0).width()*2 + 'px; height: auto; margin: -50%;" />\
			</a>'));
			
			fadr.galleryLinks = $('a',fadr.galleryBox);
			fadr.mainImageLink.attr('target','_blank');
			
			fadr.galleryLinks.click(function(e){
				e.preventDefault();
				var newImgHref = $(this).attr('href');
				var tempImage2 = new Image;
				tempImage2.onload = function(imgEvt)	{
					fadr.mainImageElement.fadeOut('fast',function(){
						fadr.mainImageElement
							.attr('src',newImgHref)
							.fadeIn('fast')
							.css({height: 'auto'});
					});
				};
				tempImage2.src = newImgHref;
				return false;
			});
			
			fadr.mainImageLink.removeAttr('href');
			
		}
		tempImage.src = fadr.galleryBox.find('img').eq(0).attr('src');
		
	});
})(jQuery);
