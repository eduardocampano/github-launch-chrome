(function (a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function (a, c) {
            b[c] = !0
        }), b
    }
    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {}
                p.data(a, c, d)
            } else d = b
        }
        return d
    }
    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }
    function ab() {
        return !1
    }
    function bb() {
        return !0
    }
    function hb(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function ib(a, b) {
        do a = a[b];
        while (a && a.nodeType !== 1);
        return a
    }
    function jb(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) return p.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return p.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = p.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (eb.test(b)) return p.filter(b, d, !c);
            b = p.filter(b, d)
        }
        return p.grep(a, function (a, d) {
            return p.inArray(a, b) >= 0 === c
        })
    }
    function kb(a) {
        var b = lb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function Cb(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function Db(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) return;
        var c, d, e, f = p._data(a),
            g = p._data(b, f),
            h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h) for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
        }
        g.data && (g.data = p.extend({}, g.data))
    }
    function Eb(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && vb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
    }
    function Fb(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function Gb(a) {
        vb.test(a.type) && (a.defaultChecked = a.checked)
    }
    function Xb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Vb.length;
        while (e--) {
            b = Vb[e] + c;
            if (b in a) return b
        }
        return d
    }
    function Yb(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }
    function Zb(a, b) {
        var c, d, e = [],
            f = 0,
            g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && Yb(c) && (e[f] = p._data(c, "olddisplay", bc(c.nodeName)))) : (d = Hb(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none"
        }
        return a
    }
    function $b(a, b, c) {
        var d = Ob.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function _b(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
            f = 0;
        for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + Ub[e], !0)), d ? (c === "content" && (f -= parseFloat(Hb(a, "padding" + Ub[e])) || 0), c !== "margin" && (f -= parseFloat(Hb(a, "border" + Ub[e] + "Width")) || 0)) : (f += parseFloat(Hb(a, "padding" + Ub[e])) || 0, c !== "padding" && (f += parseFloat(Hb(a, "border" + Ub[e] + "Width")) || 0));
        return f
    }
    function ac(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0) {
            d = Hb(a, b);
            if (d < 0 || d == null) d = a.style[b];
            if (Pb.test(d)) return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + _b(a, b, c || (f ? "border" : "content"), e) + "px"
    }
    function bc(a) {
        if (Rb[a]) return Rb[a];
        var b = p("<" + a + ">").appendTo(e.body),
            c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            Ib = e.body.appendChild(Ib || p.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Jb || !Ib.createElement) Jb = (Ib.contentWindow || Ib.contentDocument).document, Jb.write("<!doctype html><html><body>"), Jb.close();
            b = Jb.body.appendChild(Jb.createElement(a)), c = Hb(b, "display"), e.body.removeChild(Ib)
        }
        return Rb[a] = c, c
    }
    function hc(a, b, c, d) {
        var e;
        if (p.isArray(b)) p.each(b, function (b, e) {
            c || dc.test(a) ? d(a, e) : hc(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && p.type(b) === "object") for (e in b) hc(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function yc(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s),
                h = 0,
                i = g.length;
            if (p.isFunction(c)) for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }
    function zc(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f],
            j = 0,
            k = i ? i.length : 0,
            l = a === uc;
        for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = zc(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = zc(a, c, d, e, "*", g)), h
    }
    function Ac(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e)
    }
    function Bc(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g), d[g]
    }
    function Cc(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {}, j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];) if (e !== "*") {
            if (h !== "*" && h !== e) {
                c = i[h + " " + e] || i["* " + e];
                if (!c) for (d in i) {
                    f = d.split(" ");
                    if (f[1] === e) {
                        c = i[h + " " + f[0]] || i["* " + f[0]];
                        if (c) {
                            c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                            break
                        }
                    }
                }
                if (c !== !0) if (c && a["throws"]) b = c(b);
                else try {
                    b = c(b)
                } catch (k) {
                    return {
                        state: "parsererror",
                        error: c ? k : "No conversion from " + h + " to " + e
                    }
                }
            }
            h = e
        }
        return {
            state: "success",
            data: b
        }
    }
    function Kc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function Lc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function Tc() {
        return setTimeout(function () {
            Mc = b
        }, 0), Mc = p.now()
    }
    function Uc(a, b) {
        p.each(b, function (b, c) {
            var d = (Sc[b] || []).concat(Sc["*"]),
                e = 0,
                f = d.length;
            for (; e < f; e++) if (d[e].call(a, b, c)) return
        })
    }
    function Vc(a, b, c) {
        var d, e = 0,
            f = 0,
            g = Rc.length,
            h = p.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                var b = Mc || Tc(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = 1 - (c / j.duration || 0),
                    e = 0,
                    f = j.tweens.length;
                for (; e < f; e++) j.tweens[e].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: p.extend({}, b),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Mc || Tc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e), e
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    for (; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        Wc(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = Rc[e].call(j, a, k, j.opts);
            if (d) return d
        }
        return Uc(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
            anim: j,
            queue: j.opts.queue,
            elem: a
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function Wc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
    }
    function Xc(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {}, o = [],
            q = a.nodeType && Yb(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
            j.unqueued || k()
        }), j.unqueued++, l.always(function () {
            l.always(function () {
                j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || bc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function () {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (Oc.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) continue;
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function () {
                p(a).hide()
            }), l.done(function () {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) p.style(a, b, n[b])
            });
            for (d = 0; d < g; d++) e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
        }
    }
    function Yc(a, b, c, d, e) {
        return new Yc.prototype.init(a, b, c, d, e)
    }
    function Zc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (; e < 4; e += 2 - b) c = Ub[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function _c(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document,
        f = a.location,
        g = a.navigator,
        h = a.jQuery,
        i = a.$,
        j = Array.prototype.push,
        k = Array.prototype.slice,
        l = Array.prototype.indexOf,
        m = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        o = String.prototype.trim,
        p = function (a, b) {
            return new p.fn.init(a, b, c)
        }, q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        r = /\S/,
        s = /\s+/,
        t = r.test("�") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        A = /^-ms-/,
        B = /-([\da-z])/gi,
        C = function (a, b) {
            return (b + "").toUpperCase()
        }, D = function () {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
        }, E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function (a, c, d) {
            var f, g, h, i;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) return d.find(a);
                        this.length = 1, this[0] = g
                    }
                    return this.context = e, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return k.call(this)
        },
        get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function (a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        },
        each: function (a, b) {
            return p.each(this, a, b)
        },
        ready: function (a) {
            return p.ready.promise().done(a), this
        },
        eq: function (a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function (a) {
            return this.pushStack(p.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1,
            j = arguments.length,
            k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++) if ((a = arguments[i]) != null) for (c in a) {
            d = h[c], e = a[c];
            if (h === e) continue;
            k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
        }
        return h
    }, p.extend({
        noConflict: function (b) {
            return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? p.readyWait++ : p.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? --p.readyWait : p.isReady) return;
            if (!e.body) return setTimeout(p.ready, 1);
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0) return;
            d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
        },
        isFunction: function (a) {
            return p.type(a) === "function"
        },
        isArray: Array.isArray || function (a) {
            return p.type(a) === "array"
        },
        isWindow: function (a) {
            return a != null && a == a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            return a == null ? String(a) : E[m.call(a)] || "object"
        },
        isPlainObject: function (a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || n.call(a, d)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function (a) {
            throw new Error(a)
        },
        parseHTML: function (a, b, c) {
            var d;
            return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function (b) {
            if (!b || typeof b != "string") return null;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
            p.error("Invalid JSON: " + b)
        },
        parseXML: function (c) {
            var d, e;
            if (!c || typeof c != "string") return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
        },
        noop: function () {},
        globalEval: function (b) {
            b && r.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(A, "ms-").replace(B, C)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        each: function (a, c, d) {
            var e, f = 0,
                g = a.length,
                h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a) if (c.apply(a[e], d) === !1) break
                } else for (; f < g;) if (c.apply(a[f++], d) === !1) break
            } else if (h) {
                for (e in a) if (c.call(a[e], e, a[e]) === !1) break
            } else for (; f < g;) if (c.call(a[f], f, a[f++]) === !1) break;
            return a
        },
        trim: o ? function (a) {
            return a == null ? "" : o.call(a)
        } : function (a) {
            return a == null ? "" : a.toString().replace(t, "")
        },
        makeArray: function (a, b) {
            var c, d = b || [];
            return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (l) return l.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++) if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if (typeof d == "number") for (; f < d; f++) a[e++] = c[f];
            else while (c[f] !== b) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            c = !! c;
            for (; f < g; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function (a, c, d) {
            var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j) for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
            else for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function (a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function () {
                return a.apply(c, e.concat(k.call(arguments)))
            }, f.guid = a.guid = a.guid || f.guid || p.guid++, f) : b
        },
        access: function (a, c, d, e, f, g, h) {
            var i, j = d == null,
                k = 0,
                l = a.length;
            if (d && typeof d == "object") {
                for (k in d) p.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                i = h === b && p.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                    return i.call(p(a), c)
                }) : (c.call(a, e), c = null));
                if (c) for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function () {
            return (new Date).getTime()
        }
    }), p.ready.promise = function (b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete" || e.readyState !== "loading" && e.addEventListener) setTimeout(p.ready, 1);
            else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);
            else {
                e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                var c = !1;
                try {
                    c = a.frameElement == null && e.documentElement
                } catch (f) {}
                c && c.doScroll && function g() {
                    if (!p.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(g, 50)
                        }
                        p.ready()
                    }
                }()
            }
        }
        return d.promise(b)
    }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }), c = p(e);
    var F = {};
    p.Callbacks = function (a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function (b) {
                c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
                for (; i && h < g; h++) if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
                e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            }, l = {
                add: function () {
                    if (i) {
                        var b = i.length;
                        (function d(b) {
                            p.each(b, function (b, c) {
                                p.isFunction(c) && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && d(c)
                            })
                        })(arguments), e ? g = i.length : c && (f = b, k(c))
                    }
                    return this
                },
                remove: function () {
                    return i && p.each(arguments, function (a, b) {
                        var c;
                        while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                    }), this
                },
                has: function (a) {
                    return p.inArray(a, i) > -1
                },
                empty: function () {
                    return i = [], this
                },
                disable: function () {
                    return i = j = c = b, this
                },
                disabled: function () {
                    return !i
                },
                lock: function () {
                    return j = b, c || l.disable(), this
                },
                locked: function () {
                    return !j
                },
                fireWith: function (a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return l
    }, p.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                ["notify", "progress", p.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return p.Deferred(function (c) {
                            p.each(b, function (b, d) {
                                var f = d[0],
                                    g = a[b];
                                e[d[1]](p.isFunction(g) ? function () {
                                    var a = g.apply(this, arguments);
                                    a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return typeof a == "object" ? p.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, p.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = k.call(arguments),
                d = c.length,
                e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
                f = e === 1 ? a : p.Deferred(),
                g = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                    }
                }, h, i, j;
            if (d > 1) {
                h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
            return e || f.resolveWith(j, c), f.promise()
        }
    }), p.support = function () {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length || !d) return {};
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: n.firstChild.nodeType === 3,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !! n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !! d.style.cssFloat,
            checkOn: h.value === "on",
            optSelected: g.selected,
            getSetAttribute: n.className !== "t",
            enctype: !! e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function () {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent) for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
        return p(function () {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                i = e.getElementsByTagName("body")[0];
            if (!i) return;
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                width: "4px"
            }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
        }), i.removeChild(n), c = d = f = g = h = i = n = null, b
    }();
    var H = /^(?:\{.*\}|\[.*\])$/,
        I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !! a && !K(a)
        },
        data: function (a, c, d, e) {
            if (!p.acceptData(a)) return;
            var f, g, h = p.expando,
                i = typeof c == "string",
                j = a.nodeType,
                k = j ? p.cache : a,
                l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
            l || (j ? a[h] = l = p.deletedIds.pop() || ++p.uuid : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
        },
        removeData: function (a, b, c) {
            if (!p.acceptData(a)) return;
            var d, e, f, g = a.nodeType,
                h = g ? p.cache : a,
                i = g ? a[p.expando] : p.expando;
            if (!h[i]) return;
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
                    if (!(c ? K : p.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) return
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function (a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function (a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), p.fn.extend({
        data: function (a, c) {
            var d, e, f, g, h, i = this[0],
                j = 0,
                k = null;
            if (a === b) {
                if (this.length) {
                    k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                        f = i.attributes;
                        for (h = f.length; j < h; j++) g = f[j].name, g.indexOf("data-") === 0 && (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
                        p._data(i, "parsedAttrs", !0)
                    }
                }
                return k
            }
            return typeof a == "object" ? this.each(function () {
                p.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function (c) {
                if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
                d[1] = c, this.each(function () {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function (a) {
            return this.each(function () {
                p.removeData(this, a)
            })
        }
    }), p.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = p.queue(a, b),
                d = c.shift(),
                e = p._queueHooks(a, b),
                f = function () {
                    p.dequeue(a, b)
                };
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), delete e.stop, d.call(a, f, e)), !c.length && e && e.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, {
                empty: p.Callbacks("once memory").add(function () {
                    p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
                })
            })
        }
    }), p.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                p.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var d, e = 1,
                f = p.Deferred(),
                g = this,
                h = this.length,
                i = function () {
                    --e || f.resolveWith(g, [g])
                };
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            while (h--)(d = p._data(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var L, M, N, O = /[\t\r\n]/g,
        P = /\r/g,
        Q = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        S = /^a(?:rea|)$/i,
        T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function (a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                p.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = p.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) return this.each(function (b) {
                p(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        f = " " + e.className + " ";
                        for (g = 0, h = b.length; g < h; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                        e.className = p.trim(f)
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) return this.each(function (b) {
                p(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++) while (d.indexOf(" " + c[f] + " ") > -1) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function (c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if (c === "string") {
                    var e, f = 0,
                        g = p(this),
                        h = b,
                        i = a.split(s);
                    while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
                return
            }
            return e = p.isFunction(a), this.each(function (d) {
                var f, g = p(this);
                if (this.nodeType !== 1) return;
                e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function (a) {
                    return a == null ? "" : a + ""
                })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = a.type === "select-one";
                    if (f < 0) return null;
                    c = i ? f : 0, d = i ? f + 1 : h.length;
                    for (; c < d; c++) {
                        e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                            b = p(e).val();
                            if (i) return b;
                            g.push(b)
                        }
                    }
                    return i && !g.length && h.length ? p(h[f]).val() : g
                },
                set: function (a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function () {
                        this.selected = p.inArray(p(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
            if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
            h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null) {
                    p.removeAttr(a, c);
                    return
                }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d)
            }
            return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(s);
                for (; g < d.length; g++) e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
                    else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (L && p.nodeName(a, "button")) return L.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) return;
            return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), M = {
        get: function (a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, U || (N = {
        name: !0,
        id: !0,
        coords: !0
    }, L = p.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
        },
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, p.each(["width", "height"], function (a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
            set: function (a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c
            }
        })
    }), p.attrHooks.contenteditable = {
        get: L.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), L.set(a, b, c)
        }
    }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function (a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), p.support.style || (p.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = p.extend(p.valHooks[this], {
            set: function (a, b) {
                if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0
            }
        })
    });
    var V = /^(?:textarea|input|select)$/i,
        W = /^([^\.]*|)(?:\.(.+)|)$/,
        X = /(?:^|\s)hover(\.\S+|)\b/,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = function (a) {
            return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
        };
    p.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, q, r;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
            d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                return typeof p == "undefined" || !! a && p.event.triggered === a.type ? b : p.event.dispatch.apply(h.elem, arguments)
            }, h.elem = a), c = p.trim(_(c)).split(" ");
            for (j = 0; j < c.length; j++) {
                k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    namespace: m.join(".")
                }, o), q = i[l];
                if (!q) {
                    q = i[l] = [], q.delegateCount = 0;
                    if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                }
                r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
            }
            a = null
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
            if (!r || !(m = r.events)) return;
            b = p.trim(_(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                if (!h) {
                    for (h in m) p.event.remove(a, h + b[f], c, d, !0);
                    continue
                }
                n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (l = 0; l < o.length; l++) q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
                o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
            }
            p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, f, g) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                    t = [];
                if ($.test(s + p.event.triggered)) return;
                s.indexOf("!") >= 0 && (s = s.slice(0, - 1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
                c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                if (!f) {
                    h = p.cache;
                    for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                if (n.trigger && n.trigger.apply(f, d) === !1) return;
                q = [
                    [f, n.bindType || s]
                ];
                if (!g && !n.noBubble && !p.isWindow(f)) {
                    r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                    for (l = f; k; k = k.parentNode) q.push([k, r]), l = k;
                    l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                }
                for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply(k, d) === !1 && c.preventDefault();
                return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
            }
            return
        },
        dispatch: function (c) {
            c = p.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                q = o.delegateCount,
                r = [].slice.call(arguments),
                s = !c.exclusive && !c.namespace,
                t = p.event.special[c.type] || {}, u = [];
            r[0] = c, c.delegateTarget = this;
            if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
            if (q && (!c.button || c.type !== "click")) {
                g = p(this), g.context = this;
                for (f = c.target; f != this; f = f.parentNode || this) if (f.disabled !== !0 || c.type !== "click") {
                    i = {}, k = [], g[0] = f;
                    for (d = 0; d < q; d++) l = o[d], m = l.selector, i[m] === b && (i[m] = g.is(m)), i[m] && k.push(l);
                    k.length && u.push({
                        elem: f,
                        matches: k
                    })
                }
            }
            o.length > q && u.push({
                elem: this,
                matches: o.slice(q)
            });
            for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                j = u[d], c.currentTarget = j.elem;
                for (e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) {
                    l = j.matches[e];
                    if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data, c.handleObj = l, h = ((p.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, r), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return t.postDispatch && t.postDispatch.call(this, c), c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, f, g, h = c.button,
                    i = c.fromElement;
                return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[p.expando]) return a;
            var b, c, d = a,
                f = p.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
            a = p.Event(d);
            for (b = g.length; b;) c = g[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, f.filter ? f.filter(a, d) : a
        },
        special: {
            ready: {
                setup: p.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, c) {
                    p.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = p.extend(new p.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
    }, p.Event = function (a, b) {
        if (!(this instanceof p.Event)) return new p.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ab) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0
    }, p.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = bb;
            var a = this.originalEvent;
            if (!a) return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = bb;
            var a = this.originalEvent;
            if (!a) return;
            a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        },
        isDefaultPrevented: ab,
        isPropagationStopped: ab,
        isImmediatePropagationStopped: ab
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        p.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj,
                    g = f.selector;
                if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    }), p.support.submitBubbles || (p.event.special.submit = {
        setup: function () {
            if (p.nodeName(this, "form")) return !1;
            p.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), p._data(d, "_submit_attached", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            if (p.nodeName(this, "form")) return !1;
            p.event.remove(this, "._submit")
        }
    }), p.support.changeBubbles || (p.event.special.change = {
        setup: function () {
            if (V.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), p.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                });
                return !1
            }
            p.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                }), p._data(b, "_change_attached", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return p.event.remove(this, "._change"), V.test(this.nodeName)
        }
    }), p.support.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = 0,
            d = function (a) {
                p.event.simulate(b, a.target, p.event.fix(a), !0)
            };
        p.event.special[b] = {
            setup: function () {
                c++ === 0 && e.addEventListener(a, d, !0)
            },
            teardown: function () {
                --c === 0 && e.removeEventListener(a, d, !0)
            }
        }
    }), p.fn.extend({
        on: function (a, c, d, e, f) {
            var g, h;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (h in a) this.on(h, c, d, a[h], f);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = ab;
            else if (!e) return this;
            return f === 1 && (g = e, e = function (a) {
                return p().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function () {
                p.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if (typeof a == "object") {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            return d === !1 && (d = ab), this.each(function () {
                p.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            return p(this.context).on(a, this.selector, b, c), this
        },
        die: function (a, b) {
            return p(this.context).off(a, this.selector || "**", b), this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                p.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return p.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || p.guid++,
                d = 0,
                e = function (c) {
                    var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                    return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        p.fn[b] = function (a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
    }),
    function (a, b) {
        function db(a, b, c, d) {
            var e = 0,
                f = b.length;
            for (; e < f; e++) Z(a, b[e], c, d)
        }
        function eb(a, b, c, d, e, f) {
            var g, h = $.setFilters[b.toLowerCase()];
            return h || Z.error(b), (a || !(g = e)) && db(a || "*", d, g = [], e), g.length > 0 ? h(g, c, f) : []
        }
        function fb(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, p = 0,
                q = f.length,
                s = L.POS,
                t = new RegExp("^" + s.source + "(?!" + r + ")", "i"),
                u = function () {
                    var a = 1,
                        c = arguments.length - 2;
                    for (; a < c; a++) arguments[a] === b && (g[a] = b)
                };
            for (; p < q; p++) {
                s.exec(""), a = f[p], j = [], i = 0, k = e;
                while (g = s.exec(a)) {
                    n = s.lastIndex = g.index + g[0].length;
                    if (n > i) {
                        m = a.slice(i, g.index), i = n, l = [c], B.test(m) && (k && (l = k), k = e);
                        if (h = H.test(m)) m = m.slice(0, - 5).replace(B, "$&*");
                        g.length > 1 && g[0].replace(t, u), k = eb(m, g[1], g[2], l, k, h)
                    }
                }
                k ? (j = j.concat(k), (m = a.slice(i)) && m !== ")" ? B.test(m) ? db(m, j, d, e) : Z(m, c, d, e ? e.concat(k) : k) : o.apply(d, j)) : Z(a, c, d, e)
            }
            return q === 1 ? d : Z.uniqueSort(d)
        }
        function gb(a, b, c) {
            var d, e, f, g = [],
                i = 0,
                j = D.exec(a),
                k = !j.pop() && !j.pop(),
                l = k && a.match(C) || [""],
                m = $.preFilter,
                n = $.filter,
                o = !c && b !== h;
            for (;
            (e = l[i]) != null && k; i++) {
                g.push(d = []), o && (e = " " + e);
                while (e) {
                    k = !1;
                    if (j = B.exec(e)) e = e.slice(j[0].length), k = d.push({
                        part: j.pop().replace(A, " "),
                        captures: j
                    });
                    for (f in n)(j = L[f].exec(e)) && (!m[f] || (j = m[f](j, b, c))) && (e = e.slice(j.shift().length), k = d.push({
                        part: f,
                        captures: j
                    }));
                    if (!k) break
                }
            }
            return k || Z.error(a), g
        }
        function hb(a, b, e) {
            var f = b.dir,
                g = m++;
            return a || (a = function (a) {
                return a === e
            }), b.first ? function (b, c) {
                while (b = b[f]) if (b.nodeType === 1) return a(b, c) && b
            } : function (b, e) {
                var h, i = g + "." + d,
                    j = i + "." + c;
                while (b = b[f]) if (b.nodeType === 1) {
                    if ((h = b[q]) === j) return b.sizset;
                    if (typeof h == "string" && h.indexOf(i) === 0) {
                        if (b.sizset) return b
                    } else {
                        b[q] = j;
                        if (a(b, e)) return b.sizset = !0, b;
                        b.sizset = !1
                    }
                }
            }
        }
        function ib(a, b) {
            return a ? function (c, d) {
                var e = b(c, d);
                return e && a(e === !0 ? c : e, d)
            } : b
        }
        function jb(a, b, c) {
            var d, e, f = 0;
            for (; d = a[f]; f++) $.relative[d.part] ? e = hb(e, $.relative[d.part], b) : (d.captures.push(b, c), e = ib(e, $.filter[d.part].apply(null, d.captures)));
            return e
        }
        function kb(a) {
            return function (b, c) {
                var d, e = 0;
                for (; d = a[e]; e++) if (d(b, c)) return !0;
                return !1
            }
        }
        var c, d, e, f, g, h = a.document,
            i = h.documentElement,
            j = "undefined",
            k = !1,
            l = !0,
            m = 0,
            n = [].slice,
            o = [].push,
            q = ("sizcache" + Math.random()).replace(".", ""),
            r = "[\\x20\\t\\r\\n\\f]",
            s = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            t = s.replace("w", "w#"),
            u = "([*^$|!~]?=)",
            v = "\\[" + r + "*(" + s + ")" + r + "*(?:" + u + r + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + t + ")|)|)" + r + "*\\]",
            w = ":(" + s + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
            x = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
            y = r + "*([\\x20\\t\\r\\n\\f>+~])" + r + "*",
            z = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + v + "|" + w.replace(2, 7) + "|[^\\\\(),])+",
            A = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            B = new RegExp("^" + y),
            C = new RegExp(z + "?(?=" + r + "*,|$)", "g"),
            D = new RegExp("^(?:(?!,)(?:(?:^|,)" + r + "*" + z + ")*?|" + r + "*(.*?))(\\)|$)"),
            E = new RegExp(z.slice(19, - 6) + "\\x20\\t\\r\\n\\f>+~])+|" + y, "g"),
            F = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            G = /[\x20\t\r\n\f]*[+~]/,
            H = /:not\($/,
            I = /h\d/i,
            J = /input|select|textarea|button/i,
            K = /\\(?!\\)/g,
            L = {
                ID: new RegExp("^#(" + s + ")"),
                CLASS: new RegExp("^\\.(" + s + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + s + ")['\"]?\\]"),
                TAG: new RegExp("^(" + s.replace("[-", "[-\\*") + ")"),
                ATTR: new RegExp("^" + v),
                PSEUDO: new RegExp("^" + w),
                CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                POS: new RegExp(x, "ig"),
                needsContext: new RegExp("^" + r + "*[>+~]|" + x, "i")
            }, M = {}, N = [],
            O = {}, P = [],
            Q = function (a) {
                return a.sizzleFilter = !0, a
            }, R = function (a) {
                return function (b) {
                    return b.nodeName.toLowerCase() === "input" && b.type === a
                }
            }, S = function (a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && b.type === a
                }
            }, T = function (a) {
                var b = !1,
                    c = h.createElement("div");
                try {
                    b = a(c)
                } catch (d) {}
                return c = null, b
            }, U = T(function (a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return b !== "boolean" && b !== "string"
            }),
            V = T(function (a) {
                a.id = q + 0, a.innerHTML = "<a name='" + q + "'></a><div name='" + q + "'></div>", i.insertBefore(a, i.firstChild);
                var b = h.getElementsByName && h.getElementsByName(q).length === 2 + h.getElementsByName(q + 0).length;
                return g = !h.getElementById(q), i.removeChild(a), b
            }),
            W = T(function (a) {
                return a.appendChild(h.createComment("")), a.getElementsByTagName("*").length === 0
            }),
            X = T(function (a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== j && a.firstChild.getAttribute("href") === "#"
            }),
            Y = T(function (a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || a.getElementsByClassName("e").length === 0 ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length !== 1)
            }),
            Z = function (a, b, c, d) {
                c = c || [], b = b || h;
                var e, f, g, i, j = b.nodeType;
                if (j !== 1 && j !== 9) return [];
                if (!a || typeof a != "string") return c;
                g = ab(b);
                if (!g && !d) if (e = F.exec(a)) if (i = e[1]) {
                    if (j === 9) {
                        f = b.getElementById(i);
                        if (!f || !f.parentNode) return c;
                        if (f.id === i) return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(i)) && bb(b, f) && f.id === i) return c.push(f), c
                } else {
                    if (e[2]) return o.apply(c, n.call(b.getElementsByTagName(a), 0)), c;
                    if ((i = e[3]) && Y && b.getElementsByClassName) return o.apply(c, n.call(b.getElementsByClassName(i), 0)), c
                }
                return mb(a, b, c, d, g)
            }, $ = Z.selectors = {
                cacheLength: 50,
                match: L,
                order: ["ID", "TAG"],
                attrHandle: {},
                createPseudo: Q,
                find: {
                    ID: g ? function (a, b, c) {
                        if (typeof b.getElementById !== j && !c) {
                            var d = b.getElementById(a);
                            return d && d.parentNode ? [d] : []
                        }
                    } : function (a, c, d) {
                        if (typeof c.getElementById !== j && !d) {
                            var e = c.getElementById(a);
                            return e ? e.id === a || typeof e.getAttributeNode !== j && e.getAttributeNode("id").value === a ? [e] : b : []
                        }
                    },
                    TAG: W ? function (a, b) {
                        if (typeof b.getElementsByTagName !== j) return b.getElementsByTagName(a)
                    } : function (a, b) {
                        var c = b.getElementsByTagName(a);
                        if (a === "*") {
                            var d, e = [],
                                f = 0;
                            for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
                            return e
                        }
                        return c
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(K, ""), a[3] = (a[4] || a[5] || "").replace(K, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || Z.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && Z.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var b, c = a[4];
                        return L.CHILD.test(a[0]) ? null : (c && (b = D.exec(c)) && b.pop() && (a[0] = a[0].slice(0, b[0].length - c.length - 1), c = b[0].slice(0, - 1)), a.splice(2, 3, c || a[3]), a)
                    }
                },
                filter: {
                    ID: g ? function (a) {
                        return a = a.replace(K, ""),
                        function (b) {
                            return b.getAttribute("id") === a
                        }
                    } : function (a) {
                        return a = a.replace(K, ""),
                        function (b) {
                            var c = typeof b.getAttributeNode !== j && b.getAttributeNode("id");
                            return c && c.value === a
                        }
                    },
                    TAG: function (a) {
                        return a === "*" ? function () {
                            return !0
                        } : (a = a.replace(K, "").toLowerCase(), function (b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        })
                    },
                    CLASS: function (a) {
                        var b = M[a];
                        return b || (b = M[a] = new RegExp("(^|" + r + ")" + a + "(" + r + "|$)"), N.push(a), N.length > $.cacheLength && delete M[N.shift()]),
                        function (a) {
                            return b.test(a.className || typeof a.getAttribute !== j && a.getAttribute("class") || "")
                        }
                    },
                    ATTR: function (a, b, c) {
                        return b ? function (d) {
                            var e = Z.attr(d, a),
                                f = e + "";
                            if (e == null) return b === "!=";
                            switch (b) {
                            case "=":
                                return f === c;
                            case "!=":
                                return f !== c;
                            case "^=":
                                return c && f.indexOf(c) === 0;
                            case "*=":
                                return c && f.indexOf(c) > -1;
                            case "$=":
                                return c && f.substr(f.length - c.length) === c;
                            case "~=":
                                return (" " + f + " ").indexOf(c) > -1;
                            case "|=":
                                return f === c || f.substr(0, c.length + 1) === c + "-"
                            }
                        } : function (b) {
                            return Z.attr(b, a) != null
                        }
                    },
                    CHILD: function (a, b, c, d) {
                        if (a === "nth") {
                            var e = m++;
                            return function (a) {
                                var b, f, g = 0,
                                    h = a;
                                if (c === 1 && d === 0) return !0;
                                b = a.parentNode;
                                if (b && (b[q] !== e || !a.sizset)) {
                                    for (h = b.firstChild; h; h = h.nextSibling) if (h.nodeType === 1) {
                                        h.sizset = ++g;
                                        if (h === a) break
                                    }
                                    b[q] = e
                                }
                                return f = a.sizset - d, c === 0 ? f === 0 : f % c === 0 && f / c >= 0
                            }
                        }
                        return function (b) {
                            var c = b;
                            switch (a) {
                            case "only":
                            case "first":
                                while (c = c.previousSibling) if (c.nodeType === 1) return !1;
                                if (a === "first") return !0;
                                c = b;
                            case "last":
                                while (c = c.nextSibling) if (c.nodeType === 1) return !1;
                                return !0
                            }
                        }
                    },
                    PSEUDO: function (a, b, c, d) {
                        var e = $.pseudos[a] || $.pseudos[a.toLowerCase()];
                        return e || Z.error("unsupported pseudo: " + a), e.sizzleFilter ? e(b, c, d) : e
                    }
                },
                pseudos: {
                    not: Q(function (a, b, c) {
                        var d = lb(a.replace(A, "$1"), b, c);
                        return function (a) {
                            return !d(a)
                        }
                    }),
                    enabled: function (a) {
                        return a.disabled === !1
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && !! a.checked || b === "option" && !! a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    parent: function (a) {
                        return !$.pseudos.empty(a)
                    },
                    empty: function (a) {
                        var b;
                        a = a.firstChild;
                        while (a) {
                            if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
                            a = a.nextSibling
                        }
                        return !0
                    },
                    contains: Q(function (a) {
                        return function (b) {
                            return (b.textContent || b.innerText || cb(b)).indexOf(a) > -1
                        }
                    }),
                    has: Q(function (a) {
                        return function (b) {
                            return Z(a, b).length > 0
                        }
                    }),
                    header: function (a) {
                        return I.test(a.nodeName)
                    },
                    text: function (a) {
                        var b, c;
                        return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                    },
                    radio: R("radio"),
                    checkbox: R("checkbox"),
                    file: R("file"),
                    password: R("password"),
                    image: R("image"),
                    submit: S("submit"),
                    reset: S("reset"),
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && a.type === "button" || b === "button"
                    },
                    input: function (a) {
                        return J.test(a.nodeName)
                    },
                    focus: function (a) {
                        var b = a.ownerDocument;
                        return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && ( !! a.type || !! a.href)
                    },
                    active: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b, c) {
                        return c ? a.slice(1) : [a[0]]
                    },
                    last: function (a, b, c) {
                        var d = a.pop();
                        return c ? a : [d]
                    },
                    even: function (a, b, c) {
                        var d = [],
                            e = c ? 1 : 0,
                            f = a.length;
                        for (; e < f; e += 2) d.push(a[e]);
                        return d
                    },
                    odd: function (a, b, c) {
                        var d = [],
                            e = c ? 0 : 1,
                            f = a.length;
                        for (; e < f; e += 2) d.push(a[e]);
                        return d
                    },
                    lt: function (a, b, c) {
                        return c ? a.slice(+b) : a.slice(0, + b)
                    },
                    gt: function (a, b, c) {
                        return c ? a.slice(0, + b + 1) : a.slice(+b + 1)
                    },
                    eq: function (a, b, c) {
                        var d = a.splice(+b, 1);
                        return c ? a : d
                    }
                }
            };
        $.setFilters.nth = $.setFilters.eq, $.filters = $.pseudos, X || ($.attrHandle = {
            href: function (a) {
                return a.getAttribute("href", 2)
            },
            type: function (a) {
                return a.getAttribute("type")
            }
        }), V && ($.order.push("NAME"), $.find.NAME = function (a, b) {
            if (typeof b.getElementsByName !== j) return b.getElementsByName(a)
        }), Y && ($.order.splice(1, 0, "CLASS"), $.find.CLASS = function (a, b, c) {
            if (typeof b.getElementsByClassName !== j && !c) return b.getElementsByClassName(a)
        });
        try {
            n.call(i.childNodes, 0)[0].nodeType
        } catch (_) {
            n = function (a) {
                var b, c = [];
                for (; b = this[a]; a++) c.push(b);
                return c
            }
        }
        var ab = Z.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }, bb = Z.contains = i.compareDocumentPosition ? function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : i.contains ? function (a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a,
                    d = b.parentNode;
                return a === d || !! (d && d.nodeType === 1 && c.contains && c.contains(d))
            } : function (a, b) {
                while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, cb = Z.getText = function (a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof a.textContent == "string") return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += cb(a)
                    } else if (e === 3 || e === 4) return a.nodeValue
                } else for (; b = a[d]; d++) c += cb(b);
                return c
            };
        Z.attr = function (a, b) {
            var c, d = ab(a);
            return d || (b = b.toLowerCase()), $.attrHandle[b] ? $.attrHandle[b](a) : U || d ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, Z.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, [0, 0].sort(function () {
            return l = 0
        }), i.compareDocumentPosition ? e = function (a, b) {
            return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
        } : (e = function (a, b) {
            if (a === b) return k = !0, 0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                g = [],
                h = a.parentNode,
                i = b.parentNode,
                j = h;
            if (h === i) return f(a, b);
            if (!h) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) g.unshift(j), j = j.parentNode;
            c = e.length, d = g.length;
            for (var l = 0; l < c && l < d; l++) if (e[l] !== g[l]) return f(e[l], g[l]);
            return l === c ? f(a, g[l], - 1) : f(e[l], b, 1)
        }, f = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), Z.uniqueSort = function (a) {
            var b, c = 1;
            if (e) {
                k = l, a.sort(e);
                if (k) for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1)
            }
            return a
        };
        var lb = Z.compile = function (a, b, c) {
            var d, e, f, g = O[a];
            if (g && g.context === b) return g;
            e = gb(a, b, c);
            for (f = 0; d = e[f]; f++) e[f] = jb(d, b, c);
            return g = O[a] = kb(e), g.context = b, g.runs = g.dirruns = 0, P.push(a), P.length > $.cacheLength && delete O[P.shift()], g
        };
        Z.matches = function (a, b) {
            return Z(a, null, null, b)
        }, Z.matchesSelector = function (a, b) {
            return Z(b, null, null, [a]).length > 0
        };
        var mb = function (a, b, e, f, g) {
            a = a.replace(A, "$1");
            var h, i, j, k, l, m, p, q, r, s = a.match(C),
                t = a.match(E),
                u = b.nodeType;
            if (L.POS.test(a)) return fb(a, b, e, f, s);
            if (f) h = n.call(f, 0);
            else if (s && s.length === 1) {
                if (t.length > 1 && u === 9 && !g && (s = L.ID.exec(t[0]))) {
                    b = $.find.ID(s[1], b, g)[0];
                    if (!b) return e;
                    a = a.slice(t.shift().length)
                }
                q = (s = G.exec(t[0])) && !s.index && b.parentNode || b, r = t.pop(), m = r.split(":not")[0];
                for (j = 0, k = $.order.length; j < k; j++) {
                    p = $.order[j];
                    if (s = L[p].exec(m)) {
                        h = $.find[p]((s[1] || "").replace(K, ""), q, g);
                        if (h == null) continue;
                        m === r && (a = a.slice(0, a.length - r.length) + m.replace(L[p], ""), a || o.apply(e, n.call(h, 0)));
                        break
                    }
                }
            }
            if (a) {
                i = lb(a, b, g), d = i.dirruns++, h == null && (h = $.find.TAG("*", G.test(a) && b.parentNode || b));
                for (j = 0; l = h[j]; j++) c = i.runs++, i(l, b) && e.push(l)
            }
            return e
        };
        h.querySelectorAll && function () {
            var a, b = mb,
                c = /'|\\/g,
                d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                e = [],
                f = [":active"],
                g = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
            T(function (a) {
                a.innerHTML = "<select><option selected></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + r + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
            }), T(function (a) {
                a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + r + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            }), e = e.length && new RegExp(e.join("|")), mb = function (a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) if (d.nodeType === 9) try {
                    return o.apply(f, n.call(d.querySelectorAll(a), 0)), f
                } catch (i) {} else if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                    var j = d.getAttribute("id"),
                        k = j || q,
                        l = G.test(a) && d.parentNode || d;
                    j ? k = k.replace(c, "\\$&") : d.setAttribute("id", k);
                    try {
                        return o.apply(f, n.call(l.querySelectorAll(a.replace(C, "[id='" + k + "'] $&")), 0)), f
                    } catch (i) {} finally {
                        j || d.removeAttribute("id")
                    }
                }
                return b(a, d, f, g, h)
            }, g && (T(function (b) {
                a = g.call(b, "div");
                try {
                    g.call(b, "[test!='']:sizzle"), f.push($.match.PSEUDO)
                } catch (c) {}
            }), f = new RegExp(f.join("|")), Z.matchesSelector = function (b, c) {
                c = c.replace(d, "='$1']");
                if (!ab(b) && !f.test(c) && (!e || !e.test(c))) try {
                    var h = g.call(b, c);
                    if (h || a || b.document && b.document.nodeType !== 11) return h
                } catch (i) {}
                return Z(c, null, null, [b]).length > 0
            })
        }(), Z.attr = p.attr, p.find = Z, p.expr = Z.selectors, p.expr[":"] = p.expr.pseudos, p.unique = Z.uniqueSort, p.text = Z.getText, p.isXMLDoc = Z.isXML, p.contains = Z.contains
    }(a);
    var cb = /Until$/,
        db = /^(?:parents|prev(?:Until|All))/,
        eb = /^.[^:#\[\.,]*$/,
        fb = p.expr.match.needsContext,
        gb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") return p(a).filter(function () {
                for (b = 0, c = h.length; b < c; b++) if (p.contains(h[b], this)) return !0
            });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length, p.find(a, this[b], g);
                if (b > 0) for (e = d; e < g.length; e++) for (f = 0; f < d; f++) if (g[f] === g[e]) {
                    g.splice(e--, 1);
                    break
                }
            }
            return g
        },
        has: function (a) {
            var b, c = p(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; b < d; b++) if (p.contains(this, c[b])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(jb(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(jb(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? fb.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = fb.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
        },
        index: function (a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                d = p.merge(this.get(), c);
            return this.pushStack(hb(c[0]) || hb(d[0]) ? d : p.unique(d))
        },
        addBack: function (a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    }), p.fn.andSelf = p.fn.addBack, p.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return p.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return p.dir(a, "parentNode", c)
        },
        next: function (a) {
            return ib(a, "nextSibling")
        },
        prev: function (a) {
            return ib(a, "previousSibling")
        },
        nextAll: function (a) {
            return p.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return p.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return p.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return p.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return p.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return p.sibling(a.firstChild)
        },
        contents: function (a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
        }
    }, function (a, b) {
        p.fn[a] = function (c, d) {
            var e = p.map(this, b, c);
            return cb.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !gb[a] ? p.unique(e) : e, this.length > 1 && db.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
        }
    }), p.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var lb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        mb = / jQuery\d+="(?:null|\d+)"/g,
        nb = /^\s+/,
        ob = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        pb = /<([\w:]+)/,
        qb = /<tbody/i,
        rb = /<|&#?\w+;/,
        sb = /<(?:script|style|link)/i,
        tb = /<(?:script|object|embed|option|style)/i,
        ub = new RegExp("<(?:" + lb + ")[\\s/>]", "i"),
        vb = /^(?:checkbox|radio)$/,
        wb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xb = /\/(java|ecma)script/i,
        yb = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        zb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ab = kb(e),
        Bb = Ab.appendChild(e.createElement("div"));
    zb.optgroup = zb.option, zb.tbody = zb.tfoot = zb.colgroup = zb.caption = zb.thead, zb.th = zb.td, p.support.htmlSerialize || (zb._default = [1, "X<div>", "</div>"]), p.fn.extend({
        text: function (a) {
            return p.access(this, function (a) {
                return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (p.isFunction(a)) return this.each(function (b) {
                p(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return p.isFunction(a) ? this.each(function (b) {
                p(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = p(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = p.isFunction(a);
            return this.each(function (c) {
                p(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (!hb(this[0])) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(a, this), "before", this.selector)
            }
        },
        after: function () {
            if (!hb(this[0])) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(this, a), "after", this.selector)
            }
        },
        remove: function (a, b) {
            var c, d = 0;
            for (;
            (c = this[d]) != null; d++) if (!a || p.filter(a, [c]).length)!b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
            return this
        },
        empty: function () {
            var a, b = 0;
            for (;
            (a = this[b]) != null; b++) {
                a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                while (a.firstChild) a.removeChild(a.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
                return p.clone(this, a, b)
            })
        },
        html: function (a) {
            return p.access(this, function (a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(mb, "") : b;
                if (typeof a == "string" && !sb.test(a) && (p.support.htmlSerialize || !ub.test(a)) && (p.support.leadingWhitespace || !nb.test(a)) && !zb[(pb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ob, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            return hb(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function (b) {
                var c = p(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : (typeof a != "string" && (a = p(a).detach()), this.each(function () {
                var b = this.nextSibling,
                    c = this.parentNode;
                p(this).remove(), b ? p(b).before(a) : p(c).append(a)
            }))
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0,
                j = a[0],
                k = [],
                l = this.length;
            if (!p.support.checkClone && l > 1 && typeof j == "string" && wb.test(j)) return this.each(function () {
                p(this).domManip(a, c, d)
            });
            if (p.isFunction(j)) return this.each(function (e) {
                var f = p(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                if (f) {
                    c = c && p.nodeName(f, "tr");
                    for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? Cb(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                }
                g = f = null, k.length && p.each(k, function (a, b) {
                    b.src ? p.ajax ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(yb, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), p.buildFragment = function (a, c, d) {
        var f, g, h, i = a[0];
        return c = c || e, c = (c[0] || c).ownerDocument || c[0] || c, typeof c.createDocumentFragment == "undefined" && (c = e), a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !tb.test(i) && (p.support.checkClone || !wb.test(i)) && (p.support.html5Clone || !ub.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
            fragment: f,
            cacheable: g
        }
    }, p.fragments = {}, p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        p.fn[a] = function (c) {
            var d, e = 0,
                f = [],
                g = p(c),
                h = g.length,
                i = this.length === 1 && this[0].parentNode;
            if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
            for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }), p.extend({
        clone: function (a, b, c) {
            var d, e, f, g;
            p.support.html5Clone || p.isXMLDoc(a) || !ub.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (Bb.innerHTML = a.outerHTML, Bb.removeChild(g = Bb.firstChild));
            if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                Eb(a, g), d = Fb(a), e = Fb(g);
                for (f = 0; d[f]; ++f) e[f] && Eb(d[f], e[f])
            }
            if (b) {
                Db(a, g);
                if (c) {
                    d = Fb(a), e = Fb(g);
                    for (f = 0; d[f]; ++f) Db(d[f], e[f])
                }
            }
            return d = e = null, g
        },
        clean: function (a, b, c, d) {
            var f, g, h, i, j, k, l, m, n, o, q, r, s = 0,
                t = [];
            if (!b || typeof b.createDocumentFragment == "undefined") b = e;
            for (g = b === e && Ab;
            (h = a[s]) != null; s++) {
                typeof h == "number" && (h += "");
                if (!h) continue;
                if (typeof h == "string") if (!rb.test(h)) h = b.createTextNode(h);
                else {
                    g = g || kb(b), l = l || g.appendChild(b.createElement("div")), h = h.replace(ob, "<$1></$2>"), i = (pb.exec(h) || ["", ""])[1].toLowerCase(), j = zb[i] || zb._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                    while (k--) l = l.lastChild;
                    if (!p.support.tbody) {
                        m = qb.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                        for (f = n.length - 1; f >= 0; --f) p.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
                    }!p.support.leadingWhitespace && nb.test(h) && l.insertBefore(b.createTextNode(nb.exec(h)[0]), l.firstChild), h = l.childNodes, l = g.lastChild
                }
                h.nodeType ? t.push(h) : t = p.merge(t, h)
            }
            l && (g.removeChild(l), h = l = g = null);
            if (!p.support.appendChecked) for (s = 0;
            (h = t[s]) != null; s++) p.nodeName(h, "input") ? Gb(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), Gb);
            if (c) {
                q = function (a) {
                    if (!a.type || xb.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                };
                for (s = 0;
                (h = t[s]) != null; s++) if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [s + 1, 0].concat(r)), s += r.length)
            }
            return t
        },
        cleanData: function (a, b) {
            var c, d, e, f, g = 0,
                h = p.expando,
                i = p.cache,
                j = p.support.deleteExpando,
                k = p.event.special;
            for (;
            (e = a[g]) != null; g++) if (b || p.acceptData(e)) {
                d = e[h], c = d && i[d];
                if (c) {
                    if (c.events) for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                    i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                }
            }
        }
    }),
    function () {
        var a, b;
        p.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.webkit && (b.safari = !0), p.browser = b, p.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }
            p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, e) {
                return e && e instanceof p && !(e instanceof a) && (e = a(e)), p.fn.init.call(this, d, e, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(e);
            return a
        }
    }();
    var Hb, Ib, Jb, Kb = /alpha\([^)]*\)/i,
        Lb = /opacity=([^)]*)/,
        Mb = /^(top|right|bottom|left)$/,
        Nb = /^margin/,
        Ob = new RegExp("^(" + q + ")(.*)$", "i"),
        Pb = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        Qb = new RegExp("^([-+])=(" + q + ")", "i"),
        Rb = {}, Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tb = {
            letterSpacing: 0,
            fontWeight: 400,
            lineHeight: 1
        }, Ub = ["Top", "Right", "Bottom", "Left"],
        Vb = ["Webkit", "O", "Moz", "ms"],
        Wb = p.fn.toggle;
    p.fn.extend({
        css: function (a, c) {
            return p.access(this, function (a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function () {
            return Zb(this, !0)
        },
        hide: function () {
            return Zb(this)
        },
        toggle: function (a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? Wb.apply(this, arguments) : this.each(function () {
                (c ? a : Yb(this)) ? p(this).show() : p(this).hide()
            })
        }
    }), p.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Hb(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var f, g, h, i = p.camelCase(c),
                j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = Xb(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
            g = typeof d, g === "string" && (f = Qb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
            if (d == null || g === "number" && isNaN(d)) return;
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
                j[c] = d
            } catch (k) {}
        },
        css: function (a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = Xb(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = Hb(a, c)), f === "normal" && c in Tb && (f = Tb[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function (a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? Hb = function (a, b) {
        var c, d, e, f, g = getComputedStyle(a, null),
            h = a.style;
        return g && (c = g[b], c === "" && !p.contains(a.ownerDocument.documentElement, a) && (c = p.style(a, b)), Pb.test(c) && Nb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = c, c = g.width, h.width = d, h.minWidth = e, h.maxWidth = f)), c
    } : e.documentElement.currentStyle && (Hb = function (a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return e == null && f && f[b] && (e = f[b]), Pb.test(e) && !Mb.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
    }), p.each(["height", "width"], function (a, b) {
        p.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 || Hb(a, "display") !== "none" ? ac(a, b, d) : p.swap(a, Sb, function () {
                    return ac(a, b, d)
                })
            },
            set: function (a, c, d) {
                return $b(a, c, d ? _b(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    }), p.support.opacity || (p.cssHooks.opacity = {
        get: function (a, b) {
            return Lb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(Kb, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = Kb.test(f) ? f.replace(Kb, e) : f + " " + e
        }
    }), p(function () {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {
            get: function (a, b) {
                return p.swap(a, {
                    display: "inline-block"
                }, function () {
                    if (b) return Hb(a, "marginRight")
                })
            }
        }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function (a, b) {
            p.cssHooks[b] = {
                get: function (a, c) {
                    if (c) {
                        var d = Hb(a, b);
                        return Pb.test(d) ? p(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), p.expr && p.expr.filters && (p.expr.filters.hidden = function (a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || Hb(a, "display")) === "none"
    }, p.expr.filters.visible = function (a) {
        return !p.expr.filters.hidden(a)
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        p.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + Ub[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, Nb.test(a) || (p.cssHooks[a + b].set = $b)
    });
    var cc = /%20/g,
        dc = /\[\]$/,
        ec = /\r?\n/g,
        fc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        gc = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function () {
            return p.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? p.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || gc.test(this.nodeName) || fc.test(this.type))
            }).map(function (a, b) {
                var c = p(this).val();
                return c == null ? null : p.isArray(c) ? p.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(ec, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ec, "\r\n")
                }
            }).get()
        }
    }), p.param = function (a, c) {
        var d, e = [],
            f = function (a, b) {
                b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function () {
            f(this.name, this.value)
        });
        else for (d in a) hc(d, a[d], c, f);
        return e.join("&").replace(cc, "+")
    };
    var ic, jc, kc = /#.*$/,
        lc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        mc = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        nc = /^(?:GET|HEAD)$/,
        oc = /^\/\//,
        pc = /\?/,
        qc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        rc = /([?&])_=[^&]*/,
        sc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        tc = p.fn.load,
        uc = {}, vc = {}, wc = ["*/"] + ["*"];
    try {
        ic = f.href
    } catch (xc) {
        ic = e.createElement("a"), ic.href = "", ic = ic.href
    }
    jc = sc.exec(ic.toLowerCase()) || [], p.fn.load = function (a, c, d) {
        if (typeof a != "string" && tc) return tc.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (f = "POST"), p.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function (a) {
            g = arguments, h.html(e ? p("<div>").append(a.replace(qc, "")).find(e) : a)
        }), this
    }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        p.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), p.each(["get", "post"], function (a, c) {
        p[c] = function (a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), p.extend({
        getScript: function (a, c) {
            return p.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return p.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? Ac(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), Ac(a, b), a
        },
        ajaxSettings: {
            url: ic,
            isLocal: mc.test(jc[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": wc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: yc(uc),
        ajaxTransport: yc(vc),
        ajax: function (a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2) return;
                v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = Bc(l, x, f));
                if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = Cc(l, u), y = k.state, s = k.data, t = k.error, k = !t);
                else {
                    t = y;
                    if (!y || a) y = "error", a < 0 && (a = 0)
                }
                x.status = a, x.statusText = "" + (c || y), k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
                m = l.context || l,
                n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                o = p.Deferred(),
                q = p.Callbacks("once memory"),
                r = l.statusCode || {}, t = {}, u = {}, v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = u[c] = u[c] || a, t[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return v === 2 ? e : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (v === 2) {
                            if (!f) {
                                f = {};
                                while (c = lc.exec(e)) f[c[1].toLowerCase()] = c[2]
                            }
                            c = f[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        return v || (l.mimeType = a), this
                    },
                    abort: function (a) {
                        return a = a || w, g && g.abort(a), y(0, a), this
                    }
                };
            o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function (a) {
                if (a) {
                    var b;
                    if (v < 2) for (b in a) r[b] = [r[b], a[b]];
                    else b = a[x.status], x.always(b)
                }
                return this
            }, l.url = ((a || l.url) + "").replace(kc, "").replace(oc, jc[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = sc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] == jc[1] && i[2] == jc[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (jc[3] || (jc[1] === "http:" ? 80 : 443)))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), zc(uc, l, c, x);
            if (v === 2) return x;
            j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !nc.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) {
                l.data && (l.url += (pc.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                if (l.cache === !1) {
                    var z = p.now(),
                        A = l.url.replace(rc, "$1_=" + z);
                    l.url = A + (A === l.url ? (pc.test(l.url) ? "&" : "?") + "_=" + z : "")
                }
            }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                w = "abort";
                for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[k](l[k]);
                g = zc(vc, l, c, x);
                if (!g) y(-1, "No Transport");
                else {
                    x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                        x.abort("timeout")
                    }, l.timeout));
                    try {
                        v = 1, g.send(t, y)
                    } catch (B) {
                        if (!(v < 2)) throw B;
                        y(-1, B)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Dc = [],
        Ec = /\?/,
        Fc = /(=)\?(?=&|$)|\?\?/,
        Gc = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Dc.pop() || p.expando + "_" + Gc++;
            return this[a] = !0, a
        }
    }), p.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && Fc.test(j),
            m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Fc.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Fc, "$1" + f) : m ? c.data = i.replace(Fc, "$1" + f) : k && (c.url += (Ec.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || p.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Dc.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
        }), "script"
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                return p.globalEval(a), a
            }
        }
    }), p.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), p.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function (f, g) {
                    c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Hc, Ic = a.ActiveXObject ? function () {
            for (var a in Hc) Hc[a](0, 1)
        } : !1,
        Jc = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && Kc() || Lc()
    } : Kc,
    function (a) {
        p.extend(p.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function (c) {
        if (!c.crossDomain || p.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || i.readyState === 4)) {
                                d = b, g && (i.onreadystatechange = p.noop, Ic && delete Hc[g]);
                                if (e) i.readyState !== 4 && i.abort();
                                else {
                                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (a) {}
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                }
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++Jc, Ic && (Hc || (Hc = {}, p(a).unload(Ic)), Hc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var Mc, Nc, Oc = /^(?:toggle|show|hide)$/,
        Pc = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
        Qc = /queueHooks$/,
        Rc = [Xc],
        Sc = {
            "*": [function (a, b) {
                var c, d, e, f = this.createTween(a, b),
                    g = Pc.exec(b),
                    h = f.cur(),
                    i = +h || 0,
                    j = 1;
                if (g) {
                    c = +g[2], d = g[3] || (p.cssNumber[a] ? "" : "px");
                    if (d !== "px" && i) {
                        i = p.css(f.elem, a, !0) || c || 1;
                        do e = j = j || ".5", i /= j, p.style(f.elem, a, i + d), j = f.cur() / h;
                        while (j !== 1 && j !== e)
                    }
                    f.unit = d, f.start = i, f.end = g[1] ? i + (g[1] + 1) * c : c
                }
                return f
            }]
        };
    p.Animation = p.extend(Vc, {
        tweener: function (a, b) {
            p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
                e = a.length;
            for (; d < e; d++) c = a[d], Sc[c] = Sc[c] || [], Sc[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? Rc.unshift(a) : Rc.push(a)
        }
    }), p.Tween = Yc, Yc.prototype = {
        constructor: Yc,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Yc.propHooks[this.prop];
            return a && a.get ? a.get(this) : Yc.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Yc.propHooks[this.prop];
            return this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration), this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Yc.propHooks._default.set(this), this
        }
    }, Yc.prototype.init.prototype = Yc.prototype, Yc.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return a.elem[a.prop] == null || !! a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            },
            set: function (a) {
                p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Yc.propHooks.scrollTop = Yc.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, p.each(["toggle", "show", "hide"], function (a, b) {
        var c = p.fn[b];
        p.fn[b] = function (d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(Zc(b, !0), d, e, f)
        }
    }), p.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(Yb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = p.isEmptyObject(a),
                f = p.speed(b, c, d),
                g = function () {
                    var b = Vc(this, p.extend({}, a), f);
                    e && b.stop(!0)
                };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    c = a != null && a + "queueHooks",
                    f = p.timers,
                    g = p._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && Qc.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && p.dequeue(this, a)
            })
        }
    }), p.each({
        slideDown: Zc("show"),
        slideUp: Zc("hide"),
        slideToggle: Zc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        p.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), p.speed = function (a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {
            complete: c || !c && b || p.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !p.isFunction(b) && b
        };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        return d.old = d.complete, d.complete = function () {
            p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, p.timers = [], p.fx = Yc.prototype.init, p.fx.tick = function () {
        var a, b = p.timers,
            c = 0;
        for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || p.fx.stop()
    }, p.fx.timer = function (a) {
        a() && p.timers.push(a) && !Nc && (Nc = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.interval = 13, p.fx.stop = function () {
        clearInterval(Nc), Nc = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function (a) {
        return p.grep(p.timers, function (b) {
            return a === b.elem
        }).length
    });
    var $c = /^(?:body|html)$/i;
    p.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            p.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j, k, l, m = this[0],
            n = m && m.ownerDocument;
        if (!n) return;
        return (e = n.body) === m ? p.offset.bodyOffset(m) : (d = n.documentElement, p.contains(d, m) ? (c = m.getBoundingClientRect(), f = _c(n), g = d.clientTop || e.clientTop || 0, h = d.clientLeft || e.clientLeft || 0, i = f.pageYOffset || d.scrollTop, j = f.pageXOffset || d.scrollLeft, k = c.top + i - g, l = c.left + j - h, {
            top: k,
            left: l
        }) : {
            top: 0,
            left: 0
        })
    }, p.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a),
                f = e.offset(),
                g = p.css(a, "top"),
                h = p.css(a, "left"),
                i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                j = {}, k = {}, l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
        }
    }, p.fn.extend({
        position: function () {
            if (!this[0]) return;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = $c.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || e.body;
                while (a && !$c.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
                return a || e.body
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function (e) {
            return p.access(this, function (a, e, f) {
                var g = _c(a);
                if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }), p.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        p.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function (d, e) {
            p.fn[e] = function (e, f) {
                var g = arguments.length && (d || typeof e != "boolean"),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function (c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }, c, g ? e : b, g)
            }
        })
    }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return p
    })
})(window),
function () {
    $.fn.fire = function (a) {
        var b, c, d, e, f, g, h, i;
        if (b = arguments[1]) $.isPlainObject(b) ? f = b : $.isArray(b) ? c = b : $.isFunction(b) && (d = b);
        if (b = arguments[2]) $.isArray(b) ? c = b : $.isFunction(b) && (d = b);
        (b = arguments[3]) && $.isFunction(b) && (d = b), e = this[0], f == null && (f = {}), (h = f.cancelable) == null && (f.cancelable = !! d), (i = f.bubbles) == null && (f.bubbles = !0), c == null && (c = []), g = function () {
            var b;
            return b = $.Event(a, f), $.event.trigger(b, c, e, !b.bubbles), d && !b.isDefaultPrevented() && d.call(e, b), b
        };
        if (!f.async) return g();
        delete f.async, setTimeout(g, 0)
    }
}.call(this),
function () {
    var a, b, c;
    $.fn.simulateClick = function () {
        var a, b, c;
        for (b = 0, c = this.length; b < c; b++) a = this[b], $.event.simulateClick(a);
        return this
    }, a = navigator.userAgent.match(/Macintosh/) ? "metaKey" : "ctrlKey", $.event.simulateClick = function (d, e) {
        var f;
        return f = c(e), $.extend(f, {
            currentTarget: null,
            target: d,
            srcElement: d,
            toElement: d,
            fromElement: null
        }), $.event.trigger(f, [], d, !f.bubbles), f.isDefaultPrevented() || b(d, f[a]), e && (e.result = f.result, f.isDefaultPrevented() && e.preventDefault(), f.isPropagationStopped() && e.stopPropagation()), f.result
    }, c = function (a) {
        var b, c, d, e;
        (a != null ? a.originalEvent : void 0) ? b = $.event.fix(a.originalEvent) : a ? b = $.extend(new $.Event, a) : b = $.Event("click"), (c = b.type) == null && (b.type = "click"), (d = b.bubbles) == null && (b.bubbles = !0), (e = b.cancelable) == null && (b.cancelable = !0);
        if (b.type !== "click") throw "only 'click' events can be simulated";
        return b.isSimulated = !0, b.result = null, b
    }, b = function (a, b) {
        var c, d;
        switch (a.nodeName.toUpperCase()) {
        case "A":
            b ? (window.open(a.href, "_blank"), window.focus()) : window.location.href = a.href;
            break;
        case "INPUT":
        case "TEXTAREA":
            a.focus();
            break;
        case "LABEL":
            c = (d = a.control) != null ? d : a.ownerDocument.getElementById(a.getAttribute("for")), c.focus()
        }
    }
}.call(this),
function () {
    var a, b, c, d;
    c = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        91: "meta",
        93: "meta",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scroll",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, d = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"'
    }, a = function (a) {
        var b, e, f;
        return b = c[a.which], e = "", a.ctrlKey && b !== "ctrl" && (e += "ctrl+"), a.altKey && b !== "alt" && (e += "alt+"), a.metaKey && !a.ctrlKey && b !== "meta" && (e += "meta+"), a.shiftKey ? (f = d[a.which]) ? "" + e + f : b === "shift" ? "" + e + "shift" : b ? "" + e + "shift+" + b : null : b ? "" + e + b : null
    }, b = function (b) {
        var c;
        return (c = b.hotkey) == null && (b.hotkey = a(b)), b.handleObj.handler.apply(this, arguments)
    }, $.event.special.keydown = {
        handle: b
    }, $.event.special.keyup = {
        handle: b
    }
}.call(this),
function () {
    $.pageUpdate = function (a) {
        return $(document).pageUpdate(a)
    }, $.fn.pageUpdate = function (a) {
        return a ? (this.on("pageUpdate", function (b) {
            return a.apply(b.target, arguments)
        }), this) : this.trigger("pageUpdate")
    }, $(document).ready(function () {
        return $(document.body).pageUpdate()
    }), $(document).on("pjax:complete", function (a) {
        return $(a.target).pageUpdate()
    })
}.call(this),
function () {
    var a, b;
    a = {}, $(document).on("keydown", function (b) {
        var c;
        if ($(b.target).is(":input")) return;
        if (c = a[b.hotkey]) $(c).fire("hotkey:activate", {
            originalEvent: b
        }, function () {
            $(this).simulateClick()
        }), b.preventDefault()
    }), $.pageUpdate(b = function () {
        var b, c, d, e, f;
        a = {}, f = $("[data-hotkey]");
        for (d = 0, e = f.length; d < e; d++) b = f[d], c = $(b).attr("data-hotkey"), a[c] = b
    })
}.call(this),
function () {
    var a;
    a = {}, $(document).bind("keydown", function (b) {
        var c;
        if ($(b.target).is(":input")) return;
        if (c = a[b.hotkey]) return c.apply(this, arguments)
    }), $.hotkeys = function (a) {
        var b, c;
        for (b in a) c = a[b], $.hotkey(b, c);
        return this
    }, $.hotkey = function (b, c) {
        return a[b] = c, this
    }
}.call(this),
function (a) {
    function b(a, b) {
        return typeof a == "function" ? a.call(b) : a
    }
    function c(a) {
        while (a = a.parentNode) if (a == document) return !0;
        return !1
    }
    function d(b, c) {
        this.$element = a(b), this.options = c, this.enabled = !0, this.fixTitle()
    }
    d.prototype = {
        show: function () {
            var c = this.getTitle();
            if (c && this.enabled) {
                var d = this.tip();
                d.find(".tipsy-inner")[this.options.html ? "html" : "text"](c), d[0].className = "tipsy", d.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var e = a.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }),
                    f = d[0].offsetWidth,
                    g = d[0].offsetHeight,
                    h = b(this.options.gravity, this.$element[0]),
                    i;
                switch (h.charAt(0)) {
                case "n":
                    i = {
                        top: e.top + e.height + this.options.offset,
                        left: e.left + e.width / 2 - f / 2
                    };
                    break;
                case "s":
                    i = {
                        top: e.top - g - this.options.offset,
                        left: e.left + e.width / 2 - f / 2
                    };
                    break;
                case "e":
                    i = {
                        top: e.top + e.height / 2 - g / 2,
                        left: e.left - f - this.options.offset
                    };
                    break;
                case "w":
                    i = {
                        top: e.top + e.height / 2 - g / 2,
                        left: e.left + e.width + this.options.offset
                    }
                }
                h.length == 2 && (h.charAt(1) == "w" ? i.left = e.left + e.width / 2 - 15 : i.left = e.left + e.width / 2 - f + 15), d.css(i).addClass("tipsy-" + h), d.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + h.charAt(0), this.options.className && d.addClass(b(this.options.className, this.$element[0])), this.options.fade ? d.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : d.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function () {
            this.options.fade ? this.tip().stop().fadeOut(function () {
                a(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function () {
            var a = this.$element;
            (a.attr("title") || typeof a.attr("original-title") != "string") && a.attr("original-title", a.attr("title") || "").removeAttr("title")
        },
        getTitle: function () {
            var a, b = this.$element,
                c = this.options;
            this.fixTitle();
            var a, c = this.options;
            return typeof c.title == "string" ? a = b.attr(c.title == "title" ? "original-title" : c.title) : typeof c.title == "function" && (a = c.title.call(b[0])), a = ("" + a).replace(/(^\s*|\s*$)/, ""), a || c.fallback
        },
        tip: function () {
            return this.$tip || (this.$tip = a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    }, a.fn.tipsy = function (b) {
        function e(c) {
            var e = a.data(c, "tipsy");
            return e || (e = new d(c, a.fn.tipsy.elementOptions(c, b)), a.data(c, "tipsy", e)), e
        }
        function f() {
            var a = e(this);
            a.hoverState = "in", b.delayIn == 0 ? a.show() : (a.fixTitle(), setTimeout(function () {
                a.hoverState == "in" && a.show()
            }, b.delayIn))
        }
        function g() {
            var a = e(this);
            a.hoverState = "out", b.delayOut == 0 ? a.hide() : setTimeout(function () {
                a.hoverState == "out" && a.hide()
            }, b.delayOut)
        }
        if (b === !0) return this.data("tipsy");
        if (typeof b == "string") {
            var c = this.data("tipsy");
            return c && c[b](), this
        }
        b = a.extend({}, a.fn.tipsy.defaults, b), b.live || this.each(function () {
            e(this)
        });
        if (b.trigger != "manual") {
            var h = b.live ? "live" : "bind",
                i = b.trigger == "hover" ? "mouseenter" : "focus",
                j = b.trigger == "hover" ? "mouseleave" : "blur";
            this[h](i, f)[h](j, g)
        }
        return this
    }, a.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    }, a.fn.tipsy.revalidate = function () {
        a(".tipsy").each(function () {
            var b = a.data(this, "tipsy-pointee");
            (!b || !c(b)) && a(this).remove()
        })
    }, a.fn.tipsy.elementOptions = function (b, c) {
        return a.metadata ? a.extend({}, c, a(b).metadata()) : c
    }, a.fn.tipsy.autoNS = function () {
        return a(this).offset().top > a(document).scrollTop() + a(window).height() / 2 ? "s" : "n"
    }, a.fn.tipsy.autoWE = function () {
        return a(this).offset().left > a(document).scrollLeft() + a(window).width() / 2 ? "e" : "w"
    }, a.fn.tipsy.autoBounds = function (b, c) {
        return function () {
            var d = {
                ns: c[0],
                ew: c.length > 1 ? c[1] : !1
            }, e = a(document).scrollTop() + b,
                f = a(document).scrollLeft() + b,
                g = a(this);
            return g.offset().top < e && (d.ns = "n"), g.offset().left < f && (d.ew = "w"), a(window).width() + a(document).scrollLeft() - g.offset().left < b && (d.ew = "e"), a(window).height() + a(document).scrollTop() - g.offset().top < b && (d.ns = "s"), d.ns + (d.ew ? d.ew : "")
        }
    }
}(jQuery),
function () {
    var a, b, c;
    b = function () {
        function a(a) {
            this.namespace = a, this.stats = [], this.flushTimer = null
        }
        return a.prototype.increment = function (a, b) {
            return b == null && (b = 1), this.namespace && (a = "" + this.namespace + "." + a), this.stats.push({
                metric: a,
                type: "increment",
                count: b
            }), this.queueFlush()
        }, a.prototype.timing = function (a, b) {
            if (b < 0) return;
            return this.namespace && (a = "" + this.namespace + "." + a), this.stats.push({
                metric: a,
                type: "timing",
                ms: b
            }), this.queueFlush()
        }, a.prototype.gauge = function (a, b) {
            return this.namespace && (a = "" + this.namespace + "." + a), this.stats.push({
                metric: a,
                type: "gauge",
                value: b
            }), this.queueFlush()
        }, a.prototype.queueFlush = function () {
            var a = this;
            return this.flushTimer && clearTimeout(this.flushTimer), this.flushTimer = setTimeout(function () {
                return a.flush()
            }, 2e3)
        }, a.prototype.flush = function () {
            var a, b;
            a = $(document.body);
            if (this.stats.length && a.hasClass("env-production") && !a.hasClass("enterprise")) return b = this.stats, this.stats = [], $.ajax({
                url: "/_stats",
                type: "POST",
                data: JSON.stringify(b),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        }, a
    }(), a = new b("github.browser"), typeof window != "undefined" && window !== null && (window.$stats = a);
    if (typeof $ == "undefined" || $ === null) return;
    window.performance || (c = "onpagehide" in window ? "pagehide" : "unload", $(window).on(c, function () {
        window.name = JSON.stringify((new Date).getTime())
    })), $(function () {
        var b, c;
        if (window.performance) return b = window.performance.timing, b.navigationStart && a.timing("performance.navigation", (new Date).getTime() - b.navigationStart), b.secureConnectionStart && b.connectStart && a.timing("performance.ssl", b.secureConnectionStart - b.connectStart), b.connectEnd && b.connectStart && (b.secureConnectionStart ? a.timing("performance.tcp", b.connectEnd - b.secureConnectionStart) : a.timing("performance.tcp", b.connectEnd - b.connectStart)), b.domainLookupStart !== b.domainLookupEnd && a.timing("performance.dns", b.domainLookupEnd - b.domainLookupStart), b.requestStart && b.responseStart && b.responseEnd && (a.timing("performance.request", b.responseStart - b.requestStart), a.timing("performance.response", b.responseEnd - b.responseStart)), $(window).bind("load", function () {
            b.domContentLoadedEventEnd && b.domLoading && a.timing("performance.DOMContentLoaded", b.domContentLoadedEventEnd - b.domLoading), b.domComplete && b.domLoading && a.timing("performance.load", b.domComplete - b.domLoading);
            if (b.domInteractive && b.domLoading) return a.timing("performance.interactive", b.domInteractive - b.domLoading)
        });
        if (window.name && window.name.match(/^\d+$/)) {
            try {
                c = JSON.parse(window.name), a.timing("pageload", (new Date).getTime() - c)
            } catch (d) {}
            return window.name = ""
        }
    })
}.call(this),
function () {
    $(document).on("focusin", "#command-bar", function () {
        var a;
        return a = $(this), a.data("command-bar-installed") ? a.closest(".topsearch").addClass("command-bar-focus") : (a.commandBar().data("command-bar-installed", !0), setTimeout(function () {
            return a.focus()
        }, 20))
    }), $(document).on("focusout", "#command-bar", function () {
        return $(this).closest(".topsearch").removeClass("command-bar-focus")
    }), $(document).on("keyup", function (a) {
        if (a.hotkey === "ctrl+/" || a.hotkey === "s" && !$(a.target).is(":input")) return $("#command-bar").focus()
    }), $(document).on("mousedown", ".commandbar .display", function () {
        return !1
    }), $(document).on("mousedown", ".command-bar-focus #advanced_search", function () {
        return !1
    }), $(document).on("click", ".command_bar_form .help", function () {
        var a;
        return a = $("#command-bar").focus(), $(".tipsy").hide(), setTimeout(function () {
            return a.val("help"), a.trigger("execute.commandbar")
        }, 250), !1
    }), $(document).ready(function () {
        return $(".launch #command-bar").focus()
    })
}.call(this),
function () {
    var a, b, c, d = [].slice,
        e = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
    b = function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, c = function (a) {
        return a.replace(/^\s+/g, "")
    }, a = function () {
        function a(a) {
            this.defaultContext = a, this.callbacks = {}
        }
        return a.prototype.bind = function (a, b) {
            var c, d, e, f, g;
            g = a.split(" ");
            for (e = 0, f = g.length; e < f; e++) c = g[e], (d = this.callbacks)[c] || (d[c] = []), this.callbacks[c].push(b);
            return this
        }, a.prototype.trigger = function () {
            var a, b, c, e, f, g;
            e = arguments[0], a = 2 <= arguments.length ? d.call(arguments, 1) : [], c = this.callbacks[e];
            if (!c) return !0;
            for (f = 0, g = c.length; f < g; f++) {
                b = c[f];
                if (b.apply(this.context, a) === !1) return !1
            }
            return !0
        }, a.prototype.unbind = function (a, b) {
            var c, d, e, f, g;
            if (a) if (b) {
                c = this.callbacks[a];
                for (e = f = 0, g = c.length; f < g; e = ++f) {
                    d = c[e];
                    if (d !== b) continue;
                    c.splice(e, 1);
                    break
                }
            } else delete this.callbacks[a];
            else this.callbacks = {};
            return this
        }, a.prototype.execute = function (a) {
            return (new this.defaultContext(this, a)).fullMatch().execute()
        }, a.prototype.suggestions = function (a) {
            return (new this.defaultContext(this, a)).partialMatch().suggestions()
        }, a.prototype.complete = function (b, c) {
            var d;
            return d = (new this.defaultContext(this, b)).partialMatch(), a.Store.set("" + d.constructor.name + ":" + b, c), d.complete(c)
        }, a
    }(), a.Store = function () {
        function b() {}
        var a;
        return a = function () {
            try {
                return "localStorage" in window && window.localStorage !== null
            } catch (a) {
                return !1
            }
        }, b.set = function (b, c) {
            if (!a()) return;
            try {
                return localStorage.setItem(b, JSON.stringify(c)), c
            } catch (d) {
                return !1
            }
        }, b.get = function (b) {
            return a() ? this.parse(localStorage[b]) : null
        }, b.parse = function (a) {
            try {
                return JSON.parse(a)
            } catch (b) {
                return a
            }
        }, b.expire = function (b) {
            var c;
            if (!a()) return;
            return c = localStorage[b], localStorage.removeItem(b), c
        }, b
    }(), a.RemoteProxy = function () {
        function b() {}
        return b.caches = a.Store.get("commandbar.caches") || {}, b.requests = {}, b.get = function (b, c, d) {
            var e, f, g = this;
            return this.commandBar = d, (f = c.cache_for) == null && (c.cache_for = 36e5), e = (new Date).getTime() - c.cache_for, this.shouldLoad = function (a) {
                return this.isCached(a) ? this.caches[a].requested < e ? !0 : !1 : !0
            }, this.shouldLoad(b) ? (this.isLoading(b) || (this.requests[b] = $.ajax({
                url: b,
                dataType: c.dataType || "json",
                success: function (d) {
                    return g.caches[b] = {
                        response: c.process(d),
                        requested: (new Date).getTime()
                    }, a.Store.set("commandbar.caches", g.caches)
                },
                error: function (a, c, d) {
                    return g.caches[b] = {
                        response: [],
                        requested: (new Date).getTime()
                    }
                },
                complete: function () {
                    var a;
                    return delete g.requests[b], (a = g.commandBar) != null ? a.trigger("suggest.commandbar") : void 0
                }
            })), this.isCached(b) ? this.caches[b].response : [{
                command: "",
                description: c.loadingMessage,
                type: "loading"
            }]) : this.caches[b].response
        }, b.isLoading = function (a) {
            return this.requests[a] != null
        }, b.isCached = function (a) {
            return this.caches[a] != null
        }, b
    }(), a.Timer = function () {
        function a() {
            this.time = (new Date).getTime(), this
        }
        return a.prototype.diff = function () {
            var a, b;
            return b = (new Date).getTime(), a = b - this.time, this.time = b, a
        }, a
    }(), a.History = function () {
        function f() {}
        var c, d, e;
        return e = [], d = function () {
            return a.Store.set("commandbar.history", e.slice(0, 50).join("\n"))
        }, c = function (a) {
            var c, d, f, g;
            d = [];
            for (f = 0, g = e.length; f < g; f++) c = e[f], b(c) !== b(a) && d.push(c);
            return e = d
        }, f.load = function () {
            var b;
            return b = a.Store.get("commandbar.history"), e = b != null ? b.split("\n") : []
        }, f.add = function (a) {
            return c(a), e.unshift(a), d()
        }, f.get = function (a) {
            return e[a]
        }, f.exists = function (a) {
            return e[a] != null
        }, f
    }.call(this), a.History.load(), a.Context = function () {
        function d(a, b, c) {
            this.commandBar = a, this.text = b, this.parent = c, this.lazyLoad = e(this.lazyLoad, this), this.suggestionCollection = e(this.suggestionCollection, this), this.matches = this.text.match(this.constructor.regex), this.remainder = this.matches ? this.text.replace(this.matches[0], "") : this.text
        }
        return d.contexts = [], d.register = function (a) {
            return this.contexts.push(a)
        }, d.regex = /(?:)/i, d.matches = function (a) {
            return !!a.match(this.regex)
        }, d.help = function () {
            return {}
        }, d.prototype.suffix = function () {
            return " "
        }, d.prototype.suggestionOptions = function () {
            return []
        }, d.prototype.suggestionCollection = function () {
            var b, c, d, e, f;
            c = [], f = this.constructor.contexts;
            for (d = 0, e = f.length; d < e; d++) b = f[d], c = c.concat((new b(this.commandBar, this.remainder, this)).suggestionOptions());
            return new a.SuggestionCollection(c)
        }, d.prototype.suggestions = function () {
            return this.suggestionCollection().filter(this.remainder, this)
        }, d.prototype.fullMatch = function (a) {
            var c, d, e, f, g, h, i;
            a == null && (a = this.remainder), this.parent === void 0 && (d = this);
            if (b(a) === "") f = this;
            else {
                i = this.constructor.contexts;
                for (g = 0, h = i.length; g < h; g++) {
                    c = i[g];
                    if (c.matches(a)) {
                        e = (new c(this.commandBar, a, this)).fullMatch();
                        if (e) return e
                    }
                }
            }
            return f || d
        }, d.prototype.partialMatch = function () {
            var a, b, d, e, f, g, h;
            b = this;
            if (this.remainder.length) {
                h = this.constructor.contexts;
                for (f = 0, g = h.length; f < g; f++) {
                    a = h[f];
                    if (a.matches(this.remainder)) {
                        d = (new a(this.commandBar, c(this.remainder), this)).partialMatch();
                        if (d) return d
                    }
                }
            } else e = this.parent;
            return e || b
        }, d.prototype.description = function () {
            return "Execute `" + this.command() + "`"
        }, d.prototype.command = function () {
            return this.parent ? b("" + this.parent.command() + " " + this.matches[0]) : ""
        }, d.prototype.complete = function (a) {
            var b;
            return b = this.fullMatch(a), (b != null ? b.command() : void 0) + b.suffix()
        }, d.prototype.lazyLoad = function (b, c) {
            return a.RemoteProxy.get(b, c, this.commandBar)
        }, d.prototype.loading = function (a) {
            return this.commandBar.trigger("loading.commandbar", a)
        }, d.prototype.success = function (a) {
            return this.commandBar.trigger("success.commandbar", a)
        }, d.prototype.error = function (a) {
            return this.commandBar.trigger("error.commandbar", a)
        }, d.prototype.message = function (a) {
            return this.commandBar.trigger("message.commandbar", a)
        }, d.prototype.goToUrl = function (b) {
            var c;
            if (!a.ctrlKey && !a.metaKey) return window.location = b;
            c = window.open(b, (new Date).getTime());
            if (c !== window) return this.success("Opened in a new window")
        }, d.prototype.post = function (a) {
            return a = $.extend(a, {
                type: "POST"
            }), $.ajax(a)
        }, d.prototype.execute = function () {}, d
    }(), a.SuggestionCollection = function () {
        function h(a) {
            this.suggestions = a
        }
        var c, d, e, f, g;
        return h.prototype.filter = function (a, b) {
            var h;
            return h = d(this.suggestions), h = c(h, a, b), h = f(h), h = g(h), h = e(h), h
        }, d = function (a) {
            return a = a.map(function (a) {
                return {
                    command: a.command || "",
                    description: a.description || "",
                    type: a.type || "choice",
                    multiplier: a.multiplier || 1,
                    filter: a.filter === !1 ? !1 : !0
                }
            })
        }, c = function (c, d, e) {
            return d = b(d), c = c.map(function (b) {
                var c;
                return b.filter === !1 ? b.score = 1 : b.type !== "loading" ? (c = a.Store.get("" + e.constructor.name + ":" + d), c === b.command ? b.score = 1.99 : (b.score = d ? fuzzyScore(b.command, d) : 1, b.score *= b.multiplier)) : b.score = 2, b
            }), c
        }, f = function (a) {
            var b;
            return a = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = a.length; c < d; c++) b = a[c], b.score && e.push(b);
                return e
            }()
        }, g = function (a) {
            return a.sort(function (a, b) {
                return b.score - a.score
            })
        }, e = function (a) {
            return a.map(function (a) {
                return delete a.score, a
            })
        }, h
    }(), CommandBar = a
}.call(this),
function () {
    CommandBar.Context.prototype.execute = function () {
        return this.loading("Searching for `" + this.text + "`"), this.goToUrl("/search?utf8=?&q=" + this.text + "&type=Everything&repo=&langOverride=&start_value=1")
    }
}.call(this),
function () {
    var a, b = {}.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.contexts = [], b.regex = /(help|\?)/i, b.prototype.suggestionOptions = function () {
            return [{
                command: "help",
                description: "Show available commands"
            }]
        }, b.prototype.description = function () {
            return "Show available commands"
        }, b.prototype.helpMessagesFor = function (a) {
            var b, c, d, e, f, g;
            e = this, d = [];
            for (f = 0, g = a.length; f < g; f++) b = a[f], c = b.help(), c.constructor === Array ? d = d.concat(c) : (b.contexts.length && (c.children = e.helpMessagesFor(b.contexts)), d.push(c));
            return d
        }, b.prototype.formatCommands = function (a) {
            var b;
            return b = "<table>", b += this.messageRows(a), b += "</table>", b
        }, b.prototype.messageRows = function (a, b) {
            var c, d, e, f;
            d = "", b || (b = ""), a = a.sort(function (a, b) {
                return a.command > b.command ? 1 : -1
            });
            for (e = 0, f = a.length; e < f; e++) c = a[e], d += this.messageRow(c, b), c.children && (d += this.messageRows(c.children, "" + b + c.command + " "));
            return d
        }, b.prototype.messageRow = function (a, b) {
            var c;
            return c = "", a.description ? (c += "<tr><td class=command>", c += "" + b + "<strong>" + a.command + "</strong>", c += "</td><td><span>" + a.description + "</span></td></tr>") : ""
        }, b.prototype.execute = function () {
            var a;
            return a = [], a = a.concat(this.helpMessagesFor(this.commandBar.defaultContext.contexts)), this.message(this.formatCommands(a))
        }, b
    }(CommandBar.Context), CommandBar.Context.register(a)
}.call(this),
function () {
    var a, b, c, d, e = {}.hasOwnProperty,
        f = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) e.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return f(b, a), b.contexts = [], b.regex = /my/i, b.help = function () {
            return {
                command: "my"
            }
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "my",
                description: "Dashboard, settings, and more"
            }]
        }, b.prototype.description = function () {
            return "View my dashboard"
        }, b.prototype.helpText = function () {
            return {
                command: "my",
                description: "View your dashboard, settings, and notifications"
            }
        }, b.prototype.execute = function () {
            return this.loading("Loading your dashboard"), this.goToUrl("https://github.com/")
        }, b
    }(CommandBar.Context), b = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return f(b, a), b.contexts = [], b.regex = /dashboard/i, b.help = function () {
            return {
                command: "dashboard",
                description: "Go to my dashboard"
            }
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "dashboard",
                description: "View my dashboard"
            }]
        }, b.prototype.description = function () {
            return "View my dashboard"
        }, b.prototype.execute = function () {
            return this.loading("Loading your dashboard"), this.goToUrl("https://github.com/")
        }, b
    }(CommandBar.Context), d = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return f(b, a), b.contexts = [], b.regex = /settings|profile/i, b.help = function () {
            return {
                command: "profile",
                description: "View or edit my profile"
            }
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "profile",
                description: "View or edit my account"
            }]
        }, b.prototype.description = function () {
            return "View or edit my account"
        }, b.prototype.execute = function () {
            return this.loading("Loading your settings"), this.goToUrl("https://github.com/settings/profile")
        }, b
    }(CommandBar.Context), c = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return f(b, a), b.contexts = [], b.regex = /notifications/i, b.help = function () {
            return {
                command: "notifications",
                description: "View my notifications"
            }
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "notifications",
                description: "View all my notifications"
            }]
        }, b.prototype.description = function () {
            return "View all my notifications"
        }, b.prototype.execute = function () {
            return this.loading("Loading your notifications"), this.goToUrl("https://github.com/notifications")
        }, b
    }(CommandBar.Context), CommandBar.Context.register(a), a.register(b), a.register(d), a.register(c)
}.call(this),
function () {
    var a, b, c, d, e, f, g, h, i, j = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, k = {}.hasOwnProperty,
        l = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) k.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    b = function (a) {
        function b() {
            return this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /^([\w\._-]+\/[\w\._-]+)/i, b.help = function () {
            return {
                command: "user/repo",
                description: "View a repository"
            }
        }, b.prototype.repo = function () {
            if (this.matches) return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            var a, b, c;
            a = this.lazyLoad("https://github.com/command_bar/repos", {
                loadingMessage: "Loading your repos",
                process: function (a) {
                    return a.repositories
                }
            });
            if (c = this.text.match(/([\w-_]+)\//i)) b = c[1], a = this.lazyLoad("https://github.com/command_bar/repos_for/" + b, {
                loadingMessage: "Loading repos for " + b,
                process: function (a) {
                    return a.repositories
                }
            });
            return a
        }, b.prototype.description = function () {
            return "Go to " + this.repo()
        }, b.prototype.helpText = function () {
            return {
                command: "user/repo",
                description: "View user/repo, manage issues, etc."
            }
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.repo()), this.goToUrl("/" + this.repo())
        }, b
    }(CommandBar.Context), c = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /issues/i, b.help = function () {
            return {
                command: "issues",
                description: "List issues for a repository"
            }
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "issues",
                description: "List, show, and create issues"
            }]
        }, b.prototype.description = function () {
            return "View issues for " + this.repo()
        }, b.prototype.helpText = function () {
            return {
                command: "" + this.repo() + " issues",
                description: "List issues, show a specific issue, new issue"
            }
        }, b.prototype.execute = function () {
            return this.loading("Loading issues for " + this.repo()), this.goToUrl("/" + this.repo() + "/issues")
        }, b
    }(CommandBar.Context), a = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.branch = j(this.branch, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /(?:@|branch)([\w-_\/]+)?/i, b.help = function () {
            return {
                command: "@branchname",
                description: "View a branch in a repository"
            }
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.branch = function () {
            if (this.matches) return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return this.text.match(/@/i) ? this.lazyLoad("https://github.com/command_bar/" + this.repo() + "/branches", {
                loadingMessage: "Loading branches for " + this.repo(),
                process: function (a) {
                    return a.branches
                }
            }) : [{
                command: "@",
                description: "Show a specific branch"
            }]
        }, b.prototype.description = function () {
            return "Show branch `" + this.branch() + "` for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.repo() + "@" + this.branch()), this.goToUrl("/" + this.repo() + "/tree/" + this.branch())
        }, b
    }(CommandBar.Context), g = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.section = j(this.section, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /(wiki|graphs|network|admin)/i, b.help = function () {
            return (new this(this.commandBar, "")).suggestionOptions()
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.section = function () {
            if (this.matches) return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "wiki",
                description: "Pull up the wiki"
            }, {
                command: "graphs",
                description: "All the Graphs!"
            }, {
                command: "network",
                description: "See the network"
            }, {
                command: "admin",
                description: "Manage this repo"
            }]
        }, b.prototype.description = function () {
            return "View the " + this.section() + " for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.section() + " for " + this.repo()), this.goToUrl("/" + this.repo() + "/" + this.section())
        }, b
    }(CommandBar.Context), e = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /pull(?:s|-requests)/i, b.help = function () {
            return {
                command: "pulls",
                description: "View pull requests"
            }
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "pulls",
                description: "Show open pull requests"
            }]
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.description = function () {
            return "Show pull requests for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading pulls for " + this.repo()), this.goToUrl("/" + this.repo() + "/pulls")
        }, b
    }(CommandBar.Context), h = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.issue = j(this.issue, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /\#\s?(\d+)?/i, b.help = function () {
            return {
                command: "#123",
                description: "View a specific issue"
            }
        }, b.prototype.suffix = function () {
            return ""
        }, b.prototype.suggestionOptions = function () {
            return this.text.match(/#/i) ? this.lazyLoad("https://github.com/command_bar/" + this.repo() + "/issues", {
                loadingMessage: "Loading open issues for " + this.repo(),
                process: function (a) {
                    return a.issues
                }
            }) : [{
                command: "#",
                description: "Show a specific issue by number"
            }]
        }, b.prototype.issue = function () {
            return this.matches ? this.matches[1] : ""
        }, b.prototype.description = function () {
            return "Show issue #" + this.issue() + " for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading issue #" + this.issue() + " for " + this.repo()), this.goToUrl("/" + this.repo() + "/issues/" + this.issue())
        }, b
    }(c), f = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.term = j(this.term, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /#((?:\s+)?(?:[0-9]+)?[a-zA-Z][\w\s0-9]*)/i, b.help = function () {
            return {
                command: "#search term",
                description: "Search for an issue"
            }
        }, b.timeout = null, b.previous_term = null, b.last_suggested = null, b.search_delay = 700, b.prototype.suffix = function () {
            return ""
        }, b.prototype.suggestionOptions = function () {
            var a, b, c;
            return c = this.term(), b = this.constructor.previous_term, clearTimeout(this.constructor.timeout), this.constructor.previous_term = c, c.match(/\w/i) && c.length > 2 ? c === b && this.searchDelayPassed() ? this.lazyLoad("https://github.com/command_bar/" + this.repo() + "/issues_search?q=" + this.term(), {
                loadingMessage: "Searching issues for " + this.repo(),
                process: function (a) {
                    return a.issues
                }
            }) : (this.constructor.last_suggested = (new Date).getTime(), a = this.commandBar, this.constructor.timeout = setTimeout(function () {
                return a.trigger("suggest.commandbar")
            }, this.constructor.search_delay), []) : []
        }, b.prototype.searchDelayPassed = function () {
            return (new Date).getTime() - this.constructor.last_suggested >= this.constructor.search_delay
        }, b.prototype.term = function () {
            return this.matches ? this.matches[1] : ""
        }, b.prototype.description = function () {
            return "Search issues for `" + this.term() + "` on " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Searching for issues matching `" + this.term() + "` on " + this.repo()), this.goToUrl("/" + this.repo() + "/issues/search?q=" + this.term())
        }, b
    }(c), d = function (a) {
        function b() {
            return this.execute = j(this.execute, this), b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /new/i, b.help = function () {
            return {
                command: "new",
                description: "Create a new issue"
            }
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "new",
                description: "Create new issue"
            }]
        }, b.prototype.description = function () {
            return "Create a new issue for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading new issue form for " + this.repo()), this.goToUrl("/" + this.repo() + "/issues/new")
        }, b
    }(c), i = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a), b.contexts = [], b.regex = /(watch|unwatch)/i, b.help = function () {
            return [{
                command: "watch",
                description: "Watch a repo"
            }, {
                command: "unwatch",
                description: "Unwatch a repo"
            }]
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.action = function () {
            if (this.matches) return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "watch",
                description: "Watch " + this.repo()
            }, {
                command: "unwatch",
                description: "Unwatch " + this.repo()
            }]
        }, b.prototype.description = function () {
            return "Watch or unwatch " + this.repo()
        }, b.prototype.execute = function () {
            var a = this;
            return this.loading("Requesting to " + this.action() + " " + this.repo()), this.post({
                url: "https://github.com/command_bar/" + this.repo() + "/" + this.action(),
                success: function () {
                    return a.action() === "watch" ? a.success("You are now watching " + a.repo()) : a.success("You are no longer watching " + a.repo())
                },
                error: function () {
                    return a.error("Could not " + a.action() + " " + a.repo())
                }
            })
        }, b
    }(CommandBar.Context), CommandBar.Context.register(b), b.register(f), b.register(c), c.register(h), c.register(d), b.register(h), b.register(e), b.register(a), b.register(g), b.register(i)
}.call(this),
function () {
    var a, b, c = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, d = {}.hasOwnProperty,
        e = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var c in b) d.call(b, c) && (a[c] = b[c]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        };
    b = function (a) {
        function b() {
            return this.suffix = c(this.suffix, this), this.user = c(this.user, this), b.__super__.constructor.apply(this, arguments)
        }
        return e(b, a), b.contexts = [], b.regex = /@([A-Za-z0-9-_]+)\/?/i, b.help = function () {
            return {
                command: "@user",
                description: "View a user&rsquo;s profile"
            }
        }, b.matches = function (a) {
            var b;
            return b = a.match(this.regex), !! b && !b[0].match(/\/$/)
        }, b.prototype.user = function () {
            if (this.matches) return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return this.lazyLoad("https://github.com/command_bar/users", {
                loadingMessage: "Loading users",
                process: function (a) {
                    return a.users
                }
            })
        }, b.prototype.suffix = function () {
            return ""
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.user() + "'s profile"), this.goToUrl("/" + this.user())
        }, b
    }(CommandBar.Context), a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return e(b, a), b.contexts = [], b.regex = /(follow|unfollow)/i, b.help = function () {
            return [{
                command: "follow",
                description: "Follow a user"
            }, {
                command: "unfollow",
                description: "Unfollow a user"
            }]
        }, b.prototype.user = function () {
            return this.parent.user()
        }, b.prototype.action = function () {
            if (this.matches) return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return [{
                command: "follow",
                description: "Follow " + this.user()
            }, {
                command: "unfollow",
                description: "Unfollow " + this.user()
            }]
        }, b.prototype.description = function () {
            return "Follow or unfollow " + this.user()
        }, b.prototype.execute = function () {
            var a = this;
            return this.loading("Requesting to " + this.action() + " " + this.user()), this.post({
                url: "https://github.com/command_bar/" + this.user() + "/" + this.action(),
                success: function () {
                    return a.action() === "follow" ? a.success("You are now following " + a.user()) : a.success("You are no longer following " + a.user())
                },
                error: function () {
                    return a.error("Could not " + a.action() + " " + a.user())
                }
            })
        }, b
    }(CommandBar.Context), CommandBar.Context.register(b), b.register(a)
}.call(this),
function () {
    window.stringDistance = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m;
        j = [a, b].sort(function (a, b) {
            return b.length - a.length
        }), a = j[0], b = j[1], d = a.length, i = b.length, h = [], h[0] = [];
        for (e = k = 0; 0 <= i ? k <= i : k >= i; e = 0 <= i ? ++k : --k) h[0][e] = e;
        for (f = l = 1; 1 <= d ? l <= d : l >= d; f = 1 <= d ? ++l : --l) {
            h[f] = [], h[f][0] = f;
            for (g = m = 1; 1 <= i ? m <= i : m >= i; g = 1 <= i ? ++m : --m) c = a.charAt(f - 1) === b.charAt(g - 1) ? 0 : 1, h[f][g] = Math.min(h[f - 1][g] + 1, h[f][g - 1] + 1, h[f - 1][g - 1] + c)
        }
        return h[d][i]
    }, window.fuzzyScore = function (a, b) {
        var c, d, e, f, g;
        a = a.toLowerCase(), b = b.toLowerCase(), f = new RegExp("(" + b.split("").join(".*?") + ")", "g"), g = 0;
        if (e = a.match(f)) c = stringDistance(a, b), c === 0 ? g = 1 : (g = .4 * (1 / e[0].length), g += .1 * (1 / a.length), d = a.indexOf(b), d >= 0 && (g += .5 * (1 / (d + 1))), g += 1 - g - (1 - g) * (1 / e.length));
        return g
    }
}.call(this),
function () {
    var a, b, c;
    a = jQuery, b = {
        ENTER: 13,
        TAB: 9,
        UP: 38,
        DOWN: 40,
        N: 78,
        P: 80,
        CTRL: 17,
        ESC: 27
    }, c = {
        init: function (c) {
            var d;
            return d = {
                classname: "commandbar",
                debug: 1,
                context: CommandBar.Context
            }, d = a.extend(d, c), this.each(function () {
                var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
                return h = new CommandBar(d.context), f = a(this), f.attr("autocomplete", "off"), f.attr("spellcheck", "false"), f.wrap('<div class="' + d.classname + '" />'), e = f.closest("." + d.classname), g = a('<span class="message" />').prependTo(e), c = a('<div class="display hidden" />').appendTo(e), n = null, j = 0, f.bind("execute.commandbar", function () {
                    return k()
                }), h.bind("suggest.commandbar", function () {
                    return f.trigger("suggest.commandbar")
                }), h.bind("loading.commandbar", function (a) {
                    return t(a, "loading")
                }), h.bind("message.commandbar", function (a) {
                    return q(a)
                }), h.bind("success.commandbar", function (a) {
                    return t("&#x2714; " + a, "success", !0)
                }), h.bind("error.commandbar", function (a) {
                    return t("&#x2716; " + a, "error", !0)
                }), t = function (a, b, c) {
                    g.html(a).show().addClass("visible"), g.removeClass("loading error success").addClass(b);
                    if (c) return l()
                }, l = function () {
                    return setTimeout(function () {
                        return g.removeClass("visible")
                    }, 5e3)
                }, m = function () {
                    return g.hide().removeClass("visible loading error success")
                }, r = function () {
                    var a, b, d;
                    a = c.find(".selected"), d = function () {
                        return a.position().top < 0
                    }, b = function () {
                        return a.position().top + a.outerHeight() > c.height()
                    }, d() && c.scrollTop(c.scrollTop() + a.position().top);
                    if (b()) return c.scrollTop(c.scrollTop() + a.position().top + a.outerHeight() - c.height())
                }, o = function () {
                    var a;
                    c.find(".selected").removeClass("selected");
                    if (j === -1) return f.val(f.data("val")), c.removeClass("hidden"), j++;
                    if (j >= 0) return a = c.find(".choice:nth-child(" + (j + 1) + ")").addClass("selected"), a.length ? (r(), f.val(h.complete(f.data("val"), a.data("command"))), j++) : c.find(".choice:nth-child(" + j + ")").addClass("selected");
                    if (CommandBar.History.exists(-j - 2)) return f.val(CommandBar.History.get(-j - 2)), j++
                }, p = function () {
                    var a;
                    c.find(".selected").removeClass("selected");
                    if (j === 1) return f.val(f.data("val")), j--;
                    if (j > 1) return a = c.find(".choice:nth-child(" + (j - 1) + ")"), a.addClass("selected"), r(), a.length && f.val(h.complete(f.data("val"), a.data("command"))), j--;
                    if (CommandBar.History.exists(-j)) return c.addClass("hidden"), f.val(CommandBar.History.get(-j)), j--
                }, i = function (b) {
                    var d, e;
                    b.length || (b = c.find(".choice:first"));
                    if (!b.length) return;
                    return n != null && clearTimeout(n), e = f.data("val"), d = a(b).data("command"), f.val(h.complete(e, d)), f.focus().keyup()
                }, q = function (a) {
                    return c.html(a).show().removeClass("hidden")
                }, k = function () {
                    return c.html(""), CommandBar.History.add(f.val()), h.execute(f.val()), f.val(""), s()
                }, g.click(function () {
                    return m(), f.focus(), !1
                }), f.focus(function () {
                    return clearTimeout(n), e.addClass("focused"), a(this).keyup()
                }), f.blur(function () {
                    return n = setTimeout(function () {
                        return e.removeClass("focused"), c.addClass("hidden")
                    }, 200)
                }), f.bind("suggest.commandbar", function () {
                    var b, d, e, f, g, i;
                    j = 0, f = a(this).val(), c.html("");
                    if (f !== "") {
                        e = h.suggestions(f);
                        for (g = 0, i = e.length; g < i; g++) d = e[g], b = a("<div class=" + d.type + "></div>").attr("data-command", d.command), d.command && a("<span class=command />").text(d.command).appendTo(b), d.description && a("<span class=description />").text(d.description).appendTo(b), b.appendTo(c)
                    }
                    return s()
                }), s = function () {
                    return c.is(":empty") ? c.hide().addClass("hidden") : c.show().removeClass("hidden")
                }, f.keyup(function (a) {
                    switch (a.which) {
                    case b.N:
                    case b.P:
                        return a.ctrlKey ? !1 : f.trigger("suggest.commandbar");
                    case b.ENTER:
                    case b.TAB:
                    case b.CTRL:
                    case b.DOWN:
                    case b.UP:
                    case b:
                        return !1;
                    case b.ESC:
                        return f.val() === "" ? f.blur() : f.val("");
                    default:
                        return f.val() !== "" && m(), f.data("val", f.val()), f.trigger("suggest.commandbar")
                    }
                }), f.keydown(function (a) {
                    CommandBar.ctrlKey = a.ctrlKey, CommandBar.metaKey = a.metaKey, CommandBar.shiftKey = a.shiftKey;
                    switch (a.which) {
                    case b.DOWN:
                        return o();
                    case b.UP:
                        return p(), a.preventDefault(), !1;
                    case b.P:
                        if (a.ctrlKey) return p();
                        break;
                    case b.N:
                        if (a.ctrlKey) return o();
                        break;
                    case b.ENTER:
                        return k(), !1;
                    case b.TAB:
                        if (f.val() !== "") return i(c.find(".selected")), !1
                    }
                }), f.closest("form").submit(function () {
                    try {
                        k()
                    } catch (a) {
                        console.log && console.log(a)
                    }
                    return !1
                }), c.on("click", "div.choice", function () {
                    return i(a(this)), !1
                })
            })
        }
    }, a.fn.commandBar = function (b) {
        return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : typeof b == "object" || !b ? c.init.apply(this, arguments) : a.error("Method " + b + " does not exists on jQuery.commandBar")
    }
}.call(this),
function () {
    var a = this;
    $(document).ajaxSend(function (a, b, c) {
        var d;
        return d = $("meta[name='csrf-token']").attr("content"), b.setRequestHeader("X-CSRF-Token", d)
    }), $(document).ready(function () {
        return $(".tooltipped").each(function () {
            return $(this).tipsy({
                gravity: "n"
            })
        })
    }), CommandBar.RemoteProxy.get("https://github.com/command_bar/repos", {
        process: function (a) {
            return a.repositories
        }
    }), CommandBar.RemoteProxy.get("https://github.com/command_bar/users", {
        process: function (a) {
            return a.users
        }
    })
}.call(this),
function () {
    window.GitHub = {}
}.call(this);

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    if (text.length > 0) {
        var suggestions = new CommandBar(CommandBar.Context).suggestions(text);
		var result = [];
		for (s in suggestions) {
			var description = suggestions[s].description;
			var command = suggestions[s].command;
			result.push({
				description: command + ' <dim>' + description + '</dim>',
				content: command
			});
		}
		suggest(result);
	}
  });

chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.update(tab.id, {url : 'https://github.com/' + text});
    });
});