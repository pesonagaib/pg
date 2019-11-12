function insertAfter(e, t) {
    var n = t.parentNode;
    n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling)
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = me.type(e);
        return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return me.isFunction(t) ? me.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? me.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? me.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : Ae.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return me.each(e.match(Le) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && me.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && me.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), me.ready()
    }

    function d() {
        this.expando = me.expando + d.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Re.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = p(n)
                } catch (i) {}
                Ie.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return me.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            c = (me.cssNumber[t] || "px" !== u && +l) && $e.exec(me.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, me.style(e, t, c + u); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }

    function g(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Ue[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = me.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ue[r] = i, i)
    }

    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; a > o; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Oe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ze(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", Oe.set(r, "display", n)));
        for (o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? me.merge([e], n) : n
    }

    function b(e, t) {
        for (var n = 0, r = e.length; r > n; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
    }

    function x(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; h > p; p++)
            if (o = e[p], o || 0 === o)
                if ("object" === me.type(o)) me.merge(d, o.nodeType ? [o] : o);
                else if (Ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Ve.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[s] || Ge._default, a.innerHTML = l[1] + me.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            me.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && me.inArray(o, r) > -1) i && i.push(o);
            else if (u = me.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), u && b(a), n)
            for (c = 0; o = a[c++];) Qe.test(o.type || "") && n.push(o);
        return f
    }

    function w() {
        return !0
    }

    function T() {
        return !1
    }

    function C() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function k(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) k(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = T;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return me().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = me.guid++)), e.each(function() {
            me.event.add(this, t, i, r, n)
        })
    }

    function A(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e
    }

    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function N(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Oe.hasData(e) && (o = Oe.access(e), a = Oe.set(t, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; r > n; n++) me.event.add(t, i, u[i][n])
            }
            Ie.hasData(e) && (s = Ie.access(e), l = me.extend({}, s), Ie.set(t, l))
        }
    }

    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function D(e, t, r, i) {
        t = oe.apply([], t);
        var o, a, s, l, u, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            m = me.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !pe.checkClone && rt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), D(o, t, r, i)
        });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = me.map(y(o, "script"), E), l = s.length; d > f; f++) u = o, f !== p && (u = me.clone(u, !0, !0), l && me.merge(s, y(u, "script"))), r.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, me.map(s, S), f = 0; l > f; f++) u = s[f], Qe.test(u.type || "") && !Oe.access(u, "globalEval") && me.contains(c, u) && (u.src ? me._evalUrl && me._evalUrl(u.src) : n(u.textContent.replace(ot, ""), c))
        }
        return e
    }

    function L(e, t, n) {
        for (var r, i = t ? me.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || me.cleanData(y(r)), r.parentNode && (n && me.contains(r.ownerDocument, r) && b(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function q(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || lt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || me.contains(e.ownerDocument, e) || (a = me.style(e, t)), !pe.pixelMarginRight() && st.test(a) && at.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function H(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function P(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
            if (e = pt[n] + t, e in ht) return e
    }

    function F(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = P(e) || e), t
    }

    function O(e, t, n) {
        var r = $e.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function I(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; 4 > o; o += 2) "margin" === n && (a += me.css(e, n + We[o], !0, i)), r ? ("content" === n && (a -= me.css(e, "padding" + We[o], !0, i)), "margin" !== n && (a -= me.css(e, "border" + We[o] + "Width", !0, i))) : (a += me.css(e, "padding" + We[o], !0, i), "padding" !== n && (a += me.css(e, "border" + We[o] + "Width", !0, i)));
        return a
    }

    function R(e, t, n) {
        var r, i = lt(e),
            o = q(e, t, i),
            a = "border-box" === me.css(e, "boxSizing", !1, i);
        return st.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), o = parseFloat(o) || 0, o + I(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i)
    }

    function B() {
        gt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, me.fx.interval), me.fx.tick())
    }

    function $() {
        return e.setTimeout(function() {
            mt = void 0
        }), mt = me.now()
    }

    function W(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = We[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function z(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function _(e, t, n) {
        var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            m = e.nodeType && ze(e),
            g = Oe.get(e, "fxshow");
        n.queue || (a = me._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, me.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], vt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    m = !0
                }
                p[r] = g && g[r] || me.style(e, r)
            }
        if (l = !me.isEmptyObject(t), l || !me.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = g && g.display, null == u && (u = Oe.get(e, "display")), c = me.css(e, "display"), "none" === c && (u ? c = u : (v([e], !0), u = e.style.display || u, c = me.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === me.css(e, "float") && (l || (d.done(function() {
                h.display = u
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (r in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Oe.access(e, "fxshow", {
                display: u
            }), o && (g.hidden = !m), m && v([e], !0), d.done(function() {
                m || v([e]), Oe.remove(e, "fxshow");
                for (r in p) me.style(e, r, p[r])
            })), l = z(m ? g[r] : 0, r, d), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function U(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = me.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = me.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function X(e, t, n) {
        var r, i, o = 0,
            a = X.prefilters.length,
            s = me.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = mt || $(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (l || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: me.extend({}, t),
                opts: me.extend(!0, {
                    specialEasing: {},
                    easing: me.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mt || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = me.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (U(c, u.opts.specialEasing); a > o; o++)
            if (r = X.prefilters[o].call(u, e, c, u.opts)) return me.isFunction(r.stop) && (me._queueHooks(u.elem, u.opts.queue).stop = me.proxy(r.stop, r)), r;
        return me.map(c, z, u), me.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), me.fx.timer(me.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function V(e) {
        var t = e.match(Le) || [];
        return t.join(" ")
    }

    function Q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t)) me.each(t, function(t, i) {
            n || Nt.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== me.type(t)) r(e, t);
        else
            for (i in t) G(e + "[" + i + "]", t[i], n, r)
    }

    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Le) || [];
            if (me.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function J(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, me.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === Bt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function K(e, t) {
        var n, r, i = me.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && me.extend(!0, e, r), e
    }

    function Z(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function ee(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        re = Object.getPrototypeOf,
        ie = te.slice,
        oe = te.concat,
        ae = te.push,
        se = te.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        fe = ce.toString,
        de = fe.call(Object),
        pe = {},
        he = "3.2.1",
        me = function(e, t) {
            return new me.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function(e, t) {
            return t.toUpperCase()
        };
    me.fn = me.prototype = {
        jquery: he,
        constructor: me,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return me.each(this, e)
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: te.sort,
        splice: te.splice
    }, me.extend = me.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || me.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (u && r && (me.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, a[t] = me.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, me.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = me.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = re(e)) && (n = ce.call(t, "constructor") && t.constructor, "function" != typeof n || fe.call(n) !== de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ye, be)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++);
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, a = 0,
                s = [];
            if (r(e))
                for (i = e.length; i > a; a++) o = t(e[a], a, n), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, n), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e) ? (r = ie.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(ie.call(arguments)))
            }, i.guid = e.guid = e.guid || me.guid++, i) : void 0
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== H && q(t), t = t || H, F)) {
                if (11 !== h && (l = ve.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                    }
                if (T.qsa && !X[e + " "] && (!O || !O.test(e))) {
                    if (1 !== h) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = B), u = E(e), o = u.length; o--;) u[o] = "#" + s + " " + p(u[o]);
                        c = u.join(","), d = ye.test(e) && f(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, d.querySelectorAll(c)), n
                    } catch (m) {} finally {
                        s === B && t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = z++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u, c, f, d = [W, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[B] || (t[B] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === W && u[1] === s) return d[2] = u[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[B] && (i = y(i)), o && !o[B] && (o = y(o, a)), r(function(r, a, s, l) {
                var u, c, f, d = [],
                    p = [],
                    h = a.length,
                    m = r || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? m : v(m, d, e, s, l),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = v(b, p), i(u, [], s, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (u = o ? ee(r, f) : d[c]) > -1 && (r[u] = !(a[u] = f))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
            })
        }

        function b(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                    return e === t
                }, a, !0), u = h(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = C.relative[e[s].type]) c = [h(m(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                        return y(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && b(e.slice(s, r)), i > r && b(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, f, d, p = 0,
                        h = "0",
                        m = r && [],
                        g = [],
                        y = j,
                        b = r || o && C.find.TAG("*", u),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (j = a === H || a || u); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === H || (q(c), s = !F); d = e[f++];)
                                if (d(c, a || H, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (W = x)
                        }
                        i && ((c = !d && c) && p--, r && m.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(m, g, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = Y.call(l));
                            g = v(g)
                        }
                        K.apply(l, g), u && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = x, j = y), m
                };
            return i ? r(a) : a
        }
        var w, T, C, k, A, E, S, N, j, D, L, q, H, P, F, O, I, R, M, B = "sizzle" + 1 * new Date,
            $ = e.document,
            W = 0,
            z = 0,
            _ = n(),
            U = n(),
            X = n(),
            V = function(e, t) {
                return e === t && (L = !0), 0
            },
            Q = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            de = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) {
                return t ? "\x00" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                q()
            },
            ke = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (Ae) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, q = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, P = H.documentElement, F = !A(H), $ !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = i(function(e) {
                return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ge.test(H.getElementsByClassName), T.getById = i(function(e) {
                return P.appendChild(e).id = B, !H.getElementsByName || !H.getElementsByName(B).length
            }), T.getById ? (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = T.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && F ? t.getElementsByClassName(e) : void 0
            }, I = [], O = [], (T.qsa = ge.test(H.querySelectorAll)) && (i(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || O.push(".#.+[+~]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (T.matchesSelector = ge.test(R = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(e) {
                T.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), I.push("!=", oe)
            }), O = O.length && new RegExp(O.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(P.compareDocumentPosition), M = t || ge.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === $ && M($, e) ? -1 : t === H || t.ownerDocument === $ && M($, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return L = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === $ ? -1 : l[r] === $ ? 1 : 0
            }, H) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && q(e), n = n.replace(ce, "='$1']"), T.matchesSelector && F && !X[n + " "] && (!I || !I.test(n)) && (!O || !O.test(n))) try {
                var r = R.call(e, n);
                if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && q(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && q(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== r ? r : T.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(we, Te)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (L = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(V), L) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += k(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (d = g, f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], b = p && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [W, p, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, b]), d !== t)););
                            return b -= i, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(se, "$1"));
                    return i[B] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, xe),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = l(w);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = C.preFilter; s;) {
                r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) !(i = pe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = b(t[n]), o[B] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e,
                c = !r && E(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && F && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (r = l(a.matches[0].replace(be, xe), ye.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, r), n;
                        break
                    }
            }
            return (u || S(e, c))(r, t, !F, n, !t || ye.test(e) && f(t.parentNode) || t), n
        }, T.sortStable = B.split("").sort(V).join("") === B, T.detectDuplicates = !!L, q(), T.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    me.find = xe, me.expr = xe.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = xe.uniqueSort, me.text = xe.getText, me.isXMLDoc = xe.isXML, me.contains = xe.contains, me.escapeSelector = xe.escape;
    var we = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && me(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        Te = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = me.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ae = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? me.find.matchesSelector(r, e) ? [r] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, me.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (me.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; r > t; t++) me.find(e, i[t], n);
            return r > 1 ? me.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Ce.test(e) ? me(e) : e || [], !1).length
        }
    });
    var Ee, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ne = me.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Ee, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), ke.test(r[1]) && me.isPlainObject(t))
                        for (r in t) me.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = ne.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
        };
    Ne.prototype = me.fn, Ee = me(ne);
    var je = /^(?:parents|prev(?:Until|All))/,
        De = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (me.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && me(e);
            if (!Ce.test(e))
                for (; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(me(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), me.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Te((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Te(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), me.merge([], e.childNodes))
        }
    }, function(e, t) {
        me.fn[e] = function(n, r) {
            var i = me.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = me.filter(r, i)), this.length > 1 && (De[e] || me.uniqueSort(i), je.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Le = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : me.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            l = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function r(t) {
                        me.each(t, function(t, n) {
                            me.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== me.type(n) && r(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return me.each(arguments, function(e, t) {
                        for (var n;
                            (n = me.inArray(t, o, n)) > -1;) o.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? me.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, me.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                    ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return me.Deferred(function(t) {
                            me.each(n, function(n, r) {
                                var i = me.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var s = this,
                                    c = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(a > t)) {
                                            if (e = r.apply(s, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, me.isFunction(f) ? i ? f.call(e, o(a, n, l, i), o(a, n, u, i)) : (a++, f.call(e, o(a, n, l, i), o(a, n, u, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                        }
                                    },
                                    d = i ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== u && (s = void 0, c = [e]), n.rejectWith(s, c))
                                        }
                                    };
                                t ? d() : (me.Deferred.getStackHook && (d.stackTrace = me.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return me.Deferred(function(e) {
                            n[0][3].add(o(0, e, me.isFunction(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, me.isFunction(t) ? t : l)), n[2][3].add(o(0, e, me.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? me.extend(e, i) : i
                    }
                },
                o = {};
            return me.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = ie.call(arguments),
                o = me.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (1 >= t && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || me.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, me.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var He = me.Deferred();
    me.fn.ready = function(e) {
        return He.then(e)["catch"](function(e) {
            me.readyException(e)
        }), this
    }, me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || He.resolveWith(ne, [me]))
        }
    }), me.ready.then = He.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Pe = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === me.type(n)) {
                i = !0;
                for (s in n) Pe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, me.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(me(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Fe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[me.camelCase(t)] = n;
            else
                for (r in t) i[me.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in r ? [t] : t.match(Le) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || me.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t)
        }
    };
    var Oe = new d,
        Ie = new d,
        Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    me.extend({
        hasData: function(e) {
            return Ie.hasData(e) || Oe.hasData(e)
        },
        data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        removeData: function(e, t) {
            Ie.remove(e, t)
        },
        _data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Oe.remove(e, t)
        }
    }), me.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Ie.get(o), 1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = me.camelCase(r.slice(5)), h(o, r, i[r])));
                    Oe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Ie.set(this, e)
            }) : Pe(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (n = Ie.get(o, e), void 0 !== n) return n;
                    if (n = h(o, e), void 0 !== n) return n
                } else this.each(function() {
                    Ie.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ie.remove(this, e)
            })
        }
    }), me.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = Oe.get(e, t), n && (!r || Array.isArray(n) ? r = Oe.access(e, t, me.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = me.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = me._queueHooks(e, t),
                a = function() {
                    me.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Oe.get(e, n) || Oe.access(e, n, {
                empty: me.Callbacks("once memory").add(function() {
                    Oe.remove(e, [t + "queue", n])
                })
            })
        }
    }), me.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                me.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = me.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Oe.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $e = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"],
        ze = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
        },
        _e = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        Ue = {};
    me.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ze(this) ? me(this).show() : me(this).hide()
            })
        }
    });
    var Xe = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ye = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Je = ne.documentElement,
        Ke = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g = Oe.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && me.find.matchesSelector(Je, i), n.guid || (n.guid = me.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                        return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Le) || [""], u = t.length; u--;) s = et.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = me.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = me.event.special[p] || {}, c = me.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && me.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), me.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g = Oe.hasData(e) && Oe.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(Le) || [""], u = t.length; u--;)
                    if (s = et.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = me.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || me.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) me.event.remove(e, p + t[u], n, r, !0);
                me.isEmptyObject(l) && Oe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = me.event.fix(e),
                l = new Array(arguments.length),
                u = (Oe.get(this, "events") || {})[s.type] || [],
                c = me.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = me.event.handlers.call(this, s, u), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((me.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                        for (o = [], a = {}, n = 0; l > n; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? me(i, this).index(u) > -1 : me.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function() {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[me.expando] ? e : new me.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== C() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === C() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && i(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, me.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t)
    }, me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, me.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, me.event.addProp), me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || me.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), me.fn.extend({
        on: function(e, t, n, r) {
            return k(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return k(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, me(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function() {
                me.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                l = me.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (a = y(s), o = y(e), r = 0, i = o.length; i > r; r++) j(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), r = 0, i = o.length; i > r; r++) N(o[r], a[r]);
                else N(e, s);
            return a = y(s, "script"), a.length > 0 && b(a, !l && y(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Fe(n)) {
                    if (t = n[Oe.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? me.event.remove(n, r) : me.removeEvent(n, r, t.handle);
                        n[Oe.expando] = void 0
                    }
                    n[Ie.expando] && (n[Ie.expando] = void 0)
                }
        }
    }), me.fn.extend({
        detach: function(e) {
            return L(this, e, !0)
        },
        remove: function(e) {
            return L(this, e)
        },
        text: function(e) {
            return Pe(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = A(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = A(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return me.clone(this, e, t)
            })
        },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Ge[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var n, r = [], i = me(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), me(i[a])[t](n), ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var at = /^margin/,
        st = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Je.removeChild(a), s = null
            }
        }
        var n, r, i, o, a = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), me.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/,
        ct = /^--/,
        ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "Moz", "ms"],
        ht = ne.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = q(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = me.camelCase(t),
                    l = ct.test(t),
                    u = e.style;
                return l || (t = F(s)), a = me.cssHooks[t] || me.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = $e.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (me.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = me.camelCase(t),
                l = ct.test(t);
            return l || (t = F(s)), a = me.cssHooks[t] || me.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = q(e, t, r)), "normal" === i && t in dt && (i = dt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? !ut.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, r) : _e(e, ft, function() {
                    return R(e, t, r)
                }) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && lt(e),
                    a = r && I(e, t, r, "border-box" === me.css(e, "boxSizing", !1, o), o);
                return a && (i = $e.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = me.css(e, t)), O(e, n, a)
            }
        }
    }), me.cssHooks.marginLeft = H(pe.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, at.test(e) || (me.cssHooks[e + t].set = O)
    }), me.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = lt(e), i = t.length; i > a; a++) o[t[a]] = me.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), me.Tween = M, M.prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (me.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, me.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, me.fx = M.prototype.init, me.fx.step = {};
    var mt, gt, vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    me.Animation = me.extend(X, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, $e.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
            },
            prefilters: [_],
            prefilter: function(e, t) {
                t ? X.prefilters.unshift(e) : X.prefilters.push(e)
            }
        }), me.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? me.extend({}, e) : {
                complete: n || !n && t || me.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !me.isFunction(t) && t
            };
            return me.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in me.fx.speeds ? r.duration = me.fx.speeds[r.duration] : r.duration = me.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                me.isFunction(r.old) && r.old.call(this), r.queue && me.dequeue(this, r.queue)
            }, r
        }, me.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ze).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = me.isEmptyObject(e),
                    o = me.speed(t, n, r),
                    a = function() {
                        var t = X(this, me.extend({}, e), o);
                        (i || Oe.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = me.timers,
                        a = Oe.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || me.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Oe.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = me.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, me.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), me.each(["toggle", "show", "hide"], function(e, t) {
            var n = me.fn[t];
            me.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
            }
        }), me.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            me.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), me.timers = [], me.fx.tick = function() {
            var e, t = 0,
                n = me.timers;
            for (mt = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(), mt = void 0
        }, me.fx.timer = function(e) {
            me.timers.push(e), me.fx.start()
        }, me.fx.interval = 13, me.fx.start = function() {
            gt || (gt = !0, B())
        }, me.fx.stop = function() {
            gt = null
        }, me.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, me.fn.delay = function(t, n) {
            return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var bt, xt = me.expr.attrHandle;
    me.fn.extend({
        attr: function(e, t) {
            return Pe(this, me.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e)
            })
        }
    }), me.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (i = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = me.find.attr(e, t), null == r ? void 0 : r)) : void 0
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(Le);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), bt = {
        set: function(e, t, n) {
            return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = xt[t] || me.find.attr;
        xt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = xt[a], xt[a] = i, i = null != n(e, t, r) ? a : null, xt[a] = o), i
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return Pe(this, me.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[me.propFix[e] || e]
            })
        }
    }), me.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, i = me.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), pe.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        me.propFix[this.toLowerCase()] = this
    }), me.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).addClass(e.call(this, t, Q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++];)
                    if (i = Q(n), r = 1 === n.nodeType && " " + V(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = V(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).removeClass(e.call(this, t, Q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++];)
                    if (i = Q(n), r = 1 === n.nodeType && " " + V(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = V(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                me(this).toggleClass(e.call(this, n, Q(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = me(this), o = e.match(Le) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Q(this), t && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Oe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + V(Q(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = me.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, me(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = me.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = me.valHooks[i.type] || me.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0
        }
    }), me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : V(me.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        u = s ? a + 1 : o.length;
                    for (r = 0 > a ? u : s ? a : 0; u > r; r++)
                        if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), s) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = me.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = me.inArray(me.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), me.each(["radio", "checkbox"], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                return Array.isArray(t) ? e.checked = me.inArray(me(e).val(), t) > -1 : void 0
            }
        }, pe.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var kt = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, f, d = [r || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !kt.test(p + me.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[me.expando] ? t : new me.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : me.makeArray(n, [t]), f = me.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !me.isWindow(r)) {
                    for (l = f.delegateType || p, kt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || p, c = (Oe.get(a, "events") || {})[t.type] && Oe.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && Fe(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Fe(r) || u && me.isFunction(r[p]) && !me.isWindow(r) && (s = r[u], s && (r[u] = null), me.event.triggered = p, r[p](), me.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = me.extend(new me.Event, n, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(r, null, t)
        }
    }), me.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? me.event.trigger(e, t, n, !0) : void 0
        }
    }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e))
        };
        me.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Oe.access(r, t);
                i || r.addEventListener(e, n, !0), Oe.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Oe.access(r, t) - 1;
                i ? Oe.access(r, t, i) : (r.removeEventListener(e, n, !0), Oe.remove(r, t))
            }
        }
    });
    var At = e.location,
        Et = me.now(),
        St = /\?/;
    me.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n
    };
    var Nt = /\[\]$/,
        jt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = me.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) G(n, e[n], t, i);
        return r.join("&")
    }, me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && Lt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Xe.test(e))
            }).map(function(e, t) {
                var n = me(this).val();
                return null == n ? null : Array.isArray(n) ? me.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Ht = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Mt = {},
        Bt = {},
        $t = "*/".concat("*"),
        Wt = ne.createElement("a");
    Wt.href = At.href, me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: Ot.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, me.ajaxSettings), t) : K(me.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Mt),
        ajaxTransport: Y(Bt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, d, p, x, w, T = n;
                c || (c = !0, l && e.clearTimeout(l), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, r && (x = Z(h, C, r)), x = ee(h, x, C, u), u ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (me.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (me.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, p = x.error, u = !p)) : (p = T, !t && T || (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", u ? v.resolveWith(m, [d, T, C]) : v.rejectWith(m, [C, T, p]), C.statusCode(b), b = void 0, f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, h, u ? d : p]), y.fireWith(m, [C, T]), f && (g.trigger("ajaxComplete", [C, h]), --me.active || me.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, l, u, c, f, d, p, h = me.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                v = me.Deferred(),
                y = me.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ft.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || At.href) + "").replace(Rt, At.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Le) || [""], null == h.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                } catch (k) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), J(Mt, h, n, C), c) return C;
            f = me.event && h.global, f && 0 === me.active++ && me.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), o = h.url.replace(Ht, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (p = h.url.slice(o.length), h.data && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Pt, "$1"), p = (St.test(o) ? "&" : "?") + "_=" + Et++ + p), h.url = o + p), h.ifModified && (me.lastModified[o] && C.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && C.setRequestHeader("If-None-Match", me.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(m, C, h) === !1 || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = J(Bt, h, n, C)) {
                if (C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(x, r)
                } catch (k) {
                    if (c) throw k;
                    r(-1, k)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return me.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script")
        }
    }), me.each(["get", "post"], function(e, t) {
        me[t] = function(e, n, r, i) {
            return me.isFunction(n) && (i = i || r, r = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, me.isPlainObject(e) && e))
        }
    }), me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, me.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(n) {
                me(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                me(this).replaceWith(this.childNodes)
            }), this
        }
    }), me.expr.pseudos.hidden = function(e) {
        return !me.expr.pseudos.visible(e)
    }, me.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, me.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var zt = {
            0: 200,
            1223: 204
        },
        _t = me.ajaxSettings.xhr();
    pe.cors = !!_t && "withCredentials" in _t, pe.ajax = _t = !!_t, me.ajaxTransport(function(t) {
        var n, r;
        return pe.cors || _t && !t.crossDomain ? {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e), e
            }
        }
    }), me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = me("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ut = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || me.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), me.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + i) : t.jsonp !== !1 && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || me.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? me(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ut.push(i)), a && me.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), pe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), me.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ne.location.href, t.head.appendChild(r)) : t = ne), i = ke.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, o), o && o.length && me(o).remove(), me.merge([], i.childNodes))
    }, me.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = V(e.slice(s)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && me.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? me("<div>").append(me.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), me.expr.pseudos.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem
        }).length
    }, me.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u, c = me.css(e, "position"),
                f = me(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = me.css(e, "top"), l = me.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, me.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                me.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + me.css(e[0], "borderTopWidth", !0),
                    left: r.left + me.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - me.css(n, "marginTop", !0),
                    left: t.left - r.left - me.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function(r) {
            return Pe(this, function(e, r, i) {
                var o;
                return me.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), me.each(["top", "left"], function(e, t) {
        me.cssHooks[t] = H(pe.pixelPosition, function(e, n) {
            return n ? (n = q(e, t), st.test(n) ? me(e).position()[t] + "px" : n) : void 0
        })
    }), me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            me.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Pe(this, function(t, n, i) {
                    var o;
                    return me.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? me.css(t, n, s) : me.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), me.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), me.holdReady = function(e) {
        e ? me.readyWait++ : me.ready(!0)
    }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return me
    });
    var Vt = e.jQuery,
        Qt = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = Qt), t && e.jQuery === me && (e.jQuery = Vt), me
    }, t || (e.jQuery = e.$ = me), me
}), window.onresize = navigationResize, navigationResize(), window.onclick = function(e) {
    if (!e.target.matches(".btnmore")) {
        var t, n = document.getElementsByClassName("dropdown-content");
        for (t = 0; t < n.length; t++) {
            var r = n[t];
            r.classList.contains("show") && r.classList.remove("show")
        }
    }
}, wrap("<div style='position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:0 auto;width:100%'>", "iframe[src*='youtube.com']", "</div>");
var homePage = window.location.origin,
    numPosts = 5,
    rcp = document.createElement("script");
rcp.src = homePage + "/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=" + numPosts + "&callback=recentPosts", document.getElementsByTagName("head")[0].appendChild(rcp);
var middleads = document.getElementById("inline_wrapper"),
    target = document.getElementById("widget-middle"),
    opsi1 = target.getElementsByTagName("br");
opsi1.length > 0 && insertAfter(middleads, opsi1[2]);
var opsi2 = target.getElementsByTagName("blockquote");
opsi2.length > 0 && insertAfter(middleads, opsi2[0]);
var opsi3 = target.getElementsByTagName("h2");
opsi3.length > 0 && insertAfter(middleads, opsi3[0]),
    function(e, t, n) {
        var r, i = e.getElementsByTagName(t)[0];
        e.getElementById(n) || (r = e.createElement(t), r.id = n, r.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12", i.parentNode.insertBefore(r, i))
    }(document, "script", "facebook-jssdk"),
    function(e) {
        var t = e("a.blog-pager-newer-link"),
            n = e("a.blog-pager-older-link");
        e.get(t.attr("href"), function(n) {
            var r = 1 == e(n).find(".post-body").length ? "<img alt='" + e(n).find(".post-title").text() + "' src='" + e(n).find(".post img:first").attr("src") + "' class='pager-thumb lazyload' width='100' height='100'/>" : "";
            t.html(r + "<div><h6>Next</h6><h5>" + e(n).find(".post-title").text() + '</h5><svg class="panahkiri" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" fill="#000000"/></svg></div>')
        }, "html"), e.get(n.attr("href"), function(t) {
            var r = 1 == e(t).find(".post-body").length ? "<img alt='" + e(t).find(".post-title").text() + "' src='" + e(t).find(".post img:first").attr("src") + "' class='pager-thumb lazyload' width='100' height='100'/>" : "";
            n.html(r + "<div><h6>Previous</h6><h5>" + e(t).find(".post-title").text() + '</h5><svg class="panahkanan" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="#000000"/></svg></div>')
        }, "html")
    }(jQuery);
var randomRelatedIndex, showRelatedPost;
! function(e, t, n) {
    var r = {
        widgetTitle: "<h4>Artikel Terkait:</h4>",
        widgetStyle: 1,
        homePage: "http://www.dte.web.id",
        numPosts: 7,
        summaryLength: 370,
        titleLength: "auto",
        thumbnailSize: 200,
        noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
        containerId: "related-post",
        newTabLink: !1,
        moreText: "Baca Selengkapnya",
        callBack: function() {}
    };
    for (var i in relatedPostConfig) r[i] = "undefined" == relatedPostConfig[i] ? r[i] : relatedPostConfig[i];
    var o = function(e) {
            var r = t.createElement("script");
            r.type = "text/javascript", r.src = e, n.appendChild(r)
        },
        a = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        },
        s = function(e) {
            var t, n, r = e.length;
            if (0 === r) return !1;
            for (; --r;) t = Math.floor(Math.random() * (r + 1)), n = e[r], e[r] = e[t], e[t] = n;
            return e
        },
        l = "object" == typeof labelArray && labelArray.length > 0 ? "/-/" + s(labelArray)[0] : "",
        u = function(e) {
            var t = e.feed.openSearch$totalResults.$t - r.numPosts,
                n = a(1, t > 0 ? t : 1);
            o(r.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + l + "?alt=json-in-script&orderby=updated&start-index=" + n + "&max-results=" + r.numPosts + "&callback=showRelatedPost")
        },
        c = function(e) {
            var t, n, i, o, a, l = document.getElementById(r.containerId),
                u = s(e.feed.entry),
                c = r.widgetStyle,
                f = r.widgetTitle + '<ul class="related-post-style-' + c + '">',
                d = r.newTabLink ? ' target="_blank"' : "",
                p = '<span style="display:block;clear:both;"></span>';
            if (l) {
                for (var h = 0; h < r.numPosts && h != u.length; h++) {
                    n = u[h].title.$t, i = "auto" !== r.titleLength && r.titleLength < n.length ? n.substring(0, r.titleLength) + "&hellip;" : n, o = "media$thumbnail" in u[h] && r.thumbnailSize !== !1 ? u[h].media$thumbnail.url.replace(/.*?:\/\//g, "//").replace(/\/s[0-9]+(\-c)?/, "/s" + r.thumbnailSize + "-c") : r.noImage, a = "summary" in u[h] && r.summaryLength > 0 ? u[h].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, r.summaryLength) + "&hellip;" : "";
                    for (var m = 0, g = u[h].link.length; g > m; m++) t = "alternate" == u[h].link[m].rel ? u[h].link[m].href : "#";
                    f += 2 == c ? '<li><img alt="" class="related-post-item-thumbnail" src="' + o + '" width="' + r.thumbnailSize + '" height="' + r.thumbnailSize + '"><a class="related-post-item-title" title="' + n + '" href="' + t + '"' + d + ">" + i + '</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + a + '</span> <a href="' + t + '" class="related-post-item-more"' + d + ">" + r.moreText + "</a></span>" + p + "</li>" : 3 == c || 4 == c ? '<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="' + t + '"' + d + '><img alt="" class="related-post-item-thumbnail lazyload" src="' + o + '" width="' + r.thumbnailSize + '" height="' + r.thumbnailSize + '"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="' + n + '" href="' + t + '"' + d + ">" + i + "</a></div>" + p + "</li>" : 5 == c ? '<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="' + t + '" title="' + n + '"' + d + '><img alt="" class="related-post-item-thumbnail" src="' + o + '" width="' + r.thumbnailSize + '" height="' + r.thumbnailSize + '"><span class="related-post-item-tooltip">' + i + "</span></a>" + p + "</li>" : 6 == c ? '<li><a class="related-post-item-title" title="' + n + '" href="' + t + '"' + d + ">" + i + '</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="' + o + '" width="' + r.thumbnailSize + '" height="' + r.thumbnailSize + '"><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + a + "</span></span>" + p + "</div></li>" : '<li><a title="' + n + '" href="' + t + '"' + d + ">" + i + "</a></li>"
                }
                l.innerHTML = f += "</ul>" + p, r.callBack()
            }
        };
    randomRelatedIndex = u, showRelatedPost = c, o(r.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + l + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
}(window, document, document.getElementsByTagName("head")[0]), + function(e, t, n) {
    "use strict";
    var r = {
        calc: !1
    };
    t.fn.rrssb = function(e) {
        var r = t.extend({
            description: n,
            image: n,
            title: n,
            url: n
        }, e);
        r.title || (r.description ? r.description : "") + (r.url ? "\n\n" + r.url : "");
        for (var i in r) r.hasOwnProperty(i) && r[i] !== n && (r[i] = o(r[i]));
        r.url !== n && (t(this).find(".rrssb-facebook a").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + r.url), t(this).find(".rrssb-tumblr a").attr("href", "http://tumblr.com/share/link?url=" + r.url + (r.title !== n ? "&name=" + r.title : "") + (r.description !== n ? "&description=" + r.description : "")), t(this).find(".rrssb-linkedin a").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + r.url + (r.title !== n ? "&title=" + r.title : "") + (r.description !== n ? "&summary=" + r.description : "")), t(this).find(".rrssb-twitter a").attr("href", "https://twitter.com/intent/tweet?text=" + (r.description !== n ? r.description : "") + "%20" + r.url), t(this).find(".rrssb-googleplus a").attr("href", "https://plus.google.com/share?url=" + r.url), t(this).find(".rrssb-pinterest a").attr("href", "http://pinterest.com/pin/create/button/?url=" + r.url + (r.image !== n ? "&amp;media=" + r.image : "") + (r.description !== n ? "&description=" + r.description : "")), t(this).find(".rrssb-bbm a").attr("href", "bbmi://api/share?message=" + r.url + (r.title !== n ? "?ref=bbm&userCustomMessage=" + r.title : "")), t(this).find(".rrssb-whatsapp a").attr("href", "whatsapp://send?text=" + (r.description !== n ? r.description + "%20" : r.title !== n ? r.title + "%20" : "") + r.url)),
            t(this).find(".rrssb-line a").attr("href", "https://timeline.line.me/social-plugin/share?url=" + r.url)
    };
    var i = function() {
            var e = t("<div>"),
                n = ["calc", "-webkit-calc", "-moz-calc"];
            t("body").append(e);
            for (var i = 0; i < n.length; i++)
                if (e.css("width", n[i] + "(1px)"), 1 === e.width()) {
                    r.calc = n[i];
                    break
                }
            e.remove()
        },
        o = function(e) {
            if (e !== n && null !== e) {
                if (null === e.match(/%[0-9a-f]{2}/i)) return encodeURIComponent(e);
                e = decodeURIComponent(e), o(e)
            }
        },
        a = function() {
            t(".rrssb-buttons").each(function() {
                var e = t(this),
                    n = t("li:visible", e),
                    r = n.length,
                    i = 100 / r;
                n.css("width", i + "%").attr("data-initwidth", i)
            })
        },
        s = function() {
            t(".rrssb-buttons").each(function() {
                var e = t(this),
                    n = e.width(),
                    r = t("li", e).not(".small").eq(0).width(),
                    i = t("li.small", e).length;
                if (r > 80 && 1 > i) {
                    e.addClass("large-format");
                    var o = r / 12 + "px";
                    e.css("font-size", o)
                } else e.removeClass("large-format"), e.css("font-size", "");
                25 * i > n ? e.removeClass("small-format").addClass("tiny-format") : e.removeClass("tiny-format")
            })
        },
        l = function() {
            t(".rrssb-buttons").each(function() {
                var e = t(this),
                    n = t("li", e),
                    r = n.filter(".small"),
                    i = 0,
                    o = 0,
                    a = r.eq(0),
                    s = parseFloat(a.attr("data-size")) + 55,
                    l = r.length;
                if (l === n.length) {
                    var u = 42 * l,
                        f = e.width();
                    f > u + s && (e.removeClass("small-format"), r.eq(0).removeClass("small"), c())
                } else {
                    n.not(".small").each(function() {
                        var e = t(this),
                            n = parseFloat(e.attr("data-size")) + 55,
                            r = parseFloat(e.width());
                        i += r, o += n
                    });
                    var d = i - o;
                    d > s && (a.removeClass("small"), c())
                }
            })
        },
        u = function(e) {
            t(".rrssb-buttons").each(function() {
                var e = t(this),
                    n = t("li", e);
                t(n.get().reverse()).each(function(e, r) {
                    var i = t(this);
                    if (i.hasClass("small") === !1) {
                        var o = parseFloat(i.attr("data-size")) + 55,
                            a = parseFloat(i.width());
                        if (o > a) {
                            var s = n.not(".small").last();
                            t(s).addClass("small"), c()
                        }
                    }--r || l()
                })
            }), e === !0 && d(c)
        },
        c = function() {
            t(".rrssb-buttons").each(function() {
                var e, n, i, o, s, l = t(this),
                    u = t("li", l),
                    c = u.filter(".small"),
                    f = c.length;
                f > 0 && f !== u.length ? (l.removeClass("small-format"), c.css("width", "42px"), i = 42 * f, e = u.not(".small").length, n = 100 / e, s = i / e, r.calc === !1 ? (o = (l.innerWidth() - 1) / e - s, o = Math.floor(1e3 * o) / 1e3, o += "px") : o = r.calc + "(" + n + "% - " + s + "px)", u.not(".small").css("width", o)) : f === u.length ? (l.addClass("small-format"), a()) : (l.removeClass("small-format"), a())
            }), s()
        },
        f = function() {
            t(".rrssb-buttons").each(function(e) {
                t(this).addClass("rrssb-" + (e + 1))
            }), i(), a(), t(".rrssb-buttons li .rrssb-text").each(function() {
                var e = t(this),
                    n = e.width();
                e.closest("li").attr("data-size", n)
            }), u(!0)
        },
        d = function(e) {
            t(".rrssb-buttons li.small").removeClass("small"), u(), e()
        },
        p = function(t, r, i, o) {
            var a = e.screenLeft !== n ? e.screenLeft : screen.left,
                s = e.screenTop !== n ? e.screenTop : screen.top,
                l = e.innerWidth ? e.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                u = e.innerHeight ? e.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                c = l / 2 - i / 2 + a,
                f = u / 3 - o / 3 + s,
                d = e.open(t, r, "scrollbars=yes, width=" + i + ", height=" + o + ", top=" + f + ", left=" + c);
            d && d.focus && d.focus()
        },
        h = function() {
            var e = {};
            return function(t, n, r) {
                r || (r = "Don't call this twice without a uniqueId"), e[r] && clearTimeout(e[r]), e[r] = setTimeout(t, n)
            }
        }();
    t(document).ready(function() {
        try {
            t(document).on("click", ".rrssb-buttons a.popup", {}, function(e) {
                var n = t(this);
                p(n.attr("href"), n.find(".rrssb-text").html(), 580, 470), e.preventDefault()
            })
        } catch (e) {}
        t(e).resize(function() {
            d(c), h(function() {
                d(c)
            }, 200, "finished resizing")
        }), f()
    }), e.rrssbInit = f
}(window, jQuery);