/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'SocMed\'">' + entity + '</span>' + html;
	}
	var icons = {
		'socmed-email': '&#xe600;',
		'socmed-rss': '&#xe601;',
		'socmed-facebook': '&#xe602;',
		'socmed-fb': '&#xe602;',
		'socmed-facebook-2': '&#xe603;',
		'socmed-fb-2': '&#xe603;',
		'socmed-twitter': '&#xe604;',
		'socmed-tumblr': '&#xe605;',
		'socmed-youtube': '&#xe606;',
		'socmed-dribbble': '&#xe607;',
		'socmed-linkedin': '&#xe608;',
		'socmed-instagram': '&#xe609;',
		'socmed-pinterest': '&#xe60a;',
		'socmed-pinterest-2': '&#xe60b;',
		'socmed-googleplus': '&#xe60c;',
		'socmed-path': '&#xe60d;',
		'socmed-github': '&#xe60e;',
		'socmed-dropbox': '&#xe60f;',
		'socmed-behance': '&#xe610;',
		'socmed-foursquare': '&#xe611;',
		'socmed-vimeo': '&#xe612;',
		'socmed-metacafe': '&#xe613;',
		'socmed-flickr': '&#xe614;',
		'socmed-windows7': '&#xe615;',
		'socmed-windows': '&#xe615;',
		'socmed-windows8': '&#xe616;',
		'socmed-microsoft': '&#xe617;',
		'socmed-technorati': '&#xe618;',
		'socmed-evernote': '&#xe619;',
		'socmed-delicious': '&#xe61a;',
		'socmed-reddit': '&#xe61b;',
		'socmed-stumbleupon': '&#xe61c;',
		'socmed-spotify': '&#xe61d;',
		'socmed-soundcloud': '&#xe61e;',
		'socmed-grooveshark': '&#xe61f;',
		'socmed-wordpress': '&#xe620;',
		'socmed-wp': '&#xe620;',
		'socmed-drupal': '&#xe621;',
		'socmed-blogger': '&#xe622;',
		'socmed-joomla': '&#xe623;',
		'socmed-wikipedia': '&#xe624;',
		'socmed-slashdot': '&#xe625;',
		'socmed-digg': '&#xe626;',
		'socmed-paypal': '&#xe627;',
		'socmed-aboutme': '&#xe628;',
		'socmed-myspace': '&#xe629;',
		'socmed-lastfm': '&#xe62a;',
		'socmed-forrst': '&#xe62b;',
		'socmed-quora': '&#xe62c;',
		'socmed-stackoverflow': '&#xe62d;',
		'socmed-msn': '&#xe62e;',
		'socmed-picasa': '&#xe62f;',
		'socmed-disdus': '&#xe630;',
		'socmed-skype': '&#xe631;',
		'socmed-hangout': '&#xe632;',
		'socmed-yahoomessenger': '&#xe633;',
		'socmed-ym': '&#xe633;',
		'socmed-yahoo': '&#xe634;',
		'socmed-bing': '&#xe635;',
		'socmed-scribd': '&#xe636;',
		'socmed-newsvine': '&#xe637;',
		'socmed-yelp': '&#xe638;',
		'socmed-apple': '&#xe639;',
		'socmed-android': '&#xe63a;',
		'socmed-blackberry': '&#xe63b;',
		'socmed-icq': '&#xe63c;',
		'socmed-friendfeed': '&#xe63d;',
		'socmed-amazon': '&#xe63e;',
		'socmed-squidoo': '&#xe63f;',
		'socmed-xing': '&#xe640;',
		'socmed-viddler': '&#xe641;',
		'socmed-feedburner': '&#xe642;',
		'socmed-photobucket': '&#xe643;',
		'socmed-etsy': '&#xe644;',
		'socmed-ebay': '&#xe645;',
		'socmed-mrwong': '&#xe646;',
		'socmed-slideshare': '&#xe647;',
		'socmed-deviantart': '&#xe648;',
		'socmed-aol': '&#xe649;',
		'socmed-500px': '&#xe64a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/socmed-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
