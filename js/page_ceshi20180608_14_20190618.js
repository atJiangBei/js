+ function() {
	var d = 0,
		j = tt_news_td,
		a, h, c = $(".banner");
	try {
		$("input[name=from]").val(j)
	} catch (g) {}
	$("#J_hot_site_list1").show();
	if (tt_news_mid === "pgzs" || tt_news_mid.indexOf("waitui") > -1) {
		var b = '<input type="hidden" value="1" name="bd_page_type">';
		var f = tt_news_td;
		$("input[name=from]").val(f);
		$(".input-wrap").append(b);
		$(".coolsite").attr("href", "coolsite.html?mid=" + tt_news_mid);
		$(".popover").attr("href", "https://s.click.taobao.com/R8n7ILx");
		$("#hot_banner .banner").attr("href", "https://s.click.taobao.com/R8n7ILx");
		$(".fixedArea").attr("href", "https://s.click.taobao.com/lZyDQKx");
		$(".bottom-fixed .xuan").attr("href", "https://at.umeng.com/0b0jOn");
		$(".logo").html('<img src="img/logo.png" alt="021网址导航">')
	} else {
		$(".logo").html(
			'<h1 style="float: left;line-height: 100%;font-size: .4rem;color: #fff;margin-top: 0.3rem;">021网址导航</h1>');
		$(".baiduwy").attr("href", "http://mini.eastday.com/bd/index.html?qid=bdxxl004")
	}
	if (tt_news_mid != "pgzs") {
		var a = ["jingdong", "aitaobao", "tianmao", "taobao", "juhuasuan"];
		var h = [
			"https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHE4YDk5ER1xOGWV9RWdrV3QieDhhVkoPT24BdVBWQCJ7VxkyEgFTE1sdBxMBVStbFAMSAlEfXRwKIjdVGmtebBM3VR1dHQEXD1wZWyUCFgNRGl8QCxUBVRheJQUSDmXO0q7VloGMle%2FCsYU3ZStYJTIiB1UrWyVdVloIK1kUAxYO&t=W1dCFFlQCxxOGA5OREdcThk%3D",
			"https://s.click.taobao.com/t?e=m%3D2%26s%3DJSUutJ %2FLsYocQipKwQzePDAVflQIoZepK7Vc7tFgwiFRAdhuF14FMfxzF80VOjg3xq3IhSJN6GSjCptECCSdYFdqBgvJFn8KEfU3zIRqvjPpjBxzsv9xDm4Kc1LmmM %2BpsGaURTtF%2Bb3GJe8N%2FwNpGw%3D%3D",
			"https://s.click.taobao.com/t?e=m%3D2%26s%3DSv7Ikq7%2F3pYcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMbqzvR6kV3JLMMgx22UI05bpkB9lQewwHCDPgCtPeFeSl0NHO8C3xJ9snTD4IqlrWBV8qvDg5SGd4gqXglJHiXPLQPEJLPAWAV3WV7X8X8sdyARaEpTliORPf2BYFhAHdBlrXsh%2BArGMnJeePN37QWMpCXOvKDWXxztiz%2FGyyzCeALBjSwYDpslBGmowLxcwJ8fp0ZuXSEt7ieLA807xrFmiZ%2BQMlGz6FQ%3D%3D",
			"https://temai.m.taobao.com/index.htm?pid=mm_365540119_402800381_108352050359",
			"https://s.click.taobao.com/t?e=m%3D2%26s%3DkiHEw4sfdHIcQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2WY%2F3Q2xCkZ8ghoTQriFyXxEqQyQtN8y%2FkSK6GxaUroSL%2FKdMZras2RfmQhhIK%2FDAp550gEEG823keMqUwSQcLSwn1IXvusdyogaseAKBk0cEzJFLUun%2BFFz3EwasN3Stkv6EqScJ3iphLg5lgpkb0fGDmntuH4VtA%3D%3D"
		];
		for (d = 0; d < a.length; d++) {
			$(".J-qid-" + a[d]).attr("href", h[d])
		}
	}
}();
if (!Array.prototype.hasOwnProperty("contains")) {
	Array.prototype.contains = function(a) {
		return RegExp(a).test(this)
	}
}

function con(a) {
	console.log(a)
}

function getNewStr(b, h, d) {
	if (b && h && h.length) {
		var a = h.length;
		h.sort(function(j, i) {
			return i.length - j.length
		});
		if (!d) {
			d = 0
		}
		if (d == a || h[d] == "..") {
			return b
		} else {
			var f = new RegExp(h[d], "gi");
			var c = b;
			var g = c.toLowerCase().indexOf(h[d].toLowerCase());
			var e = b.substring(g, g + h[d].length);
			return getNewStr(b.replace(f, "<em>" + e + "</em>"), h, ++d)
		}
	} else {
		return ""
	}
}

function changeWord(a) {
	$("#J_search_input").val(a)
}

function bdSearch(d) {
	var b = d.q,
		g = d.s,
		a = g.length > 5 ? 5 : g.length,
		e = $searchResult.children(".search-result-list"),
		f = tt_news_mid;
	if (a == 0) {
		return
	}
	e.empty();
	for (var c = 0; c < a; c++) {
		var h = getNewStr(g[c], [b]);
		if ((f != "pgzs") && (f.indexOf("waitui") <= -1)) {
			e.append('<li class="search-result-item"><a href="http://mini.eastday.com/c/170921000925a56.html?qid=smqb04&q=' + g[
				c] + '&from=wm279148">' + h + '</a><div class="ttp" onclick="changeWord(\'' + g[c] + "');\"></div></li>")
		} else {
			e.append('<li class="search-result-item"><a href="http://mini.eastday.com/c/170921000925a56.html?qid=smqb02&q=' + g[
				c] + '&from=wm279148">' + h + '</a><div class="ttp" onclick="changeWord(\'' + g[c] + "');\"></div></li>")
		}
	}
	$searchResult.show()
}
$(".search-btn").on("click", function() {
	var a = tt_news_mid;
	if (($("#J_search_input").val() == "") && (a != "pgzs") && (a.indexOf("waitui") <= -1)) {
		window.open("http://mini.eastday.com/c/170921000925a56.html?qid=smqb04&from=wm279148");
		return false
	} else {
		if (($("#J_search_input").val() == "") && ((a == "pgzs") || (a.indexOf("waitui") > -1))) {
			window.open("http://mini.eastday.com/c/170921000925a56.html?qid=smqb02&from=wm279148");
			return false
		}
	}
});
$(function() {
	var a = tt_news_mid;
	if ((a == "pgzs") || a.indexOf("waitui") > -1) {
		$(".input-wrap").append('<input type="hidden" value="smqb02" name="qid"/>')
	} else {
		$(".input-wrap").append('<input type="hidden" value="smqb04" name="qid"/>')
	}
});
$(function() {
	localStorage.setItem("zyqType", "toutiao");
	FastClick.attach(document.body);
	var ay = "//ccms.dftoutiao.com/backend/api/777f39c173/777f39c173_330_944_v1_jsonp.json",
		an = "//toutiao.eastday.com/toutiao_h5/NextJP",
		h = "//toutiao.eastday.com/getwapdata/ad",
		E = "//toutiao.eastday.com/getwapdata/advshow",
		A = "//021tj.dftoutiao.com/m021log/getuid",
		r = "//021tj.dftoutiao.com/m021log/record",
		j = "//021tj.dftoutiao.com/m021log/active",
		k = "http://gxjifen.dftoutiao.com/index/survey_rec_data",
		Y = "https://softwords.dftoutiao.com/partner/list",
		aB = O(),
		z = d(),
		N = "",
		x = ah(),
		ap = "toutiao",
		Z = $("#J_location"),
		V = $("#J_tt_news"),
		M = $("#J_ttnews_list"),
		s = V.children(".tt-news-nav"),
		D = $("#J_ttnews_nav_list"),
		ad = D.find(".ttnews-tabs"),
		G = $("#J_loading"),
		K = $(".close"),
		U = $(".popover-close"),
		H = $(".fixedArea"),
		v = s.outerHeight(),
		a = V.offset().top - v,
		B = true,
		n = null,
		F = $("#J_bg_loading"),
		l = new WebStorageCache(),
		ak = $.cookie("idx_" + ap, 0);
	pgNum = 1, pgguanggaosx = 1, newsTypeArr = [], readUrl = "", uedItems = [], DSP_H5 = {};
	var b = {};
	var ae = 0;
	ttNewsNavSwiper = new Swiper("#J_ttnews_nav_container", {
		freeMode: true,
		speed: 500,
		slidesPerView: 5.5
	});
	m_text = new Swiper("#J_yure_nav_container", {
		freeMode: true,
		speed: 500,
		slidesPerView: 5.5,
		observer: true,
		observeParents: true
	});
	(function() {
		var aE = $("#J_search_input"),
			aD = $("#J_search_clear");
		$searchResult = $("#J_search_result"), $closeSearchResult = $("#J_close_search_result");
		aE.on("keyup", function() {
			if ($.trim(aE.val()) !== "") {
				aD.show();
				aC()
			} else {
				aD.hide();
				$searchResult.hide()
			}
		});
		aD.on("click", function(aF) {
			aE.val("");
			aD.hide();
			$searchResult.hide();
			aF.preventDefault()
		});
		$closeSearchResult.on("click", function(aF) {
			$searchResult.hide();
			aF.preventDefault()
		});

		function aC() {
			var aG = $.trim(aE.val());
			var aH = tt_news_td;
			if (!aG) {
				return
			}
			var aF = {
				wd: aG,
				p: "3",
				ie: "utf-8",
				json: "1",
				from: aH,
				cb: "bdSearch"
			};
			$.ajax({
				async: false,
				url: "https://m.baidu.com/su",
				type: "GET",
				dataType: "jsonp",
				jsonp: "jsoncallback",
				data: aF,
				timeout: 5000,
				success: function() {},
				error: function() {}
			})
		}
	})();
	(function() {
		var aC = new Swiper("#J_hot_site_list", {
			pagination: "#J_hot_site_pagination"
		});
		new Swiper("#J_hot_site_list1", {
			pagination: "#J_hot_site_pagination1"
		})
	})();
	(function() {
		var aC = new Swiper("#J_tabs_container", {
			speed: 300,
			autoHeight: true,
			onSlideChangeStart: function() {
				var aD = $("#J_tabs_container").find(".swiper-slide").eq(aC.activeIndex),
					aE = aD.parent();
				aE.height(aD.height());
				$(".cs-tabs").children(".active").removeClass("active");
				$(".cs-tabs").children().eq(aC.activeIndex).addClass("active")
			}
		});
		$(".cs-tabs a").on("click", function(aE) {
			aE.preventDefault();
			var aD = $(this);
			$(".cs-tabs").children(".active").removeClass("active");
			aD.addClass("active");
			aC.slideTo(aD.index())
		});
		$(".J-more").on("click", function(aE) {
			aE.preventDefault();
			var aF = this,
				aD = $(this);
			aD.parent().parent().parent().css("height", "auto");
			if (aD.hasClass("active")) {
				aD.parent().next().hide();
				aD.removeClass("active")
			} else {
				aD.parent().next().show();
				aD.addClass("active")
			}
			$(".J-more").each(function(aG, aH) {
				var aI = $(aH);
				if (aI.hasClass("active") && aH !== aF) {
					aI.parent().next().hide();
					aI.removeClass("active")
				}
			})
		})
	})();
	Q();

	function Q() {
		C();
		try {
			$(".J-has-channel").each(function(aE, aF) {
				var aG = $(aF);
				aG.attr("href", aG.attr("href") + "?qid=" + tt_news_qid)
			})
		} catch (aC) {}
		try {
			readUrl = l.get("read_url_all");
			if (!readUrl) {
				readUrl = ""
			}
		} catch (aC) {}
		try {
			ao()
		} catch (aC) {}
		try {} catch (aC) {}
		y("toutiao");
		if (!x) {
			x = (+new Date()) + Math.random().toString(10).substring(2, 6);
			$.cookie("user_id", x, {
				expires: 365 * 5,
				path: "/"
			})
		}
		av();
		ad.each(function() {
			var aF = $(this),
				aE = aF.data("type");
			if (aE !== "meinv" && aE !== "nuanwen") {
				newsTypeArr.push(aE)
			}
		});
		var aD = g();
		if (aD) {
			X(aD)
		} else {
			au()
		}
		s.children(".home").on("click", function(aE) {
			aE.preventDefault();
			u(200)
		});
		$(window).on("scroll", function() {
			var aG = V.offset().top,
				aH = m(),
				aE = $("#J_footer").offset().top,
				aF = q();
			I(aH);
			if (aH + v >= aG) {
				if (B) {
					B = false;
					s.css("zIndex", 9);
					s.stop().animate({
						opacity: 1,
						top: "0px"
					}, 200, "linear")
				}
			} else {
				if (!B) {
					B = true;
					s.stop().animate({
						opacity: 0,
						top: "-" + v + "px"
					}, 100, "linear", function() {
						s.css("zIndex", -1)
					})
				}
			}
			if (aH + aF >= aE && !B) {
				clearTimeout(n);
				n = setTimeout(function() {
					ai()
				}, 200)
			}
		});
		$(window).trigger("scroll");
		ad.on("click", function() {
			var aG = $(this),
				aE = aG.parent().index();
			if (aG.hasClass("active")) {
				return false
			}
			ap = aG.data("type");
			localStorage.setItem("zyqType", ap);
			document.cookie = "userId=" + ap;
			ak = $.cookie("idx_" + ap, Number);
			ad.removeClass("active");
			aG.addClass("active");
			ttNewsNavSwiper.slideTo(aE - 2, 200, false);
			var aF = ab();
			if (aF) {
				$("body").scrollTop(aF)
			} else {
				$("body").scrollTop(a + 4)
			}
			var aH = c();
			if (aH && l.get("rowkey_" + ap)) {
				M.html(aH)
			} else {
				y()
			}
		});
		M.on("click", "a", function() {
			var aF = $(this),
				aE = aF.attr("href").split("?")[0];
			if (aF.hasClass("norecord")) {
				return
			}
			aE = aE.substring(aE.lastIndexOf("/") + 1, aE.indexOf(".html"));
			p(aE, aF.data("type"), aF.data("subtype"))
		});
		M.on("click", ".J-promote-news", function() {
			var aE = $(this);
			aa(aE.data("advid"), aE.attr("href"))
		});
		M.on("click", ".dspads", function(aJ) {
			aJ.preventDefault();
			var aM = $(this);
			var aH = aM.find("a").attr("href");
			var aE = aM.find("a").attr("data-isclickurl");
			var aL = aM.find("a").attr("data-clickurl");
			var aF = (aL && aL.split("@@"));
			var aN = aF.length;
			var aK = null;
			var aI = 0;
			var aG = 0;
			if (Number(aE) === 1) {
				for (aG = 0; aG < aN; aG++) {
					aK = new Image();
					aK.src = aF[aG];
					aK.onerror = function() {
						aI++;
						if (aI === aN) {
							window.location.href = aH
						}
					};
					aK.onload = function() {
						aI++;
						if (aI === aN) {
							window.location.href = aH
						}
					}
				}
			} else {
				window.location.href = aH
			}
		});
		K.on("click", function(aG) {
			var aF = $(this);
			if (aF.parent().hasClass("fixedArea")) {
				var aE = new Date().toLocaleDateString();
				$.cookie("fixedAreaT", aE, {
					expires: 1
				})
			}
			aF.parent().hide();
			aG.preventDefault();
			aG.stopPropagation()
		});
		U.on("click", function(aE) {
			$(".popover-bg").hide();
			aE.preventDefault();
			aE.stopPropagation()
		});
		H.on("click", function() {
			var aE = new Date().toLocaleDateString();
			$.cookie("fixedAreaT", aE, {
				expires: 1
			});
			$(this).addClass("hidden")
		});
		w()
	}

	function C() {
		var aD = window.scrollY;
		if (Math.abs(ae - aD) < 20) {
			return
		}
		ae = aD;
		var aK = window.innerHeight;
		var aF = $(".dspads");
		if (aF.length > 0) {
			var aI = aF.eq(0).height() / 2;
			for (var aH = 0; aH < aF.length; aH++) {
				var aJ = aF.eq(aH).offset().top;
				if (aJ < (aD + aK - aI) && aJ > (aD)) {
					var aG = aF.eq(aH);
					var aC = aG.find("a").attr("data-inviewbackurl");
					var aE = aG.find("a").attr("data-mark");
					if (aE in b) {
						return
					} else {
						W(aC);
						aG.find("a").attr("data-mark", "D" + aH);
						b["D" + aH] = true
					}
				}
			}
		}
	}

	function aj(aC) {
		if (aC < 10) {
			aC = "0" + aC
		}
		return aC
	}

	function ao() {
		$.ajax({
			url: k,
			dataType: "jsonp",
			jsonpCallback: "flightHandler_survey_data",
			success: function(aC) {
				uedItems = aC
			}
		})
	}
	pgguanggaoxl = {};
	h5_id = 1;

	function J(aC) {
		if (pgguanggaoxl[ap]) {
			pgguanggaoxl[ap]++
		} else {
			pgguanggaoxl[ap] = 1
		}
		z = az();
		$.ajax({
			url: Y,
			type: "GET",
			data: {
				type: ap,
				uid: x,
				os: z,
				pgnum: pgguanggaoxl[ap],
				adnum: 1,
				adtype: 1236,
				dspver: "1.0.1",
				qid: tt_news_qid,
				newstype: "eg:ad",
				readhistory: readUrl,
				jsonpcallback: "jsonp"
			},
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			timeout: 8000,
			success: function(aE) {
				var aF = $("#" + aC);
				if (aE.data.length < 1) {
					return
				}
				var aG = aE.data[0];
				var aD = aF.html();
				if (aG) {
					aD = aD.replace("{url}", aG.url);
					aD = aD.replace("{clickbackurl}", aG.clickbackurl);
					aD = aD.replace("{inviewbackurl}", aG.inviewbackurl);
					aD = aD.replace("{isclickbackurl}", aG.isclickbackurl);
					aD = aD.replace("{topic}", aG.topic);
					aD = aD.replace("{date}", aG.date);
					aD = aD.replace("{source}", aG.source);
					aD = aD.replace("{lbimg_0_src}", aG.lbimg[0]["src"]);
					aF.html(aD);
					aF.removeClass("dsp_h5_no");
					aF.removeClass(".dsp_h5_" + ap);
					aF.css("display", "block")
				}
				if (aG.showbackurl) {
					ax(aG.showbackurl)
				}
			}
		})
	}

	function aa(aE, aD) {
		var aC = o();
		$.ajax({
			url: h,
			dataType: "jsonp",
			data: {
				qid: tt_news_qid || "null",
				uid: x || "null",
				loginid: "null",
				softtype: "news",
				softname: "eastday_wapnews",
				newstype: "ad",
				from: "null",
				to: aD || "null",
				os_type: z || "null",
				browser_type: aB || "null",
				pixel: aC.w + "*" + aC.h,
				ime: "null",
				refer: aA() || "null",
				adv: aE || "null"
			},
			jsonp: "jsonpcallback",
			success: function(aF) {}
		})
	}

	function ag(aE, aD) {
		var aC = o();
		$.ajax({
			url: E,
			dataType: "jsonp",
			data: {
				qid: tt_news_qid || "null",
				uid: x || "null",
				loginid: "null",
				softtype: "news",
				softname: "eastday_wapnews",
				newstype: "ad",
				from: "null",
				advurl: aD || "null",
				os_type: z || "null",
				browser_type: aB || "null",
				fr_url: "null",
				pixel: aC.w + "*" + aC.h,
				ime: "null",
				adv: aE || "null"
			},
			jsonp: "jsonpcallback",
			success: function(aF) {}
		})
	}

	function o() {
		var aD = window.screen.width;
		var aC = window.screen.height;
		return {
			w: aD,
			h: aC
		}
	}

	function aA() {
		var aC = "";
		try {
			aC = window.top.document.referrer
		} catch (aE) {
			if (window.parent) {
				try {
					aC = window.parent.document.referrer
				} catch (aD) {
					aC = ""
				}
			}
		}
		if (aC === "") {
			aC = document.referrer
		}
		return aC
	}

	function av() {
		$.ajax({
			url: j,
			data: {
				param: tt_news_qid + "\t" + x + "\t" + z + "\t" + aB
			},
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function(aC) {},
			error: function(aD, aC) {
				console.error(aC)
			}
		})
	}

	function w() {
		var aD = $("body"),
			aF = $("#J_top"),
			aE = $("#J_hot_site"),
			aC = $("#J_famous_site");
		aF.on("click", "[data-tjname]", function(aK) {
			aK.stopPropagation();
			var aJ = $(this),
				aI = aJ.data("tjname"),
				aH = aJ.attr("href"),
				aG = "null";
			aF.find("[data-tjname]").each(function(aL, aM) {
				if ($(this).data("tjname") == aI) {
					aG = aL + 1;
					return false
				}
			});
			i(aI, aH, aG)
		});
		aE.on("click", "[data-tjname]", function(aK) {
			var aJ = $(this),
				aI = aJ.data("tjname"),
				aH = aJ.attr("href"),
				aG = "null";
			aE.find("[data-tjname]").each(function(aL, aM) {
				if ($(this).data("tjname") == aI) {
					aG = aL + 1;
					return false
				}
			});
			i(aI, aH, aG)
		});
		aD.on("click", ".dbeleven-gg", function(aK) {
			aK.preventDefault();
			var aJ = $(this),
				aI = aJ.data("tjname"),
				aH = aJ.attr("href"),
				aG = "null";
			i(aI, aH, aG, function() {
				window.location.href = aH
			})
		});
		aC.on("click", "[data-tjname]", function(aL) {
			var aK = $(this),
				aJ = aK.data("tjname"),
				aH = aK.attr("href"),
				aI = aC.find(".J-group"),
				aG = aK.data("idx");
			if (!aG) {
				aG = 0;
				aI.each(function(aP) {
					var aO = $(this).find("[data-tjname]"),
						aM = aO.length,
						aN = false;
					aO.each(function(aQ) {
						if ($(this).data("tjname") == aJ) {
							aG = aQ + 1;
							aN = true;
							return false
						}
					});
					if (!aN) {
						aI.next().each(function(aQ) {
							var aR = $(this).find("[data-tjname]");
							aR.each(function(aS) {
								if ($(this).data("tjname") == aJ) {
									aG = aM + aS + 1;
									return false
								}
							})
						})
					}
				})
			}
			i(aJ, aH, aG)
		})
	}

	function i(aG, aC, aJ, aL) {
		var aD = document.referer,
			aE = aG ? aG.split(",") : [],
			aI = aE.length,
			aH = aE[aI - 1],
			aK = "";
		if (!aC || aC == "javascript:;") {
			aC = "null"
		}
		if (!aD) {
			aD = "null"
		}
		aK += tt_news_qid + "\t" + x + "\t" + z + "\t" + aB + "\t";
		for (var aF = 0; aF < 3; aF++) {
			if (aE[aF] && aE[aF + 1]) {
				aK += aE[aF] + "\t"
			} else {
				aK += "null\t"
			}
		}
		aK += aH + "\t" + aJ + "\t" + aC;
		f(encodeURI(aK), aL)
	}

	function f(aD, aC) {
		$.ajax({
			url: r,
			data: {
				param: aD
			},
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function() {},
			error: function(aF, aE) {
				console.error(aE)
			},
			complete: function() {
				aC && aC()
			}
		})
	}

	function ax(aC) {
		$.ajax({
			url: aC,
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function() {}
		})
	}

	function W(aC) {
		$.ajax({
			url: aC,
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function() {}
		})
	}

	function t(aC) {
		$.ajax({
			url: aC,
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function() {}
		})
	}
	$(window).scroll(function(aC) {
		C()
	});

	function X(aC) {
		Z.attr("data-type", aC.prov_py);
		Z.html(aC.prov_name)
	}

	function au() {
		$.ajax({
			type: "POST",
			url: "http://123.59.74.13/position/get",
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			timeout: 5000
		}).done(function(aD) {
			try {
				var aG = aD.position,
					aC = ar(aG.provname),
					aF = null;
				if (aC) {
					aF = {
						prov_id: aG.pro_id,
						prov_py: aC,
						prov_name: aG.provname
					};
					X(aF);
					aq(aF)
				} else {
					console.log("ttNewsNavSwiper::", ttNewsNavSwiper);
					ttNewsNavSwiper.removeSlide(3)
				}
			} catch (aE) {
				console.error(aE);
				ttNewsNavSwiper.removeSlide(3)
			}
		}).error(function(aC, aD) {
			console.error(aD);
			ttNewsNavSwiper.removeSlide(3)
		})
	}

	function ar(aC) {
		switch (aC) {
			case "上海":
				return "shanghai";
			case "北京":
				return "beijing";
			case "河南":
				return "henan";
			case "广东":
				return "guangdong";
			default:
				return null
		}
	}

	function aq(aC) {
		l.isSupported() && l.set("location", aC, {
			exp: 43200
		})
	}

	function g() {
		if (l.isSupported()) {
			return l.get("location")
		}
		return false
	}

	function am() {
		l.isSupported() && l.set("ttn_" + ap, M.html(), {
			exp: 1200
		})
	}

	function c() {
		if (l.isSupported()) {
			return l.get("ttn_" + ap)
		}
		return false
	}

	function I(aC) {
		l.isSupported() && l.set("ttn_pos_" + ap, aC, {
			exp: 1200
		})
	}

	function ab() {
		if (l.isSupported()) {
			return l.get("ttn_pos_" + ap)
		}
		return false
	}

	function p(aD, aF, aC) {
		if (!al(aD) && newsTypeArr.contains(aF)) {
			var aG = l.get("read_url_all");
			if (aG) {
				aG = aG.split(",");
				while (aG.length >= 5) {
					aG.shift()
				}
				aG.push(aD);
				readUrl = aG.join(",")
			} else {
				readUrl = aD
			}
			l.set("read_url_all", readUrl, {
				exp: 2880
			});
			var aH = l.get("read_url_" + aF);
			if (aH) {
				aH = aH.split(",");
				while (aH.length >= 3) {
					aH.shift()
				}
				aH.push(aD);
				aH = aH.join(",")
			} else {
				aH = aD
			}
			l.set("read_url_" + aF, aH, {
				exp: 2880
			});
			if (aC) {
				var aE = l.get("read_url_" + aC);
				if (aE) {
					aE = aE.split(",");
					while (aE.length >= 3) {
						aE.shift()
					}
					aE.push(aD);
					aE = aE.join(",")
				} else {
					aE = aD
				}
				l.set("read_url_" + aC, aE, {
					exp: 2880
				})
			}
		}
	}

	function al(aC) {
		var aD = l.get("read_url_all");
		if (aD && aD.indexOf(aC) !== -1) {
			return true
		}
		return false
	}

	function T(aC) {
		$.ajax({
			type: "POST",
			url: A,
			dataType: "jsonp",
			data: {
				softtype: "news",
				softname: "eastday_wapnews"
			},
			jsonp: "jsonpcallback",
			success: function(aE) {
				try {
					x = aE.uid;
					$.cookie("user_id", x, {
						expires: 365 * 5,
						path: "/"
					});
					aC()
				} catch (aD) {
					console.error(aD)
				}
			}
		})
	}

	function ah() {
		return $.cookie("user_id")
	}
function jsonp(url,cb){
		const script = document.createElement("script");
		script.src=url;
		window.callback = function(data){
			cb(data);
			script.parentNode.removeChild(script);
			delete window.callback;
		}
		const scripts = document.head.getElementsByTagName("script");
		document.head.appendChild(script);
	}
	function y() {
		console.log("hehehe",ay)
		$.cookie("pgnum_" + ap, 1, {
			expires: 0.334,
			path: "/"
		});
		M.html("");
		F.show()
		jsonp(ay,function(data){
			console.log(data)
			P(data)
			F.hide()
		})
		// $.ajax({
		// 	url: ay,
		// 	data: {
		// 		type: ap,
		// 		endkey: "",
		// 		domain: "021",
		// 		os: z,
		// 		recgid: x,
		// 		picnewsnum: 1,
		// 		qid: tt_news_qid,
		// 		readhistory: readUrl,
		// 		idx: 0,
		// 		pgnum: 1
		// 	},
		// 	dataType: "jsonp",
		// 	jsonp: "jsonpcallback",
		// 	timeout: 8000,
		// 	beforeSend: function() {
		// 		M.html("");
		// 		F.show()
		// 	},
		// 	success: function(aC) {
		// 		P(aC)
		// 	},
		// 	complete: function() {
		// 		F.hide()
		// 	}
		// })
	}

	function ai() {
		if (ap == "toutiao" || ap == "weikandian") {
			readUrl = l.get("read_url_all")
		} else {
			readUrl = l.get("read_url_" + ap)
		}
		pgNum = $.cookie("pgnum_" + ap, Number);
		$.cookie("pgnum_" + ap, ++pgNum, {
			expires: 0.334,
			path: "/"
		});
		ak = $.cookie("idx_" + ap, Number);
		if (!ak) {
			ak = 0
		}
		$.ajax({
			url: an,
			data: {
				type: ap,
				startkey: l.get("rowkey_" + ap),
				newsnum: 20,
				isnew: 1,
				domain: "021",
				os: z,
				readhistory: readUrl,
				idx: ak,
				recgid: x,
				pgnum: pgNum,
				qid: tt_news_qid
			},
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			timeout: 8000,
			beforeSend: function() {
				G.show()
			},
			success: function(aC) {
				P(aC)
			},
			error: function() {
				console.error(arguments)
			},
			complete: function() {
				G.hide()
			}
		})
	}

	function P(a6) {
		var a8 = a6 && a6.data;
		if (!a8 || !a8.length) {
			G.hide();
			return false
		}
		l.set("rowkey_" + ap, a6.endkey, {
			exp: 1200
		});
		var a0 = a8.length;
		var aS = 0;
		if (!ak) {
			ak = 0
		}
		//console.log(a8)
		for (var aY = 0; aY < a0; aY++) {
			var a5 = a8[aY],
				aI = a5.url,
				aP = a5.date,
				aV = a5.topic,
				aT = a5.source,
				a1 = a5.pics1609,
				a2 = a5.recommendtype ? a5.recommendtype : "-1",
				aJ = a5.hotnews,
				aO = a5.ispicnews,
				a7 = a5.videonews,
				aF = a5.isadv || "",
				aX = a5.adv_id || "",
				aH = a5.type,
				aR = a5.subtype,
				aQ = a1&&a1.length,
				a4 = Number(a5.hotnews),
				aZ = Number(a5.isvideo),
				aK = Number(a5.isrecom),
				aL = Number(a5.isnxw),
				aE = "",
				aM = "";
			if (aF == "1") {
				aM = "&nbsp;";
				aE = 'class="J-promote-news" data-advid="' + aX + '"'
			} else {
				if (a4) {
					aM = '<i class="hot">热门</i>';
					if (aZ) {
						aM += '<i class="video">视频</i>'
					}
				} else {
					if (aK) {
						aM = '<i class="rec">推荐</i>'
					} else {
						if (aZ) {
							aM = '<i class="video">视频</i>'
						} else {
							if (aL) {
								aM = '<i class="nuanwen">暖文</i>'
							} else {
								if (a7 == "2") {
									aM = '<i class="video">视频</i>'
								}
							}
						}
					}
				}
			}
			var aN = ["wy001", "wy002", "wy013", "wy017", "wy047", "wy083"];
			try {
				if (aY > 1 && aY % 7 == 0 && uedItems.length != 0) {
					var aG = uedItems.length;
					var aC = Math.ceil(Math.random() * (1 - aG) + aG) - 1;
					var aW = uedItems.splice(aC, 1)[0];
					if (aW.min_images) {
						M.append('<li class="tt-news-item tt-news-item-s2"><a data-tj="tou1,' + localStorage.getItem("zyqType") +
							'" class="norecord" href="' + aW.file_path + '"><div class="news-wrap"><h3>' + aW.title +
							'</h3><div class="img-wrap clearfix"><img class="lazy fl" src="' + aW.min_images +
							'"><img class="lazy fl" src="' + aW.min_images1 + '"><img class="lazy fl" src="' + aW.min_images2 +
							'"></div><p class="clearfix"><em class="fl"></em><em class="fr">每日一测</em></p></div></a></li> ')
					}
				}
			} catch (a3) {
				console.error("generateDom(uedItems) has error: \n", a3)
			}
			var {url,clickbackurl,inviewbackurl,https_url,desc,pushdate,source,pic} = a5;
			var aW = {
				// url: "{url}",
				// clickbackurl: "{clickbackurl}",
				// inviewbackurl: "{inviewbackurl}",
				// isclickbackurl: "{isclickbackurl}",
				// topic: "{topic}",
				// date: "{date}",
				// source: "{source}",
				// lbimg_0_src: "{lbimg_0_src}",
				url:https_url,
				clickbackurl:https_url,
				inviewbackurl,
				https_url,
				topic:desc,
				date:pushdate,
				source:source,
				lbimg_0_src:pic,
				remeng: (aM ? aM : "")
			};
			if (((aY == 3 || aY == 5 || aY == 8) || ((aY > 8) && ((aY - 8) % 6) == 0))) {
				h5_id++;
				uedclass = "dsp_h5_no dsp_h5_" + ap;
				
				M.append('<li class="tt-news-item tt-news-item-s1 dspads ' + uedclass + '"  id="h5_' + h5_id +
					'"><a data-mark=""  ' + aE + ' data-tj="tou1,' + localStorage.getItem("zyqType") + '" data-type="' + aH +
					'" data-subtype="' + aR + '" href="' + aW.url + '" data-clickurl="' + aW.clickbackurl +
					'" data-inviewbackurl="' + aW.inviewbackurl + '"  data-isclickurl="' + aW.https_url +
					'"><div class="news-wrap clearfix"><div class="txt-wrap fr"><h3>' + aW.topic + '</h3> <p><em class="fl">' + aW.remeng +
					'</em><em class="fr">' + aW.source + '</em></p></div><div class="img-wrap fl"><img class="lazy" src="' + aW.lbimg_0_src +
					'" alt="' + aW.topic + '"></div></div></a></li> ');
				//$(".dsp_h5_no").css("display", "none");
				J("h5_" + h5_id);
				con("h5_" + h5_id)
			}
			if (aO == "0") {
				if (aQ >= 3) {
					M.append('<li class="tt-news-item tt-news-item-s2"><a data-tj="tou1,' + localStorage.getItem("zyqType") + '" ' +
						aE + ' data-type="' + aH + '" data-subtype="' + aR + '" href="' + aI + "?qid=" + tt_news_qid + "&idx=" + (ak +
							aY + 1) + "&recommendtype=" + a2 + "&ishot=" + aJ + '"><div class="news-wrap"><h3>' + aV +
						'</h3><div class="img-wrap clearfix"><img class="lazy fl" src="' + a1[0].src + '" alt="' + a1[0].alt +
						'"><img class="lazy fl" src="' + a1[1].src + '" alt="' + a1[1].alt + '"><img class="lazy fl" src="' + a1[2].src +
						'" alt="' + a1[2].alt + '"></div><p class="clearfix"><em class="fl">' + (aM ? aM : e(aP)) +
						'</em><em class="fr">' + aT + "</em></p></div></a></li>")
				} else {
					var aD = ((a1.length > 0 && a1[0].src) ? a1[0].src : ""),
						aU = ((a1.length > 0 && a1[0].alt) ? a1[0].alt : "");
					M.append('<li class="tt-news-item tt-news-item-s1"><a ' + aE + ' data-tj="tou1,' + localStorage.getItem(
							"zyqType") + '" data-type="' + aH + '" data-subtype="' + aR + '" href="' + aI + "?qid=" + tt_news_qid +
						"&idx=" + (ak + aY + 1) + "&recommendtype=" + a2 + "&ishot=" + aJ +
						'"><div class="news-wrap clearfix"><div class="txt-wrap fr"><h3>' + aV + '</h3> <p><em class="fl">' + (aM ? aM :
							e(aP)) + '</em><em class="fr">' + aT + '</em></p></div><div class="img-wrap fl"><img class="lazy" src="' + aD +
						'" alt="' + aU + '"></div></div></a></li> ')
				}
			}
		}
		$.cookie("idx_" + ap, ak + a0, {
			expires: 0.334,
			path: "/"
		});
		am()
	}

	function af(aC) {
		try {
			var aD = aC.length - 1;
			while (aD >= 0 && !$.trim(aC[aD].rowkey)) {
				aD--
			}
			return aC[aD].rowkey
		} catch (aE) {
			console.error(aE);
			return ""
		}
	}

	function S(aC) {
		return aC.sort(function() {
			return 0.5 - Math.random()
		})
	}

	function e(aI) {
		var aJ = L(aI);
		if (!aJ) {
			return false
		}
		var aH = new Date().getTime();
		var aE = Number(aH - aJ),
			aG = 24 * 60 * 60 * 1000,
			aD = 60 * 60 * 1000,
			aC = 60 * 1000;
		if (aE >= aG) {
			var aF = aE / aG;
			if (aF > 2) {
				return at(aE)
			} else {
				if (aF > 1) {
					return "前天"
				} else {
					return "昨天"
				}
			}
		} else {
			if (aE >= aD) {
				return Math.floor(aE / aD) + "小时前"
			} else {
				if (aE >= aC) {
					return Math.floor(aE / aC) + "分钟前"
				} else {
					return "最新"
				}
			}
		}
	}

	function L(aD) {
		try {
			return Date.parse(aD.replace(/-/g, "/"))
		} catch (aC) {
			console.error(aC);
			return false
		}
	}

	function at(aD, aC) {
		return R(aw(aD), aC)
	}

	function aw(aC) {
		return new Date(aC)
	}

	function R(aJ, aE) {
		var aG = aJ.getFullYear().toString(),
			aH = (aJ.getMonth() + 1).toString(),
			aD = aJ.getDate().toString(),
			aF = aJ.getHours().toString(),
			aC = aJ.getMinutes().toString();
		aH = aH.length > 1 ? aH : ("0" + aH);
		aD = aD.length > 1 ? aD : ("0" + aD);
		aF = aF.length > 1 ? aF : ("0" + aF);
		aC = aC.length > 1 ? aC : ("0" + aC);
		var aI = aH + "-" + aD + " " + aF + ":" + aC;
		if (aE) {
			aI = aI.replace(/-/g, aE)
		}
		return aI
	}

	function u(aI) {
		if (!!!aI) {
			$(window).scrollTop(0);
			return
		}
		var aF = $("body").scrollTop();
		var aD = 13.333;
		var aC = Math.ceil(aI / aD);
		var aH = Math.ceil(aF / aC);
		var aG = null;

		function aE() {
			!!aG && clearTimeout(aG);
			aG = null;
			if ($("body").scrollTop() <= 0 || aC <= 0) {
				$("body").scrollTop(0);
				return
			}
			aC--;
			aF -= aH;
			$("body").scrollTop(aF);
			aG = setTimeout(function() {
				aE()
			}, aD)
		}
		aE()
	}

	function m() {
		if (document.documentElement && document.documentElement.scrollTop) {
			return document.documentElement.scrollTop
		} else {
			if (document.body) {
				return document.body.scrollTop
			}
		}
	}

	function q() {
		if (document.body.clientHeight && document.documentElement.clientHeight) {
			return (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight :
				document.documentElement.clientHeight
		} else {
			return (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight :
				document.documentElement.clientHeight
		}
	}

	function O() {
		var aD = navigator.userAgent.toLowerCase();
		var aC = "";
		if (aD.indexOf("msie") > 0) {
			aC = "IE"
		}
		if (aD.indexOf("firefox") > 0) {
			aC = "firefox"
		}
		if (aD.indexOf("chrome") > 0 && aD.indexOf("mb2345browser") < 0 && aD.indexOf("360 aphone browser") < 0) {
			aC = "chrome"
		}
		if (aD.indexOf("360 aphone browser") > 0 || aD.indexOf("qhbrowser") > 0) {
			aC = "360"
		}
		if (aD.indexOf("ucbrowser") > 0) {
			aC = "UC"
		}
		if (aD.indexOf("micromessenger") > 0) {
			aC = "WeChat"
		}
		if ((aD.indexOf("mqqbrowser") > 0 || aD.indexOf("qq") > 0) && aD.indexOf("micromessenger") < 0) {
			aC = "QQ"
		}
		if (aD.indexOf("miuibrowser") > 0) {
			aC = "MIUI"
		}
		if (aD.indexOf("mb2345browser") > 0) {
			aC = "2345"
		}
		if (aD.indexOf("sogoumobilebrowser") > 0) {
			aC = "sogou"
		}
		if (aD.indexOf("liebaofast") > 0) {
			aC = "liebao"
		}
		if (aD.indexOf("safari") > 0 && aD.indexOf("chrome") < 0 && aD.indexOf("ucbrowser") < 0 && aD.indexOf(
				"micromessenger") < 0 && aD.indexOf("mqqbrowser") < 0 && aD.indexOf("miuibrowser") < 0 && aD.indexOf(
				"mb2345browser") < 0 && aD.indexOf("sogoumobilebrowser") < 0 && aD.indexOf("liebaofast") < 0 && aD.indexOf(
				"qhbrowser") < 0) {
			aC = "safari"
		}
		return aC
	}

	function d() {
		var aD = navigator.userAgent.toLowerCase();
		var aE = "";
		if (/android/i.test(navigator.userAgent)) {
			var aC = aD.indexOf("android");
			version = aD.substr(aC + 8, 3);
			aE = "Android " + version
		}
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			var aC = aD.indexOf("os");
			version = aD.substr(aC + 3, 3);
			aE = "iOS " + version
		}
		if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(
				navigator.userAgent)) {
			aE = "Linux"
		}
		if (/windows|win32/i.test(navigator.userAgent)) {
			aE = "windows32"
		}
		if (/windows|win32/i.test(navigator.userAgent)) {
			aE = "windows64"
		}
		return aE
	}

	function az() {
		var aC = navigator.userAgent.toLowerCase();
		var aD = "";
		if (/android/i.test(navigator.userAgent)) {
			aD = "Android "
		}
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			aD = "iOS "
		}
		if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(
				navigator.userAgent)) {
			aD = "Linux"
		}
		if (/windows|win32/i.test(navigator.userAgent)) {
			aD = "windows32"
		}
		if (/windows|win32/i.test(navigator.userAgent)) {
			aD = "windows64"
		}
		return aD
	}(function() {
		$(".bottom-fixed .out").on("click", function() {
			$(".bottom-fixed").hide()
		})
	})();

	function ac() {
		var aC = $("<script/>");
		aC.attr("async", "async");
		aC.attr("src", "//09img.shaqm.com/h5/partner/zfbc_w.min.js?qid=" + tt_news_qid + "&uid=" + x + "&site=m021");
		aC.appendTo("body")
	}
	ac()
});
