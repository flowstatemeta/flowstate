module.exports = [
"[project]/web/node_modules/mux-embed/dist/mux.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ed
]);
var Yr = Object.create;
var ft = Object.defineProperty;
var Xr = Object.getOwnPropertyDescriptor;
var $r = Object.getOwnPropertyNames;
var Zr = Object.getPrototypeOf, ea = Object.prototype.hasOwnProperty;
var pt = function(r, e) {
    return function() {
        return r && (e = r(r = 0)), e;
    };
};
var B = function(r, e) {
    return function() {
        return e || r((e = {
            exports: {}
        }).exports, e), e.exports;
    };
};
var ta = function(r, e, t, i) {
    if (e && typeof e == "object" || typeof e == "function") for(var a = $r(e), n = 0, o = a.length, s; n < o; n++)s = a[n], !ea.call(r, s) && s !== t && ft(r, s, {
        get: (function(u) {
            return e[u];
        }).bind(null, s),
        enumerable: !(i = Xr(e, s)) || i.enumerable
    });
    return r;
};
var V = function(r, e, t) {
    return t = r != null ? Yr(Zr(r)) : {}, ta(e || !r || !r.__esModule ? ft(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r);
};
var J = B(function(ji, yt) {
    var xe;
    ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time truthy", 1) ? xe = /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
    yt.exports = xe;
});
function U(r, e) {
    return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](r) : U(r, e);
}
var te = pt(function() {
    te();
});
function Ne(r) {
    "@swc/helpers - typeof";
    return r && typeof Symbol != "undefined" && r.constructor === Symbol ? "symbol" : typeof r;
}
var Je = pt(function() {});
var Ye = B(function(Ts, cr) {
    var lr = Array.prototype.slice;
    cr.exports = Pa;
    function Pa(r, e) {
        for(("length" in r) || (r = [
            r
        ]), r = lr.call(r); r.length;){
            var t = r.shift(), i = e(t);
            if (i) return i;
            t.childNodes && t.childNodes.length && (r = lr.call(t.childNodes).concat(r));
        }
    }
});
var fr = B(function(Es, _r) {
    te();
    _r.exports = me;
    function me(r, e) {
        if (!U(this, me)) return new me(r, e);
        this.data = r, this.nodeValue = r, this.length = r.length, this.ownerDocument = e || null;
    }
    me.prototype.nodeType = 8;
    me.prototype.nodeName = "#comment";
    me.prototype.toString = function() {
        return "[object Comment]";
    };
});
var vr = B(function(xs, pr) {
    te();
    pr.exports = ae;
    function ae(r, e) {
        if (!U(this, ae)) return new ae(r);
        this.data = r || "", this.length = this.data.length, this.ownerDocument = e || null;
    }
    ae.prototype.type = "DOMTextNode";
    ae.prototype.nodeType = 3;
    ae.prototype.nodeName = "#text";
    ae.prototype.toString = function() {
        return this.data;
    };
    ae.prototype.replaceData = function(e, t, i) {
        var a = this.data, n = a.substring(0, e), o = a.substring(e + t, a.length);
        this.data = n + i + o, this.length = this.data.length;
    };
});
var Xe = B(function(Ds, mr) {
    mr.exports = Ia;
    function Ia(r) {
        var e = this, t = r.type;
        r.target || (r.target = e), e.listeners || (e.listeners = {});
        var i = e.listeners[t];
        if (i) return i.forEach(function(a) {
            r.currentTarget = e, typeof a == "function" ? a(r) : a.handleEvent(r);
        });
        e.parentNode && e.parentNode.dispatchEvent(r);
    }
});
var $e = B(function(Ss, hr) {
    hr.exports = Na;
    function Na(r, e) {
        var t = this;
        t.listeners || (t.listeners = {}), t.listeners[r] || (t.listeners[r] = []), t.listeners[r].indexOf(e) === -1 && t.listeners[r].push(e);
    }
});
var Ze = B(function(Rs, yr) {
    yr.exports = La;
    function La(r, e) {
        var t = this;
        if (t.listeners && t.listeners[r]) {
            var i = t.listeners[r], a = i.indexOf(e);
            a !== -1 && i.splice(a, 1);
        }
    }
});
var wr = B(function(As, Tr) {
    Je();
    Tr.exports = gr;
    var Ca = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ];
    function gr(r) {
        switch(r.nodeType){
            case 3:
                return et(r.data);
            case 8:
                return "<!--" + r.data + "-->";
            default:
                return Ma(r);
        }
    }
    function Ma(r) {
        var e = [], t = r.tagName;
        return r.namespaceURI === "http://www.w3.org/1999/xhtml" && (t = t.toLowerCase()), e.push("<" + t + Fa(r) + Ua(r)), Ca.indexOf(t) > -1 ? e.push(" />") : (e.push(">"), r.childNodes.length ? e.push.apply(e, r.childNodes.map(gr)) : r.textContent || r.innerText ? e.push(et(r.textContent || r.innerText)) : r.innerHTML && e.push(r.innerHTML), e.push("</" + t + ">")), e.join("");
    }
    function Ha(r, e) {
        var t = Ne(r[e]);
        return e === "style" && Object.keys(r.style).length > 0 ? !0 : r.hasOwnProperty(e) && (t === "string" || t === "boolean" || t === "number") && e !== "nodeName" && e !== "className" && e !== "tagName" && e !== "textContent" && e !== "innerText" && e !== "namespaceURI" && e !== "innerHTML";
    }
    function Ba(r) {
        if (typeof r == "string") return r;
        var e = "";
        return Object.keys(r).forEach(function(t) {
            var i = r[t];
            t = t.replace(/[A-Z]/g, function(a) {
                return "-" + a.toLowerCase();
            }), e += t + ":" + i + ";";
        }), e;
    }
    function Ua(r) {
        var e = r.dataset, t = [];
        for(var i in e)t.push({
            name: "data-" + i,
            value: e[i]
        });
        return t.length ? br(t) : "";
    }
    function br(r) {
        var e = [];
        return r.forEach(function(t) {
            var i = t.name, a = t.value;
            i === "style" && (a = Ba(a)), e.push(i + '="' + Va(a) + '"');
        }), e.length ? " " + e.join(" ") : "";
    }
    function Fa(r) {
        var e = [];
        for(var t in r)Ha(r, t) && e.push({
            name: t,
            value: r[t]
        });
        for(var i in r._attributes)for(var a in r._attributes[i]){
            var n = r._attributes[i][a], o = (n.prefix ? n.prefix + ":" : "") + a;
            e.push({
                name: o,
                value: n.value
            });
        }
        return r.className && e.push({
            name: "class",
            value: r.className
        }), e.length ? br(e) : "";
    }
    function et(r) {
        var e = "";
        return typeof r == "string" ? e = r : r && (e = r.toString()), e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function Va(r) {
        return et(r).replace(/"/g, "&quot;");
    }
});
var rt = B(function(Ps, kr) {
    te();
    var tt = Ye(), Wa = Xe(), ja = $e(), Ga = Ze(), Ja = wr(), Er = "http://www.w3.org/1999/xhtml";
    kr.exports = I;
    function I(r, e, t) {
        if (!U(this, I)) return new I(r);
        var i = t === void 0 ? Er : t || null;
        this.tagName = i === Er ? String(r).toUpperCase() : r, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = e || null, this.namespaceURI = i, this._attributes = {}, this.tagName === "INPUT" && (this.type = "text");
    }
    I.prototype.type = "DOMElement";
    I.prototype.nodeType = 1;
    I.prototype.appendChild = function(e) {
        return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), e.parentNode = this, e;
    };
    I.prototype.replaceChild = function(e, t) {
        e.parentNode && e.parentNode.removeChild(e);
        var i = this.childNodes.indexOf(t);
        return t.parentNode = null, this.childNodes[i] = e, e.parentNode = this, t;
    };
    I.prototype.removeChild = function(e) {
        var t = this.childNodes.indexOf(e);
        return this.childNodes.splice(t, 1), e.parentNode = null, e;
    };
    I.prototype.insertBefore = function(e, t) {
        e.parentNode && e.parentNode.removeChild(e);
        var i = t == null ? -1 : this.childNodes.indexOf(t);
        return i > -1 ? this.childNodes.splice(i, 0, e) : this.childNodes.push(e), e.parentNode = this, e;
    };
    I.prototype.setAttributeNS = function(e, t, i) {
        var a = null, n = t, o = t.indexOf(":");
        if (o > -1 && (a = t.substr(0, o), n = t.substr(o + 1)), this.tagName === "INPUT" && t === "type") this.type = i;
        else {
            var s = this._attributes[e] || (this._attributes[e] = {});
            s[n] = {
                value: i,
                prefix: a
            };
        }
    };
    I.prototype.getAttributeNS = function(e, t) {
        var i = this._attributes[e], a = i && i[t] && i[t].value;
        return this.tagName === "INPUT" && t === "type" ? this.type : typeof a != "string" ? null : a;
    };
    I.prototype.removeAttributeNS = function(e, t) {
        var i = this._attributes[e];
        i && delete i[t];
    };
    I.prototype.hasAttributeNS = function(e, t) {
        var i = this._attributes[e];
        return !!i && t in i;
    };
    I.prototype.setAttribute = function(e, t) {
        return this.setAttributeNS(null, e, t);
    };
    I.prototype.getAttribute = function(e) {
        return this.getAttributeNS(null, e);
    };
    I.prototype.removeAttribute = function(e) {
        return this.removeAttributeNS(null, e);
    };
    I.prototype.hasAttribute = function(e) {
        return this.hasAttributeNS(null, e);
    };
    I.prototype.removeEventListener = Ga;
    I.prototype.addEventListener = ja;
    I.prototype.dispatchEvent = Wa;
    I.prototype.focus = function() {};
    I.prototype.toString = function() {
        return Ja(this);
    };
    I.prototype.getElementsByClassName = function(e) {
        var t = e.split(" "), i = [];
        return tt(this, function(a) {
            if (a.nodeType === 1) {
                var n = a.className || "", o = n.split(" ");
                t.every(function(s) {
                    return o.indexOf(s) !== -1;
                }) && i.push(a);
            }
        }), i;
    };
    I.prototype.getElementsByTagName = function(e) {
        e = e.toLowerCase();
        var t = [];
        return tt(this.childNodes, function(i) {
            i.nodeType === 1 && (e === "*" || i.tagName.toLowerCase() === e) && t.push(i);
        }), t;
    };
    I.prototype.contains = function(e) {
        return tt(this, function(t) {
            return e === t;
        }) || !1;
    };
});
var Dr = B(function(Ns, xr) {
    te();
    var at = rt();
    xr.exports = K;
    function K(r) {
        if (!U(this, K)) return new K;
        this.childNodes = [], this.parentNode = null, this.ownerDocument = r || null;
    }
    K.prototype.type = "DocumentFragment";
    K.prototype.nodeType = 11;
    K.prototype.nodeName = "#document-fragment";
    K.prototype.appendChild = at.prototype.appendChild;
    K.prototype.replaceChild = at.prototype.replaceChild;
    K.prototype.removeChild = at.prototype.removeChild;
    K.prototype.toString = function() {
        return this.childNodes.map(function(e) {
            return String(e);
        }).join("");
    };
});
var Rr = B(function(Ls, Sr) {
    Sr.exports = it;
    function it(r) {}
    it.prototype.initEvent = function(e, t, i) {
        this.type = e, this.bubbles = t, this.cancelable = i;
    };
    it.prototype.preventDefault = function() {};
});
var Ar = B(function(Ms, qr) {
    te();
    var Qa = Ye(), za = fr(), Ka = vr(), Re = rt(), Ya = Dr(), Xa = Rr(), $a = Xe(), Za = $e(), ei = Ze();
    qr.exports = Be;
    function Be() {
        if (!U(this, Be)) return new Be;
        this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [
            this.documentElement
        ], this.nodeType = 9;
    }
    var j = Be.prototype;
    j.createTextNode = function(e) {
        return new Ka(e, this);
    };
    j.createElementNS = function(e, t) {
        var i = e === null ? null : String(e);
        return new Re(t, this, i);
    };
    j.createElement = function(e) {
        return new Re(e, this);
    };
    j.createDocumentFragment = function() {
        return new Ya(this);
    };
    j.createEvent = function(e) {
        return new Xa(e);
    };
    j.createComment = function(e) {
        return new za(e, this);
    };
    j.getElementById = function(e) {
        e = String(e);
        var t = Qa(this.childNodes, function(i) {
            if (String(i.id) === e) return i;
        });
        return t || null;
    };
    j.getElementsByClassName = Re.prototype.getElementsByClassName;
    j.getElementsByTagName = Re.prototype.getElementsByTagName;
    j.contains = Re.prototype.contains;
    j.removeEventListener = ei;
    j.addEventListener = Za;
    j.dispatchEvent = $a;
});
var Pr = B(function(Hs, Or) {
    var ti = Ar();
    Or.exports = new ti;
});
var nt = B(function(Bs, Nr) {
    var Ir = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable", ri = Pr(), qe;
    typeof document != "undefined" ? qe = document : (qe = Ir["__GLOBAL_DOCUMENT_CACHE@4"], qe || (qe = Ir["__GLOBAL_DOCUMENT_CACHE@4"] = ri));
    Nr.exports = qe;
});
function vt(r) {
    if (Array.isArray(r)) return r;
}
function mt(r, e) {
    var t = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
        var i = [], a = !0, n = !1, o, s;
        try {
            for(t = t.call(r); !(a = (o = t.next()).done) && (i.push(o.value), !(e && i.length === e)); a = !0);
        } catch (u) {
            n = !0, s = u;
        } finally{
            try {
                !a && t.return != null && t.return();
            } finally{
                if (n) throw s;
            }
        }
        return i;
    }
}
function ht() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ke(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for(var t = 0, i = new Array(e); t < e; t++)i[t] = r[t];
    return i;
}
function Ae(r, e) {
    if (r) {
        if (typeof r == "string") return ke(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(t);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ke(r, e);
    }
}
function H(r, e) {
    return vt(r) || mt(r, e) || Ae(r, e) || ht();
}
var be = V(J());
var Ge = V(J());
var gt = V(J()), ra = {
    now: function() {
        var r = gt.default.performance, e = r && r.timing, t = e && e.navigationStart, i = typeof t == "number" && typeof r.now == "function" ? t + r.now() : Date.now();
        return Math.round(i);
    }
}, A = ra;
var ee = function() {
    var e, t, i;
    if (typeof ((e = Ge.default.crypto) === null || e === void 0 ? void 0 : e.getRandomValues) == "function") {
        i = new Uint8Array(32), Ge.default.crypto.getRandomValues(i);
        for(var a = 0; a < 32; a++)i[a] = i[a] % 16;
    } else {
        i = [];
        for(var n = 0; n < 32; n++)i[n] = Math.random() * 16 | 0;
    }
    var o = 0;
    t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(p) {
        var b = p === "x" ? i[o] : i[o] & 3 | 8;
        return o++, b.toString(16);
    });
    var s = A.now(), u = s == null ? void 0 : s.toString(16).substring(3);
    return u ? t.substring(0, 28) + u : t;
}, Oe = function() {
    return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
};
var Q = function(e) {
    if (e && typeof e.nodeName != "undefined") return e.muxId || (e.muxId = Oe()), e.muxId;
    var t;
    try {
        t = document.querySelector(e);
    } catch (i) {}
    return t && !t.muxId && (t.muxId = e), (t == null ? void 0 : t.muxId) || e;
}, se = function(e) {
    var t;
    e && typeof e.nodeName != "undefined" ? (t = e, e = Q(t)) : t = document.querySelector(e);
    var i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
    return [
        t,
        e,
        i
    ];
};
function bt(r) {
    if (Array.isArray(r)) return ke(r);
}
function Tt(r) {
    if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function wt() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function W(r) {
    return bt(r) || Tt(r) || Ae(r) || wt();
}
var Y = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    SILENT: 5
}, Et = function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, t, i, a, n, o, s = r ? [
        console,
        r
    ] : [
        console
    ], u = (t = console.trace).bind.apply(t, W(s)), p = (i = console.info).bind.apply(i, W(s)), b = (a = console.debug).bind.apply(a, W(s)), k = (n = console.warn).bind.apply(n, W(s)), y = (o = console.error).bind.apply(o, W(s)), c = e;
    return {
        trace: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.TRACE)) return u.apply(void 0, W(x));
        },
        debug: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.DEBUG)) return b.apply(void 0, W(x));
        },
        info: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.INFO)) return p.apply(void 0, W(x));
        },
        warn: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.WARN)) return k.apply(void 0, W(x));
        },
        error: function() {
            for(var T = arguments.length, x = new Array(T), m = 0; m < T; m++)x[m] = arguments[m];
            if (!(c > Y.ERROR)) return y.apply(void 0, W(x));
        },
        get level () {
            return c;
        },
        set level (v){
            v !== this.level && (c = v != null ? v : e);
        }
    };
};
var q = Et("[mux]");
var Pe = V(J());
function ce() {
    var r = Pe.default.doNotTrack || Pe.default.navigator && Pe.default.navigator.doNotTrack;
    return r === "1";
}
function g(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
}
te();
function D(r, e) {
    if (!U(r, e)) throw new TypeError("Cannot call a class as a function");
}
function kt(r, e) {
    for(var t = 0; t < e.length; t++){
        var i = e[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
}
function L(r, e, t) {
    return e && kt(r.prototype, e), t && kt(r, t), r;
}
function l(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}
function X(r) {
    return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, X(r);
}
function xt(r, e) {
    for(; !Object.prototype.hasOwnProperty.call(r, e) && (r = X(r), r !== null););
    return r;
}
function De(r, e, t) {
    return typeof Reflect != "undefined" && Reflect.get ? De = Reflect.get : De = function(a, n, o) {
        var s = xt(a, n);
        if (s) {
            var u = Object.getOwnPropertyDescriptor(s, n);
            return u.get ? u.get.call(o || a) : u.value;
        }
    }, De(r, e, t || r);
}
function Ie(r, e) {
    return Ie = Object.setPrototypeOf || function(i, a) {
        return i.__proto__ = a, i;
    }, Ie(r, e);
}
function Dt(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    r.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: r,
            writable: !0,
            configurable: !0
        }
    }), e && Ie(r, e);
}
function St() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch (r) {
        return !1;
    }
}
Je();
function Rt(r, e) {
    return e && (Ne(e) === "object" || typeof e == "function") ? e : g(r);
}
function qt(r) {
    var e = St();
    return function() {
        var i = X(r), a;
        if (e) {
            var n = X(this).constructor;
            a = Reflect.construct(i, arguments, n);
        } else a = i.apply(this, arguments);
        return Rt(this, a);
    };
}
var F = function(r) {
    return re(r)[0];
};
var re = function(r) {
    if (typeof r != "string" || r === "") return [
        "localhost"
    ];
    var e = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, t = r.match(e) || [], i = t[4], a;
    return i && (a = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [
        i,
        a
    ];
};
var Le = V(J()), aa = {
    exists: function() {
        var r = Le.default.performance, e = r && r.timing;
        return e !== void 0;
    },
    domContentLoadedEventEnd: function() {
        var r = Le.default.performance, e = r && r.timing;
        return e && e.domContentLoadedEventEnd;
    },
    navigationStart: function() {
        var r = Le.default.performance, e = r && r.timing;
        return e && e.navigationStart;
    }
}, _e = aa;
function O(r, e, t) {
    t = t === void 0 ? 1 : t, r[e] = r[e] || 0, r[e] += t;
}
function ue(r) {
    for(var e = 1; e < arguments.length; e++){
        var t = arguments[e] != null ? arguments[e] : {}, i = Object.keys(t);
        typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable;
        }))), i.forEach(function(a) {
            l(r, a, t[a]);
        });
    }
    return r;
}
function ia(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(r);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(r, a).enumerable;
        })), t.push.apply(t, i);
    }
    return t;
}
function fe(r, e) {
    return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ia(Object(e)).forEach(function(t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    }), r;
}
var na = [
    "x-cdn",
    "content-type"
], At = [
    "x-request-id",
    "cf-ray",
    "x-amz-cf-id",
    "x-akamai-request-id"
], oa = na.concat(At);
function pe(r) {
    r = r || "";
    var e = {}, t = r.trim().split(/[\r\n]+/);
    return t.forEach(function(i) {
        if (i) {
            var a = i.split(": "), n = a.shift();
            n && (oa.indexOf(n.toLowerCase()) >= 0 || n.toLowerCase().indexOf("x-litix-") === 0) && (e[n] = a.join(": "));
        }
    }), e;
}
function de(r) {
    if (r) {
        var e = At.find(function(t) {
            return r[t] !== void 0;
        });
        return e ? r[e] : void 0;
    }
}
var sa = function(r) {
    var e = {};
    for(var t in r){
        var i = r[t], a = i["DATA-ID"].search("io.litix.data.");
        if (a !== -1) {
            var n = i["DATA-ID"].replace("io.litix.data.", "");
            e[n] = i.VALUE;
        }
    }
    return e;
}, Ce = sa;
var Me = function(r) {
    if (!r) return {};
    var e = _e.navigationStart(), t = r.loading, i = t ? t.start : r.trequest, a = t ? t.first : r.tfirst, n = t ? t.end : r.tload;
    return {
        bytesLoaded: r.total,
        requestStart: Math.round(e + i),
        responseStart: Math.round(e + a),
        responseEnd: Math.round(e + n)
    };
}, Se = function(r) {
    if (!(!r || typeof r.getAllResponseHeaders != "function")) return pe(r.getAllResponseHeaders());
}, Ot = function(r, e, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 ? arguments[4] : void 0, n = r.log, o = r.utils.secondsToMs, s = function(m) {
        var f = parseInt(a.version), _;
        return f === 1 && m.programDateTime !== null && (_ = m.programDateTime), f === 0 && m.pdt !== null && (_ = m.pdt), _;
    };
    if (!_e.exists()) {
        n.warn("performance timing not supported. Not tracking HLS.js.");
        return;
    }
    var u = function(m, f) {
        return r.emit(e, m, f);
    }, p = function(m, f) {
        var _ = f.levels, d = f.audioTracks, h = f.url, w = f.stats, E = f.networkDetails, S = f.sessionData, N = {}, M = {};
        _.forEach(function(G, oe) {
            N[oe] = {
                width: G.width,
                height: G.height,
                bitrate: G.bitrate,
                attrs: G.attrs
            };
        }), d.forEach(function(G, oe) {
            M[oe] = {
                name: G.name,
                language: G.lang,
                bitrate: G.bitrate
            };
        });
        var P = Me(w), R = P.bytesLoaded, Z = P.requestStart, Te = P.responseStart, we = P.responseEnd;
        u("requestcompleted", fe(ue({}, Ce(S)), {
            request_event_type: m,
            request_bytes_loaded: R,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_type: "manifest",
            request_hostname: F(h),
            request_response_headers: Se(E),
            request_rendition_lists: {
                media: N,
                audio: M,
                video: {}
            }
        }));
    };
    t.on(a.Events.MANIFEST_LOADED, p);
    var b = function(m, f) {
        var _ = f.details, d = f.level, h = f.networkDetails, w = f.stats, E = Me(w), S = E.bytesLoaded, N = E.requestStart, M = E.responseStart, P = E.responseEnd, R = _.fragments[_.fragments.length - 1], Z = s(R) + o(R.duration);
        u("requestcompleted", {
            request_event_type: m,
            request_bytes_loaded: S,
            request_start: N,
            request_response_start: M,
            request_response_end: P,
            request_current_level: d,
            request_type: "manifest",
            request_hostname: F(_.url),
            request_response_headers: Se(h),
            video_holdback: _.holdBack && o(_.holdBack),
            video_part_holdback: _.partHoldBack && o(_.partHoldBack),
            video_part_target_duration: _.partTarget && o(_.partTarget),
            video_target_duration: _.targetduration && o(_.targetduration),
            video_source_is_live: _.live,
            player_manifest_newest_program_time: isNaN(Z) ? void 0 : Z
        });
    };
    t.on(a.Events.LEVEL_LOADED, b);
    var k = function(m, f) {
        var _ = f.details, d = f.networkDetails, h = f.stats, w = Me(h), E = w.bytesLoaded, S = w.requestStart, N = w.responseStart, M = w.responseEnd;
        u("requestcompleted", {
            request_event_type: m,
            request_bytes_loaded: E,
            request_start: S,
            request_response_start: N,
            request_response_end: M,
            request_type: "manifest",
            request_hostname: F(_.url),
            request_response_headers: Se(d)
        });
    };
    t.on(a.Events.AUDIO_TRACK_LOADED, k);
    var y = function(m, f) {
        var _ = f.stats, d = f.networkDetails, h = f.frag;
        _ = _ || h.stats;
        var w = Me(_), E = w.bytesLoaded, S = w.requestStart, N = w.responseStart, M = w.responseEnd, P = d ? Se(d) : void 0, R = {
            request_event_type: m,
            request_bytes_loaded: E,
            request_start: S,
            request_response_start: N,
            request_response_end: M,
            request_hostname: d ? F(d.responseURL) : void 0,
            request_id: P ? de(P) : void 0,
            request_response_headers: P,
            request_media_duration: h.duration,
            request_url: d == null ? void 0 : d.responseURL
        };
        h.type === "main" ? (R.request_type = "media", R.request_current_level = h.level, R.request_video_width = (t.levels[h.level] || {}).width, R.request_video_height = (t.levels[h.level] || {}).height, R.request_labeled_bitrate = (t.levels[h.level] || {}).bitrate) : R.request_type = h.type, u("requestcompleted", R);
    };
    t.on(a.Events.FRAG_LOADED, y);
    var c = function(m, f) {
        var _ = f.frag, d = _.start, h = s(_), w = {
            currentFragmentPDT: h,
            currentFragmentStart: o(d)
        };
        u("fragmentchange", w);
    };
    t.on(a.Events.FRAG_CHANGED, c);
    var v1 = function(m, f) {
        var _ = f.type, d = f.details, h = f.response, w = f.fatal, E = f.frag, S = f.networkDetails, N = (E == null ? void 0 : E.url) || f.url || "", M = S ? Se(S) : void 0;
        if ((d === a.ErrorDetails.MANIFEST_LOAD_ERROR || d === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT || d === a.ErrorDetails.FRAG_LOAD_ERROR || d === a.ErrorDetails.FRAG_LOAD_TIMEOUT || d === a.ErrorDetails.LEVEL_LOAD_ERROR || d === a.ErrorDetails.LEVEL_LOAD_TIMEOUT || d === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || d === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || d === a.ErrorDetails.KEY_LOAD_ERROR || d === a.ErrorDetails.KEY_LOAD_TIMEOUT) && u("requestfailed", {
            request_error: d,
            request_url: N,
            request_hostname: F(N),
            request_id: M ? de(M) : void 0,
            request_type: d === a.ErrorDetails.FRAG_LOAD_ERROR || d === a.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : d === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : d === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : d === a.ErrorDetails.KEY_LOAD_ERROR || d === a.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest",
            request_error_code: h == null ? void 0 : h.code,
            request_error_text: h == null ? void 0 : h.text
        }), w) {
            var P, R = "".concat(N ? "url: ".concat(N, "\n") : "") + "".concat(h && (h.code || h.text) ? "response: ".concat(h.code, ", ").concat(h.text, "\n") : "") + "".concat(f.reason ? "failure reason: ".concat(f.reason, "\n") : "") + "".concat(f.level ? "level: ".concat(f.level, "\n") : "") + "".concat(f.parent ? "parent stream controller: ".concat(f.parent, "\n") : "") + "".concat(f.buffer ? "buffer length: ".concat(f.buffer, "\n") : "") + "".concat(f.error ? "error: ".concat(f.error, "\n") : "") + "".concat(f.event ? "event: ".concat(f.event, "\n") : "") + "".concat(f.err ? "error message: ".concat((P = f.err) === null || P === void 0 ? void 0 : P.message, "\n") : "");
            u("error", {
                player_error_code: _,
                player_error_message: d,
                player_error_context: R
            });
        }
    };
    t.on(a.Events.ERROR, v1);
    var T = function(m, f) {
        var _ = f.frag, d = _ && _._url || "";
        u("requestcanceled", {
            request_event_type: m,
            request_url: d,
            request_type: "media",
            request_hostname: F(d)
        });
    };
    t.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, T);
    var x = function(m, f) {
        var _ = f.level, d = t.levels[_];
        if (d && d.attrs && d.attrs.BANDWIDTH) {
            var h = d.attrs.BANDWIDTH, w, E = parseFloat(d.attrs["FRAME-RATE"]);
            isNaN(E) || (w = E), h ? u("renditionchange", {
                video_source_fps: w,
                video_source_bitrate: h,
                video_source_width: d.width,
                video_source_height: d.height,
                video_source_rendition_name: d.name,
                video_source_codec: d == null ? void 0 : d.videoCodec
            }) : n.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
        }
    };
    t.on(a.Events.LEVEL_SWITCHED, x), t._stopMuxMonitor = function() {
        t.off(a.Events.MANIFEST_LOADED, p), t.off(a.Events.LEVEL_LOADED, b), t.off(a.Events.AUDIO_TRACK_LOADED, k), t.off(a.Events.FRAG_LOADED, y), t.off(a.Events.FRAG_CHANGED, c), t.off(a.Events.ERROR, v1), t.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, T), t.off(a.Events.LEVEL_SWITCHED, x), t.off(a.Events.DESTROYING, t._stopMuxMonitor), delete t._stopMuxMonitor;
    }, t.on(a.Events.DESTROYING, t._stopMuxMonitor);
}, Pt = function(r) {
    r && typeof r._stopMuxMonitor == "function" && r._stopMuxMonitor();
};
var It = function(r, e) {
    if (!r || !r.requestEndDate) return {};
    var t = F(r.url), i = r.url, a = r.bytesLoaded, n = new Date(r.requestStartDate).getTime(), o = new Date(r.firstByteDate).getTime(), s = new Date(r.requestEndDate).getTime(), u = isNaN(r.duration) ? 0 : r.duration, p = typeof e.getMetricsFor == "function" ? e.getMetricsFor(r.mediaType).HttpList : e.getDashMetrics().getHttpRequests(r.mediaType), b;
    p.length > 0 && (b = pe(p[p.length - 1]._responseHeaders || ""));
    var k = b ? de(b) : void 0;
    return {
        requestStart: n,
        requestResponseStart: o,
        requestResponseEnd: s,
        requestBytesLoaded: a,
        requestResponseHeaders: b,
        requestMediaDuration: u,
        requestHostname: t,
        requestUrl: i,
        requestId: k
    };
}, ua = function(r, e) {
    var t = e.getQualityFor(r), i = e.getCurrentTrackFor(r).bitrateList;
    return i ? {
        currentLevel: t,
        renditionWidth: i[t].width || null,
        renditionHeight: i[t].height || null,
        renditionBitrate: i[t].bandwidth
    } : {};
}, da = function(r) {
    var e;
    return (e = r.match(/.*codecs\*?="(.*)"/)) === null || e === void 0 ? void 0 : e[1];
}, la = function(e) {
    try {
        var t, i, a = (i = e.getVersion) === null || i === void 0 || (t = i.call(e)) === null || t === void 0 ? void 0 : t.split(".").map(function(n) {
            return parseInt(n);
        })[0];
        return a;
    } catch (n) {
        return !1;
    }
}, Nt = function(r, e, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r.log;
    if (!t || !t.on) {
        a.warn("Invalid dash.js player reference. Monitoring blocked.");
        return;
    }
    var n = la(t), o = function(_, d) {
        return r.emit(e, _, d);
    }, s = function(_) {
        var d = _.type, h = _.data, w = (h || {}).url;
        o("requestcompleted", {
            request_event_type: d,
            request_start: 0,
            request_response_start: 0,
            request_response_end: 0,
            request_bytes_loaded: -1,
            request_type: "manifest",
            request_hostname: F(w),
            request_url: w
        });
    };
    t.on("manifestLoaded", s);
    var u = {}, p = function(_) {
        if (typeof _.getRequests != "function") return null;
        var d = _.getRequests({
            state: "executed"
        });
        return d.length === 0 ? null : d[d.length - 1];
    }, b = function(_) {
        var d = _.type, h = _.fragmentModel, w = _.chunk, E = p(h);
        k({
            type: d,
            request: E,
            chunk: w
        });
    }, k = function(_) {
        var d = _.type, h = _.chunk, w = _.request, E = (h || {}).mediaInfo, S = E || {}, N = S.type, M = S.bitrateList;
        M = M || [];
        var P = {};
        M.forEach(function(Ee, z) {
            P[z] = {}, P[z].width = Ee.width, P[z].height = Ee.height, P[z].bitrate = Ee.bandwidth, P[z].attrs = {};
        }), N === "video" ? u.video = P : N === "audio" ? u.audio = P : u.media = P;
        var R = It(w, t), Z = R.requestStart, Te = R.requestResponseStart, we = R.requestResponseEnd, G = R.requestResponseHeaders, oe = R.requestMediaDuration, Ve = R.requestHostname, We = R.requestUrl, je = R.requestId;
        o("requestcompleted", {
            request_event_type: d,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_bytes_loaded: -1,
            request_type: N + "_init",
            request_response_headers: G,
            request_hostname: Ve,
            request_id: je,
            request_url: We,
            request_media_duration: oe,
            request_rendition_lists: u
        });
    };
    n >= 4 ? t.on("initFragmentLoaded", k) : t.on("initFragmentLoaded", b);
    var y = function(_) {
        var d = _.type, h = _.fragmentModel, w = _.chunk, E = p(h);
        c({
            type: d,
            request: E,
            chunk: w
        });
    }, c = function(_) {
        var d = _.type, h = _.chunk, w = _.request, E = h || {}, S = E.mediaInfo, N = E.start, M = S || {}, P = M.type, R = It(w, t), Z = R.requestStart, Te = R.requestResponseStart, we = R.requestResponseEnd, G = R.requestBytesLoaded, oe = R.requestResponseHeaders, Ve = R.requestMediaDuration, We = R.requestHostname, je = R.requestUrl, Ee = R.requestId, z = ua(P, t), Jr = z.currentLevel, Qr = z.renditionWidth, zr = z.renditionHeight, Kr = z.renditionBitrate;
        o("requestcompleted", {
            request_event_type: d,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_bytes_loaded: G,
            request_type: P,
            request_response_headers: oe,
            request_hostname: We,
            request_id: Ee,
            request_url: je,
            request_media_start_time: N,
            request_media_duration: Ve,
            request_current_level: Jr,
            request_labeled_bitrate: Kr,
            request_video_width: Qr,
            request_video_height: zr
        });
    };
    n >= 4 ? t.on("mediaFragmentLoaded", c) : t.on("mediaFragmentLoaded", y);
    var v1 = {
        video: void 0,
        audio: void 0,
        totalBitrate: void 0
    }, T = function() {
        if (v1.video && typeof v1.video.bitrate == "number") {
            if (!(v1.video.width && v1.video.height)) {
                a.warn("have bitrate info for video but missing width/height");
                return;
            }
            var _ = v1.video.bitrate;
            if (v1.audio && typeof v1.audio.bitrate == "number" && (_ += v1.audio.bitrate), _ !== v1.totalBitrate) return v1.totalBitrate = _, {
                video_source_bitrate: _,
                video_source_height: v1.video.height,
                video_source_width: v1.video.width,
                video_source_codec: da(v1.video.codec)
            };
        }
    }, x = function(_, d, h) {
        if (typeof _.newQuality != "number") {
            a.warn("missing evt.newQuality in qualityChangeRendered event", _);
            return;
        }
        var w = _.mediaType;
        if (w === "audio" || w === "video") {
            var E = t.getBitrateInfoListFor(w).find(function(N) {
                var M = N.qualityIndex;
                return M === _.newQuality;
            });
            if (!(E && typeof E.bitrate == "number")) {
                a.warn("missing bitrate info for ".concat(w));
                return;
            }
            v1[w] = fe(ue({}, E), {
                codec: t.getCurrentTrackFor(w).codec
            });
            var S = T();
            S && o("renditionchange", S);
        }
    };
    t.on("qualityChangeRendered", x);
    var m = function(_) {
        var d = _.request, h = _.mediaType;
        d = d || {}, o("requestcanceled", {
            request_event_type: d.type + "_" + d.action,
            request_url: d.url,
            request_type: h,
            request_hostname: F(d.url)
        });
    };
    t.on("fragmentLoadingAbandoned", m);
    var f = function(_) {
        var d = _.error, h, w, E = (d == null || (h = d.data) === null || h === void 0 ? void 0 : h.request) || {}, S = (d == null || (w = d.data) === null || w === void 0 ? void 0 : w.response) || {};
        (d == null ? void 0 : d.code) === 27 && o("requestfailed", {
            request_error: E.type + "_" + E.action,
            request_url: E.url,
            request_hostname: F(E.url),
            request_type: E.mediaType,
            request_error_code: S.status,
            request_error_text: S.statusText
        });
        var N = "".concat(E != null && E.url ? "url: ".concat(E.url, "\n") : "") + "".concat(S != null && S.status || S != null && S.statusText ? "response: ".concat(S == null ? void 0 : S.status, ", ").concat(S == null ? void 0 : S.statusText, "\n") : "");
        o("error", {
            player_error_code: d == null ? void 0 : d.code,
            player_error_message: d == null ? void 0 : d.message,
            player_error_context: N
        });
    };
    t.on("error", f), t._stopMuxMonitor = function() {
        t.off("manifestLoaded", s), t.off("initFragmentLoaded", k), t.off("mediaFragmentLoaded", c), t.off("qualityChangeRendered", x), t.off("error", f), t.off("fragmentLoadingAbandoned", m), delete t._stopMuxMonitor;
    };
}, Lt = function(r) {
    r && typeof r._stopMuxMonitor == "function" && r._stopMuxMonitor();
};
var Ct = 0, ca = function() {
    "use strict";
    function r() {
        D(this, r), l(this, "_listeners", void 0);
    }
    return L(r, [
        {
            key: "on",
            value: function(t, i, a) {
                return i._eventEmitterGuid = i._eventEmitterGuid || ++Ct, this._listeners = this._listeners || {}, this._listeners[t] = this._listeners[t] || [], a && (i = i.bind(a)), this._listeners[t].push(i), i;
            }
        },
        {
            key: "off",
            value: function(t, i) {
                var a = this._listeners && this._listeners[t];
                a && a.forEach(function(n, o) {
                    n._eventEmitterGuid === i._eventEmitterGuid && a.splice(o, 1);
                });
            }
        },
        {
            key: "one",
            value: function(t, i, a) {
                var n = this;
                i._eventEmitterGuid = i._eventEmitterGuid || ++Ct;
                var o = function() {
                    n.off(t, o), i.apply(a || this, arguments);
                };
                o._eventEmitterGuid = i._eventEmitterGuid, this.on(t, o);
            }
        },
        {
            key: "emit",
            value: function(t, i) {
                var a = this;
                if (this._listeners) {
                    i = i || {};
                    var n = this._listeners["before*"] || [], o = this._listeners[t] || [], s = this._listeners["after" + t] || [], u = function(p, b) {
                        p = p.slice(), p.forEach(function(k) {
                            k.call(a, {
                                type: t
                            }, b);
                        });
                    };
                    u(n, i), u(o, i), u(s, i);
                }
            }
        }
    ]), r;
}(), Mt = ca;
var He = V(J()), _a = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_playbackHeartbeatInterval", void 0), l(this, "_playheadShouldBeProgressing", void 0), l(this, "pm", void 0), this.pm = e, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, e.on("playing", function() {
            t._playheadShouldBeProgressing = !0;
        }), e.on("play", this._startPlaybackHeartbeatInterval.bind(this)), e.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), e.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), e.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("seeked", function() {
            e.data.player_is_paused ? t._stopPlaybackHeartbeatInterval() : t._startPlaybackHeartbeatInterval();
        }), e.on("timeupdate", function() {
            t._playbackHeartbeatInterval !== null && e.emit("playbackheartbeat");
        }), e.on("devicesleep", function(i, a) {
            t._playbackHeartbeatInterval !== null && (He.default.clearInterval(t._playbackHeartbeatInterval), e.emit("playbackheartbeatend", {
                viewer_time: a.viewer_time
            }), t._playbackHeartbeatInterval = null);
        });
    }
    return L(r, [
        {
            key: "_startPlaybackHeartbeatInterval",
            value: function() {
                var t = this;
                this._playbackHeartbeatInterval === null && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = He.default.setInterval(function() {
                    t.pm.emit("playbackheartbeat");
                }, this.pm.playbackHeartbeatTime));
            }
        },
        {
            key: "_stopPlaybackHeartbeatInterval",
            value: function() {
                this._playheadShouldBeProgressing = !1, this._playbackHeartbeatInterval !== null && (He.default.clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
            }
        }
    ]), r;
}(), Ht = _a;
var fa = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "viewErrored", void 0), e.on("viewinit", function() {
        t.viewErrored = !1;
    }), e.on("error", function(i, a) {
        try {
            var n = e.errorTranslator({
                player_error_code: a.player_error_code,
                player_error_message: a.player_error_message,
                player_error_context: a.player_error_context,
                player_error_severity: a.player_error_severity,
                player_error_business_exception: a.player_error_business_exception
            });
            n && (e.data.player_error_code = n.player_error_code || a.player_error_code, e.data.player_error_message = n.player_error_message || a.player_error_message, e.data.player_error_context = n.player_error_context || a.player_error_context, e.data.player_error_severity = n.player_error_severity || a.player_error_severity, e.data.player_error_business_exception = n.player_error_business_exception || a.player_error_business_exception, t.viewErrored = !0);
        } catch (o) {
            e.mux.log.warn("Exception in error translator callback.", o), t.viewErrored = !0;
        }
    }), e.on("aftererror", function() {
        var i, a, n, o, s;
        (i = e.data) === null || i === void 0 || delete i.player_error_code, (a = e.data) === null || a === void 0 || delete a.player_error_message, (n = e.data) === null || n === void 0 || delete n.player_error_context, (o = e.data) === null || o === void 0 || delete o.player_error_severity, (s = e.data) === null || s === void 0 || delete s.player_error_business_exception;
    });
}, Bt = fa;
var pa = function() {
    "use strict";
    function r(e) {
        D(this, r), l(this, "_watchTimeTrackerLastCheckedTime", void 0), l(this, "pm", void 0), this.pm = e, this._watchTimeTrackerLastCheckedTime = null, e.on("playbackheartbeat", this._updateWatchTime.bind(this)), e.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
    }
    return L(r, [
        {
            key: "_updateWatchTime",
            value: function(t, i) {
                var a = i.viewer_time;
                this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = a), O(this.pm.data, "view_watch_time", a - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a;
            }
        },
        {
            key: "_clearWatchTimeState",
            value: function(t, i) {
                this._updateWatchTime(t, i), this._watchTimeTrackerLastCheckedTime = null;
            }
        }
    ]), r;
}(), Ut = pa;
var va = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_playbackTimeTrackerLastPlayheadPosition", void 0), l(this, "_lastTime", void 0), l(this, "_isAdPlaying", void 0), l(this, "_callbackUpdatePlaybackTime", void 0), l(this, "pm", void 0), this.pm = e, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = A.now(), this._isAdPlaying = !1, this._callbackUpdatePlaybackTime = null;
        var i = this._startPlaybackTimeTracking.bind(this);
        e.on("playing", i), e.on("adplaying", i), e.on("seeked", i);
        var a = this._stopPlaybackTimeTracking.bind(this);
        e.on("playbackheartbeatend", a), e.on("seeking", a), e.on("adplaying", function() {
            t._isAdPlaying = !0;
        }), e.on("adended", function() {
            t._isAdPlaying = !1;
        }), e.on("adpause", function() {
            t._isAdPlaying = !1;
        }), e.on("adbreakstart", function() {
            t._isAdPlaying = !1;
        }), e.on("adbreakend", function() {
            t._isAdPlaying = !1;
        }), e.on("adplay", function() {
            t._isAdPlaying = !1;
        }), e.on("viewinit", function() {
            t._playbackTimeTrackerLastPlayheadPosition = -1, t._lastTime = A.now(), t._isAdPlaying = !1, t._callbackUpdatePlaybackTime = null;
        });
    }
    return L(r, [
        {
            key: "_startPlaybackTimeTracking",
            value: function() {
                this._callbackUpdatePlaybackTime === null && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime));
            }
        },
        {
            key: "_stopPlaybackTimeTracking",
            value: function() {
                this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1);
            }
        },
        {
            key: "_updatePlaybackTime",
            value: function() {
                var t = this.pm.data.player_playhead_time, i = A.now(), a = -1;
                this._playbackTimeTrackerLastPlayheadPosition >= 0 && t > this._playbackTimeTrackerLastPlayheadPosition ? a = t - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (a = i - this._lastTime), a > 0 && a <= 1e3 && O(this.pm.data, "view_content_playback_time", a), this._playbackTimeTrackerLastPlayheadPosition = t, this._lastTime = i;
            }
        }
    ]), r;
}(), Ft = va;
var ma = function() {
    "use strict";
    function r(e) {
        D(this, r), l(this, "pm", void 0), this.pm = e;
        var t = this._updatePlayheadTime.bind(this);
        e.on("playbackheartbeat", t), e.on("playbackheartbeatend", t), e.on("timeupdate", t), e.on("destroy", function() {
            e.off("timeupdate", t);
        });
    }
    return L(r, [
        {
            key: "_updateMaxPlayheadPosition",
            value: function() {
                this.pm.data.view_max_playhead_position = typeof this.pm.data.view_max_playhead_position == "undefined" ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
            }
        },
        {
            key: "_updatePlayheadTime",
            value: function(t, i) {
                var a = this, n = function() {
                    a.pm.currentFragmentPDT && a.pm.currentFragmentStart && (a.pm.data.player_program_time = a.pm.currentFragmentPDT + a.pm.data.player_playhead_time - a.pm.currentFragmentStart);
                };
                if (i && i.player_playhead_time) this.pm.data.player_playhead_time = i.player_playhead_time, n(), this._updateMaxPlayheadPosition();
                else if (this.pm.getPlayheadTime) {
                    var o = this.pm.getPlayheadTime();
                    typeof o != "undefined" && (this.pm.data.player_playhead_time = o, n(), this._updateMaxPlayheadPosition());
                }
            }
        }
    ]), r;
}(), Vt = ma;
var Wt = 5 * 60 * 1e3, ha = function r(e) {
    "use strict";
    if (D(this, r), !e.disableRebufferTracking) {
        var t, i = function(n, o) {
            a(o), t = void 0;
        }, a = function(n) {
            if (t) {
                var o = n.viewer_time - t;
                O(e.data, "view_rebuffer_duration", o), t = n.viewer_time, e.data.view_rebuffer_duration > Wt && (e.emit("viewend"), e.send("viewend"), e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Wt, "ms, future events will be ignored unless a programchange or videochange occurs.")));
            }
            e.data.view_watch_time >= 0 && e.data.view_rebuffer_count > 0 && (e.data.view_rebuffer_frequency = e.data.view_rebuffer_count / e.data.view_watch_time, e.data.view_rebuffer_percentage = e.data.view_rebuffer_duration / e.data.view_watch_time);
        };
        e.on("playbackheartbeat", function(n, o) {
            return a(o);
        }), e.on("rebufferstart", function(n, o) {
            t || (O(e.data, "view_rebuffer_count", 1), t = o.viewer_time, e.one("rebufferend", i));
        }), e.on("viewinit", function() {
            t = void 0, e.off("rebufferend", i);
        });
    }
}, jt = ha;
var ya = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_lastCheckedTime", void 0), l(this, "_lastPlayheadTime", void 0), l(this, "_lastPlayheadTimeUpdatedTime", void 0), l(this, "_rebuffering", void 0), l(this, "pm", void 0), this.pm = e, !(e.disableRebufferTracking || e.disablePlayheadRebufferTracking) && (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, e.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), e.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), e.on("seeking", function() {
            t._cleanupRebufferTracker(null, {
                viewer_time: A.now()
            });
        }));
    }
    return L(r, [
        {
            key: "_checkIfRebuffering",
            value: function(t, i) {
                if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) {
                    this._cleanupRebufferTracker(t, i);
                    return;
                }
                if (this._lastCheckedTime === null) {
                    this._prepareRebufferTrackerState(i.viewer_time);
                    return;
                }
                if (this._lastPlayheadTime !== this.pm.data.player_playhead_time) {
                    this._cleanupRebufferTracker(t, i, !0);
                    return;
                }
                var a = i.viewer_time - this._lastPlayheadTimeUpdatedTime;
                typeof this.pm.sustainedRebufferThreshold == "number" && a >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = !0, this.pm.emit("rebufferstart", {
                    viewer_time: this._lastPlayheadTimeUpdatedTime
                }))), this._lastCheckedTime = i.viewer_time;
            }
        },
        {
            key: "_clearRebufferTrackerState",
            value: function() {
                this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
            }
        },
        {
            key: "_prepareRebufferTrackerState",
            value: function(t) {
                this._lastCheckedTime = t, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = t;
            }
        },
        {
            key: "_cleanupRebufferTracker",
            value: function(t, i) {
                var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (this._rebuffering) this._rebuffering = !1, this.pm.emit("rebufferend", {
                    viewer_time: i.viewer_time
                });
                else {
                    if (this._lastCheckedTime === null) return;
                    var n = this.pm.data.player_playhead_time - this._lastPlayheadTime, o = i.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    typeof this.pm.minimumRebufferDuration == "number" && n > 0 && o - n > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime
                    }), this.pm.emit("rebufferend", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime + o - n
                    }));
                }
                a ? this._prepareRebufferTrackerState(i.viewer_time) : this._clearRebufferTrackerState();
            }
        }
    ]), r;
}(), Gt = ya;
var ga = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "NAVIGATION_START", void 0), l(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
            var i = e.data, a = i.view_id;
            if (!i.view_program_changed) {
                var n = function(o, s) {
                    var u = s.viewer_time;
                    o.type === "playing" && typeof e.data.view_time_to_first_frame == "undefined" ? t.calculateTimeToFirstFrame(u || A.now(), a) : o.type === "adplaying" && (typeof e.data.view_time_to_first_frame == "undefined" || t._inPrerollPosition()) && t.calculateTimeToFirstFrame(u || A.now(), a);
                };
                e.one("playing", n), e.one("adplaying", n), e.one("viewend", function() {
                    e.off("playing", n), e.off("adplaying", n);
                });
            }
        });
    }
    return L(r, [
        {
            key: "_inPrerollPosition",
            value: function() {
                return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
            }
        },
        {
            key: "calculateTimeToFirstFrame",
            value: function(t, i) {
                i === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, {
                    viewer_time: t
                }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.NAVIGATION_START && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.NAVIGATION_START));
            }
        }
    ]), r;
}(), Jt = ga;
var ba = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "_lastPlayerHeight", void 0), l(this, "_lastPlayerWidth", void 0), l(this, "_lastPlayheadPosition", void 0), l(this, "_lastSourceHeight", void 0), l(this, "_lastSourceWidth", void 0), e.on("viewinit", function() {
        t._lastPlayheadPosition = -1;
    });
    var i = [
        "pause",
        "rebufferstart",
        "seeking",
        "error",
        "adbreakstart",
        "hb",
        "renditionchange",
        "orientationchange",
        "viewend"
    ], a = [
        "playing",
        "hb",
        "renditionchange",
        "orientationchange"
    ];
    i.forEach(function(n) {
        e.on(n, function() {
            if (t._lastPlayheadPosition >= 0 && e.data.player_playhead_time >= 0 && t._lastPlayerWidth >= 0 && t._lastSourceWidth > 0 && t._lastPlayerHeight >= 0 && t._lastSourceHeight > 0) {
                var o = e.data.player_playhead_time - t._lastPlayheadPosition;
                if (o < 0) {
                    t._lastPlayheadPosition = -1;
                    return;
                }
                var s = Math.min(t._lastPlayerWidth / t._lastSourceWidth, t._lastPlayerHeight / t._lastSourceHeight), u = Math.max(0, s - 1), p = Math.max(0, 1 - s);
                e.data.view_max_upscale_percentage = Math.max(e.data.view_max_upscale_percentage || 0, u), e.data.view_max_downscale_percentage = Math.max(e.data.view_max_downscale_percentage || 0, p), O(e.data, "view_total_content_playback_time", o), O(e.data, "view_total_upscaling", u * o), O(e.data, "view_total_downscaling", p * o);
            }
            t._lastPlayheadPosition = -1;
        });
    }), a.forEach(function(n) {
        e.on(n, function() {
            t._lastPlayheadPosition = e.data.player_playhead_time, t._lastPlayerWidth = e.data.player_width, t._lastPlayerHeight = e.data.player_height, t._lastSourceWidth = e.data.video_source_width, t._lastSourceHeight = e.data.video_source_height;
        });
    });
}, Qt = ba;
var Ta = 2e3, wa = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "isSeeking", void 0), this.isSeeking = !1;
    var i = -1, a = function() {
        var n = A.now(), o = (e.data.viewer_time || n) - (i || n);
        O(e.data, "view_seek_duration", o), e.data.view_max_seek_time = Math.max(e.data.view_max_seek_time || 0, o), t.isSeeking = !1, i = -1;
    };
    e.on("seeking", function(n, o) {
        if (Object.assign(e.data, o), t.isSeeking && o.viewer_time - i <= Ta) {
            i = o.viewer_time;
            return;
        }
        t.isSeeking && a(), t.isSeeking = !0, i = o.viewer_time, O(e.data, "view_seek_count", 1), e.send("seeking");
    }), e.on("seeked", function() {
        a();
    }), e.on("viewend", function() {
        t.isSeeking && (a(), e.send("seeked")), t.isSeeking = !1, i = -1;
    });
}, zt = wa;
var Kt = function(e, t) {
    e.push(t), e.sort(function(i, a) {
        return i.viewer_time - a.viewer_time;
    });
}, Ea = [
    "adbreakstart",
    "adrequest",
    "adresponse",
    "adplay",
    "adplaying",
    "adpause",
    "adended",
    "adbreakend",
    "aderror",
    "adclicked",
    "adskipped"
], ka = function() {
    "use strict";
    function r(e) {
        var t = this;
        D(this, r), l(this, "_adHasPlayed", void 0), l(this, "_adRequests", void 0), l(this, "_adResponses", void 0), l(this, "_currentAdRequestNumber", void 0), l(this, "_currentAdResponseNumber", void 0), l(this, "_prerollPlayTime", void 0), l(this, "_wouldBeNewAdPlay", void 0), l(this, "isAdBreak", void 0), l(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
            t.isAdBreak = !1, t._currentAdRequestNumber = 0, t._currentAdResponseNumber = 0, t._adRequests = [], t._adResponses = [], t._adHasPlayed = !1, t._wouldBeNewAdPlay = !0, t._prerollPlayTime = void 0;
        }), Ea.forEach(function(a) {
            return e.on(a, t._updateAdData.bind(t));
        });
        var i = function() {
            t.isAdBreak = !1;
        };
        e.on("adbreakstart", function() {
            t.isAdBreak = !0;
        }), e.on("play", i), e.on("playing", i), e.on("viewend", i), e.on("adrequest", function(a, n) {
            n = Object.assign({
                ad_request_id: "generatedAdRequestId" + t._currentAdRequestNumber++
            }, n), Kt(t._adRequests, n), O(e.data, "view_ad_request_count"), t.inPrerollPosition() && (e.data.view_preroll_requested = !0, t._adHasPlayed || O(e.data, "view_preroll_request_count"));
        }), e.on("adresponse", function(a, n) {
            n = Object.assign({
                ad_request_id: "generatedAdRequestId" + t._currentAdResponseNumber++
            }, n), Kt(t._adResponses, n);
            var o = t.findAdRequest(n.ad_request_id);
            o && O(e.data, "view_ad_request_time", Math.max(0, n.viewer_time - o.viewer_time));
        }), e.on("adplay", function(a, n) {
            t._adHasPlayed = !0, t._wouldBeNewAdPlay && (t._wouldBeNewAdPlay = !1, O(e.data, "view_ad_played_count")), t.inPrerollPosition() && !e.data.view_preroll_played && (e.data.view_preroll_played = !0, t._adRequests.length > 0 && (e.data.view_preroll_request_time = Math.max(0, n.viewer_time - t._adRequests[0].viewer_time)), e.data.view_start && (e.data.view_startup_preroll_request_time = Math.max(0, n.viewer_time - e.data.view_start)), t._prerollPlayTime = n.viewer_time);
        }), e.on("adplaying", function(a, n) {
            t.inPrerollPosition() && typeof e.data.view_preroll_load_time == "undefined" && typeof t._prerollPlayTime != "undefined" && (e.data.view_preroll_load_time = n.viewer_time - t._prerollPlayTime, e.data.view_startup_preroll_load_time = n.viewer_time - t._prerollPlayTime);
        }), e.on("adclicked", function(a, n) {
            t._wouldBeNewAdPlay || O(e.data, "view_ad_clicked_count");
        }), e.on("adskipped", function(a, n) {
            t._wouldBeNewAdPlay || O(e.data, "view_ad_skipped_count");
        }), e.on("adended", function() {
            t._wouldBeNewAdPlay = !0;
        }), e.on("aderror", function() {
            t._wouldBeNewAdPlay = !0;
        });
    }
    return L(r, [
        {
            key: "inPrerollPosition",
            value: function() {
                return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
            }
        },
        {
            key: "findAdRequest",
            value: function(t) {
                for(var i = 0; i < this._adRequests.length; i++)if (this._adRequests[i].ad_request_id === t) return this._adRequests[i];
            }
        },
        {
            key: "_updateAdData",
            value: function(t, i) {
                if (this.inPrerollPosition()) {
                    if (!this.pm.data.view_preroll_ad_tag_hostname && i.ad_tag_url) {
                        var a = H(re(i.ad_tag_url), 2), n = a[0], o = a[1];
                        this.pm.data.view_preroll_ad_tag_domain = o, this.pm.data.view_preroll_ad_tag_hostname = n;
                    }
                    if (!this.pm.data.view_preroll_ad_asset_hostname && i.ad_asset_url) {
                        var s = H(re(i.ad_asset_url), 2), u = s[0], p = s[1];
                        this.pm.data.view_preroll_ad_asset_domain = p, this.pm.data.view_preroll_ad_asset_hostname = u;
                    }
                }
                this.pm.data.ad_asset_url = i == null ? void 0 : i.ad_asset_url, this.pm.data.ad_tag_url = i == null ? void 0 : i.ad_tag_url, this.pm.data.ad_creative_id = i == null ? void 0 : i.ad_creative_id, this.pm.data.ad_id = i == null ? void 0 : i.ad_id, this.pm.data.ad_universal_id = i == null ? void 0 : i.ad_universal_id;
            }
        }
    ]), r;
}(), Yt = ka;
var Qe = V(J());
var xa = function r(e) {
    "use strict";
    D(this, r);
    var t, i, a = function() {
        e.disableRebufferTracking || (O(e.data, "view_waiting_rebuffer_count", 1), t = A.now(), i = Qe.default.setInterval(function() {
            if (t) {
                var p = A.now();
                O(e.data, "view_waiting_rebuffer_duration", p - t), t = p;
            }
        }, 250));
    }, n = function() {
        e.disableRebufferTracking || t && (O(e.data, "view_waiting_rebuffer_duration", A.now() - t), t = !1, Qe.default.clearInterval(i));
    }, o = !1, s = function() {
        o = !0;
    }, u = function() {
        o = !1, n();
    };
    e.on("waiting", function() {
        o && a();
    }), e.on("playing", function() {
        n(), s();
    }), e.on("pause", u), e.on("seeking", u);
}, Xt = xa;
var Da = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "lastWallClockTime", void 0);
    var i = function() {
        t.lastWallClockTime = A.now(), e.on("before*", a);
    }, a = function(n) {
        var o = A.now(), s = t.lastWallClockTime;
        t.lastWallClockTime = o, o - s > 3e4 && (e.emit("devicesleep", {
            viewer_time: s
        }), Object.assign(e.data, {
            viewer_time: s
        }), e.send("devicesleep"), e.emit("devicewake", {
            viewer_time: o
        }), Object.assign(e.data, {
            viewer_time: o
        }), e.send("devicewake"));
    };
    e.one("playbackheartbeat", i), e.on("playbackheartbeatend", function() {
        e.off("before*", a), e.one("playbackheartbeat", i);
    });
}, $t = Da;
var Ue = V(J());
var ze = function(r) {
    return r();
}(function() {
    var r = function() {
        for(var i = 0, a = {}; i < arguments.length; i++){
            var n = arguments[i];
            for(var o in n)a[o] = n[o];
        }
        return a;
    };
    function e(t) {
        function i(a, n, o) {
            var s;
            if (typeof document != "undefined") {
                if (arguments.length > 1) {
                    if (o = r({
                        path: "/"
                    }, i.defaults, o), typeof o.expires == "number") {
                        var u = new Date;
                        u.setMilliseconds(u.getMilliseconds() + o.expires * 864e5), o.expires = u;
                    }
                    try {
                        s = JSON.stringify(n), /^[\{\[]/.test(s) && (n = s);
                    } catch (T) {}
                    return t.write ? n = t.write(n, a) : n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), a = encodeURIComponent(String(a)), a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), a = a.replace(/[\(\)]/g, escape), document.cookie = [
                        a,
                        "=",
                        n,
                        o.expires ? "; expires=" + o.expires.toUTCString() : "",
                        o.path ? "; path=" + o.path : "",
                        o.domain ? "; domain=" + o.domain : "",
                        o.secure ? "; secure" : ""
                    ].join("");
                }
                a || (s = {});
                for(var p = document.cookie ? document.cookie.split("; ") : [], b = /(%[0-9A-Z]{2})+/g, k = 0; k < p.length; k++){
                    var y = p[k].split("="), c = y.slice(1).join("=");
                    c.charAt(0) === '"' && (c = c.slice(1, -1));
                    try {
                        var v1 = y[0].replace(b, decodeURIComponent);
                        if (c = t.read ? t.read(c, v1) : t(c, v1) || c.replace(b, decodeURIComponent), this.json) try {
                            c = JSON.parse(c);
                        } catch (T) {}
                        if (a === v1) {
                            s = c;
                            break;
                        }
                        a || (s[v1] = c);
                    } catch (T) {}
                }
                return s;
            }
        }
        return i.set = i, i.get = function(a) {
            return i.call(i, a);
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments));
        }, i.defaults = {}, i.remove = function(a, n) {
            i(a, "", r(n, {
                expires: -1
            }));
        }, i.withConverter = e, i;
    }
    return e(function() {});
});
var Zt = "muxData", Sa = function(r) {
    return Object.entries(r).map(function(e) {
        var t = H(e, 2), i = t[0], a = t[1];
        return "".concat(i, "=").concat(a);
    }).join("&");
}, Ra = function(r) {
    return r.split("&").reduce(function(e, t) {
        var i = H(t.split("="), 2), a = i[0], n = i[1], o = +n, s = n && o == n ? o : n;
        return e[a] = s, e;
    }, {});
}, er = function() {
    var e;
    try {
        e = Ra(ze.get(Zt) || "");
    } catch (t) {
        e = {};
    }
    return e;
}, tr = function(e) {
    try {
        ze.set(Zt, Sa(e), {
            expires: 365
        });
    } catch (t) {}
}, rr = function() {
    var e = er();
    return e.mux_viewer_id = e.mux_viewer_id || ee(), e.msn = e.msn || Math.random(), tr(e), {
        mux_viewer_id: e.mux_viewer_id,
        mux_sample_number: e.msn
    };
}, ar = function() {
    var e = er(), t = A.now();
    return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = ee(), e.sst = t), e.sex = t + 25 * 60 * 1e3, tr(e), {
        session_id: e.sid,
        session_start: e.sst,
        session_expires: e.sex
    };
};
function Ke(r, e) {
    var t = e.beaconCollectionDomain, i = e.beaconDomain;
    if (t) return "https://" + t;
    r = r || "inferred";
    var a = i || "litix.io";
    return r.match(/^[a-z0-9]+$/) ? "https://" + r + "." + a : "https://img.litix.io/a.gif";
}
var ir = V(J()), nr = function() {
    var e;
    switch(or()){
        case "cellular":
            e = "cellular";
            break;
        case "ethernet":
            e = "wired";
            break;
        case "wifi":
            e = "wifi";
            break;
        case void 0:
            break;
        default:
            e = "other";
    }
    return e;
}, or = function() {
    var e = ir.default.navigator, t = e && (e.connection || e.mozConnection || e.webkitConnection);
    return t && t.type;
};
nr.getConnectionFromAPI = or;
var sr = nr;
var qa = {
    a: "env",
    b: "beacon",
    c: "custom",
    d: "ad",
    e: "event",
    f: "experiment",
    i: "internal",
    m: "mux",
    n: "response",
    p: "player",
    q: "request",
    r: "retry",
    s: "session",
    t: "timestamp",
    u: "viewer",
    v: "video",
    w: "page",
    x: "view",
    y: "sub"
}, Aa = dr(qa), Oa = {
    ad: "ad",
    af: "affiliate",
    ag: "aggregate",
    ap: "api",
    al: "application",
    ao: "audio",
    ar: "architecture",
    as: "asset",
    au: "autoplay",
    av: "average",
    bi: "bitrate",
    bn: "brand",
    br: "break",
    bw: "browser",
    by: "bytes",
    bz: "business",
    ca: "cached",
    cb: "cancel",
    cc: "codec",
    cd: "code",
    cg: "category",
    ch: "changed",
    ci: "client",
    ck: "clicked",
    cl: "canceled",
    cn: "config",
    co: "count",
    ce: "counter",
    cp: "complete",
    cq: "creator",
    cr: "creative",
    cs: "captions",
    ct: "content",
    cu: "current",
    cx: "connection",
    cz: "context",
    dg: "downscaling",
    dm: "domain",
    dn: "cdn",
    do: "downscale",
    dr: "drm",
    dp: "dropped",
    du: "duration",
    dv: "device",
    dy: "dynamic",
    eb: "enabled",
    ec: "encoding",
    ed: "edge",
    en: "end",
    eg: "engine",
    em: "embed",
    er: "error",
    ep: "experiments",
    es: "errorcode",
    et: "errortext",
    ee: "event",
    ev: "events",
    ex: "expires",
    ez: "exception",
    fa: "failed",
    fi: "first",
    fm: "family",
    ft: "format",
    fp: "fps",
    fq: "frequency",
    fr: "frame",
    fs: "fullscreen",
    ha: "has",
    hb: "holdback",
    he: "headers",
    ho: "host",
    hn: "hostname",
    ht: "height",
    id: "id",
    ii: "init",
    in: "instance",
    ip: "ip",
    is: "is",
    ke: "key",
    la: "language",
    lb: "labeled",
    le: "level",
    li: "live",
    ld: "loaded",
    lo: "load",
    ls: "lists",
    lt: "latency",
    ma: "max",
    md: "media",
    me: "message",
    mf: "manifest",
    mi: "mime",
    ml: "midroll",
    mm: "min",
    mn: "manufacturer",
    mo: "model",
    mx: "mux",
    ne: "newest",
    nm: "name",
    no: "number",
    on: "on",
    or: "origin",
    os: "os",
    pa: "paused",
    pb: "playback",
    pd: "producer",
    pe: "percentage",
    pf: "played",
    pg: "program",
    ph: "playhead",
    pi: "plugin",
    pl: "preroll",
    pn: "playing",
    po: "poster",
    pp: "pip",
    pr: "preload",
    ps: "position",
    pt: "part",
    py: "property",
    px: "pop",
    pz: "plan",
    ra: "rate",
    rd: "requested",
    re: "rebuffer",
    rf: "rendition",
    rg: "range",
    rm: "remote",
    ro: "ratio",
    rp: "response",
    rq: "request",
    rs: "requests",
    sa: "sample",
    sd: "skipped",
    se: "session",
    sh: "shift",
    sk: "seek",
    sm: "stream",
    so: "source",
    sq: "sequence",
    sr: "series",
    ss: "status",
    st: "start",
    su: "startup",
    sv: "server",
    sw: "software",
    sy: "severity",
    ta: "tag",
    tc: "tech",
    te: "text",
    tg: "target",
    th: "throughput",
    ti: "time",
    tl: "total",
    to: "to",
    tt: "title",
    ty: "type",
    ug: "upscaling",
    un: "universal",
    up: "upscale",
    ur: "url",
    us: "user",
    va: "variant",
    vd: "viewed",
    vi: "video",
    ve: "version",
    vw: "view",
    vr: "viewer",
    wd: "width",
    wa: "watch",
    wt: "waiting"
}, ur = dr(Oa);
function dr(r) {
    var e = {};
    for(var t in r)r.hasOwnProperty(t) && (e[r[t]] = t);
    return e;
}
function ve(r) {
    var e = {}, t = {};
    return Object.keys(r).forEach(function(i) {
        var a = !1;
        if (r.hasOwnProperty(i) && r[i] !== void 0) {
            var n = i.split("_"), o = n[0], s = Aa[o];
            s || (q.info("Data key word `" + n[0] + "` not expected in " + i), s = o + "_"), n.splice(1).forEach(function(u) {
                u === "url" && (a = !0), ur[u] ? s += ur[u] : Number.isInteger(Number(u)) ? s += u : (q.info("Data key word `" + u + "` not expected in " + i), s += "_" + u + "_");
            }), a ? t[s] = r[i] : e[s] = r[i];
        }
    }), Object.assign(e, t);
}
var ie = V(J()), Lr = V(nt());
var ai = {
    maxBeaconSize: 300,
    maxQueueLength: 3600,
    baseTimeBetweenBeacons: 1e4,
    maxPayloadKBSize: 500
}, ii = 56 * 1024, ni = [
    "hb",
    "requestcompleted",
    "requestfailed",
    "requestcanceled"
], oi = "https://img.litix.io", $ = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this._beaconUrl = e || oi, this._eventQueue = [], this._postInFlight = !1, this._resendAfterPost = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = Object.assign({}, ai, t);
};
$.prototype.queueEvent = function(r, e) {
    var t = Object.assign({}, e);
    return this._eventQueue.length <= this._options.maxQueueLength || r === "eventrateexceeded" ? (this._eventQueue.push(t), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : !1;
};
$.prototype.flushEvents = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (r && this._eventQueue.length === 1) {
        this._eventQueue.pop();
        return;
    }
    this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending();
};
$.prototype.destroy = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    this.destroyed = !0, r ? this._clearBeaconQueue() : this.flushEvents(), ie.default.clearTimeout(this._sendTimeout);
};
$.prototype._clearBeaconQueue = function() {
    var r = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, e = this._eventQueue.slice(r);
    r > 0 && Object.assign(e[e.length - 1], ve({
        mux_view_message: "event queue truncated"
    }));
    var t = this._createPayload(e);
    Cr(this._beaconUrl, t, !0, function() {});
};
$.prototype._sendBeaconQueue = function() {
    var r = this;
    if (this._postInFlight) {
        this._resendAfterPost = !0;
        return;
    }
    var e = this._eventQueue.slice(0, this._options.maxBeaconSize);
    this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0;
    var t = this._createPayload(e), i = A.now();
    Cr(this._beaconUrl, t, !1, function(a, n) {
        n ? (r._eventQueue = e.concat(r._eventQueue), r._failureCount += 1, q.info("Error sending beacon: " + n)) : r._failureCount = 0, r._roundTripTime = A.now() - i, r._postInFlight = !1, r._resendAfterPost && (r._resendAfterPost = !1, r._eventQueue.length > 0 && r._sendBeaconQueue());
    });
};
$.prototype._getNextBeaconTime = function() {
    if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
    var r = Math.pow(2, this._failureCount - 1);
    return r = r * Math.random(), (1 + r) * this._options.baseTimeBetweenBeacons;
};
$.prototype._startBeaconSending = function() {
    var r = this;
    ie.default.clearTimeout(this._sendTimeout), !this.destroyed && (this._sendTimeout = ie.default.setTimeout(function() {
        r._eventQueue.length && r._sendBeaconQueue(), r._startBeaconSending();
    }, this._getNextBeaconTime()));
};
$.prototype._createPayload = function(r) {
    var e = this, t = {
        transmission_timestamp: Math.round(A.now())
    };
    this._roundTripTime && (t.rtt_ms = Math.round(this._roundTripTime));
    var i, a, n, o = function() {
        i = JSON.stringify({
            metadata: t,
            events: a || r
        }), n = i.length / 1024;
    }, s = function() {
        return n <= e._options.maxPayloadKBSize;
    };
    return o(), s() || (q.info("Payload size is too big (" + n + " kb). Removing unnecessary events."), a = r.filter(function(u) {
        return ni.indexOf(u.e) === -1;
    }), o()), s() || (q.info("Payload size still too big (" + n + " kb). Cropping fields.."), a.forEach(function(u) {
        for(var p in u){
            var b = u[p], k = 50 * 1024;
            typeof b == "string" && b.length > k && (u[p] = b.substring(0, k));
        }
    }), o()), i;
};
var si = typeof Lr.default.exitPictureInPicture == "function" ? function(r) {
    return r.length <= ii;
} : function(r) {
    return !1;
}, Cr = function(r, e, t, i) {
    if (t && navigator && navigator.sendBeacon && navigator.sendBeacon(r, e)) {
        i();
        return;
    }
    if (ie.default.fetch) {
        ie.default.fetch(r, {
            method: "POST",
            body: e,
            headers: {
                "Content-Type": "text/plain"
            },
            keepalive: si(e)
        }).then(function(n) {
            return i(null, n.ok ? null : "Error");
        }).catch(function(n) {
            return i(null, n);
        });
        return;
    }
    if (ie.default.XMLHttpRequest) {
        var a = new ie.default.XMLHttpRequest;
        a.onreadystatechange = function() {
            if (a.readyState === 4) return i(null, a.status !== 200 ? "error" : void 0);
        }, a.open("POST", r), a.setRequestHeader("Content-Type", "text/plain"), a.send(e);
        return;
    }
    i();
}, Mr = $;
var ui = [
    "env_key",
    "view_id",
    "view_sequence_number",
    "player_sequence_number",
    "beacon_domain",
    "player_playhead_time",
    "viewer_time",
    "mux_api_version",
    "event",
    "video_id",
    "player_instance_id",
    "player_error_code",
    "player_error_message",
    "player_error_context",
    "player_error_severity",
    "player_error_business_exception"
], di = [
    "adplay",
    "adplaying",
    "adpause",
    "adfirstquartile",
    "admidpoint",
    "adthirdquartile",
    "adended",
    "adresponse",
    "adrequest"
], li = [
    "ad_id",
    "ad_creative_id",
    "ad_universal_id"
], ci = [
    "viewstart",
    "error",
    "ended",
    "viewend"
], _i = 10 * 60 * 1e3, Hr = function() {
    "use strict";
    function r(e, t) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        D(this, r);
        var a, n, o, s, u, p, b, k, y, c, v1, T;
        l(this, "mux", void 0), l(this, "envKey", void 0), l(this, "options", void 0), l(this, "eventQueue", void 0), l(this, "sampleRate", void 0), l(this, "disableCookies", void 0), l(this, "respectDoNotTrack", void 0), l(this, "previousBeaconData", void 0), l(this, "lastEventTime", void 0), l(this, "rateLimited", void 0), l(this, "pageLevelData", void 0), l(this, "viewerData", void 0), this.mux = e, this.envKey = t, this.options = i, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.eventQueue = new Mr(Ke(this.envKey, this.options));
        var x;
        this.sampleRate = (x = this.options.sampleRate) !== null && x !== void 0 ? x : 1;
        var m;
        this.disableCookies = (m = this.options.disableCookies) !== null && m !== void 0 ? m : !1;
        var f;
        this.respectDoNotTrack = (f = this.options.respectDoNotTrack) !== null && f !== void 0 ? f : !1, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.pageLevelData = {
            mux_api_version: this.mux.API_VERSION,
            mux_embed: this.mux.NAME,
            mux_embed_version: this.mux.VERSION,
            viewer_application_name: (a = this.options.platform) === null || a === void 0 ? void 0 : a.name,
            viewer_application_version: (n = this.options.platform) === null || n === void 0 ? void 0 : n.version,
            viewer_application_engine: (o = this.options.platform) === null || o === void 0 ? void 0 : o.layout,
            viewer_device_name: (s = this.options.platform) === null || s === void 0 ? void 0 : s.product,
            viewer_device_category: "",
            viewer_device_manufacturer: (u = this.options.platform) === null || u === void 0 ? void 0 : u.manufacturer,
            viewer_os_family: (b = this.options.platform) === null || b === void 0 || (p = b.os) === null || p === void 0 ? void 0 : p.family,
            viewer_os_architecture: (y = this.options.platform) === null || y === void 0 || (k = y.os) === null || k === void 0 ? void 0 : k.architecture,
            viewer_os_version: (v1 = this.options.platform) === null || v1 === void 0 || (c = v1.os) === null || c === void 0 ? void 0 : c.version,
            viewer_connection_type: sr(),
            page_url: Ue.default === null || Ue.default === void 0 || (T = Ue.default.location) === null || T === void 0 ? void 0 : T.href
        }, this.viewerData = this.disableCookies ? {} : rr();
    }
    return L(r, [
        {
            key: "send",
            value: function(t, i) {
                if (!(!t || !(i != null && i.view_id))) {
                    if (this.respectDoNotTrack && ce()) return q.info("Not sending `" + t + "` because Do Not Track is enabled");
                    if (!i || typeof i != "object") return q.error("A data object was expected in send() but was not provided");
                    var a = this.disableCookies ? {} : ar(), n = fe(ue({}, this.pageLevelData, i, a, this.viewerData), {
                        event: t,
                        env_key: this.envKey
                    });
                    n.user_id && (n.viewer_user_id = n.user_id, delete n.user_id);
                    var o, s = ((o = n.mux_sample_number) !== null && o !== void 0 ? o : 0) >= this.sampleRate, u = this._deduplicateBeaconData(t, n), p = ve(u);
                    if (this.lastEventTime = this.mux.utils.now(), s) return q.info("Not sending event due to sample rate restriction", t, n, p);
                    if (this.envKey || q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", t, n, p), !this.rateLimited) {
                        if (q.info("Sending event", t, n, p), this.rateLimited = !this.eventQueue.queueEvent(t, p), this.mux.WINDOW_UNLOADING && t === "viewend") this.eventQueue.destroy(!0);
                        else if (this.mux.WINDOW_HIDDEN && t === "hb" ? this.eventQueue.flushEvents(!0) : ci.indexOf(t) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return n.event = "eventrateexceeded", p = ve(n), this.eventQueue.queueEvent(n.event, p), q.error("Beaconing disabled due to rate limit.");
                    }
                }
            }
        },
        {
            key: "destroy",
            value: function() {
                this.eventQueue.destroy(!1);
            }
        },
        {
            key: "_deduplicateBeaconData",
            value: function(t, i) {
                var a = this, n = {}, o = i.view_id;
                if (o === "-1" || t === "viewstart" || t === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= _i) n = ue({}, i), o && (this.previousBeaconData = n), o && t === "viewend" && (this.previousBeaconData = null);
                else {
                    var s = t.indexOf("request") === 0;
                    Object.entries(i).forEach(function(u) {
                        var p = H(u, 2), b = p[0], k = p[1];
                        a.previousBeaconData && (k !== a.previousBeaconData[b] || ui.indexOf(b) > -1 || a.objectHasChanged(s, b, k, a.previousBeaconData[b]) || a.eventRequiresKey(t, b)) && (n[b] = k, a.previousBeaconData[b] = k);
                    });
                }
                return n;
            }
        },
        {
            key: "objectHasChanged",
            value: function(t, i, a, n) {
                return !t || i.indexOf("request_") !== 0 ? !1 : i === "request_response_headers" || typeof a != "object" || typeof n != "object" ? !0 : Object.keys(a || {}).length !== Object.keys(n || {}).length;
            }
        },
        {
            key: "eventRequiresKey",
            value: function(t, i) {
                return !!(t === "renditionchange" && i.indexOf("video_source_") === 0 || li.includes(i) && di.includes(t));
            }
        }
    ]), r;
}();
var fi = function r(e) {
    "use strict";
    D(this, r);
    var t = 0, i = 0, a = 0, n = 0, o = 0, s = 0, u = 0, p = function(y, c) {
        var v1 = c.request_start, T = c.request_response_start, x = c.request_response_end, m = c.request_bytes_loaded;
        n++;
        var f, _;
        if (T ? (f = T - (v1 != null ? v1 : 0), _ = (x != null ? x : 0) - T) : _ = (x != null ? x : 0) - (v1 != null ? v1 : 0), _ > 0 && m && m > 0) {
            var d = m / _ * 8e3;
            o++, i += m, a += _, e.data.view_min_request_throughput = Math.min(e.data.view_min_request_throughput || 1 / 0, d), e.data.view_average_request_throughput = i / a * 8e3, e.data.view_request_count = n, f > 0 && (t += f, e.data.view_max_request_latency = Math.max(e.data.view_max_request_latency || 0, f), e.data.view_average_request_latency = t / o);
        }
    }, b = function(y, c) {
        n++, s++, e.data.view_request_count = n, e.data.view_request_failed_count = s;
    }, k = function(y, c) {
        n++, u++, e.data.view_request_count = n, e.data.view_request_canceled_count = u;
    };
    e.on("requestcompleted", p), e.on("requestfailed", b), e.on("requestcanceled", k);
}, Br = fi;
var pi = 60 * 60 * 1e3, vi = function r(e) {
    "use strict";
    var t = this;
    D(this, r), l(this, "_lastEventTime", void 0), e.on("before*", function(i, a) {
        var n = a.viewer_time, o = A.now(), s = t._lastEventTime;
        if (t._lastEventTime = o, s && o - s > pi) {
            var u = Object.keys(e.data).reduce(function(b, k) {
                return k.indexOf("video_") === 0 ? Object.assign(b, l({}, k, e.data[k])) : b;
            }, {});
            e.mux.log.info("Received event after at least an hour inactivity, creating a new view");
            var p = e.playbackHeartbeat._playheadShouldBeProgressing;
            e._resetView(Object.assign({
                viewer_time: n
            }, u)), e.playbackHeartbeat._playheadShouldBeProgressing = p, e.playbackHeartbeat._playheadShouldBeProgressing && i.type !== "play" && i.type !== "adbreakstart" && (e.emit("play", {
                viewer_time: n
            }), i.type !== "playing" && e.emit("playing", {
                viewer_time: n
            }));
        }
    });
}, Ur = vi;
var mi = [
    "viewstart",
    "ended",
    "loadstart",
    "pause",
    "play",
    "playing",
    "ratechange",
    "waiting",
    "adplay",
    "adpause",
    "adended",
    "aderror",
    "adplaying",
    "adrequest",
    "adresponse",
    "adbreakstart",
    "adbreakend",
    "adfirstquartile",
    "admidpoint",
    "adthirdquartile",
    "rebufferstart",
    "rebufferend",
    "seeked",
    "error",
    "hb",
    "requestcompleted",
    "requestfailed",
    "requestcanceled",
    "renditionchange"
], hi = new Set([
    "requestcompleted",
    "requestfailed",
    "requestcanceled"
]), yi = function(r) {
    "use strict";
    Dt(t, r);
    var e = qt(t);
    function t(i, a, n) {
        D(this, t);
        var o;
        o = e.call(this), l(g(o), "DOM_CONTENT_LOADED_EVENT_END", void 0), l(g(o), "NAVIGATION_START", void 0), l(g(o), "_destroyed", void 0), l(g(o), "_heartBeatTimeout", void 0), l(g(o), "adTracker", void 0), l(g(o), "dashjs", void 0), l(g(o), "data", void 0), l(g(o), "disablePlayheadRebufferTracking", void 0), l(g(o), "disableRebufferTracking", void 0), l(g(o), "errorTracker", void 0), l(g(o), "errorTranslator", void 0), l(g(o), "emitTranslator", void 0), l(g(o), "getAdData", void 0), l(g(o), "getPlayheadTime", void 0), l(g(o), "getStateData", void 0), l(g(o), "stateDataTranslator", void 0), l(g(o), "hlsjs", void 0), l(g(o), "id", void 0), l(g(o), "longResumeTracker", void 0), l(g(o), "minimumRebufferDuration", void 0), l(g(o), "mux", void 0), l(g(o), "playbackEventDispatcher", void 0), l(g(o), "playbackHeartbeat", void 0), l(g(o), "playbackHeartbeatTime", void 0), l(g(o), "playheadTime", void 0), l(g(o), "seekingTracker", void 0), l(g(o), "sustainedRebufferThreshold", void 0), l(g(o), "watchTimeTracker", void 0), l(g(o), "currentFragmentPDT", void 0), l(g(o), "currentFragmentStart", void 0), o.DOM_CONTENT_LOADED_EVENT_END = _e.domContentLoadedEventEnd(), o.NAVIGATION_START = _e.navigationStart();
        var s = {
            debug: !1,
            minimumRebufferDuration: 250,
            sustainedRebufferThreshold: 1e3,
            playbackHeartbeatTime: 25,
            beaconDomain: "litix.io",
            sampleRate: 1,
            disableCookies: !1,
            respectDoNotTrack: !1,
            disableRebufferTracking: !1,
            disablePlayheadRebufferTracking: !1,
            errorTranslator: function(y) {
                return y;
            },
            emitTranslator: function() {
                for(var y = arguments.length, c = new Array(y), v1 = 0; v1 < y; v1++)c[v1] = arguments[v1];
                return c;
            },
            stateDataTranslator: function(y) {
                return y;
            }
        };
        o.mux = i, o.id = a, n != null && n.beaconDomain && o.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), n = Object.assign(s, n), n.data = n.data || {}, n.data.property_key && (n.data.env_key = n.data.property_key, delete n.data.property_key), q.level = n.debug ? Y.DEBUG : Y.WARN, o.getPlayheadTime = n.getPlayheadTime, o.getStateData = n.getStateData || function() {
            return {};
        }, o.getAdData = n.getAdData || function() {}, o.minimumRebufferDuration = n.minimumRebufferDuration, o.sustainedRebufferThreshold = n.sustainedRebufferThreshold, o.playbackHeartbeatTime = n.playbackHeartbeatTime, o.disableRebufferTracking = n.disableRebufferTracking, o.disableRebufferTracking && o.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), o.disablePlayheadRebufferTracking = n.disablePlayheadRebufferTracking, o.errorTranslator = n.errorTranslator, o.emitTranslator = n.emitTranslator, o.stateDataTranslator = n.stateDataTranslator, o.playbackEventDispatcher = new Hr(i, n.data.env_key, n), o.data = {
            player_instance_id: ee(),
            mux_sample_rate: n.sampleRate,
            beacon_domain: n.beaconCollectionDomain || n.beaconDomain
        }, o.data.view_sequence_number = 1, o.data.player_sequence_number = 1;
        var u = (function() {
            typeof this.data.view_start == "undefined" && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
        }).bind(g(o));
        if (o.on("viewinit", function(y, c) {
            this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, c), this._initializeViewData(), this.one("play", u), this.one("adbreakstart", u);
        }), o.on("videochange", function(y, c) {
            this._resetView(c);
        }), o.on("programchange", function(y, c) {
            this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), this._resetView(Object.assign(c, {
                view_program_changed: !0
            })), u(), this.emit("play"), this.emit("playing");
        }), o.on("fragmentchange", function(y, c) {
            this.currentFragmentPDT = c.currentFragmentPDT, this.currentFragmentStart = c.currentFragmentStart;
        }), o.on("destroy", o.destroy), ("TURBOPACK compile-time value", "undefined") != "undefined" && typeof window.addEventListener == "function" && typeof window.removeEventListener == "function") {
            var p = function() {
                var y = typeof o.data.view_start != "undefined";
                o.mux.WINDOW_HIDDEN = document.visibilityState === "hidden", y && o.mux.WINDOW_HIDDEN && (o.data.player_is_paused || o.emit("hb"));
            };
            window.addEventListener("visibilitychange", p, !1);
            var b = function(y) {
                y.persisted || o.destroy();
            };
            window.addEventListener("pagehide", b, !1), o.on("destroy", function() {
                window.removeEventListener("visibilitychange", p), window.removeEventListener("pagehide", b);
            });
        }
        o.on("playerready", function(y, c) {
            Object.assign(this.data, c);
        }), mi.forEach(function(y) {
            o.on(y, function(c, v1) {
                y.indexOf("ad") !== 0 && this._updateStateData(), Object.assign(this.data, v1), this._sanitizeData();
            }), o.on("after" + y, function() {
                (y !== "error" || this.errorTracker.viewErrored) && this.send(y);
            });
        }), o.on("viewend", function(y, c) {
            Object.assign(o.data, c);
        });
        var k = function(c) {
            var v1 = this.mux.utils.now();
            this.data.player_init_time && (this.data.player_startup_time = v1 - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
        };
        return o.one("playerready", k), o.longResumeTracker = new Ur(g(o)), o.errorTracker = new Bt(g(o)), new $t(g(o)), o.seekingTracker = new zt(g(o)), o.playheadTime = new Vt(g(o)), o.playbackHeartbeat = new Ht(g(o)), new Qt(g(o)), o.watchTimeTracker = new Ut(g(o)), new Ft(g(o)), o.adTracker = new Yt(g(o)), new Gt(g(o)), new jt(g(o)), new Jt(g(o)), new Xt(g(o)), new Br(g(o)), n.hlsjs && o.addHLSJS(n), n.dashjs && o.addDashJS(n), o.emit("viewinit", n.data), o;
    }
    return L(t, [
        {
            key: "emit",
            value: function(a, n) {
                var o, s = Object.assign({
                    viewer_time: this.mux.utils.now()
                }, n), u = [
                    a,
                    s
                ];
                if (this.emitTranslator) try {
                    u = this.emitTranslator(a, s);
                } catch (p) {
                    this.mux.log.warn("Exception in emit translator callback.", p);
                }
                u != null && u.length && (o = De(X(t.prototype), "emit", this)).call.apply(o, [
                    this
                ].concat(W(u)));
            }
        },
        {
            key: "destroy",
            value: function() {
                this._destroyed || (this._destroyed = !0, typeof this.data.view_start != "undefined" && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
            }
        },
        {
            key: "send",
            value: function(a) {
                if (this.data.view_id) {
                    var n = Object.assign({}, this.data), o = [
                        "player_program_time",
                        "player_manifest_newest_program_time",
                        "player_live_edge_program_time",
                        "player_program_time",
                        "video_holdback",
                        "video_part_holdback",
                        "video_target_duration",
                        "video_part_target_duration"
                    ];
                    if (n.video_source_is_live === void 0 && (n.player_source_duration === 1 / 0 || n.video_source_duration === 1 / 0 ? n.video_source_is_live = !0 : (n.player_source_duration > 0 || n.video_source_duration > 0) && (n.video_source_is_live = !1)), n.video_source_is_live || o.forEach(function(b) {
                        n[b] = void 0;
                    }), n.video_source_url = n.video_source_url || n.player_source_url, n.video_source_url) {
                        var s = H(re(n.video_source_url), 2), u = s[0], p = s[1];
                        n.video_source_domain = p, n.video_source_hostname = u;
                    }
                    delete n.ad_request_id, this.playbackEventDispatcher.send(a, n), this.data.view_sequence_number++, this.data.player_sequence_number++, hi.has(a) || this._restartHeartBeat(), a === "viewend" && delete this.data.view_id;
                }
            }
        },
        {
            key: "_resetView",
            value: function(a) {
                this.emit("viewend"), this.send("viewend"), this.emit("viewinit", a);
            }
        },
        {
            key: "_updateStateData",
            value: function() {
                var a = this.getStateData();
                if (typeof this.stateDataTranslator == "function") try {
                    a = this.stateDataTranslator(a);
                } catch (n) {
                    this.mux.log.warn("Exception in stateDataTranslator translator callback.", n);
                }
                Object.assign(this.data, a), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
            }
        },
        {
            key: "_sanitizeData",
            value: function() {
                var a = this, n = [
                    "player_width",
                    "player_height",
                    "video_source_width",
                    "video_source_height",
                    "player_playhead_time",
                    "video_source_bitrate"
                ];
                n.forEach(function(s) {
                    var u = parseInt(a.data[s], 10);
                    a.data[s] = isNaN(u) ? void 0 : u;
                });
                var o = [
                    "player_source_url",
                    "video_source_url"
                ];
                o.forEach(function(s) {
                    if (a.data[s]) {
                        var u = a.data[s].toLowerCase();
                        (u.indexOf("data:") === 0 || u.indexOf("blob:") === 0) && (a.data[s] = "MSE style URL");
                    }
                });
            }
        },
        {
            key: "_resetVideoData",
            value: function() {
                var a = this;
                Object.keys(this.data).forEach(function(n) {
                    n.indexOf("video_") === 0 && delete a.data[n];
                });
            }
        },
        {
            key: "_resetViewData",
            value: function() {
                var a = this;
                Object.keys(this.data).forEach(function(n) {
                    n.indexOf("view_") === 0 && delete a.data[n];
                }), this.data.view_sequence_number = 1;
            }
        },
        {
            key: "_resetErrorData",
            value: function() {
                delete this.data.player_error_code, delete this.data.player_error_message, delete this.data.player_error_context, delete this.data.player_error_severity, delete this.data.player_error_business_exception;
            }
        },
        {
            key: "_initializeViewData",
            value: function() {
                var a = this, n = this.data.view_id = ee(), o = function() {
                    n === a.data.view_id && O(a.data, "player_view_count", 1);
                };
                this.data.player_is_paused ? this.one("play", o) : o();
            }
        },
        {
            key: "_restartHeartBeat",
            value: function() {
                var a = this;
                window.clearTimeout(this._heartBeatTimeout), this._heartBeatTimeout = window.setTimeout(function() {
                    a.data.player_is_paused || a.emit("hb");
                }, 1e4);
            }
        },
        {
            key: "addHLSJS",
            value: function(a) {
                if (!a.hlsjs) {
                    this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
                    return;
                }
                if (this.hlsjs) {
                    this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");
                    return;
                }
                this.hlsjs = a.hlsjs, Ot(this.mux, this.id, a.hlsjs, {}, a.Hls || window.Hls);
            }
        },
        {
            key: "removeHLSJS",
            value: function() {
                this.hlsjs && (Pt(this.hlsjs), this.hlsjs = void 0);
            }
        },
        {
            key: "addDashJS",
            value: function(a) {
                if (!a.dashjs) {
                    this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                    return;
                }
                if (this.dashjs) {
                    this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");
                    return;
                }
                this.dashjs = a.dashjs, Nt(this.mux, this.id, a.dashjs);
            }
        },
        {
            key: "removeDashJS",
            value: function() {
                this.dashjs && (Lt(this.dashjs), this.dashjs = void 0);
            }
        }
    ]), t;
}(Mt), Fr = yi;
var he = V(nt());
function ot() {
    return he.default && !!(he.default.fullscreenElement || he.default.webkitFullscreenElement || he.default.mozFullScreenElement || he.default.msFullscreenElement);
}
var gi = [
    "loadstart",
    "pause",
    "play",
    "playing",
    "seeking",
    "seeked",
    "timeupdate",
    "ratechange",
    "stalled",
    "waiting",
    "error",
    "ended"
], bi = {
    1: "MEDIA_ERR_ABORTED",
    2: "MEDIA_ERR_NETWORK",
    3: "MEDIA_ERR_DECODE",
    4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
};
function st(r, e, t) {
    var i = H(se(e), 3), a = i[0], n = i[1], o = i[2], s = r.log, u = r.utils.getComputedStyle, p = r.utils.secondsToMs, b = {
        automaticErrorTracking: !0
    };
    if (a) {
        if (o !== "video" && o !== "audio") return s.error("The element of `" + n + "` was not a media element.");
    } else return s.error("No element was found with the `" + n + "` query selector.");
    a.mux && (a.mux.destroy(), delete a.mux, s.warn("Already monitoring this video element, replacing existing event listeners"));
    var k = {
        getPlayheadTime: function() {
            return p(a.currentTime);
        },
        getStateData: function() {
            var v1, T, x, m = ((v1 = (T = this).getPlayheadTime) === null || v1 === void 0 ? void 0 : v1.call(T)) || p(a.currentTime), f = this.hlsjs && this.hlsjs.url, _ = this.dashjs && typeof this.dashjs.getSource == "function" && this.dashjs.getSource(), d = {
                player_is_paused: a.paused,
                player_width: parseInt(u(a, "width")),
                player_height: parseInt(u(a, "height")),
                player_autoplay_on: a.autoplay,
                player_preload_on: a.preload,
                player_language_code: a.lang,
                player_is_fullscreen: ot(),
                video_poster_url: a.poster,
                video_source_url: f || _ || a.currentSrc,
                video_source_duration: p(a.duration),
                video_source_height: a.videoHeight,
                video_source_width: a.videoWidth,
                view_dropped_frame_count: a == null || (x = a.getVideoPlaybackQuality) === null || x === void 0 ? void 0 : x.call(a).droppedVideoFrames
            };
            if (a.getStartDate && m > 0) {
                var h = a.getStartDate();
                if (h && typeof h.getTime == "function" && h.getTime()) {
                    var w = h.getTime();
                    if (d.player_program_time = w + m, a.seekable.length > 0) {
                        var E = w + a.seekable.end(a.seekable.length - 1);
                        d.player_live_edge_program_time = E;
                    }
                }
            }
            return d;
        }
    };
    t = Object.assign(b, t, k), t.data = Object.assign({
        player_software: "HTML5 Video Element",
        player_mux_plugin_name: "VideoElementMonitor",
        player_mux_plugin_version: r.VERSION
    }, t.data), a.mux = a.mux || {}, a.mux.deleted = !1, a.mux.emit = function(c, v1) {
        r.emit(n, c, v1);
    }, a.mux.updateData = function(c) {
        a.mux.emit("hb", c);
    };
    var y = function() {
        s.error("The monitor for this video element has already been destroyed.");
    };
    a.mux.destroy = function() {
        Object.keys(a.mux.listeners).forEach(function(c) {
            a.removeEventListener(c, a.mux.listeners[c], !1);
        }), delete a.mux.listeners, a.mux.destroy = y, a.mux.swapElement = y, a.mux.emit = y, a.mux.addHLSJS = y, a.mux.addDashJS = y, a.mux.removeHLSJS = y, a.mux.removeDashJS = y, a.mux.updateData = y, a.mux.setEmitTranslator = y, a.mux.setStateDataTranslator = y, a.mux.setGetPlayheadTime = y, a.mux.deleted = !0, r.emit(n, "destroy");
    }, a.mux.swapElement = function(c) {
        var v1 = H(se(c), 3), T = v1[0], x = v1[1], m = v1[2];
        if (T) {
            if (m !== "video" && m !== "audio") return r.log.error("The element of `" + x + "` was not a media element.");
        } else return r.log.error("No element was found with the `" + x + "` query selector.");
        T.muxId = a.muxId, delete a.muxId, T.mux = T.mux || {}, T.mux.listeners = Object.assign({}, a.mux.listeners), delete a.mux.listeners, Object.keys(T.mux.listeners).forEach(function(f) {
            a.removeEventListener(f, T.mux.listeners[f], !1), T.addEventListener(f, T.mux.listeners[f], !1);
        }), T.mux.swapElement = a.mux.swapElement, T.mux.destroy = a.mux.destroy, delete a.mux, a = T;
    }, a.mux.addHLSJS = function(c) {
        r.addHLSJS(n, c);
    }, a.mux.addDashJS = function(c) {
        r.addDashJS(n, c);
    }, a.mux.removeHLSJS = function() {
        r.removeHLSJS(n);
    }, a.mux.removeDashJS = function() {
        r.removeDashJS(n);
    }, a.mux.setEmitTranslator = function(c) {
        r.setEmitTranslator(n, c);
    }, a.mux.setStateDataTranslator = function(c) {
        r.setStateDataTranslator(n, c);
    }, a.mux.setGetPlayheadTime = function(c) {
        c || (c = t.getPlayheadTime), r.setGetPlayheadTime(n, c);
    }, r.init(n, t), r.emit(n, "playerready"), a.paused || (r.emit(n, "play"), a.readyState > 2 && r.emit(n, "playing")), a.mux.listeners = {}, gi.forEach(function(c) {
        c === "error" && !t.automaticErrorTracking || (a.mux.listeners[c] = function() {
            var v1 = {};
            if (c === "error") {
                if (!a.error || a.error.code === 1) return;
                v1.player_error_code = a.error.code, v1.player_error_message = bi[a.error.code] || a.error.message;
            }
            r.emit(n, c, v1);
        }, a.addEventListener(c, a.mux.listeners[c], !1));
    });
}
function ut(r, e, t, i) {
    var a = i;
    if (r && typeof r[e] == "function") try {
        a = r[e].apply(r, t);
    } catch (n) {
        q.info("safeCall error", n);
    }
    return a;
}
var ge = V(J()), ye;
ge.default && ge.default.WeakMap && (ye = new WeakMap);
function dt(r, e) {
    if (!r || !e || !ge.default || typeof ge.default.getComputedStyle != "function") return "";
    var t;
    return ye && ye.has(r) && (t = ye.get(r)), t || (t = ge.default.getComputedStyle(r, null), ye && ye.set(r, t)), t.getPropertyValue(e);
}
function lt(r) {
    return Math.floor(r * 1e3);
}
var le = {
    TARGET_DURATION: "#EXT-X-TARGETDURATION",
    PART_INF: "#EXT-X-PART-INF",
    SERVER_CONTROL: "#EXT-X-SERVER-CONTROL",
    INF: "#EXTINF",
    PROGRAM_DATE_TIME: "#EXT-X-PROGRAM-DATE-TIME",
    VERSION: "#EXT-X-VERSION",
    SESSION_DATA: "#EXT-X-SESSION-DATA"
}, Fe = function(e) {
    return this.buffer = "", this.manifest = {
        segments: [],
        serverControl: {},
        sessionData: {}
    }, this.currentUri = {}, this.process(e), this.manifest;
};
Fe.prototype.process = function(r) {
    var e;
    for(this.buffer += r, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1);
};
Fe.prototype.processLine = function(r) {
    var e = r.indexOf(":"), t = ki(r, e), i = t[0], a = t.length === 2 ? _t(t[1]) : void 0;
    if (i[0] !== "#") this.currentUri.uri = i, this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !("duration" in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
    else switch(i){
        case le.TARGET_DURATION:
            {
                if (!isFinite(a) || a < 0) return;
                this.manifest.targetDuration = a, this.setHoldBack();
                break;
            }
        case le.PART_INF:
            {
                ct(this.manifest, t), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                break;
            }
        case le.SERVER_CONTROL:
            {
                ct(this.manifest, t), this.setHoldBack();
                break;
            }
        case le.INF:
            {
                a === 0 ? this.currentUri.duration = .01 : a > 0 && (this.currentUri.duration = a);
                break;
            }
        case le.PROGRAM_DATE_TIME:
            {
                var n = a, o = new Date(n);
                this.manifest.dateTimeString || (this.manifest.dateTimeString = n, this.manifest.dateTimeObject = o), this.currentUri.dateTimeString = n, this.currentUri.dateTimeObject = o;
                break;
            }
        case le.VERSION:
            {
                ct(this.manifest, t);
                break;
            }
        case le.SESSION_DATA:
            {
                var s = xi(t[1]), u = Ce(s);
                Object.assign(this.manifest.sessionData, u);
            }
    }
};
Fe.prototype.setHoldBack = function() {
    var r = this.manifest, e = r.serverControl, t = r.targetDuration, i = r.partTargetDuration;
    if (e) {
        var a = "holdBack", n = "partHoldBack", o = t && t * 3, s = i && i * 2;
        t && !e.hasOwnProperty(a) && (e[a] = o), o && e[a] < o && (e[a] = o), i && !e.hasOwnProperty(n) && (e[n] = i * 3), i && e[n] < s && (e[n] = s);
    }
};
var ct = function(r, e) {
    var t = Vr(e[0].replace("#EXT-X-", "")), i;
    Ei(e[1]) ? (i = {}, i = Object.assign(wi(e[1]), i)) : i = _t(e[1]), r[t] = i;
}, Vr = function(r) {
    return r.toLowerCase().replace(/-(\w)/g, function(e) {
        return e[1].toUpperCase();
    });
}, _t = function(r) {
    if (r.toLowerCase() === "yes" || r.toLowerCase() === "no") return r.toLowerCase() === "yes";
    var e = r.indexOf(":") !== -1 ? r : parseFloat(r);
    return isNaN(e) ? r : e;
}, Ti = function(r) {
    var e = {}, t = r.split("=");
    if (t.length > 1) {
        var i = Vr(t[0]);
        e[i] = _t(t[1]);
    }
    return e;
}, wi = function(r) {
    for(var e = r.split(","), t = {}, i = 0; e.length > i; i++){
        var a = e[i], n = Ti(a);
        t = Object.assign(n, t);
    }
    return t;
}, Ei = function(r) {
    return r.indexOf("=") > -1;
}, ki = function(r, e) {
    return e === -1 ? [
        r
    ] : [
        r.substring(0, e),
        r.substring(e + 1)
    ];
}, xi = function(r) {
    var e = {};
    if (r) {
        var t = r.search(","), i = r.slice(0, t), a = r.slice(t + 1), n = [
            i,
            a
        ];
        return n.forEach(function(o, s) {
            for(var u = o.replace(/['"]+/g, "").split("="), p = 0; p < u.length; p++)u[p] === "DATA-ID" && (e["DATA-ID"] = u[1 - p]), u[p] === "VALUE" && (e.VALUE = u[1 - p]);
        }), {
            data: e
        };
    }
}, Wr = Fe;
var Di = {
    safeCall: ut,
    safeIncrement: O,
    getComputedStyle: dt,
    secondsToMs: lt,
    assign: Object.assign,
    headersStringToObject: pe,
    cdnHeadersToRequestId: de,
    extractHostnameAndDomain: re,
    extractHostname: F,
    manifestParser: Wr,
    generateShortID: Oe,
    generateUUID: ee,
    now: A.now,
    findMediaElement: se
}, jr = Di;
var Si = {
    PLAYER_READY: "playerready",
    VIEW_INIT: "viewinit",
    VIDEO_CHANGE: "videochange",
    PLAY: "play",
    PAUSE: "pause",
    PLAYING: "playing",
    TIME_UPDATE: "timeupdate",
    SEEKING: "seeking",
    SEEKED: "seeked",
    REBUFFER_START: "rebufferstart",
    REBUFFER_END: "rebufferend",
    ERROR: "error",
    ENDED: "ended",
    RENDITION_CHANGE: "renditionchange",
    ORIENTATION_CHANGE: "orientationchange",
    AD_REQUEST: "adrequest",
    AD_RESPONSE: "adresponse",
    AD_BREAK_START: "adbreakstart",
    AD_PLAY: "adplay",
    AD_PLAYING: "adplaying",
    AD_PAUSE: "adpause",
    AD_FIRST_QUARTILE: "adfirstquartile",
    AD_MID_POINT: "admidpoint",
    AD_THIRD_QUARTILE: "adthirdquartile",
    AD_ENDED: "adended",
    AD_BREAK_END: "adbreakend",
    AD_ERROR: "aderror",
    REQUEST_COMPLETED: "requestcompleted",
    REQUEST_FAILED: "requestfailed",
    REQUEST_CANCELLED: "requestcanceled",
    HEARTBEAT: "hb",
    DESTROY: "destroy"
}, Gr = Si;
var Ri = "mux-embed", qi = "5.9.0", Ai = "2.1", C = {}, ne = function(e) {
    var t = arguments;
    typeof e == "string" ? ne.hasOwnProperty(e) ? be.default.setTimeout(function() {
        t = Array.prototype.splice.call(t, 1), ne[e].apply(null, t);
    }, 0) : q.warn("`" + e + "` is an unknown task") : typeof e == "function" ? be.default.setTimeout(function() {
        e(ne);
    }, 0) : q.warn("`" + e + "` is invalid.");
}, Oi = {
    loaded: A.now(),
    NAME: Ri,
    VERSION: qi,
    API_VERSION: Ai,
    PLAYER_TRACKED: !1,
    monitor: function(e, t) {
        return st(ne, e, t);
    },
    destroyMonitor: function(e) {
        var t = H(se(e), 1), i = t[0];
        i && i.mux && typeof i.mux.destroy == "function" ? i.mux.destroy() : q.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
    },
    addHLSJS: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].addHLSJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    addDashJS: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].addDashJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    removeHLSJS: function(e) {
        var t = Q(e);
        C[t] ? C[t].removeHLSJS() : q.error("A monitor for `" + t + "` has not been initialized.");
    },
    removeDashJS: function(e) {
        var t = Q(e);
        C[t] ? C[t].removeDashJS() : q.error("A monitor for `" + t + "` has not been initialized.");
    },
    init: function(e, t) {
        ce() && t && t.respectDoNotTrack && q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
        var i = Q(e);
        C[i] = new Fr(ne, i, t);
    },
    emit: function(e, t, i) {
        var a = Q(e);
        C[a] ? (C[a].emit(t, i), t === "destroy" && delete C[a]) : q.error("A monitor for `" + a + "` has not been initialized.");
    },
    updateData: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].emit("hb", t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setEmitTranslator: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].emitTranslator = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setStateDataTranslator: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].stateDataTranslator = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setGetPlayheadTime: function(e, t) {
        var i = Q(e);
        C[i] ? C[i].getPlayheadTime = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    checkDoNotTrack: ce,
    log: q,
    utils: jr,
    events: Gr,
    WINDOW_HIDDEN: !1,
    WINDOW_UNLOADING: !1
};
Object.assign(ne, Oi);
typeof be.default != "undefined" && typeof be.default.addEventListener == "function" && be.default.addEventListener("pagehide", function(r) {
    r.persisted || (ne.WINDOW_UNLOADING = !0);
}, !1);
var Ed = ne;
;
 /*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/ }),
"[project]/web/node_modules/@mux/playback-core/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoplayTypes",
    ()=>Y,
    "CmcdTypeValues",
    ()=>zt,
    "CmcdTypes",
    ()=>w,
    "ExtensionMimeTypeMap",
    ()=>I,
    "Hls",
    ()=>E,
    "MaxAutoResolution",
    ()=>nr,
    "MaxResolution",
    ()=>er,
    "MediaError",
    ()=>T,
    "MimeTypeShorthandMap",
    ()=>F,
    "MinResolution",
    ()=>tr,
    "MuxErrorCategory",
    ()=>C,
    "MuxErrorCode",
    ()=>b,
    "MuxJWTAud",
    ()=>ce,
    "PlaybackTypes",
    ()=>Q,
    "RenditionOrder",
    ()=>rr,
    "StreamTypes",
    ()=>h,
    "addChapters",
    ()=>Se,
    "addCuePoints",
    ()=>ke,
    "addTextTrack",
    ()=>ae,
    "allMediaTypes",
    ()=>Zt,
    "errorCategoryToTokenNameOrPrefix",
    ()=>W,
    "fetchAndDispatchMuxMetadata",
    ()=>pe,
    "generatePlayerInitTime",
    ()=>jr,
    "generateUUID",
    ()=>It,
    "getActiveChapter",
    ()=>Ne,
    "getActiveCuePoint",
    ()=>Le,
    "getAppCertificate",
    ()=>Yt,
    "getChapters",
    ()=>lt,
    "getCuePoints",
    ()=>dt,
    "getCurrentPdt",
    ()=>ft,
    "getDRMConfig",
    ()=>Wt,
    "getEnded",
    ()=>Ut,
    "getError",
    ()=>Nt,
    "getLicenseKey",
    ()=>Ft,
    "getLiveEdgeStart",
    ()=>zr,
    "getMediaPlaylistFromMultivariantPlaylist",
    ()=>Mt,
    "getMetadata",
    ()=>Gr,
    "getMultivariantPlaylistSessionData",
    ()=>xt,
    "getSeekable",
    ()=>qe,
    "getStartDate",
    ()=>pt,
    "getStreamInfoFromHlsjsLevelDetails",
    ()=>Pt,
    "getStreamInfoFromPlaylist",
    ()=>Dt,
    "getStreamInfoFromSrcAndType",
    ()=>Ct,
    "getStreamType",
    ()=>Ue,
    "getStreamTypeConfig",
    ()=>Kt,
    "getTargetLiveWindow",
    ()=>Xr,
    "getTextTrack",
    ()=>O,
    "i18n",
    ()=>x,
    "initialize",
    ()=>Qr,
    "isKeyOf",
    ()=>H,
    "isMuxVideoSrc",
    ()=>Ze,
    "isPseudoEnded",
    ()=>Ot,
    "isStuckOnLastFragment",
    ()=>Xe,
    "loadMedia",
    ()=>Jt,
    "muxMediaState",
    ()=>P,
    "parseJwt",
    ()=>re,
    "parseTagAttributes",
    ()=>bt,
    "removeTextTrack",
    ()=>ut,
    "setupChapters",
    ()=>we,
    "setupCuePoints",
    ()=>Ae,
    "setupHls",
    ()=>Vt,
    "setupMux",
    ()=>Bt,
    "setupNativeFairplayDRM",
    ()=>$t,
    "shorthandKeys",
    ()=>Qt,
    "teardown",
    ()=>Ht,
    "toAppCertURL",
    ()=>Qe,
    "toDRMTypeFromKeySystem",
    ()=>gt,
    "toLicenseKeyURL",
    ()=>X,
    "toMuxVideoURL",
    ()=>qr,
    "toPlaybackIdFromSrc",
    ()=>je,
    "toPlaybackIdParts",
    ()=>B,
    "updateStreamInfoFromHlsjsLevelDetails",
    ()=>ht,
    "updateStreamInfoFromSrc",
    ()=>vt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/mux-embed/dist/mux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/hls.js/dist/hls.mjs [app-ssr] (ecmascript)");
;
;
var E = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
var C = {
    VIDEO: "video",
    THUMBNAIL: "thumbnail",
    STORYBOARD: "storyboard",
    DRM: "drm"
}, b = {
    NOT_AN_ERROR: 0,
    NETWORK_OFFLINE: 2000002,
    NETWORK_UNKNOWN_ERROR: 2e6,
    NETWORK_NO_STATUS: 2000001,
    NETWORK_INVALID_URL: 24e5,
    NETWORK_NOT_FOUND: 2404e3,
    NETWORK_NOT_READY: 2412e3,
    NETWORK_GENERIC_SERVER_FAIL: 25e5,
    NETWORK_TOKEN_MISSING: 2403201,
    NETWORK_TOKEN_MALFORMED: 2412202,
    NETWORK_TOKEN_EXPIRED: 2403210,
    NETWORK_TOKEN_AUD_MISSING: 2403221,
    NETWORK_TOKEN_AUD_MISMATCH: 2403222,
    NETWORK_TOKEN_SUB_MISMATCH: 2403232,
    ENCRYPTED_ERROR: 5e6,
    ENCRYPTED_UNSUPPORTED_KEY_SYSTEM: 5000001,
    ENCRYPTED_GENERATE_REQUEST_FAILED: 5000002,
    ENCRYPTED_UPDATE_LICENSE_FAILED: 5000003,
    ENCRYPTED_UPDATE_SERVER_CERT_FAILED: 5000004,
    ENCRYPTED_CDM_ERROR: 5000005,
    ENCRYPTED_OUTPUT_RESTRICTED: 5000006,
    ENCRYPTED_MISSING_TOKEN: 5000002
}, W = (e)=>e === C.VIDEO ? "playback" : e, L = class L extends Error {
    constructor(t, r = L.MEDIA_ERR_CUSTOM, n, o){
        var s;
        super(t), this.name = "MediaError", this.code = r, this.context = o, this.fatal = n != null ? n : r >= L.MEDIA_ERR_NETWORK && r <= L.MEDIA_ERR_ENCRYPTED, this.message || (this.message = (s = L.defaultMessages[this.code]) != null ? s : "");
    }
};
L.MEDIA_ERR_ABORTED = 1, L.MEDIA_ERR_NETWORK = 2, L.MEDIA_ERR_DECODE = 3, L.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, L.MEDIA_ERR_ENCRYPTED = 5, L.MEDIA_ERR_CUSTOM = 100, L.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail.",
    3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
    4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
    5: "The media is encrypted and there are no keys to decrypt it."
};
var T = L;
var nt = (e)=>e == null, H = (e, t)=>nt(t) ? !1 : e in t, Y = {
    ANY: "any",
    MUTED: "muted"
}, h = {
    ON_DEMAND: "on-demand",
    LIVE: "live",
    UNKNOWN: "unknown"
}, Q = {
    MSE: "mse",
    NATIVE: "native"
}, w = {
    HEADER: "header",
    QUERY: "query",
    NONE: "none"
}, zt = Object.values(w), I = {
    M3U8: "application/vnd.apple.mpegurl",
    MP4: "video/mp4"
}, F = {
    HLS: I.M3U8
}, Qt = Object.keys(F), Zt = [
    ...Object.values(I),
    "hls",
    "HLS"
], er = {
    upTo720p: "720p",
    upTo1080p: "1080p",
    upTo1440p: "1440p",
    upTo2160p: "2160p"
}, tr = {
    noLessThan480p: "480p",
    noLessThan540p: "540p",
    noLessThan720p: "720p",
    noLessThan1080p: "1080p",
    noLessThan1440p: "1440p",
    noLessThan2160p: "2160p"
}, rr = {
    DESCENDING: "desc"
}, nr = {
    upTo720p: "720p",
    upTo1080p: "1080p",
    upTo1440p: "1440p",
    upTo2160p: "2160p"
};
var ot = "en", $ = {
    code: ot
};
var v = (e, t, r, n, o = e)=>{
    o.addEventListener(t, r, n), e.addEventListener("teardown", ()=>{
        o.removeEventListener(t, r);
    }, {
        once: !0
    });
};
function me(e, t, r) {
    t && r > t && (r = t);
    for(let n = 0; n < e.length; n++)if (e.start(n) <= r && e.end(n) >= r) return !0;
    return !1;
}
var B = (e)=>{
    let t = e.indexOf("?");
    if (t < 0) return [
        e
    ];
    let r = e.slice(0, t), n = e.slice(t);
    return [
        r,
        n
    ];
}, V = (e)=>{
    let { type: t } = e;
    if (t) {
        let r = t.toUpperCase();
        return H(r, F) ? F[r] : t;
    }
    return at(e);
}, ee = (e)=>e === "VOD" ? h.ON_DEMAND : h.LIVE, te = (e)=>e === "EVENT" ? Number.POSITIVE_INFINITY : e === "VOD" ? Number.NaN : 0, at = (e)=>{
    let { src: t } = e;
    if (!t) return "";
    let r = "";
    try {
        r = new URL(t).pathname;
    } catch  {
        console.error("invalid url");
    }
    let n = r.lastIndexOf(".");
    if (n < 0) return it(e) ? I.M3U8 : "";
    let s = r.slice(n + 1).toUpperCase();
    return H(s, I) ? I[s] : "";
}, st = "mux.com", it = ({ src: e, customDomain: t = st })=>{
    let r;
    try {
        r = new URL(`${e}`);
    } catch  {
        return !1;
    }
    let n = r.protocol === "https:", o = r.hostname === `stream.${t}`.toLowerCase(), s = r.pathname.split("/"), a = s.length === 2, i = !(s != null && s[1].includes("."));
    return n && o && a && i;
}, re = (e)=>{
    let t = (e != null ? e : "").split(".")[1];
    if (t) try {
        let r = t.replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(atob(r).split("").map(function(o) {
            return "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(n);
    } catch  {
        return;
    }
}, Ee = ({ exp: e }, t = Date.now())=>!e || e * 1e3 < t, ge = ({ sub: e }, t)=>e !== t, Me = ({ aud: e }, t)=>!e, xe = ({ aud: e }, t)=>e !== t, Re = "en";
function x(e, t = !0) {
    var o, s;
    let r = t && (s = (o = $) == null ? void 0 : o[e]) != null ? s : e, n = t ? $.code : Re;
    return new Z(r, n);
}
var Z = class {
    constructor(t, r = ((n)=>(n = $) != null ? n : Re)()){
        this.message = t, this.locale = r;
    }
    format(t) {
        return this.message.replace(/\{(\w+)\}/g, (r, n)=>{
            var o;
            return (o = t[n]) != null ? o : "";
        });
    }
    toString() {
        return this.message;
    }
};
var ct = Object.values(Y), be = (e)=>typeof e == "boolean" || typeof e == "string" && ct.includes(e), De = (e, t, r)=>{
    let { autoplay: n } = e, o = !1, s = !1, a = be(n) ? n : !!n, i = ()=>{
        o || v(t, "playing", ()=>{
            o = !0;
        }, {
            once: !0
        });
    };
    if (i(), v(t, "loadstart", ()=>{
        o = !1, i(), ne(t, a);
    }, {
        once: !0
    }), v(t, "loadstart", ()=>{
        r || (e.streamType && e.streamType !== h.UNKNOWN ? s = e.streamType === h.LIVE : s = !Number.isFinite(t.duration)), ne(t, a);
    }, {
        once: !0
    }), r && r.once(E.Events.LEVEL_LOADED, (d, l)=>{
        var u;
        e.streamType && e.streamType !== h.UNKNOWN ? s = e.streamType === h.LIVE : s = (u = l.details.live) != null ? u : !1;
    }), !a) {
        let d = ()=>{
            !s || Number.isFinite(e.startTime) || (r != null && r.liveSyncPosition ? t.currentTime = r.liveSyncPosition : Number.isFinite(t.seekable.end(0)) && (t.currentTime = t.seekable.end(0)));
        };
        r && v(t, "play", ()=>{
            t.preload === "metadata" ? r.once(E.Events.LEVEL_UPDATED, d) : d();
        }, {
            once: !0
        });
    }
    return (d)=>{
        o || (a = be(d) ? d : !!d, ne(t, a));
    };
}, ne = (e, t)=>{
    if (!t) return;
    let r = e.muted, n = ()=>e.muted = r;
    switch(t){
        case Y.ANY:
            e.play().catch(()=>{
                e.muted = !0, e.play().catch(n);
            });
            break;
        case Y.MUTED:
            e.muted = !0, e.play().catch(n);
            break;
        default:
            e.play().catch(()=>{});
            break;
    }
};
var Ce = ({ preload: e, src: t }, r, n)=>{
    let o = (u)=>{
        u != null && [
            "",
            "none",
            "metadata",
            "auto"
        ].includes(u) ? r.setAttribute("preload", u) : r.removeAttribute("preload");
    };
    if (!n) return o(e), o;
    let s = !1, a = !1, i = n.config.maxBufferLength, c = n.config.maxBufferSize, d = (u)=>{
        o(u);
        let y = u != null ? u : r.preload;
        a || y === "none" || (y === "metadata" ? (n.config.maxBufferLength = 1, n.config.maxBufferSize = 1) : (n.config.maxBufferLength = i, n.config.maxBufferSize = c), l());
    }, l = ()=>{
        !s && t && (s = !0, n.loadSource(t));
    };
    return v(r, "play", ()=>{
        a = !0, n.config.maxBufferLength = i, n.config.maxBufferSize = c, l();
    }, {
        once: !0
    }), d(e), d;
};
function ve(e, t) {
    var i;
    if (!("videoTracks" in e)) return;
    let r = new WeakMap;
    t.on(E.Events.MANIFEST_PARSED, function(c, d) {
        a();
        let l = e.addVideoTrack("main");
        l.selected = !0;
        for (let [u, y] of d.levels.entries()){
            let m = l.addRendition(y.url[0], y.width, y.height, y.videoCodec, y.bitrate);
            r.set(y, `${u}`), m.id = `${u}`;
        }
    }), t.on(E.Events.AUDIO_TRACKS_UPDATED, function(c, d) {
        s();
        for (let l of d.audioTracks){
            let u = l.default ? "main" : "alternative", y = e.addAudioTrack(u, l.name, l.lang);
            y.id = `${l.id}`, l.default && (y.enabled = !0);
        }
    }), e.audioTracks.addEventListener("change", ()=>{
        var l;
        let c = +((l = [
            ...e.audioTracks
        ].find((u)=>u.enabled)) == null ? void 0 : l.id), d = t.audioTracks.map((u)=>u.id);
        c != t.audioTrack && d.includes(c) && (t.audioTrack = c);
    }), t.on(E.Events.LEVELS_UPDATED, function(c, d) {
        var y;
        let l = e.videoTracks[(y = e.videoTracks.selectedIndex) != null ? y : 0];
        if (!l) return;
        let u = d.levels.map((m)=>r.get(m));
        for (let m of e.videoRenditions)m.id && !u.includes(m.id) && l.removeRendition(m);
    });
    let n = (c)=>{
        let d = c.target.selectedIndex;
        d != t.nextLevel && (t.nextLevel = d);
    };
    (i = e.videoRenditions) == null || i.addEventListener("change", n);
    let o = ()=>{
        for (let c of e.videoTracks)e.removeVideoTrack(c);
    }, s = ()=>{
        for (let c of e.audioTracks)e.removeAudioTrack(c);
    }, a = ()=>{
        o(), s();
    };
    t.once(E.Events.DESTROYING, a);
}
var oe = (e)=>"time" in e ? e.time : e.startTime;
function Pe(e, t) {
    t.on(E.Events.NON_NATIVE_TEXT_TRACKS_FOUND, (o, { tracks: s })=>{
        s.forEach((a)=>{
            var l, u;
            let i = (l = a.subtitleTrack) != null ? l : a.closedCaptions, c = t.subtitleTracks.findIndex(({ lang: y, name: m, type: f })=>y == (i == null ? void 0 : i.lang) && m === a.label && f.toLowerCase() === a.kind), d = ((u = a._id) != null ? u : a.default) ? "default" : `${a.kind}${c}`;
            ae(e, a.kind, a.label, i == null ? void 0 : i.lang, d, a.default);
        });
    });
    let r = ()=>{
        if (!t.subtitleTracks.length) return;
        let o = Array.from(e.textTracks).find((i)=>i.id && i.mode === "showing" && [
                "subtitles",
                "captions"
            ].includes(i.kind));
        if (!o) return;
        let s = t.subtitleTracks[t.subtitleTrack], a = s ? s.default ? "default" : `${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}` : void 0;
        if (t.subtitleTrack < 0 || (o == null ? void 0 : o.id) !== a) {
            let i = t.subtitleTracks.findIndex(({ lang: c, name: d, type: l, default: u })=>o.id === "default" && u || c == o.language && d === o.label && l.toLowerCase() === o.kind);
            t.subtitleTrack = i;
        }
        (o == null ? void 0 : o.id) === a && o.cues && Array.from(o.cues).forEach((i)=>{
            o.addCue(i);
        });
    };
    e.textTracks.addEventListener("change", r), t.on(E.Events.CUES_PARSED, (o, { track: s, cues: a })=>{
        let i = e.textTracks.getTrackById(s);
        if (!i) return;
        let c = i.mode === "disabled";
        c && (i.mode = "hidden"), a.forEach((d)=>{
            var l;
            (l = i.cues) != null && l.getCueById(d.id) || i.addCue(d);
        }), c && (i.mode = "disabled");
    }), t.once(E.Events.DESTROYING, ()=>{
        e.textTracks.removeEventListener("change", r), e.querySelectorAll("track[data-removeondestroy]").forEach((s)=>{
            s.remove();
        });
    });
    let n = ()=>{
        Array.from(e.textTracks).forEach((o)=>{
            var s, a;
            if (![
                "subtitles",
                "caption"
            ].includes(o.kind) && (o.label === "thumbnails" || o.kind === "chapters")) {
                if (!((s = o.cues) != null && s.length)) {
                    let i = "track";
                    o.kind && (i += `[kind="${o.kind}"]`), o.label && (i += `[label="${o.label}"]`);
                    let c = e.querySelector(i), d = (a = c == null ? void 0 : c.getAttribute("src")) != null ? a : "";
                    c == null || c.removeAttribute("src"), setTimeout(()=>{
                        c == null || c.setAttribute("src", d);
                    }, 0);
                }
                o.mode !== "hidden" && (o.mode = "hidden");
            }
        });
    };
    t.once(E.Events.MANIFEST_LOADED, n), t.once(E.Events.MEDIA_ATTACHED, n);
}
function ae(e, t, r, n, o, s) {
    let a = document.createElement("track");
    return a.kind = t, a.label = r, n && (a.srclang = n), o && (a.id = o), s && (a.default = !0), a.track.mode = [
        "subtitles",
        "captions"
    ].includes(t) ? "disabled" : "hidden", a.setAttribute("data-removeondestroy", ""), e.append(a), a.track;
}
function ut(e, t) {
    let r = Array.prototype.find.call(e.querySelectorAll("track"), (n)=>n.track === t);
    r == null || r.remove();
}
function O(e, t, r) {
    var n;
    return (n = Array.from(e.querySelectorAll("track")).find((o)=>o.track.label === t && o.track.kind === r)) == null ? void 0 : n.track;
}
async function he(e, t, r, n) {
    let o = O(e, r, n);
    return o || (o = ae(e, n, r), o.mode = "hidden", await new Promise((s)=>setTimeout(()=>s(void 0), 0))), o.mode !== "hidden" && (o.mode = "hidden"), [
        ...t
    ].sort((s, a)=>oe(a) - oe(s)).forEach((s)=>{
        var c, d;
        let a = s.value, i = oe(s);
        if ("endTime" in s && s.endTime != null) o == null || o.addCue(new VTTCue(i, s.endTime, n === "chapters" ? a : JSON.stringify(a != null ? a : null)));
        else {
            let l = Array.prototype.findIndex.call(o == null ? void 0 : o.cues, (f)=>f.startTime >= i), u = (c = o == null ? void 0 : o.cues) == null ? void 0 : c[l], y = u ? u.startTime : Number.isFinite(e.duration) ? e.duration : Number.MAX_SAFE_INTEGER, m = (d = o == null ? void 0 : o.cues) == null ? void 0 : d[l - 1];
            m && (m.endTime = i), o == null || o.addCue(new VTTCue(i, y, n === "chapters" ? a : JSON.stringify(a != null ? a : null)));
        }
    }), e.textTracks.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), o;
}
var se = "cuepoints", _e = Object.freeze({
    label: se
});
async function ke(e, t, r = _e) {
    return he(e, t, r.label, "metadata");
}
var J = (e)=>({
        time: e.startTime,
        value: JSON.parse(e.text)
    });
function dt(e, t = {
    label: se
}) {
    let r = O(e, t.label, "metadata");
    return r != null && r.cues ? Array.from(r.cues, (n)=>J(n)) : [];
}
function Le(e, t = {
    label: se
}) {
    var s, a;
    let r = O(e, t.label, "metadata");
    if (!((s = r == null ? void 0 : r.activeCues) != null && s.length)) return;
    if (r.activeCues.length === 1) return J(r.activeCues[0]);
    let { currentTime: n } = e, o = Array.prototype.find.call((a = r.activeCues) != null ? a : [], ({ startTime: i, endTime: c })=>i <= n && c > n);
    return J(o || r.activeCues[0]);
}
async function Ae(e, t = _e) {
    return new Promise((r)=>{
        v(e, "loadstart", async ()=>{
            let n = await ke(e, [], t);
            v(e, "cuechange", ()=>{
                let o = Le(e);
                if (o) {
                    let s = new CustomEvent("cuepointchange", {
                        composed: !0,
                        bubbles: !0,
                        detail: o
                    });
                    e.dispatchEvent(s);
                }
            }, {}, n), r(n);
        });
    });
}
var ie = "chapters", Ie = Object.freeze({
    label: ie
}), j = (e)=>({
        startTime: e.startTime,
        endTime: e.endTime,
        value: e.text
    });
async function Se(e, t, r = Ie) {
    return he(e, t, r.label, "chapters");
}
function lt(e, t = {
    label: ie
}) {
    var n;
    let r = O(e, t.label, "chapters");
    return (n = r == null ? void 0 : r.cues) != null && n.length ? Array.from(r.cues, (o)=>j(o)) : [];
}
function Ne(e, t = {
    label: ie
}) {
    var s, a;
    let r = O(e, t.label, "chapters");
    if (!((s = r == null ? void 0 : r.activeCues) != null && s.length)) return;
    if (r.activeCues.length === 1) return j(r.activeCues[0]);
    let { currentTime: n } = e, o = Array.prototype.find.call((a = r.activeCues) != null ? a : [], ({ startTime: i, endTime: c })=>i <= n && c > n);
    return j(o || r.activeCues[0]);
}
async function we(e, t = Ie) {
    return new Promise((r)=>{
        v(e, "loadstart", async ()=>{
            let n = await Se(e, [], t);
            v(e, "cuechange", ()=>{
                let o = Ne(e);
                if (o) {
                    let s = new CustomEvent("chapterchange", {
                        composed: !0,
                        bubbles: !0,
                        detail: o
                    });
                    e.dispatchEvent(s);
                }
            }, {}, n), r(n);
        });
    });
}
function pt(e, t) {
    if (t) {
        let r = t.playingDate;
        if (r != null) return new Date(r.getTime() - e.currentTime * 1e3);
    }
    return typeof e.getStartDate == "function" ? e.getStartDate() : new Date(NaN);
}
function ft(e, t) {
    if (t && t.playingDate) return t.playingDate;
    if (typeof e.getStartDate == "function") {
        let r = e.getStartDate();
        return new Date(r.getTime() + e.currentTime * 1e3);
    }
    return new Date(NaN);
}
var ce = {
    VIDEO: "v",
    THUMBNAIL: "t",
    STORYBOARD: "s",
    DRM: "d"
}, Tt = (e)=>{
    if (e === C.VIDEO) return ce.VIDEO;
    if (e === C.DRM) return ce.DRM;
}, yt = (e, t)=>{
    var o, s;
    let r = W(e), n = `${r}Token`;
    return (o = t.tokens) != null && o[r] ? (s = t.tokens) == null ? void 0 : s[r] : H(n, t) ? t[n] : void 0;
}, K = (e, t, r, n, o = !1, s = !((a)=>(a = globalThis.navigator) == null ? void 0 : a.onLine)())=>{
    var M, k;
    if (s) {
        let R = x("Your device appears to be offline", o), D = void 0, p = T.MEDIA_ERR_NETWORK, _ = new T(R, p, !1, D);
        return _.errorCategory = t, _.muxCode = b.NETWORK_OFFLINE, _.data = e, _;
    }
    let i = "status" in e ? e.status : e.code, c = Date.now(), d = T.MEDIA_ERR_NETWORK;
    if (i === 200) return;
    let l = W(t), u = yt(t, r), y = Tt(t), [m] = B((M = r.playbackId) != null ? M : "");
    if (!i || !m) return;
    let f = re(u);
    if (u && !f) {
        let R = x("The {tokenNamePrefix}-token provided is invalid or malformed.", o).format({
            tokenNamePrefix: l
        }), D = x("Compact JWT string: {token}", o).format({
            token: u
        }), p = new T(R, d, !0, D);
        return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_MALFORMED, p.data = e, p;
    }
    if (i >= 500) {
        let R = new T("", d, n != null ? n : !0);
        return R.errorCategory = t, R.muxCode = b.NETWORK_UNKNOWN_ERROR, R;
    }
    if (i === 403) if (f) {
        if (Ee(f, c)) {
            let R = {
                timeStyle: "medium",
                dateStyle: "medium"
            }, D = x("The video\u2019s secured {tokenNamePrefix}-token has expired.", o).format({
                tokenNamePrefix: l
            }), p = x("Expired at: {expiredDate}. Current time: {currentDate}.", o).format({
                expiredDate: new Intl.DateTimeFormat("en", R).format((k = f.exp) != null ? k : 0 * 1e3),
                currentDate: new Intl.DateTimeFormat("en", R).format(c)
            }), _ = new T(D, d, !0, p);
            return _.errorCategory = t, _.muxCode = b.NETWORK_TOKEN_EXPIRED, _.data = e, _;
        }
        if (ge(f, m)) {
            let R = x("The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", o).format({
                tokenNamePrefix: l
            }), D = x("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}", o).format({
                tokenNamePrefix: l,
                playbackId: m,
                tokenPlaybackId: f.sub
            }), p = new T(R, d, !0, D);
            return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_SUB_MISMATCH, p.data = e, p;
        }
        if (Me(f, y)) {
            let R = x("The {tokenNamePrefix}-token is formatted with incorrect information.", o).format({
                tokenNamePrefix: l
            }), D = x("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.", o).format({
                tokenNamePrefix: l,
                expectedAud: y
            }), p = new T(R, d, !0, D);
            return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_AUD_MISSING, p.data = e, p;
        }
        if (xe(f, y)) {
            let R = x("The {tokenNamePrefix}-token is formatted with incorrect information.", o).format({
                tokenNamePrefix: l
            }), D = x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.", o).format({
                tokenNamePrefix: l,
                expectedAud: y,
                aud: f.aud
            }), p = new T(R, d, !0, D);
            return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_AUD_MISMATCH, p.data = e, p;
        }
    } else {
        let R = x("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.", o).format({
            tokenNamePrefix: l,
            category: t
        }), D = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, D);
        return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_MISSING, p.data = e, p;
    }
    if (i === 412) {
        let R = x("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.", o), D = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, D);
        return p.errorCategory = t, p.muxCode = b.NETWORK_NOT_READY, p.streamType = r.streamType === h.LIVE ? "live" : r.streamType === h.ON_DEMAND ? "on-demand" : "unknown", p.data = e, p;
    }
    if (i === 404) {
        let R = x("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.", o), D = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, D);
        return p.errorCategory = t, p.muxCode = b.NETWORK_NOT_FOUND, p.data = e, p;
    }
    if (i === 400) {
        let R = x("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."), D = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, D);
        return p.errorCategory = t, p.muxCode = b.NETWORK_INVALID_URL, p.data = e, p;
    }
    let g = new T("", d, n != null ? n : !0);
    return g.errorCategory = t, g.muxCode = b.NETWORK_UNKNOWN_ERROR, g.data = e, g;
};
var Oe = E.DefaultConfig.capLevelController, mt = {
    "720p": 921600,
    "1080p": 2073600,
    "1440p": 4194304,
    "2160p": 8294400
};
function Et(e) {
    let t = e.toLowerCase().trim();
    return mt[t];
}
var N = class N extends Oe {
    constructor(t){
        super(t);
    }
    static setMaxAutoResolution(t, r) {
        r ? N.maxAutoResolution.set(t, r) : N.maxAutoResolution.delete(t);
    }
    getMaxAutoResolution() {
        var r;
        let t = this.hls;
        return (r = N.maxAutoResolution.get(t)) != null ? r : void 0;
    }
    get levels() {
        var t;
        return (t = this.hls.levels) != null ? t : [];
    }
    getValidLevels(t) {
        return this.levels.filter((r, n)=>this.isLevelAllowed(r) && n <= t);
    }
    getMaxLevelCapped(t) {
        let r = this.getValidLevels(t), n = this.getMaxAutoResolution();
        if (!n) return super.getMaxLevel(t);
        let o = Et(n);
        if (!o) return super.getMaxLevel(t);
        let s = r.filter((c)=>c.width * c.height <= o), a = s.findIndex((c)=>c.width * c.height === o);
        if (a !== -1) {
            let c = s[a];
            return r.findIndex((d)=>d === c);
        }
        if (s.length === 0) return 0;
        let i = s[s.length - 1];
        return r.findIndex((c)=>c === i);
    }
    getMaxLevel(t) {
        if (this.getMaxAutoResolution() !== void 0) return this.getMaxLevelCapped(t);
        let r = super.getMaxLevel(t), n = this.getValidLevels(t);
        if (!n[r]) return r;
        let o = Math.min(n[r].width, n[r].height), s = N.minMaxResolution;
        return o >= s ? r : Oe.getMaxLevelByMediaSize(n, s * (16 / 9), s);
    }
};
N.minMaxResolution = 720, N.maxAutoResolution = new WeakMap;
var ue = N, q = ue;
var G = {
    FAIRPLAY: "fairplay",
    PLAYREADY: "playready",
    WIDEVINE: "widevine"
}, gt = (e)=>{
    if (e.includes("fps")) return G.FAIRPLAY;
    if (e.includes("playready")) return G.PLAYREADY;
    if (e.includes("widevine")) return G.WIDEVINE;
}, Mt = (e)=>{
    let t = e.split(`
`).find((r, n, o)=>n && o[n - 1].startsWith("#EXT-X-STREAM-INF"));
    return fetch(t).then((r)=>r.status !== 200 ? Promise.reject(r) : r.text());
}, xt = (e)=>{
    let t = e.split(`
`).filter((n)=>n.startsWith("#EXT-X-SESSION-DATA"));
    if (!t.length) return {};
    let r = {};
    for (let n of t){
        let o = bt(n), s = o["DATA-ID"];
        s && (r[s] = {
            ...o
        });
    }
    return {
        sessionData: r
    };
}, Rt = /([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;
function bt(e) {
    let t = [
        ...e.matchAll(Rt)
    ];
    return Object.fromEntries(t.map(([, r, n])=>[
            r,
            n
        ]));
}
var Dt = (e)=>{
    var i, c, d;
    let t = e.split(`
`), n = (c = ((i = t.find((l)=>l.startsWith("#EXT-X-PLAYLIST-TYPE"))) != null ? i : "").split(":")[1]) == null ? void 0 : c.trim(), o = ee(n), s = te(n), a;
    if (o === h.LIVE) {
        let l = t.find((y)=>y.startsWith("#EXT-X-PART-INF"));
        if (!!l) a = +l.split(":")[1].split("=")[1] * 2;
        else {
            let y = t.find((g)=>g.startsWith("#EXT-X-TARGETDURATION")), m = (d = y == null ? void 0 : y.split(":")) == null ? void 0 : d[1];
            a = +(m != null ? m : 6) * 3;
        }
    }
    return {
        streamType: o,
        targetLiveWindow: s,
        liveEdgeStartOffset: a
    };
}, Ct = async (e, t)=>{
    if (t === I.MP4) return {
        streamType: h.ON_DEMAND,
        targetLiveWindow: Number.NaN,
        liveEdgeStartOffset: void 0,
        sessionData: void 0
    };
    if (t === I.M3U8) {
        let r = await fetch(e);
        if (!r.ok) return Promise.reject(r);
        let n = await r.text(), o = await Mt(n);
        return {
            ...xt(n),
            ...Dt(o)
        };
    }
    return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`), {
        streamType: void 0,
        targetLiveWindow: void 0,
        liveEdgeStartOffset: void 0,
        sessionData: void 0
    };
}, vt = async (e, t, r = V({
    src: e
}))=>{
    var c, d, l, u;
    let { streamType: n, targetLiveWindow: o, liveEdgeStartOffset: s, sessionData: a } = await Ct(e, r), i = a == null ? void 0 : a["com.apple.hls.chapters"];
    (i != null && i.URI || i != null && i.VALUE.toLocaleLowerCase().startsWith("http")) && pe((c = i.URI) != null ? c : i.VALUE, t), ((d = P.get(t)) != null ? d : {}).liveEdgeStartOffset = s, ((l = P.get(t)) != null ? l : {}).targetLiveWindow = o, t.dispatchEvent(new CustomEvent("targetlivewindowchange", {
        composed: !0,
        bubbles: !0
    })), ((u = P.get(t)) != null ? u : {}).streamType = n, t.dispatchEvent(new CustomEvent("streamtypechange", {
        composed: !0,
        bubbles: !0
    }));
}, pe = async (e, t)=>{
    var r, n;
    try {
        let o = await fetch(e);
        if (!o.ok) throw new Error(`Failed to fetch Mux metadata: ${o.status} ${o.statusText}`);
        let s = await o.json(), a = {};
        if (!((r = s == null ? void 0 : s[0]) != null && r.metadata)) return;
        for (let c of s[0].metadata)c.key && c.value && (a[c.key] = c.value);
        ((n = P.get(t)) != null ? n : {}).metadata = a;
        let i = new CustomEvent("muxmetadata");
        t.dispatchEvent(i);
    } catch (o) {
        console.error(o);
    }
}, Pt = (e)=>{
    var a;
    let t = e.type, r = ee(t), n = te(t), o, s = !!((a = e.partList) != null && a.length);
    return r === h.LIVE && (o = s ? e.partTarget * 2 : e.targetduration * 3), {
        streamType: r,
        targetLiveWindow: n,
        liveEdgeStartOffset: o,
        lowLatency: s
    };
}, ht = (e, t, r)=>{
    var i, c, d, l, u, y, m, f;
    let { streamType: n, targetLiveWindow: o, liveEdgeStartOffset: s, lowLatency: a } = Pt(e);
    if (n === h.LIVE) {
        a ? (r.config.backBufferLength = (i = r.userConfig.backBufferLength) != null ? i : 4, r.config.maxFragLookUpTolerance = (c = r.userConfig.maxFragLookUpTolerance) != null ? c : .001, r.config.abrBandWidthUpFactor = (d = r.userConfig.abrBandWidthUpFactor) != null ? d : r.config.abrBandWidthFactor) : r.config.backBufferLength = (l = r.userConfig.backBufferLength) != null ? l : 8;
        let g = Object.freeze({
            get length () {
                return t.seekable.length;
            },
            start (M) {
                return t.seekable.start(M);
            },
            end (M) {
                var k;
                return M > this.length || M < 0 || Number.isFinite(t.duration) ? t.seekable.end(M) : (k = r.liveSyncPosition) != null ? k : t.seekable.end(M);
            }
        });
        ((u = P.get(t)) != null ? u : {}).seekable = g;
    }
    ((y = P.get(t)) != null ? y : {}).liveEdgeStartOffset = s, ((m = P.get(t)) != null ? m : {}).targetLiveWindow = o, t.dispatchEvent(new CustomEvent("targetlivewindowchange", {
        composed: !0,
        bubbles: !0
    })), ((f = P.get(t)) != null ? f : {}).streamType = n, t.dispatchEvent(new CustomEvent("streamtypechange", {
        composed: !0,
        bubbles: !0
    }));
}, He, Ve, Be = (Ve = (He = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : He.userAgent) != null ? Ve : "", Ke, We, Ye, _t = (Ye = (We = (Ke = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : Ke.userAgentData) == null ? void 0 : We.platform) != null ? Ye : "", kt = Be.toLowerCase().includes("android") || [
    "x11",
    "android"
].some((e)=>_t.toLowerCase().includes(e)), Lt = (e)=>/^((?!chrome|android).)*safari/i.test(Be) && !!e.canPlayType("application/vnd.apple.mpegurl"), P = new WeakMap, S = "mux.com", Fe, $e, Je = ($e = (Fe = E).isSupported) == null ? void 0 : $e.call(Fe), At = (e)=>kt || !Lt(e), jr = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}, It = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].utils.generateUUID, qr = ({ playbackId: e, customDomain: t = S, maxResolution: r, minResolution: n, renditionOrder: o, programStartTime: s, programEndTime: a, assetStartTime: i, assetEndTime: c, playbackToken: d, tokens: { playback: l = d } = {}, extraSourceParams: u = {} } = {})=>{
    if (!e) return;
    let [y, m = ""] = B(e), f = new URL(`https://stream.${t}/${y}.m3u8${m}`);
    return l || f.searchParams.has("token") ? (f.searchParams.forEach((g, M)=>{
        M != "token" && f.searchParams.delete(M);
    }), l && f.searchParams.set("token", l)) : (r && f.searchParams.set("max_resolution", r), n && (f.searchParams.set("min_resolution", n), r && +r.slice(0, -1) < +n.slice(0, -1) && console.error("minResolution must be <= maxResolution", "minResolution", n, "maxResolution", r)), o && f.searchParams.set("rendition_order", o), s && f.searchParams.set("program_start_time", `${s}`), a && f.searchParams.set("program_end_time", `${a}`), i && f.searchParams.set("asset_start_time", `${i}`), c && f.searchParams.set("asset_end_time", `${c}`), Object.entries(u).forEach(([g, M])=>{
        M != null && f.searchParams.set(g, M);
    })), f.toString();
}, z = (e)=>{
    if (!e) return;
    let [t] = e.split("?");
    return t || void 0;
}, je = (e)=>{
    if (!e || !e.startsWith("https://stream.")) return;
    let [t] = new URL(e).pathname.slice(1).split(/\.m3u8|\//);
    return t || void 0;
}, St = (e)=>{
    var t, r, n;
    return (t = e == null ? void 0 : e.metadata) != null && t.video_id ? e.metadata.video_id : Ze(e) && (n = (r = z(e.playbackId)) != null ? r : je(e.src)) != null ? n : e.src;
}, Nt = (e)=>{
    var t;
    return (t = P.get(e)) == null ? void 0 : t.error;
}, Gr = (e)=>{
    var t;
    return (t = P.get(e)) == null ? void 0 : t.metadata;
}, Ue = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.streamType) != null ? r : h.UNKNOWN;
}, Xr = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.targetLiveWindow) != null ? r : Number.NaN;
}, qe = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.seekable) != null ? r : e.seekable;
}, zr = (e)=>{
    var n;
    let t = (n = P.get(e)) == null ? void 0 : n.liveEdgeStartOffset;
    if (typeof t != "number") return Number.NaN;
    let r = qe(e);
    return r.length ? r.end(r.length - 1) - t : Number.NaN;
}, fe = .034, wt = (e, t, r = fe)=>Math.abs(e - t) <= r, Ge = (e, t, r = fe)=>e > t || wt(e, t, r), Ot = (e, t = fe)=>e.paused && Ge(e.currentTime, e.duration, t), Xe = (e, t)=>{
    var d, l, u;
    if (!t || !e.buffered.length) return;
    if (e.readyState > 2) return !1;
    let r = t.currentLevel >= 0 ? (l = (d = t.levels) == null ? void 0 : d[t.currentLevel]) == null ? void 0 : l.details : (u = t.levels.find((y)=>!!y.details)) == null ? void 0 : u.details;
    if (!r || r.live) return;
    let { fragments: n } = r;
    if (!(n != null && n.length)) return;
    if (e.currentTime < e.duration - (r.targetduration + .5)) return !1;
    let o = n[n.length - 1];
    if (e.currentTime <= o.start) return !1;
    let s = o.start + o.duration / 2, a = e.buffered.start(e.buffered.length - 1), i = e.buffered.end(e.buffered.length - 1);
    return s > a && s < i;
}, Ut = (e, t)=>e.ended || e.loop ? e.ended : t && Xe(e, t) ? !0 : Ot(e), Qr = (e, t, r)=>{
    Ht(t, r, e);
    let { metadata: n = {} } = e, { view_session_id: o = It() } = n, s = St(e);
    n.view_session_id = o, n.video_id = s, e.metadata = n;
    let a = (l)=>{
        var u;
        (u = t.mux) == null || u.emit("hb", {
            view_drm_type: l
        });
    };
    e.drmTypeCb = a, P.set(t, {
        retryCount: 0
    });
    let i = Vt(e, t), c = Ce(e, t, i);
    e != null && e.muxDataKeepSession && t != null && t.mux && !t.mux.deleted ? i && t.mux.addHLSJS({
        hlsjs: i,
        Hls: i ? E : void 0
    }) : Bt(e, t, i), Jt(e, t, i), Ae(t), we(t);
    let d = De(e, t, i);
    return {
        engine: i,
        setAutoplay: d,
        setPreload: c
    };
}, Ht = (e, t, r)=>{
    let n = t == null ? void 0 : t.engine;
    e != null && e.mux && !e.mux.deleted && (r != null && r.muxDataKeepSession ? n && e.mux.removeHLSJS() : (e.mux.destroy(), delete e.mux)), n && (n.detachMedia(), n.destroy()), e && (e.hasAttribute("src") && (e.removeAttribute("src"), e.load()), e.removeEventListener("error", tt), e.removeEventListener("error", de), e.removeEventListener("durationchange", et), P.delete(e), e.dispatchEvent(new Event("teardown")));
};
function ze(e, t) {
    var d;
    let r = V(e);
    if (!(r === I.M3U8)) return !0;
    let o = !r || ((d = t.canPlayType(r)) != null ? d : !0), { preferPlayback: s } = e, a = s === Q.MSE, i = s === Q.NATIVE, c = Je && (a || At(t));
    return o && (i || !c);
}
var Vt = (e, t)=>{
    let { debug: r, streamType: n, startTime: o = -1, metadata: s, preferCmcd: a, _hlsConfig: i = {}, maxAutoResolution: c } = e, l = V(e) === I.M3U8, u = ze(e, t);
    if (l && !u && Je) {
        let y = {
            backBufferLength: 30,
            renderTextTracksNatively: !1,
            liveDurationInfinity: !0,
            capLevelToPlayerSize: !0,
            capLevelOnFPSDrop: !0
        }, m = Kt(n), f = Wt(e), g = [
            w.QUERY,
            w.HEADER
        ].includes(a) ? {
            useHeaders: a === w.HEADER,
            sessionId: s == null ? void 0 : s.view_session_id,
            contentId: s == null ? void 0 : s.video_id
        } : void 0, M = i.capLevelToPlayerSize == null ? {
            capLevelController: q
        } : {}, k = new E({
            debug: r,
            startPosition: o,
            cmcd: g,
            xhrSetup: (R, D)=>{
                var U, Te;
                if (a && a !== w.QUERY) return;
                let p = new URL(D);
                if (!p.searchParams.has("CMCD")) return;
                let _ = ((Te = (U = p.searchParams.get("CMCD")) == null ? void 0 : U.split(",")) != null ? Te : []).filter((ye)=>ye.startsWith("sid") || ye.startsWith("cid")).join(",");
                p.searchParams.set("CMCD", _), R.open("GET", p);
            },
            ...M,
            ...y,
            ...m,
            ...f,
            ...i
        });
        return M.capLevelController === q && c !== void 0 && q.setMaxAutoResolution(k, c), k.on(E.Events.MANIFEST_PARSED, async function(R, D) {
            var _, U;
            let p = (_ = D.sessionData) == null ? void 0 : _["com.apple.hls.chapters"];
            (p != null && p.URI || p != null && p.VALUE.toLocaleLowerCase().startsWith("http")) && pe((U = p == null ? void 0 : p.URI) != null ? U : p == null ? void 0 : p.VALUE, t);
        }), k;
    }
}, Kt = (e)=>e === h.LIVE ? {
        backBufferLength: 8
    } : {}, Wt = (e)=>{
    let { tokens: { drm: t } = {}, playbackId: r, drmTypeCb: n } = e, o = z(r);
    return !t || !o ? {} : {
        emeEnabled: !0,
        drmSystems: {
            "com.apple.fps": {
                licenseUrl: X(e, "fairplay"),
                serverCertificateUrl: Qe(e, "fairplay")
            },
            "com.widevine.alpha": {
                licenseUrl: X(e, "widevine")
            },
            "com.microsoft.playready": {
                licenseUrl: X(e, "playready")
            }
        },
        requestMediaKeySystemAccessFunc: (s, a)=>(s === "com.widevine.alpha" && (a = [
                ...a.map((i)=>{
                    var d;
                    let c = (d = i.videoCapabilities) == null ? void 0 : d.map((l)=>({
                            ...l,
                            robustness: "HW_SECURE_ALL"
                        }));
                    return {
                        ...i,
                        videoCapabilities: c
                    };
                }),
                ...a
            ]), navigator.requestMediaKeySystemAccess(s, a).then((i)=>{
                let c = gt(s);
                return n == null || n(c), i;
            }))
    };
}, Yt = async (e)=>{
    let t = await fetch(e);
    return t.status !== 200 ? Promise.reject(t) : await t.arrayBuffer();
}, Ft = async (e, t)=>{
    let r = await fetch(t, {
        method: "POST",
        headers: {
            "Content-type": "application/octet-stream"
        },
        body: e
    });
    if (r.status !== 200) return Promise.reject(r);
    let n = await r.arrayBuffer();
    return new Uint8Array(n);
}, $t = (e, t)=>{
    let r = async (a)=>{
        let i = await navigator.requestMediaKeySystemAccess("com.apple.fps", [
            {
                initDataTypes: [
                    a
                ],
                videoCapabilities: [
                    {
                        contentType: "application/vnd.apple.mpegurl",
                        robustness: ""
                    }
                ],
                distinctiveIdentifier: "not-allowed",
                persistentState: "not-allowed",
                sessionTypes: [
                    "temporary"
                ]
            }
        ]).then((d)=>{
            var l;
            return (l = e.drmTypeCb) == null || l.call(e, G.FAIRPLAY), d;
        }).catch(()=>{
            let d = x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), l = new T(d, T.MEDIA_ERR_ENCRYPTED, !0);
            l.errorCategory = C.DRM, l.muxCode = b.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM, A(t, l);
        });
        if (!i) return;
        let c = await i.createMediaKeys();
        try {
            let d = await Yt(Qe(e, "fairplay")).catch((l)=>{
                if (l instanceof Response) {
                    let u = K(l, C.DRM, e);
                    return console.error("mediaError", u == null ? void 0 : u.message, u == null ? void 0 : u.context), u ? Promise.reject(u) : Promise.reject(new Error("Unexpected error in app cert request"));
                }
                return Promise.reject(l);
            });
            await c.setServerCertificate(d).catch(()=>{
                let l = x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."), u = new T(l, T.MEDIA_ERR_ENCRYPTED, !0);
                return u.errorCategory = C.DRM, u.muxCode = b.ENCRYPTED_UPDATE_SERVER_CERT_FAILED, Promise.reject(u);
            });
        } catch (d) {
            A(t, d);
            return;
        }
        await t.setMediaKeys(c);
    }, n = (a)=>{
        let i;
        if (a === "internal-error") {
            let c = x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
            i = new T(c, T.MEDIA_ERR_ENCRYPTED, !0), i.errorCategory = C.DRM, i.muxCode = b.ENCRYPTED_CDM_ERROR;
        } else if (a === "output-restricted" || a === "output-downscaled") {
            let c = x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
            i = new T(c, T.MEDIA_ERR_ENCRYPTED, !1), i.errorCategory = C.DRM, i.muxCode = b.ENCRYPTED_OUTPUT_RESTRICTED;
        }
        i && A(t, i);
    }, o = async (a, i)=>{
        let c = t.mediaKeys.createSession(), d = ()=>{
            c.keyStatuses.forEach((u)=>n(u));
        }, l = async (u)=>{
            let y = u.message;
            try {
                let m = await Ft(y, X(e, "fairplay"));
                try {
                    await c.update(m);
                } catch  {
                    let f = x("Failed to update DRM license. This may be an issue with the player or your protected content."), g = new T(f, T.MEDIA_ERR_ENCRYPTED, !0);
                    g.errorCategory = C.DRM, g.muxCode = b.ENCRYPTED_UPDATE_LICENSE_FAILED, A(t, g);
                }
            } catch (m) {
                if (m instanceof Response) {
                    let f = K(m, C.DRM, e);
                    if (console.error("mediaError", f == null ? void 0 : f.message, f == null ? void 0 : f.context), f) {
                        A(t, f);
                        return;
                    }
                    console.error("Unexpected error in license key request", m);
                    return;
                }
                console.error(m);
            }
        };
        c.addEventListener("keystatuseschange", d), c.addEventListener("message", l), t.addEventListener("teardown", ()=>{
            c.removeEventListener("keystatuseschange", d), c.removeEventListener("message", l), c.close();
        }, {
            once: !0
        }), await c.generateRequest(a, i).catch((u)=>{
            console.error("Failed to generate license request", u);
            let y = x("Failed to generate a DRM license request. This may be an issue with the player or your protected content."), m = new T(y, T.MEDIA_ERR_ENCRYPTED, !0);
            return m.errorCategory = C.DRM, m.muxCode = b.ENCRYPTED_GENERATE_REQUEST_FAILED, Promise.reject(m);
        });
    };
    v(t, "encrypted", async (a)=>{
        try {
            let i = a.initDataType;
            if (i !== "skd") {
                console.error(`Received unexpected initialization data type "${i}"`);
                return;
            }
            t.mediaKeys || await r(i);
            let c = a.initData;
            if (c == null) {
                console.error(`Could not start encrypted playback due to missing initData in ${a.type} event`);
                return;
            }
            await o(i, c);
        } catch (i) {
            A(t, i);
            return;
        }
    });
}, X = ({ playbackId: e, tokens: { drm: t } = {}, customDomain: r = S }, n)=>{
    let o = z(e);
    return `https://license.${r.toLocaleLowerCase().endsWith(S) ? r : S}/license/${n}/${o}?token=${t}`;
}, Qe = ({ playbackId: e, tokens: { drm: t } = {}, customDomain: r = S }, n)=>{
    let o = z(e);
    return `https://license.${r.toLocaleLowerCase().endsWith(S) ? r : S}/appcert/${n}/${o}?token=${t}`;
}, Ze = ({ playbackId: e, src: t, customDomain: r })=>{
    if (e) return !0;
    if (typeof t != "string") return !1;
    let n = window == null ? void 0 : window.location.href, o = new URL(t, n).hostname.toLocaleLowerCase();
    return o.includes(S) || !!r && o.includes(r.toLocaleLowerCase());
}, Bt = (e, t, r)=>{
    var c;
    let { envKey: n, disableTracking: o, muxDataSDK: s = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], muxDataSDKOptions: a = {} } = e, i = Ze(e);
    if (!o && (n || i)) {
        let { playerInitTime: d, playerSoftwareName: l, playerSoftwareVersion: u, beaconCollectionDomain: y, debug: m, disableCookies: f } = e, g = {
            ...e.metadata,
            video_title: ((c = e == null ? void 0 : e.metadata) == null ? void 0 : c.video_title) || void 0
        }, M = (k)=>typeof k.player_error_code == "string" ? !1 : typeof e.errorTranslator == "function" ? e.errorTranslator(k) : k;
        s.monitor(t, {
            debug: m,
            beaconCollectionDomain: y,
            hlsjs: r,
            Hls: r ? E : void 0,
            automaticErrorTracking: !1,
            errorTranslator: M,
            disableCookies: f,
            ...a,
            data: {
                ...n ? {
                    env_key: n
                } : {},
                player_software_name: l,
                player_software: l,
                player_software_version: u,
                player_init_time: d,
                ...g
            }
        });
    }
}, Jt = (e, t, r)=>{
    var l, u;
    let n = ze(e, t), { src: o, customDomain: s = S } = e, a = ()=>{
        t.ended || e.disablePseudoEnded || !Ut(t, r) || (Xe(t, r) ? t.currentTime = t.buffered.end(t.buffered.length - 1) : t.dispatchEvent(new Event("ended")));
    }, i, c, d = ()=>{
        let y = qe(t), m, f;
        y.length > 0 && (m = y.start(0), f = y.end(0)), (c !== f || i !== m) && t.dispatchEvent(new CustomEvent("seekablechange", {
            composed: !0
        })), i = m, c = f;
    };
    if (v(t, "durationchange", d), t && n) {
        let y = V(e);
        if (typeof o == "string") {
            if (o.endsWith(".mp4") && o.includes(s)) {
                let g = je(o), M = new URL(`https://stream.${s}/${g}/metadata.json`);
                pe(M.toString(), t);
            }
            let m = ()=>{
                if (Ue(t) !== h.LIVE || Number.isFinite(t.duration)) return;
                let g = setInterval(d, 1e3);
                t.addEventListener("teardown", ()=>{
                    clearInterval(g);
                }, {
                    once: !0
                }), v(t, "durationchange", ()=>{
                    Number.isFinite(t.duration) && clearInterval(g);
                });
            }, f = async ()=>vt(o, t, y).then(m).catch((g)=>{
                    if (g instanceof Response) {
                        let M = K(g, C.VIDEO, e);
                        if (M) {
                            A(t, M);
                            return;
                        }
                    } else g instanceof Error;
                });
            if (t.preload === "none") {
                let g = ()=>{
                    f(), t.removeEventListener("loadedmetadata", M);
                }, M = ()=>{
                    f(), t.removeEventListener("play", g);
                };
                v(t, "play", g, {
                    once: !0
                }), v(t, "loadedmetadata", M, {
                    once: !0
                });
            } else f();
            (l = e.tokens) != null && l.drm ? $t(e, t) : v(t, "encrypted", ()=>{
                let g = x("Attempting to play DRM-protected content without providing a DRM token."), M = new T(g, T.MEDIA_ERR_ENCRYPTED, !0);
                M.errorCategory = C.DRM, M.muxCode = b.ENCRYPTED_MISSING_TOKEN, A(t, M);
            }, {
                once: !0
            }), t.setAttribute("src", o), e.startTime && (((u = P.get(t)) != null ? u : {}).startTime = e.startTime, t.addEventListener("durationchange", et, {
                once: !0
            }));
        } else t.removeAttribute("src");
        t.addEventListener("error", tt), t.addEventListener("error", de), t.addEventListener("emptied", ()=>{
            t.querySelectorAll("track[data-removeondestroy]").forEach((f)=>{
                f.remove();
            });
        }, {
            once: !0
        }), v(t, "pause", a), v(t, "seeked", a), v(t, "play", ()=>{
            t.ended || Ge(t.currentTime, t.duration) && (t.currentTime = t.seekable.length ? t.seekable.start(0) : 0);
        });
    } else r && o ? (r.once(E.Events.LEVEL_LOADED, (y, m)=>{
        ht(m.details, t, r), d(), Ue(t) === h.LIVE && !Number.isFinite(t.duration) && (r.on(E.Events.LEVEL_UPDATED, d), v(t, "durationchange", ()=>{
            Number.isFinite(t.duration) && r.off(E.Events.LEVELS_UPDATED, d);
        }));
    }), r.on(E.Events.ERROR, (y, m)=>{
        var g, M;
        let f = jt(m, e);
        if (f.muxCode === b.NETWORK_NOT_READY) {
            let R = (g = P.get(t)) != null ? g : {}, D = (M = R.retryCount) != null ? M : 0;
            if (D < 6) {
                let p = D === 0 ? 5e3 : 6e4, _ = new T(`Retrying in ${p / 1e3} seconds...`, f.code, f.fatal);
                Object.assign(_, f), A(t, _), setTimeout(()=>{
                    R.retryCount = D + 1, m.details === "manifestLoadError" && m.url && r.loadSource(m.url);
                }, p);
                return;
            } else {
                R.retryCount = 0;
                let p = new T('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>', f.code, f.fatal);
                Object.assign(p, f), A(t, p);
                return;
            }
        }
        A(t, f);
    }), r.on(E.Events.MANIFEST_LOADED, ()=>{
        let y = P.get(t);
        y && y.error && (y.error = null, y.retryCount = 0, t.dispatchEvent(new Event("emptied")), t.dispatchEvent(new Event("loadstart")));
    }), t.addEventListener("error", de), v(t, "waiting", a), ve(e, r), Pe(t, r), r.attachMedia(t)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
};
function et(e) {
    var n;
    let t = e.target, r = (n = P.get(t)) == null ? void 0 : n.startTime;
    if (r && me(t.seekable, t.duration, r)) {
        let o = t.preload === "auto";
        o && (t.preload = "none"), t.currentTime = r, o && (t.preload = "auto");
    }
}
async function tt(e) {
    if (!e.isTrusted) return;
    e.stopImmediatePropagation();
    let t = e.target;
    if (!(t != null && t.error)) return;
    let { message: r, code: n } = t.error, o = new T(r, n);
    if (t.src && n === T.MEDIA_ERR_SRC_NOT_SUPPORTED && t.readyState === HTMLMediaElement.HAVE_NOTHING) {
        setTimeout(()=>{
            var a;
            let s = (a = Nt(t)) != null ? a : t.error;
            (s == null ? void 0 : s.code) === T.MEDIA_ERR_SRC_NOT_SUPPORTED && A(t, o);
        }, 500);
        return;
    }
    if (t.src && (n !== T.MEDIA_ERR_DECODE || n !== void 0)) try {
        let { status: s } = await fetch(t.src);
        o.data = {
            response: {
                code: s
            }
        };
    } catch  {}
    A(t, o);
}
function A(e, t) {
    var r;
    t.fatal && (((r = P.get(e)) != null ? r : {}).error = t, e.dispatchEvent(new CustomEvent("error", {
        detail: t
    })));
}
function de(e) {
    var n, o;
    if (!(e instanceof CustomEvent) || !(e.detail instanceof T)) return;
    let t = e.target, r = e.detail;
    !r || !r.fatal || (((n = P.get(t)) != null ? n : {}).error = r, (o = t.mux) == null || o.emit("error", {
        player_error_code: r.code,
        player_error_message: r.message,
        player_error_context: r.context
    }));
}
var jt = (e, t)=>{
    var c, d, l;
    !e.fatal ? t.debug && console.warn("getErrorFromHlsErrorData() (non-fatal)", e) : console.error("getErrorFromHlsErrorData()", e);
    let n = {
        [E.ErrorTypes.NETWORK_ERROR]: T.MEDIA_ERR_NETWORK,
        [E.ErrorTypes.MEDIA_ERROR]: T.MEDIA_ERR_DECODE,
        [E.ErrorTypes.KEY_SYSTEM_ERROR]: T.MEDIA_ERR_ENCRYPTED
    }, o = (u)=>[
            E.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
            E.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED
        ].includes(u.details) ? T.MEDIA_ERR_NETWORK : n[u.type], s = (u)=>{
        if (u.type === E.ErrorTypes.KEY_SYSTEM_ERROR) return C.DRM;
        if (u.type === E.ErrorTypes.NETWORK_ERROR) return C.VIDEO;
    }, a, i = o(e);
    if (i === T.MEDIA_ERR_NETWORK && e.response) {
        let u = (c = s(e)) != null ? c : C.VIDEO;
        a = (d = K(e.response, u, t, e.fatal)) != null ? d : new T("", i, e.fatal);
    } else if (i === T.MEDIA_ERR_ENCRYPTED) if (e.details === E.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE) {
        let u = x("Attempting to play DRM-protected content without providing a DRM token.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_MISSING_TOKEN;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_NO_ACCESS) {
        let u = x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_NO_SESSION) {
        let u = x("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, !0), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_GENERATE_REQUEST_FAILED;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED) {
        let u = x("Failed to update DRM license. This may be an issue with the player or your protected content.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_UPDATE_LICENSE_FAILED;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED) {
        let u = x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_UPDATE_SERVER_CERT_FAILED;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR) {
        let u = x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_CDM_ERROR;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED) {
        let u = x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, !1), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_OUTPUT_RESTRICTED;
    } else a = new T(e.error.message, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = C.DRM, a.muxCode = b.ENCRYPTED_ERROR;
    else a = new T("", i, e.fatal);
    return a.context || (a.context = `${e.url ? `url: ${e.url}
` : ""}${e.response && (e.response.code || e.response.text) ? `response: ${e.response.code}, ${e.response.text}
` : ""}${e.reason ? `failure reason: ${e.reason}
` : ""}${e.level ? `level: ${e.level}
` : ""}${e.parent ? `parent stream controller: ${e.parent}
` : ""}${e.buffer ? `buffer length: ${e.buffer}
` : ""}${e.error ? `error: ${e.error}
` : ""}${e.event ? `event: ${e.event}
` : ""}${e.err ? `error message: ${(l = e.err) == null ? void 0 : l.message}
` : ""}`), a.data = e, a;
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/web/node_modules/custom-media-element/dist/custom-media-element.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "CustomAudioElement",
    ()=>CustomAudioElement,
    "CustomMediaMixin",
    ()=>CustomMediaMixin,
    "CustomVideoElement",
    ()=>CustomVideoElement,
    "Events",
    ()=>Events
]);
const Events = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "encrypted",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "waitingforkey",
    "resize",
    "enterpictureinpicture",
    "leavepictureinpicture",
    "webkitbeginfullscreen",
    "webkitendfullscreen",
    "webkitpresentationmodechanged"
];
const Attributes = [
    "autopictureinpicture",
    "disablepictureinpicture",
    "disableremoteplayback",
    "autoplay",
    "controls",
    "controlslist",
    "crossorigin",
    "loop",
    "muted",
    "playsinline",
    "poster",
    "preload",
    "src"
];
function getAudioTemplateHTML(attrs) {
    return /*html*/ `
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${serializeAttributes(attrs)}></audio>
    </slot>
    <slot></slot>
  `;
}
function getVideoTemplateHTML(attrs) {
    return /*html*/ `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${serializeAttributes(attrs)}></video>
    </slot>
    <slot></slot>
  `;
}
function CustomMediaMixin(superclass, { tag, is }) {
    const nativeElTest = globalThis.document?.createElement?.(tag, {
        is
    });
    const nativeElProps = nativeElTest ? getNativeElProps(nativeElTest) : [];
    return class CustomMedia extends superclass {
        static getTemplateHTML = tag.endsWith("audio") ? getAudioTemplateHTML : getVideoTemplateHTML;
        static shadowRootOptions = {
            mode: "open"
        };
        static Events = Events;
        static #isDefined = false;
        static get observedAttributes() {
            CustomMedia.#define();
            const natAttrs = nativeElTest?.constructor?.observedAttributes ?? [];
            return [
                ...natAttrs,
                ...Attributes
            ];
        }
        static #define() {
            if (this.#isDefined) return;
            this.#isDefined = true;
            const propsToAttrs = new Set(this.observedAttributes);
            propsToAttrs.delete("muted");
            for (const prop of nativeElProps){
                if (prop in this.prototype) continue;
                if (typeof nativeElTest[prop] === "function") {
                    this.prototype[prop] = function(...args) {
                        this.#init();
                        const fn = ()=>{
                            if (this.call) return this.call(prop, ...args);
                            const nativeFn = this.nativeEl?.[prop];
                            return nativeFn?.apply(this.nativeEl, args);
                        };
                        return fn();
                    };
                } else {
                    const config = {
                        get () {
                            this.#init();
                            const attr = prop.toLowerCase();
                            if (propsToAttrs.has(attr)) {
                                const val = this.getAttribute(attr);
                                return val === null ? false : val === "" ? true : val;
                            }
                            return this.get?.(prop) ?? this.nativeEl?.[prop];
                        }
                    };
                    if (prop !== prop.toUpperCase()) {
                        config.set = function(val) {
                            this.#init();
                            const attr = prop.toLowerCase();
                            if (propsToAttrs.has(attr)) {
                                if (val === true || val === false || val == null) {
                                    this.toggleAttribute(attr, Boolean(val));
                                } else {
                                    this.setAttribute(attr, val);
                                }
                                return;
                            }
                            if (this.set) {
                                this.set(prop, val);
                                return;
                            }
                            if (this.nativeEl) {
                                this.nativeEl[prop] = val;
                            }
                        };
                    }
                    Object.defineProperty(this.prototype, prop, config);
                }
            }
        }
        // Private fields
        #isInit = false;
        #nativeEl = null;
        #childMap = /* @__PURE__ */ new Map();
        #childObserver;
        get;
        set;
        call;
        // If the custom element is defined before the custom element's HTML is parsed
        // no attributes will be available in the constructor (construction process).
        // Wait until initializing in the attributeChangedCallback or
        // connectedCallback or accessing any properties.
        get nativeEl() {
            this.#init();
            return this.#nativeEl ?? this.querySelector(":scope > [slot=media]") ?? this.querySelector(tag) ?? this.shadowRoot?.querySelector(tag) ?? null;
        }
        set nativeEl(val) {
            this.#nativeEl = val;
        }
        get defaultMuted() {
            return this.hasAttribute("muted");
        }
        set defaultMuted(val) {
            this.toggleAttribute("muted", val);
        }
        get src() {
            return this.getAttribute("src");
        }
        set src(val) {
            this.setAttribute("src", `${val}`);
        }
        get preload() {
            return this.getAttribute("preload") ?? this.nativeEl?.preload;
        }
        set preload(val) {
            this.setAttribute("preload", `${val}`);
        }
        #init() {
            if (this.#isInit) return;
            this.#isInit = true;
            this.init();
        }
        init() {
            if (!this.shadowRoot) {
                this.attachShadow({
                    mode: "open"
                });
                const attrs = namedNodeMapToObject(this.attributes);
                if (is) attrs.is = is;
                if (tag) attrs.part = tag;
                this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
            }
            this.nativeEl.muted = this.hasAttribute("muted");
            for (const prop of nativeElProps){
                this.#upgradeProperty(prop);
            }
            this.#childObserver = new MutationObserver(this.#syncMediaChildAttribute.bind(this));
            this.shadowRoot.addEventListener("slotchange", ()=>this.#syncMediaChildren());
            this.#syncMediaChildren();
            for (const type of this.constructor.Events){
                this.shadowRoot.addEventListener(type, this, true);
            }
        }
        handleEvent(event) {
            if (event.target === this.nativeEl) {
                this.dispatchEvent(new CustomEvent(event.type, {
                    detail: event.detail
                }));
            }
        }
        #syncMediaChildren() {
            const removeNativeChildren = new Map(this.#childMap);
            const defaultSlot = this.shadowRoot?.querySelector("slot:not([name])");
            const mediaChildren = defaultSlot?.assignedElements({
                flatten: true
            }).filter((el)=>[
                    "track",
                    "source"
                ].includes(el.localName));
            mediaChildren.forEach((el)=>{
                removeNativeChildren.delete(el);
                let clone = this.#childMap.get(el);
                if (!clone) {
                    clone = el.cloneNode();
                    this.#childMap.set(el, clone);
                    this.#childObserver?.observe(el, {
                        attributes: true
                    });
                }
                this.nativeEl?.append(clone);
                this.#enableDefaultTrack(clone);
            });
            removeNativeChildren.forEach((clone, el)=>{
                clone.remove();
                this.#childMap.delete(el);
            });
        }
        #syncMediaChildAttribute(mutations) {
            for (const mutation of mutations){
                if (mutation.type === "attributes") {
                    const { target, attributeName } = mutation;
                    const clone = this.#childMap.get(target);
                    if (clone && attributeName) {
                        clone.setAttribute(attributeName, target.getAttribute(attributeName) ?? "");
                        this.#enableDefaultTrack(clone);
                    }
                }
            }
        }
        #enableDefaultTrack(trackEl) {
            if (trackEl && trackEl.localName === "track" && trackEl.default && (trackEl.kind === "chapters" || trackEl.kind === "metadata") && trackEl.track.mode === "disabled") {
                trackEl.track.mode = "hidden";
            }
        }
        #upgradeProperty(prop) {
            if (Object.prototype.hasOwnProperty.call(this, prop)) {
                const value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            this.#init();
            this.#forwardAttribute(attrName, oldValue, newValue);
        }
        #forwardAttribute(attrName, _oldValue, newValue) {
            if ([
                "id",
                "class"
            ].includes(attrName)) return;
            if (!CustomMedia.observedAttributes.includes(attrName) && this.constructor.observedAttributes.includes(attrName)) {
                return;
            }
            if (newValue === null) {
                this.nativeEl?.removeAttribute(attrName);
            } else if (this.nativeEl?.getAttribute(attrName) !== newValue) {
                this.nativeEl?.setAttribute(attrName, newValue);
            }
        }
        connectedCallback() {
            this.#init();
        }
    };
}
function getNativeElProps(nativeElTest) {
    const nativeElProps = [];
    for(let proto = Object.getPrototypeOf(nativeElTest); proto && proto !== HTMLElement.prototype; proto = Object.getPrototypeOf(proto)){
        const props = Object.getOwnPropertyNames(proto);
        nativeElProps.push(...props);
    }
    return nativeElProps;
}
function serializeAttributes(attrs) {
    let html = "";
    for(const key in attrs){
        if (!Attributes.includes(key)) continue;
        const value = attrs[key];
        if (value === "") html += ` ${key}`;
        else html += ` ${key}="${value}"`;
    }
    return html;
}
function namedNodeMapToObject(namedNodeMap) {
    const obj = {};
    for (const attr of namedNodeMap){
        obj[attr.name] = attr.value;
    }
    return obj;
}
const CustomVideoElement = CustomMediaMixin(globalThis.HTMLElement ?? class {
}, {
    tag: "video"
});
const CustomAudioElement = CustomMediaMixin(globalThis.HTMLElement ?? class {
}, {
    tag: "audio"
});
;
}),
"[project]/web/node_modules/@mux/mux-video/dist/base.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>e,
    "MuxVideoBaseElement",
    ()=>K,
    "playerSoftwareName",
    ()=>x,
    "playerSoftwareVersion",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@mux/playback-core/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/custom-media-element/dist/custom-media-element.js [app-ssr] (ecmascript)");
var C = (s)=>{
    throw TypeError(s);
};
var N = (s, a, t)=>a.has(s) || C("Cannot " + t);
var n = (s, a, t)=>(N(s, a, "read from private field"), t ? t.call(s) : a.get(s)), d = (s, a, t)=>a.has(s) ? C("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(s) : a.set(s, t), o = (s, a, t, i)=>(N(s, a, "write to private field"), i ? i.call(s, t) : a.set(s, t), t), b = (s, a, t)=>(N(s, a, "access private method"), t);
;
var B = ()=>{
    try {
        return "0.29.2";
    } catch  {}
    return "UNKNOWN";
}, Y = B(), P = ()=>Y;
;
var D = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;
var e = {
    BEACON_COLLECTION_DOMAIN: "beacon-collection-domain",
    CUSTOM_DOMAIN: "custom-domain",
    DEBUG: "debug",
    DISABLE_TRACKING: "disable-tracking",
    DISABLE_COOKIES: "disable-cookies",
    DISABLE_PSEUDO_ENDED: "disable-pseudo-ended",
    DRM_TOKEN: "drm-token",
    PLAYBACK_TOKEN: "playback-token",
    ENV_KEY: "env-key",
    MAX_RESOLUTION: "max-resolution",
    MIN_RESOLUTION: "min-resolution",
    MAX_AUTO_RESOLUTION: "max-auto-resolution",
    RENDITION_ORDER: "rendition-order",
    PROGRAM_START_TIME: "program-start-time",
    PROGRAM_END_TIME: "program-end-time",
    ASSET_START_TIME: "asset-start-time",
    ASSET_END_TIME: "asset-end-time",
    METADATA_URL: "metadata-url",
    PLAYBACK_ID: "playback-id",
    PLAYER_SOFTWARE_NAME: "player-software-name",
    PLAYER_SOFTWARE_VERSION: "player-software-version",
    PLAYER_INIT_TIME: "player-init-time",
    PREFER_CMCD: "prefer-cmcd",
    PREFER_PLAYBACK: "prefer-playback",
    START_TIME: "start-time",
    STREAM_TYPE: "stream-type",
    TARGET_LIVE_WINDOW: "target-live-window",
    LIVE_EDGE_OFFSET: "live-edge-offset",
    TYPE: "type",
    LOGO: "logo"
}, at = Object.values(e), v = P(), x = "mux-video", E, m, _, g, p, O, R, I, M, c, A, T, K = class extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomVideoElement"] {
    constructor(){
        super();
        d(this, A);
        d(this, E);
        d(this, m);
        d(this, _);
        d(this, g, {});
        d(this, p, {});
        d(this, O);
        d(this, R);
        d(this, I);
        d(this, M);
        d(this, c, "");
        o(this, _, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlayerInitTime"])()), this.nativeEl.addEventListener("muxmetadata", (t)=>{
            var l;
            let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMetadata"])(this.nativeEl), r = (l = this.metadata) != null ? l : {};
            this.metadata = {
                ...i,
                ...r
            }, (i == null ? void 0 : i["com.mux.video.branding"]) === "mux-free-plan" && (o(this, c, "default"), this.updateLogo());
        });
    }
    static get NAME() {
        return x;
    }
    static get VERSION() {
        return v;
    }
    static get observedAttributes() {
        var t;
        return [
            ...at,
            ...(t = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomVideoElement"].observedAttributes) != null ? t : []
        ];
    }
    static getLogoHTML(t) {
        return !t || t === "false" ? "" : t === "default" ? D : `<img part="logo" src="${t}" />`;
    }
    static getTemplateHTML(t = {}) {
        var i;
        return `
      ${__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomVideoElement"].getTemplateHTML(t)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i = t[e.LOGO]) != null ? i : "")}
      </slot>
    `;
    }
    get preferCmcd() {
        var t;
        return (t = this.getAttribute(e.PREFER_CMCD)) != null ? t : void 0;
    }
    set preferCmcd(t) {
        t !== this.preferCmcd && (t ? __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CmcdTypeValues"].includes(t) ? this.setAttribute(e.PREFER_CMCD, t) : console.warn(`Invalid value for preferCmcd. Must be one of ${__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CmcdTypeValues"].join()}`) : this.removeAttribute(e.PREFER_CMCD));
    }
    get playerInitTime() {
        return this.hasAttribute(e.PLAYER_INIT_TIME) ? +this.getAttribute(e.PLAYER_INIT_TIME) : n(this, _);
    }
    set playerInitTime(t) {
        t != this.playerInitTime && (t == null ? this.removeAttribute(e.PLAYER_INIT_TIME) : this.setAttribute(e.PLAYER_INIT_TIME, `${+t}`));
    }
    get playerSoftwareName() {
        var t;
        return (t = n(this, I)) != null ? t : x;
    }
    set playerSoftwareName(t) {
        o(this, I, t);
    }
    get playerSoftwareVersion() {
        var t;
        return (t = n(this, R)) != null ? t : v;
    }
    set playerSoftwareVersion(t) {
        o(this, R, t);
    }
    get _hls() {
        var t;
        return (t = n(this, E)) == null ? void 0 : t.engine;
    }
    get mux() {
        var t;
        return (t = this.nativeEl) == null ? void 0 : t.mux;
    }
    get error() {
        var t;
        return (t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getError"])(this.nativeEl)) != null ? t : null;
    }
    get errorTranslator() {
        return n(this, M);
    }
    set errorTranslator(t) {
        o(this, M, t);
    }
    get src() {
        return this.getAttribute("src");
    }
    set src(t) {
        t !== this.src && (t == null ? this.removeAttribute("src") : this.setAttribute("src", t));
    }
    get type() {
        var t;
        return (t = this.getAttribute(e.TYPE)) != null ? t : void 0;
    }
    set type(t) {
        t !== this.type && (t ? this.setAttribute(e.TYPE, t) : this.removeAttribute(e.TYPE));
    }
    get preload() {
        let t = this.getAttribute("preload");
        return t === "" ? "auto" : [
            "none",
            "metadata",
            "auto"
        ].includes(t) ? t : super.preload;
    }
    set preload(t) {
        t != this.getAttribute("preload") && ([
            "",
            "none",
            "metadata",
            "auto"
        ].includes(t) ? this.setAttribute("preload", t) : this.removeAttribute("preload"));
    }
    get debug() {
        return this.getAttribute(e.DEBUG) != null;
    }
    set debug(t) {
        t !== this.debug && (t ? this.setAttribute(e.DEBUG, "") : this.removeAttribute(e.DEBUG));
    }
    get disableTracking() {
        return this.hasAttribute(e.DISABLE_TRACKING);
    }
    set disableTracking(t) {
        t !== this.disableTracking && this.toggleAttribute(e.DISABLE_TRACKING, !!t);
    }
    get disableCookies() {
        return this.hasAttribute(e.DISABLE_COOKIES);
    }
    set disableCookies(t) {
        t !== this.disableCookies && (t ? this.setAttribute(e.DISABLE_COOKIES, "") : this.removeAttribute(e.DISABLE_COOKIES));
    }
    get disablePseudoEnded() {
        return this.hasAttribute(e.DISABLE_PSEUDO_ENDED);
    }
    set disablePseudoEnded(t) {
        t !== this.disablePseudoEnded && (t ? this.setAttribute(e.DISABLE_PSEUDO_ENDED, "") : this.removeAttribute(e.DISABLE_PSEUDO_ENDED));
    }
    get startTime() {
        let t = this.getAttribute(e.START_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set startTime(t) {
        t !== this.startTime && (t == null ? this.removeAttribute(e.START_TIME) : this.setAttribute(e.START_TIME, `${t}`));
    }
    get playbackId() {
        var t;
        return this.hasAttribute(e.PLAYBACK_ID) ? this.getAttribute(e.PLAYBACK_ID) : (t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toPlaybackIdFromSrc"])(this.src)) != null ? t : void 0;
    }
    set playbackId(t) {
        t !== this.playbackId && (t ? this.setAttribute(e.PLAYBACK_ID, t) : this.removeAttribute(e.PLAYBACK_ID));
    }
    get maxResolution() {
        var t;
        return (t = this.getAttribute(e.MAX_RESOLUTION)) != null ? t : void 0;
    }
    set maxResolution(t) {
        t !== this.maxResolution && (t ? this.setAttribute(e.MAX_RESOLUTION, t) : this.removeAttribute(e.MAX_RESOLUTION));
    }
    get minResolution() {
        var t;
        return (t = this.getAttribute(e.MIN_RESOLUTION)) != null ? t : void 0;
    }
    set minResolution(t) {
        t !== this.minResolution && (t ? this.setAttribute(e.MIN_RESOLUTION, t) : this.removeAttribute(e.MIN_RESOLUTION));
    }
    get maxAutoResolution() {
        var t;
        return (t = this.getAttribute(e.MAX_AUTO_RESOLUTION)) != null ? t : void 0;
    }
    set maxAutoResolution(t) {
        t == null ? this.removeAttribute(e.MAX_AUTO_RESOLUTION) : this.setAttribute(e.MAX_AUTO_RESOLUTION, t);
    }
    get renditionOrder() {
        var t;
        return (t = this.getAttribute(e.RENDITION_ORDER)) != null ? t : void 0;
    }
    set renditionOrder(t) {
        t !== this.renditionOrder && (t ? this.setAttribute(e.RENDITION_ORDER, t) : this.removeAttribute(e.RENDITION_ORDER));
    }
    get programStartTime() {
        let t = this.getAttribute(e.PROGRAM_START_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set programStartTime(t) {
        t == null ? this.removeAttribute(e.PROGRAM_START_TIME) : this.setAttribute(e.PROGRAM_START_TIME, `${t}`);
    }
    get programEndTime() {
        let t = this.getAttribute(e.PROGRAM_END_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set programEndTime(t) {
        t == null ? this.removeAttribute(e.PROGRAM_END_TIME) : this.setAttribute(e.PROGRAM_END_TIME, `${t}`);
    }
    get assetStartTime() {
        let t = this.getAttribute(e.ASSET_START_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set assetStartTime(t) {
        t == null ? this.removeAttribute(e.ASSET_START_TIME) : this.setAttribute(e.ASSET_START_TIME, `${t}`);
    }
    get assetEndTime() {
        let t = this.getAttribute(e.ASSET_END_TIME);
        if (t == null) return;
        let i = +t;
        return Number.isNaN(i) ? void 0 : i;
    }
    set assetEndTime(t) {
        t == null ? this.removeAttribute(e.ASSET_END_TIME) : this.setAttribute(e.ASSET_END_TIME, `${t}`);
    }
    get customDomain() {
        var t;
        return (t = this.getAttribute(e.CUSTOM_DOMAIN)) != null ? t : void 0;
    }
    set customDomain(t) {
        t !== this.customDomain && (t ? this.setAttribute(e.CUSTOM_DOMAIN, t) : this.removeAttribute(e.CUSTOM_DOMAIN));
    }
    get drmToken() {
        var t;
        return (t = this.getAttribute(e.DRM_TOKEN)) != null ? t : void 0;
    }
    set drmToken(t) {
        t !== this.drmToken && (t ? this.setAttribute(e.DRM_TOKEN, t) : this.removeAttribute(e.DRM_TOKEN));
    }
    get playbackToken() {
        var t, i, r, l;
        if (this.hasAttribute(e.PLAYBACK_TOKEN)) return (t = this.getAttribute(e.PLAYBACK_TOKEN)) != null ? t : void 0;
        if (this.hasAttribute(e.PLAYBACK_ID)) {
            let [, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toPlaybackIdParts"])((i = this.playbackId) != null ? i : "");
            return (r = new URLSearchParams(f).get("token")) != null ? r : void 0;
        }
        if (this.src) return (l = new URLSearchParams(this.src).get("token")) != null ? l : void 0;
    }
    set playbackToken(t) {
        t !== this.playbackToken && (t ? this.setAttribute(e.PLAYBACK_TOKEN, t) : this.removeAttribute(e.PLAYBACK_TOKEN));
    }
    get tokens() {
        let t = this.getAttribute(e.PLAYBACK_TOKEN), i = this.getAttribute(e.DRM_TOKEN);
        return {
            ...n(this, p),
            ...t != null ? {
                playback: t
            } : {},
            ...i != null ? {
                drm: i
            } : {}
        };
    }
    set tokens(t) {
        o(this, p, t != null ? t : {});
    }
    get ended() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEnded"])(this.nativeEl, this._hls);
    }
    get envKey() {
        var t;
        return (t = this.getAttribute(e.ENV_KEY)) != null ? t : void 0;
    }
    set envKey(t) {
        t !== this.envKey && (t ? this.setAttribute(e.ENV_KEY, t) : this.removeAttribute(e.ENV_KEY));
    }
    get beaconCollectionDomain() {
        var t;
        return (t = this.getAttribute(e.BEACON_COLLECTION_DOMAIN)) != null ? t : void 0;
    }
    set beaconCollectionDomain(t) {
        t !== this.beaconCollectionDomain && (t ? this.setAttribute(e.BEACON_COLLECTION_DOMAIN, t) : this.removeAttribute(e.BEACON_COLLECTION_DOMAIN));
    }
    get streamType() {
        var t;
        return (t = this.getAttribute(e.STREAM_TYPE)) != null ? t : (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStreamType"])(this.nativeEl);
    }
    set streamType(t) {
        t !== this.streamType && (t ? this.setAttribute(e.STREAM_TYPE, t) : this.removeAttribute(e.STREAM_TYPE));
    }
    get targetLiveWindow() {
        return this.hasAttribute(e.TARGET_LIVE_WINDOW) ? +this.getAttribute(e.TARGET_LIVE_WINDOW) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTargetLiveWindow"])(this.nativeEl);
    }
    set targetLiveWindow(t) {
        t != this.targetLiveWindow && (t == null ? this.removeAttribute(e.TARGET_LIVE_WINDOW) : this.setAttribute(e.TARGET_LIVE_WINDOW, `${+t}`));
    }
    get liveEdgeStart() {
        var t, i;
        if (this.hasAttribute(e.LIVE_EDGE_OFFSET)) {
            let { liveEdgeOffset: r } = this, l = (t = this.nativeEl.seekable.end(0)) != null ? t : 0, f = (i = this.nativeEl.seekable.start(0)) != null ? i : 0;
            return Math.max(f, l - r);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLiveEdgeStart"])(this.nativeEl);
    }
    get liveEdgeOffset() {
        if (this.hasAttribute(e.LIVE_EDGE_OFFSET)) return +this.getAttribute(e.LIVE_EDGE_OFFSET);
    }
    set liveEdgeOffset(t) {
        t != this.liveEdgeOffset && (t == null ? this.removeAttribute(e.LIVE_EDGE_OFFSET) : this.setAttribute(e.LIVE_EDGE_OFFSET, `${+t}`));
    }
    get seekable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSeekable"])(this.nativeEl);
    }
    async addCuePoints(t) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addCuePoints"])(this.nativeEl, t);
    }
    get activeCuePoint() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveCuePoint"])(this.nativeEl);
    }
    get cuePoints() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCuePoints"])(this.nativeEl);
    }
    async addChapters(t) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addChapters"])(this.nativeEl, t);
    }
    get activeChapter() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveChapter"])(this.nativeEl);
    }
    get chapters() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getChapters"])(this.nativeEl);
    }
    getStartDate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStartDate"])(this.nativeEl, this._hls);
    }
    get currentPdt() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentPdt"])(this.nativeEl, this._hls);
    }
    get preferPlayback() {
        let t = this.getAttribute(e.PREFER_PLAYBACK);
        if (t === __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].MSE || t === __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].NATIVE) return t;
    }
    set preferPlayback(t) {
        t !== this.preferPlayback && (t === __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].MSE || t === __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].NATIVE ? this.setAttribute(e.PREFER_PLAYBACK, t) : this.removeAttribute(e.PREFER_PLAYBACK));
    }
    get metadata() {
        return {
            ...this.getAttributeNames().filter((i)=>i.startsWith("metadata-") && ![
                    e.METADATA_URL
                ].includes(i)).reduce((i, r)=>{
                let l = this.getAttribute(r);
                return l != null && (i[r.replace(/^metadata-/, "").replace(/-/g, "_")] = l), i;
            }, {}),
            ...n(this, g)
        };
    }
    set metadata(t) {
        o(this, g, t != null ? t : {}), this.mux && this.mux.emit("hb", n(this, g));
    }
    get _hlsConfig() {
        return n(this, O);
    }
    set _hlsConfig(t) {
        o(this, O, t);
    }
    get logo() {
        var t;
        return (t = this.getAttribute(e.LOGO)) != null ? t : n(this, c);
    }
    set logo(t) {
        t ? this.setAttribute(e.LOGO, t) : this.removeAttribute(e.LOGO);
    }
    load() {
        o(this, E, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initialize"])(this, this.nativeEl, n(this, E)));
    }
    unload() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["teardown"])(this.nativeEl, n(this, E), this), o(this, E, void 0);
    }
    attributeChangedCallback(t, i, r) {
        var f, L;
        switch(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomVideoElement"].observedAttributes.includes(t) && ![
            "src",
            "autoplay",
            "preload"
        ].includes(t) && super.attributeChangedCallback(t, i, r), t){
            case e.PLAYER_SOFTWARE_NAME:
                this.playerSoftwareName = r != null ? r : void 0;
                break;
            case e.PLAYER_SOFTWARE_VERSION:
                this.playerSoftwareVersion = r != null ? r : void 0;
                break;
            case "src":
                {
                    let u = !!i, h = !!r;
                    !u && h ? b(this, A, T).call(this) : u && !h ? this.unload() : u && h && (this.unload(), b(this, A, T).call(this));
                    break;
                }
            case "autoplay":
                if (r === i) break;
                (f = n(this, E)) == null || f.setAutoplay(this.autoplay);
                break;
            case "preload":
                if (r === i) break;
                (L = n(this, E)) == null || L.setPreload(r);
                break;
            case e.PLAYBACK_ID:
                this.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toMuxVideoURL"])(this);
                break;
            case e.DEBUG:
                {
                    let u = this.debug;
                    this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this._hls && (this._hls.config.debug = u);
                    break;
                }
            case e.METADATA_URL:
                r && fetch(r).then((u)=>u.json()).then((u)=>this.metadata = u).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${r}!`));
                break;
            case e.STREAM_TYPE:
                (r == null || r !== i) && this.dispatchEvent(new CustomEvent("streamtypechange", {
                    composed: !0,
                    bubbles: !0
                }));
                break;
            case e.TARGET_LIVE_WINDOW:
                (r == null || r !== i) && this.dispatchEvent(new CustomEvent("targetlivewindowchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: this.targetLiveWindow
                }));
                break;
            case e.LOGO:
                (r == null || r !== i) && this.updateLogo();
                break;
            case e.DISABLE_TRACKING:
                {
                    if (r == null || r !== i) {
                        let u = this.currentTime, h = this.paused;
                        this.unload(), b(this, A, T).call(this).then(()=>{
                            this.currentTime = u, h || this.play();
                        });
                    }
                    break;
                }
            case e.DISABLE_COOKIES:
                {
                    (r == null || r !== i) && this.disableCookies && document.cookie.split(";").forEach((h)=>{
                        h.trim().startsWith("muxData") && (document.cookie = h.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"));
                    });
                    break;
                }
        }
    }
    updateLogo() {
        if (!this.shadowRoot) return;
        let t = this.shadowRoot.querySelector('slot[name="logo"]');
        if (!t) return;
        let i = this.constructor.getLogoHTML(n(this, c) || this.logo);
        t.innerHTML = i;
    }
    connectedCallback() {
        var t;
        (t = super.connectedCallback) == null || t.call(this), this.nativeEl && this.src && !n(this, E) && b(this, A, T).call(this);
    }
    disconnectedCallback() {
        this.unload();
    }
    handleEvent(t) {
        t.target === this.nativeEl && this.dispatchEvent(new CustomEvent(t.type, {
            composed: !0,
            detail: t.detail
        }));
    }
};
E = new WeakMap, m = new WeakMap, _ = new WeakMap, g = new WeakMap, p = new WeakMap, O = new WeakMap, R = new WeakMap, I = new WeakMap, M = new WeakMap, c = new WeakMap, A = new WeakSet, T = async function() {
    n(this, m) || (await o(this, m, Promise.resolve()), o(this, m, null), this.load());
};
;
 //# sourceMappingURL=base.mjs.map
}),
"[project]/web/node_modules/@mux/mux-video/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$base$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@mux/mux-video/dist/base.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/castable-video/castable-mixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/mixin.js [app-ssr] (ecmascript)");
var f = (e)=>{
    throw TypeError(e);
};
var g = (e, o, t)=>o.has(e) || f("Cannot " + t);
var u = (e, o, t)=>(g(e, o, "read from private field"), t ? t.call(e) : o.get(e)), m = (e, o, t)=>o.has(e) ? f("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), d = (e, o, t, l)=>(g(e, o, "write to private field"), l ? l.call(e, t) : o.set(e, t), t);
var s = class {
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent(o) {
        return !0;
    }
};
if (typeof DocumentFragment == "undefined") {
    class e extends s {
    }
    globalThis.DocumentFragment = e;
}
var n = class extends s {
}, p = class extends s {
}, x = {
    get (e) {},
    define (e, o, t) {},
    getName (e) {
        return null;
    },
    upgrade (e) {},
    whenDefined (e) {
        return Promise.resolve(n);
    }
}, a, h = class {
    constructor(o, t = {}){
        m(this, a);
        d(this, a, t == null ? void 0 : t.detail);
    }
    get detail() {
        return u(this, a);
    }
    initCustomEvent() {}
};
a = new WeakMap;
function C(e, o) {
    return new n;
}
var y = {
    document: {
        createElement: C
    },
    DocumentFragment,
    customElements: x,
    CustomEvent: h,
    EventTarget: s,
    HTMLElement: n,
    HTMLVideoElement: p
}, b = ("TURBOPACK compile-time value", "undefined") == "undefined" || typeof globalThis.customElements == "undefined", c = ("TURBOPACK compile-time truthy", 1) ? y : "TURBOPACK unreachable", k = ("TURBOPACK compile-time truthy", 1) ? y.document : "TURBOPACK unreachable";
;
;
;
;
var r, i = class extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CastableMediaMixin"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaTracksMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$base$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MuxVideoBaseElement"])) {
    constructor(){
        super(...arguments);
        m(this, r);
    }
    get autoplay() {
        let t = this.getAttribute("autoplay");
        return t === null ? !1 : t === "" ? !0 : t;
    }
    set autoplay(t) {
        let l = this.autoplay;
        t !== l && (t ? this.setAttribute("autoplay", typeof t == "string" ? t : "") : this.removeAttribute("autoplay"));
    }
    get muxCastCustomData() {
        return {
            mux: {
                playbackId: this.playbackId,
                minResolution: this.minResolution,
                maxResolution: this.maxResolution,
                renditionOrder: this.renditionOrder,
                customDomain: this.customDomain,
                tokens: {
                    drm: this.drmToken
                },
                envKey: this.envKey,
                metadata: this.metadata,
                disableCookies: this.disableCookies,
                disableTracking: this.disableTracking,
                beaconCollectionDomain: this.beaconCollectionDomain,
                startTime: this.startTime,
                preferCmcd: this.preferCmcd
            }
        };
    }
    get castCustomData() {
        var t;
        return (t = u(this, r)) != null ? t : this.muxCastCustomData;
    }
    set castCustomData(t) {
        d(this, r, t);
    }
};
r = new WeakMap;
c.customElements.get("mux-video") || (c.customElements.define("mux-video", i), c.MuxVideoElement = i);
var F = i;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/web/node_modules/castable-video/castable-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* global WeakRef */ __turbopack_context__.s([
    "InvalidStateError",
    ()=>InvalidStateError,
    "IterableWeakSet",
    ()=>IterableWeakSet,
    "NotFoundError",
    ()=>NotFoundError,
    "NotSupportedError",
    ()=>NotSupportedError,
    "castContext",
    ()=>castContext,
    "currentMedia",
    ()=>currentMedia,
    "currentSession",
    ()=>currentSession,
    "editTracksInfo",
    ()=>editTracksInfo,
    "getDefaultCastOptions",
    ()=>getDefaultCastOptions,
    "getMediaStatus",
    ()=>getMediaStatus,
    "getPlaylistSegmentFormat",
    ()=>getPlaylistSegmentFormat,
    "isHls",
    ()=>isHls,
    "loadCastFramework",
    ()=>loadCastFramework,
    "onCastApiAvailable",
    ()=>onCastApiAvailable,
    "privateProps",
    ()=>privateProps,
    "requiresCastFramework",
    ()=>requiresCastFramework,
    "setCastOptions",
    ()=>setCastOptions
]);
const privateProps = new WeakMap();
class InvalidStateError extends Error {
}
class NotSupportedError extends Error {
}
class NotFoundError extends Error {
}
const HLS_RESPONSE_HEADERS = [
    'application/x-mpegURL',
    'application/vnd.apple.mpegurl',
    'audio/mpegurl'
];
const IterableWeakSet = globalThis.WeakRef ? class extends Set {
    add(el) {
        super.add(new WeakRef(el));
    }
    forEach(fn) {
        super.forEach((ref)=>{
            const value = ref.deref();
            if (value) fn(value);
        });
    }
} : Set;
function onCastApiAvailable(callback) {
    if (!globalThis.chrome?.cast?.isAvailable) {
        globalThis.__onGCastApiAvailable = ()=>{
            // The globalThis.__onGCastApiAvailable callback alone is not reliable for
            // the added cast.framework. It's loaded in a separate JS file.
            // https://www.gstatic.com/eureka/clank/101/cast_sender.js
            // https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js
            customElements.whenDefined('google-cast-button').then(callback);
        };
    } else if (!globalThis.cast?.framework) {
        customElements.whenDefined('google-cast-button').then(callback);
    } else {
        callback();
    }
}
function requiresCastFramework() {
    // todo: exclude for Android>=56 which supports the Remote Playback API natively.
    return globalThis.chrome;
}
function loadCastFramework() {
    const sdkUrl = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
    if (globalThis.chrome?.cast || document.querySelector(`script[src="${sdkUrl}"]`)) return;
    const script = document.createElement('script');
    script.src = sdkUrl;
    document.head.append(script);
}
function castContext() {
    return globalThis.cast?.framework?.CastContext.getInstance();
}
function currentSession() {
    return castContext()?.getCurrentSession();
}
function currentMedia() {
    return currentSession()?.getSessionObj().media[0];
}
function editTracksInfo(request) {
    return new Promise((resolve, reject)=>{
        currentMedia().editTracksInfo(request, resolve, reject);
    });
}
function getMediaStatus(request) {
    return new Promise((resolve, reject)=>{
        currentMedia().getStatus(request, resolve, reject);
    });
}
function setCastOptions(options) {
    return castContext().setOptions({
        ...getDefaultCastOptions(),
        ...options
    });
}
function getDefaultCastOptions() {
    return {
        // Set the receiver application ID to your own (created in the
        // Google Cast Developer Console), or optionally
        // use the chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
        receiverApplicationId: 'CC1AD845',
        // Auto join policy can be one of the following three:
        // ORIGIN_SCOPED - Auto connect from same appId and page origin
        // TAB_AND_ORIGIN_SCOPED - Auto connect from same appId, page origin, and tab
        // PAGE_SCOPED - No auto connect
        autoJoinPolicy: 'origin_scoped',
        // The following flag enables Cast Connect(requires Chrome 87 or higher)
        // https://developers.googleblog.com/2020/08/introducing-cast-connect-android-tv.html
        androidReceiverCompatible: false,
        language: 'en-US',
        resumeSavedSession: true
    };
}
//Get the segment format given the end of the URL (.m4s, .ts, etc)
function getFormat(segment) {
    if (!segment) return undefined;
    const regex = /\.([a-zA-Z0-9]+)(?:\?.*)?$/;
    const match = segment.match(regex);
    return match ? match[1] : null;
}
function parsePlaylistUrls(playlistContent) {
    const lines = playlistContent.split('\n');
    const urls = [];
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim();
        // Locate available video playlists and get the next line which is the URI (https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-17#section-4.4.6.2)
        if (line.startsWith('#EXT-X-STREAM-INF')) {
            const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
            if (nextLine && !nextLine.startsWith('#')) {
                urls.push(nextLine);
            }
        }
    }
    return urls;
}
function parseSegment(playlistContent) {
    const lines = playlistContent.split('\n');
    const url = lines.find((line)=>!line.trim().startsWith('#') && line.trim() !== '');
    return url;
}
async function isHls(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD'
        });
        const contentType = response.headers.get('Content-Type');
        return HLS_RESPONSE_HEADERS.some((header)=>contentType === header);
    } catch (err) {
        console.error('Error while trying to get the Content-Type of the manifest', err);
        return false;
    }
}
async function getPlaylistSegmentFormat(url) {
    try {
        const mainManifestContent = await (await fetch(url)).text();
        let availableChunksContent = mainManifestContent;
        const playlists = parsePlaylistUrls(mainManifestContent);
        if (playlists.length > 0) {
            const chosenPlaylistUrl = new URL(playlists[0], url).toString();
            availableChunksContent = await (await fetch(chosenPlaylistUrl)).text();
        }
        const segment = parseSegment(availableChunksContent);
        const format = getFormat(segment);
        return format;
    } catch (err) {
        console.error('Error while trying to parse the manifest playlist', err);
        return undefined;
    }
}
}),
"[project]/web/node_modules/castable-video/castable-remote-playback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemotePlayback",
    ()=>RemotePlayback
]);
/* global chrome, cast */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/castable-video/castable-utils.js [app-ssr] (ecmascript)");
;
const remoteInstances = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IterableWeakSet"]();
const castElementRef = new WeakSet();
let cf;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onCastApiAvailable"])(()=>{
    if (!globalThis.chrome?.cast?.isAvailable) {
        // Useful to see in verbose logs if this shows undefined or false.
        console.debug('chrome.cast.isAvailable', globalThis.chrome?.cast?.isAvailable);
        return;
    }
    if (!cf) {
        cf = cast.framework;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castContext"])().addEventListener(cf.CastContextEventType.CAST_STATE_CHANGED, (e)=>{
            remoteInstances.forEach((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].get(r).onCastStateChanged?.(e));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castContext"])().addEventListener(cf.CastContextEventType.SESSION_STATE_CHANGED, (e)=>{
            remoteInstances.forEach((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].get(r).onSessionStateChanged?.(e));
        });
        remoteInstances.forEach((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].get(r).init?.());
    }
});
let remotePlaybackCallbackIdCount = 0;
class RemotePlayback extends EventTarget {
    #media;
    #isInit;
    #remotePlayer;
    #remoteListeners;
    #state = 'disconnected';
    #available = false;
    #callbacks = new Set();
    #callbackIds = new WeakMap();
    constructor(media){
        super();
        this.#media = media;
        remoteInstances.add(this);
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].set(this, {
            init: ()=>this.#init(),
            onCastStateChanged: ()=>this.#onCastStateChanged(),
            onSessionStateChanged: ()=>this.#onSessionStateChanged(),
            getCastPlayer: ()=>this.#castPlayer
        });
        this.#init();
    }
    get #castPlayer() {
        if (castElementRef.has(this.#media)) return this.#remotePlayer;
        return undefined;
    }
    /**
   * https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
   * @return {'disconnected'|'connecting'|'connected'}
   */ get state() {
        return this.#state;
    }
    async watchAvailability(callback) {
        if (this.#media.disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        this.#callbackIds.set(callback, ++remotePlaybackCallbackIdCount);
        this.#callbacks.add(callback);
        // https://w3c.github.io/remote-playback/#getting-the-remote-playback-devices-availability-information
        queueMicrotask(()=>callback(this.#hasDevicesAvailable()));
        return remotePlaybackCallbackIdCount;
    }
    async cancelWatchAvailability(callback) {
        if (this.#media.disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        if (callback) {
            this.#callbacks.delete(callback);
        } else {
            this.#callbacks.clear();
        }
    }
    async prompt() {
        if (this.#media.disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        if (!globalThis.chrome?.cast?.isAvailable) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotSupportedError"]('The RemotePlayback API is disabled on this platform.');
        }
        const willDisconnect = castElementRef.has(this.#media);
        castElementRef.add(this.#media);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCastOptions"])(this.#media.castOptions);
        Object.entries(this.#remoteListeners).forEach(([event, listener])=>{
            this.#remotePlayer.controller.addEventListener(event, listener);
        });
        try {
            // Open browser cast menu.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castContext"])().requestSession();
        } catch (err) {
            // If there will be no disconnect, reset some state here.
            if (!willDisconnect) {
                castElementRef.delete(this.#media);
            }
            // Don't throw an error if disconnecting or cancelling.
            if (err === 'cancel') {
                return;
            }
            throw new Error(err);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].get(this.#media)?.loadOnPrompt?.();
    }
    #disconnect() {
        if (!castElementRef.has(this.#media)) return;
        Object.entries(this.#remoteListeners).forEach(([event, listener])=>{
            this.#remotePlayer.controller.removeEventListener(event, listener);
        });
        castElementRef.delete(this.#media);
        // isMuted is not in savedPlayerState. should we sync this back to local?
        this.#media.muted = this.#remotePlayer.isMuted;
        this.#media.currentTime = this.#remotePlayer.savedPlayerState.currentTime;
        if (this.#remotePlayer.savedPlayerState.isPaused === false) {
            this.#media.play();
        }
    }
    #hasDevicesAvailable() {
        // Cast state: NO_DEVICES_AVAILABLE, NOT_CONNECTED, CONNECTING, CONNECTED
        // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.CastState
        const castState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castContext"])()?.getCastState();
        return castState && castState !== 'NO_DEVICES_AVAILABLE';
    }
    #onCastStateChanged() {
        // Cast state: NO_DEVICES_AVAILABLE, NOT_CONNECTED, CONNECTING, CONNECTED
        // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.CastState
        const castState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castContext"])().getCastState();
        if (castElementRef.has(this.#media)) {
            if (castState === 'CONNECTING') {
                this.#state = 'connecting';
                this.dispatchEvent(new Event('connecting'));
            }
        }
        if (!this.#available && castState?.includes('CONNECT')) {
            this.#available = true;
            for (let callback of this.#callbacks)callback(true);
        } else if (this.#available && (!castState || castState === 'NO_DEVICES_AVAILABLE')) {
            this.#available = false;
            for (let callback of this.#callbacks)callback(false);
        }
    }
    async #onSessionStateChanged() {
        // Session states: NO_SESSION, SESSION_STARTING, SESSION_STARTED, SESSION_START_FAILED,
        //                 SESSION_ENDING, SESSION_ENDED, SESSION_RESUMED
        // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.SessionState
        const { SESSION_RESUMED } = cf.SessionState;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castContext"])().getSessionState() === SESSION_RESUMED) {
            /**
       * Figure out if this was the video that started the resumed session.
       * @TODO make this more specific than just checking against the video src!! (WL)
       *
       * If this video element can get the same unique id on each browser refresh
       * it would be possible to pass this unique id w/ `LoadRequest.customData`
       * and verify against currentMedia().customData below.
       */ if (this.#media.castSrc === (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentMedia"])()?.media.contentId) {
                castElementRef.add(this.#media);
                Object.entries(this.#remoteListeners).forEach(([event, listener])=>{
                    this.#remotePlayer.controller.addEventListener(event, listener);
                });
                /**
         * There is cast framework resume session bug when you refresh the page a few
         * times the this.#remotePlayer.currentTime will not be in sync with the receiver :(
         * The below status request syncs it back up.
         */ try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMediaStatus"])(new chrome.cast.media.GetStatusRequest());
                } catch (error) {
                    console.error(error);
                }
                // Dispatch the play, playing events manually to sync remote playing state.
                this.#remoteListeners[cf.RemotePlayerEventType.IS_PAUSED_CHANGED]();
                this.#remoteListeners[cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]();
            }
        }
    }
    #init() {
        if (!cf || this.#isInit) return;
        this.#isInit = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCastOptions"])(this.#media.castOptions);
        /**
     * @TODO add listeners for addtrack, removetrack (WL)
     * This only has an impact on <track> with a `src` because these have to be
     * loaded manually in the load() method. This will require a new load() call
     * for each added/removed track w/ src.
     */ this.#media.textTracks.addEventListener('change', ()=>this.#updateRemoteTextTrack());
        this.#onCastStateChanged();
        this.#remotePlayer = new cf.RemotePlayer();
        new cf.RemotePlayerController(this.#remotePlayer);
        this.#remoteListeners = {
            [cf.RemotePlayerEventType.IS_CONNECTED_CHANGED]: ({ value })=>{
                if (value === true) {
                    this.#state = 'connected';
                    this.dispatchEvent(new Event('connect'));
                } else {
                    this.#disconnect();
                    this.#state = 'disconnected';
                    this.dispatchEvent(new Event('disconnect'));
                }
            },
            [cf.RemotePlayerEventType.DURATION_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('durationchange'));
            },
            [cf.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('volumechange'));
            },
            [cf.RemotePlayerEventType.IS_MUTED_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('volumechange'));
            },
            [cf.RemotePlayerEventType.CURRENT_TIME_CHANGED]: ()=>{
                if (!this.#castPlayer?.isMediaLoaded) return;
                this.#media.dispatchEvent(new Event('timeupdate'));
            },
            [cf.RemotePlayerEventType.VIDEO_INFO_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('resize'));
            },
            [cf.RemotePlayerEventType.IS_PAUSED_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event(this.paused ? 'pause' : 'play'));
            },
            [cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]: ()=>{
                // Player states: IDLE, PLAYING, PAUSED, BUFFERING
                // https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.media#.PlayerState
                // pause event is handled above.
                if (this.#castPlayer?.playerState === chrome.cast.media.PlayerState.PAUSED) {
                    return;
                }
                this.#media.dispatchEvent(new Event({
                    [chrome.cast.media.PlayerState.PLAYING]: 'playing',
                    [chrome.cast.media.PlayerState.BUFFERING]: 'waiting',
                    [chrome.cast.media.PlayerState.IDLE]: 'emptied'
                }[this.#castPlayer?.playerState]));
            },
            [cf.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async ()=>{
                if (!this.#castPlayer?.isMediaLoaded) return;
                // mediaInfo is not immediately available due to a bug? wait one tick
                await Promise.resolve();
                this.#onRemoteMediaLoaded();
            }
        };
    }
    #onRemoteMediaLoaded() {
        this.#updateRemoteTextTrack();
    }
    async #updateRemoteTextTrack() {
        if (!this.#castPlayer) return;
        // Get the tracks w/ trackId's that have been loaded; manually or via a playlist like a M3U8 or MPD.
        const remoteTracks = this.#remotePlayer.mediaInfo?.tracks ?? [];
        const remoteSubtitles = remoteTracks.filter(({ type })=>type === chrome.cast.media.TrackType.TEXT);
        const localSubtitles = [
            ...this.#media.textTracks
        ].filter(({ kind })=>kind === 'subtitles' || kind === 'captions');
        // Create a new array from the local subs w/ the trackId's from the remote subs.
        const subtitles = remoteSubtitles.map(({ language, name, trackId })=>{
            // Find the corresponding local text track and assign the trackId.
            const { mode } = localSubtitles.find((local)=>local.language === language && local.label === name) ?? {};
            if (mode) return {
                mode,
                trackId
            };
            return false;
        }).filter(Boolean);
        const hiddenSubtitles = subtitles.filter(({ mode })=>mode !== 'showing');
        const hiddenTrackIds = hiddenSubtitles.map(({ trackId })=>trackId);
        const showingSubtitle = subtitles.find(({ mode })=>mode === 'showing');
        // Note this could also include audio or video tracks, diff against local state.
        const activeTrackIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentSession"])()?.getSessionObj().media[0]?.activeTrackIds ?? [];
        let requestTrackIds = activeTrackIds;
        if (activeTrackIds.length) {
            // Filter out all local hidden subtitle trackId's.
            requestTrackIds = requestTrackIds.filter((id)=>!hiddenTrackIds.includes(id));
        }
        if (showingSubtitle?.trackId) {
            requestTrackIds = [
                ...requestTrackIds,
                showingSubtitle.trackId
            ];
        }
        // Remove duplicate ids.
        requestTrackIds = [
            ...new Set(requestTrackIds)
        ];
        const arrayEquals = (a, b)=>a.length === b.length && a.every((a)=>b.includes(a));
        if (!arrayEquals(activeTrackIds, requestTrackIds)) {
            try {
                const request = new chrome.cast.media.EditTracksInfoRequest(requestTrackIds);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editTracksInfo"])(request);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
}),
"[project]/web/node_modules/castable-video/castable-mixin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CastableMediaMixin",
    ()=>CastableMediaMixin,
    "CastableVideoMixin",
    ()=>CastableVideoMixin
]);
/* global chrome */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$remote$2d$playback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/castable-video/castable-remote-playback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/castable-video/castable-utils.js [app-ssr] (ecmascript)");
;
;
const CastableMediaMixin = (superclass)=>class CastableMedia extends superclass {
        static observedAttributes = [
            ...superclass.observedAttributes ?? [],
            'cast-src',
            'cast-content-type',
            'cast-stream-type',
            'cast-receiver'
        ];
        #localState = {
            paused: false
        };
        #castOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultCastOptions"])();
        #castCustomData;
        #remote;
        get remote() {
            if (this.#remote) return this.#remote;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requiresCastFramework"])()) {
                // No need to load the Cast framework if it's disabled.
                if (!this.disableRemotePlayback) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadCastFramework"])();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].set(this, {
                    loadOnPrompt: ()=>this.#loadOnPrompt()
                });
                return this.#remote = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$remote$2d$playback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemotePlayback"](this);
            }
            return super.remote;
        }
        get #castPlayer() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateProps"].get(this.remote)?.getCastPlayer?.();
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            super.attributeChangedCallback(attrName, oldValue, newValue);
            if (attrName === 'cast-receiver' && newValue) {
                this.#castOptions.receiverApplicationId = newValue;
                return;
            }
            if (!this.#castPlayer) return;
            switch(attrName){
                case 'cast-stream-type':
                case 'cast-src':
                    this.load();
                    break;
            }
        }
        async #loadOnPrompt() {
            // Pause locally when the session is created.
            this.#localState.paused = super.paused;
            super.pause();
            // Sync over the muted state but not volume, 100% is different on TV's :P
            this.muted = super.muted;
            try {
                await this.load();
            } catch (err) {
                console.error(err);
            }
        }
        async load() {
            if (!this.#castPlayer) return super.load();
            const mediaInfo = new chrome.cast.media.MediaInfo(this.castSrc, this.castContentType);
            mediaInfo.customData = this.castCustomData;
            // Manually add text tracks with a `src` attribute.
            // M3U8's load text tracks in the receiver, handle these in the media loaded event.
            const subtitles = [
                ...this.querySelectorAll('track')
            ].filter(({ kind, src })=>src && (kind === 'subtitles' || kind === 'captions'));
            const activeTrackIds = [];
            let textTrackIdCount = 0;
            if (subtitles.length) {
                mediaInfo.tracks = subtitles.map((trackEl)=>{
                    const trackId = ++textTrackIdCount;
                    // only activate 1 subtitle text track.
                    if (activeTrackIds.length === 0 && trackEl.track.mode === 'showing') {
                        activeTrackIds.push(trackId);
                    }
                    const track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
                    track.trackContentId = trackEl.src;
                    track.trackContentType = 'text/vtt';
                    track.subtype = trackEl.kind === 'captions' ? chrome.cast.media.TextTrackType.CAPTIONS : chrome.cast.media.TextTrackType.SUBTITLES;
                    track.name = trackEl.label;
                    track.language = trackEl.srclang;
                    return track;
                });
            }
            if (this.castStreamType === 'live') {
                mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
            } else {
                mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
            }
            mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
            mediaInfo.metadata.title = this.title;
            mediaInfo.metadata.images = [
                {
                    url: this.poster
                }
            ];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHls"])(this.castSrc)) {
                const segmentFormat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlaylistSegmentFormat"])(this.castSrc);
                const isFragmentedMP4 = segmentFormat?.includes('m4s') || segmentFormat?.includes('mp4');
                if (isFragmentedMP4) {
                    mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.FMP4;
                    mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.FMP4;
                } else if (segmentFormat?.includes('ts')) {
                    mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.TS;
                    mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.TS;
                }
            }
            const request = new chrome.cast.media.LoadRequest(mediaInfo);
            request.currentTime = super.currentTime ?? 0;
            request.autoplay = !this.#localState.paused;
            request.activeTrackIds = activeTrackIds;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentSession"])()?.loadMedia(request);
            this.dispatchEvent(new Event('volumechange'));
        }
        play() {
            if (this.#castPlayer) {
                if (this.#castPlayer.isPaused) {
                    this.#castPlayer.controller?.playOrPause();
                }
                return;
            }
            return super.play();
        }
        pause() {
            if (this.#castPlayer) {
                if (!this.#castPlayer.isPaused) {
                    this.#castPlayer.controller?.playOrPause();
                }
                return;
            }
            super.pause();
        }
        /**
     * @see https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastOptions
     * @readonly
     *
     * @typedef {Object} CastOptions
     * @property {string} [receiverApplicationId='CC1AD845'] - The app id of the cast receiver.
     * @property {string} [autoJoinPolicy='origin_scoped'] - The auto join policy.
     * @property {string} [language='en-US'] - The language to use for the cast receiver.
     * @property {boolean} [androidReceiverCompatible=false] - Whether to use the Cast Connect.
     * @property {boolean} [resumeSavedSession=true] - Whether to resume the last session.
     *
     * @return {CastOptions}
     */ get castOptions() {
            return this.#castOptions;
        }
        get castReceiver() {
            return this.getAttribute('cast-receiver') ?? undefined;
        }
        set castReceiver(val) {
            if (this.castReceiver == val) return;
            this.setAttribute('cast-receiver', `${val}`);
        }
        // Allow the cast source url to be different than <video src>, could be a blob.
        get castSrc() {
            // Try the first <source src> for usage with even more native markup.
            return this.getAttribute('cast-src') ?? this.querySelector('source')?.src ?? this.currentSrc;
        }
        set castSrc(val) {
            if (this.castSrc == val) return;
            this.setAttribute('cast-src', `${val}`);
        }
        get castContentType() {
            return this.getAttribute('cast-content-type') ?? undefined;
        }
        set castContentType(val) {
            this.setAttribute('cast-content-type', `${val}`);
        }
        get castStreamType() {
            // NOTE: Per https://github.com/video-dev/media-ui-extensions/issues/3 `streamType` may yield `"unknown"`
            return this.getAttribute('cast-stream-type') ?? this.streamType ?? undefined;
        }
        set castStreamType(val) {
            this.setAttribute('cast-stream-type', `${val}`);
        }
        get castCustomData() {
            return this.#castCustomData;
        }
        set castCustomData(val) {
            const valType = typeof val;
            if (![
                'object',
                'undefined'
            ].includes(valType)) {
                console.error(`castCustomData must be nullish or an object but value was of type ${valType}`);
                return;
            }
            this.#castCustomData = val;
        }
        get readyState() {
            if (this.#castPlayer) {
                switch(this.#castPlayer.playerState){
                    case chrome.cast.media.PlayerState.IDLE:
                        return 0;
                    case chrome.cast.media.PlayerState.BUFFERING:
                        return 2;
                    default:
                        return 3;
                }
            }
            return super.readyState;
        }
        get paused() {
            if (this.#castPlayer) return this.#castPlayer.isPaused;
            return super.paused;
        }
        get muted() {
            if (this.#castPlayer) return this.#castPlayer?.isMuted;
            return super.muted;
        }
        set muted(val) {
            if (this.#castPlayer) {
                if (val && !this.#castPlayer.isMuted || !val && this.#castPlayer.isMuted) {
                    this.#castPlayer.controller?.muteOrUnmute();
                }
                return;
            }
            super.muted = val;
        }
        get volume() {
            if (this.#castPlayer) return this.#castPlayer?.volumeLevel ?? 1;
            return super.volume;
        }
        set volume(val) {
            if (this.#castPlayer) {
                this.#castPlayer.volumeLevel = +val;
                this.#castPlayer.controller?.setVolumeLevel();
                return;
            }
            super.volume = val;
        }
        get duration() {
            // castPlayer duration returns `0` when no media is loaded.
            if (this.#castPlayer && this.#castPlayer?.isMediaLoaded) {
                return this.#castPlayer?.duration ?? NaN;
            }
            return super.duration;
        }
        get currentTime() {
            if (this.#castPlayer && this.#castPlayer?.isMediaLoaded) {
                return this.#castPlayer?.currentTime ?? 0;
            }
            return super.currentTime;
        }
        set currentTime(val) {
            if (this.#castPlayer) {
                this.#castPlayer.currentTime = val;
                this.#castPlayer.controller?.seek();
                return;
            }
            super.currentTime = val;
        }
    };
const CastableVideoMixin = CastableMediaMixin;
}),
"[project]/web/node_modules/media-tracks/dist/change-event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackEvent",
    ()=>TrackEvent
]);
class TrackEvent extends Event {
    track;
    constructor(type, init){
        super(type);
        this.track = init.track;
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrivate",
    ()=>getPrivate,
    "setPrivate",
    ()=>setPrivate
]);
const privateProps = /* @__PURE__ */ new WeakMap();
function getPrivate(instance) {
    return privateProps.get(instance) ?? setPrivate(instance, {});
}
function setPrivate(instance, props) {
    let saved = privateProps.get(instance);
    if (!saved) privateProps.set(instance, saved = {});
    return Object.assign(saved, props);
}
;
}),
"[project]/web/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrackList",
    ()=>VideoTrackList,
    "addVideoTrack",
    ()=>addVideoTrack,
    "removeVideoTrack",
    ()=>removeVideoTrack,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/change-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addVideoTrack(media, track) {
    const trackList = media.videoTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in VideoTrackList.prototype)) {
        Object.defineProperty(VideoTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeVideoTrack(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media?.videoTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function selectedChanged(selected) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(selected).media.videoTracks ?? [];
    let hasUnselected = false;
    for (const track of trackList){
        if (track === selected) continue;
        track.selected = false;
        hasUnselected = true;
    }
    if (hasUnselected) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
        queueMicrotask(()=>{
            delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
            trackList.dispatchEvent(new Event("change"));
        });
    }
}
class VideoTrackList extends EventTarget {
    #addTrackCallback;
    #removeTrackCallback;
    #changeCallback;
    constructor(){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #tracks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
    }
    [Symbol.iterator]() {
        return this.#tracks.values();
    }
    get length() {
        return this.#tracks.size;
    }
    getTrackById(id) {
        return [
            ...this.#tracks
        ].find((track)=>track.id === id) ?? null;
    }
    get selectedIndex() {
        return [
            ...this.#tracks
        ].findIndex((track)=>track.selected);
    }
    get onaddtrack() {
        return this.#addTrackCallback;
    }
    set onaddtrack(callback) {
        if (this.#addTrackCallback) {
            this.removeEventListener("addtrack", this.#addTrackCallback);
            this.#addTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addTrackCallback = callback;
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return this.#removeTrackCallback;
    }
    set onremovetrack(callback) {
        if (this.#removeTrackCallback) {
            this.removeEventListener("removetrack", this.#removeTrackCallback);
            this.#removeTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeTrackCallback = callback;
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenditionEvent",
    ()=>RenditionEvent
]);
class RenditionEvent extends Event {
    rendition;
    constructor(type, init){
        super(type);
        this.rendition = init.rendition;
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRenditionList",
    ()=>VideoRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.videoRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in VideoRenditionList.prototype)) {
        Object.defineProperty(VideoRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.selected) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.videoTracks
    ].filter((track)=>track.selected).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
class VideoRenditionList extends EventTarget {
    #addRenditionCallback;
    #removeRenditionCallback;
    #changeCallback;
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        return getCurrentRenditions(this).find((rendition)=>`${rendition.id}` === `${id}`) ?? null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return this.#addRenditionCallback;
    }
    set onaddrendition(callback) {
        if (this.#addRenditionCallback) {
            this.removeEventListener("addrendition", this.#addRenditionCallback);
            this.#addRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addRenditionCallback = callback;
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return this.#removeRenditionCallback;
    }
    set onremoverendition(callback) {
        if (this.#removeRenditionCallback) {
            this.removeEventListener("removerendition", this.#removeRenditionCallback);
            this.#removeRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeRenditionCallback = callback;
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/video-rendition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRendition",
    ()=>VideoRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
;
class VideoRendition {
    src;
    id;
    width;
    height;
    bitrate;
    frameRate;
    codec;
    #selected = false;
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/video-track.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrack",
    ()=>VideoTrack,
    "VideoTrackKind",
    ()=>VideoTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
;
;
;
const VideoTrackKind = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary"
};
class VideoTrack {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #selected = false;
    addRendition(src, width, height, codec, bitrate, frameRate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoRendition"]();
        rendition.src = src;
        rendition.width = width;
        rendition.height = height;
        rendition.frameRate = frameRate;
        rendition.bitrate = bitrate;
        rendition.codec = codec;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        if (val !== true) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRenditionList",
    ()=>AudioRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in AudioRenditionList.prototype)) {
        Object.defineProperty(AudioRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.enabled) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.audioTracks
    ].filter((track)=>track.enabled).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
class AudioRenditionList extends EventTarget {
    #addRenditionCallback;
    #removeRenditionCallback;
    #changeCallback;
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        return getCurrentRenditions(this).find((rendition)=>`${rendition.id}` === `${id}`) ?? null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return this.#addRenditionCallback;
    }
    set onaddrendition(callback) {
        if (this.#addRenditionCallback) {
            this.removeEventListener("addrendition", this.#addRenditionCallback);
            this.#addRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addRenditionCallback = callback;
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return this.#removeRenditionCallback;
    }
    set onremoverendition(callback) {
        if (this.#removeRenditionCallback) {
            this.removeEventListener("removerendition", this.#removeRenditionCallback);
            this.#removeRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeRenditionCallback = callback;
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/audio-rendition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRendition",
    ()=>AudioRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
;
class AudioRendition {
    src;
    id;
    bitrate;
    codec;
    #selected = false;
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrackList",
    ()=>AudioTrackList,
    "addAudioTrack",
    ()=>addAudioTrack,
    "enabledChanged",
    ()=>enabledChanged,
    "removeAudioTrack",
    ()=>removeAudioTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/change-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addAudioTrack(media, track) {
    const trackList = media.audioTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in AudioTrackList.prototype)) {
        Object.defineProperty(AudioTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeAudioTrack(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media?.audioTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function enabledChanged(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioTracks;
    if (!trackList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
        trackList.dispatchEvent(new Event("change"));
    });
}
class AudioTrackList extends EventTarget {
    #addTrackCallback;
    #removeTrackCallback;
    #changeCallback;
    constructor(){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #tracks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
    }
    [Symbol.iterator]() {
        return this.#tracks.values();
    }
    get length() {
        return this.#tracks.size;
    }
    getTrackById(id) {
        return [
            ...this.#tracks
        ].find((track)=>track.id === id) ?? null;
    }
    get onaddtrack() {
        return this.#addTrackCallback;
    }
    set onaddtrack(callback) {
        if (this.#addTrackCallback) {
            this.removeEventListener("addtrack", this.#addTrackCallback);
            this.#addTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addTrackCallback = callback;
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return this.#removeTrackCallback;
    }
    set onremovetrack(callback) {
        if (this.#removeTrackCallback) {
            this.removeEventListener("removetrack", this.#removeTrackCallback);
            this.#removeTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeTrackCallback = callback;
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/audio-track.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrack",
    ()=>AudioTrack,
    "AudioTrackKind",
    ()=>AudioTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
;
;
;
const AudioTrackKind = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary"
};
class AudioTrack {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #enabled = false;
    addRendition(src, codec, bitrate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioRendition"]();
        rendition.src = src;
        rendition.codec = codec;
        rendition.bitrate = bitrate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get enabled() {
        return this.#enabled;
    }
    set enabled(val) {
        if (this.#enabled === val) return;
        this.#enabled = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enabledChanged"])(this);
    }
}
;
}),
"[project]/web/node_modules/media-tracks/dist/mixin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaTracksMixin",
    ()=>MediaTracksMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const nativeVideoTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "video");
const nativeAudioTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "audio");
function MediaTracksMixin(MediaElementClass) {
    if (!MediaElementClass?.prototype) return MediaElementClass;
    const videoTracksFn = getBaseMediaTracksFn(MediaElementClass, "video");
    if (!videoTracksFn || `${videoTracksFn}`.includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "videoTracks", {
            get () {
                return getVideoTracks(this);
            }
        });
    }
    const audioTracksFn = getBaseMediaTracksFn(MediaElementClass, "audio");
    if (!audioTracksFn || `${audioTracksFn}`.includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "audioTracks", {
            get () {
                return getAudioTracks(this);
            }
        });
    }
    if (!("addVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addVideoTrack = function(kind, label = "", language = "") {
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addVideoTrack"])(this, track);
            return track;
        };
    }
    if (!("removeVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeVideoTrack = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeVideoTrack"];
    }
    if (!("addAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addAudioTrack = function(kind, label = "", language = "") {
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAudioTrack"])(this, track);
            return track;
        };
    }
    if (!("removeAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeAudioTrack = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAudioTrack"];
    }
    if (!("videoRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "videoRenditions", {
            get () {
                return initVideoRenditions(this);
            }
        });
    }
    const initVideoRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions = renditions;
        }
        return renditions;
    };
    if (!("audioRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "audioRenditions", {
            get () {
                return initAudioRenditions(this);
            }
        });
    }
    const initAudioRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions = renditions;
        }
        return renditions;
    };
    return MediaElementClass;
}
function getBaseMediaTracksFn(MediaElementClass, type) {
    if (MediaElementClass?.prototype) {
        return Object.getOwnPropertyDescriptor(MediaElementClass.prototype, `${type}Tracks`)?.get;
    }
}
function getVideoTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks = tracks;
        if (nativeVideoTracksFn) {
            const nativeTracks = nativeVideoTracksFn.call(media.nativeEl ?? media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeVideoTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeVideoTrack"])(event.track);
            });
        }
    }
    return tracks;
}
function getAudioTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks = tracks;
        if (nativeAudioTracksFn) {
            const nativeTracks = nativeAudioTracksFn.call(media.nativeEl ?? media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAudioTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAudioTrack"])(event.track);
            });
        }
    }
    return tracks;
}
;
}),
"[project]/web/node_modules/media-tracks/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/mixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/change-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/web/node_modules/@mux/mux-player-react/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ze,
    "playerSoftwareName",
    ()=>fe,
    "playerSoftwareVersion",
    ()=>de
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@mux/playback-core/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$mux$2d$player$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@mux/mux-player/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$mux$2d$player$2f$dist$2f$base$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/@mux/mux-player/dist/base.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
var M = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].version) >= 19, E = {
    className: "class",
    classname: "class",
    htmlFor: "for",
    crossOrigin: "crossorigin",
    viewBox: "viewBox",
    playsInline: "playsinline",
    autoPlay: "autoplay",
    playbackRate: "playbackrate"
}, B = (e)=>e == null, ee = (e, t)=>B(t) ? !1 : e in t, te = (e)=>e.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`), ne = (e, t)=>{
    if (!(!M && typeof t == "boolean" && !t)) {
        if (ee(e, E)) return E[e];
        if (typeof t != "undefined") return /[A-Z]/.test(e) ? te(e) : e;
    }
};
var ae = (e, t)=>!M && typeof e == "boolean" ? "" : e, P = (e = {})=>{
    let { ref: t, ...n } = e;
    return Object.entries(n).reduce((o, [a, l])=>{
        let i = ne(a, l);
        if (!i) return o;
        let c = ae(l, a);
        return o[i] = c, o;
    }, {});
};
;
function x(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function re(...e) {
    return (t)=>{
        let n = !1, o = e.map((a)=>{
            let l = x(a, t);
            return !n && typeof l == "function" && (n = !0), l;
        });
        if (n) return ()=>{
            for(let a = 0; a < o.length; a++){
                let l = o[a];
                typeof l == "function" ? l() : x(e[a], null);
            }
        };
    };
}
function f(...e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](re(...e), e);
}
;
var oe = Object.prototype.hasOwnProperty, ue = (e, t)=>{
    if (Object.is(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : e.some((a, l)=>t[l] === a);
    let n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for(let a = 0; a < n.length; a++)if (!oe.call(t, n[a]) || !Object.is(e[n[a]], t[n[a]])) return !1;
    return !0;
}, p = (e, t, n)=>!ue(t, e[n]), se = (e, t, n)=>{
    e[n] = t;
}, ie = (e, t, n, o = se, a = p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let l = n == null ? void 0 : n.current;
        l && a(l, t, e) && o(l, t, e);
    }, [
        n == null ? void 0 : n.current,
        t
    ]), u = ie;
var ye = ()=>{
    try {
        return "3.10.2";
    } catch  {}
    return "UNKNOWN";
}, me = ye(), g = ()=>me;
;
var r = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let o = t == null ? void 0 : t.current;
        if (!o || !n) return;
        let a = e, l = n;
        return o.addEventListener(a, l), ()=>{
            o.removeEventListener(a, l);
        };
    }, [
        t == null ? void 0 : t.current,
        n,
        e
    ]);
var Pe = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ children: e, ...t }, n)=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("mux-player", {
        suppressHydrationWarning: !0,
        ...P(t),
        ref: n
    }, e)), xe = (e, t)=>{
    let { onAbort: n, onCanPlay: o, onCanPlayThrough: a, onEmptied: l, onLoadStart: i, onLoadedData: c, onLoadedMetadata: v, onProgress: R, onDurationChange: T, onVolumeChange: h, onRateChange: b, onResize: C, onWaiting: k, onPlay: O, onPlaying: S, onTimeUpdate: w, onPause: N, onSeeking: L, onSeeked: A, onStalled: I, onSuspend: _, onEnded: K, onError: H, onCuePointChange: D, onChapterChange: V, metadata: W, tokens: U, paused: z, playbackId: F, playbackRates: G, currentTime: Z, themeProps: j, extraSourceParams: q, castCustomData: J, _hlsConfig: Y, ...$ } = t;
    return u("tokens", U, e), u("playbackId", F, e), u("playbackRates", G, e), u("metadata", W, e), u("extraSourceParams", q, e), u("_hlsConfig", Y, e), u("themeProps", j, e), u("castCustomData", J, e), u("paused", z, e, (s, y)=>{
        y != null && (y ? s.pause() : s.play());
    }, (s, y, Q)=>s.hasAttribute("autoplay") && !s.hasPlayed ? !1 : p(s, y, Q)), u("currentTime", Z, e, (s, y)=>{
        y != null && (s.currentTime = y);
    }), r("abort", e, n), r("canplay", e, o), r("canplaythrough", e, a), r("emptied", e, l), r("loadstart", e, i), r("loadeddata", e, c), r("loadedmetadata", e, v), r("progress", e, R), r("durationchange", e, T), r("volumechange", e, h), r("ratechange", e, b), r("resize", e, C), r("waiting", e, k), r("play", e, O), r("playing", e, S), r("timeupdate", e, w), r("pause", e, N), r("seeking", e, L), r("seeked", e, A), r("stalled", e, I), r("suspend", e, _), r("ended", e, K), r("error", e, H), r("cuepointchange", e, D), r("chapterchange", e, V), [
        $
    ];
}, de = g(), fe = "mux-player-react", ge = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((e, t)=>{
    var i;
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), o = f(n, t), [a] = xe(n, e), [l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((i = e.playerInitTime) != null ? i : (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlayerInitTime"])());
    return __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Pe, {
        ref: o,
        defaultHiddenCaptions: e.defaultHiddenCaptions,
        playerSoftwareName: fe,
        playerSoftwareVersion: de,
        playerInitTime: l,
        ...a
    });
}), ze = ge;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/web/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
}),
"[project]/web/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
let warning = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
let invariant = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message)=>{
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message)=>{
        if (!check) {
            throw new Error(message);
        }
    };
}
;
}),
"[project]/web/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/web/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/web/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/web/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
;
const supportsScrollTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>window.ScrollTimeline !== undefined);
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseGroupPlaybackControls",
    ()=>BaseGroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)");
;
class BaseGroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation)=>"finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            } else if (typeof fallback === "function") {
                return fallback(animation);
            }
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++){
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupPlaybackControls",
    ()=>GroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)");
;
/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */ class GroupPlaybackControls extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"] {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueTransition",
    ()=>getValueTransition
]);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcGeneratorDuration",
    ()=>calcGeneratorDuration,
    "maxGeneratorDuration",
    ()=>maxGeneratorDuration
]);
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneratorEasing",
    ()=>createGeneratorEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)");
;
;
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({
        ...options,
        keyframes: [
            0,
            scale
        ]
    });
    const duration = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator), __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxGeneratorDuration"]);
    return {
        type: "keyframes",
        ease: (progress)=>{
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(duration)
    };
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGenerator",
    ()=>isGenerator
]);
function isGenerator(type) {
    return typeof type === "function";
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachTimeline",
    ()=>attachTimeline
]);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimationControls",
    ()=>NativeAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)");
;
;
class NativeAnimationControls {
    constructor(animation){
        this.animation = animation;
    }
    get duration() {
        var _a, _b, _c;
        const durationInMs = ((_b = (_a = this.animation) === null || _a === void 0 ? void 0 : _a.effect) === null || _b === void 0 ? void 0 : _b.getComputedTiming().duration) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.duration) || 300;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(Number(durationInMs));
    }
    get time() {
        var _a;
        if (this.animation) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
        }
        return 0;
    }
    set time(newTime) {
        if (this.animation) {
            this.animation.currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(newTime);
        }
    }
    get speed() {
        return this.animation ? this.animation.playbackRate : 1;
    }
    set speed(newSpeed) {
        if (this.animation) {
            this.animation.playbackRate = newSpeed;
        }
    }
    get state() {
        return this.animation ? this.animation.playState : "finished";
    }
    get startTime() {
        return this.animation ? this.animation.startTime : null;
    }
    get finished() {
        return this.animation ? this.animation.finished : Promise.resolve();
    }
    play() {
        this.animation && this.animation.play();
    }
    pause() {
        this.animation && this.animation.pause();
    }
    stop() {
        if (!this.animation || this.state === "idle" || this.state === "finished") {
            return;
        }
        if (this.animation.commitStyles) {
            this.animation.commitStyles();
        }
        this.cancel();
    }
    flatten() {
        var _a;
        if (!this.animation) return;
        (_a = this.animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming({
            easing: "linear"
        });
    }
    attachTimeline(timeline) {
        if (this.animation) (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attachTimeline"])(this.animation, timeline);
        return __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    }
    complete() {
        this.animation && this.animation.finish();
    }
    cancel() {
        try {
            this.animation && this.animation.cancel();
        } catch (e) {}
    }
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/web/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsFlags",
    ()=>supportsFlags
]);
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ const supportsFlags = {
    linearEasing: undefined
};
;
}),
"[project]/web/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoSupports",
    ()=>memoSupports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)");
;
;
function memoSupports(callback, supportsFlag) {
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(callback);
    return ()=>{
        var _a;
        return (_a = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsFlags"][supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsLinearEasing",
    ()=>supportsLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-ssr] (ecmascript)");
;
const supportsLinearEasing = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoSupports"])(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLinearEasing",
    ()=>generateLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)");
;
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++){
        points += easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progress"])(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezierAsString",
    ()=>cubicBezierAsString,
    "isWaapiSupportedEasing",
    ()=>isWaapiSupportedEasing,
    "mapEasingToNativeEasing",
    ()=>mapEasingToNativeEasing,
    "supportedWaapiEasing",
    ()=>supportedWaapiEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)");
;
;
;
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    } else if (typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateLinearEasing"])(easing, duration);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing)) {
        return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
        return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
        return supportedWaapiEasing[easing];
    }
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDragActive",
    ()=>isDragActive,
    "isDragging",
    ()=>isDragging
]);
const isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveElements",
    ()=>resolveElements
]);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) {
        return [
            elementOrSelector
        ];
    } else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            // TODO: Refactor to utils package
            // invariant(
            //     Boolean(scope.current),
            //     "Scope provided, but no element detected."
            // )
            root = scope.current;
        }
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGesture",
    ()=>setupGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
;
function setupGesture(elementOrSelector, options) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal
    };
    const cancel = ()=>gestureAbortController.abort();
    return [
        elements,
        eventOptions,
        cancel
    ];
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hover",
    ()=>hover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)");
;
;
/**
 * Filter out events that are not pointer events, or are triggering
 * while a Motion gesture is active.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.pointerType === "touch" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragActive"])()) return;
        callback(event);
    };
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const onPointerEnter = filterEvents((enterEvent)=>{
        const { target } = enterEvent;
        const onHoverEnd = onHoverStart(enterEvent);
        if (typeof onHoverEnd !== "function" || !target) return;
        const onPointerLeave = filterEvents((leaveEvent)=>{
            onHoverEnd(leaveEvent);
            target.removeEventListener("pointerleave", onPointerLeave);
        });
        target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    });
    elements.forEach((element)=>{
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeOrChild",
    ()=>isNodeOrChild
]);
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ const isNodeOrChild = (parent, child)=>{
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPrimaryPointer",
    ()=>isPrimaryPointer
]);
const isPrimaryPointer = (event)=>{
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    } else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
    }
};
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementKeyboardAccessible",
    ()=>isElementKeyboardAccessible
]);
const focusableElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPressing",
    ()=>isPressing
]);
const isPressing = new WeakSet();
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enableKeyboardPress",
    ()=>enableKeyboardPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)");
;
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
const enableKeyboardPress = (focusEvent, eventOptions)=>{
    const element = focusEvent.currentTarget;
    if (!element) return;
    const handleKeydown = filterEvents(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(()=>{
            firePointerEvent(element, "up");
        });
        const handleBlur = ()=>firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", ()=>element.removeEventListener("keydown", handleKeydown), eventOptions);
};
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "press",
    ()=>press
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimaryPointer"])(event) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragActive"])();
}
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(elementOrSelector, onPressStart, options = {}) {
    const [elements, eventOptions, cancelEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const startPress = (startEvent)=>{
        const element = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].add(element);
        const onPressEnd = onPressStart(startEvent);
        const onPointerEnd = (endEvent, success)=>{
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (!isValidPressEvent(endEvent) || !__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].delete(element);
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, {
                    success
                });
            }
        };
        const onPointerUp = (upEvent)=>{
            onPointerEnd(upEvent, options.useGlobalTarget || (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNodeOrChild"])(element, upEvent.target));
        };
        const onPointerCancel = (cancelEvent)=>{
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    elements.forEach((element)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"])(element) && element.getAttribute("tabindex") === null) {
            element.tabIndex = 0;
        }
        const target = options.useGlobalTarget ? window : element;
        target.addEventListener("pointerdown", startPress, eventOptions);
        element.addEventListener("focus", (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableKeyboardPress"])(event, eventOptions), eventOptions);
    });
    return cancelEvents;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyGeneratorOptions",
    ()=>applyGeneratorOptions,
    "convertMotionOptionsToNative",
    ()=>convertMotionOptionsToNative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultEasing = "easeOut";
function applyGeneratorOptions(options) {
    var _a;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isGenerator"])(options.type)) {
        const generatorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(options, 100, options.type);
        options.ease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() ? generatorOptions.ease : defaultEasing;
        options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(generatorOptions.duration);
        options.type = "keyframes";
    } else {
        options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = options.duration) !== null && _a !== void 0 ? _a : 0.3);
        options.ease = options.ease || defaultEasing;
    }
}
// TODO: Reuse for NativeAnimation
function convertMotionOptionsToNative(valueName, keyframes, options) {
    var _a;
    const nativeKeyframes = {};
    const nativeOptions = {
        fill: "both",
        easing: "linear",
        composite: "replace"
    };
    nativeOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = options.delay) !== null && _a !== void 0 ? _a : 0);
    applyGeneratorOptions(options);
    nativeOptions.duration = options.duration;
    const { ease, times } = options;
    if (times) nativeKeyframes.offset = times;
    nativeKeyframes[valueName] = keyframes;
    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(ease, options.duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) {
        nativeKeyframes.easing = easing;
    } else {
        nativeOptions.easing = easing;
    }
    return {
        keyframes: nativeKeyframes,
        options: nativeOptions
    };
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PseudoAnimation",
    ()=>PseudoAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-ssr] (ecmascript)");
;
;
class PseudoAnimation extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeAnimationControls"] {
    constructor(target, pseudoElement, valueName, keyframes, options){
        const animationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertMotionOptionsToNative"])(valueName, keyframes, options);
        const animation = target.animate(animationOptions.keyframes, {
            pseudoElement,
            ...animationOptions.options
        });
        super(animation);
    }
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chooseLayerType",
    ()=>chooseLayerType
]);
function chooseLayerType(valueName) {
    if (valueName === "layout") return "group";
    if (valueName === "enter" || valueName === "new") return "new";
    if (valueName === "exit" || valueName === "old") return "old";
    return "group";
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>css
]);
let pendingRules = {};
let style = null;
const css = {
    set: (selector, values)=>{
        pendingRules[selector] = values;
    },
    commit: ()=>{
        if (!style) {
            style = document.createElement("style");
            style.id = "motion-view";
        }
        let cssText = "";
        for(const selector in pendingRules){
            const rule = pendingRules[selector];
            cssText += `${selector} {\n`;
            for (const [property, value] of Object.entries(rule)){
                cssText += `  ${property}: ${value};\n`;
            }
            cssText += "}\n";
        }
        style.textContent = cssText;
        document.head.appendChild(style);
        pendingRules = {};
    },
    remove: ()=>{
        if (style && style.parentElement) {
            style.parentElement.removeChild(style);
        }
    }
};
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLayerName",
    ()=>getLayerName
]);
function getLayerName(pseudoElement) {
    const match = pseudoElement.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
    if (!match) return null;
    return {
        layer: match[2],
        type: match[1]
    };
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimations",
    ()=>getViewAnimations
]);
function filterViewAnimations(animation) {
    var _a;
    const { effect } = animation;
    if (!effect) return false;
    return effect.target === document.documentElement && ((_a = effect.pseudoElement) === null || _a === void 0 ? void 0 : _a.startsWith("::view-transition"));
}
function getViewAnimations() {
    return document.getAnimations().filter(filterViewAnimations);
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasTarget",
    ()=>hasTarget
]);
function hasTarget(target, targets) {
    return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/start.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startViewAnimation",
    ()=>startViewAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$PseudoAnimation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const definitionNames = [
    "layout",
    "enter",
    "exit",
    "new",
    "old"
];
function startViewAnimation(update, defaultOptions, targets) {
    if (!document.startViewTransition) {
        return new Promise(async (resolve)=>{
            await update();
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"]([]));
        });
    }
    // TODO: Go over existing targets and ensure they all have ids
    /**
     * If we don't have any animations defined for the root target,
     * remove it from being captured.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasTarget"])("root", targets)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].set(":root", {
            "view-transition-name": "none"
        });
    }
    /**
     * Set the timing curve to linear for all view transition layers.
     * This gets baked into the keyframes, which can't be changed
     * without breaking the generated animation.
     *
     * This allows us to set easing via updateTiming - which can be changed.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
        "animation-timing-function": "linear !important"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].commit(); // Write
    const transition = document.startViewTransition(async ()=>{
        await update();
    // TODO: Go over new targets and ensure they all have ids
    });
    transition.finished.finally(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].remove(); // Write
    });
    return new Promise((resolve)=>{
        transition.ready.then(()=>{
            var _a;
            const generatedViewAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getViewAnimations"])();
            const animations = [];
            /**
             * Create animations for our definitions
             */ targets.forEach((definition, target)=>{
                // TODO: If target is not "root", resolve elements
                // and iterate over each
                for (const key of definitionNames){
                    if (!definition[key]) continue;
                    const { keyframes, options } = definition[key];
                    for (let [valueName, valueKeyframes] of Object.entries(keyframes)){
                        if (!valueKeyframes) continue;
                        const valueOptions = {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, valueName),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueTransition"])(options, valueName)
                        };
                        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chooseLayerType"])(key);
                        /**
                         * If this is an opacity animation, and keyframes are not an array,
                         * we need to convert them into an array and set an initial value.
                         */ if (valueName === "opacity" && !Array.isArray(valueKeyframes)) {
                            const initialValue = type === "new" ? 0 : 1;
                            valueKeyframes = [
                                initialValue,
                                valueKeyframes
                            ];
                        }
                        /**
                         * Resolve stagger function if provided.
                         */ if (typeof valueOptions.delay === "function") {
                            valueOptions.delay = valueOptions.delay(0, 1);
                        }
                        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$PseudoAnimation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PseudoAnimation"](document.documentElement, `::view-transition-${type}(${target})`, valueName, valueKeyframes, valueOptions);
                        animations.push(animation);
                    }
                }
            });
            /**
             * Handle browser generated animations
             */ for (const animation of generatedViewAnimations){
                if (animation.playState === "finished") continue;
                const { effect } = animation;
                if (!effect || !(effect instanceof KeyframeEffect)) continue;
                const { pseudoElement } = effect;
                if (!pseudoElement) continue;
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayerName"])(pseudoElement);
                if (!name) continue;
                const targetDefinition = targets.get(name.layer);
                if (!targetDefinition) {
                    /**
                     * If transition name is group then update the timing of the animation
                     * whereas if it's old or new then we could possibly replace it using
                     * the above method.
                     */ const transitionName = name.type === "group" ? "layout" : "";
                    const animationTransition = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, transitionName)
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyGeneratorOptions"])(animationTransition);
                    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(animationTransition.ease, animationTransition.duration);
                    effect.updateTiming({
                        delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = animationTransition.delay) !== null && _a !== void 0 ? _a : 0),
                        duration: animationTransition.duration,
                        easing
                    });
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeAnimationControls"](animation));
                } else if (hasOpacity(targetDefinition, "enter") && hasOpacity(targetDefinition, "exit") && effect.getKeyframes().some((keyframe)=>keyframe.mixBlendMode)) {
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeAnimationControls"](animation));
                } else {
                    animation.cancel();
                }
            }
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"](animations));
        });
    });
}
function hasOpacity(target, key) {
    var _a;
    return (_a = target === null || target === void 0 ? void 0 : target[key]) === null || _a === void 0 ? void 0 : _a.keyframes.opacity;
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/view/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewTransitionBuilder",
    ()=>ViewTransitionBuilder,
    "view",
    ()=>view
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/start.mjs [app-ssr] (ecmascript)");
;
;
/**
 * TODO:
 * - Create view transition on next tick
 * - Replace animations with Motion animations
 * - Return GroupAnimation on next tick
 */ class ViewTransitionBuilder {
    constructor(update, options = {}){
        this.currentTarget = "root";
        this.targets = new Map();
        this.notifyReady = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        this.readyPromise = new Promise((resolve)=>{
            this.notifyReady = resolve;
        });
        queueMicrotask(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startViewAnimation"])(update, options, this.targets).then((animation)=>this.notifyReady(animation));
        });
    }
    get(selector) {
        this.currentTarget = selector;
        return this;
    }
    layout(keyframes, options) {
        this.updateTarget("layout", keyframes, options);
        return this;
    }
    new(keyframes, options) {
        this.updateTarget("new", keyframes, options);
        return this;
    }
    old(keyframes, options) {
        this.updateTarget("old", keyframes, options);
        return this;
    }
    enter(keyframes, options) {
        this.updateTarget("enter", keyframes, options);
        return this;
    }
    exit(keyframes, options) {
        this.updateTarget("exit", keyframes, options);
        return this;
    }
    crossfade(options) {
        this.updateTarget("enter", {
            opacity: 1
        }, options);
        this.updateTarget("exit", {
            opacity: 0
        }, options);
        return this;
    }
    updateTarget(target, keyframes, options = {}) {
        const { currentTarget, targets } = this;
        if (!targets.has(currentTarget)) {
            targets.set(currentTarget, {});
        }
        const targetData = targets.get(currentTarget);
        targetData[target] = {
            keyframes,
            options
        };
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
}
function view(update, defaultOptions = {}) {
    return new ViewTransitionBuilder(update, defaultOptions);
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDragLock",
    ()=>setDragLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
;
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis]) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis] = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis] = false;
            };
        }
    } else {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x || __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y = false;
            };
        }
    }
}
;
}),
"[project]/web/node_modules/motion-dom/dist/es/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/view/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/web/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/web/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-ssr] (ecmascript)");
;
// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/web/node_modules/@sanity/image-url/lib/node/parseAssetId.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
function parseAssetId(ref) {
    var _a = ref.split('-'), id = _a[1], dimensionString = _a[2], format = _a[3];
    if (!id || !dimensionString || !format) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }
    var _b = dimensionString.split('x'), imgWidthStr = _b[0], imgHeightStr = _b[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);
    if (!isValidAssetId) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }
    return {
        id: id,
        width: width,
        height: height,
        format: format
    };
}
exports.default = parseAssetId; //# sourceMappingURL=parseAssetId.js.map
}),
"[project]/web/node_modules/@sanity/image-url/lib/node/parseSource.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInProgressUpload = void 0;
var isRef = function(src) {
    var source = src;
    return source ? typeof source._ref === 'string' : false;
};
var isAsset = function(src) {
    var source = src;
    return source ? typeof source._id === 'string' : false;
};
var isAssetStub = function(src) {
    var source = src;
    return source && source.asset ? typeof source.asset.url === 'string' : false;
};
// Detect in-progress uploads (has upload key but no complete asset reference)
var isInProgressUpload = function(src) {
    if (typeof src === 'object' && src !== null) {
        var obj = src;
        // Check if it has an upload key (indicating in-progress upload)
        return obj._upload && (!obj.asset || !obj.asset._ref);
    }
    return false;
};
exports.isInProgressUpload = isInProgressUpload;
// Convert an asset-id, asset or image to an image record suitable for processing
// eslint-disable-next-line complexity
function parseSource(source) {
    if (!source) {
        return null;
    }
    var image;
    if (typeof source === 'string' && isUrl(source)) {
        // Someone passed an existing image url?
        image = {
            asset: {
                _ref: urlToId(source)
            }
        };
    } else if (typeof source === 'string') {
        // Just an asset id
        image = {
            asset: {
                _ref: source
            }
        };
    } else if (isRef(source)) {
        // We just got passed an asset directly
        image = {
            asset: source
        };
    } else if (isAsset(source)) {
        // If we were passed an image asset document
        image = {
            asset: {
                _ref: source._id || ''
            }
        };
    } else if (isAssetStub(source)) {
        // If we were passed a partial asset (`url`, but no `_id`)
        image = {
            asset: {
                _ref: urlToId(source.asset.url)
            }
        };
    } else if (typeof source.asset === 'object') {
        // Probably an actual image with materialized asset
        image = __assign({}, source);
    } else {
        // We got something that does not look like an image, or it is an image
        // that currently isn't sporting an asset.
        return null;
    }
    var img = source;
    if (img.crop) {
        image.crop = img.crop;
    }
    if (img.hotspot) {
        image.hotspot = img.hotspot;
    }
    return applyDefaults(image);
}
exports.default = parseSource;
function isUrl(url) {
    return /^https?:\/\//.test("".concat(url));
}
function urlToId(url) {
    var parts = url.split('/').slice(-1);
    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, '-$1');
}
// Mock crop and hotspot if image lacks it
function applyDefaults(image) {
    if (image.crop && image.hotspot) {
        return image;
    }
    // We need to pad in default values for crop or hotspot
    var result = __assign({}, image);
    if (!result.crop) {
        result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        };
    }
    if (!result.hotspot) {
        result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1.0,
            width: 1.0
        };
    }
    return result;
} //# sourceMappingURL=parseSource.js.map
}),
"[project]/web/node_modules/@sanity/image-url/lib/node/urlForImage.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSource = exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = void 0;
var parseAssetId_1 = __importDefault(__turbopack_context__.r("[project]/web/node_modules/@sanity/image-url/lib/node/parseAssetId.js [app-ssr] (ecmascript)"));
var parseSource_1 = __importStar(__turbopack_context__.r("[project]/web/node_modules/@sanity/image-url/lib/node/parseSource.js [app-ssr] (ecmascript)"));
exports.parseSource = parseSource_1.default;
exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
    [
        'width',
        'w'
    ],
    [
        'height',
        'h'
    ],
    [
        'format',
        'fm'
    ],
    [
        'download',
        'dl'
    ],
    [
        'blur',
        'blur'
    ],
    [
        'sharpen',
        'sharp'
    ],
    [
        'invert',
        'invert'
    ],
    [
        'orientation',
        'or'
    ],
    [
        'minHeight',
        'min-h'
    ],
    [
        'maxHeight',
        'max-h'
    ],
    [
        'minWidth',
        'min-w'
    ],
    [
        'maxWidth',
        'max-w'
    ],
    [
        'quality',
        'q'
    ],
    [
        'fit',
        'fit'
    ],
    [
        'crop',
        'crop'
    ],
    [
        'saturation',
        'sat'
    ],
    [
        'auto',
        'auto'
    ],
    [
        'dpr',
        'dpr'
    ],
    [
        'pad',
        'pad'
    ],
    [
        'frame',
        'frame'
    ]
];
function urlForImage(options) {
    var spec = __assign({}, options || {});
    var source = spec.source;
    delete spec.source;
    var image = (0, parseSource_1.default)(source);
    if (!image) {
        if (source && (0, parseSource_1.isInProgressUpload)(source)) {
            // This is a placeholder image that will be replaced with the actual image when the upload is complete
            // This is a 0x0 transparent PNG image
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=';
        }
        throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
    }
    var id = image.asset._ref || image.asset._id || '';
    var asset = (0, parseAssetId_1.default)(id);
    // Compute crop rect in terms of pixel coordinates in the raw source image
    var cropLeft = Math.round(image.crop.left * asset.width);
    var cropTop = Math.round(image.crop.top * asset.height);
    var crop = {
        left: cropLeft,
        top: cropTop,
        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
    };
    // Compute hot spot rect in terms of pixel coordinates
    var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
    var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
    var hotSpotCenterX = image.hotspot.x * asset.width;
    var hotSpotCenterY = image.hotspot.y * asset.height;
    var hotspot = {
        left: hotSpotCenterX - hotSpotHorizontalRadius,
        top: hotSpotCenterY - hotSpotVerticalRadius,
        right: hotSpotCenterX + hotSpotHorizontalRadius,
        bottom: hotSpotCenterY + hotSpotVerticalRadius
    };
    // If irrelevant, or if we are requested to: don't perform crop/fit based on
    // the crop/hotspot.
    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
        spec = __assign(__assign({}, spec), fit({
            crop: crop,
            hotspot: hotspot
        }, spec));
    }
    return specToImageUrl(__assign(__assign({}, spec), {
        asset: asset
    }));
}
exports.default = urlForImage;
// eslint-disable-next-line complexity
function specToImageUrl(spec) {
    var cdnUrl = (spec.baseUrl || 'https://cdn.sanity.io').replace(/\/+$/, '');
    var vanityStub = spec.vanityName ? "/".concat(spec.vanityName) : '';
    var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format).concat(vanityStub);
    var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
    var params = [];
    if (spec.rect) {
        // Only bother url with a crop if it actually crops anything
        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
        if (isEffectiveCrop) {
            params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
        }
    }
    if (spec.bg) {
        params.push("bg=".concat(spec.bg));
    }
    if (spec.focalPoint) {
        params.push("fp-x=".concat(spec.focalPoint.x));
        params.push("fp-y=".concat(spec.focalPoint.y));
    }
    var flip = [
        spec.flipHorizontal && 'h',
        spec.flipVertical && 'v'
    ].filter(Boolean).join('');
    if (flip) {
        params.push("flip=".concat(flip));
    }
    // Map from spec name to url param name, and allow using the actual param name as an alternative
    exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
        var specName = mapping[0], param = mapping[1];
        if (typeof spec[specName] !== 'undefined') {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
        } else if (typeof spec[param] !== 'undefined') {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
        }
    });
    if (params.length === 0) {
        return baseUrl;
    }
    return "".concat(baseUrl, "?").concat(params.join('&'));
}
function fit(source, spec) {
    var cropRect;
    var imgWidth = spec.width;
    var imgHeight = spec.height;
    // If we are not constraining the aspect ratio, we'll just use the whole crop
    if (!(imgWidth && imgHeight)) {
        return {
            width: imgWidth,
            height: imgHeight,
            rect: source.crop
        };
    }
    var crop = source.crop;
    var hotspot = source.hotspot;
    // If we are here, that means aspect ratio is locked and fitting will be a bit harder
    var desiredAspectRatio = imgWidth / imgHeight;
    var cropAspectRatio = crop.width / crop.height;
    if (cropAspectRatio > desiredAspectRatio) {
        // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
        var height = Math.round(crop.height);
        var width = Math.round(height * desiredAspectRatio);
        var top_2 = Math.max(0, Math.round(crop.top));
        // Center output horizontally over hotspot
        var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
        var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
        // Keep output within crop
        if (left < crop.left) {
            left = crop.left;
        } else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
        }
        cropRect = {
            left: left,
            top: top_2,
            width: width,
            height: height
        };
    } else {
        // The crop is taller than the desired ratio, we are cutting from top and bottom
        var width = crop.width;
        var height = Math.round(width / desiredAspectRatio);
        var left = Math.max(0, Math.round(crop.left));
        // Center output vertically over hotspot
        var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
        var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
        // Keep output rect within crop
        if (top_3 < crop.top) {
            top_3 = crop.top;
        } else if (top_3 + height > crop.top + crop.height) {
            top_3 = crop.top + crop.height - height;
        }
        cropRect = {
            left: left,
            top: top_3,
            width: width,
            height: height
        };
    }
    return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect
    };
} //# sourceMappingURL=urlForImage.js.map
}),
"[project]/web/node_modules/@sanity/image-url/lib/node/builder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageUrlBuilder = void 0;
var urlForImage_1 = __importStar(__turbopack_context__.r("[project]/web/node_modules/@sanity/image-url/lib/node/urlForImage.js [app-ssr] (ecmascript)"));
var validFits = [
    'clip',
    'crop',
    'fill',
    'fillmax',
    'max',
    'scale',
    'min'
];
var validCrops = [
    'top',
    'bottom',
    'left',
    'right',
    'center',
    'focalpoint',
    'entropy'
];
var validAutoModes = [
    'format'
];
function isSanityModernClientLike(client) {
    return client && 'config' in client ? typeof client.config === 'function' : false;
}
function isSanityClientLike(client) {
    return client && 'clientConfig' in client ? typeof client.clientConfig === 'object' : false;
}
function rewriteSpecName(key) {
    var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
    for(var _i = 0, specs_1 = specs; _i < specs_1.length; _i++){
        var entry = specs_1[_i];
        var specName = entry[0], param = entry[1];
        if (key === specName || key === param) {
            return specName;
        }
    }
    return key;
}
function urlBuilder(options) {
    // Did we get a modernish client?
    if (isSanityModernClientLike(options)) {
        // Inherit config from client
        var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
        var apiHost = apiUrl || 'https://api.sanity.io';
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
            projectId: projectId,
            dataset: dataset
        });
    }
    // Did we get a SanityClient?
    if (isSanityClientLike(options)) {
        // Inherit config from client
        var _b = options.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
        var apiHost = apiUrl || 'https://api.sanity.io';
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
            projectId: projectId,
            dataset: dataset
        });
    }
    // Or just accept the options as given
    return new ImageUrlBuilder(null, options || {});
}
exports.default = urlBuilder;
var ImageUrlBuilder = function() {
    function ImageUrlBuilder(parent, options) {
        this.options = parent ? __assign(__assign({}, parent.options || {}), options || {}) : __assign({}, options || {}); // Copy options
    }
    ImageUrlBuilder.prototype.withOptions = function(options) {
        var baseUrl = options.baseUrl || this.options.baseUrl;
        var newOptions = {
            baseUrl: baseUrl
        };
        for(var key in options){
            if (options.hasOwnProperty(key)) {
                var specKey = rewriteSpecName(key);
                newOptions[specKey] = options[key];
            }
        }
        return new ImageUrlBuilder(this, __assign({
            baseUrl: baseUrl
        }, newOptions));
    };
    // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
    // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
    // studio, the 'image'-document must be provided.
    ImageUrlBuilder.prototype.image = function(source) {
        return this.withOptions({
            source: source
        });
    };
    // Specify the dataset
    ImageUrlBuilder.prototype.dataset = function(dataset) {
        return this.withOptions({
            dataset: dataset
        });
    };
    // Specify the projectId
    ImageUrlBuilder.prototype.projectId = function(projectId) {
        return this.withOptions({
            projectId: projectId
        });
    };
    // Specify background color
    ImageUrlBuilder.prototype.bg = function(bg) {
        return this.withOptions({
            bg: bg
        });
    };
    // Set DPR scaling factor
    ImageUrlBuilder.prototype.dpr = function(dpr) {
        // A DPR of 1 is the default - so only include it if we have a different value
        return this.withOptions(dpr && dpr !== 1 ? {
            dpr: dpr
        } : {});
    };
    // Specify the width of the image in pixels
    ImageUrlBuilder.prototype.width = function(width) {
        return this.withOptions({
            width: width
        });
    };
    // Specify the height of the image in pixels
    ImageUrlBuilder.prototype.height = function(height) {
        return this.withOptions({
            height: height
        });
    };
    // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
    ImageUrlBuilder.prototype.focalPoint = function(x, y) {
        return this.withOptions({
            focalPoint: {
                x: x,
                y: y
            }
        });
    };
    ImageUrlBuilder.prototype.maxWidth = function(maxWidth) {
        return this.withOptions({
            maxWidth: maxWidth
        });
    };
    ImageUrlBuilder.prototype.minWidth = function(minWidth) {
        return this.withOptions({
            minWidth: minWidth
        });
    };
    ImageUrlBuilder.prototype.maxHeight = function(maxHeight) {
        return this.withOptions({
            maxHeight: maxHeight
        });
    };
    ImageUrlBuilder.prototype.minHeight = function(minHeight) {
        return this.withOptions({
            minHeight: minHeight
        });
    };
    // Specify width and height in pixels
    ImageUrlBuilder.prototype.size = function(width, height) {
        return this.withOptions({
            width: width,
            height: height
        });
    };
    // Specify blur between 0 and 100
    ImageUrlBuilder.prototype.blur = function(blur) {
        return this.withOptions({
            blur: blur
        });
    };
    ImageUrlBuilder.prototype.sharpen = function(sharpen) {
        return this.withOptions({
            sharpen: sharpen
        });
    };
    // Specify the desired rectangle of the image
    ImageUrlBuilder.prototype.rect = function(left, top, width, height) {
        return this.withOptions({
            rect: {
                left: left,
                top: top,
                width: width,
                height: height
            }
        });
    };
    // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
    ImageUrlBuilder.prototype.format = function(format) {
        return this.withOptions({
            format: format
        });
    };
    ImageUrlBuilder.prototype.invert = function(invert) {
        return this.withOptions({
            invert: invert
        });
    };
    // Rotation in degrees 0, 90, 180, 270
    ImageUrlBuilder.prototype.orientation = function(orientation) {
        return this.withOptions({
            orientation: orientation
        });
    };
    // Compression quality 0-100
    ImageUrlBuilder.prototype.quality = function(quality) {
        return this.withOptions({
            quality: quality
        });
    };
    // Make it a download link. Parameter is default filename.
    ImageUrlBuilder.prototype.forceDownload = function(download) {
        return this.withOptions({
            download: download
        });
    };
    // Flip image horizontally
    ImageUrlBuilder.prototype.flipHorizontal = function() {
        return this.withOptions({
            flipHorizontal: true
        });
    };
    // Flip image vertically
    ImageUrlBuilder.prototype.flipVertical = function() {
        return this.withOptions({
            flipVertical: true
        });
    };
    // Ignore crop/hotspot from image record, even when present
    ImageUrlBuilder.prototype.ignoreImageParams = function() {
        return this.withOptions({
            ignoreImageParams: true
        });
    };
    ImageUrlBuilder.prototype.fit = function(value) {
        if (validFits.indexOf(value) === -1) {
            throw new Error("Invalid fit mode \"".concat(value, "\""));
        }
        return this.withOptions({
            fit: value
        });
    };
    ImageUrlBuilder.prototype.crop = function(value) {
        if (validCrops.indexOf(value) === -1) {
            throw new Error("Invalid crop mode \"".concat(value, "\""));
        }
        return this.withOptions({
            crop: value
        });
    };
    // Saturation
    ImageUrlBuilder.prototype.saturation = function(saturation) {
        return this.withOptions({
            saturation: saturation
        });
    };
    ImageUrlBuilder.prototype.auto = function(value) {
        if (validAutoModes.indexOf(value) === -1) {
            throw new Error("Invalid auto mode \"".concat(value, "\""));
        }
        return this.withOptions({
            auto: value
        });
    };
    // Specify the number of pixels to pad the image
    ImageUrlBuilder.prototype.pad = function(pad) {
        return this.withOptions({
            pad: pad
        });
    };
    // Vanity URL for more SEO friendly URLs
    ImageUrlBuilder.prototype.vanityName = function(value) {
        return this.withOptions({
            vanityName: value
        });
    };
    ImageUrlBuilder.prototype.frame = function(frame) {
        if (frame !== 1) {
            throw new Error("Invalid frame value \"".concat(frame, "\""));
        }
        return this.withOptions({
            frame: frame
        });
    };
    // Gets the url based on the submitted parameters
    ImageUrlBuilder.prototype.url = function() {
        return (0, urlForImage_1.default)(this.options);
    };
    // Alias for url()
    ImageUrlBuilder.prototype.toString = function() {
        return this.url();
    };
    return ImageUrlBuilder;
}();
exports.ImageUrlBuilder = ImageUrlBuilder; //# sourceMappingURL=builder.js.map
}),
"[project]/web/node_modules/@sanity/image-url/lib/node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var builder_1 = __importDefault(__turbopack_context__.r("[project]/web/node_modules/@sanity/image-url/lib/node/builder.js [app-ssr] (ecmascript)"));
module.exports = builder_1.default; //# sourceMappingURL=index.js.map
}),
"[project]/web/node_modules/get-it/dist/_chunks-es/defaultOptionsValidator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p",
    ()=>r,
    "v",
    ()=>s
]);
const e = !(typeof navigator > "u") && "ReactNative" === navigator.product, t = {
    timeout: e ? 6e4 : 12e4
}, r = function(r) {
    const a = {
        ...t,
        ..."string" == typeof r ? {
            url: r
        } : r
    };
    if (a.timeout = o(a.timeout), a.query) {
        const { url: t, searchParams: r } = function(t) {
            const r = t.indexOf("?");
            if (-1 === r) return {
                url: t,
                searchParams: new URLSearchParams
            };
            const o = t.slice(0, r), a = t.slice(r + 1);
            if (!e) return {
                url: o,
                searchParams: new URLSearchParams(a)
            };
            if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
            const s = new URLSearchParams;
            for (const e of a.split("&")){
                const [t, r] = e.split("=");
                t && s.append(n(t), n(r || ""));
            }
            return {
                url: o,
                searchParams: s
            };
        }(a.url);
        for (const [e, n] of Object.entries(a.query)){
            if (void 0 !== n) if (Array.isArray(n)) for (const t of n)r.append(e, t);
            else r.append(e, n);
            const o = r.toString();
            o && (a.url = `${t}?${o}`);
        }
    }
    return a.method = a.body && !a.method ? "POST" : (a.method || "GET").toUpperCase(), a;
};
function n(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
}
function o(e) {
    if (!1 === e || 0 === e) return !1;
    if (e.connect || e.socket) return e;
    const r = Number(e);
    return isNaN(r) ? o(t.timeout) : {
        connect: r,
        socket: r
    };
}
const a = /^https?:\/\//i, s = function(e) {
    if (!a.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
};
;
 //# sourceMappingURL=defaultOptionsValidator.js.map
}),
"[project]/web/node_modules/get-it/dist/_chunks-es/createRequester.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$defaultOptionsValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/defaultOptionsValidator.js [app-ssr] (ecmascript)");
;
const r = [
    "request",
    "response",
    "progress",
    "error",
    "abort"
], o = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders"
];
function n(s, i) {
    const u = [], a = o.reduce((e, t)=>(e[t] = e[t] || [], e), {
        processOptions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$defaultOptionsValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"]
        ],
        validateOptions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$defaultOptionsValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"]
        ]
    });
    function c(e) {
        const t = r.reduce((e, t)=>(e[t] = function() {
                const e = /* @__PURE__ */ Object.create(null);
                let t = 0;
                return {
                    publish: function(t) {
                        for(const r in e)e[r](t);
                    },
                    subscribe: function(r) {
                        const o = t++;
                        return e[o] = r, function() {
                            delete e[o];
                        };
                    }
                };
            }(), e), {}), o = ((e)=>function(t, r, ...o) {
                const n = "onError" === t;
                let s = r;
                for(let r = 0; r < e[t].length && (s = (0, e[t][r])(s, ...o), !n || s); r++);
                return s;
            })(a), n = o("processOptions", e);
        o("validateOptions", n);
        const s = {
            options: n,
            channels: t,
            applyMiddleware: o
        };
        let u;
        const c = t.request.subscribe((e)=>{
            u = i(e, (r, n)=>((e, r, n)=>{
                    let s = e, i = r;
                    if (!s) try {
                        i = o("onResponse", r, n);
                    } catch (e) {
                        i = null, s = e;
                    }
                    s = s && o("onError", s, n), s ? t.error.publish(s) : i && t.response.publish(i);
                })(r, n, e));
        });
        t.abort.subscribe(()=>{
            c(), u && u.abort();
        });
        const l = o("onReturn", t, s);
        return l === t && t.request.publish(s), l;
    }
    return c.use = function(e) {
        if (!e) throw new Error("Tried to add middleware that resolved to falsey value");
        if ("function" == typeof e) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        if (e.onReturn && a.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        return o.forEach((t)=>{
            e[t] && a[t].push(e[t]);
        }), u.push(e), c;
    }, c.clone = ()=>n(u, i), s.forEach(c.use), c;
}
;
 //# sourceMappingURL=createRequester.js.map
}),
"[project]/web/node_modules/get-it/dist/_chunks-es/node-request.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "N",
    ()=>T,
    "a",
    ()=>O,
    "h",
    ()=>R,
    "p",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$decompress$2d$response$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/decompress-response/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$follow$2d$redirects$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$querystring__$5b$external$5d$__$28$querystring$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/querystring [external] (querystring, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$through2$2f$through2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/through2/through2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$tunnel$2d$agent$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/tunnel-agent/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function p(e) {
    return Object.keys(e || {}).reduce((t, o)=>(t[o.toLowerCase()] = e[o], t), {});
}
let u = 1;
const d = 65535;
let h = null;
const l = function() {
    u = u + 1 & d;
};
function f(e) {
    let t = e.length || 0, o = 0, r = Date.now() + e.time, n = 0;
    const s = function() {
        h || (h = setInterval(l, 250), h.unref && h.unref());
        const e = [
            0
        ];
        let t = 1, o = u - 1 & d;
        return {
            getSpeed: function(r) {
                let n = u - o & d;
                for(n > 20 && (n = 20), o = u; n--;)20 === t && (t = 0), e[t] = e[0 === t ? 19 : t - 1], t++;
                r && (e[t - 1] += r);
                const s = e[t - 1], c = e.length < 20 ? 0 : e[20 === t ? 0 : t];
                return e.length < 4 ? s : 4 * (s - c) / e.length;
            },
            clear: function() {
                h && (clearInterval(h), h = null);
            }
        };
    }(), c = Date.now(), i = {
        percentage: 0,
        transferred: o,
        length: t,
        remaining: t,
        eta: 0,
        runtime: 0,
        speed: 0,
        delta: 0
    }, p = function(a) {
        i.delta = n, i.percentage = a ? 100 : t ? o / t * 100 : 0, i.speed = s.getSpeed(n), i.eta = Math.round(i.remaining / i.speed), i.runtime = Math.floor((Date.now() - c) / 1e3), r = Date.now() + e.time, n = 0, f.emit("progress", i);
    }, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$through2$2f$through2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, function(e, s, c) {
        const a = e.length;
        o += a, n += a, i.transferred = o, i.remaining = t >= o ? t - o : 0, Date.now() >= r && p(!1), c(null, e);
    }, function(e) {
        p(!0), s.clear(), e();
    }), m = function(e) {
        t = e, i.length = t, i.remaining = t - i.transferred, f.emit("length", t);
    };
    return f.on("pipe", function(e) {
        if (!(t > 0)) {
            if (e.readable && !("writable" in e) && "headers" in e && "object" == typeof (o = e.headers) && null !== o && !Array.isArray(o)) {
                const t = "string" == typeof e.headers["content-length"] ? parseInt(e.headers["content-length"], 10) : 0;
                return m(t);
            }
            if ("length" in e && "number" == typeof e.length) return m(e.length);
            e.on("response", function(e) {
                if (e && e.headers && "gzip" !== e.headers["content-encoding"] && e.headers["content-length"]) return m(parseInt(e.headers["content-length"]));
            });
        }
        var o;
    }), f.progress = function() {
        return i.speed = s.getSpeed(0), i.eta = Math.round(i.remaining / i.speed), i;
    }, f;
}
function m(e) {
    return e.replace(/^\.*/, ".").toLowerCase();
}
function g(e) {
    const t = e.trim().toLowerCase(), o = t.split(":", 2);
    return {
        hostname: m(o[0]),
        port: o[1],
        hasPort: t.indexOf(":") > -1
    };
}
const y = [
    "protocol",
    "slashes",
    "auth",
    "host",
    "port",
    "hostname",
    "hash",
    "search",
    "query",
    "pathname",
    "path",
    "href"
], b = [
    "accept",
    "accept-charset",
    "accept-encoding",
    "accept-language",
    "accept-ranges",
    "cache-control",
    "content-encoding",
    "content-language",
    "content-location",
    "content-md5",
    "content-range",
    "content-type",
    "connection",
    "date",
    "expect",
    "max-forwards",
    "pragma",
    "referer",
    "te",
    "user-agent",
    "via"
], x = [
    "proxy-authorization"
], w = (e)=>null !== e && "object" == typeof e && "function" == typeof e.pipe, O = "node";
class T extends Error {
    request;
    code;
    constructor(e, t){
        super(e.message), this.request = t, this.code = e.code;
    }
}
const v = (e, t, o, r, n)=>({
        body: n,
        url: o,
        method: r,
        headers: e.headers,
        statusCode: e.statusCode || 0,
        statusMessage: e.statusMessage || "",
        remoteAddress: t
    }), R = (a, u)=>{
    const { options: d } = a, h = Object.assign({}, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse(d.url));
    if ("function" == typeof fetch && d.fetch) {
        const e = new AbortController, t = a.applyMiddleware("finalizeOptions", {
            ...h,
            method: d.method,
            headers: {
                ..."object" == typeof d.fetch && d.fetch.headers ? p(d.fetch.headers) : {},
                ...p(d.headers)
            },
            maxRedirects: d.maxRedirects
        }), o = {
            credentials: d.withCredentials ? "include" : "omit",
            ..."object" == typeof d.fetch ? d.fetch : {},
            method: t.method,
            headers: t.headers,
            body: d.body,
            signal: e.signal
        }, r = a.applyMiddleware("interceptRequest", void 0, {
            adapter: O,
            context: a
        });
        if (r) {
            const e = setTimeout(u, 0, null, r);
            return {
                abort: ()=>clearTimeout(e)
            };
        }
        const n = fetch(d.url, o);
        return a.applyMiddleware("onRequest", {
            options: d,
            adapter: O,
            request: n,
            context: a
        }), n.then(async (e)=>{
            const t = d.rawBody ? e.body : await e.text(), o = {};
            e.headers.forEach((e, t)=>{
                o[t] = e;
            }), u(null, {
                body: t,
                url: e.url,
                method: d.method,
                headers: o,
                statusCode: e.status,
                statusMessage: e.statusText
            });
        }).catch((e)=>{
            "AbortError" != e.name && u(e);
        }), {
            abort: ()=>e.abort()
        };
    }
    const l = w(d.body) ? "stream" : typeof d.body;
    if ("undefined" !== l && "stream" !== l && "string" !== l && !Buffer.isBuffer(d.body)) throw new Error(`Request body must be a string, buffer or stream, got ${l}`);
    const R = {};
    d.bodySize ? R["content-length"] = d.bodySize : d.body && "stream" !== l && (R["content-length"] = Buffer.byteLength(d.body));
    let j = !1;
    const M = (e, t)=>!j && u(e, t);
    a.channels.abort.subscribe(()=>{
        j = !0;
    });
    let $ = Object.assign({}, h, {
        method: d.method,
        headers: Object.assign({}, p(d.headers), R),
        maxRedirects: d.maxRedirects
    });
    const q = function(e) {
        const t = typeof e.proxy > "u" ? function(e) {
            const t = process.env.NO_PROXY || process.env.no_proxy || "";
            return "*" === t || "" !== t && function(e, t) {
                const o = e.port || ("https:" === e.protocol ? "443" : "80"), r = m(e.hostname || "");
                return t.split(",").map(g).some((e)=>{
                    const t = r.indexOf(e.hostname), n = t > -1 && t === r.length - e.hostname.length;
                    return e.hasPort ? o === e.port && n : n;
                });
            }(e, t) ? null : "http:" === e.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e.protocol && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
        }(__TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse(e.url)) : e.proxy;
        return "string" == typeof t ? __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse(t) : t || null;
    }(d), C = q && function(e) {
        return typeof e.tunnel < "u" ? !!e.tunnel : "https:" === __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse(e.url).protocol;
    }(d), S = a.applyMiddleware("interceptRequest", void 0, {
        adapter: O,
        context: a
    });
    if (S) {
        const e = setImmediate(M, null, S);
        return {
            abort: ()=>clearImmediate(e)
        };
    }
    if (0 !== d.maxRedirects && ($.maxRedirects = d.maxRedirects || 5), q && C ? $ = function(e = {}, t) {
        const o = Object.assign({}, e), r = b.concat(o.proxyHeaderWhiteList || []).map((e)=>e.toLowerCase()), n = x.concat(o.proxyHeaderExclusiveList || []).map((e)=>e.toLowerCase()), s = (c = o.headers, a = r, Object.keys(c).filter((e)=>-1 !== a.indexOf(e.toLowerCase())).reduce((e, t)=>(e[t] = c[t], e), {}));
        var c, a;
        s.host = function(e) {
            const t = e.port, o = e.protocol;
            let r = `${e.hostname}:`;
            return r += t || ("https:" === o ? "443" : "80"), r;
        }(o), o.headers = Object.keys(o.headers || {}).reduce((e, t)=>(-1 === n.indexOf(t.toLowerCase()) && (e[t] = o.headers[t]), e), {});
        const p = function(e, t) {
            const o = function(e) {
                return y.reduce((t, o)=>(t[o] = e[o], t), {});
            }(e), r = function(e, t) {
                return `${"https:" === e.protocol ? "https" : "http"}Over${"https:" === t.protocol ? "Https" : "Http"}`;
            }(o, t);
            return __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$tunnel$2d$agent$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[r];
        }(o, t), u = function(e, t, o) {
            return {
                proxy: {
                    host: t.hostname,
                    port: +t.port,
                    proxyAuth: t.auth,
                    headers: o
                },
                headers: e.headers,
                ca: e.ca,
                cert: e.cert,
                key: e.key,
                passphrase: e.passphrase,
                pfx: e.pfx,
                ciphers: e.ciphers,
                rejectUnauthorized: e.rejectUnauthorized,
                secureOptions: e.secureOptions,
                secureProtocol: e.secureProtocol
            };
        }(o, t, s);
        return o.agent = p(u), o;
    }($, q) : q && !C && ($ = function(e, t, o) {
        const r = e.headers || {}, n = Object.assign({}, e, {
            headers: r
        });
        return r.host = r.host || function(e) {
            const t = e.port || ("https:" === e.protocol ? "443" : "80");
            return `${e.hostname}:${t}`;
        }(t), n.protocol = o.protocol || n.protocol, n.hostname = (o.host || "hostname" in o && o.hostname || n.hostname || "").replace(/:\d+/, ""), n.port = o.port ? `${o.port}` : n.port, n.host = function(e) {
            let t = e.host;
            return e.port && ("80" === e.port && "http:" === e.protocol || "443" === e.port && "https:" === e.protocol) && (t = e.hostname), t;
        }(Object.assign({}, t, o)), n.href = `${n.protocol}//${n.host}${n.path}`, n.path = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].format(t), n;
    }($, h, q)), !C && q && q.auth && !$.headers["proxy-authorization"]) {
        const [e, t] = "string" == typeof q.auth ? q.auth.split(":").map((e)=>__TURBOPACK__imported__module__$5b$externals$5d2f$querystring__$5b$external$5d$__$28$querystring$2c$__cjs$29$__["default"].unescape(e)) : [
            q.auth.username,
            q.auth.password
        ], o = Buffer.from(`${e}:${t}`, "utf8").toString("base64");
        $.headers["proxy-authorization"] = `Basic ${o}`;
    }
    const z = function(e, n, s) {
        const c = "https:" === e.protocol, a = 0 === e.maxRedirects ? {
            http: __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"],
            https: __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["default"]
        } : {
            http: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$follow$2d$redirects$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].http,
            https: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$follow$2d$redirects$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].https
        };
        if (!n || s) return c ? a.https : a.http;
        let i = 443 === n.port;
        return n.protocol && (i = /^https:?/.test(n.protocol)), i ? a.https : a.http;
    }($, q, C);
    "function" == typeof d.debug && q && d.debug("Proxying using %s", $.agent ? "tunnel agent" : `${$.host}:${$.port}`);
    const E = "HEAD" !== $.method;
    let L;
    E && !$.headers["accept-encoding"] && !1 !== d.compress && ($.headers["accept-encoding"] = typeof Bun < "u" ? "gzip, deflate" : "br, gzip, deflate");
    const k = a.applyMiddleware("finalizeOptions", $), P = z.request(k, (t)=>{
        const o = E ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$decompress$2d$response$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t) : t;
        L = o;
        const r = a.applyMiddleware("onHeaders", o, {
            headers: t.headers,
            adapter: O,
            context: a
        }), n = "responseUrl" in t ? t.responseUrl : d.url, s = o.socket?.remoteAddress;
        d.stream ? M(null, v(o, s, n, $.method, r)) : function(e, t) {
            const o = [];
            e.on("data", function(e) {
                o.push(e);
            }), e.once("end", function() {
                t && t(null, Buffer.concat(o)), t = null;
            }), e.once("error", function(e) {
                t && t(e), t = null;
            });
        }(r, (e, t)=>{
            if (e) return M(e);
            const r = d.rawBody ? t : t.toString(), c = v(o, s, n, $.method, r);
            return M(null, c);
        });
    });
    function B(e) {
        L && L.destroy(e), P.destroy(e);
    }
    P.once("socket", (e)=>{
        e.once("error", B), P.once("response", (t)=>{
            t.once("end", ()=>{
                e.removeListener("error", B);
            });
        });
    }), P.once("error", (e)=>{
        L || M(new T(e, P));
    }), d.timeout && function(e, t) {
        if (e.timeoutTimer) return e;
        const o = isNaN(t) ? t : {
            socket: t,
            connect: t
        }, r = e.getHeader("host"), n = r ? " to " + r : "";
        function s() {
            e.timeoutTimer && (clearTimeout(e.timeoutTimer), e.timeoutTimer = null);
        }
        function c(t) {
            if (s(), void 0 !== o.socket) {
                const r = ()=>{
                    const e = new Error("Socket timed out on request" + n);
                    e.code = "ESOCKETTIMEDOUT", t.destroy(e);
                };
                t.setTimeout(o.socket, r), e.once("response", (e)=>{
                    e.once("end", ()=>{
                        t.removeListener("timeout", r);
                    });
                });
            }
        }
        void 0 !== o.connect && (e.timeoutTimer = setTimeout(function() {
            const t = new Error("Connection timed out on request" + n);
            t.code = "ETIMEDOUT", e.destroy(t);
        }, o.connect)), e.on("socket", function(e) {
            e.connecting ? e.once("connect", ()=>c(e)) : c(e);
        }), e.on("error", s);
    }(P, d.timeout);
    const { bodyStream: H, progress: A } = function(e) {
        if (!e.body) return {};
        const t = w(e.body), o = e.bodySize || (t ? null : Buffer.byteLength(e.body));
        if (!o) return t ? {
            bodyStream: e.body
        } : {};
        const r = f({
            time: 32,
            length: o
        });
        return {
            bodyStream: (t ? e.body : __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"].from(e.body)).pipe(r),
            progress: r
        };
    }(d);
    return a.applyMiddleware("onRequest", {
        options: d,
        adapter: O,
        request: P,
        context: a,
        progress: A
    }), H ? H.pipe(P) : P.end(d.body), {
        abort: ()=>P.abort()
    };
};
;
 //# sourceMappingURL=node-request.js.map
}),
"[project]/web/node_modules/get-it/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environment",
    ()=>t,
    "getIt",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$createRequester$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/createRequester.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/node-request.js [app-ssr] (ecmascript)");
;
;
;
const o = (r = [], o = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$createRequester$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(r, o), t = "node";
;
 //# sourceMappingURL=index.js.map
}),
"[project]/web/node_modules/get-it/dist/_chunks-es/node-request.js [app-ssr] (ecmascript) <export a as adapter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/node-request.js [app-ssr] (ecmascript)");
}),
"[project]/web/node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "g",
    ()=>c,
    "p",
    ()=>r,
    "v",
    ()=>s
]);
const e = !(typeof navigator > "u") && "ReactNative" === navigator.product, t = {
    timeout: e ? 6e4 : 12e4
}, r = function(r) {
    const a = {
        ...t,
        ..."string" == typeof r ? {
            url: r
        } : r
    };
    if (a.timeout = n(a.timeout), a.query) {
        const { url: t, searchParams: r } = function(t) {
            const r = t.indexOf("?");
            if (-1 === r) return {
                url: t,
                searchParams: new URLSearchParams
            };
            const n = t.slice(0, r), a = t.slice(r + 1);
            if (!e) return {
                url: n,
                searchParams: new URLSearchParams(a)
            };
            if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
            const s = new URLSearchParams;
            for (const e of a.split("&")){
                const [t, r] = e.split("=");
                t && s.append(o(t), o(r || ""));
            }
            return {
                url: n,
                searchParams: s
            };
        }(a.url);
        for (const [e, o] of Object.entries(a.query)){
            if (void 0 !== o) if (Array.isArray(o)) for (const t of o)r.append(e, t);
            else r.append(e, o);
            const n = r.toString();
            n && (a.url = `${t}?${n}`);
        }
    }
    return a.method = a.body && !a.method ? "POST" : (a.method || "GET").toUpperCase(), a;
};
function o(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
}
function n(e) {
    if (!1 === e || 0 === e) return !1;
    if (e.connect || e.socket) return e;
    const r = Number(e);
    return isNaN(r) ? n(t.timeout) : {
        connect: r,
        socket: r
    };
}
const a = /^https?:\/\//i, s = function(e) {
    if (!a.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
};
function c(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
;
 //# sourceMappingURL=_commonjsHelpers.js.map
}),
"[project]/web/node_modules/get-it/dist/middleware.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cancel",
    ()=>Z,
    "CancelToken",
    ()=>K,
    "agent",
    ()=>l,
    "base",
    ()=>m,
    "debug",
    ()=>S,
    "headers",
    ()=>I,
    "httpErrors",
    ()=>$,
    "injectResponse",
    ()=>_,
    "jsonRequest",
    ()=>B,
    "jsonResponse",
    ()=>D,
    "keepAlive",
    ()=>ne,
    "mtls",
    ()=>L,
    "observable",
    ()=>G,
    "progress",
    ()=>V,
    "promise",
    ()=>W,
    "proxy",
    ()=>Q,
    "retry",
    ()=>ee,
    "urlEncoded",
    ()=>se
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tty__$5b$external$5d$__$28$tty$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/tty [external] (tty, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$defaultOptionsValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/defaultOptionsValidator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/get-it/dist/_chunks-es/node-request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$is$2d$retry$2d$allowed$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/is-retry-allowed/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const p = /^https:/i;
function l(s) {
    const n = new __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["Agent"](s), r = new __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["Agent"](s), o = {
        http: n,
        https: r
    };
    return {
        finalizeOptions: (e)=>{
            if (e.agent) return e;
            if (e.maxRedirects > 0) return {
                ...e,
                agents: o
            };
            const t = p.test(e.href || e.protocol);
            return {
                ...e,
                agent: t ? r : n
            };
        }
    };
}
const d = /^\//, f = /\/$/;
function m(e) {
    const t = e.replace(f, "");
    return {
        processOptions: (e)=>{
            if (/^https?:\/\//i.test(e.url)) return e;
            const s = [
                t,
                e.url.replace(d, "")
            ].join("/");
            return Object.assign({}, e, {
                url: s
            });
        }
    };
}
var h, g, C, b, y, w = {
    exports: {}
}, O = {
    exports: {}
};
function F() {
    return b ? C : (b = 1, C = function(e) {
        function t(e) {
            let n, r, o, i = null;
            function c(...e) {
                if (!c.enabled) return;
                const s = c, r = Number(/* @__PURE__ */ new Date), o = r - (n || r);
                s.diff = o, s.prev = n, s.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let i = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r)=>{
                    if ("%%" === n) return "%";
                    i++;
                    const o = t.formatters[r];
                    if ("function" == typeof o) {
                        const t = e[i];
                        n = o.call(s, t), e.splice(i, 1), i--;
                    }
                    return n;
                }), t.formatArgs.call(s, e), (s.log || t.log).apply(s, e);
            }
            return c.namespace = e, c.useColors = t.useColors(), c.color = t.selectColor(e), c.extend = s, c.destroy = t.destroy, Object.defineProperty(c, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: ()=>null !== i ? i : (r !== t.namespaces && (r = t.namespaces, o = t.enabled(e)), o),
                set: (e)=>{
                    i = e;
                }
            }), "function" == typeof t.init && t.init(c), c;
        }
        function s(e, s) {
            const n = t(this.namespace + (typeof s > "u" ? ":" : s) + e);
            return n.log = this.log, n;
        }
        function n(e, t) {
            let s = 0, n = 0, r = -1, o = 0;
            for(; s < e.length;)if (n < t.length && (t[n] === e[s] || "*" === t[n])) "*" === t[n] ? (r = n, o = s, n++) : (s++, n++);
            else {
                if (-1 === r) return !1;
                n = r + 1, o++, s = o;
            }
            for(; n < t.length && "*" === t[n];)n++;
            return n === t.length;
        }
        return t.debug = t, t.default = t, t.coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e;
        }, t.disable = function() {
            const e = [
                ...t.names,
                ...t.skips.map((e)=>"-" + e)
            ].join(",");
            return t.enable(""), e;
        }, t.enable = function(e) {
            t.save(e), t.namespaces = e, t.names = [], t.skips = [];
            const s = ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (const e of s)"-" === e[0] ? t.skips.push(e.slice(1)) : t.names.push(e);
        }, t.enabled = function(e) {
            for (const s of t.skips)if (n(e, s)) return !1;
            for (const s of t.names)if (n(e, s)) return !0;
            return !1;
        }, t.humanize = function() {
            if (g) return h;
            g = 1;
            var e = 1e3, t = 60 * e, s = 60 * t, n = 24 * s, r = 7 * n;
            function o(e, t, s, n) {
                var r = t >= 1.5 * s;
                return Math.round(e / s) + " " + n + (r ? "s" : "");
            }
            return h = function(i, c) {
                c = c || {};
                var a, u, p = typeof i;
                if ("string" === p && i.length > 0) return function(o) {
                    if (!((o = String(o)).length > 100)) {
                        var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
                        if (i) {
                            var c = parseFloat(i[1]);
                            switch((i[2] || "ms").toLowerCase()){
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * c;
                                case "weeks":
                                case "week":
                                case "w":
                                    return c * r;
                                case "days":
                                case "day":
                                case "d":
                                    return c * n;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return c * s;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return c * t;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return c * e;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return c;
                                default:
                                    return;
                            }
                        }
                    }
                }(i);
                if ("number" === p && isFinite(i)) return c.long ? (a = i, (u = Math.abs(a)) >= n ? o(a, u, n, "day") : u >= s ? o(a, u, s, "hour") : u >= t ? o(a, u, t, "minute") : u >= e ? o(a, u, e, "second") : a + " ms") : function(r) {
                    var o = Math.abs(r);
                    return o >= n ? Math.round(r / n) + "d" : o >= s ? Math.round(r / s) + "h" : o >= t ? Math.round(r / t) + "m" : o >= e ? Math.round(r / e) + "s" : r + "ms";
                }(i);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i));
            };
        }(), t.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }, Object.keys(e).forEach((s)=>{
            t[s] = e[s];
        }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
            let s = 0;
            for(let t = 0; t < e.length; t++)s = (s << 5) - s + e.charCodeAt(t), s |= 0;
            return t.colors[Math.abs(s) % t.colors.length];
        }, t.enable(t.load()), t;
    });
}
var v, j, x, E, k = {
    exports: {}
}, R = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])((E || (E = 1, typeof process > "u" || "renderer" === process.type || !0 === ("TURBOPACK compile-time value", false) || process.__nwjs ? w.exports = (y || (y = 1, function(e, t) {
    t.formatArgs = function(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const s = "color: " + this.color;
        t.splice(1, 0, s, "color: inherit");
        let n = 0, r = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e)=>{
            "%%" !== e && (n++, "%c" === e && (r = n));
        }), t.splice(r, 0, s);
    }, t.save = function(e) {
        try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
        } catch  {}
    }, t.load = function() {
        let e;
        try {
            e = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
        } catch  {}
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
    }, t.useColors = function() {
        if (("TURBOPACK compile-time value", "undefined") < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        let e;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }, t.storage = function() {
        try {
            return localStorage;
        } catch  {}
    }(), t.destroy = /* @__PURE__ */ (()=>{
        let e = !1;
        return ()=>{
            e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })(), t.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ], t.log = console.debug || console.log || (()=>{}), e.exports = F()(t);
    const { formatters: s } = e.exports;
    s.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        }
    };
}(O, O.exports)), O.exports) : w.exports = (x || (x = 1, function(e, t) {
    const s = __TURBOPACK__imported__module__$5b$externals$5d2f$tty__$5b$external$5d$__$28$tty$2c$__cjs$29$__["default"], o = __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["default"];
    t.init = function(e) {
        e.inspectOpts = {};
        const s = Object.keys(t.inspectOpts);
        for(let n = 0; n < s.length; n++)e.inspectOpts[s[n]] = t.inspectOpts[s[n]];
    }, t.log = function(...e) {
        return process.stderr.write(o.formatWithOptions(t.inspectOpts, ...e) + "\n");
    }, t.formatArgs = function(s) {
        const { namespace: n, useColors: r } = this;
        if (r) {
            const t = this.color, r = "[3" + (t < 8 ? t : "8;5;" + t), o = `  ${r};1m${n} [0m`;
            s[0] = o + s[0].split("\n").join("\n" + o), s.push(r + "m+" + e.exports.humanize(this.diff) + "[0m");
        } else s[0] = (t.inspectOpts.hideDate ? "" : /* @__PURE__ */ (new Date).toISOString() + " ") + n + " " + s[0];
    }, t.save = function(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
    }, t.load = function() {
        return process.env.DEBUG;
    }, t.useColors = function() {
        return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : s.isatty(process.stderr.fd);
    }, t.destroy = o.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), t.colors = [
        6,
        2,
        3,
        4,
        5,
        1
    ];
    try {
        const e = function() {
            if (j) return v;
            j = 1;
            const e = function() {
                const e = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);
                if (e) return Number.parseInt(e.groups.chromeVersion, 10);
            }() >= 69 && {
                level: 1,
                hasBasic: !0,
                has256: !1,
                has16m: !1
            };
            return v = {
                stdout: e,
                stderr: e
            };
        }();
        e && (e.stderr || e).level >= 2 && (t.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ]);
    } catch  {}
    t.inspectOpts = Object.keys(process.env).filter((e)=>/^debug_/i.test(e)).reduce((e, t)=>{
        const s = t.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t)=>t.toUpperCase());
        let n = process.env[t];
        return n = !!/^(yes|on|true|enabled)$/i.test(n) || !/^(no|off|false|disabled)$/i.test(n) && ("null" === n ? null : Number(n)), e[s] = n, e;
    }, {}), e.exports = F()(t);
    const { formatters: i } = e.exports;
    i.o = function(e) {
        return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts).split("\n").map((e)=>e.trim()).join(" ");
    }, i.O = function(e) {
        return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts);
    };
}(k, k.exports)), k.exports)), w.exports));
const A = [
    "cookie",
    "authorization"
], q = Object.prototype.hasOwnProperty;
function S(e = {}) {
    const t = e.verbose, s = e.namespace || "get-it", n = R(s), r = e.log || n, o = r === n && !R.enabled(s);
    let i = 0;
    return {
        processOptions: (e)=>(e.debug = r, e.requestId = e.requestId || ++i, e),
        onRequest: (s)=>{
            if (o || !s) return s;
            const n = s.options;
            if (r("[%s] HTTP %s %s", n.requestId, n.method, n.url), t && n.body && "string" == typeof n.body && r("[%s] Request body: %s", n.requestId, n.body), t && n.headers) {
                const t = !1 === e.redactSensitiveHeaders ? n.headers : ((e, t)=>{
                    const s = {};
                    for(const n in e)q.call(e, n) && (s[n] = t.indexOf(n.toLowerCase()) > -1 ? "<redacted>" : e[n]);
                    return s;
                })(n.headers, A);
                r("[%s] Request headers: %s", n.requestId, JSON.stringify(t, null, 2));
            }
            return s;
        },
        onResponse: (e, s)=>{
            if (o || !e) return e;
            const n = s.options.requestId;
            return r("[%s] Response code: %s %s", n, e.statusCode, e.statusMessage), t && e.body && r("[%s] Response body: %s", n, function(e) {
                return -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? function(e) {
                    try {
                        const t = "string" == typeof e ? JSON.parse(e) : e;
                        return JSON.stringify(t, null, 2);
                    } catch  {
                        return e;
                    }
                }(e.body) : e.body;
            }(e)), e;
        },
        onError: (e, t)=>{
            const s = t.options.requestId;
            return e ? (r("[%s] ERROR: %s", s, e.message), e) : (r("[%s] Error encountered, but handled by an earlier middleware", s), e);
        }
    };
}
function I(e, t = {}) {
    return {
        processOptions: (s)=>{
            const n = s.headers || {};
            return s.headers = t.override ? Object.assign({}, n, e) : Object.assign({}, e, n), s;
        }
    };
}
class N extends Error {
    response;
    request;
    constructor(e, t){
        super();
        const s = e.url.length > 400 ? `${e.url.slice(0, 399)}…` : e.url;
        let n = `${e.method}-request to ${s} resulted in `;
        n += `HTTP ${e.statusCode} ${e.statusMessage}`, this.message = n.trim(), this.response = e, this.request = t.options;
    }
}
function $() {
    return {
        onResponse: (e, t)=>{
            if (!(e.statusCode >= 400)) return e;
            throw new N(e, t);
        }
    };
}
function _(e = {}) {
    if ("function" != typeof e.inject) throw new Error("`injectResponse` middleware requires a `inject` function");
    return {
        interceptRequest: function(t, s) {
            const n = e.inject(s, t);
            if (!n) return t;
            const r = s.context.options;
            return {
                body: "",
                url: r.url,
                method: r.method,
                headers: {},
                statusCode: 200,
                statusMessage: "OK",
                ...n
            };
        }
    };
}
const T = typeof Buffer > "u" ? ()=>!1 : (e)=>Buffer.isBuffer(e);
function M(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
function P(e) {
    if (!1 === M(e)) return !1;
    const t = e.constructor;
    if (void 0 === t) return !0;
    const s = t.prototype;
    return !(!1 === M(s) || !1 === s.hasOwnProperty("isPrototypeOf"));
}
const z = [
    "boolean",
    "string",
    "number"
];
function B() {
    return {
        processOptions: (e)=>{
            const t = e.body;
            return !t || "function" == typeof t.pipe || T(t) || -1 === z.indexOf(typeof t) && !Array.isArray(t) && !P(t) ? e : Object.assign({}, e, {
                body: JSON.stringify(e.body),
                headers: Object.assign({}, e.headers, {
                    "Content-Type": "application/json"
                })
            });
        }
    };
}
function D(e) {
    return {
        onResponse: (s)=>{
            const n = s.headers["content-type"] || "", r = e && e.force || -1 !== n.indexOf("application/json");
            return s.body && n && r ? Object.assign({}, s, {
                body: t(s.body)
            }) : s;
        },
        processOptions: (e)=>Object.assign({}, e, {
                headers: Object.assign({
                    Accept: "application/json"
                }, e.headers)
            })
    };
    //TURBOPACK unreachable
    ;
    function t(e) {
        try {
            return JSON.parse(e);
        } catch (e) {
            throw e.message = `Failed to parsed response body as JSON: ${e.message}`, e;
        }
    }
}
function L(e = {}) {
    if (!e.ca) throw new Error('Required mtls option "ca" is missing');
    if (!e.cert) throw new Error('Required mtls option "cert" is missing');
    if (!e.key) throw new Error('Required mtls option "key" is missing');
    return {
        finalizeOptions: (t)=>{
            if (function(e) {
                return "object" == typeof e && null !== e && !("protocol" in e);
            }(t)) return t;
            const s = {
                cert: e.cert,
                key: e.key,
                ca: e.ca
            };
            return Object.assign({}, t, s);
        }
    };
}
let J = {};
typeof globalThis < "u" ? J = globalThis : ("TURBOPACK compile-time value", "undefined") < "u" ? J = window : ("TURBOPACK compile-time value", "object") < "u" ? J = /*TURBOPACK member replacement*/ __turbopack_context__.g : typeof self < "u" && (J = self);
var U = J;
function G(e = {}) {
    const t = e.implementation || U.Observable;
    if (!t) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (e, s)=>new t((t)=>(e.error.subscribe((e)=>t.error(e)), e.progress.subscribe((e)=>t.next(Object.assign({
                        type: "progress"
                    }, e))), e.response.subscribe((e)=>{
                    t.next(Object.assign({
                        type: "response"
                    }, e)), t.complete();
                }), e.request.publish(s), ()=>e.abort.publish()))
    };
}
function H(e) {
    return (t)=>({
            stage: e,
            percent: t.percentage,
            total: t.length,
            loaded: t.transferred,
            lengthComputable: !(0 === t.length && 0 === t.percentage)
        });
}
function V() {
    let e = !1;
    const t = H("download"), s = H("upload");
    return {
        onHeaders: (e, s)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
                time: 32
            });
            return n.on("progress", (e)=>s.context.channels.progress.publish(t(e))), e.pipe(n);
        },
        onRequest: (t)=>{
            t.progress && t.progress.on("progress", (n)=>{
                e = !0, t.context.channels.progress.publish(s(n));
            });
        },
        onResponse: (t, n)=>(!e && typeof n.options.body < "u" && n.channels.progress.publish(s({
                length: 0,
                transferred: 0,
                percentage: 100
            })), t)
    };
}
const W = (e = {})=>{
    const t = e.implementation || Promise;
    if (!t) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (s, n)=>new t((t, r)=>{
                const o = n.options.cancelToken;
                o && o.promise.then((e)=>{
                    s.abort.publish(e), r(e);
                }), s.error.subscribe(r), s.response.subscribe((s)=>{
                    t(e.onlyBody ? s.body : s);
                }), setTimeout(()=>{
                    try {
                        s.request.publish(n);
                    } catch (e) {
                        r(e);
                    }
                }, 0);
            })
    };
};
class Z {
    __CANCEL__ = !0;
    message;
    constructor(e){
        this.message = e;
    }
    toString() {
        return "Cancel" + (this.message ? `: ${this.message}` : "");
    }
}
class K {
    promise;
    reason;
    constructor(e){
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        let t = null;
        this.promise = new Promise((e)=>{
            t = e;
        }), e((e)=>{
            this.reason || (this.reason = new Z(e), t(this.reason));
        });
    }
    static source = ()=>{
        let e;
        return {
            token: new K((t)=>{
                e = t;
            }),
            cancel: e
        };
    };
}
function Q(e) {
    if (!(!1 === e || e && e.host)) throw new Error("Proxy middleware takes an object of host, port and auth properties");
    return {
        processOptions: (t)=>Object.assign({
                proxy: e
            }, t)
    };
}
W.Cancel = Z, W.CancelToken = K, W.isCancel = (e)=>!(!e || !e?.__CANCEL__);
var X = (e, t, s)=>!("GET" !== s.method && "HEAD" !== s.method || e.response && e.response.statusCode) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$is$2d$retry$2d$allowed$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(e);
function Y(e) {
    return 100 * Math.pow(2, e) + 100 * Math.random();
}
const ee = (e = {})=>((e)=>{
        const t = e.maxRetries || 5, s = e.retryDelay || Y, n = e.shouldRetry;
        return {
            onError: (e, r)=>{
                const o = r.options, i = o.maxRetries || t, c = o.retryDelay || s, a = o.shouldRetry || n, u = o.attemptNumber || 0;
                if (null !== (p = o.body) && "object" == typeof p && "function" == typeof p.pipe || !a(e, u, o) || u >= i) return e;
                var p;
                const l = Object.assign({}, r, {
                    options: Object.assign({}, o, {
                        attemptNumber: u + 1
                    })
                });
                return setTimeout(()=>r.channels.request.publish(l), c(u)), null;
            }
        };
    })({
        shouldRetry: X,
        ...e
    });
function te(e) {
    const t = new URLSearchParams, s = (e, n)=>{
        const r = n instanceof Set ? Array.from(n) : n;
        if (Array.isArray(r)) if (r.length) for(const t in r)s(`${e}[${t}]`, r[t]);
        else t.append(`${e}[]`, "");
        else if ("object" == typeof r && null !== r) for (const [t, n] of Object.entries(r))s(`${e}[${t}]`, n);
        else t.append(e, r);
    };
    for (const [t, n] of Object.entries(e))s(t, n);
    return t.toString();
}
function se() {
    return {
        processOptions: (e)=>{
            const t = e.body;
            return t && "function" != typeof t.pipe && !T(t) && P(t) ? {
                ...e,
                body: te(e.body),
                headers: {
                    ...e.headers,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            } : e;
        }
    };
}
ee.shouldRetry = X;
const ne = (re = l, function(e = {}) {
    const { maxRetries: t = 3, ms: s = 1e3, maxFree: n = 256 } = e, { finalizeOptions: r } = re({
        keepAlive: !0,
        keepAliveMsecs: s,
        maxFreeSockets: n
    });
    return {
        finalizeOptions: r,
        onError: (e, s)=>{
            if (("GET" === s.options.method || "POST" === s.options.method) && e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$node$2d$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"] && "ECONNRESET" === e.code && e.request.reusedSocket) {
                const e = s.options.attemptNumber || 0;
                if (e < t) {
                    const t = Object.assign({}, s, {
                        options: Object.assign({}, s.options, {
                            attemptNumber: e + 1
                        })
                    });
                    return setImmediate(()=>s.channels.request.publish(t)), null;
                }
            }
            return e;
        }
    };
});
var re;
;
 //# sourceMappingURL=middleware.js.map
}),
"[project]/web/node_modules/mimic-response/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProperties = [
    'aborted',
    'complete',
    'headers',
    'httpVersion',
    'httpVersionMinor',
    'httpVersionMajor',
    'method',
    'rawHeaders',
    'rawTrailers',
    'setTimeout',
    'socket',
    'statusCode',
    'statusMessage',
    'trailers',
    'url'
];
module.exports = (fromStream, toStream)=>{
    if (toStream._readableState.autoDestroy) {
        throw new Error('The second stream must have the `autoDestroy` option set to `false`');
    }
    const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
    const properties = {};
    for (const property of fromProperties){
        // Don't overwrite existing properties.
        if (property in toStream) {
            continue;
        }
        properties[property] = {
            get () {
                const value = fromStream[property];
                const isFunction = typeof value === 'function';
                return isFunction ? value.bind(fromStream) : value;
            },
            set (value) {
                fromStream[property] = value;
            },
            enumerable: true,
            configurable: false
        };
    }
    Object.defineProperties(toStream, properties);
    fromStream.once('aborted', ()=>{
        toStream.destroy();
        toStream.emit('aborted');
    });
    fromStream.once('close', ()=>{
        if (fromStream.complete) {
            if (toStream.readable) {
                toStream.once('end', ()=>{
                    toStream.emit('close');
                });
            } else {
                toStream.emit('close');
            }
        } else {
            toStream.emit('close');
        }
    });
    return toStream;
};
}),
"[project]/web/node_modules/decompress-response/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Transform, PassThrough } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
const mimicResponse = __turbopack_context__.r("[project]/web/node_modules/mimic-response/index.js [app-ssr] (ecmascript)");
module.exports = (response)=>{
    const contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();
    delete response.headers['content-encoding'];
    if (![
        'gzip',
        'deflate',
        'br'
    ].includes(contentEncoding)) {
        return response;
    }
    // TODO: Remove this when targeting Node.js 12.
    const isBrotli = contentEncoding === 'br';
    if (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {
        response.destroy(new Error('Brotli is not supported on Node.js < 12'));
        return response;
    }
    let isEmpty = true;
    const checker = new Transform({
        transform (data, _encoding, callback) {
            isEmpty = false;
            callback(null, data);
        },
        flush (callback) {
            callback();
        }
    });
    const finalStream = new PassThrough({
        autoDestroy: false,
        destroy (error, callback) {
            response.destroy();
            callback(error);
        }
    });
    const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
    decompressStream.once('error', (error)=>{
        if (isEmpty && !response.readable) {
            finalStream.end();
            return;
        }
        finalStream.destroy(error);
    });
    mimicResponse(response, finalStream);
    response.pipe(checker).pipe(decompressStream).pipe(finalStream);
    return finalStream;
};
}),
"[project]/web/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/web/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/web/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/web/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/web/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/web/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/web/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/web/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/web/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/web/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/web/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/web/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/web/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/web/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/web/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/web/node_modules/debug/src/index.js [app-ssr] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/web/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/web/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/buffer_list.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var _require = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)"), Buffer = _require.Buffer;
var _require2 = __turbopack_context__.r("[externals]/util [external] (util, cjs)"), inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            }
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) {
                    // First chunk is a perfect match.
                    ret = this.shift();
                } else {
                    // Result spans more than one buffer.
                    ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                }
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            }
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/destroy.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) {
            cb(err);
        } else if (err) {
            if (!this._writableState) {
                process.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) {
        this._readableState.destroyed = true;
    }
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) {
        this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) {
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else {
                process.nextTick(emitCloseNT, _this);
            }
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else {
            process.nextTick(emitCloseNT, _this);
        }
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit('error', err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const codes = {};
function createErrorType(code, message, Base) {
    if (!Base) {
        Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') {
            return message;
        } else {
            return message(arg1, arg2, arg3);
        }
    }
    class NodeError extends Base {
        constructor(arg1, arg2, arg3){
            super(getMessage(arg1, arg2, arg3));
        }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i)=>String(i));
        if (len > 2) {
            return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` + expected[len - 1];
        } else if (len === 2) {
            return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
            return `of ${thing} ${expected[0]}`;
        }
    } else {
        return `of ${thing} ${String(expected)}`;
    }
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) {
        this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') {
        start = 0;
    }
    if (start + search.length > str.length) {
        return false;
    } else {
        return str.indexOf(search, start) !== -1;
    }
}
createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    let determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else {
        determiner = 'must be';
    }
    let msg;
    if (endsWith(name, ' argument')) {
        // For cases like 'first argument'
        msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`;
    } else {
        const type = includes(name, '.') ? 'property' : 'argument';
        msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var ERR_INVALID_OPT_VALUE = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    }
    // Default value
    return state.objectMode ? 16 : 16 * 1024;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: __turbopack_context__.r("[project]/web/node_modules/util-deprecate/node.js [app-ssr] (ecmascript)")
};
/*</replacement>*/ /*<replacement>*/ var Stream = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/stream.js [app-ssr] (ecmascript)");
/*</replacement>*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
var OurUint8Array = (("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable").Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/destroy.js [app-ssr] (ecmascript)");
var _require = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/state.js [app-ssr] (ecmascript)"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
__turbopack_context__.r("[project]/web/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else {
    realHasInstance = function realHasInstance(object) {
        return object instanceof this;
    };
}
function Writable(options) {
    Duplex = Duplex || __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== 'string' && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', [
            'string',
            'Buffer'
        ], chunk);
    }
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) {
            last.next = state.lastBufferedRequest;
        } else {
            state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
    } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
        }
        if (sync) {
            process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
            afterWrite(stream, state, finished, cb);
        }
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else {
            state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
                break;
            }
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) {
            errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) {
                    stream.destroy();
                }
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) {
            return false;
        }
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js [app-ssr] (ecmascript)");
var Writable = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/web/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Duplex, Readable);
{
    // Allow the keys array to be GC'ed.
    var keys = objectKeys(Writable.prototype);
    for(var v = 0; v < keys.length; v++){
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
}function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
// the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
var ERR_STREAM_PREMATURE_CLOSE = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        callback.apply(this, args);
    };
}
function noop() {}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
    if (typeof opts === 'function') return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on('finish', onfinish);
    };
    if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
}
module.exports = eos;
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/async_iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var finished = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)");
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) {
            return Promise.reject(error);
        }
        if (this[kEnded]) {
            return Promise.resolve(createIterResult(undefined, true));
        }
        if (this[kStream].destroyed) {
            // We need to defer via nextTick because if .destroy(err) is
            // called, the error will be emitted via nextTick, and
            // we cannot guarantee that there is no error lingering around
            // waiting to be emitted.
            return new Promise(function(resolve, reject) {
                process.nextTick(function() {
                    if (_this[kError]) {
                        reject(_this[kError]);
                    } else {
                        resolve(createIterResult(undefined, true));
                    }
                });
            });
        }
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
        } else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) {
                return Promise.resolve(createIterResult(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/from.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var ERR_INVALID_ARG_TYPE = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes.ERR_INVALID_ARG_TYPE;
function from(Readable, iterable, opts) {
    var iterator;
    if (iterable && typeof iterable.next === 'function') {
        iterator = iterable;
    } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
    else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
    else throw new ERR_INVALID_ARG_TYPE('iterable', [
        'Iterable'
    ], iterable);
    var readable = new Readable(_objectSpread({
        objectMode: true
    }, opts));
    // Reading boolean to protect against _read
    // being called before last iteration completion.
    var reading = false;
    readable._read = function() {
        if (!reading) {
            reading = true;
            next();
        }
    };
    function next() {
        return _next2.apply(this, arguments);
    }
    function _next2() {
        _next2 = _asyncToGenerator(function*() {
            try {
                var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
                if (done) {
                    readable.push(null);
                } else if (readable.push((yield value))) {
                    next();
                } else {
                    reading = false;
                }
            } catch (err) {
                readable.destroy(err);
            }
        });
        return _next2.apply(this, arguments);
    }
    return readable;
}
module.exports = from;
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = __turbopack_context__.r("[externals]/events [external] (events, cjs)").EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/stream.js [app-ssr] (ecmascript)");
/*</replacement>*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
var OurUint8Array = (("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable").Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var debug;
if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog('stream');
} else {
    debug = function debug() {};
}
/*</replacement>*/ var BufferList = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/buffer_list.js [app-ssr] (ecmascript)");
var destroyImpl = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/destroy.js [app-ssr] (ecmascript)");
var _require = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/state.js [app-ssr] (ecmascript)"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
__turbopack_context__.r("[project]/web/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = __turbopack_context__.f({
            "string_decoder": {
                id: ()=>"[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
            },
            "string_decoder/": {
                id: ()=>"[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
            }
        })('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    if (!(this instanceof Readable)) return new Readable(options);
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) {
            return false;
        }
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else {
        skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
            errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
                errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state.destroyed) {
                return false;
            } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else {
                    addChunk(stream, state, chunk, false);
                }
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    }
    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', [
            'string',
            'Buffer',
            'Uint8Array'
        ], chunk);
    }
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = __turbopack_context__.f({
        "string_decoder": {
            id: ()=>"[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
        },
        "string_decoder/": {
            id: ()=>"[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
        }
    })('string_decoder/').StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding;
    // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
};
// Don't raise the hwm > 1GB
var MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
        // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
        n = MAX_HWM;
    } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) {
        // if we are sync, wait until next tick to emit the data.
        // Otherwise we risk emitting data in the flow()
        // the readable code triggers during a read() call
        emitReadable(stream);
    } else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    }
    // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug('onend');
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit('pipe', src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0;
        // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug('on readable', state.length, state.reading);
            if (state.length) {
                emitReadable(this);
            } else if (!state.reading) {
                process.nextTick(nReadingNextTick, this);
            }
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') {
        // We need to check if there is someone still listening to
        // readable and reset the state. However this needs to happen
        // after readable has been emitted but before I/O (nextTick) to
        // support once('readable', fn) cycles. This means that calling
        // resume within the same tick will have no
        // effect.
        process.nextTick(updateReadableListening, this);
    }
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) {
        // We need to check if there is someone still listening to
        // readable and reset the state. However this needs to happen
        // after readable has been emitted but before I/O (nextTick) to
        // support once('readable', fn) cycles. This means that calling
        // resume within the same tick will have no
        // effect.
        process.nextTick(updateReadableListening, this);
    }
    return res;
};
function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) {
        // flowing needs to be set to true now, otherwise
        // the upcoming resume will not flow.
        state.flowing = true;
    // crude way to check if we should resume
    } else if (self.listenerCount('data') > 0) {
        self.resume();
    }
}
function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume');
        // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug('resume', state.reading);
    if (!state.reading) {
        stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream){
        if (this[i] === undefined && typeof stream[i] === 'function') {
            this[i] = function methodWrap(method) {
                return function methodWrapReturnFunction() {
                    return stream[method].apply(stream, arguments);
                };
            }(i);
        }
    }
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++){
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === 'function') {
    Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === undefined) {
            createReadableStreamAsyncIterator = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/async_iterator.js [app-ssr] (ecmascript)");
        }
        return createReadableStreamAsyncIterator(this);
    };
}
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) {
            this._readableState.flowing = state;
        }
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else {
        // read part of list
        ret = state.buffer.consume(n, state.decoder);
    }
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug('endReadableNT', state.endEmitted, state.length);
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
                stream.destroy();
            }
        }
    }
}
if (typeof Symbol === 'function') {
    Readable.from = function(iterable, opts) {
        if (from === undefined) {
            from = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/from.js [app-ssr] (ecmascript)");
        }
        return from(Readable, iterable, opts);
    };
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
module.exports = Transform;
var _require$codes = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/web/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
        return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
    }
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === 'function' && !this._readableState.destroyed) {
        this._flush(function(er, data) {
            done(_this, er, data);
        });
    } else {
        done(this, null, null);
    }
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
    }
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);
    // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_passthrough.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
module.exports = PassThrough;
var Transform = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/web/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/pipeline.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if (eos === undefined) eos = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)");
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++){
        streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) {
        throw new ERR_MISSING_ARGS('streams');
    }
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;
}),
"[project]/web/node_modules/through2/node_modules/readable-stream/readable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
if (process.env.READABLE_STREAM === 'disable' && Stream) {
    module.exports = Stream.Readable;
    Object.assign(module.exports, Stream);
    module.exports.Stream = Stream;
} else {
    exports = module.exports = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js [app-ssr] (ecmascript)");
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js [app-ssr] (ecmascript)");
    exports.Duplex = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    exports.Transform = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js [app-ssr] (ecmascript)");
    exports.PassThrough = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/_stream_passthrough.js [app-ssr] (ecmascript)");
    exports.finished = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)");
    exports.pipeline = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/lib/internal/streams/pipeline.js [app-ssr] (ecmascript)");
}
}),
"[project]/web/node_modules/inherits/inherits_browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    };
}
}),
"[project]/web/node_modules/inherits/inherits.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

try {
    var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
    /* istanbul ignore next */ if (typeof util.inherits !== 'function') throw '';
    module.exports = util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = __turbopack_context__.r("[project]/web/node_modules/inherits/inherits_browser.js [app-ssr] (ecmascript)");
}
}),
"[project]/web/node_modules/util-deprecate/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */ module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").deprecate;
}),
"[project]/web/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/web/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/*<replacement>*/ var Buffer = __turbopack_context__.r("[project]/web/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true){
        switch(enc){
            case 'utf8':
            case 'utf-8':
                return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 'utf16le';
            case 'latin1':
            case 'binary':
                return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
                return enc;
            default:
                if (retried) return; // undefined
                enc = ('' + enc).toLowerCase();
                retried = true;
        }
    }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}
}),
"[project]/web/node_modules/through2/through2.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { Transform } = __turbopack_context__.r("[project]/web/node_modules/through2/node_modules/readable-stream/readable.js [app-ssr] (ecmascript)");
function inherits(fn, sup) {
    fn.super_ = sup;
    fn.prototype = Object.create(sup.prototype, {
        constructor: {
            value: fn,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}
// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2(construct) {
    return (options, transform, flush)=>{
        if (typeof options === 'function') {
            flush = transform;
            transform = options;
            options = {};
        }
        if (typeof transform !== 'function') {
            // noop
            transform = (chunk, enc, cb)=>cb(null, chunk);
        }
        if (typeof flush !== 'function') {
            flush = null;
        }
        return construct(options, transform, flush);
    };
}
// main export, just make me a transform stream!
const make = through2((options, transform, flush)=>{
    const t2 = new Transform(options);
    t2._transform = transform;
    if (flush) {
        t2._flush = flush;
    }
    return t2;
});
// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
const ctor = through2((options, transform, flush)=>{
    function Through2(override) {
        if (!(this instanceof Through2)) {
            return new Through2(override);
        }
        this.options = Object.assign({}, options, override);
        Transform.call(this, this.options);
        this._transform = transform;
        if (flush) {
            this._flush = flush;
        }
    }
    inherits(Through2, Transform);
    return Through2;
});
const obj = through2(function(options, transform, flush) {
    const t2 = new Transform(Object.assign({
        objectMode: true,
        highWaterMark: 16
    }, options));
    t2._transform = transform;
    if (flush) {
        t2._flush = flush;
    }
    return t2;
});
module.exports = make;
module.exports.ctor = ctor;
module.exports.obj = obj;
}),
"[project]/web/node_modules/tunnel-agent/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var net = __turbopack_context__.r("[externals]/net [external] (net, cjs)"), tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)"), http = __turbopack_context__.r("[externals]/http [external] (http, cjs)"), https = __turbopack_context__.r("[externals]/https [external] (https, cjs)"), events = __turbopack_context__.r("[externals]/events [external] (events, cjs)"), assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)"), util = __turbopack_context__.r("[externals]/util [external] (util, cjs)"), Buffer = __turbopack_context__.r("[project]/web/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)").Buffer;
exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;
function httpOverHttp(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http.request;
    return agent;
}
function httpsOverHttp(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function httpOverHttps(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https.request;
    return agent;
}
function httpsOverHttps(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function TunnelingAgent(options) {
    var self = this;
    self.options = options || {};
    self.proxyOptions = self.options.proxy || {};
    self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on('free', function onFree(socket, host, port) {
        for(var i = 0, len = self.requests.length; i < len; ++i){
            var pending = self.requests[i];
            if (pending.host === host && pending.port === port) {
                // Detect the request to connect same origin server,
                // reuse the connection.
                self.requests.splice(i, 1);
                pending.request.onSocket(socket);
                return;
            }
        }
        socket.destroy();
        self.removeSocket(socket);
    });
}
util.inherits(TunnelingAgent, events.EventEmitter);
TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
    var self = this;
    // Legacy API: addRequest(req, host, port, path)
    if (typeof options === 'string') {
        options = {
            host: options,
            port: arguments[2],
            path: arguments[3]
        };
    }
    if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push({
            host: options.host,
            port: options.port,
            request: req
        });
        return;
    }
    // If we are under maxSockets create a new one.
    self.createConnection({
        host: options.host,
        port: options.port,
        request: req
    });
};
TunnelingAgent.prototype.createConnection = function createConnection(pending) {
    var self = this;
    self.createSocket(pending, function(socket) {
        socket.on('free', onFree);
        socket.on('close', onCloseOrRemove);
        socket.on('agentRemove', onCloseOrRemove);
        pending.request.onSocket(socket);
        function onFree() {
            self.emit('free', socket, pending.host, pending.port);
        }
        function onCloseOrRemove(err) {
            self.removeSocket(socket);
            socket.removeListener('free', onFree);
            socket.removeListener('close', onCloseOrRemove);
            socket.removeListener('agentRemove', onCloseOrRemove);
        }
    });
};
TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {};
    self.sockets.push(placeholder);
    var connectOptions = mergeOptions({}, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false
    });
    if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers['Proxy-Authorization'] = 'Basic ' + Buffer.from(connectOptions.proxyAuth).toString('base64');
    }
    debug('making CONNECT request');
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false; // for v0.6
    connectReq.once('response', onResponse); // for v0.6
    connectReq.once('upgrade', onUpgrade); // for v0.6
    connectReq.once('connect', onConnect); // for v0.7 or later
    connectReq.once('error', onError);
    connectReq.end();
    function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function() {
            onConnect(res, socket, head);
        });
    }
    function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode === 200) {
            assert.equal(head.length, 0);
            debug('tunneling connection has established');
            self.sockets[self.sockets.indexOf(placeholder)] = socket;
            cb(socket);
        } else {
            debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
            var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
        }
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
        var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
        error.code = 'ECONNRESET';
        options.request.emit('error', error);
        self.removeSocket(placeholder);
    }
};
TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
    var pos = this.sockets.indexOf(socket);
    if (pos === -1) return;
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) {
        // If we have pending requests and a socket gets closed a new one
        // needs to be created to take over in the pool for the one that closed.
        this.createConnection(pending);
    }
};
function createSecureSocket(options, cb) {
    var self = this;
    TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        // 0 is dummy port for v0.6
        var secureSocket = tls.connect(0, mergeOptions({}, self.options, {
            servername: options.host,
            socket: socket
        }));
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function mergeOptions(target) {
    for(var i = 1, len = arguments.length; i < len; ++i){
        var overrides = arguments[i];
        if (typeof overrides === 'object') {
            var keys = Object.keys(overrides);
            for(var j = 0, keyLen = keys.length; j < keyLen; ++j){
                var k = keys[j];
                if (overrides[k] !== undefined) {
                    target[k] = overrides[k];
                }
            }
        }
    }
    return target;
}
var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
    debug = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === 'string') {
            args[0] = 'TUNNEL: ' + args[0];
        } else {
            args.unshift('TUNNEL:');
        }
        console.error.apply(console, args);
    };
} else {
    debug = function() {};
}
exports.debug = debug; // for test
}),
"[project]/web/node_modules/is-retry-allowed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const denyList = new Set([
    'ENOTFOUND',
    'ENETUNREACH',
    // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
    'UNABLE_TO_GET_ISSUER_CERT',
    'UNABLE_TO_GET_CRL',
    'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
    'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
    'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
    'CERT_SIGNATURE_FAILURE',
    'CRL_SIGNATURE_FAILURE',
    'CERT_NOT_YET_VALID',
    'CERT_HAS_EXPIRED',
    'CRL_NOT_YET_VALID',
    'CRL_HAS_EXPIRED',
    'ERROR_IN_CERT_NOT_BEFORE_FIELD',
    'ERROR_IN_CERT_NOT_AFTER_FIELD',
    'ERROR_IN_CRL_LAST_UPDATE_FIELD',
    'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
    'OUT_OF_MEM',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    'SELF_SIGNED_CERT_IN_CHAIN',
    'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    'CERT_CHAIN_TOO_LONG',
    'CERT_REVOKED',
    'INVALID_CA',
    'PATH_LENGTH_EXCEEDED',
    'INVALID_PURPOSE',
    'CERT_UNTRUSTED',
    'CERT_REJECTED',
    'HOSTNAME_MISMATCH'
]);
// TODO: Use `error?.code` when targeting Node.js 14
module.exports = (error)=>!denyList.has(error && error.code);
}),
"[project]/web/node_modules/nanoid/url-alphabet/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlAlphabet",
    ()=>urlAlphabet
]);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
;
}),
"[project]/web/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customAlphabet",
    ()=>customAlphabet,
    "customRandom",
    ()=>customRandom,
    "nanoid",
    ()=>nanoid,
    "random",
    ()=>random
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$nanoid$2f$url$2d$alphabet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/nanoid/url-alphabet/index.js [app-ssr] (ecmascript)");
;
;
const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
let fillPool = (bytes)=>{
    if (!pool || pool.length < bytes) {
        pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(pool);
        poolOffset = 0;
    } else if (poolOffset + bytes > pool.length) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(pool);
        poolOffset = 0;
    }
    poolOffset += bytes;
};
let random = (bytes)=>{
    fillPool(bytes |= 0);
    return pool.subarray(poolOffset - bytes, poolOffset);
};
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
    let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = '';
        while(true){
            let bytes = getRandom(step);
            let i = step;
            while(i--){
                id += alphabet[bytes[i] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>{
    fillPool(size |= 0);
    let id = '';
    for(let i = poolOffset - size; i < poolOffset; i++){
        id += __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$nanoid$2f$url$2d$alphabet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAlphabet"][pool[i] & 63];
    }
    return id;
};
;
}),
"[project]/web/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function ShieldCheckIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](ShieldCheckIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/web/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-ssr] (ecmascript) <export default as ShieldCheckIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheckIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-ssr] (ecmascript)");
}),
"[project]/web/node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function LockClosedIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](LockClosedIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/web/node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js [app-ssr] (ecmascript) <export default as LockClosedIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockClosedIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LockClosedIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LockClosedIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js [app-ssr] (ecmascript)");
}),
"[project]/web/node_modules/@heroicons/react/24/outline/esm/CircleStackIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function CircleStackIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](CircleStackIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/web/node_modules/@heroicons/react/24/outline/esm/CircleStackIcon.js [app-ssr] (ecmascript) <export default as CircleStackIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleStackIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CircleStackIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CircleStackIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/@heroicons/react/24/outline/esm/CircleStackIcon.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=2374f_750e1f62._.js.map