window.JSON || (window.JSON = {}),
function() {
    function f(e) {
        return e < 10 ? "0" + e: e
    }
    function quote(e) {
        return escapable.lastIndex = 0,
        escapable.test(e) ? '"' + e.replace(escapable, 
        function(e) {
            var t = meta[e];
            return typeof t == "string" ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + e + '"'
    }
    function str(e, t) {
        var n,r,i,s,o = gap,u,a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)),
        typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent,
            u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]": gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]": "[" + u.join(",") + "]",
                gap = o,
                i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) r = rep[n],
                typeof r == "string" && (i = str(r, a), i && u.push(quote(r) + (gap ? ": ": ":") + i))
            } else for (r in a) Object.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": ": ":") + i));
            return i = u.length === 0 ? "{}": gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}": "{" + u.join(",") + "}",
            gap = o,
            i
        }
    }
    "use strict",
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    });
    var JSON = window.JSON,
    cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
        var r;
        gap = "",
        indent = "";
        if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }),
    typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n,
            r,
            i = e[t];
            if (i && typeof i == "object") for (n in i) Object.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r: delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, 
        function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
        typeof reviver == "function" ? walk({
            "": j
        },
        "") : j;
        throw new SyntaxError("JSON.parse")
    })
} (),
function(e, t) {
    "use strict";
    var n = e.History = e.History || {},
    r = e.MooTools,
    i = e.Element;
    if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    Object.append(i.NativeEvents, {
        popstate: 2,
        hashchange: 2
    }),
    n.Adapter = {
        bind: function(e, t, n) {
            var r = typeof e == "string" ? document.id(e) : e;
            r.addEvent(t, n)
        },
        trigger: function(e, t, n) {
            var r = typeof e == "string" ? document.id(e) : e;
			r.fireEvent(t, n)
        },
        extractEventData: function(e, n) {
            var r = n && n.event && n.event[e] || n && n[e] || t;
            return r
        },
        onDomLoad: function(t) {
            e.addEvent("domready", t)
        }
    },
    typeof n.init != "undefined" && n.init()
} (window),
function(e, t) {
    "use strict";
    var n = e.document,
    r = e.setTimeout || r,
    i = e.clearTimeout || i,
    s = e.setInterval || s,
    o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function() {
        if (typeof o.initHtml4.initialized != "undefined") return ! 1;
        o.initHtml4.initialized = !0,
        o.enabled = !0,
        o.savedHashes = [],
        o.isLastHash = function(e) {
            var t = o.getHashByIndex(),
            n;
            return n = e === t,
            n
        },
        o.saveHash = function(e) {
            return o.isLastHash(e) ? !1: (o.savedHashes.push(e), !0)
        },
        o.getHashByIndex = function(e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e],
            t
        },
        o.discardedHashes = {},
        o.discardedStates = {},
        o.discardState = function(e, t, n) {
            var r = o.getHashByState(e),
            i;
            return i = {
                discardedState: e,
                backState: n,
                forwardState: t
            },
            o.discardedStates[r] = i,
            !0
        },
        o.discardHash = function(e, t, n) {
            var r = {
                discardedHash: e,
                backState: n,
                forwardState: t
            };
            return o.discardedHashes[e] = r,
            !0
        },
        o.discardedState = function(e) {
            var t = o.getHashByState(e),
            n;
            return n = o.discardedStates[t] || !1,
            n
        },
        o.discardedHash = function(e) {
            var t = o.discardedHashes[e] || !1;
            return t
        },
        o.recycleState = function(e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t],
            !0
        },
        o.emulated.hashChange && (o.hashChangeInit = function() {
            o.checkerFunction = null;
            var t = "",
            r,
            i,
            u,
            l;
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", l = !1, o.checkerFunction = function() {
                if (l) return ! 1;
                l = !0;
                var n = o.getHash() || "",
                r = o.unescapeHash(i.contentWindow.document.location.hash) || "";
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, o.setHash(r, !1)),
                l = !1,
                !0
            }) : o.checkerFunction = function() {
                var n = o.getHash();
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")),
                !0
            },
            o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)),
            !0
        },
        o.Adapter.onDomLoad(o.hashChangeInit)),
        o.emulated.pushState && (o.onHashChange = function(t) {
            var r = t && t.newURL || n.location.href,
            i = o.getHashByUrl(r),
            s = null,
            u = null,
            f = null,
            l;
            return o.isLastHash(i) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(i), i && o.isTraditionalAnchor(i) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (s = o.extractState(o.getFullUrl(i || n.location.href, !1), !0), o.isLastSavedState(s) ? (o.busy(!1), !1) : (u = o.getHashByState(s), l = o.discardedState(s), l ? (o.getHashByIndex( - 2) === o.getHashByState(l.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(s.data, s.title, s.url, !1), !0))))
        },
        o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, r, i, s) {
            if (o.getHashByUrl(i)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (s !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.pushState,
                args: arguments,
                queue: s
            }),
            !1;
			o.busy(!0);
            var u = o.createStateObject(t, r, i),
            f = o.getHashByState(u),
            l = o.getState(!1),
            h = o.getHashByState(l),
            p = o.getHash();
            return o.storeState(u),
            o.expectedStateId = u.id,
            o.recycleState(u),
            o.setTitle(u),
            f === h ? (o.busy(!1), !1) : f !== p && f !== o.getShortUrl(n.location.href) ? (o.setHash(f, !1), !1) : (o.saveState(u), o.Adapter.trigger(e, "statechange"), o.busy(!1), !0)
        },
        o.replaceState = function(e, t, n, r) {
            if (o.getHashByUrl(n)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (r !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.replaceState,
                args: arguments,
                queue: r
            }),
            !1;
            o.busy(!0);
            var i = o.createStateObject(e, t, n),
            s = o.getState(!1),
            u = o.getStateByIndex( - 2);
            return o.discardState(s, i, u),
            o.pushState(i.data, i.title, i.url, !1),
            !0
        }),
        o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
            o.Adapter.trigger(e, "hashchange")
        })
    },
    typeof o.init != "undefined" && o.init()
} (window),
function(e, t) {
    "use strict";
    var n = e.console || t,
    r = e.document,
    i = e.navigator,
    s = e.sessionStorage || !1,
    o = e.setTimeout,
    u = e.clearTimeout,
    a = e.setInterval,
    f = e.clearInterval,
    l = e.JSON,
    c = e.alert,
    h = e.History = e.History || {},
    p = e.history;
    l.stringify = l.stringify || l.encode,
    l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
    h.init = function() {
        return typeof h.Adapter == "undefined" ? !1: (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    },
    h.initCore = function() {
        if (typeof h.initCore.initialized != "undefined") return ! 1;
        h.initCore.initialized = !0,
        h.options = h.options || {},
        h.options.hashChangeInterval = h.options.hashChangeInterval || 100,
        h.options.safariPollInterval = h.options.safariPollInterval || 500,
        h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500,
        h.options.storeInterval = h.options.storeInterval || 1e3,
        h.options.busyDelay = h.options.busyDelay || 250,
        h.options.debug = h.options.debug || !1,
        h.options.initialTitle = h.options.initialTitle || r.title,
        h.intervalList = [],
        h.clearAllIntervals = function() {
            var e,
            t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++) f(t[e]);
                h.intervalList = null
            }
        },
        h.debug = function() { (h.options.debug || !1) && h.log.apply(h, arguments)
        },
        h.log = function() {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
            t = r.getElementById("log"),
            i,
            s,
            o,
            u,
            a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined") try {
                    a = l.stringify(a)
                } catch(f) {}
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i),
            !0
        },
        h.getInternetExplorerMajorVersion = function() {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached: function() {
                var e = 3,
                t = r.createElement("div"),
                n = t.getElementsByTagName("i");
                while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                return e > 4 ? e: !1
            } ();
            return e
        },
        h.isInternetExplorer = function() {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached: Boolean(h.getInternetExplorerMajorVersion());
            return e
        },
        h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        },
        h.enabled = !h.emulated.pushState,
        h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        },
        h.isEmptyObject = function(e) {
            for (var t in e) return ! 1;
            return ! 0
        },
        h.cloneObject = function(e) {
            var t,
            n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {},
            n
        },
        h.getRootUrl = function() {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ":" + r.location.port;
			return e += "/",
            e
        },
        h.getBaseHref = function() {
            var e = r.getElementsByTagName("base"),
            t = null,
            n = "";
            return e.length === 1 && (t = e[0],n = t.href.replace(/[^\/]+$/, "")),
            n = n.replace(/\/+$/, ""),
            n && (n += "/"),n
        },
        h.getBaseUrl = function() {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
			return e
        },
        h.getPageUrl = function() {
            var e = h.getState(!1, !1),
            t = (e || {}).url || r.location.href,
            n;
			return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, 
            function(e, t, n) {
                return /\./.test(e) ? e: e + "/"
            }),
            n
        },
        h.getBasePageUrl = function() {
			var e = r.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, 
			function(e, t, n) {
                return /[^\/]$/.test(e) ? "": e
            }).replace(/\/+$/, "") + "/";
			return e
        },
        h.getFullUrl = function(e, t) {
            var n = e,
            r = e.substring(0, 1);
			return t = typeof t == "undefined" ? !0: t,
            /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e: r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e: t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")),
            n.replace(/\#$/, "")
        },
        h.getShortUrl = function(e) {
            var t = e,
            n = h.getBaseUrl(),
            r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")),
            t = t.replace(r, "/"),
            h.isTraditionalAnchor(t) && (t = "./" + t),
            t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""),
            t
        },
        h.store = {},
        h.idToState = h.idToState || {},
        h.stateToId = h.stateToId || {},
        h.urlToId = h.urlToId || {},
        h.storedStates = h.storedStates || [],
        h.savedStates = h.savedStates || [],
        h.normalizeStore = function() {
            h.store.idToState = h.store.idToState || {},
            h.store.urlToId = h.store.urlToId || {},
            h.store.stateToId = h.store.stateToId || {}
        },
        h.getState = function(e, t) {
            typeof e == "undefined" && (e = !0),
            typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return ! n && t && (n = h.createStateObject()),
            e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url),
            n
        },
        h.getIdByState = function(e) {
            var t = h.extractId(e.url),
            n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                else {
                    for (;;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                    }
                    h.stateToId[n] = t,
                    h.idToState[t] = e
                }
            }
            return t
        },
        h.normalizeState = function(e) {
            var t,
            n;
            if (!e || typeof e != "object") e = {};
            if (typeof e.normalized != "undefined") return e;
            if (!e.data || typeof e.data != "object") e.data = {};
            t = {},
            t.normalized = !0,
            t.title = e.title || "",
            t.url = h.getFullUrl(h.unescapeString(e.url || r.location.href)),
            t.hash = h.getShortUrl(t.url),
            t.data = h.cloneObject(e.data),
            t.id = h.getIdByState(t),
            t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""),
            t.url = t.cleanUrl,
            n = !h.isEmptyObject(t.data);
            if (t.title || n) t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""),
            /\?/.test(t.hash) || (t.hash += "?"),
            t.hash += "&_suid=" + t.id;
			return t.hashedUrl = h.getFullUrl(t.hash),
            (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl),
            t
        },
        h.createStateObject = function(e, t, n) {
            var r = {
                data: e,
                title: t,
                url: n
            };
            return r = h.normalizeState(r),
            r
        },
        h.getStateById = function(e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        },
        h.getStateString = function(e) {
            var t,
            n,
            r;
            return t = h.normalizeState(e),
            n = {
                data: t.data,
                title: e.title,
                url: e.url
            },
            r = l.stringify(n),
            r
        },
        h.getStateId = function(e) {
            var t,
            n;
            return t = h.normalizeState(e),
            n = t.id,
            n
        },
        h.getHashByState = function(e) {
            var t,
            n;
            return t = h.normalizeState(e),
            n = t.hash,
            n
        },
        h.extractId = function(e) {
            var t,
            n,
            r;
            return n = /(.*)\&_suid=([0-9]+)$/.exec(e),
            r = n ? n[1] || e: e,
            t = n ? String(n[2] || "") : "",
            t || !1
        },
        h.isTraditionalAnchor = function(e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        },
        h.extractState = function(e, t) {
            var n = null,
            r,
            i;
            return t = t || !1,
            r = h.extractId(e),
            r && (n = h.getStateById(r)),
            n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))),
            n
        },
        h.getIdByUrl = function(e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        },
        h.getLastSavedState = function() {
            return h.savedStates[h.savedStates.length - 1] || t
        },
        h.getLastStoredState = function() {
            return h.storedStates[h.storedStates.length - 1] || t
        },
        h.hasUrlDuplicate = function(e) {
            var t = !1,
            n;
            return n = h.extractState(e.url),
            t = n && n.id !== e.id,
            t
        },
        h.storeState = function(e) {
            return h.urlToId[e.url] = e.id,
            h.storedStates.push(h.cloneObject(e)),
            e
        },
        h.isLastSavedState = function(e) {
            var t = !1,
            n,
            r,
            i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i),
            t
        },
        h.saveState = function(e) {
            return h.isLastSavedState(e) ? !1: (h.savedStates.push(h.cloneObject(e)), !0)
        },
        h.getStateByIndex = function(e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e],
            t
        },
        h.getHash = function() {
            var e = h.unescapeHash(r.location.hash);
            return e
        },
        h.unescapeString = function(t) {
            var n = t,
            r;
            for (;;) {
                r = e.unescape(n);
                if (r === n) break;
                n = r
            }
            return n
        },
        h.unescapeHash = function(e) {
            var t = h.normalizeHash(e);
            return t = h.unescapeString(t),
            t
        },
        h.normalizeHash = function(e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        },
        h.setHash = function(e, t) {
            var n,
            i,
            s;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (n = h.escapeHash(e), h.busy(!0), i = h.extractState(e, !0), i && !h.emulated.pushState ? h.pushState(i.data, i.title, i.url, !1) : r.location.hash !== n && (h.bugs.setHash ? (s = h.getPageUrl(), h.pushState(null, null, s + "#" + n, !1)) : r.location.hash = n), h)
        },
        h.escapeHash = function(t) {
            var n = h.normalizeHash(t);
            return n = e.escape(n),
            h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")),
            n
        },
        h.getHashByUrl = function(e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
			return t = h.unescapeHash(t),
            t
        },
        h.setTitle = function(e) {
            var t = e.title,
            n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch(i) {}
            return r.title = t,
            h
        },
        h.queues = [],
        h.busy = function(e) {
            typeof e != "undefined" ? h.busy.flag = e: typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function() {
                    var e,
                    n,
                    r;
                    if (h.busy.flag) return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0) continue;
                        r = n.shift(),
                        h.fireQueueItem(r),
                        h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        },
        h.busy.flag = !1,
        h.fireQueueItem = function(e) {
            return e.callback.apply(e.scope || h, e.args || [])
        },
        h.pushQueue = function(e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [],
            h.queues[e.queue || 0].push(e),
            h
        },
        h.queue = function(e, t) {
            return typeof e == "function" && (e = {
                callback: e
            }),
            typeof t != "undefined" && (e.queue = t),
            h.busy() ? h.pushQueue(e) : h.fireQueueItem(e),
            h
        },
        h.clearQueue = function() {
            return h.busy.flag = !1,
            h.queues = [],
            h
        },
        h.stateChanged = !1,
        h.doubleChecker = !1,
        h.doubleCheckComplete = function() {
            return h.stateChanged = !0,
            h.doubleCheckClear(),
            h
        },
        h.doubleCheckClear = function() {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1),
            h
        },
        h.doubleCheck = function(e) {
            return h.stateChanged = !1,
            h.doubleCheckClear(),
            h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                return h.doubleCheckClear(),
                h.stateChanged || e(),
                !0
            },
            h.options.doubleCheckInterval)),
            h
        },
        h.safariStatePoll = function() {
            var t = h.extractState(r.location.href),
            n;
            if (!h.isLastSavedState(t)) return n = t,
            n || (n = h.createStateObject()),
            h.Adapter.trigger(e, "popstate"),
            h;
            return
        },
        h.back = function(e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function() {
                h.back(!1)
            }), p.go( - 1), !0)
        },
        h.forward = function(e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function() {
                h.forward(!1)
            }), p.go(1), !0)
        },
        h.go = function(e, t) {
            var n;
            if (e > 0) for (n = 1; n <= e; ++n) h.forward(t);
            else {
                if (! (e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n) h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function() {};
            h.pushState = h.pushState || v,
            h.replaceState = h.replaceState || v
        } else h.onPopState = function(t, n) {
            var i = !1,
            s = !1,
            o,
            u;
			return h.doubleCheckComplete(),
            o = h.getHash(),
            o ? (u = h.extractState(o || r.location.href, !0), u ? h.replaceState(u.data, u.title, u.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (i = h.Adapter.extractEventData("state", t, n) || !1, i ? s = h.getStateById(i) : h.expectedStateId ? s = h.getStateById(h.expectedStateId) : s = h.extractState(r.location.href), s || (s = h.createStateObject(null, null, r.location.href)), h.expectedStateId = !1, h.isLastSavedState(s) ? (h.busy(!1), !1) : (h.storeState(s), h.saveState(s), h.setTitle(s), h.Adapter.trigger(e, "statechange"),h.busy(!1), !0))
        },
        h.Adapter.bind(e, "popstate", h.onPopState),
        h.pushState = function(t, n, r, i) {
			if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: i
            }),
            !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
			return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")),
            !0
        },
        h.replaceState = function(t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: i
            }),
            !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")),
            !0
        };
        if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch(y) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {},
        h.normalizeStore();
        h.Adapter.bind(e, "beforeunload", h.clearAllIntervals),
        h.Adapter.bind(e, "unload", h.clearAllIntervals),
        h.saveState(h.storeState(h.extractState(r.location.href, !0))),
        s && (h.onUnload = function() {
            var e,
            t;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch(n) {
                e = {}
            }
            e.idToState = e.idToState || {},
            e.urlToId = e.urlToId || {},
            e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e,
            h.normalizeStore(),
            s.setItem("History.store", l.stringify(e))
        },
        h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", 
            function() {
                h.Adapter.trigger(e, "popstate")
            }),
            h.getHash() && h.Adapter.onDomLoad(function() {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    },
    h.init()
} (window);
var app = app || {}; (function() {
    window.console || 
    function() {
        var e = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
        window.console = {};
        for (var t = 0; t < e.length; ++t) window.console[e[t]] = function() {}
    } (),
    Object.append(app, new Events),
    Object.append(app, {
        addOnceEvent: function(e, t) {
            var n = this,
            r = function() {
                try {
                    t.apply(n, arguments)
                } finally {
                    n.removeEvent(e, r)
                }
            };
            this.addEvent(e, r)
        }
    }),
    app.COMMON_ERRMSG = "网络错误，请稍候再试";
    var e = window.navigator.userAgent.toLowerCase();
    Browser.anquan360 = e.indexOf("360se") > -1,
    Browser.jisu360 = e.indexOf("360ee") > -1,
    Browser.qq = e.indexOf("qqbrowser") > -1,
    Browser.sougou = e.indexOf("metasr") > -1,
    Browser.maxthon = e.indexOf("maxthon") > -1,
    "undefined" != typeof document.referrer && !~document.referrer.indexOf(app.host) && Cookie.write("wft", "1"),
    window.addEvent("domready", 
    function() {
        window.docScroller = new Fx.Scroll(document.body),
        app.view = app.view || $("page");
        var e = document.id("elevator");
        if (e) { ($("bookmarklet") || app.page.bidcmsurl == "/message/mentions/" || app.page.bidcmsurl == "/message/activities/") && e.hide();
            var t = new Fx.Scroll(window, {
                duration: "short"
            });
            new Button(e, {
                click: function() {
                    t.toTop()
                }
            }),
            window.addEvent("scroll", 
            function(t) {
                window.getScrollTop() > 200 ? e.removeClass("off") : e.addClass("off")
            })
        } (function() {
            $$(".ts-words").each(function(e) {
                var t = e.retrieve("PinTime");
                if (!t) {
                    var n = e.get("data-ts");
                    if (!n) return;
                    t = new Date(n.toInt() * 1e3),
                    e.store("PinTime", t)
                }
                var r = new Date;
                if (r - t > 2592e6) return;
                e.set("html", t.timeAgo())
            })
        }).periodical(6e4)
    })
})(),
String.implement("stripScripts", 
function(e) {
    var t = "",
    n = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, 
    function(e, n) {
        return t += ";" + n + "\n",
        ""
    });
    return e === !0 ? Browser.exec(t) : typeOf(e) == "function" && e(t, n),
    n
}),
Element.implement({
    mouseOver: function(e) {
        var t = this.getCoordinates();
        return e.x > t.left && e.x < t.right && e.y < t.bottom && e.y > t.top
    },
    setStyles: function(e, t) {
        t && this.store("styles:_old", this.getStyles(Object.keys(e)));
        for (var n in e) this.setStyle(n, e[n]);
        return this
    },
    restoreStyles: function() {
        var e = this.retrieve("styles:_old");
        return e ? (this.erase("styles:_old"), this.setStyles(e)) : this
    },
    absolutize: function() {
        var e = this.getStyle("position");
        if (e === "absolute") return this;
        var t = this.getParent();
        while (t && t.getStyle("position") !== "relative") t = t.getParent();
        t = t || document.body;
        var n = this.getCoordinates(t),
        r = n.top,
        i = n.left;
        if (e === "relative" || e === "static") {
            var s = (new Element("div")).setStyles({
                position: e,
                width: n.width,
                height: n.height
            }).inject(this, "after");
            this.store("absolutize:placeholder", s)
        } else {
            var o = (e === "fixed" ? window: t).getScroll();
            r += o.y,
            i += o.x
        }
        return this.setStyles({
            position: "absolute",
            top: r,
            left: i,
            width: n.width,
            margin: 0
        },
        !0),
        this
    },
    unabsolutize: function() {
        this.restoreStyles();
        var e = this.retrieve("absolutize:placeholder");
        return e && e.destroy(),
        this
    }
}),
function() {
    Object.append(app, {
        templates: {},
        _tplLoading: {},
        $revisions: {},
        $rev: function(e) {
            return this.$revisions[e] || Math.floor((new Date).getTime() / 1e3)
        },
        loadTemplate: function(e, t) {
			var n = this.templates[e];
			if (n) return t(n);
            var r = e,
            i = e.split("/");
            i.length > 1 && (i.pop(), r = i.join("_"));
            var s = this,
            o = function() {
                t(s.templates[e])
            };
            this._tplLoading[r] ? this._tplLoading[r].push(o) : this._tplLoading[r] = [o];
            var u = "static/bidcms/js/views_" + r + ".js";
			new Asset.javascript(u + "?" + this.$rev(u) + ".js", {
                onLoad: function() {
                    setTimeout(function() {
                        var e = s._tplLoading[r];
                        delete s._tplLoading[r];
                        for (var t = 0, n = e.length; t < n; t++) e[t].call()
                    },
                    10)
                }
            })
        },
        render: function(e, t, n) {
            var r = null;
			 typeOf(t) === "function" ? (n = t, t = this) : typeOf(t) === "element" && (r = t, t = this);
            var i = this;
			this.loadTemplate(e, 
            function(e) {
                var s = e ? e.call(i, t || i) : "";
				r ? s.stripScripts(function(e, t) {
					r.set("html", t),
                    e && Browser.exec(e),
					n && (s = n(e, t))
                }) : n && s.stripScripts(n)
            })
        },
        renderSync: function(e, t) {
            var n = this.templates[e];
            return n ? n.call(this, t || this) : ""
        }
    })
} ();
var Cache = new Class({
    Implements: [Options],
    options: {
        duration: 60,
        capcity: 100
    },
    initialize: function(e) {
        this.setOptions(e),
        this.data = {}
    },
    set: function(e, t, n) {
        return this.data[e] = {
            key: e,
            value: t,
            expires: this.calculateDuration(n || this.options.duration),
            duration: n || this.options.duration,
            lastAccess: Date.now()
        },
        this.isFull() && this.purge.delay(200, this),
        this
    },
    get: function(e) {
        var t = this.data[e];
        if (!t) return null;
        var n = Date.now();
        return t.expires <= n ? (this.clear(e), null) : (t.lastAccess = n, t.value)
    },
    getLength: function() {
        return Object.getLength(this.data)
    },
    isFull: function() {
        return this.getLength() >= this.options.capcity
    },
    load: function(e, t) {
        for (var n in e) e.hasOwnProperty(n) && this.set(n, e[n])
    },
    clear: function(e) {
        return e ? delete this.data[e] : this.data = {},
        this
    },
    calculateDuration: function(e) {
        return e * 1e3 + Date.now()
    },
    purge: function() {
        var e = [],
        t = Date.now();
        Object.each(this.data, 
        function(n, r) {
            n.expires <= t ? this.clear(r) : e.push(n)
        }),
        e.sort(function(e, t) {
            return t.lastAccessed - e.lastAccessed
        });
        while (e.length > this.options.capcity) {
            var n = e.pop();
            this.clear(n.key)
        }
    }
}); (function(e) {
    function l() {
		s.getStyle("display") != "none" && !a && (a = (new Element("div#loading_unit")).fade("hide").inject(s), (new Element("h1", {
            html: "页面加载中"
        })).inject(a), (new Element(".progress")).inject(a), (new Element("a.go", {
            html: "点此手动跳转",
            href: e.location.href
        })).inject(a), a.fade("in"))
    }
	var t = e.History;
	if (!t.enabled) return ! 1;
    t.unescapeString = function(e) {
        return e
    };
    var n = 100,
    r = app.$pageCache = new Cache({
        duration: 900,
        capcity: Browser.ie ? 4: 10
    }),
    i = app.scheme + "://" + app.host,s, o,u,a,
    f = null,
    c = function(e) {
        /*if (!o) {
			o = setTimeout(c, e);
            return
        }
        o = null,
        u || (u = new Fx.Tween(s, {
            duration: 1e3
        }))
       s.show(),
       u.chain(function() {
            l.delay(1e3)
        }).set("opacity", 0).start("opacity", 1)*/
    },
    h = function() {
        o && clearTimeout(o),
        o = null,
        u && u.stop(),
        s.hide(),
        a && (a.destroy(), a = null)
    },
    p = function(t) {
        document.title = "加载中...",
        c(100),
        (new Request.JSON({
            url: t,
            noCache: !0,
            onSuccess: function(e) {
                var n = Object.append({
                    bidcmsurl: t
                },
                e);
                d(n)
            },
            onFailure: function() {
                e.location.href = t
            }
        })).get()
    },
    d = function(t) {
        f = null,
        h(),
        app.page.$waterfall && app.page.$waterfall.detach(),
        app.messager && app.messager.registerStateHandler(),
        app.page.$header && app.page.$header.detach(),
        app.page.$navigator && app.page.$navigator.detach(),
        app.page.isOrganizing && app.page.isOrganizing.fireEvent("click"),
        app.page.msgCloseTimeout && clearTimeout(app.page.msgCloseTimeout),
        app._currentSheet && app.hideSheet(),
        app.view.dispose(),
        app.page.$view || (app.page.$header && app.page.$header.destroy(), app.page.$waterfall && app.page.$waterfall.destroy(), app.view.destroy()),
        app.page = t;
        if (t.$view) app.view = t.$view,
        app.view.inject(document.body, "top"),
        t.$waterfall && t.$waterfall.attach(),
        t.$header && t.$header.attach(),
        t.$navigator && t.$navigator.attach();
        else {
            app.view = (new Element("div", {
                id: "page"
            })).inject(document.body, "top");
            var n = t.err ? "bidcmsact_error": t.bidcmsurl;
            app.route(n),
            app.setTitle()
        }
        t.$scroll && e.scrollTo(t.$scroll.x, t.$scroll.y),
        app.fireEvent("switchPage")
    },
    v = function(i) {
        if (app.page.bidcmsurl === i) return;
        if (t.savedStates.length > n) {
            e.location.href = i;
            return
        }
        var s = r.get(i);
        s ? d(s) : p(i),
        e._gaq && _gaq.push(["_trackPageview", i])
    };
    t.Adapter.bind(e, "statechange", 
    function() {
        var e = t.getState();
        if (f && f[e.id]) return f[e.id](e);
        var n =  e.url.replace(i, "").replace(/^\//, "");
        return f && f[n] ? f[n](e) : v(n)
    }),
    Object.append(app, {
        onRoute: function() {
            app.page.$waterfall && (app.page.$view = app.view, r.set(app.page.bidcmsurl, app.page)),
            app.setTitle(),
            e.scrollTo(0, 0)
        },
        reload: function() {
			p(app.page.bidcmsurl)
        },
        redraw: function() {
            var e = app.page;
            delete e.$view,
            d(e)
        },
        setTitle: function() {
            return app.page.title = app.page.title || History.options.initialTitle,
            t.setTitle(app.page),
            this
        },
        registerStateHandler: function(e, t) {
            return f = f || {},
            f[e] = t,
            this
        },
        removeStateHandler: function(e) {
            return f && delete f[e],
            this
        },
        getState: function(e) {
            return "undefined" == typeof e ? t.getState() : t.getStateByIndex(e)
        },
        replaceState: function(e, n, r) {
            return r = "/" + r.replace(i, "").replace(/^\//, ""),
            t.replaceState(e, n, r),
            this
        },
        pushState: function(e, n, r) {
            return r = r.replace(i, "").replace(/^\//, ""),
			t.pushState(e, n, r),
            this
        },
        popState: function() {
            return this.back()
        },
        go: function(e) {
             //return this.pushState(null, null, e)
			 window.location.href=e;
        },
        back: function() {
            return t.back(),
            t.Adapter.trigger(e, "popstate"),
            this
        },
        forward: function() {
            return t.forward(),
            t.Adapter.trigger(e, "popstate"),
            this
        }
    }),
    e.addEvent("domready", 
    function() {
        app.onRoute(),
        s = document.id("page_overlay");
		 var t = Cookie.read("_is_qplus");
        $(document.body).addEvent("click:relay(a.x)", 
        function(n) {
            if (!app._csr || n.meta || n.control || n.shift || n.alt || n.event.button !== 0) return ! 0;
            var r = n.target;
            r.get("tag") !== "a" && (r = r.getParent("a"));
            var i = r.get("href");
			i && i.test(/^\/message\//) && (app._prepath = location.pathname);
            if (i) if (Browser.ie && !t) {
                if (i.test(/^\/pins\/\d+\/?/g) && !r.hasClass("self")) {
                    n.stop();
                    var s = e.open(i, "_blank");
                    try {
                        s.focus()
                    } catch(n) {}
                    return ! 1
                }
            } else if (i.indexOf("/") === 0 && app.getRouter(i)) return n.stop(),
            app.go(i),
            !1;
            return ! 0
        }),
        new Gestures({
            onBack: function() {
                app.back()
            },
            onForward: function() {
                app.forward()
            }
        })
    }),
    e.addEvent("scroll", 
    function() {
        if (!app.page) return;
        app.page.$scroll = e.getScroll()
    })
})(window),
Object.append(app, {
    showSheet: function(e, t) {
        t = t || {};
        var n = "dialog/sheet_" + e;
        if (this._currentSheet && this._currentSheet.retrieve("sheet_id") == n) return this._currentSheet;
        var r = this[n];
        r || this.render(n, t, 
        function(e, t) {
            var i = (new Element("div")).set("html", t);
            r = this[n] = i.getFirst().hide().inject(this.view),
            r.store("sheet_id", n),
            e && Browser.exec(e)
        }.bind(this)),
        this.hideSheet(),
        this._fixFlashLayer(),
        this._currentSheet = r;
        var i = this,
        s = function() {
            var e = app.page.$header ? app.page.$header.element.getCoordinates() : document.id("header").getCoordinates,
            n = r.setStyle("top", -1e3).show().getHeight();
            app.page.$header && app.page.$header.show().detach();
            if (t.modal) {
                var s = r.retrieve("sheet:overlay");
                s || (s = (new Element("div", {
                    "class": "sheet-overlay"
                })).inject(r, "before"), r.store("sheet:overlay", s)),
                s.set("tween", {
                    duration: "short"
                }).fade("hide").fade("in"),
                document.body.setStyle("overflow", "hidden")
            }
            r.set("tween", {
                duration: "short"
            }).tween("top", e.bottom - n, e.bottom).get("tween").chain(function() {
                var e = r.retrieve("onShow");
                "function" == typeof e && e.apply(i, Array.prototype.slice.call(arguments, 1))
            })
        },
        o = document.id("ntf_tip");
        return o ? o.set("slide", {
            duration: "short"
        }).slide("out").get("slide").chain(function() {
            s(),
            o.destroy()
        }) : s(),
        Browser.ie6 && docScroller.toTop(),
        r
    },
    hideSheet: function(e) {
        this._fixFlashLayer(!0),
        app.page.$header && app.page.$header.attach().reset();
        var t = this._currentSheet;
        if (t) {
            var n = this;
            if (app.page.$header) var r = app.page.$header.element.getCoordinates();
            else var r = document.id("header").getCoordinates();
            var i = t.retrieve("sheet:overlay"),
            s = t.hasClass("destroy");
            return i && (i.set("tween", {
                duration: "short"
            }).fade("out").get("tween").chain(function() {
                i.hide(),
                s && i.destroy()
            }), document.body.setStyle("overflow", "auto")),
            t.set("tween", {
                duration: "short"
            }).tween("top", r.bottom, r.bottom - t.getHeight()).get("tween").chain(function() {
                var r = t.retrieve("onHide");
                t.hide(),
                t.hasClass("destroy") && (delete n[t.retrieve("sheet_id")], t.destroy()),
                delete n._currentSheet,
                "function" == typeof r && r.apply(n, Array.prototype.slice.call(arguments, 1));
                var i = [];
                "function" == typeof e ? e() : "undefined" != typeof e && i.push(e),
                app.fireEvent("hideSheet", i)
            }),
            !0
        }
    },
    _fixFlashLayer: function(e) {
        var t = document.id("_huaban_FixFlashStyle");
        if (e) return t && t.destroy();
        if (!t) {
            var t = new Element("style", {
                id: "_huaban_FixFlashStyle"
            }),
            n = "object, embed {visibility: hidden}"; (document.getElement("head") || document.body).grab(t),
            Browser.ie ? t.styleSheet.cssText = n: t.set("text", n)
        }
    },
    showDialog: function(e) {
        this.hideDialog();
        var t = "dialog/dialog_" + e;
		this[t] || this.render(t, 
        function(e, n) {
            var r = (new Element("div")).set("html", n),
            i = this[t] = r.getFirst().inject(this.view);
            i.store("dialog_id", t),
            e && Browser.exec(e)
        }.bind(this)),
        document.body.setStyle("overflow", "hidden"),
        this._fixFlashLayer(),
        this[t].show(),
        this._currentDialog = this[t];
        var n = this[t].retrieve("onShow");
        return "function" == typeof n && n.apply(this, Array.prototype.slice.call(arguments, 1)),
        this[t]
    },
    hideDialog: function() {
        this._fixFlashLayer(!0);
        var e = this._currentDialog;
        if (e) return e.hide(),
        document.body.setStyle("overflow", "auto"),
        e.hasClass("destroy") && (delete this[e.retrieve("dialog_id")], e.destroy()),
        delete this._currentDialog,
        !0
    },
    requireLogin: function(e, t, n) {
        return app.req.user ? (e(), !0) : (Object.append(e, n || {
            redraw: !0
        }), app.$login_callback = e, app.showSheet("login", {
            modal: !0,
            login_prompt: t || "请先登录，登录后才能继续刚才的操作"
        }), !1)
    },
    forceLogin: function() {
        return app.req.user ? !0: (app.showSheet("login", {
            modal: !0
        }), !1)
    },
    msg: function(e, t) {
        var n = {
            msg: Object.append({
                text: e,
                type: "success",
                timeout: 3e3
            },
            t)
        };
        return t && t.modal && (n.modal = !0),
        app.showSheet("message", n),
        this
    },
    error: function(e, t) {
        return app.msg(e, Object.append({
            type: "error"
        },
        t))
    },
    confirm: function(e, t) {
        var n = {
            confirm: {
                text: e
            },
            modal: !0
        };
        return app.showSheet("confirm", n),
        t && app.addOnceEvent("hideSheet", t),
        this
    },
    showTip: function(e, t, n) {
        n = Object.append({
            arrow: "left"
        },
        n);
        var r = e.retrieve("hb:tip");
        r || (r = (new Element("div", {
            "class": "msgr"
        })).inject(e, "after"), r.set("html", '<span class="txt"></span><span class="arrow">◣</span><span class="arrow-mask"></span>'), e.store("hb:tip", r)),
        r.getElement("span.txt").set("html", t),
        n.arrow == "left" && r.addClass("left-arrow"),
        n.width && r.setStyle("width", n.width),
        r.position({
            relativeTo: e,
            position: "upperRight",
            edge: "upperLeft",
            offset: {
                x: 15,
                y: 0
            }
        }),
        r.show()
    },
    hideTip: function(e) {
        var t = e.retrieve("hb:tip");
        if (!t) return;
        t.hide()
    },
    initThunderPinButtons: function() {
        var e = Cookie.read("thunder-wf") || 0,
        t = Cookie.read("thunder-pin") || 0;
        app.view.addEvent("click:relay(a.thunderpin)", 
        function(n) {
            function u() {
                r = app.view.getElement("a[data-id=" + i + "].thunderpin");
                var n = r.getParent("#PinActionButtons");
                if (n) s = n.getNext("#pin_img"),
                s = s ? s: null,
                s && (o = n.getNext("#pin_caption p.text"), o = o ? o.get("text") : ""),
                t++,
                Cookie.write("thunder-pin", t, {
                    domain: "." + app.host,
                    duration: 365
                });
                else if (n = r.getParent("div.pin")) s = n,
                o = n.getElement("p.description"),
                o = o ? o.get("text") : "",
                e++,
                Cookie.write("thunder-wf", e, {
                    domain: "." + app.host,
                    duration: 365
                })
            }
            function a(e, t, n) {
                if (!s) return;
                var i = r.retrieve("thunder-tip");
                if (i) return setTimeout(function() {
                    i.destroy(),
                    r.store("thunder-tip", null),
                    a(e, t, n)
                },
                500);
                var i = new Element("span", {
                    "class": "thunder-tip " + n + " thunder-tip-" + n,
                    html: '<span class="summary">' + e + "</span>"
                }),
                o = function() {
                    i.destroy(),
                    r.store("thunder-tip", null)
                };
                n == "failed" && t && i.set("html", i.get("html") + '<span class="detail">' + t + "</span>");
                if (n == "success") {
                    var u = t && t.pin_id || "";
                    i.set("html", i.get("html") + '<a class="x go" href="index.php?con=pins&act=item&id=' + u + '">查看采集</a>')
                }
                if (n == "warning") {
                    var f = new Element("div.confirm", {
                        text: "或者"
                    }),
                    l = (new Element("a.continue", {
                        text: "继续",
                        events: {
                            click: function() {
                                t.continue_func(),
                                o()
                            }
                        }
                    })).inject(f, "top"),
                    c = t.thunder_btn,
                    h = (new Element("a.cancel", {
                        text: "取消",
                        events: {
                            click: function() {
                                o(),
                                c.enable()
                            }
                        }
                    })).inject(f, "bottom");
                    i.adopt(f)
                }
                i.inject(s),
                r.store("thunder-tip", i);
                var p;
                i.addEvents({
                    mouseenter: function() {
                        clearTimeout(p)
                    },
                    mouseleave: function() {
                        if (n == "failed" || n == "success") p = setTimeout(function() {
                            o()
                        },
                        3e3)
                    }
                });
                if (n == "failed" || n == "success") p = setTimeout(function() {
                    o()
                },
                3e3)
            }
            function f() {
                u();
                var e = (new Button(r)).disable();
                a("采集中…", null, "ing");
                var t = {
                    text: o,
                    via: i,
                    check: !0
                },
                n = new Request.JSON({
                    url: "models/setpin.php",
                    data: t,
                    onSuccess: function(t) {
                        if (t.err) return e.enable(),
                        a("采集失败！", t.msg, "failed");
                        if (t.warning == 100) {
                            var r = function() {
                                return delete n.options.data.check,
                                n.post(),
                                !1
                            },
                            i = '这张图片已经在你的<a href="boards/' + t.pin.board.board_id + '/">' + t.pin.board.title + "</a>里了，再次转采吗？";
                            return a(i, {
                                continue_func: r,
                                thunder_btn: e
                            },
                            "warning")
                        }
                        return e.enable(),
                        a("采集成功！", t.pin, "success")
                    },
                    onFailure: function(t) {
                        return e.enable(),
                        a("采集失败！", "网络错误", "failed")
                    }
                });
                n.post()
            }
            var r = n.target;
            r.get("tag") !== "a" && (r = r.getParent("a"));
            var i = r.get("data-id"),
            s,
            o = "";
            return app.req.user ? f() : (app.requireLogin(function() {
                f()
            }), !1)
        });
        var n,
        r,
        i = Cookie.read("repin2win") || 0
    },
    initFollowButtons: function() {
        if (app.view.retrieve("followbutton")) return;
        app.view.addEvent("click:relay(a.follow,a.unfollow)", 
        function(e) {
            function i() {
                t.hasClass("unfollow") ? (r.setTitle("取消..."), (new Request.JSON({
                    url: "models/setboardfollow.php?id="+n+"&do=unfollow",
                    onSuccess: function(e) {
                        if (e.err) return r.setTitle("已关注"),
                        app.error(e.msg || app.COMMON_ERRMSG);
                        t.removeClass("unfollow").addClass("follow"),
                        r.setTitle("关注").enable()
                    }
                })).post()) : (r.setTitle("关注..."), (new Request.JSON({
                    url: "models/setboardfollow.php?id=" + n,
                    onSuccess: function(e) {
                        if (e.err) return r.setTitle("关注"),
                        app.error(e.msg || app.COMMON_ERRMSG);
                        t.addClass("unfollow").removeClass("follow"),
                        r.setTitle("已关注").enable()
                    }
                })).post())
            }
            var t = e.target;
            t.get("tag") !== "a" && (t = t.getParent("a"));
            var n = t.get("data-id"),
            r = (new Button(t)).disable();
            return app.req.user ? i() : (app.requireLogin(function() {
                t = app.view.getElement("a[data-id=" + n + "].follow"),
                t ? i() : app.error("这个画板是你自己的")
            }), !1)
        }),
        app.view.store("followbutton", !0)
    },
    initFollowUserButtons: function(e) {
        if (app.view.retrieve("followuserbutton")) return;
        app.view.addEvent("click:relay(a.followuser,a.unfollowuser)", 
        function(t) {
            function s() {
                n.hasClass("unfollowuser") ? (i.setTitle("Unfollowing..."), (new Request.JSON({
                    url: "/" + r + "/unfollow/",
                    onSuccess: function(t) {
                        if (t.err) return i.setTitle("取消关注"),
                        app.error(t.msg || app.COMMON_ERRMSG);
                        n.removeClass("unfollowuser").removeClass("wbtn").addClass("followuser").addClass("rbtn"),
                        i.setTitle("关注").enable(),
                        e && e(n)
                    }
                })).post()) : (i.setTitle("Following..."), (new Request.JSON({
                    url: "/" + r + "/follow/",
                    onSuccess: function(t) {
                        if (t.err) return i.setTitle("关注"),
                        app.error(t.msg || app.COMMON_ERRMSG);
                        n.addClass("unfollowuser").removeClass("followuser").removeClass("rbtn").addClass("wbtn"),
                        i.setTitle("取消关注").enable(),
                        e && e(n)
                    }
                })).post())
            }
            var n = t.target;
            n.get("tag") !== "a" && (n = n.getParent("a"));
            var r = n.get("data-id"),
            i = (new Button(n)).disable();
            return app.req.user ? s() : (app.requireLogin(function() {
                n = app.view.getElement("a[data-id=" + r + "].followuser"),
                n ? s() : app.error("这就是你自己")
            }), !1)
        }),
        app.view.store("followuserbutton", !0)
    },
    initLikeButtons: function() {
        if (app.view.retrieve("likebutton")) return;
        app.view.addEvent("click:relay(a.like,a.unlike)", 
        function(e) {
            function s() {
                var e = (new Button(t)).disable();
                t.hasClass("unlike") ? (e.setTitle("Unliking..."), (new Request.JSON({
                    url: "models/setpinlike.php?do=unlike&id="+n,
                    onSuccess: function(n) {
                        t.removeClass("unlike").addClass("like"),
                        e.setTitle("喜欢").enable(),
                        i && i.removeClass("liked").innerHTML--
                    }
                })).post()) : (e.setTitle("Liking..."), (new Request.JSON({
                    url: "models/setpinlike.php?id="+n,
                    onSuccess: function(n) {
						t.addClass("unlike").removeClass("like"),
                        e.setTitle("取消喜欢").enable(),
                        i && i.addClass("liked").innerHTML++
                    }
                })).post())
            }
            var t = this,
            n = t.get("data-id"),
            r = this.getParent(".pin");
            if (r) var i = r.getElement(".commodity .likes");
            return app.req.user ? s() : (app.requireLogin(function() {
                t = app.view.getElement("a[data-id=" + n + "].like"),
                t ? s() : app.error("这个采集是你自己的")
            }), !1)
        }),
        app.view.store("likebutton", !0)
    },
    initLikeComment: function() {
        if (app.view.retrieve("likecomment")) return;
        app.view.addEvent("mousedown:relay(a.like)", 
        function(e) {
            if (!app.req.user) return;
            var t = this.getParent(".pin");
            $$(".like-comment").each(function(e) {
                e.getElement(".like-comment-input").value || (e.hide(), e.getParent(".pin").getElement(".shiji-actions").setStyle("display", ""))
            }),
            t.getElement(".like-comment").show(),
            t.getElement(".shiji-actions").setStyle("display", "block")
        }),
        app.view.addEvent("click:relay(.like-comment-button)", 
        function() {
            var e = this.getParent(".pin"),
            t = this.getSiblings("textarea")[0],
            n = e.getElement(".GridComment"),
            r = e.getElement(".grid_comment_button"),
            i = e.getElement(".like-comment"),
            s = e.getElement(".actions");
            if (!t.value) return;
            n.value = t.value,
            r.click(),
            i.hide(),
            e.getElement(".shiji-actions").setStyle("display", "")
        }),
        app.view.addEvent("click:relay(.like-comment .close)", 
        function() {
            var e = this.getParent(".pin"),
            t = e.getElement(".like-comment");
            t.hide(),
            e.getElement(".shiji-actions").setStyle("display", "")
        }),
        app.view.store("likecomment", !0)
    },
    initDelCommentButtons: function() {
        if (app.view.retrieve("delcommentbutton")) return;
        app.view.addEvent("click:relay(a.DeleteComment)", 
        function(e) {
            if (!app.forceLogin()) return;
            var t = e.target;
            t.get("tag") !== "a" && (t = t.getParent("a"));
            var n = t.get("data-url");
            return (new Request.JSON({
                url: n,
                data: {
                    _method: "DELETE"
                },
                onSuccess: function(e) {
                    if (e.err) return app.error(e.msg || app.COMMON_ERRMSG);
                    var n = t.getParent("div.comment");
                    n && n.tween("opacity", 0).get("tween").chain(function() {
                        n.destroy()
                    })
                }
            })).post(),
            !1
        }),
        app.view.store("delcommentbutton", !0)
    },
    initReplyButtons: function() {
        if (app.view.retrieve("replybutton")) return;
        app.view.addEvent("click:relay(a.pinViewReplyButton)", 
        function(e) {
            var t = e.target;
            t.get("tag") !== "a" && (t = t.getParent("a"));
            var n = t.get("data-name"),
            r = $("CloseupComment");~r.value.indexOf(n) || (r.value = "@" + n + " " + r.value),
            r.setCaretPosition("end").fireEvent("keyup")
        }),
        app.view.store("replybutton", !0)
    },
    initAddCommentButtons: function() {
        function e(e) {
            if (e.hasClass("ani-affected")) return;
            e.addEvents({
                keydown: function(e) {
                    e.key == "esc" && e.target.blur();
                    if (e.key == "enter" && (!Browser.Platform.mac && e.control || Browser.Platform.mac && e.meta)) return n.bind(this.getNext(".grid_comment_button"))(),
                    !1
                },
                focus: function() {
                    this.getParent("form").getPrevious("a.img").addClass("comment-avatar-show"),
                    this.addClass("comment-with-avatar")
                },
                blur: function() {
                    this.value || (this.getParent("form").getPrevious("a.img").removeClass("comment-avatar-show"), this.removeClass("comment-with-avatar"))
                }
            }).addClass("ani-affected")
        }
        function t(e) {
            if (e.retrieve("registered-at")) return;
            e.store("registered-at", "registered"),
            new Autocompleter.Contacts.At(e, {
                width: 154,
                delay: 300
            })
        }
        function n() {
            function f() { (new Request.JSON({
                    url: u,
                    data: {
                        text: o
                    },
                    onSuccess: function(r) {
                        if (r.err) app.error(r.msg || app.COMMON_ERRMSG);
                        else {
                            n.hide(),
                            t.getElement(".actions .comment").removeClass("disabled"),
                            i.set("value", "");
                            var o = app.renderSync("bidcms/comment_item_convo", r.comment),
                            u = Elements.from(o).inject(s);
                            s.isDisplayed() || s.show(),
                            u.highlight("#EEE");
                            var a = app.page.$waterfall;
                            a && a.reposition(!0)
                        }
                        e.removeClass("disabled")
                    },
                    onFailure: function() {
                        app.error(app.COMMON_ERRMSG),
                        e.removeClass("disabled")
                    }
                })).post()
            }
            var e = this;
            if (e.hasClass("disabled")) return ! 1;
            var t = e.getParent("div.pin"),
            n = t.getElement("div.write"),
            r = n.getElement("form"),
            i = r.getElement("textarea"),
            s = n.getPrevious("div.comments"),
            o = i.get("value").trim();
            if (o == "" || o == "说说你的看法或@给好友") return i.highlight(),
            !1;
            var u = r.get("action"),
            a = t.get("data-id");
            return e.addClass("disabled"),
            app.req.user ? f() : (app.requireLogin(function() {
                t = app.view.getElement("div[data-id=" + a + "].pin");
                if (!t) return app.error("你不能评论这个采集");
                e = t.getElement("a.grid_comment_button"),
                n = t.getElement("div.write"),
                r = n.getElement("form"),
                i = r.getElement("textarea"),
                s = n.getPrevious("div.comments"),
                n.show(),
                i.set("value", o),
                f()
            }), !1)
        }
        if (app.view.retrieve("addcommentbutton")) return;
        app.view.addEvent("click:relay(textarea.GridComment)", 
        function(n) {
            var r = n.target;
            e(r),
            r.fireEvent("focus"),
            t(r)
        }),
        app.view.addEvent("click:relay(a.comment,a.replyButton)", 
        function(n) {
            var r = n.target;
            r.get("tag") !== "a" && (r = r.getParent("a"));
            var i = r.getParent("div.pin"),
            s = i.getElement("div.write"),
            o = s.getElement("textarea"),
            u = app.page.$waterfall;
            new FancyInput(o),
            e(o),
            t(o);
            if (r.hasClass("disabled")) s.hide(),
            u && u.update(i),
            r.removeClass("disabled");
            else {
                s.show(),
                u && u.reposition(!0),
                docScroller.chain(function() {
                    try {
                        o.focus()
                    } catch(e) {}
                    o.highlight()
                }),
                i.getSize().y > document.html.clientHeight ? docScroller.toElementCenter(o, "y") : docScroller.toElement(i, "y");
                if (r.hasClass("replyButton")) {
                    var a = r.getSiblings("p")[0].getElement(".author").innerHTML;
                    o.value == "说说你的看法或@给好友" && (o.value = ""),
                    ~o.value.indexOf(a) || (o.value = "@" + a + " " + o.value, o.setCaretPosition("end").fireEvent("keyup")),
                    i.getElements(".actions .comment")[0].addClass("disabled")
                } else r.addClass("disabled")
            }
            return ! 1
        }),
        app.view.addEvent("click:relay(.grid_comment_button)", n),
        app.view.store("addcommentbutton", !0)
    },
    _gaq_promotion: function() {
        _gaq = window._gaq || [];
        var e = Cookie.read("md") || "",
        t = Cookie.read("utm_source") || "",
        n = Cookie.read("utm_medium") || "",
        r = Cookie.read("utm_campaign") || "";
        if (!e) return;
        var i = {
            md: e,
            utm_source: t,
            utm_medium: n,
            utm_campaign: r
        },
        s = [];
        for (k in i) i[k] && s.push(k + "=" + i[k]);
        s.join("&"),
        s = s ? "?" + s: "",
        _gaq.push(["_trackPageview", "/ref/" + e + "/" + s])
    }
});
var Button = new Class({
    Implements: [Options, Class.Occlude],
    options: {},
    property: "Button",
    initialize: function(e, t) {
        this.element = document.id(e);
        if (this.occlude()) return this.occluded;
        this.setOptions(t),
        this.label = this.element.getElement("strong"),
        this.title = this.label.get("html"),
        this.action = this.options.click ? this.options.click.bind(this) : !1,
        delete this.options.click,
        this.attach(),
        this.element.hasClass("disabled") && this.disable()
    },
    destroy: function() {
        this.element.destroy()
    },
    setTitle: function(e) {
        return e = e || this.title,
        ~this.title.indexOf("<em>") && !~e.indexOf("<em>") && (e = "<em></em>" + e),
        this.label.set("html", e),
        this
    },
    show: function() {
        this.element.show()
    },
    hide: function() {
        this.element.hide()
    },
    attach: function() {
        return this.action && this.element.addEvent("click", this.action),
        this._disabled = !1,
        this
    },
    detach: function() {
        return this.action && this.element.removeEvent("click", this.action),
        this._disabled = !0,
        this
    },
    disable: function() {
        return this._disabled ? this: (this.detach(), this.element.addClass("disabled"), this.options.disabledTitle && this.setTitle(this.options.disabledTitle), this)
    },
    enable: function() {
        return this._disabled === !1 ? this: (this.attach(), this.element.removeClass("disabled"), this.options.disabledTitle && this.setTitle(this.title), this)
    },
    bind: function(e) {
        var t = instanceOf(e, FancyInput) ? e: e.retrieve("FancyInput");
        return t && t.addEvents({
            feed: this.enable.bind(this),
            hunger: this.disable.bind(this)
        }),
        this
    }
}),
PointyTip = new Class({
    Implements: [Events, Options, Class.Occlude],
    options: {},
    property: "PointyTip",
    initialize: function(e, t) {
        this.element = document.id(e);
        if (this.occlude()) return this.occluded;
        this.setOptions(t),
        this.titleEl = this.element.getElement(".title"),
        this.title = this.titleEl ? this.titleEl.get("html") : !1,
        this.contentEl = this.element.getElement(".content"),
        this.content = this.contentEl ? this.contentEl.get("html") : !1,
        this.closeBtn = this.element.getElement(".close"),
        this.arrow = this.element.getElement(".arrow"),
        this.arrowMask = this.element.getElement(".arrow-mask"),
        this.attach()
    },
    reset: function(e) {
        e.position && this.element.setStyles(e.position);
        if (e.arrow) {
            delete e.arrow.top,
            delete e.arrow.bottom;
            var t = Object.merge({
                left: "auto"
            },
            e.arrow);
            this.arrow.setStyles(t),
            t.right ? t.right -= 10: t.left -= 10,
            this.arrowMask.setStyles(t)
        }
        this.element.show()
    },
    setTitle: function(e) {
        return this.title = e,
        this
    },
    attach: function() {
        this.closeBtn && (this.addEvent("close", 
        function() {
            this.element.hide()
        }.bind(this)), this.closeBtn.addEvents({
            click: function() {
                this.fireEvent("close")
            }.bind(this)
        }))
    },
    close: function() {
        this.fireEvent("close")
    }
}); (function() {
    if (Modernizr.input.placeholder) return;
    this.Form || (this.Form = {}),
    this.Form.Placeholder = new Class({
        Implements: Options,
        options: {
            color: "#A9A9A9",
            clearOnSubmit: !0
        },
        initialize: function(e, t) {
            this.setOptions(t),
            this.element = document.id(e),
            this.placeholder = this.element.get("placeholder"),
            this.original_color = this.element.getStyle("color"),
            this.is_password = this.element.get("type") == "password" ? !0: !1,
            this.activatePlaceholder(),
            this.element.addEvents({
                focus: function() {
                    this.deactivatePlaceholder()
                }.bind(this),
                blur: function() {
                    this.activatePlaceholder()
                }.bind(this)
            }),
            this.element.getParent("form") && this.options.clearOnSubmit && this.element.getParent("form").addEvent("submit", 
            function(e) {
                this.element.get("value") == this.placeholder && this.element.set("value", "")
            }.bind(this))
        },
        activatePlaceholder: function() {
            if (this.element.get("value") == "" || this.element.get("value") == this.placeholder) this.is_password && this.element.set("type", "text"),
            this.element.setStyle("color", this.options.color),
            this.element.set("value", this.placeholder)
        },
        deactivatePlaceholder: function() {
            this.element.get("value") == this.placeholder && (this.is_password && this.element.set("type", "password"), this.element.set("value", ""), this.element.setStyle("color", this.original_color))
        }
    })
})();
var FancyInput = new Class({
    Binds: ["_checker"],
    Implements: [Events, Options, Class.Occlude],
    options: {},
    property: "FancyInput",
    initialize: function(e, t) {
        this.element = document.id(e);
        if (this.occlude()) return this.occluded;
        this.setOptions(t),
        this.label = this.element.getNext("label"),
        this.placeholder = this.element.get("placeholder"),
        !this.label && this.placeholder && !Modernizr.input.placeholder && new Form.Placeholder(this.element);
        if (Browser.ie && this.label) {
            if (Browser.ie6) {
                var e = this.label.getNext("span.fff");
                e && e.dispose()
            }
            this.label.addEvent("click", 
            function() {
                this.element.focus()
            }.bind(this))
        }
        this.attach()
    },
    attach: function() {
        this._timer = null,
        this.element.addEvents({
            keyup: this._checker,
            focus: function() {
                this._timer = this._checker.periodical(500),
                this.fireEvent("focus", this)
            }.bind(this),
            blur: function() {
                this._timer && clearTimeout(this._timer),
                this.fireEvent("blur", this)
            }.bind(this)
        }),
        this._checker()
    },
    setValue: function(e) {
        this.element.set("value", e),
        this._checker()
    },
    getValue: function() {
        return this.element.get("value")
    },
    _checker: function() {
        this.element.get("value") != "" ? (this.label && this.label.hide(), this.fireEvent("feed")) : (this.label && this.label.show(), this.fireEvent("hunger"))
    }
}),
PopupPicker = new Class({
    Implements: [Events, Options],
    Binds: ["attach", "show", "bodyClicked"],
    options: {},
    initialize: function(e, t, n) {
        this.setOptions(n),
        this.element = document.id(e),
        this.popup = document.id(t),
        this.attach(),
        this.popup.addEvent("click:relay(li)", 
        function(e) {
            var t = e.target;
            t.get("tag") != "li" && (t = t.getParent()),
            this.fireEvent("pick", t),
            this.hide()
        }.bind(this))
    },
    attach: function() {
        this.element.addEvent("click", this.show)
    },
    detach: function() {
        this.element.removeEvent("click", this.show)
    },
    show: function() {
        this.detach(),
        this.popup.show(),
        document.body.addEvent("click", this.bodyClicked),
        this.fireEvent("show")
    },
    hide: function() {
        this.popup.hide(),
        document.body.removeEvent("click", this.bodyClicked),
        this.attach.delay(100),
        this.fireEvent("hide")
    },
    bodyClicked: function(e) {
        this.popup.isDisplayed() && !this.popup.mouseOver(e.page) && this.hide()
    }
}),
CategoryPicker = new Class({
    Implements: [Class.Occlude, Events, Options],
    Binds: ["select"],
    property: "CategoryPicker",
    options: {
        itemHeight: 30,
        maxVisibleItems: 8,
        setHeight: !1
    },
    initialize: function(e, t) {
        this.element = document.id(e);
        if (this.occlude()) return this.occluded;
        this.setOptions(t),
        this.init()
    },
    init: function() {
        var e = this.element;
        this._maxH = this.options.itemHeight * this.options.maxVisibleItems,
        this.curEl = e.getElement(".CurrentBoard"),
        this.popEl = e.getElement(".BoardList"),
        this.bodyEl = e.getElement(".BoardListBody"),
        this.listEl = this.bodyEl.getElement("ul"),
        this.popup = new PopupPicker(e, this.popEl, {
            onPick: this.select.bind(this)
        }),
        this.build()
    },
    build: function() {
        this._empty(),
        app.settings.categories.each(function(e) {
            if (e.id == "videos" || e.id == "web_captures" || e.id == "taomm") return;
            this._injectItem(e.id, e.name)
        },
        this)
    },
    _empty: function() {
        this._items = 0,
        this.listEl.empty()
    },
    _injectItem: function(e, t) {
        this._items += 1;
        var n = (new Element("li", {
            "class": "BoardCategory",
            data: e,
            html: "<span>" + t + "</span>"
        })).inject(this.listEl);
        if (this.options.setHeight) {
            var r = this._items * this.options.itemHeight;
            this.bodyEl.setStyle("height", r > this._maxH ? this._maxH: r)
        }
        return n
    },
    select: function(e) {
        if (!e) return;
        if (typeOf(e) === "element") return this.curEl.store("data", e.get("data")).set("html", e.getElement("span").get("html")),
        this.fireEvent("select"),
        this;
        var t = this.listEl.getElements("li");
        for (var n = 0, r = t.length; n < r; n++) if (t[n].get("data") == e) return this.select(t[n]);
        return this
    },
    hide: function() {
        this.popup.hide()
    },
    getSelected: function() {
        return this.curEl.retrieve("data")
    }
}),
BoardPicker = new Class({
    Extends: CategoryPicker,
    options: {
        setHeight: !0
    },
    init: function() {
        this.parent(),
        app.req.user.boards ? this.build() : (new Request.JSON({
            url: "models/getmyboards.php",
            noCache: !0,
            onSuccess: function(e) {
                if (e.err) this.curEl.set("html", e.msg);
                else {
                    var t = e.boards.filter(function(e) {
                        return e.is_private != 2
                    });
                    app.req.user.boards = t,
                    this.build()
                }
            }.bind(this),
            onFailure: function() {
                this.curEl.set("html", app.COMMON_ERRMSG)
            }.bind(this)
        })).get()
    },
    add: function(e) {
        app.req.user.boards.push(e);
        var t = this._injectItem(e.board_id, e.title);
        return this.select(t),
        this
    },
    build: function() {
        if (!app.req.user.boards) return;
        var e = app.req.user.boards;
        if (!e || e.length === 0) return;
        this._empty(),
        e.each(function(e) {
            this._injectItem(e.board_id, e.title)
        },
        this),
        this.select(this.listEl.getFirst("li"))
    }
}),
ImagePicker = new Class({
    Implements: [Events, Options, Class.Occlude],
    options: {
        cellW: 170,
        minW: 16,
        minH: 16
    },
    property: "ImagePicker",
    initialize: function(e, t) {
        this.element = document.id(e);
        if (this.occlude()) return this.occluded;
        this.setOptions(t),
        this.listEl = this.element.getElement(".carousel-list"),
        this.arrowEl = this.element.getElement(".Arrows"),
        this.loadEl = this.element.getElement(".load"),
        this.attach()
    },
    attach: function() {
        var e = !0;
        this.listEl.get("tween").addEvents({
            start: function() {
                e = !1
            },
            complete: function() {
                e = !0
            }
        }),
        this.arrowEl.getElements("a.picker").addEvent("click", 
        function(t) {
            var n = this.listEl.getStyle("left").toInt(),
            r = this.listEl.getStyle("width").toInt();
            return t.target.hasClass("imagePickerNext") && n > this.options.cellW - r ? e && this.listEl.tween("left", n, n - this.options.cellW) : t.target.hasClass("imagePickerPrevious") && n < 0 && e && this.listEl.tween("left", n, n + this.options.cellW),
            !1
        }.bind(this));
        var t = this.listEl;
        this.listEl.addEvent("click:relay(li)", 
        function() {
            t.getElements("li").removeClass("selected"),
            this.addClass("selected")
        })
    },
    load: function(e, t, n, r) {
        if (this.loading) return;
        typeOf(n) == "function" && (r = n, n = !0),
        n = n === undefined ? !0: !!n;
        if (e.length == 0) return;
        this.loading = !0,
        this.loadEl.show(),
        this.fireEvent("startLoading");
        var i = new Asset.images(e, {
            onComplete: function() {
                this.loadEl.hide(),
                this.loading = !1,
                n && (i = i.filter(function(e) {
                    return e.width === "" || e.height === "" || e.width.toInt() >= this.options.minW && e.height.toInt() >= this.options.minH
                }.bind(this))),
                typeOf(r) == "function" && r(i),
                this.build(i, t),
                this.fireEvent("finishLoading")
            }.bind(this)
        });
        return i
    },
    build: function(e, t) {
        this.source = t,
        this.listEl.set("tween", {
            duration: "short"
        }).setStyles({
            width: e.length * this.options.cellW,
            left: 0
        }).empty(),
        e.each(function(e) {
            e.width >= e.height ? e.set("width", this.options.cellW).erase("height") : e.set("height", this.options.cellW).erase("width"),
            e.inject((new Element("li", {
                "class": "carousel-item"
            })).inject(this.listEl))
        },
        this),
        e.length > 1 ? (this.arrowEl.show(), this.element.getParent(".pbt").addClass("multi")) : (this.arrowEl.hide(), this.element.getParent(".pbt").removeClass("multi"))
    },
    insertImageElement: function(e, t, n) {
        n.width >= n.height ? n.set("width", this.options.cellW).erase("height") : n.set("height", this.options.cellW).erase("width"),
        n.inject((new Element("li", {
            "class": "carousel-item"
        })).inject(this.listEl))
    },
    assetComplate: function() {
        this.loadEl.hide(),
        this.loading = !1,
        this.fireEvent("finishLoading")
    },
    getSelected: function() {
        var e = this.listEl.getElement(".selected");
        if (e) var t = e.getElement("img");
        else var n = 0 - this.listEl.getStyle("left").toInt() / this.options.cellW,
        t = this.listEl.getElements("li img")[n];
        return {
            el: t,
            src: t.src,
            link: this.source
        }
    }
});
/*t.createCellLoader(t.page.bidcmsurl, 20, i, 
                function(e) {
					return t.page.boards && Array.prototype.push.apply(t.page.boards, e.boards),
                    {
                        data: e.boards
                    }
                })*/
app.createCellLoader = function(e, t, n, r) {
	 function u(e, t) {
		var n;
        return e.pin_id ? n = app.renderSync("bidcms/pin_item", {
            user: e.user || t.user,
            pin: e,
            board: e.board || t.board
        }) : e.board_id ? n = app.renderSync("bidcms/board_item", {
            board: e,
            user: app.req.user
        }) : n = app.renderSync("bidcms/user_item", {
            user: e,
            current_user: app.req.user
        }),
        (new Element("div")).set("html", n).getFirst()
    }
    function a(e) {
        var t;
        return e.pin_id ? t = e.seq ? e.seq: e.pin_id: e.board_id ? t = e.seq: t = e.user_id,
        t
    }
    var i = !1,
    s = !1,
    o = [];
    t = t || 10,
    typeof n == "function" ? (r = n, n = null) : n !== !1 && (n = n || 1);
    var f = 0;
    return function(l, c) {

        c = c ? c: "load";
		switch (c) {
        case "load":
			if (i) return;
            i = !0;
            var h = l.getLast();
			if (!h) return;
            var p = h.get("data-seq");
            l.showIndicator();
			bidcmsdo=e.split('/');
			var d ={
				con: 'ajax',
				page: ++n,
                pagesize: t,
				cateid:'a',
            };
			d.act=bidcmsdo[0]!=undefined?bidcmsdo[0].replace('bidcmsact_',''):'all';
			d.type=bidcmsdo[1]!=undefined?bidcmsdo[1].replace('bidcmstype_',''):'all';
			d.id=bidcmsdo[1]!=undefined?bidcmsdo[1].replace('bidcmsid_',''):'0';
            d.wfl = 1;
            function v() {
				f++,
				(new Request.JSON({
                    url: 'index.php',
                    noCache: !0,
                    data: d,
                    onSuccess: function(e) {
						l.hideIndicator();
                        if (e.err) {
							 app.error(e.msg || app.COMMON_ERRMSG);
                            return
                        }
						var e = r ? r(e) : {
                            data: e.pins
                        };
						
						e.data.length && e.data.each(function(t) {
							l.append(u(t, e.extra))
                        }),
                        e.data.length < t && l.stopLoader(!0)
                    },
                    onComplete: function() {
						 i = !1
                    }
                })).get()
            } ! app.req.user && f === 0 && !Browser.ie6 && app.render("registration_tip", 
            function(e, t) {
                var n = (new Element("div", {
                    html: t
                })).getChildren().inject(document.body);
                e && Browser.exec(e)
            }),
            v();
            break;
        case "fetch":
            if (n) return;
            if (s) return;
            s = !0;
            if (o.length >= 100) return;
            var m;
            o.length > 0 ? m = a(o.getLast()) : m = l.getFirst() && l.getFirst().get("data-seq");
            if (!m) return; (new Request.JSON({
                url: 'models/api.php?target='+escape(e),
                data: {
                    since: m,
                    limit: 100,
                    wfl: 1
                },
                noCache: !0,
                onSuccess: function(e) {
                    if (e.err) {
                        app.error(e.msg || app.COMMON_ERRMSG);
                        return
                    }
                    var e = r ? r(e) : {
                        data: e.pins
                    };
                    if (e.data && e.data.length > 0) {
                        o = o.concat(e.data);
                        var t = o.length,
                        n = t >= 100 ? "100+": t;
                        l.setNewIndicatorTitle(n + "条新采集"),
                        document.title.match(/^\(\d+\)/) ? document.title = document.title.replace(/^\(\d+\)/, "(" + n + ")") : document.title = "(" + n + ") " + document.title,
                        l.showNewIndicator()
                    }
                },
                onComplete: function() {
                    s = !1,
                    l.scheduleFetcher()
                }
            })).get();
            break;
        case "show_new":
            document.title = document.title.replace(/^\(\d+\+?\) /, ""),
            l.hideNewIndicator();
            var g = [];
            if (o.length) {
                for (var y = o.length - 1; y >= 0; y--) g.push(u(o[y]));
                o = [],
                l.insert(g.reverse())
            }
            break;
        default:
            app.error("CellLoader unkown action")
        }
    }
};
var Waterfall = new Class({
    Binds: ["resize", "scroll", "_append", "fetchNew"],
    Implements: [Options, Events],
    options: {
        container: null,
        cellWidth: 222,
        cellSpace: 15,
        minCols: 4,
        maxCols: 6,
        cellSelector: "div.wfc",
        sideSpace: 0,
        preservedCols: 0,
        containerSelector: "div.wrapper",
        loadOffset: 100,
        loader: null,
        fetcher: !1,
        containerSelectorOffset: 50
    },
    initialize: function(e, t) {
        this.element = document.id(e),
        this.setOptions(t),
        this.container = this.options.container ? document.id(this.options.container) : document.body,
        this.cols = 0,
        this.width = 0,
        this.height = 0,
        this.options.cellSelector ? this.cells = this.element.getElements(this.options.cellSelector) : this.cells = new Elements,
        this._top = this.element.getCoordinates(this.container).top,
        this.options.loader && (this._indicator = this._createIndicator()),
        this.options.fetcher && (this._newIndicator = this._createNewIndicator()),
        this._appending = [],
        Cookie.read("wft") && (Cookie.dispose("wft"), this.cells.addClass("wft")),
        this.attach()
    },
    destroy: function() {
        this.detach(),
        this._indicator && this._indicator.destroy(),
        this._newIndicator && this._newIndicator.destroy()
    },
    _createIndicator: function() {
        return (new Element("div", {
            "class": "loading"
        })).inject(this.element, "after").hide().set("html", '<img src="static/bidcms/i/loading.gif"><span>正在加载...</span>')
    },
    _createNewIndicator: function() {
        var e = (new Element("a", {
            id: "NewIndicator",
            "class": "btn wbtn Indicator"
        })).inject(app.view, "top").hide().set("html", "<strong>有新的采集</strong><span></span>"),
        t = this;
        return new Button(e, {
            click: function() {
                t.options.loader(t, "show_new")
            }
        })
    },
    setNewIndicatorTitle: function(e) {
        this._newIndicator && (this._newIndicator.title = e, this._newIndicator.setTitle(e))
    },
    showIndicator: function() {
        this._indicator && this._indicator.show()
    },
    showNewIndicator: function() {
        this._newIndicator && this._newIndicator.show()
    },
    hideIndicator: function() {
        this._indicator && this._indicator.hide()
    },
    hideNewIndicator: function() {
        this._newIndicator && this._newIndicator.hide()
    },
    fetchNew: function() {
        this.options.loader(this, "fetch")
    },
    scheduleFetcher: function() {
        this._newIndicator && (this._fetchTimer && clearTimeout(this._fetchTimer), this._fetchTimer = setTimeout(this.fetchNew, 3e4))
    },
    attach: function() {
        window.addEvent("resize", this.resize),
        window.addEvent("scroll", this.scroll),
        this.scheduleFetcher()
    },
    detach: function() {
        window.removeEvent("resize", this.resize),
        window.removeEvent("scroll", this.scroll),
        this._fetchTimer && (clearTimeout(this._fetchTimer), delete this._fetchTimer)
    },
    resize: function() {
        return this.reposition()
    },
    scroll: function() {
		if (!this.options.loader || this._stopLoading || this._appending.length) return;
        var e = window.getSize().y,t = window.getScroll().y, n = this._hs[this._minCol] + this._top;
        if (t + e < n - this.options.loadOffset) return;
		this.options.loader(this)
    },
    stopLoader: function(e) {
        return this._stopLoading = !0,
        e && this._indicator && this._indicator.set("html", '<img src="static/bidcms/i/end.png">').show(),
        this
    },
    startLoader: function() {
        return this._stopLoading = !1,
        this._indicator && (this._indicator.destroy(), this._indicator = this._createIndicator()),
        this
    },
    getLast: function() {
        return this.cells.getLast()
    },
    getFirst: function() {
        for (var e = 0; e < this.cells.length; e++) if (this.cells[e].get("data-seq")) return this.cells[e]
    },
    _getFirstIndex: function() {
        for (var e = 0; e < this.cells.length; e++) if (this.cells[e].get("data-seq")) return e
    },
    reposition: function(e) {
        if (this._needsLayout(e)) {
            this._updateWidth();
            for (var t = 0, n = this.cells.length; t < n; t++) this._position(this.cells[t]);
            this.options.paddingBottom && this._paddingBottom(),
            this.fireEvent("layout", this)
        }
        return this
    },
    update: function(e) {
        var t = e.retrieve("wf:col"),
        n = e.getHeight(),
        r = n - e.retrieve("wf:height"),
        i = this.cells,
        s = i.indexOf(e),
        o = [];
        for (var u = s + 1, a = i.length; u < a; u++) {
            var f = i[u];
            f.retrieve("wf:col") === t && f.setStyle("top", f.getStyle("top").toInt() + r)
        }
        return this._hs[t] += r,
        e.store("wf:height", n),
        this
    },
    insert: function(e) {
        Array.from(e).each(function(e) {
            this._insert(e)
        },
        this),
        this.cells.length > 100 && this.strip(this.cells.length - 100),
        docScroller.toTop(),
        this.reposition(!0)
    },
    strip: function(e) {
        while (e--) {
            var t = this.cells.pop();
            if (!t) break;
            t.destroy()
        }
        return this._stopLoading && this.startLoader(),
        this
    },
    _insert: function(e) {
        return e.inject(this.getFirst(), "before"),
        this.cells.contains(e) || this.cells.splice(this._getFirstIndex(), 0, e),
        this
    },
    append: function(e) {
        return this.element.adopt(e),
        Modernizr.csstransitions ? e.setStyle("opacity", 0) : e.setStyle("display", "none"),
        this.cells.include(e),
        this._appending.push(e),
        this._appendTimer || (this._appendTimer = setTimeout(this._append, 10)),
        this
    },
    isShowNewIndicator: function() {
        return this._newIndicator && this._newIndicator.element.isVisible()
    },
    _append: function() {
        delete this._appendTimer;
        var e = this.cols - this.options.preservedCols;
        while (e--) {
            var t = this._appending.shift();
            if (!t) return this.scroll();
            this._position(t)
        }
        this.options.paddingBottom && this._paddingBottom(),
        this._appendTimer = setTimeout(this._append, 100)
    },
    _updateWidth: function() {
        $$(this.options.containerSelector).setStyle("width", this.width)
    },
    _position: function(e) {
        var t = this.cols - this.options.preservedCols,
        n = 0,
        r = this._hs;
        if (e.hasClass("topright")) n = t - 1;
        else for (var i = 0; i < t; i++) r[i] < r[n] && (n = i);
        e.setStyles({
            position: "absolute",
            display: "",
            left: n * (this.options.cellWidth + this.options.cellSpace),
            top: r[n]
        }),
        Modernizr.csstransitions && e.setStyle("opacity", 1);
        var s = e.getHeight();
        e.store("wf:height", s).store("wf:col", n),
        r[n] += s + this.options.cellSpace;
        var o = min = 0;
        for (var i = 0; i < t; i++) r[i] < r[min] && (min = i),
        r[i] > r[o] && (o = i);
        this._maxCol = o,
        this._minCol = min,
        this.element.setStyle("height", r[o] + this.options.containerSelectorOffset)
    },
    _paddingBottom: function() {
        this.element.getElements(".padding-block").dispose();
        var e = this.cols - this.options.preservedCols,
        t = this._hs,
        n = 0,
        r = t[0];
        for (var i = 0; i < t.length; i++) n < t[i] && (n = t[i]),
        r > t[i] && (r = t[i]);
        if (r == 0 && n == 0) return;
        var s,
        o = 20,
        u = n - r;
        for (var i = 0; i < e; i++) s = n - t[i] + o,
        s <= o && (s = o),
        (new Element("div", {
            "class": "padding-block",
            styles: {
                position: "absolute",
                opacity: 1,
                display: "",
                width: this.options.cellWidth,
                height: s,
                left: i * (this.options.cellWidth + this.options.cellSpace),
                top: t[i]
            }
        })).inject(this.element)
    },
    _needsLayout: function(e) {
        var t = this.options.cellWidth + this.options.cellSpace,
        n = Math.floor((this.container.getWidth() - this.options.sideSpace * 2) / t);
        n > this.options.maxCols && (n = this.options.maxCols),
        n < this.options.minCols && (n = this.options.minCols);
        if (!e && this.cols === n) return ! 1;
        var r = [];
        for (var i = 0; i < n; i++) r.push(0);
        return this.width = n * t - this.options.cellSpace,
        this.cols = n,
        this._hs = r,
        !0
    }
}),
Uploadr = new Class({
    Implements: [Options, Events, Class.Occlude],
    options: {
        url: "models/upload.php",
        uploadText: "正在上传...",
        fieldName: "file"
    },
    property: "Uploadr",
    initialize: function(e, t) {
        this.target = this.element = document.id(e);
        if (this.occlude()) return this.occluded;
        this.setOptions(t),
        Browser.ie ? (this.box = (new Element("div")).inject(this.target, "after"), this.target.hide()) : (this.box = (new Element("div")).setStyles({
            position: "absolute",
            opacity: .01,
            overflow: "hidden"
        }).inject(this.target, "after"), this.btn = new Button(this.target, {
            disabledTitle: this.options.uploadText,
            click: function() {
                return this.file.click(),
                !1
            }.bind(this)
        })),
        this.create()
    },
    create: function() {
        this.clear(),
        this.iframe || (this.iframe = (new IFrame({
            src: "javascript:'<html></html>'",
            frameborder: "no",
            border: 0
        })).inject(this.box), this.iframe.addEvents({
            load: this.onLoad.bind(this)
        })),
        Browser.ie ? (this.iframe.setStyles({
            width: 300,
            height: 30
        }), this.runner = this.createIBody.periodical(50, this)) : (this.iframe.setStyle("display", "none"), this.createInput())
    },
    createIBody: function() {
        var e = this.iframe.contentWindow.document;
        if (!e || !e.body) return;
        clearTimeout(this.runner),
        e.body.innerHTML = '<form method="post" enctype="multipart/form-data" id="form"><input type="file" id="file" style="position:absolute;left:0;top:0;" /><div id="data"></div></form><style type="text/css">body{background:#FCF9F9;}input{border: 1px solid #999;padding: 5px;}</style>',
        this.doc = e,
        this.processIBody.delay(50, this)
    },
    processIBody: function() {
        if (! (this.file = this.doc.getElementById("file")) || !this.file.offsetHeight) return this.createIBody();
        this.file.onchange = this.select.bind(this)
    },
    createInput: function() {
        var e = this.file = (new Element("input", {
            type: "file",
            name: this.options.fieldName,
            size: 1,
            styles: {
                position: "absolute",
                top: 0,
                left: 0,
                border: 0
            }
        })).inject(this.box);
        e.onfocus = function() {
            return ! 1
        },
        e.onchange = this.select.bind(this)
    },
    onLoad: function() {
        if (!this.iframe.parentNode) return;
        var e = this.iframe.contentWindow.document,
        t = e.body.innerHTML;
        if (this.loaded === !1) this.loaded = !0;
        else if (t !== "") {
            this.loaded = !0;
			var n = t.match(/(\{.+\})/g);
            t = JSON.decode(n[0], !0),
            t.err ? this.fireEvent("failed", [t]) : this.fireEvent("complete", [t]),
            this.enable(),
            this.create()
        }
    },
    disable: function() {
        this.btn && this.btn.disable(),
        this.disabled = !0
    },
    enable: function() {
        this.btn && this.btn.enable(),
        this.disabled = !1
    },
    select: function() {
        this.disabled || this.disable(),
        this.file.onchange = this.file.onmousedown = this.file.onfocus = null;
        if (Browser.ie) {
            var e = this.iframe.contentWindow.document;
            this.form = e.forms[0],
            this.file = this.form.elements[0]
        } else this.form = (new Element("form", {
            method: "post",
            enctype: "multipart/form-data",
            target: this.iframe.get("name"),
            styles: {
                width: 0,
                height: 0,
                overflow: "hidden"
            }
        })).adopt(this.file).inject(this.box);
        this.form.action = this.options.url,
        this.file.name = this.options.fieldName,
        this.fireEvent("start"),
        this.form.submit(),
        Browser.ie && this.iframe.set("visibility", "hidden")
    },
    reposition: function() {
        var e = this.target.getCoordinates(this.box.getOffsetParent());
        this.box.setStyles(e)
    },
    clear: function() {
        Browser.ie || this.form && this.form.destroy(),
        this.form = null,
        this.file = null
    }
}),
FixedHeader = new Class({
    Implements: [Options, Events],
    options: {
        offset: {
            up: 20,
            down: 50
        },
        scrollElement: window
    },
    initialize: function(e, t) {
        this.setOptions(t),
        this.element = document.id(e),
        this.scrollElement = document.id(this.options.scrollElement),
        this.previousScroll = 0,
        this.originalStyles = this.element.getStyles("position", "top", "left", "right"),
        this.originalTop = this.element.getPosition().y,
        this.bound = {
            scroll: this.scroll.bind(this)
        },
        this.originalHeaderTop = this.element.getCoordinates().top,
        this.fx = new Fx.Tween(this.element, {
            duration: "short"
        }),
        this.scroll()
    },
    attach: function() {
        return this.checkHeight(),
        this
    },
    detach: function() {
        return this.detachScroll(),
        this
    },
    destroy: function() {
        this.detach(),
        this.placeholder && this.placeholder.destroy()
    },
    attachScroll: function() {
        return this.scrollElement.addEvent("scroll", this.bound.scroll),
        this
    },
    detachScroll: function() {
        return this.scrollElement.removeEvent("scroll", this.bound.scroll),
        this
    },
    checkHeight: function() {
        return document.getSize().y < this.element.getSize().y ? this.detachScroll().reset() : this.attachScroll(),
        this
    },
    isPinned: function() {
        return this.element.retrieve("pin:_pinned")
    },
    scroll: function() {
        var e = this.scrollElement.getScroll().y;
        return e <= this.originalHeaderTop ? this.reset(!0) : this.pin(!0),
        this
    },
    reset: function(e) {
        this.unpin(e)
    },
    show: function() {
        return this.pin(this.element.getTop() >= this.scrollElement.getScroll().y)
    },
    pin: function(e) {
        if (!this.isPinned()) {
            var t = this.element.getHeight();
            this.fx.cancel(),
            this.element.pin().setStyles({
                left: 0,
                right: 0,
                top: e ? 0: -t
            }),
            e || this.fx.start("top", -t, 0),
            this.placeholder = this.placeholder || new Element("div", {
                styles: this.originalStyles
            }),
            this.placeholder.setStyle("height", t).inject(this.element, "before"),
            this.fireEvent("pin")
        }
        return this
    },
    unpin: function(e) {
        if (this.isPinned()) if (e) this._unpin();
        else if (!this.fx.isRunning()) {
            var t = this;
            this.scrollElement.getScroll().y ? this.fx.start("top", 0, -this.element.getHeight()).chain(function() {
                t._unpin()
            }) : t._unpin()
        }
        return this
    },
    _unpin: function(e) {
        this.element.unpin().setStyles(this.originalStyles),
        this.placeholder.dispose(),
        this.fireEvent("unpin")
    }
}),
FixedNavigator = new Class({
    Implements: [Options],
    options: {
        scrollElement: window
    },
    initialize: function(e, t) {
        this.setOptions(t),
        this.element = $$(e)[0],
        this.fixedNav = this.element.getParent(".fixed-nav"),
        this.placeholder = new Element("div", {
            styles: {
                margin: this.element.getStyle("margin"),
                height: this.element.getStyle("height")
            }
        }),
        this.bound = {
            scroll: this.scroll.bind(this),
            resize: this.resize.bind(this)
        },
        this.isPinned = !1
    },
    scroll: function() {
        this.isPinned ? this.options.scrollElement.getScroll().y < this.placeholder.getPosition().y && this.unpin() : this.options.scrollElement.getScroll().y >= this.fixedNav.getPosition().y && this.pin()
    },
    pin: function() {
        this.isPinned = !0,
        this.placeholder.inject(this.fixedNav, "after"),
        this.fixedNav.addClass("enable"),
        this.resize()
    },
    unpin: function() {
        this.isPinned = !1,
        this.fixedNav.removeClass("enable"),
        this.placeholder.dispose()
    },
    resize: function() {
        this.fixedNav.setStyle("width", window.getSize().x)
    },
    attach: function() {
        return this.options.scrollElement.addEvent("scroll", this.bound.scroll),
        window.addEvent("resize", this.bound.resize),
        this
    },
    detach: function() {
        return this.options.scrollElement.removeEvent("scroll", this.bound.scroll),
        window.removeEvent("resize", this.bound.resize),
        this
    }
}),
SmoothNotification = new Class({
    Implements: [Options],
    options: {
        duration: 3e3,
        styles: {
            position: "absolute",
            "z-index": 999999,
            "text-align": "center"
        },
        dispose: !0,
        style: "normal",
        relative: {
            to: "",
            position: "topcenter",
            edge: "bottomcenter",
            offset: {
                x: 0,
                y: 0
            }
        },
        fadeType: "down",
        horizontalCenter: !0,
        verticalCenter: !1,
        closeButton: !1,
        arrow: !1,
        arrowColor: "rgba(0, 0, 0, 0.6)",
        arrowStyles: {},
        mask: !1,
        maskStyle: {},
        hideNotiOnclickMask: !0
    },
    initialize: function(e) {
        this.setOptions(e),
        this.main = new Element("div.smooth-notification"),
        this.mask = new Element("div.sm-mask"),
        this.closeButton = (new Element("div.sm-closeButton")).addEvent("click", 
        function() {
            this.hide()
        }.bind(this)),
        this.isShowing = !1
    },
    setPosition: function() {
        $$("body")[0].grab(this.main, "top"),
        this.main.setStyles({
            top: 0,
            left: 0
        }),
        this.options.relative.to ? this.main.position({
            relativeTo: this.options.relative.to,
            position: this.options.relative.position,
            edge: this.options.relative.edge,
            offset: this.options.relative.offset
        }) : (this.options.horizontalCenter && this.main.setStyle("left", document.documentElement.clientWidth / 2 + window.getScroll().x - this.main.getSize().x / 2), this.options.verticalCenter && (this.main.getStyle("position") != "fixed" ? this.main.setStyle("top", document.documentElement.clientHeight / 2 + window.getScroll().y - this.main.getSize().y / 2) : this.main.setStyle("top", document.body.getSize().y / 2 - this.main.getSize().y / 2)))
    },
    setCloseButton: function() {
        this.options.closeButton ? this.closeButton.inject(this.main) : this.closeButton.dispose
    },
    setArrow: function() {
        var e = this.main.getElement(".sm-arrow");
        e && e.destroy();
        if (!this.options.arrow) return;
        var t = !0;
        this.options.arrowColor != "rgba(0, 0, 0, 0.6)" && (t = !1),
        Browser.ie6 && this.main.setStyle("filter", 0);
        var n = new Element("div.sm-arrow");
        t ? n.set("class", "sm-arrow pic-" + this.options.arrow) : (n.set("class", "sm-arrow border-arrow border-" + this.options.arrow), this.options.arrow == "down" && n.setStyle("border-top-color", this.options.arrowColor), this.options.arrow == "up" && n.setStyle("border-bottom-color", this.options.arrowColor), this.options.arrow == "left" && n.setStyle("border-right-color", this.options.arrowColor), this.options.arrow == "right" && n.setStyle("border-left-color", this.options.arrowColor)),
        n.setStyles(this.options.arrowStyles).inject(this.main)
    },
    setMask: function() {
        if (!this.options.mask) return;
        var e = document.html.getScrollSize(); (Browser.ie6 || Browser.ie7) && this.mask.setStyles({
            width: document.body.offsetWidth,
            height: document.body.offsetHeight,
            position: "absolute"
        }),
        this.mask.setStyles(this.options.maskStyle).inject(document.body),
        this.options.hideNotiOnclickMask && this.mask.addEvent("click", 
        function() {
            this.hide()
        }.bind(this))
    },
    setDefaultOption: function(e) {
        e == "window" && (this.options.horizontalCenter = this.options.verticalCenter = !0)
    },
    show: function(e, t) {
        return this.setOptions(t),
        this.main.dispose(),
        clearTimeout(this.hideTimer),
        clearTimeout(this.disposeTimer),
        e && (this.main.empty(), typeOf(e) == "string" ? this.main.grab(new Element("a.notification", {
            html: e
        })) : this.main.adopt(e)),
        this.setDefaultOption(this.options.style),
        this.setCloseButton(),
        this.main.set("class", ["smooth-notification", this.options.fadeType, this.options.style].join(" ")),
        this.main.setStyles(this.options.styles),
        this.setPosition(),
        this.setArrow(),
        this.setMask(),
        this.main.setStyles(this.options.styles),
        function() {
            this.main.addClass("show")
        }.delay(150, this),
        this.options.duration && (this.hideTimer = function() {
            this.hide()
        }.delay(this.options.duration + 150, this)),
        this.isShowing = !0,
        this
    },
    hide: function() {
        return this.main.removeClass("show"),
        this.mask.dispose(),
        this.disposeTimer = function() {
            this.options.dispose && this.main.dispose(),
            this.options.complete && this.options.complete()
        }.delay(150, this),
        this.isShowing = !1,
        this
    }
}),
Gestures = new Class({
    Extends: Drag,
    options: {
        snap: 10,
        minX: 150,
        maxY: 100,
        style: !1,
        modifiers: {},
        preventDefault: !0,
        stopPropagation: !0
    },
    initialize: function(e) {
        this.parent(document.body, e),
        this.bound.eventStop = Function.from(!0),
        this.bound.contextMenu = this._contextmenu.bind(this),
        this.addEvents({
            drag: this._drag.bind(this),
            complete: this._complete.bind(this)
        }),
        this._skipmenu = 0,
        this.document.addEvent("contextmenu", this.bound.contextMenu),
        Modernizr.canvas && (this.canvas = new Element("canvas", {
            styles: {
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 10001
            }
        }))
    },
    start: function(e) {
        return ! e.rightClick || Browser.Platform.linux ? !0: Browser.Platform.mac && !e.control && !e.meta ? !0: (this.canvas && this.canvas.setProperties({
            width: window.innerWidth,
            height: window.innerHeight
        }), e.rightClick = !1, this._skipmenu = 1, this.parent(e))
    },
    cancel: function(e) {
        return this.canvas && this.canvas.dispose(),
        e && (this._skipmenu = 0),
        this.parent(e)
    },
    stop: function(e) {
        return e && e.rightClick && e.preventDefault(),
        this.parent(e)
    },
    _contextmenu: function(e) {
        return ! this._skipmenu
    },
    _complete: function(e, t) {
        this.canvas && this.canvas.dispose();
        var n = this.mouse.now.x - this.mouse.start.x,
        r = this.mouse.now.y - this.mouse.start.y;
        if (Math.abs(n) < this.options.minX || Math.abs(r) > this.options.maxY) return;
        n > 0 ? this.fireEvent("forward") : this.fireEvent("back")
    },
    _drag: function(e, t) {
        if (!this.canvas) return;
        var n = window.getScroll(),
        r = this.canvas.getContext("2d");
        r.strokeStyle = "rgba(233,59,72,0.83)",
        r.lineWidth = 5,
        r.lineCap = "round",
        r.lineJoin = "round",
        r.shadowColor = "rgba(0,0,0,0.45)",
        r.shadowOffsetX = 2,
        r.shadowOffsetY = 2,
        r.shadowBlur = 3,
        r.clearRect(0, 0, this.canvas.width, this.canvas.height),
        r.beginPath(),
        r.moveTo(this.mouse.start.x - n.x, this.mouse.start.y - n.y),
        r.lineTo(this.mouse.now.x - n.x, this.mouse.now.y - n.y),
        r.stroke(),
        this.canvas.parentNode || document.body.appendChild(this.canvas)
    }
}),
SlidePage = new Class({
    Extends: Fx,
    options: {
        direction: "right",
        fixedSelector: null
    },
    initialize: function(e, t) {
        this.element = document.id(e),
        this.container = document.id(document.body),
        this.view = app.view,
        this.elevator = document.id("elevator"),
        this.parent(t),
        this.left = this.options.direction === "left"
    },
    prepareShow: function() {
        var e = Object.append(this.container.getSize(), {
            scroll: this.container.getScroll()
        });
        return e.from = 0,
        this.left ? e.to = -e.x: e.to = e.x,
        this.container.setStyles({
            overflow: "hidden"
        },
        !0),
        this.view.setStyles({
            position: "absolute",
            top: 0,
            width: e.x
        },
        !0),
        this.element.setStyles({
            position: "absolute",
            top: e.scroll.y,
            left: this.left ? 0 - e.x: e.x,
            width: e.x,
            height: e.y
        },
        !0),
        this.elevator && this.elevator.hide(),
        this.options.fixedSelector && document.getElements(this.options.fixedSelector).absolutize(),
        app.page.$header && app.page.$header.detach(),
        e
    },
    prepareHide: function() {
        var e = this.state;
        return this.view.setStyles({
            top: 0
        }),
        this.element.setStyles({
            top: e.scroll.y,
            width: e.x,
            height: e.y
        }),
        this.container.setStyles({
            overflow: "hidden"
        }).scrollTo(e.scroll.x, e.scroll.y),
        this.elevator && this.elevator.hide(),
        this
    },
    set: function(e) {
        return this.view.setStyle("left", -e),
        this.element.setStyle("left", this.left ? -(this.state.x + e) : this.state.x - e),
        this
    },
    show: function() {
        var e = this.state = this.prepareShow();
        return this.start(e.from, e.to).chain(function() {
            this.element.setStyles({
                top: 0
            }),
            this.container.scrollTo(0, 0),
            this.callChain()
        }.bind(this))
    },
    hide: function() {
        var e = this.state;
        return this.prepareHide().start(e.to, e.from).chain(function() {
            this.elevator && this.elevator.show(),
            this.element.restoreStyles(),
            this.view.restoreStyles().setStyles({
                width: "auto"
            }),
            this.container.restoreStyles().scrollTo(e.scroll.x, e.scroll.y),
            this.options.fixedSelector && document.getElements(this.options.fixedSelector).unabsolutize(),
            app.page.$header && app.page.$header.attach(),
            delete this.state,
            this.callChain()
        }.bind(this))
    }
}),
MessageChecker = new Class({
    Binds: ["fetchNew"],
    Implements: [Options, Events],
    options: {
        fetcher: !0,
        interval: 3e4,
        minInterval: 1e4
    },
    initialize: function(e) {
        this.setOptions(e);
        var t = this;
        this.options.fetcher && (this._indicator = this._createIndicator()),
        this._notiTimer = {},
        [this._mentions, this._activities].each(function(e) {
            e.addEvents({
                mouseenter: function() {
                    clearTimeout(t._notiTimer),
                    t._notiTimer = function() {
                        t.showNoti(e)
                    }.delay(100)
                },
                mouseleave: function() {
                    clearTimeout(t._notiTimer),
                    t._notiTimer = function() {
                        t.hideNotis()
                    }.delay(100)
                }
            })
        }),
        this.userAtThisPage = !0,
        window.addEvents({
            scroll: function() {
                var e = t._noti;
                e && e.main && e.main.dispose()
            },
            focus: function() {
                t.userAtThisPage = !0,
                clearTimeout(t.fetchTimer),
                t.fetchTimer = t.scheduleFetcher.delay(2e3, t, !0)
            },
            blur: function() {
                t.userAtThisPage = !1,
                clearTimeout(t.fetchTimer)
            }
        }),
        this.lastFetchTime = 0,
        this.readCookie(),
        this.attach()
    },
    _createIndicator: function() {
        var e = (new Element("div")).set("html", app.renderSync("bidcms/message_indicator")).getFirst();
        return e.inject(document.body, "top"),
        this._activities = e.getElement(".activities"),
        this._mentions = e.getElement(".mentions"),
        this.initShowMessage(),
        e
    },
    initShowMessage: function() {
        this.registerStateHandler(),
        this._activities.addEvent("click", 
        function() {
            return app._prepath = location.pathname,
            this._noti.hide(),
            clearTimeout(this._notiTimer),
            this.showActivities(),
            !1
        }.bind(this)),
        this._mentions.addEvent("click", 
        function() {
            return app._prepath = location.pathname,
            this._noti.hide(),
            clearTimeout(this._notiTimer),
            this.showMentions(),
            !1
        }.bind(this))
    },
    registerStateHandler: function() {
        var e = this,
        t,
        n,
        r = app.getState().id,
        i = "/message/",
        s = function() {
            n = t.retrieve("slide"),
            n || (n = new SlidePage(t, {
                direction: "left",
                fixedSelector: "#header, #pin_toolbar, #NewIndicator, #MessageIndicator"
            }), t.store("slide", n)),
            t.inject(document.body).show(),
            e.hideIndicator(),
            n.show().chain(function() {
                t.setStyles({
                    width: "100%",
                    height: "auto"
                })
            }),
            app.registerStateHandler(r, o),
            app.page.$waterfall && app.page.$waterfall.detach(),
            e.detach()
        },
        o = function() {
            app.page.$waterfall && app.page.$waterfall.attach();
            if (!t) return;
            n = t.retrieve("slide"),
            n.hide().chain(function() {
                e.showIndicator(),
                e.attach(),
                t.destroy(),
                t = null
            }),
            app.removeStateHandler(r)
        },
        u = function(e) {
            t ? s() : (new Request.JSON({
                url: e,
                noCache: !0,
                onSuccess: function(e) {
                    if (e.err) return app.error(e.msg || app.COMMON_ERRMSG);
                    app.messages = e.messages,
                    app.render("messages/message", {
                        messages: e.messages
                    },
                    function(e, n) {
                        t = Elements.from(n)[0],
                        t.getElement("#msgl_hide").addEvent("click", 
                        function() {
                            return app.popState(),
                            !1
                        }),
                        s(),
                        e && Browser.exec(e)
                    })
                }
            })).get()
        };
        app.registerStateHandler(i + "activities/", 
        function() {
            u("/message/activities/")
        }),
        app.registerStateHandler(i + "mentions/", 
        function() {
            u("/message/mentions/")
        })
    },
    showNoti: function(e) {
        if (!this._noti) {
            this._noti = new SmoothNotification({
                styles: {
                    padding: "0 8px 0 5px",
                    "border-radius": "2px",
                    "font-size": "14px",
                    height: "23px",
                    "line-height": "23px",
                    cursor: "pointer",
                    "box-shadow": "1px 0 4px rgba(34,25,25,0.2)"
                },
                duration: !1,
                relative: {
                    to: "",
                    position: "rightcenter",
                    edge: "leftcenter",
                    offset: {
                        x: 10,
                        y: 0
                    }
                },
                fadeType: "right",
                arrow: "left",
                arrowStyles: {
                    "background-position": "2px center"
                }
            });
            var t = this;
            this._noti.main.addEvents({
                mouseenter: function() {
                    clearTimeout(t._notiTimer)
                },
                mouseleave: function() {
                    clearTimeout(t._notiTimer),
                    t._notiTimer = function() {
                        t.hideNotis()
                    }.delay(100)
                },
                click: function() {
                    t._noti.options.relative.to.fireEvent("click")
                }
            })
        }
        var n;
        e.hasClass("activities") ? n = (this._unread_activities || "0") + " 条新消息": e.hasClass("mentions") && (n = (this._unread_mentions || "0") + " 条@我的"),
        this._noti.show(n, {
            relative: {
                to: e
            }
        })
    },
    hideNotis: function() {
        this._noti && this._noti.hide()
    },
    showActivities: function() {
        if (Browser.ie && Browser.version < 9) {
            location.href = "/message/activities/";
            return
        }
        this.hideIndicator(),
        this.setNewActivitiesNum(0),
        app.pushState(null, null, "/message/activities/")
    },
    showMentions: function() {
        if (Browser.ie && Browser.version < 9) {
            location.href = "/message/mentions/";
            return
        }
        this.hideIndicator(),
        this.setNewMentionsNum(0),
        app.pushState(null, null, "/message/mentions/")
    },
    setNewActivitiesNum: function(e) {
        if (typeOf(this._unread_activities) == "null") this._unread_activities = e;
        else {
            var t = e - this._unread_activities;
            this._unread_activities = e,
            this._activities.getElement(".num").set("html", "+" + t),
            e && t > 0 ? this.blink("activities") : e === 0 && this.dim("activities")
        }
        this.markButton("activities", (new Boolean(e)).valueOf())
    },
    setNewMentionsNum: function(e) {
        if (typeOf(this._unread_mentions) == "null") this._unread_mentions = e;
        else {
            var t = e - this._unread_mentions;
            this._unread_mentions = e,
            this._mentions.getElement(".num").set("html", "+" + t),
            e && t > 0 ? this.blink("mentions") : e === 0 && this.dim("mentions")
        }
        this.markButton("mentions", (new Boolean(e)).valueOf())
    },
    readCookie: function() {
        var e = Cookie.read("message_read") || "{}";
        e = JSON.decode(e),
        e[app.req.user.username] && (this._unread_mentions = e[app.req.user.username].mentions, this._unread_activities = e[app.req.user.username].activities)
    },
    updateCookie: function() {
        var e = Cookie.read("message_read") || "{}";
        e = JSON.decode(e),
        e[app.req.user.username] = {
            mentions: this._unread_mentions,
            activities: this._unread_activities
        },
        e = JSON.encode(e),
        Cookie.write("message_read", e, {
            duration: 93
        })
    },
    markButton: function(e, t) {
        var n = this._indicator.getElement("." + e);
        t ? (n.addClass(e + "-unread"), n.setStyle("left", -n.getElement(".num").getSize().x)) : n.removeClass(e + "-unread").setStyle("left", 0)
    },
    blink: function(e) {
        this.markButton(e, !0);
        var t = this._indicator.getElement("." + e);
        t.tween("left", 0),
        function() {
            t.tween("left", -t.getElement(".num").getSize().x)
        }.delay(4e3)
    },
    dim: function(e) {
        this.markButton(e, !1)
    },
    showIndicator: function() { ! app.page.hideIndicator && this._indicator && !~location.pathname.indexOf("/message/") && this._indicator.show()
    },
    hideIndicator: function() {
        this._indicator && this._indicator.hide()
    },
    fetchNew: function() {
        if (!this.userAtThisPage) return;
        var e = (new Date).getTime();
        if (e - this.lastFetchTime < this.options.minInterval) return;
        this.lastFetchTime = e,
        this.readCookie(),
        this.loader(this, "fetch")
    },
    scheduleFetcher: function(e) {
        var t = e ? 0: this.options.interval;
        this._indicator && (this._fetchTimer && clearTimeout(this._fetchTimer), this._fetchTimer = setTimeout(this.fetchNew, t))
    },
    attach: function() {
        this.scheduleFetcher(!0)
    },
    detach: function() {
        this._fetchTimer && (clearTimeout(this._fetchTimer), delete this._fetchTimer)
    },
    loader: function() {
        var e = !1,
        t = "models/getmessages.php";
        return function() {
            if (e) return;
            e = !0,
            (new Request.JSON({
                url: t,
                noCache: !0,
                onSuccess: function(e) {
					this.setNewMentionsNum(e.unread_mentions),
                    this.setNewActivitiesNum(e.unread_feeds),
                    this.updateCookie()
                }.bind(this),
                onComplete: function() {
                    e = !1,
                    this.scheduleFetcher()
                }.bind(this)
            })).get()
        }
    } ()
});
app.pinOrganizer = function(e) {
    function f() {
        c(function() {
            r.options.cellWidth = r.cells[0].getSize().x,
            r.reposition(!0)
        }),
        r.cells = r.cells.erase(t),
        $$("#board_share_unit, #BoardButton .edit, #BoardButton .organize").hide(),
        (new Elements([u, o, s])).show(),
        document.body.addEvents(p),
        app.page.isOrganizing = s
    }
    function l() {
        if (Browser.ie6) {
            location.reload();
            return
        }
        h(),
        r.options.cellWidth = n,
        r.cells.unshift(t),
        $$("#board_share_unit, #BoardButton .edit, #BoardButton .organize").show(),
        (new Elements([u, o, s])).hide(),
        $$(".pin.selected").removeClass("selected"),
        $$(".pin .pin-overlay").destroy(),
        document.body.removeEvents(p),
        w.hide(),
        r.reposition(!0),
        app.page.isOrganizing = !1
    }
    function c(e) {
        Asset.css("static/bidcms/css/organizing_pins.css", {
            id: "organizing_style",
            events: {
                load: e
            }
        })
    }
    function h() {
        document.id("organizing_style").destroy()
    }
    function d(e) {
        var t = a.clone().cloneEvents(a).inject(e.getElement("a.img")),
        n = e.getElement(".attribution a").innerHTML.clean();
        n ? t.getElement("h2").set("html", n) : t.getElement("h2").set("html", "本地上传"),
        t.getElement("p").set("html", e.getElement(".description").innerHTML)
    }
    function v() {
        this.getElement(".pin-overlay") || d(this),
        this.getElement(".pin-overlay").fade("show").get("tween").cancel()
    }
    function m() {
        this.hasClass("selected") || this.getElement(".pin-overlay").fade("out")
    }
    function g(e) {
        e.each(function(e) {
            e.getElement(".pin-overlay") || d(e),
            e.addClass("selected").getElement(".pin-overlay").fade("show").get("tween").cancel()
        })
    }
    function y(e) {
        e.each(function(e) {
            e.removeClass("selected").getElement(".pin-overlay").fade("hide")
        })
    }
    function b(e) {
        if (e.key == "a" && (Browser.Platform.mac && e.meta || !Browser.Platform.mac && e.control)) return g(app.page.$waterfall.cells),
        !1;
        e.key == "esc" && !e.control && !e.meta && !e.shift && y($$(".pin.selected"))
    }
    function E(e) {
        if (!e.length) return;
        var t = [];
        r.cells.each(function(n) {
            e.contains(n.get("data-id")) && t.push(n)
        }),
        t.each(function(e) {
            r.cells.erase(e.dispose())
        }),
        r.reposition(!0);
        var n = $$("#BoardTitle .count")[0];
        n.innerHTML = n.innerHTML.toInt() - e.length + "个采集"
    }
    function x(e) {
        setTimeout(function() {
            Object.keys(S.getRunning()).length && app.msg("删除进行中，请稍候...", {
                type: "notice",
                timeout: !1,
                modal: !0
            })
        },
        500);
        var t = [],
        n = [];
        S.clear(),
        e.each(function(e, r) {
            S.addRequest("d" + r, new Request.JSON({
                url: "index.php?con=pins&act=delete&id=" + e,
                method: "post",
                data: {
                   
                },
                onComplete: function(r) { ! r || r && r.err ? t.push(e) : n.push(e);
                    if (!S.hasNext()) {
                        var i = function() {
                            var e = "成功删除" + n.length + "个采集";
                            t.length && (e += "，失败" + t.length + "个采集"),
                            app.msg(e, {
                                timeout: 4e3
                            }),
                            E(n)
                        };
                        app._currentSheet ? app.hideSheet(i) : i()
                    }
                }
            })).send("d" + r)
        })
    }
    function T(e, t) {
        setTimeout(function() {
            Object.keys(S.getRunning()).length && app.msg("正在移动采集，请稍候...", {
                type: "notice",
                timeout: !1,
                modal: !0
            })
        },
        500);
        var n = [],
        r = [];
        S.clear(),
        e.each(function(e, i) {
            S.addRequest("d" + i, new Request.JSON({
                url: "index.php?con=pins&act=move&id=" + e,
                method: "post",
                data: {
                    board_id: t,
                    moveonly: 1
                },
                onComplete: function(i) { ! i || i && i.err ? n.push(e) : r.push(e);
                    if (!S.hasNext()) {
                        var s = function() {
                            var e = "成功移动" + r.length + "个采集";
                            n.length && (e += "，失败" + n.length + "个采集"),
                            r.length && (e += '，<a class="x" href="/boards/' + t + '/">查看采集</a>'),
                            app.msg(e, {
                                timeout: 4e3
                            }),
                            E(r)
                        };
                        app._currentSheet ? app.hideSheet(s) : s()
                    }
                }
            })).send("d" + i)
        })
    }
    var t = document.id("BoardMeta"),
    n,
    r,
    i = document.id("BoardButton"),
    s = (new Element("a.btn.wbtn.btn13.over", {
        html: "<strong>完成</strong><span></span>",
        events: {
            click: l
        }
    })).inject(i).hide(),
    o = (new Element("a.btn.rbtn.btn13.delete", {
        html: "<strong>删除</strong><span></span>"
    })).inject(i).hide(),
    u = (new Element("a.btn.wbtn.btn13.move", {
        html: "<strong>移动至...</strong><span></span>"
    })).inject(i).hide(),
    a = new Element(".pin-overlay", {
        events: {
            click: function() {
                var e = this.getParent(".pin");
                return e.toggleClass("selected"),
                !1
            }
        },
        html: "<em>采集来自</em><h2></h2><p></p>"
    }),
    p = {
        "mouseenter:relay(.pin)": v,
        "mouseleave:relay(.pin)": m,
        keydown: b
    },
    w = new SmoothNotification({
        relative: {
            to: document.id("BoardTitle"),
            position: "center",
            edge: "center"
        },
        styles: {
            "border-radius": "5px"
        },
        duration: 4e3
    });
    e.onclick = function() {
        return r = app.page.$waterfall,
        n = r.options.cellWidth,
        f(),
        w.show("提示：选中采集后，点击右侧按钮可以批量移动或删除"),
        !1
    };
    var S = new Request.Queue({
        stopOnFailure: !1
    });
    o.addEvent("click", 
    function() {
        w && w.hide();
        var e = $$(".pin.selected").get("data-id").clean();
        if (!e.length) {
            app.error("你还没有选择任何采集哦！", {
                modal: !0
            });
            return
        }
        app.confirm("确定要删除吗？删除采集后不能恢复", 
        function(t) {
            if (!t) return;
            x(e)
        })
    }),
    u.addEvent("click", 
    function() {
        w && w.hide();
        var e = $$(".pin.selected").get("data-id").clean();
        if (!e.length) {
            app.error("你还没有选择任何采集哦！", {
                modal: !0
            });
            return
        }
        var t = app.showDialog("move_pins"),
        n = new BoardPicker(t.getElement(".BoardPicker"));
        t.getElement(".go").addEvent("click", 
        function() {
            var t = n.getSelected();
            if (t == app.page.bidcmsurl.split("/")[2]) {
                alert("不能移动到当前画板");
                return
            }
            app.hideDialog(),
            T(e, t)
        })
    })
};
var HuabanHotkeys = new Class({
    Implements: [Options, Events],
    options: {
        defaultEventType: "keydown"
    },
    initialize: function(e) {
        this.setOptions(e),
        this.setEvents(),
        this.keyboard = new Keyboard({
            defaultEventType: this.options.defaultEventType,
            events: this.options.events
        }),
        this.startListening()
    },
    setEvents: function() {
        var e = this;
        this.options.events = {
            t: function(t) {
                if (e.checkEditor()) return
            },
            "¾": function() {
                if (e.checkEditor()) return;
                var t = document.id("NewIndicator");
                t && t.getStyle("display") == "block" ? t.fireEvent("click") : window.docScroller.toTop()
            },
            "shift+¿": function() {
                if (e.checkEditor()) return;
                e.win && e.win.isShowing ? e.hideIntro() : e.showIntro()
            },
            right: function() {
                if (e.checkEditor()) return;
                var t = document.id("zoomr_hide");
                if (t) return t.click();
                var n = document.id("pin_toolbar");
                n && app.page.pin.media_type != 1 && n.getElement(".next").click()
            },
            left: function() {
                if (e.checkEditor()) return;
                var t = document.id("zoomr_hide");
                if (t) return t.click();
                var n = document.id("pin_toolbar");
                n && app.page.pin.media_type != 1 && n.getElement(".prev").click()
            },
            "¿": function() {
                if (e.checkEditor()) return;
                var t = document.id("query");
                if (t) return setTimeout(function() {
                    t.highlight().select()
                },
                100),
                !1
            },
            esc: function(t) {
                var n = document.id("msgl_hide"),
                r = document.id("zoomr_hide"),
                i = document.getElement(".thunder-tip-warning .cancel");
                if (e.checkEditor()) return t.target.blur(),
                t.stop();
                if (e.win && e.win.isShowing) return e.win.hide(),
                t.stop();
                if (app.hideDialog()) return t.stop();
                if (app.hideSheet()) return t.stop();
                if (n) return n.fireEvent("click"),
                t.stop();
                if (r) return r.fireEvent("click"),
                t.stop();
                if (i) return i.fireEvent("click"),
                t.stop()
            },
            enter: function() {
                if (e.checkEditor()) return;
                var t = document.getElement("#sheet_msg .buttons .confirm"),
                n = document.getElement(".thunder-tip-warning .continue"),
                r = document.getElement("#Repin .Buttons .btn");
                t ? t.click() : n ? n.fireEvent("click") : r && r.click()
            },
            n: function() {
                if (e.checkEditor()) return;
                var t = document.getElement("#nav_add a");
                t && t.click()
            },
            f: function() {
                if (e.checkEditor()) return;
                var t = document.id("zoomr_show"),
                n = document.id("zoomr_hide"),
                r = document.id("zoomr");
                t && !r && t.click(),
                n && r.getStyle("left") == "0px" && n.click()
            },
            o: function() {
                if (e.checkEditor()) return;
                var t = document.getElement("#pin_img a");
                t && t.click()
            },
            r: function() {
                if (e.checkEditor()) return;
                var t = document.getElement("#PinActionButtons .repin");
                t && t.click()
            },
            "shift+r": function() {
                if (e.checkEditor()) return;
                var t = document.getElement("#PinActionButtons .thunderpin");
                t && t.click()
            },
            d: function() {
                if (e.checkEditor()) return;
                var t = document.getElement("#PinActionButtons .del-button .btn");
                t && t.click()
            }
        }
    },
    startListening: function() {
        this.keyboard.activate()
    },
    stopListening: function() {
        this.keyboard.deactivate()
    },
    checkEditor: function() {
        return window.document.activeElement.match("input,textarea")
    },
    showIntro: function() {
        var e = this;
        if (e.win && e.win.isShowing) return;
        app.render("bidcms/hotkeys", "", 
        function(t, n) {
            e.win || (e.win = new SmoothNotification({
                style: "window",
                styles: {
                    position: "fixed"
                },
                mask: !0,
                duration: !1
            })),
            e.win.show(Elements.from(n)[0]),
            e.win.main.id = "hotkeys_intro"
        })
    },
    hideIntro: function() {
        this.win.hide()
    }
});
window.addEvent("domready", 
function() {
    app.hotkey || (app.hotkey = new HuabanHotkeys)
});
var ShadowNavigation = new Class({
    Implements: [Options, Events],
    options: {
        trigger: "#nav_bar_discover .open",
        navEl: "#shadow_nav",
        flyingEl: "#flying_shadow_nav",
        offset: 150
    },
    initialize: function(e) {
        var t = this;
        this.setOptions(e),
        this.trigger = document.getElement(this.options.trigger),
        this.navEl = document.getElement(this.options.navEl),
        this.innerEl = this.navEl.getElement(".wrapper"),
        this.flyingEl = document.getElement(this.options.flyingEl),
        this.switcher = !!this.trigger.hasClass("opend"),
        this.realStatus = this.switcher,
        this.trigger.addEvent("click", 
        function() {
            t.isFlying || (t.realStatus = !t.realStatus),
            t.switcher = !t.switcher,
            t.checkStatus()
        }),
        this.wrapperChecker(),
        window.addEvents({
            resize: this.wrapperChecker.bind(this),
            scroll: this.scrollCheacker.bind(this)
        })
    },
    openNavEl: function() {
        this.navEl.removeClass("closed")
    },
    closeNavEl: function() {
        this.navEl.addClass("closed")
    },
    openFlyingEl: function() {
        this.flyingEl.removeClass("closed")
    },
    closeFlyingEl: function() {
        this.flyingEl.addClass("closed")
    },
    checkStatus: function() {
        this.switcher && !this.isFlying && (this.trigger.addClass("opend"), this.innerEl.inject(this.navEl), this.openNavEl(), this.closeFlyingEl()),
        this.switcher && this.isFlying && (this.trigger.addClass("opend"), this.innerEl.inject(this.flyingEl), this.openFlyingEl(), this.realStatus ? this.openNavEl() : this.closeNavEl()),
        !this.switcher && !this.isFlying && (this.trigger.removeClass("opend"), this.closeFlyingEl(), this.closeNavEl()),
        !this.switcher && this.isFlying && (this.trigger.removeClass("opend"), this.closeFlyingEl(), this.realStatus ? this.openNavEl() : this.closeNavEl())
    },
    wrapperChecker: function() {
        var e = this.innerEl,
        t = e.getSize().x;
        t != 1407 && t != 1170 && t != 933 && (e.setStyle("width", 933), t = 933),
        e.set("class", "wrapper wrapper" + t)
    },
    scrollCheacker: function() {
        this.nowPosition = window.getScroll().y,
        this.nowPosition > this.options.offset ? (this.isFlying = !0, this.switcher = !1) : (this.isFlying = !1, this.switcher = this.realStatus),
        this.checkStatus()
    }
}); (function() {
    Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }),
    Object.keys || (Object.keys = function(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t
    }),
    Object.append || (Object.append = function(e) {
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t] || {};
            for (var i in r) e[i] = r[i]
        }
        return e
    }),
    String.prototype.len || (String.prototype.len = function() {
        var e = this.toString(),
        t = 0;
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r > 128 ? t += 2: t += 1
        }
        return t
    }),
    String.prototype.brief || (String.prototype.brief = function(e, t) {
        t = t || "...";
        var n = 0,
        r = "";
        for (var i = 0, s = this.length; i < s; i++) {
            var o = this.charCodeAt(i);
            o > 128 ? n += 2: n += 1;
            if (! (n <= e)) return r + t;
            r += this.charAt(i)
        }
        return r
    }),
    String.prototype.nl2br || (String.prototype.nl2br = function() {
        return this.replace(/(\r|\n)+/g, "<br/>")
    }),
    String.prototype.format_text || (String.prototype.format_text = function(e) {
        if (!e) return this.nl2br();
        var t = Array.isArray(e.mentions) && e.mentions || [],
        n = Array.isArray(e.links) && e.links || [],
        r = Array.isArray(e.tags) && e.tags || [];
        t = t.map(function(e) {
            return e.type = "mention",
            e
        }),
        n = n.map(function(e) {
            return e.type = "link",
            e
        }),
        r = r.map(function(e) {
            return e.type = "tag",
            e
        }),
        e = t.concat(n, r).sort(function(e, t) {
            return e.start - t.start
        });
        if (!e || e.length <= 0) return this.nl2br();
        var i = [],
        s = this,
        o = 0;
        for (var u = 0; u < e.length; u++) {
            if (e[u].type == "mention" && e[u].mention_id && e[u].user) i.push(s.substr(o, e[u].start - o)),
            i.push('<a href="/' + e[u].user.urlname + '/">@'),
            i.push(s.substr(e[u].start + 1, e[u].offset - 1)),
            i.push("</a>");
            else if (e[u].type == "link") {
                var a = s.substr(e[u].start, e[u].offset);
                i.push(s.substr(o, e[u].start - o)),
                i.push('<a href="' + a + '" target="_blank">' + a + "</a>")
            } else if (e[u].type == "tag") {
                var f = s.substr(e[u].start + 1, e[u].offset - 2);
                i.push(s.substr(o, e[u].start - o)),
                i.push('<a href="/search/?q=' + f + '">#'),
                i.push(f),
                i.push("#</a>")
            }
            o = e[u].start + e[u].offset
        }
        return i.push(s.substr(o)),
        i.join("").nl2br()
    })
})(),
function() {
    var e,
    t = /\\?([a-z])/gi,
    n = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    r = function(e, t) {
        return s[e] ? s[e]() : t
    },
    i = function(e, t) {
        return (e += "").length < t ? (new Array(++t - e.length)).join("0") + e: e
    },
    s = {
        d: function() {
            return i(s.j(), 2)
        },
        D: function() {
            return s.l().slice(0, 3)
        },
        j: function() {
            return e.getDate()
        },
        l: function() {
            return n[s.w()] + "day"
        },
        N: function() {
            return s.w() || 7
        },
        S: function() {
            var e = s.j();
            return e < 4 | e > 20 && ["st", "nd", "rd"][e % 10 - 1] || "th"
        },
        w: function() {
            return e.getDay()
        },
        z: function() {
            var e = new Date(s.Y(), s.n() - 1, s.j()),
            t = new Date(s.Y(), 0, 1);
            return Math.round((e - t) / 864e5) + 1
        },
        W: function() {
            var e = new Date(s.Y(), s.n() - 1, s.j() - s.N() + 3),
            t = new Date(e.getFullYear(), 0, 4);
            return i(1 + Math.round((e - t) / 864e5 / 7), 2)
        },
        F: function() {
            return n[6 + s.n()]
        },
        m: function() {
            return i(s.n(), 2)
        },
        M: function() {
            return s.F().slice(0, 3)
        },
        n: function() {
            return e.getMonth() + 1
        },
        t: function() {
            return (new Date(s.Y(), s.n(), 0)).getDate()
        },
        L: function() {
            var e = s.Y();
            return e % 4 == 0 & e % 100 != 0 | e % 400 == 0
        },
        o: function() {
            var e = s.n(),
            t = s.W(),
            n = s.Y();
            return n + (e === 12 && t < 9 ? -1: e === 1 && t > 9)
        },
        Y: function() {
            return e.getFullYear()
        },
        y: function() {
            return (s.Y() + "").slice( - 2)
        },
        a: function() {
            return e.getHours() > 11 ? "pm": "am"
        },
        A: function() {
            return s.a().toUpperCase()
        },
        B: function() {
            var t = e.getUTCHours() * 3600,
            n = e.getUTCMinutes() * 60,
            r = e.getUTCSeconds();
            return i(Math.floor((t + n + r + 3600) / 86.4) % 1e3, 3)
        },
        g: function() {
            return s.G() % 12 || 12
        },
        G: function() {
            return e.getHours()
        },
        h: function() {
            return i(s.g(), 2)
        },
        H: function() {
            return i(s.G(), 2)
        },
        i: function() {
            return i(e.getMinutes(), 2)
        },
        s: function() {
            return i(e.getSeconds(), 2)
        },
        u: function() {
            return i(e.getMilliseconds() * 1e3, 6)
        },
        e: function() {
            throw "Not supported (see source code of date() for timezone on how to add support)"
        },
        I: function() {
            var e = new Date(s.Y(), 0),
            t = Date.UTC(s.Y(), 0),
            n = new Date(s.Y(), 6),
            r = Date.UTC(s.Y(), 6);
            return 0 + (e - t !== n - r)
        },
        O: function() {
            var t = e.getTimezoneOffset(),
            n = Math.abs(t);
            return (t > 0 ? "-": "+") + i(Math.floor(n / 60) * 100 + n % 60, 4)
        },
        P: function() {
            var e = s.O();
            return e.substr(0, 3) + ":" + e.substr(3, 2)
        },
        T: function() {
            return "UTC"
        },
        Z: function() {
            return - e.getTimezoneOffset() * 60
        },
        c: function() {
            return "Y-m-d\\Th:i:sP".replace(t, r)
        },
        r: function() {
            return "D, d M Y H:i:s O".replace(t, r)
        },
        U: function() {
            return e / 1e3 | 0
        }
    };
    Date.format = function(n, i) {
        return typeof n == "number" && (i = n, n = "Y-m-d H:i:s"),
        e = i == null ? new Date: i instanceof Date ? new Date(i) : new Date(i * 1e3),
        n.replace(t, r)
    },
    Date.prototype.format = function(e) {
        return Date.format(e, this)
    }
} (),
function() {
    var e = {
        lessThanMinuteAgo: "刚刚",
        minuteAgo: "1分钟前",
        minutesAgo: "{delta}分钟前",
        hourAgo: "1小时前",
        hoursAgo: "{delta}小时前",
        dayAgo: "昨天",
        daysAgo: "{delta}天前",
        weekAgo: "1周前",
        weeksAgo: "{delta}周前",
        monthAgo: "1个月前",
        monthsAgo: "{delta}个月前",
        yearAgo: "1年前",
        yearsAgo: "{delta}年前",
        lessThanMinuteUntil: "从现在开始不到1分钟",
        minuteUntil: "从现在开始約1分钟",
        minutesUntil: "从现在开始约{delta}分钟",
        hourUntil: "从现在开始1小时",
        hoursUntil: "从现在开始约{delta}小时",
        dayUntil: "从现在开始1天",
        daysUntil: "从现在开始{delta}天",
        weekUntil: "从现在开始1星期",
        weeksUntil: "从现在开始{delta}星期",
        monthUntil: "从现在开始一个月",
        monthsUntil: "从现在开始{delta}个月",
        yearUntil: "从现在开始1年",
        yearsUntil: "从现在开始{delta}年"
    };
    Date.getTimePhrase = function(e) {
        var t = e < 0 ? "Until": "Ago";
        e < 0 && (e *= -1);
        var n = {
            minute: 60,
            hour: 60,
            day: 24,
            week: 7,
            month: 52 / 12,
            year: 12,
            eon: Infinity
        },
        r = "lessThanMinute";
        for (var i in n) {
            var s = n[i];
            if (e < 1.5 * s) {
                e > .75 * s && (r = i);
                break
            }
            e /= s,
            r = i + "s"
        }
        return e = Math.round(e),
        {
            msg: r,
            delta: e,
            suffix: t
        }
    },
    Date.timeAgo = function(t) {
        var n = t == null ? new Date: t instanceof Date ? new Date(t) : new Date(t * 1e3),
        r = Math.round((new Date - n) / 1e3);
        if (r > 2592e3) return Date.format("Y-m-d H:i:s", n);
        var i = Date.getTimePhrase(r);
        return e[i.msg + i.suffix].replace("{delta}", i.delta)
    },
    Date.prototype.timeAgo = function() {
        return Date.timeAgo(this)
    }
} (),
function(e) {
    return Object.append(e, {
        templates: {},
        attrs: function(t) {
            var n = [],
            r = t.terse;
            delete t.terse;
            var i = Object.keys(t),
            s = i.length;
            if (s) {
                n.push("");
                for (var o = 0; o < s; ++o) {
                    var u = i[o],
                    a = t[u];
                    "boolean" == typeof a || null == a ? a && (r ? n.push(u) : n.push(u + '="' + u + '"')) : "class" == u && Array.isArray(a) ? n.push(u + '="' + e.escape(a.join(" ")) + '"') : n.push(u + '="' + e.escape(a) + '"')
                }
            }
            return n.join(" ")
        },
        _: function(e) {
            return e ? String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e
        },
		imgType:function(t){
			tr={'image/jpeg':'jpg','image/png':'png','image/bmp':'bmp','image/gif':'gif','image/jpg':'jpg','image/pjpeg':'jpg'};
			return tr[t]!=undefined?tr[t]:'bid';
		},
		img: function(e, t, n) {
            var r = '<img src="' + this.imgURL(e, t) + '"',
            i = this.imgSize(e, t);
            r += ' width="' + i.w + '" height="' + i.h + '"';
            if (n) for (k in n) r += " " + k + '="' + n[k] + '"';
            return r + "/>"
        },
        imgURL: function(e, t) {
			var url=''
			if(e)
			{
				if(e.bucket!=undefined && e.bucket!='')
				{
					url="http://" + this.settings.imgHosts[e.bucket];
				}
				return url+ e.key + (t ? "_" + t: "");
			}
			return url;
        },
        imgSize: function(e, t) {
            if (!t) return {
                w: e.width,
                h: e.height
            };
			if(!e)
			{
				return {w:192,h:400}
			};
            var n,
            r,
            i = e.width,
            s = e.height,
            o = t.substr(0, 2),
            u = Number(t.substr(2));
            switch (o) {
            case "sq":
                n = r = u;
                break;
            case "fm":
                if (u < 0 || i < u && s < u) n = i,
                r = s;
                else {
                    n = r = u;
                    var a = n / r,
                    f = i / s;
                    a < f ? r = Math.round(n / f) : n = Math.round(r * f)
                }
                break;
            case "fw":
                i < u ? (n = i, r = s) : (n = u, r = Math.round(u * s / i));
                break;
            default:

            }
            return {
                w:
                n,
                h: r
            }
        },
        avatar: function(e, t) {
            return ! e || !e.avatar ? "static/bidcms/i/default.jpg": this.imgURL(e.avatar, t || "sq75")
        },
        url: function(e, t) {
            if (~e.indexOf("://")) return e;
            var n = t ? "https": this.scheme;
            return n + "://" + this.host + e
        },
        mkurl: function(e, t) {
            var n = [],
            r;
            for (f in t) t[f] == "%_page_" || t[f] == "%_limit_" ? r = t[f] : r = encodeURIComponent(t[f]),
            t[f] && n.push(f + "=" + r);
			return n.length ? e + "/?" + n.join("&") : e
        }
    }),
    e.escape = e._,
    e
} (typeof exports == "undefined" ? window.app: exports),
function(e) {
    var t = e.routers || [],
    n = e.map = function(e, n) {
        typeof e == "string" && (e = new RegExp(e)),
        t.push([e, n])
    },
    r = e.route = function(t) {
        var n = e.getRouter(t);
        if (n) {
            var r = n.call(this, this);
            return this.onRoute && this.onRoute(r),
            r
        }
        return ! 1
    };
    e.getRouter = function(e) {
        e = (e || this.page.bidcmsurl).split("?")[0];
        for (var n = 0, r = t.length; n < r; n++) if (t[n][0].test(e)) return t[n][1];
        return null
    },
    n(/^bidcmsact_((all|following|from|popular|favorite)(\/([^\/]+)(\/youku)?)?)?\/?$/, 
    function(t) {
		var n = e.view || {};
		return t.page.show_categories_bar = !t.page.filter || !~t.page.filter.indexOf("site:"),
        t.render("bidcms/index", n, 
        function(e, r) {
            n.show();
            var i = t.page.page || !1;
			t.page.$waterfall = (new Waterfall("waterfall", {
                fetcher: !~t.page.bidcmsurl.indexOf("popular"),
                loader: t.createCellLoader(t.page.bidcmsurl, 20, i, 
                function(e) {
					return t.page.pins && Array.prototype.push.apply(t.page.pins, e.pins),
                    {
                        data: e.pins
                    }
                })
            })).reposition()
        })
    }),
    n(/^bidcmsact_boards(\/bidcmstype_(all|following|favorite|popular)(\/([^\/]+))?)?\/?$/, 
    function(t) {
		var n = e.view || {};
        return t.page.show_categories_bar = !0,
        t.render("bidcms/index", n, 
        function(e, r) {
            n.show();
            var i = t.page.page || !1;
			t.page.$waterfall = (new Waterfall("waterfall", {
                loader: t.createCellLoader(t.page.bidcmsurl, 20, i, 
                function(e) {
					return t.page.boards && Array.prototype.push.apply(t.page.boards, e.boards),
                    {
                        data: e.boards
                    }
                })
            })).reposition()
        })
    }),
    n(/^bidcmsact_search(\/bidcmstype_(pins|boards|people|shiji))?\/?$/, 
    function(t) {
        var n = e.view || {};
        return t.render("bidcms/search_result", n, 
        function(e, r) {
            n.show(),
            t.page.$waterfall = (new Waterfall("waterfall", {
                loader: t.createCellLoader(t.page.bidcmsurl, 20, 1, 
                function(e) {
                    var n;
                    return t.page.query.type == "people" ? n = "users": t.page.query.type == "shiji" ? n = "pins": n = t.page.query.type + "s",
                    t.page[n] && Array.prototype.push.apply(t.page[n], e[n]),
                    {
                        data: e[n]
                    }
                })
            })).reposition()
        })
    }),
    n(/^bidcmsact_pins\/bidcmsid_\d+\/?$/, 
    function(t) {
        var n = e.view || {},
        r = t.page,
        i = r.pin,
        s = i.raw_text ? i.raw_text.length > 20 ? i.raw_text.substr(0, 20) + "...": i.raw_text: "";
        return r.title = (s ? s + " - ": "") + i.user.username + "采集到" + i.board.title + " - BidCms",
        t.render("bidcms/pin_view", n, 
        function(e, t) {
            return n.addClass("view").show(),
            !1
        })
    }),
    n(/^bidcmsact_pins\/bidcmsid_\d+\/zoom\/?$/, 
    function(t) {
        var n = e.view || {},
        r = t.page,
        i = r.pin,
        s = i.raw_text ? i.raw_text.length > 20 ? i.raw_text.substr(0, 20) + "...": i.raw_text: "";
        return r.title = (s ? s + " - ": "") + i.user.username + "采集到" + i.board.title + " - BidCms",
        t.render("bidcms/pin_view_zoom", n, 
        function(e, t) {
            return n.addClass("view").show(),
            !1
        })
    }),
    n(/^bidcmsact_board\/bidcmsid_\d+\/?$/, 
    function(t) {
        var n = e.view || {},
        r = t.page,
        i = r.board;
        return r.show_pin_source = !0,
        r.title = i.title + " - " + (i.user ? i.user.username + " - ": "") + "BidCms画板",
        t.render("bidcms/board_view", n, 
        function(e, r) {
            n.show(),
            t.page.show_pin_source = !0,
            t.page.$waterfall = (new Waterfall("waterfall", {
                loader: t.createCellLoader(t.page.bidcmsurl, 20, 
                function(e) {
                    return t.page.board && Array.prototype.push.apply(t.page.board.pins, e.board.pins),
                    {
                        data: e.board.pins,
                        extra: {
                            user: e.board.user,
                            board: e.board
                        }
                    }
                })
            })).reposition()
        })
    }),
    n(/^bidcmsact_bookmarklet\/?$/, 
    function(t) {
        var n = e.view || {};
		return t.page.hideNewIndicator = !0,
        t.render("bidcms/bookmarklet", n, 
        function(e, t) {
			$("bookmarklet").getElement(".pbt").show(),
            n.show()
        })
    }),
    n(/^bidcmsact_bookmarklet_success\/?$/, 
    function(t) {
        var n = e.view || {};
        return t.page.hideNewIndicator = !0,
        t.render("bidcms/bookmarklet_success", n, 
        function(e, t) {
            n.show()
        })
    }),
    n(/^bidcmsact_message\/(mentions|activities)\/?$/, 
    function(t) {
        var n = e.view || {};
        return t.page.hideNewIndicator = !0,
        t.render("messages/message", n, 
        function(e, t) {
            return n.addClass("view").show(),
            !1
        })
    }),
    n(/^bidcmsact_error\/?$/, 
    function(t) {
        var n = e.view || {};
        return t.render("bidcms/error", n, 
        function(e, t) {
            n.show()
        })
    });
    var i = function(e) {
        var t = e.page,
        n = t.user;
        t.title = n && n.username ? n.username + "的BidCms个人主页": ""
    };
    return n(/^bidcmsact_user\/bidcmsuid_[a-z0-9-_\.]+\/?$/, 
    function(t) {
        i(t);
        var n = e.view || {};
        return t.render("bidcms/people_boards", n, 
        function(e, r) {
            n.addClass("profile").show(),
            t.page.$waterfall = (new Waterfall("wrapper", {
                cellSelector: !1
            })).reposition()
        })
    }),
    n(/^bidcmsact_user\/bidcmsuid_[a-z0-9-_\.]+\/bidcmstype_pins\/?$/, 
    function(t) {
        i(t);
        var n = e.view || {};
        return t.render("bidcms/people_pins", n, 
        function(e, r) {
            n.addClass("profile").show();
            var i = t.page.page || !1;
            t.page.$waterfall = (new Waterfall("waterfall", {
                preservedCols: 1,
                loader: t.createCellLoader(t.page.bidcmsurl, 20, i, 
                function(e) {
                    var t = e.user.pins;
                    return t.each(function(t) {
                        t.user = e.user
                    }),
                    {
                        data: t
                    }
                })
            })).reposition()
        })
    }),
    n(/^bidcmsact_user\/bidcmsuid_[a-z0-9-_\.]+\/bidcmstype_likes\/?$/, 
    function(t) {
        i(t);
        var n = e.view || {};
        return t.render("bidcms/people_likes", n, 
        function(e, r) {
            n.addClass("profile").show(),
            t.page.$waterfall = (new Waterfall("waterfall", {
                preservedCols: 1,
                loader: t.createCellLoader(t.page.bidcmsurl, 20, 
                function(e) {
                    return {
                        data: e.user.likes
                    }
                })
            })).reposition()
        })
    }),
    n(/^bidcmsact_fm\/\w+(\/(pins|boards))?(\/[^/]+)?\/?$/ ,
    function(t) {
        var n = e.view || {};
        return t.render("channel/channel", n, 
        function(e, r) {
            n.addClass("channel").show();
            var i = {
                container: "channel_container"
            };
            t.page.pager != "normal" ? i.loader = t.createCellLoader(t.page.bidcmsurl, 20, 
            function(e) {
                var t = e.view_type;
                if (t == "pins") {
                    var n = e.pins;
                    return {
                        data: n
                    }
                }
                if (t == "boards") {
                    var r = e.boards;
                    return {
                        data: r
                    }
                }
            }) : i.containerSelectorOffset = 0,
            t.page.$waterfall = (new Waterfall("waterfall", i)).reposition()
        })
    }),
    e
} (typeof exports == "undefined" ? window.app: exports);
var Autocompleter = {},
OverlayFix = IframeShim;Autocompleter.Base = new Class({
    Implements: [Options, Events],
    options: {
        minLength: 1,
        markQuery: !0,
        width: "inherit",
        maxChoices: 10,
        className: "autocompleter-choices",
        zIndex: 42,
        delay: 400,
        observerOptions: {},
        fxOptions: {},
        autoSubmit: !1,
        overflow: !1,
        overflowMargin: 25,
        selectFirst: !1,
        filter: null,
        filterCase: !1,
        filterSubset: !1,
        forceSelect: !1,
        selectMode: !0,
        choicesMatch: null,
        multiple: !1,
        separator: ", ",
        autoTrim: !0,
        allowDupes: !1,
        cache: !0,
        relative: !1
    },
    initialize: function(e, t) {
        this.element = document.id(e),
        this.setOptions(t),
        this.options.separatorSplit = new RegExp("s*[" + this.options.separator + "]s*"),
        this.build(),
        this.observer = new Observer(this.element, this.prefetch.bind(this), Object.merge({
            delay: this.options.delay
        },
        this.options.observerOptions)),
        this.queryValue = null,
        this.options.filter && (this.filter = this.options.filter.bind(this));
        var n = this.options.selectMode;
        this.typeAhead = n == "type-ahead",
        this.selectMode = n === !0 ? "selection": n,
        this.cached = []
    },
    build: function() {
        if (document.id(this.options.customChoices)) this.choices = this.options.customChoices;
        else {
            this.choices = (new Element("ul", {
                "class": this.options.className,
                styles: {
                    display: "none",
                    zIndex: this.options.zIndex
                }
            })).inject(document.body),
            this.relative = !1;
            if (this.options.relative || this.element.getOffsetParent() != document.body) this.choices.inject(this.element, "after"),
            this.relative = this.element.getOffsetParent(),
            function() {
                this.relative = this.element.getOffsetParent()
            }.bind(this).delay(1e3);
            this.fix = new OverlayFix(this.choices)
        }
        this.options.separator.test(this.options.separatorSplit) || (this.options.separatorSplit = this.options.separator),
        this.fx = this.options.fxOptions ? (new Fx.Tween(this.choices, Object.merge({
            property: "opacity",
            link: "cancel",
            duration: 200
        },
        this.options.fxOptions))).addEvent("onStart", Chain.prototype.clearChain).set(0) : null,
        this.element.setProperty("autocomplete", "off").addEvent(Browser.ie || Browser.chrome || Browser.safari ? "keydown": "keypress", this.onCommand.bind(this)).addEvent("click", this.onCommand.bind(this, !1)).addEvent("focus", 
        function() {
            this.toggleFocus.delay(100, this, [!0])
        }.bind(this))
    },
    destroy: function() {
        this.fix && this.fix.dispose(),
        this.choices = this.selected = this.choices.destroy()
    },
    toggleFocus: function(e) {
        this.focussed = e,
        e || this.hideChoices(!0),
        this.fireEvent(e ? "onFocus": "onBlur", [this.element])
    },
    onCommand: function(e) {
        if (!e && this.focussed) return this.prefetch();
        if (e && e.key && !e.shift) switch (e.key) {
        case "enter":
        case "tab":
            if (this.selected && this.visible) return this.choiceSelect(this.selected),
            !!this.options.autoSubmit;
            break;
        case "up":
        case "down":
            if (!this.prefetch() && this.queryValue !== null) {
                var t = e.key == "up";
                return this.choiceOver((this.selected || this.choices)[this.selected ? t ? "getPrevious": "getNext": t ? "getLast": "getFirst"](this.options.choicesMatch), !0),
                !1
            };
        case "esc":
            this.hideChoices(!0)
        }
        return ! 0
    },
    setSelection: function(e) {
        var t = this.selected.inputValue,
        n = t,
        r = this.queryValue.length,
        i = t.length;
        t.substr(0, r).toLowerCase() != this.queryValue.toLowerCase() && (r = 0);
        if (this.options.multiple) {
            var s = this.options.separatorSplit;
            n = this.element.value,
            r += this.queryIndex,
            i += this.queryIndex;
            var o = n.substr(this.queryIndex).split(s, 1)[0];
            n = n.substr(0, this.queryIndex) + t + n.substr(this.queryIndex + o.length);
            if (e) {
                var u = /[^\s,]+/,
                a = n.split(this.options.separatorSplit).filter(u.test, u);
                this.options.allowDupes || (a = [].combine(a));
                var f = this.options.separator;
                n = a.join(f) + f,
                i = n.length
            }
        }
        this.observer.setValue(n),
        this.opted = n;
        if (e || this.selectMode == "pick") r = i;
        this.element.selectRange(r, i),
        this.fireEvent("onSelection", [this.element, this.selected, n, t])
    },
    showChoices: function() {
        var e = this.options.choicesMatch,
        t = this.choices.getFirst(e);
        this.selected = this.selectedValue = null;
        if (this.fix) {
            var n = this.element.getCoordinates(this.relative),
            r = this.options.width || "auto";
            this.choices.setStyles({
                left: n.left,
                top: n.bottom,
                width: r === !0 || r == "inherit" ? n.width: r
            })
        }
        if (!t) return;
        this.visible || (this.visible = !0, this.choices.setStyle("display", ""), this.fx && this.fx.start(1), this.fireEvent("onShow", [this.element, this.choices])),
        (this.options.selectFirst || this.typeAhead || t.inputValue == this.queryValue) && this.choiceOver(t, this.typeAhead);
        var i = this.choices.getChildren(e),
        s = this.options.maxChoices,
        o = {
            overflowY: "hidden",
            height: ""
        };
        this.overflown = !1;
        if (i.length > s) {
            var u = i[s - 1];
            o.overflowY = "scroll",
            o.height = u.getCoordinates(this.choices).bottom,
            this.overflown = !0
        }
        this.choices.setStyles(o),
        this.fix.show()
    },
    hideChoices: function(e) {
        if (e) {
            var t = this.element.value;
            this.options.forceSelect && (t = this.opted),
            this.options.autoTrim && (t = t.split(this.options.separatorSplit).filter(function() {
                return arguments[0]
            }).join(this.options.separator)),
            this.observer.setValue(t)
        }
        if (!this.visible) return;
        this.visible = !1,
        this.observer.clear();
        var n = function() {
            this.choices.setStyle("display", "none"),
            this.fix.hide()
        }.bind(this);
        this.fx ? this.fx.start(0).chain(n) : n(),
        this.fireEvent("onHide", [this.element, this.choices])
    },
    prefetch: function() {
        var e = this.element.value,
        t = e;
        if (this.options.multiple) {
            var n = this.options.separatorSplit,
            r = e.split(n),
            i = this.element.getCaretPosition(),
            s = e.substr(0, i).split(n),
            o = s.length - 1;
            i -= s[o].length,
            t = r[o]
        }
        if (t.length < this.options.minLength) this.hideChoices();
        else if (t === this.queryValue || this.visible && t == this.selectedValue) {
            if (this.visible) return ! 1;
            this.showChoices()
        } else this.queryValue = t,
        this.queryIndex = i,
        this.fetchCached() || this.query();
        return ! 0
    },
    fetchCached: function() {
        return ! this.options.cache || !this.cached || !this.cached.length || this.cached.length >= this.options.maxChoices || this.queryValue ? !1: (this.update(this.filter(this.cached)), !0)
    },
    update: function(e) {
        this.choices.empty(),
        this.cached = e,
        !e || !e.length ? this.hideChoices() : (this.options.maxChoices < e.length && !this.options.overflow && (e.length = this.options.maxChoices), e.each(this.options.injectChoice || 
        function(e) {
            var t = new Element("li", {
                html: this.markQueryValue(e)
            });
            t.inputValue = e,
            this.addChoiceEvents(t).inject(this.choices)
        },
        this), this.showChoices())
    },
    choiceOver: function(e, t) {
        if (!e || e == this.selected) return;
        this.selected && this.selected.removeClass("autocompleter-selected"),
        this.selected = e.addClass("autocompleter-selected"),
        this.fireEvent("onSelect", [this.element, this.selected, t]);
        if (!t) return;
        this.selectedValue = this.selected.inputValue;
        if (this.overflown) {
            var n = this.selected.getCoordinates(this.choices),
            r = this.options.overflowMargin,
            i = this.choices.scrollTop,
            s = this.choices.offsetHeight,
            o = i + s;
            n.top - r < i && i ? this.choices.scrollTop = Math.max(n.top - r, 0) : n.bottom + r > o && (this.choices.scrollTop = Math.min(n.bottom - s + r, o))
        }
        this.selectMode && this.setSelection()
    },
    choiceSelect: function(e) {
        e && this.choiceOver(e),
        this.setSelection(!0),
        this.queryValue = !1,
        this.hideChoices()
    },
    filter: function(e) {
        return (e || this.tokens).filter(function(e) {
            return this.test(e)
        },
        new RegExp((this.options.filterSubset ? "": "^") + this.queryValue.escapeRegExp(), this.options.filterCase ? "": "i"))
    },
    markQueryValue: function(e) {
        if (!this.options.markQuery || !this.queryValue) return e;
        var t = new RegExp("(" + (this.options.filterSubset ? "": "^") + this.queryValue.escapeRegExp() + ")", this.options.filterCase ? "": "i");
        return e.replace(t, '<a class="autocompleter-queried">$1</a>')
    },
    addChoiceEvents: function(e) {
        return e.addEvents({
            mouseover: this.choiceOver.bind(this, e),
            click: this.choiceSelect.bind(this, e)
        })
    }
});
var Observer = new Class({
    Implements: [Options, Events],
    options: {
        periodical: !1,
        delay: 1e3
    },
    initialize: function(e, t, n) {
        this.setOptions(n),
        this.addEvent("onFired", t),
        this.element = document.id(e) || $$(e),
        this.boundChange = this.changed.bind(this),
        this.resume()
    },
    changed: function() {
        var e = this.element.get("value");
        if ($equals(this.value, e)) return;
        this.clear(),
        this.value = e,
        this.timeout = this.onFired.delay(this.options.delay, this)
    },
    setValue: function(e) {
        return this.value = e,
        this.element.set("value", e),
        this.clear()
    },
    onFired: function() {
        this.fireEvent("onFired", [this.value, this.element])
    },
    clear: function() {
        return clearTimeout(this.timeout || null),
        this
    },
    pause: function() {
        return clearTimeout(this.timeout),
        clearTimeout(this.timer),
        this.element.removeEvent("keyup", this.boundChange),
        this
    },
    resume: function() {
        return this.value = this.element.get("value"),
        this.options.periodical ? this.timer = this.changed.periodical(this.options.periodical, this) : this.element.addEvent("keyup", this.boundChange),
        this
    }
}), $equals = function(e, t) {
    return e == t || JSON.encode(e) == JSON.encode(t)
}; (function() {
    var e = new RegExp(/\@[^\s]{0,32}/g),
    t = new RegExp(/^\@[^\s]{0,32}$/);
    Autocompleter.Contacts = new Class({
        Extends: Autocompleter.Base,
        Implements: StyleWriter,
        options: {
            delay: 100,
            allowDupes: !1,
            multiple: !1,
            selectMode: "pick",
            className: "ac-choices",
            css: ".ac-choices {position: absolute;background: #fff;border: 1px solid #ccc;}\n.ac-choices {-webkit-box-shadow: 0 1px 5px rgba(0,0,0,.2);-moz-box-shadow: 0 1px 5px rgba(0,0,0,.2);box-shadow: 0 1px 5px rgba(0,0,0,.2);}\n.ac-choices li {padding: 3px 5px;cursor: pointer;white-space: nowrap;overflow: hidden;}\n.ac-choices li:hover {background: #f5f5f5;}\n.ac-choices li img {float: left;}\n.ac-choices li span {margin-left: 5px;line-height: 24px;}\n.ac-choices li span.ac-username {font-size: 14px;}\n.ac-choices li span.ac-urlname {color: #ccc;}\n.ac-choices li.autocompleter-selected {background: #f5f5f5;}\n.ac-choices li .autocompleter-queried {background: #d2f092;}\n",
            cssId: "autocompleter"
        },
        initialize: function(e, t) {
            this.parent(e, t),
            this.options.injectChoice = this.injectChoice,
            this.createStyle(this.options.css, this.options.cssId),
            this.loadTokens()
        },
        loadTokens: function() {
            this.tokens || (app.req.user ? app.req.user.followings ? this.tokens = app.req.user.followings: (new Request.JSON({
                url: "/" + app.req.user.urlname + "/following/",
                data: {
                    limit: 500,
                    nopins: !0
                },
                onSuccess: function(e) {
                    this.tokens = e.users,
                    app.req.user.followings = e.users
                }.bind(this)
            })).get() : this.tokens = [])
        },
        query: function() {
            this.update(this.filter())
        },
        filter: function() {
            if (!this.tokens) return [];
            var e = this.queryForMatching();
            if (e == "") return this.tokens.clone();
            var t = new RegExp("^" + e.escapeRegExp(), "i"),
            n = this.tokens.filter(function(e) {
                return t.test(e.username)
            });
            return n
        },
        queryForMatching: function() {
            return this.queryValue || ""
        },
        valueForInput: function(e) {
            return e.username
        },
        injectChoice: function(e) {
            var t = (new Element("li")).adopt(new Element("img", {
                styles: {
                    width: 24,
                    height: 24
                },
                src: app.avatar(e)
            })).adopt((new Element("span", {
                "class": "ac-username"
            })).set("html", this.markQueryValue(e.username)));
            t.inputValue = this.valueForInput(e),
            this.addChoiceEvents(t).inject(this.choices)
        },
        markQueryValue: function(e) {
            if (!this.options.markQuery || !this.queryValue) return e;
            var t = this.queryForMatching();
            if (!t) return e;
            var n = new RegExp("(" + (this.options.filterSubset ? "": "^") + t.escapeRegExp() + ")", this.options.filterCase ? "": "i");
            return e.replace(n, '<a class="autocompleter-queried">$1</a>')
        }
    }),
    Autocompleter.Contacts.At = new Class({
        Extends: Autocompleter.Contacts,
        options: {
            selectFirst: !0,
            allowDupes: !0,
            multiple: !0,
            separator: " "
        },
        prefetch: function() {
            var t = this.element.value,
            n = null,
            r = -1,
            i = t.match(e);
            if (i) {
                var s = this.element.getCaretPosition(),
                o = t.substr(0, s).match(e);
                if (o) {
                    var u = o.length - 1;
                    r = s - o[u].length,
                    t.substr(r, 1) == "@" ? n = i[u] : r = -1
                }
            }
            if (!n || n.length < this.options.minLength) this.hideChoices();
            else if (n === this.queryValue || this.visible && n == this.selectedValue) {
                if (this.visible) return ! 1;
                this.showChoices()
            } else this.queryValue = n,
            this.queryIndex = r,
            this.fetchCached() || this.query();
            return ! 0
        },
        queryForMatching: function() {
            return (this.queryValue || "@").substr(1)
        },
        valueForInput: function(e) {
            var n = "@" + e.username;
            return t.test(n) ? n: "@" + e.username
        }
    })
}).call(this);
