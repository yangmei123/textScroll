/**
 * 
 * @authors lml
 * @date    2018-01-02 09:59:06
 * @version $Id$
 */
// jquery
//  $(function(){
// 	// 新闻详情侧边栏滚动
// 	$('ul').append($('ul > li').clone(true));
// 	var height = $('ul > li').height();
// 	var timer = setInterval(function() {
// 		var top = $('.scroll-con').css('top');
// 		var topValue = Number(top.substr(0,top.indexOf('px')));
// 		if (topValue === -height*10) {
// 			topValue = 0;
// 		}
// 		topValue--;
// 		$('.scroll-con').css('top', topValue + 'px');
// 	}, 50);
// });

// javascript
// 页面所有内容加载完，包括媒体图片
// window.onload = function() {
// 	var doc = document;
// 	var ulObj = doc.getElementById('scroll');
// 	var innerHtml = ulObj.innerHTML;
// 	var liObj = ulObj.getElementsByTagName('li');
// 	var liLength = liObj.length;
// 	var liHeight = liObj[0].offsetHeight;
// 	ulObj.innerHTML = innerHtml + innerHtml;
// 	var timer = setInterval(function() {
// 		var top = ulObj.offsetTop;
// 		var topValue = Number(top);
// 		if (topValue === -liHeight * liLength) {
// 			topValue = 0;
// 		}
// 		topValue--;
// 		ulObj.style.top = topValue + 'px';
// 	}, 50);
// }

// animation动画
window.onload = function() {
	var doc = document;
	var ulObj = doc.getElementById('scroll');
	var innerHtml = ulObj.innerHTML;
	ulObj.innerHTML = innerHtml + innerHtml;
}

