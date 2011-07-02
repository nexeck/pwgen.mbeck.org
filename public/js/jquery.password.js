/*
 * password 1.0 - Random password generator for jQuery
 *
 * Copyright (c) 2009 jQuery Howto
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * URL:
 *   http://jquery-howto.blogspot.com
 *
 * Author URL:
 *   http://me.boo.uz
 *
 */
(function($){
	$.extend({
	  password: function (length, lc, uc, number, special) {
		var iteration = 0;
		var password = "";
		var randomNumber;
		if(length == undefined){
			var length = 8;
		}
		if(lc == undefined){
			var lc = false;
		}
		if(uc == undefined){
			var uc = false;
		}
		if(number == undefined){
			var number = false;
		}
		if(special == undefined){
			var special = false;
		}
		if ((lc == false) && (uc == false) && (number == false) && (special == false)) {
			lc = true;
			uc = true;
			number = true;
		}
		while(iteration < length){
			randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
			if(!lc){
				if ((randomNumber >=97) && (randomNumber <=122)) { continue; }
			}
			if(!uc){
				if ((randomNumber >=65) && (randomNumber <=90)) { continue; }
			}
			if(!number){
				if ((randomNumber >=48) && (randomNumber <=57)) { continue; }
			}
			if(!special){
				if ((randomNumber >=33) && (randomNumber <=47)) { continue; }
				if ((randomNumber >=58) && (randomNumber <=64)) { continue; }
				if ((randomNumber >=91) && (randomNumber <=96)) { continue; }
				if ((randomNumber >=123) && (randomNumber <=126)) { continue; }
			}
			iteration++;
			password += String.fromCharCode(randomNumber);
		}
		return password;
	  }
	});
})(jQuery);