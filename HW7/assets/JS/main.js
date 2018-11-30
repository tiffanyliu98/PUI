// JavaScript Document

// Typewriter Effect //

//var str = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
//
//
//var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
//$(spans).hide().appendTo('.css-typing').each(function (i) {
//    $(this).delay(100 * i).css({
//        display: 'inline',
//        opacity: 0
//    }).animate({
//        opacity: 1
//    }, 100);
//});

$(document).ready(function() {
    $('#two').delay(5000);
});

var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

// 	if (this.isDeleting) {
//	this.txt = fullTxt.substring(0, this.txt.length - 1);
//	} else {
 	this.txt = fullTxt.substring(0, this.txt.length + 1);

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
 	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

		setTimeout(function() {
		that.tick();
		}, delta);
	};
	
	function type() {
		
	}
		
		window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		console.log(elements);
	};
	
		setTimeout(function() {
			var elements = document.getElementsByClassName('typewrite2');
			console.log(elements);
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
	}, 2000);
	
		setTimeout(function() {
			var elements = document.getElementsByClassName('typewrite3');
			console.log(elements);
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
	}, 7000);
	
	
	//		// INJECT CSS
//		var css = document.createElement("style");
//		css.type = "text/css";
//		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//		document.body.appendChild(css);