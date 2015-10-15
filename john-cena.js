/*
 * John CenaPlugin 1.0
 * Copyright 2015, ZDVELOPER (Zedd)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * Shamelessly Based on the Raptorize Kit
 */


(function ($) {

	$.fn.cena = function (options) {

			//Yo' defaults
			var defaults = {
				enterOn: 'click', //timer, konami-code, click
				delayTime: 5000 //time before Cena attacks on timer mode
			};

			//Extend those options
			var options = $.extend(defaults, options);

			return this.each(function () {

				var _this = $(this);
				var audioSupported = false;
				//Stupid Browser Checking which should be in jQuery Support
				if ($.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit) {
					audioSupported = true;
				}

				//Cena Vars
				var cenaImageMarkup = '<img id="elCena" style="display: none" src="cena.png" />'
				var cenaAudioMarkup = '<audio id="elCenaShriek" preload="auto"><source src="his-name-is-john-cena.mp3" /><source src="his-name-is-john-cena.ogg" /></audio>';
				var locked = false;

				//Append Cena and Style
				$('body').append(cenaImageMarkup);
				if (audioSupported) {
					$('body').append(cenaAudioMarkup);
				}
				var Cena = $('#elCena').css({
					"position": "fixed",
					"bottom": "-700px",
					"right": "0",
					"display": "block"
				})

				// Animating Code
				function init() {
					locked = true;

					//Sound Hilarity
					if (audioSupported) {
						function playSound() {
							document.getElementById('elCenaShriek').play();
						}
						playSound();
					}

					// Movement Hilarity	
					Cena.animate({
						"bottom": "0"
					}, function () {
						$(this).animate({
							"bottom": "-130px"
						}, 100, function () {
							var offset = (($(this).position().left) + 400);
							$(this).delay(300).animate({
								"right": offset
							}, 2200, function () {
								Cena = $('#elCena').css({
									"bottom": "-700px",
									"right": "0"
								})
								locked = false;
							})
						});
					});
				}


				//Determine Entrance
				if (options.enterOn == 'timer') {
					setTimeout(init, options.delayTime);
				} else if (options.enterOn == 'click') {
					_this.bind('click', function (e) {
						e.preventDefault();
						if (!locked) {
							init();
						}
					})
				} else if (options.enterOn == 'konami-code') {
					var kkeys = [],
						konami = "38,38,40,40,37,39,37,39,66,65";
					$(window).bind("keydown.Cenaz", function (e) {
						kkeys.push(e.keyCode);
						if (kkeys.toString().indexOf(konami) >= 0) {
							init();
							$(window).unbind('keydown.Cenaz');
						}
					}, true);

				}

			}); //each call
		} //orbit plugin call
})(jQuery);
