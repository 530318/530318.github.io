/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home': '&#xe900;',
		'icon-home3': '&#xe902;',
		'icon-office': '&#xe903;',
		'icon-newspaper': '&#xe904;',
		'icon-pencil': '&#xe905;',
		'icon-droplet': '&#xe90b;',
		'icon-images': '&#xe90e;',
		'icon-camera': '&#xe90f;',
		'icon-headphones': '&#xe910;',
		'icon-music': '&#xe911;',
		'icon-play': '&#xe912;',
		'icon-pacman': '&#xe916;',
		'icon-bullhorn': '&#xe91a;',
		'icon-connection': '&#xe91b;',
		'icon-book': '&#xe91f;',
		'icon-files-empty': '&#xe925;',
		'icon-file-picture': '&#xe927;',
		'icon-file-music': '&#xe928;',
		'icon-file-play': '&#xe929;',
		'icon-copy': '&#xe92c;',
		'icon-stack': '&#xe92e;',
		'icon-price-tag': '&#xe935;',
		'icon-barcode': '&#xe937;',
		'icon-coin-dollar': '&#xe93b;',
		'icon-coin-euro': '&#xe93c;',
		'icon-coin-pound': '&#xe93d;',
		'icon-coin-yen': '&#xe93e;',
		'icon-credit-card': '&#xe93f;',
		'icon-envelop': '&#xe945;',
		'icon-location2': '&#xe948;',
		'icon-compass': '&#xe949;',
		'icon-clock2': '&#xe94f;',
		'icon-alarm': '&#xe950;',
		'icon-bell': '&#xe951;',
		'icon-calendar': '&#xe953;',
		'icon-printer': '&#xe954;',
		'icon-undo2': '&#xe967;',
		'icon-redo2': '&#xe968;',
		'icon-forward': '&#xe969;',
		'icon-reply': '&#xe96a;',
		'icon-bubbles': '&#xe96c;',
		'icon-bubble2': '&#xe96e;',
		'icon-user': '&#xe971;',
		'icon-hour-glass': '&#xe979;',
		'icon-spinner': '&#xe97a;',
		'icon-spinner3': '&#xe97c;',
		'icon-key': '&#xe98d;',
		'icon-lock': '&#xe98f;',
		'icon-unlocked': '&#xe990;',
		'icon-cog': '&#xe994;',
		'icon-cogs': '&#xe995;',
		'icon-hammer': '&#xe996;',
		'icon-magic-wand': '&#xe997;',
		'icon-stats-bars2': '&#xe99d;',
		'icon-mug': '&#xe9a2;',
		'icon-rocket': '&#xe9a5;',
		'icon-lab': '&#xe9aa;',
		'icon-magnet': '&#xe9ab;',
		'icon-bin': '&#xe9ac;',
		'icon-cloud': '&#xe9c1;',
		'icon-attachment': '&#xe9cd;',
		'icon-bookmark': '&#xe9d2;',
		'icon-star-full': '&#xe9d9;',
		'icon-happy': '&#xe9df;',
		'icon-evil': '&#xe9ef;',
		'icon-eject': '&#xea25;',
		'icon-volume-high': '&#xea26;',
		'icon-volume-medium': '&#xea27;',
		'icon-volume-low': '&#xea28;',
		'icon-volume-mute': '&#xea29;',
		'icon-volume-mute2': '&#xea2a;',
		'icon-infinite': '&#xea2f;',
		'icon-shuffle': '&#xea30;',
		'icon-radio-checked2': '&#xea55;',
		'icon-radio-unchecked': '&#xea56;',
		'icon-scissors': '&#xea5a;',
		'icon-table2': '&#xea71;',
		'icon-terminal': '&#xea81;',
		'icon-share2': '&#xea82;',
		'icon-mail4': '&#xea86;',
		'icon-hangouts': '&#xea8e;',
		'icon-facebook': '&#xea90;',
		'icon-facebook2': '&#xea91;',
		'icon-instagram': '&#xea92;',
		'icon-twitter': '&#xea96;',
		'icon-youtube2': '&#xea9e;',
		'icon-steam2': '&#xeaad;',
		'icon-dropbox': '&#xeaae;',
		'icon-github': '&#xeab0;',
		'icon-npm': '&#xeab1;',
		'icon-tumblr': '&#xeab9;',
		'icon-tux': '&#xeabd;',
		'icon-appleinc': '&#xeabe;',
		'icon-finder': '&#xeabf;',
		'icon-android': '&#xeac0;',
		'icon-windows8': '&#xeac2;',
		'icon-soundcloud': '&#xeac3;',
		'icon-skype': '&#xeac5;',
		'icon-wikipedia': '&#xeac8;',
		'icon-flattr': '&#xead5;',
		'icon-foursquare': '&#xead6;',
		'icon-yelp': '&#xead7;',
		'icon-chrome': '&#xead9;',
		'icon-firefox': '&#xeada;',
		'icon-IE': '&#xeadb;',
		'icon-edge': '&#xeadc;',
		'icon-safari': '&#xeadd;',
		'icon-opera': '&#xeade;',
		'icon-file-pdf': '&#xeadf;',
		'icon-file-openoffice': '&#xeae0;',
		'icon-file-word': '&#xeae1;',
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
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
