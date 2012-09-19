(function () {
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
}.call(this));

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
	// for now just go to the user profile
	if (text.substring(0, 1) == "@")
		text = text.substring(1);
	
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.update(tab.id, {url : 'https://github.com/' + text});
    });
});