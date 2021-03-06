(function(a) {
	a
			.extend(
					a.fx.step,
					{
						backgroundPosition : function(e) {
							if (e.state === 0 && typeof e.end == "string") {
								var g = a.curCSS(e.elem, "backgroundPosition");
								g = d(g);
								e.start = [ g[0], g[2] ];
								var b = d(e.end);
								e.end = [ b[0], b[2] ];
								e.unit = [ b[1], b[3] ]
							}
							var f = [];
							f[0] = ((e.end[0] - e.start[0]) * e.pos)
									+ e.start[0] + e.unit[0];
							f[1] = ((e.end[1] - e.start[1]) * e.pos)
									+ e.start[1] + e.unit[1];
							e.elem.style.backgroundPosition = f[0] + " " + f[1];
							function d(i) {
								i = i.replace(/left|top/g, "0px");
								i = i.replace(/right|bottom/g, "100%");
								i = i.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
								var h = i
										.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
								return [ parseFloat(h[1], 10), h[2],
										parseFloat(h[3], 10), h[4] ]
							}
						}
					})
})(jQuery);
jQuery(function() {
	jQuery("#jsMenu .jsMenuBar #jf-topmenuhover").css( {
		backgroundPosition : "-20px 35px"
	}).mouseover(function() {
		jQuery(this).stop().animate( {
			backgroundPosition : "(-20px 94px)"
		}, {
			duration : 500
		})
	}).mouseout(function() {
		jQuery(this).stop().animate( {
			backgroundPosition : "(40px 35px)"
		}, {
			duration : 200,
			complete : function() {
				jQuery(this).css( {
					backgroundPosition : "-20px 35px"
				})
			}
		})
	})
});
jQuery(function() {
	jQuery(".left-menu .menu a").stop().animate( {
		marginLeft : "-67px"
	}, 1000);
	jQuery(".left-menu .menu > li").hover(function() {
		jQuery("a", jQuery(this)).stop().animate( {
			marginLeft : "-2px"
		}, 200)
	}, function() {
		jQuery("a", jQuery(this)).stop().animate( {
			marginLeft : "-67px"
		}, 200)
	})
});
function css_browser_selector(n) {
	var a = n.toLowerCase(), i = function(b) {
		return a.indexOf(b) > -1
	}, j = "gecko", l = "webkit", p = "safari", d = "opera", e = "mobile", f = document.documentElement, k = [
			(!(/opera|webtv/i.test(a)) && /msie\s(\d)/.test(a)) ? ("ie ie" + RegExp.$1)
					: i("firefox/2") ? j + " ff2"
							: i("firefox/3.5") ? j + " ff3 ff3_5"
									: i("firefox/3.6") ? j + " ff3 ff3_6"
											: i("firefox/3") ? j + " ff3"
													: i("gecko/") ? j
															: i("opera") ? d
																	+ (/version\/(\d+)/
																			.test(a) ? " "
																			+ d
																			+ RegExp.$1
																			: (/opera(\s|\/)(\d+)/
																					.test(a) ? " "
																					+ d
																					+ RegExp.$2
																					: ""))
																	: i("konqueror") ? "konqueror"
																			: i("blackberry") ? e
																					+ " blackberry"
																					: i("android") ? e
																							+ " android"
																							: i("chrome") ? l
																									+ " chrome"
																									: i("iron") ? l
																											+ " iron"
																											: i("applewebkit/") ? l
																													+ " "
																													+ p
																													+ (/version\/(\d+)/
																															.test(a) ? " "
																															+ p
																															+ RegExp.$1
																															: "")
																													: i("mozilla/") ? j
																															: "",
			i("j2me") ? e + " j2me"
					: i("iphone") ? e + " iphone"
							: i("ipod") ? e + " ipod"
									: i("ipad") ? e + " ipad"
											: i("mac") ? "mac"
													: i("darwin") ? "mac"
															: i("webtv") ? "webtv"
																	: i("win") ? "win"
																			+ (i("windows nt 6.0") ? " vista"
																					: "")
																			: i("freebsd") ? "freebsd"
																					: (i("x11") || i("linux")) ? "linux"
																							: "",
			"js" ];
	c = k.join(" ");
	f.className += " " + c;
	return c
}
css_browser_selector(navigator.userAgent);