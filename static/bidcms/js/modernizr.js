window.Modernizr = function(a, b, c) {
    function d() {
        l.input = function(a) {
            for (var b = 0, c = a.length; b < c; b++) z[a[b]] = a[b] in s;
            return z
        } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        l.inputtypes = function(a) {
            for (var d = 0, e, f, g, h = a.length; d < h; d++) s.setAttribute("type", f = a[d]),
            e = s.type !== "text",
            e && (s.value = t, s.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && s.style.WebkitAppearance !== c ? (n.appendChild(s), g = b.defaultView, e = g.getComputedStyle && g.getComputedStyle(s, null).WebkitAppearance !== "textfield" && s.offsetHeight !== 0, n.removeChild(s)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = s.checkValidity && s.checkValidity() === !1: /^color$/.test(f) ? (n.appendChild(s), n.offsetWidth, e = s.value != t, n.removeChild(s)) : e = s.value != t)),
            y[a[d]] = !!e;
            return y
        } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    function e(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1),
        d = (a + " " + w.join(c + " ") + c).split(" ");
        return f(d, b)
    }
    function f(a, b) {
        for (var d in a) if (r[a[d]] !== c) return b == "pfx" ? a[d] : !0;
        return ! 1
    }
    function g(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function h(a, b) {
        return typeof a === b
    }
    function i(a, b) {
        return j(v.join(a + ";") + (b || ""))
    }
    function j(a) {
        r.cssText = a
    }
    var k = "2.0.6",
    l = {},
    m = !0,
    n = b.documentElement,
    o = b.head || b.getElementsByTagName("head")[0],
    p = "modernizr",
    q = b.createElement(p),
    r = q.style,
    s = b.createElement("input"),
    t = ":)",
    u = Object.prototype.toString,
    v = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
    w = "Webkit Moz O ms Khtml".split(" "),
    x = {},
    y = {},
    z = {},
    A = [],
    B = function(a, c, d, e) {
        var f,
        g,
        h,
        i = b.createElement("div");
        if (parseInt(d, 10)) while (d--) h = b.createElement("div"),
        h.id = e ? e[d] : p + (d + 1),
        i.appendChild(h);
        return f = ["&shy;", "<style>", a, "</style>"].join(""),
        i.id = p,
        i.innerHTML += f,
        n.appendChild(i),
        g = c(i, a),
        i.parentNode.removeChild(i),
        !!g
    },
    C,
    D = {}.hasOwnProperty,
    E; ! h(D, c) && !h(D.call, c) ? E = function(a, b) {
        return D.call(a, b)
    }: E = function(a, b) {
        return b in a && h(a.constructor.prototype[b], c)
    };
    var F = function(a, c) {
        var d = a.join(""),
        e = c.length;
        B(d, 
        function(a, c) {
            var d = b.styleSheets[b.styleSheets.length - 1],
            f = d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText: d.cssText || "",
            g = a.childNodes,
            h = {};
            while (e--) h[g[e].id] = g[e];
            l.csstransforms3d = h.csstransforms3d.offsetLeft === 9
        },
        e, c)
    } ([, ["@media (", v.join("transform-3d),("), p, ")", "{#csstransforms3d{left:9px;position:absolute}}"].join("")], [, "csstransforms3d"]);
    x.canvas = function() {
        var a = b.createElement("canvas");
        return !! a.getContext && !!a.getContext("2d")
    },
    x.rgba = function() {
        return j("background-color:rgba(150,255,150,.5)"),
        g(r.backgroundColor, "rgba")
    },
    x.borderimage = function() {
        return e("borderImage")
    },
    x.borderradius = function() {
        return e("borderRadius")
    },
    x.boxshadow = function() {
        return e("boxShadow")
    },
    x.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    },
    x.opacity = function() {
        return i("opacity:.55"),
        /^0.55$/.test(r.opacity)
    },
    x.cssanimations = function() {
        return e("animationName")
    },
    x.cssgradients = function() {
        var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
        return j((a + v.join(b + a) + v.join(c + a)).slice(0, -a.length)),
        g(r.backgroundImage, "gradient")
    },
    x.cssreflections = function() {
        return e("boxReflect")
    },
    x.csstransforms = function() {
        return !! f(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    },
    x.csstransforms3d = function() {
        var a = !!f(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        return a && "webkitPerspective" in n.style && (a = l.csstransforms3d),
        a
    },
    x.csstransitions = function() {
        return e("transitionProperty")
    };
    for (var G in x) E(x, G) && (C = G.toLowerCase(), l[C] = x[G](), A.push((l[C] ? "": "no-") + C));
    return l.input || d(),
    j(""),
    q = s = null,
    a.attachEvent && 
    function() {
        var a = b.createElement("div");
        return a.innerHTML = "<elem></elem>",
        a.childNodes.length !== 1
    } () && 
    function(a, b) {
        function d(a) {
            var b = -1;
            while (++b < h) a.createElement(g[b])
        }
        a.iepp = a.iepp || {};
        var e = a.iepp,
        f = e.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        g = f.split("|"),
        h = g.length,
        i = new RegExp("(^|\\s)(" + f + ")", "gi"),
        j = new RegExp("<(/*)(" + f + ")", "gi"),
        k = /^\s*[\{\}]\s*$/,
        l = new RegExp("(^|[^\\n]*?\\s)(" + f + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
        m = b.createDocumentFragment(),
        n = b.documentElement,
        o = n.firstChild,
        p = b.createElement("body"),
        q = b.createElement("style"),
        r = /print|all/,
        s;
        e.getCSS = function(a, b) {
            if (a + "" === c) return "";
            var d = -1,
            f = a.length,
            g,
            h = [];
            while (++d < f) {
                g = a[d];
                if (g.disabled) continue;
                b = g.media || b,
                r.test(b) && h.push(e.getCSS(g.imports, b), g.cssText),
                b = "all"
            }
            return h.join("")
        },
        e.parseCSS = function(a) {
            var b = [],
            c;
            while ((c = l.exec(a)) != null) b.push(((k.exec(c[1]) ? "\n": c[1]) + c[2] + c[3]).replace(i, "$1.iepp_$2") + c[4]);
            return b.join("\n")
        },
        e.writeHTML = function() {
            var a = -1;
            s = s || b.body;
            while (++a < h) {
                var c = b.getElementsByTagName(g[a]),
                d = c.length,
                e = -1;
                while (++e < d) c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + g[a])
            }
            m.appendChild(s),
            n.appendChild(p),
            p.className = s.className,
            p.id = s.id,
            p.innerHTML = s.innerHTML.replace(j, "<$1font")
        },
        e._beforePrint = function() {
            q.styleSheet.cssText = e.parseCSS(e.getCSS(b.styleSheets, "all")),
            e.writeHTML()
        },
        e.restoreHTML = function() {
            p.innerHTML = "",
            n.removeChild(p),
            n.appendChild(s)
        },
        e._afterPrint = function() {
            e.restoreHTML(),
            q.styleSheet.cssText = ""
        },
        d(b),
        d(m),
        e.disablePP || (o.insertBefore(q, o.firstChild), q.media = "print", q.className = "iepp-printshim", a.attachEvent("onbeforeprint", e._beforePrint), a.attachEvent("onafterprint", e._afterPrint))
    } (a, b),
    l._version = k,
    l._prefixes = v,
    l._domPrefixes = w,
    l.testProp = function(a) {
        return f([a])
    },
    l.testAllProps = e,
    l.testStyles = B,
    n.className = n.className.replace(/\bno-js\b/, "") + (m ? " js " + A.join(" ") : ""),
    l
} (this, this.document)