$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.topJS();
			this.b08List();
			this.b08Scroll();
			this.parallaxTop();
		},
		topJS: function (){
			$(window).on('load', function () {
				new WOW().init();
				$('.dots').fadeIn();
				var $li_left = $('.idx-slider-left li');
				var $li_right = $('.idx-slider-right li');
				$li_left.first().addClass('now');
				$li_right.first().addClass('now');
				$('.idx-slider').fadeIn();
				$('.idx-main-ctn').show();
				function main_silder() {
					$('.now').each(function(index){
						var $this = $(this);
						var $next_left = $this.next().length > 0 ? $this.next() : $li_left.first();
						var $next_right = $this.next().length > 0 ? $this.next() : $li_right.first();
						$next_left.addClass('next');
						$next_right.addClass('next');
						setTimeout(function(){
							$next_left.addClass('now').removeClass('next');
							$next_right.addClass('now').removeClass('next');
							$this.removeClass('now');
						}, 2000);
					});
				}
				var loopMain = setInterval(function() {main_silder()}, 2000);
			});
		},
		parallaxTop: function() {
			// Init ID array item of Parallax element
			const arrItemParallaxTopID = ['#dots-1', '#dots-2', '#dots-3', '#dots-4', '#dots-5'];
			// Loop ArrayID
			for (var i = 0; i < arrItemParallaxTopID.length; i++) {
				// Get list element parallax in ArrayID
				var listItemParallax = $(arrItemParallaxTopID[i]).find('li');
				for (var j = 0; j < listItemParallax.length; j++) {
					// Init Parallax
					var IDItemParallax = document.getElementById(listItemParallax[j].id);
					new Parallax(IDItemParallax);
				}
			}
		},
		b08List : function() {
			$.ajax({
			'url' : 'column/_custom/',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
					var $li = $('<li><a href="column/'+val.url+'"><span>'+val.date+'</span>'+tlt+'</a></li>');
					$li.appendTo('.b08-list ul');

				});
			} 
			});
		},
		b08Scroll:function (){
			$('.b08-scroll').mCustomScrollbar({
				theme: 'dark-thin'
			});
		},
	};
	
	obj.init();
	
});