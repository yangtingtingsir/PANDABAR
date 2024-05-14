/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
    function c(a, d) {
        var c = -1
          , e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= q)
            for (; ++c < e; )
                d(a[c], c, a);
        else
            b(a, d)
    }
    function e(d) {
        d = String(d).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(d) ? d : a(d)
    }
    function b(a, d) {
        for (var b in a)
            u.call(a, b) && d(a[b], b, a)
    }
    function k(d) {
        return null == d ? a(d) : A.call(d).slice(8, -1)
    }
    function h(a, d) {
        var b = null != a ? typeof a[d] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(b) && ("object" == b ? !!a[d] : !0)
    }
    function n(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }
    function p(a, d) {
        var b = null;
        c(a, function(c, e) {
            b = d(b, c, e, a)
        });
        return b
    }
    function l(a) {
        function d(f) {
            return p(f, function(f, d) {
                var b = d.pattern || n(d);
                !f && (f = RegExp("\\b" + b + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + b + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + b + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((f = String(d.label && !RegExp(b, "i").test(d.label) ? d.label : f).split("/"))[1] && !/[\d.]+/.test(f[0]) && (f[0] += " " + f[1]),
                d = d.label || d,
                f = e(f[0].replace(RegExp(b, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return f
            })
        }
        function c(f) {
            return p(f, function(f, d) {
                return f || (RegExp(d + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var g = r
          , q = a && "object" == typeof a && "String" != k(a);
        q && (g = a,
        a = null);
        var u = g.navigator || {}
          , m = u.userAgent || "";
        a || (a = m);
        var K = q ? !!u.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(A.toString())
          , F = q ? "Object" : "ScriptBridgingProxyObject"
          , z = q ? "Object" : "Environment"
          , x = q && g.java ? "JavaPackage" : k(g.java)
          , T = q ? "Object" : "RuntimeObject";
        z = (x = /\bJava/.test(x) && g.java) && k(g.environment) == z;
        var y = x ? "a" : "\u03b1", M = x ? "b" : "\u03b2", P = g.document || {}, H = g.operamini || g.opera, R = v.test(R = q && H ? H["[[Class]]"] : k(H)) ? R : H = null, f, U = a;
        q = [];
        var V = null
          , O = a == m;
        m = O && H && "function" == typeof H.version && H.version();
        var B = function(f) {
            return p(f, function(f, d) {
                return f || RegExp("\\b" + (d.pattern || n(d)) + "\\b", "i").exec(a) && (d.label || d)
            })
        }([{
            label: "EdgeHTML",
            pattern: "Edge"
        }, "Trident", {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"])
          , t = function(f) {
            return p(f, function(f, d) {
                return f || RegExp("\\b" + (d.pattern || n(d)) + "\\b", "i").exec(a) && (d.label || d)
            })
        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
            label: "Microsoft Edge",
            pattern: "Edge"
        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
            label: "Samsung Internet",
            pattern: "SamsungBrowser"
        }, "SeaMonkey", {
            label: "Silk",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", {
            label: "SRWare Iron",
            pattern: "Iron"
        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
            label: "Opera Mini",
            pattern: "OPiOS"
        }, "Opera", {
            label: "Opera",
            pattern: "OPR"
        }, "Chrome", {
            label: "Chrome Mobile",
            pattern: "(?:CriOS|CrMo)"
        }, {
            label: "Firefox",
            pattern: "(?:Firefox|Minefield)"
        }, {
            label: "Firefox for iOS",
            pattern: "FxiOS"
        }, {
            label: "IE",
            pattern: "IEMobile"
        }, {
            label: "IE",
            pattern: "MSIE"
        }, "Safari"])
          , C = d([{
            label: "BlackBerry",
            pattern: "BB10"
        }, "BlackBerry", {
            label: "Galaxy S",
            pattern: "GT-I9000"
        }, {
            label: "Galaxy S2",
            pattern: "GT-I9100"
        }, {
            label: "Galaxy S3",
            pattern: "GT-I9300"
        }, {
            label: "Galaxy S4",
            pattern: "GT-I9500"
        }, {
            label: "Galaxy S5",
            pattern: "SM-G900"
        }, {
            label: "Galaxy S6",
            pattern: "SM-G920"
        }, {
            label: "Galaxy S6 Edge",
            pattern: "SM-G925"
        }, {
            label: "Galaxy S7",
            pattern: "SM-G930"
        }, {
            label: "Galaxy S7 Edge",
            pattern: "SM-G935"
        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
            label: "Kindle Fire",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
            label: "Wii U",
            pattern: "WiiU"
        }, "Wii", "Xbox One", {
            label: "Xbox 360",
            pattern: "Xbox"
        }, "Xoom"])
          , I = function(f) {
            return p(f, function(f, d, b) {
                return f || (d[C] || d[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] || RegExp("\\b" + n(b) + "(?:\\b|\\w*\\d)", "i").exec(a)) && b
            })
        }({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Archos: {},
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1,
                Nexus: 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                PlayStation: 1,
                "PlayStation Vita": 1
            }
        })
          , w = function(f) {
            return p(f, function(f, d) {
                var b = d.pattern || n(d);
                if (!f && (f = RegExp("\\b" + b + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                    var c = f
                      , g = d.label || d
                      , r = {
                        "10.0": "10",
                        "6.4": "10 Technical Preview",
                        "6.3": "8.1",
                        "6.2": "8",
                        "6.1": "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        "5.2": "Server 2003 / XP 64-bit",
                        "5.1": "XP",
                        "5.01": "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    b && g && /^Win/i.test(c) && !/^Windows Phone /i.test(c) && (r = r[/[\d.]+$/.exec(c)]) && (c = "Windows " + r);
                    c = String(c);
                    b && g && (c = c.replace(RegExp(b, "i"), g));
                    f = c = e(c.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }
                return f
            })
        }(["Windows Phone", "Android", "CentOS", {
            label: "Chrome OS",
            pattern: "CrOS"
        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        B && (B = [B]);
        I && !C && (C = d([I]));
        if (f = /\bGoogle TV\b/.exec(C))
            C = f[0];
        /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
        "Opera Mini" == t && /\bOPiOS\b/.test(a) && q.push("running in Turbo/Uncompressed mode");
        "IE" == t && /\blike iPhone OS\b/.test(a) ? (f = l(a.replace(/like iPhone OS/, "")),
        I = f.manufacturer,
        C = f.product) : /^iP/.test(C) ? (t || (t = "Safari"),
        w = "iOS" + ((f = / OS ([\d_]+)/i.exec(a)) ? " " + f[1].replace(/_/g, ".") : "")) : "Konqueror" != t || /buntu/i.test(w) ? I && "Google" != I && (/Chrome/.test(t) && !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(C)) || /\bAndroid\b/.test(w) && /^Chrome/.test(t) && /\bVersion\//i.test(a) ? (t = "Android Browser",
        w = /\bAndroid\b/.test(w) ? w : "Android") : "Silk" == t ? (/\bMobi/i.test(a) || (w = "Android",
        q.unshift("desktop mode")),
        /Accelerated *= *true/i.test(a) && q.unshift("accelerated")) : "PaleMoon" == t && (f = /\bFirefox\/([\d.]+)\b/.exec(a)) ? q.push("identifying as Firefox " + f[1]) : "Firefox" == t && (f = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (w || (w = "Firefox OS"),
        C || (C = f[1])) : !t || (f = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !C && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(f + "/") + 8)) && (t = null),
        (f = C || I || w) && (C || I || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : f) + " Browser")) : "Electron" == t && (f = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && q.push("Chromium " + f) : w = "Kubuntu";
        m || (m = c(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", n(t), "(?:Firefox|Minefield|NetFront)"]));
        if (f = "iCab" == B && 3 < parseFloat(m) && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(a) && ("Mac OS" == w ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront")
            B = [f];
        "IE" == t && (f = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (t += " Mobile",
        w = "Windows Phone " + (/\+$/.test(f) ? f : f + ".x"),
        q.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (t = "IE Mobile",
        w = "Windows Phone 8.x",
        q.unshift("desktop mode"),
        m || (m = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != t && "Trident" == B && (f = /\brv:([\d.]+)/.exec(a)) && (t && q.push("identifying as " + t + (m ? " " + m : "")),
        t = "IE",
        m = f[1]);
        if (O) {
            if (h(g, "global"))
                if (x && (f = x.lang.System,
                U = f.getProperty("os.arch"),
                w = w || f.getProperty("os.name") + " " + f.getProperty("os.version")),
                z) {
                    try {
                        m = g.require("ringo/engine").version.join("."),
                        t = "RingoJS"
                    } catch (X) {
                        (f = g.system) && f.global.system == g.system && (t = "Narwhal",
                        w || (w = f[0].os || null))
                    }
                    t || (t = "Rhino")
                } else
                    "object" == typeof g.process && !g.process.browser && (f = g.process) && ("object" == typeof f.versions && ("string" == typeof f.versions.electron ? (q.push("Node " + f.versions.node),
                    t = "Electron",
                    m = f.versions.electron) : "string" == typeof f.versions.nw && (q.push("Chromium " + m, "Node " + f.versions.node),
                    t = "NW.js",
                    m = f.versions.nw)),
                    t || (t = "Node.js",
                    U = f.arch,
                    w = f.platform,
                    m = (m = /[\d.]+/.exec(f.version)) ? m[0] : null));
            else
                k(f = g.runtime) == F ? (t = "Adobe AIR",
                w = f.flash.system.Capabilities.os) : k(f = g.phantom) == T ? (t = "PhantomJS",
                m = (f = f.version || null) && f.major + "." + f.minor + "." + f.patch) : "number" == typeof P.documentMode && (f = /\bTrident\/(\d+)/i.exec(a)) ? (m = [m, P.documentMode],
                (f = +f[1] + 4) != m[1] && (q.push("IE " + m[1] + " mode"),
                B && (B[1] = ""),
                m[1] = f),
                m = "IE" == t ? String(m[1].toFixed(1)) : m[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(t) && (q.push("masking as " + t + " " + m),
                t = "IE",
                m = "11.0",
                B = ["Trident"],
                w = "Windows");
            w = w && e(w)
        }
        m && (f = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(m) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (O && u.appMinorVersion)) || /\bMinefield\b/i.test(a) && "a") && (V = /b/i.test(f) ? "beta" : "alpha",
        m = m.replace(RegExp(f + "\\+?$"), "") + ("beta" == V ? M : y) + (/\d+\+?/.exec(f) || ""));
        if ("Fennec" == t || "Firefox" == t && /\b(?:Android|Firefox OS)\b/.test(w))
            t = "Firefox Mobile";
        else if ("Maxthon" == t && m)
            m = m.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(C))
            "Xbox 360" == C && (w = null),
            "Xbox 360" == C && /\bIEMobile\b/.test(a) && q.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(t) && (!t || C || /Browser|Mobi/.test(t)) || "Windows CE" != w && !/Mobi/i.test(a))
            if ("IE" == t && O)
                try {
                    null === g.external && q.unshift("platform preview")
                } catch (X) {
                    q.unshift("embedded")
                }
            else
                (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) && (f = (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || m) ? (f = [f, /BB10/.test(a)],
                w = (f[1] ? (C = null,
                I = "BlackBerry") : "Device Software") + " " + f[0],
                m = null) : this != b && "Wii" != C && (O && H || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == t && /\bOS X (?:\d+\.){2,}/.test(w) || "IE" == t && (w && !/^Win/.test(w) && 5.5 < m || /\bWindows XP\b/.test(w) && 8 < m || 8 == m && !/\bTrident\b/.test(a))) && !v.test(f = l.call(b, a.replace(v, "") + ";")) && f.name && (f = "ing as " + f.name + ((f = f.version) ? " " + f : ""),
                v.test(t) ? (/\bIE\b/.test(f) && "Mac OS" == w && (w = null),
                f = "identify" + f) : (f = "mask" + f,
                t = R ? e(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                /\bIE\b/.test(f) && (w = null),
                O || (m = null)),
                B = ["Presto"],
                q.push(f));
        else
            t += " Mobile";
        if (f = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            f = [parseFloat(f.replace(/\.(\d)$/, ".0$1")), f];
            if ("Safari" == t && "+" == f[1].slice(-1))
                t = "WebKit Nightly",
                V = "alpha",
                m = f[1].slice(0, -1);
            else if (m == f[1] || m == (f[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1]))
                m = null;
            f[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == f[0] && 537.36 == f[2] && 28 <= parseFloat(f[1]) && "WebKit" == B && (B = ["Blink"]);
            O && (K || f[1]) ? (B && (B[1] = "like Chrome"),
            f = f[1] || (f = f[0],
            530 > f ? 1 : 532 > f ? 2 : 532.05 > f ? 3 : 533 > f ? 4 : 534.03 > f ? 5 : 534.07 > f ? 6 : 534.1 > f ? 7 : 534.13 > f ? 8 : 534.16 > f ? 9 : 534.24 > f ? 10 : 534.3 > f ? 11 : 535.01 > f ? 12 : 535.02 > f ? "13+" : 535.07 > f ? 15 : 535.11 > f ? 16 : 535.19 > f ? 17 : 536.05 > f ? 18 : 536.1 > f ? 19 : 537.01 > f ? 20 : 537.11 > f ? "21+" : 537.13 > f ? 23 : 537.18 > f ? 24 : 537.24 > f ? 25 : 537.36 > f ? 26 : "Blink" != B ? "27" : "28")) : (B && (B[1] = "like Safari"),
            f = (f = f[0],
            400 > f ? 1 : 500 > f ? 2 : 526 > f ? 3 : 533 > f ? 4 : 534 > f ? "4+" : 535 > f ? 5 : 537 > f ? 6 : 538 > f ? 7 : 601 > f ? 8 : "8"));
            B && (B[1] += " " + (f += "number" == typeof f ? ".x" : /[.+]/.test(f) ? "" : "+"));
            "Safari" == t && (!m || 45 < parseInt(m)) && (m = f)
        }
        "Opera" == t && (f = /\bzbov|zvav$/.exec(w)) ? (t += " ",
        q.unshift("desktop mode"),
        "zvav" == f ? (t += "Mini",
        m = null) : t += "Mobile",
        w = w.replace(RegExp(" *" + f + "$"), "")) : "Safari" == t && /\bChrome\b/.exec(B && B[1]) && (q.unshift("desktop mode"),
        t = "Chrome Mobile",
        m = null,
        /\bOS X\b/.test(w) ? (I = "Apple",
        w = "iOS 4.3+") : w = null);
        m && 0 == m.indexOf(f = /[\d.]+$/.exec(w)) && -1 < a.indexOf("/" + f + "-") && (w = String(w.replace(f, "")).replace(/^ +| +$/g, ""));
        B && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || "Safari" != t && /^iOS/.test(w) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(t) && B[1]) && (f = B[B.length - 1]) && q.push(f);
        q.length && (q = ["(" + q.join("; ") + ")"]);
        I && C && 0 > C.indexOf(I) && q.push("on " + I);
        C && q.push((/^on /.test(q[q.length - 1]) ? "" : "on ") + C);
        if (w) {
            var W = (f = / ([\d.+]+)$/.exec(w)) && "/" == w.charAt(w.length - f[0].length - 1);
            w = {
                architecture: 32,
                family: f && !W ? w.replace(f[0], "") : w,
                version: f ? f[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !W ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }
        (f = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (w && (w.architecture = 64,
        w.family = w.family.replace(RegExp(" *" + f), "")),
        t && (/\bWOW64\b/i.test(a) || O && /\w(?:86|32)$/.test(u.cpuClass || u.platform) && !/\bWin64; x64\b/i.test(a)) && q.unshift("32-bit")) : w && /^OS X/.test(w.family) && "Chrome" == t && 39 <= parseFloat(m) && (w.architecture = 64);
        a || (a = null);
        g = {};
        g.description = a;
        g.layout = B && B[0];
        g.manufacturer = I;
        g.name = t;
        g.prerelease = V;
        g.product = C;
        g.ua = a;
        g.version = t && m;
        g.os = w || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        g.parse = l;
        g.toString = function() {
            return this.description || ""
        }
        ;
        g.version && q.unshift(m);
        g.name && q.unshift(t);
        w && t && (w != String(w).split(" ")[0] || w != t.split(" ")[0] && !C) && q.push(C ? "(" + w + ")" : "on " + w);
        q.length && (g.description = q.join(" "));
        return g
    }
    var d = {
        "function": !0,
        object: !0
    }
      , r = d[typeof window] && window || this
      , m = d[typeof exports] && exports;
    d = d[typeof module] && module && !module.nodeType && module;
    var g = m && d && "object" == typeof global && global;
    !g || g.global !== g && g.window !== g && g.self !== g || (r = g);
    var q = Math.pow(2, 53) - 1
      , v = /\bOpera/;
    g = Object.prototype;
    var u = g.hasOwnProperty
      , A = g.toString
      , z = l();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (r.platform = z,
    define(function() {
        return z
    })) : m && d ? b(z, function(a, d) {
        m[d] = a
    }) : r.platform = z
}
).call(this);
function buildIOSMeta() {
    for (var a = [{
        name: "viewport",
        content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
    }, {
        name: "apple-mobile-web-app-capable",
        content: "yes"
    }, {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
    }], c = 0; c < a.length; c++) {
        var e = document.createElement("meta");
        e.name = a[c].name;
        e.content = a[c].content;
        var b = window.document.head.querySelector('meta[name="' + e.name + '"]');
        b && b.parentNode.removeChild(b);
        window.document.head.appendChild(e)
    }
}
function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}
function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}
function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}
function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product)
        switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
            case 568:
                320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                break;
            case 667:
                375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
            case 736:
                414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 724:
                375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
        }
}
function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}
function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
function isIOSLessThen13() {
    var a = platform.os
      , c = a.family.toLowerCase();
    a = parseFloat(a.version);
    return "ios" === c && 13 > a ? !0 : !1
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(),
    buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1
  , s_bIsIphone = !1;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}
)(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone"))
        return s_bIsIphone = !0;
    for (; a.length; )
        if (navigator.platform === a.pop())
            return !0;
    return s_bIsIphone = !1
}
function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}
function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}
function getSize(a) {
    var c = a.toLowerCase()
      , e = window.document
      , b = e.documentElement;
    if (void 0 === window["inner" + a])
        a = b["client" + a];
    else if (window["inner" + a] != b["client" + a]) {
        var k = e.createElement("body");
        k.id = "vpw-test-b";
        k.style.cssText = "overflow:scroll";
        var h = e.createElement("div");
        h.id = "vpw-test-d";
        h.style.cssText = "position:absolute;top:-1000px";
        h.innerHTML = "<style>@media(" + c + ":" + b["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        k.appendChild(h);
        b.insertBefore(k, e.head);
        a = 7 == h["offset" + a] ? b["client" + a] : window["inner" + a];
        b.removeChild(k)
    } else
        a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var e = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH)
          , b = Math.round(CANVAS_WIDTH * e);
        e = Math.round(CANVAS_HEIGHT * e);
        if (e < a) {
            var k = a - e;
            e += k;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * k
        } else
            b < c && (k = c - b,
            b += k,
            e += CANVAS_HEIGHT / CANVAS_WIDTH * k);
        k = a / 2 - e / 2;
        var h = c / 2 - b / 2
          , n = CANVAS_WIDTH / b;
        if (h * n < -EDGEBOARD_X || k * n < -EDGEBOARD_Y)
            e = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)),
            b = Math.round(CANVAS_WIDTH * e),
            e = Math.round(CANVAS_HEIGHT * e),
            k = (a - e) / 2,
            h = (c - b) / 2,
            n = CANVAS_WIDTH / b;
        s_iOffsetX = -1 * h * n;
        s_iOffsetY = -1 * k * n;
        0 <= k && (s_iOffsetY = 0);
        0 <= h && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"),
        s_oStage.canvas.width = 2 * b,
        s_oStage.canvas.height = 2 * e,
        canvas.style.width = b + "px",
        canvas.style.height = e + "px",
        c = Math.min(b / CANVAS_WIDTH, e / CANVAS_HEIGHT),
        s_iScaleFactor = 2 * c,
        s_oStage.scaleX = s_oStage.scaleY = 2 * c) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", b + "px"),
        $("#canvas").css("height", e + "px")) : (s_oStage.canvas.width = b,
        s_oStage.canvas.height = e,
        s_iScaleFactor = Math.min(b / CANVAS_WIDTH, e / CANVAS_HEIGHT),
        s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > k || (k = (a - e) / 2);
        $("#canvas").css("top", k + "px");
        $("#canvas").css("left", h + "px");
        fullscreenHandler()
    }
}
function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"),
    s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"),
    s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()))
}
function createBitmap(a, c, e) {
    var b = new createjs.Bitmap(a)
      , k = new createjs.Shape;
    c && e ? k.graphics.beginFill("#fff").drawRect(0, 0, c, e) : k.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    b.hitArea = k;
    return b
}
function createSprite(a, c, e, b, k, h) {
    a = null !== c ? new createjs.Sprite(a,c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-e, -b, k, h);
    a.hitArea = c;
    return a
}
function randomFloatBetween(a, c, e) {
    "undefined" === typeof e && (e = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(e))
}
function shuffle(a) {
    for (var c = a.length, e, b; 0 !== c; )
        b = Math.floor(Math.random() * c),
        --c,
        e = a[c],
        a[c] = a[b],
        a[b] = e;
    return a
}
function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var e = "";
    e = 10 > c ? e + ("0" + c + ":") : e + (c + ":");
    return 10 > a ? e + ("0" + a) : e + a
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
        case "touchstart":
            this.onTouchStart(a);
            break;
        case "touchmove":
            this.onTouchMove(a);
            break;
        case "touchend":
            this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 === a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), e = 0; e < c.length; e++) {
        var b = c[e].split("=");
        if (b[0] == a)
            return b[1]
    }
}
function playSound(a, c, e) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(),
    s_aSounds[a].volume(c),
    s_aSounds[a].loop(e),
    s_aSounds[a]) : null
}
function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}
function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}
function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible",
        "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden")in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin"in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
}
)();
function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen,
    null !== s_oInterface && s_oInterface.resetFullscreenBut(),
    null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.isEnabled)
    screenfull.on("change", function() {
        s_bFullscreen = screenfull.isFullscreen;
        null !== s_oInterface && s_oInterface.resetFullscreenBut();
        null !== s_oMenu && s_oMenu.resetFullscreenBut()
    });
function CSpriteLibrary() {
    var a = {}, c, e, b, k, h, n;
    this.init = function(a, l, d) {
        c = {};
        b = e = 0;
        k = a;
        h = l;
        n = d
    }
    ;
    this.addSprite = function(b, h) {
        if (!a.hasOwnProperty(b)) {
            var d = new Image;
            a[b] = c[b] = {
                szPath: h,
                oSprite: d,
                bLoaded: !1
            };
            e++
        }
    }
    ;
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    }
    ;
    this._onSpritesLoaded = function() {
        e = 0;
        h.call(n)
    }
    ;
    this._onSpriteLoaded = function() {
        k.call(n);
        ++b === e && this._onSpritesLoaded()
    }
    ;
    this.loadSprites = function() {
        for (var a in c)
            c[a].oSprite.oSpriteLibrary = this,
            c[a].oSprite.szKey = a,
            c[a].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }
            ,
            c[a].oSprite.onerror = function(a) {
                var d = a.currentTarget;
                setTimeout(function() {
                    c[d.szKey].oSprite.src = c[d.szKey].szPath
                }, 500)
            }
            ,
            c[a].oSprite.src = c[a].szPath
    }
    ;
    this.setLoaded = function(b) {
        a[b].bLoaded = !0
    }
    ;
    this.isLoaded = function(b) {
        return a[b].bLoaded
    }
    ;
    this.getNumSprites = function() {
        return e
    }
}
var CANVAS_WIDTH = 1500, CANVAS_HEIGHT = 640, EDGEBOARD_X = 300, EDGEBOARD_Y = 0, FONT_GAME = "adonaisregular", FPS_TIME = 1E3 / 24, DISABLE_SOUND_MOBILE = !1, STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, GAME_STATE_IDLE = 0, GAME_STATE_SPINNING = 1, GAME_STATE_SHOW_ALL_WIN = 2, GAME_STATE_SHOW_WIN = 3, REEL_STATE_START = 0, REEL_STATE_MOVING = 1, REEL_STATE_STOP = 2, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, REEL_OFFSET_X = 380, REEL_OFFSET_Y = 118, NUM_REELS = 5, NUM_ROWS = 3, NUM_SYMBOLS = 10, WILD_SYMBOL = 10, BONUS_SYMBOL = 9, NUM_PAYLINES = 5, SYMBOL_SIZE = 140, SPACE_BETWEEN_SYMBOLS = 10, MAX_FRAMES_REEL_EASE = 16, MIN_REEL_LOOPS, REEL_DELAY, REEL_START_Y = REEL_OFFSET_Y - 3 * SYMBOL_SIZE, REEL_ARRIVAL_Y = REEL_OFFSET_Y + 3 * SYMBOL_SIZE, TIME_SHOW_WIN, TIME_SHOW_ALL_WINS, MIN_BET, MAX_BET, TOTAL_MONEY, MAX_NUM_HOLD, BONUS_ITEM_WIDTH = 304, BONUS_ITEM_HEIGHT = 250, NUM_PRIZES = 3, NUM_SYMBOLS_FOR_BONUS = 3, PERC_WIN_PRIZE_1, PERC_WIN_PRIZE_2, PERC_WIN_PRIZE_3, SOUNDTRACK_VOLUME_IN_GAME = .2, WIN_OCCURRENCE, SLOT_CASH, MIN_WIN, BONUS_OCCURRENCE, PAYTABLE_VALUES, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, BONUS_PRIZE = [];
function CSlotSettings() {
    this._init = function() {
        this._initSymbolSpriteSheets();
        this._initPaylines();
        this._initSymbolWin();
        this._initSymbolAnims();
        this._initSymbolsOccurence();
        this._initBonus()
    }
    ;
    this._initSymbolSpriteSheets = function() {
        s_aSymbolData = [];
        for (var a = 1; a < NUM_SYMBOLS + 1; a++) {
            var c = {
                images: [s_oSpriteLibrary.getSprite("symbol_" + a)],
                frames: {
                    width: SYMBOL_SIZE,
                    height: SYMBOL_SIZE,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    "static": [0, 1],
                    moving: [1, 2]
                }
            };
            s_aSymbolData[a] = new createjs.SpriteSheet(c)
        }
    }
    ;
    this._initPaylines = function() {
        s_aPaylineCombo = [[{
            row: 1,
            col: 0
        }, {
            row: 1,
            col: 1
        }, {
            row: 1,
            col: 2
        }, {
            row: 1,
            col: 3
        }, {
            row: 1,
            col: 4
        }], [{
            row: 0,
            col: 0
        }, {
            row: 0,
            col: 1
        }, {
            row: 0,
            col: 2
        }, {
            row: 0,
            col: 3
        }, {
            row: 0,
            col: 4
        }], [{
            row: 2,
            col: 0
        }, {
            row: 2,
            col: 1
        }, {
            row: 2,
            col: 2
        }, {
            row: 2,
            col: 3
        }, {
            row: 2,
            col: 4
        }], [{
            row: 0,
            col: 0
        }, {
            row: 1,
            col: 1
        }, {
            row: 2,
            col: 2
        }, {
            row: 1,
            col: 3
        }, {
            row: 0,
            col: 4
        }], [{
            row: 2,
            col: 0
        }, {
            row: 1,
            col: 1
        }, {
            row: 0,
            col: 2
        }, {
            row: 1,
            col: 3
        }, {
            row: 2,
            col: 4
        }]]
    }
    ;
    this._initSymbolAnims = function() {
        s_aSymbolAnims = [];
        var a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_1_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[0] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_2_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[1] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_3_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[2] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_4_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[3] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_5_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[4] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_6_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[5] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_7_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[6] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_8_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[7] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_9_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[8] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_10_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[9] = new createjs.SpriteSheet(a)
    }
    ;
    this._initSymbolWin = function() {
        s_aSymbolWin = [];
        s_aSymbolWin[0] = PAYTABLE_VALUES[0];
        s_aSymbolWin[1] = PAYTABLE_VALUES[1];
        s_aSymbolWin[2] = PAYTABLE_VALUES[2];
        s_aSymbolWin[3] = PAYTABLE_VALUES[3];
        s_aSymbolWin[4] = PAYTABLE_VALUES[4];
        s_aSymbolWin[5] = PAYTABLE_VALUES[5];
        s_aSymbolWin[6] = PAYTABLE_VALUES[6];
        s_aSymbolWin[7] = PAYTABLE_VALUES[7]
    }
    ;
    this._initSymbolsOccurence = function() {
        s_aRandSymbols = [];
        var a;
        for (a = 0; 1 > a; a++)
            s_aRandSymbols.push(1);
        for (a = 0; 2 > a; a++)
            s_aRandSymbols.push(2);
        for (a = 0; 3 > a; a++)
            s_aRandSymbols.push(3);
        for (a = 0; 4 > a; a++)
            s_aRandSymbols.push(4);
        for (a = 0; 4 > a; a++)
            s_aRandSymbols.push(5);
        for (a = 0; 6 > a; a++)
            s_aRandSymbols.push(6);
        for (a = 0; 7 > a; a++)
            s_aRandSymbols.push(7);
        for (a = 0; 7 > a; a++)
            s_aRandSymbols.push(8);
        for (a = 0; 2 > a; a++)
            s_aRandSymbols.push(9);
        for (a = 0; 2 > a; a++)
            s_aRandSymbols.push(10)
    }
    ;
    this._initBonus = function() {
        s_aPrizeOccurence = [];
        var a;
        for (a = 0; a < PERC_WIN_PRIZE_1; a++)
            s_aPrizeOccurence.push(0);
        for (a = 0; a < PERC_WIN_PRIZE_2; a++)
            s_aPrizeOccurence.push(1);
        for (a = 0; a < PERC_WIN_PRIZE_3; a++)
            s_aPrizeOccurence.push(2)
    }
    ;
    this._init()
}
var s_aSymbolData, s_aPaylineCombo, s_aSymbolWin, s_aSymbolAnims, s_aRandSymbols, s_aPrizeOccurence;
TEXT_MONEY = "MONEY";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_COIN = "COIN";
TEXT_MAX_BET = "MAX BET";
TEXT_INFO = "INFO";
TEXT_LINES = "LINES";
TEXT_SPIN = "SPIN";
TEXT_WIN = "WIN";
TEXT_HOLD = "HOLD";
TEXT_HELP_WILD = "JOLLY SYMBOL CAN REPLACE ANY OTHER SYMBOL TO MAKE UP A COMBO";
TEXT_HELP_BONUS = "3 OR MORE PYRAMIDS LET YOU PLAY THE BONUS GAME!";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_CURRENCY = "$";
var TEXT_PRELOADER_CONTINUE = "START"
  , TEXT_NO_MONEY = "NO MONEY! DO YOU WANT TO RECHARGE?"
  , TEXT_RECHARGE = "RECHARGE"
  , TEXT_EXIT = "EXIT";
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_MSG_SHARE1 = "You collected <strong>";
TEXT_MSG_SHARE2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_MSG_SHARING1 = "My score is ";
TEXT_MSG_SHARING2 = " points! Can you do better?";
function CPreloader() {
    var a, c, e, b, k, h, n, p, l, d;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        d = new createjs.Container;
        s_oStage.addChild(d)
    }
    ;
    this.unload = function() {
        d.removeAllChildren();
        l.unload()
    }
    ;
    this._onImagesLoaded = function() {}
    ;
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    }
    ;
    this.attachSprites = function() {
        var r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.addChild(r);
        r = s_oSpriteLibrary.getSprite("200x200");
        n = createBitmap(r);
        n.regX = .5 * r.width;
        n.regY = .5 * r.height;
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2 - 180;
        d.addChild(n);
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(n.x - 100, n.y - 100, 200, 200, 10);
        d.addChild(p);
        n.mask = p;
        r = s_oSpriteLibrary.getSprite("progress_bar");
        b = createBitmap(r);
        b.x = CANVAS_WIDTH / 2 - r.width / 2;
        b.y = CANVAS_HEIGHT / 2 + 50;
        d.addChild(b);
        a = r.width;
        c = r.height;
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, 1, c);
        d.addChild(k);
        b.mask = k;
        e = new createjs.Text("","30px " + FONT_GAME,"#fff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 100;
        e.textBaseline = "alphabetic";
        e.textAlign = "center";
        d.addChild(e);
        r = s_oSpriteLibrary.getSprite("but_start");
        l = new CTextButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT / 2,r,TEXT_PRELOADER_CONTINUE,"Arial","#000","bold 40",d);
        l.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        l.setVisible(!1);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.addChild(h);
        createjs.Tween.get(h).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(h);
            d.removeChild(h)
        })
    }
    ;
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    }
    ;
    this.refreshLoader = function(d) {
        e.text = d + "%";
        100 === d && (s_oMain._onRemovePreloader(),
        e.visible = !1,
        b.visible = !1);
        k.graphics.clear();
        d = Math.floor(d * a / 100);
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, d, c)
    }
    ;
    this._init()
}
function CMain(a) {
    var c, e = 0, b = 0, k = STATE_LOADING, h, n;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = isMobile();
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = 30;
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        seekAndDestroy() ? h = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
    }
    ;
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        c = !0
    }
    ;
    this.soundLoaded = function() {
        e++;
        h.refreshLoader(Math.floor(e / b * 100))
    }
    ;
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win",
            loop: !0,
            volume: 1,
            ingamename: "win"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_but",
            loop: !1,
            volume: 1,
            ingamename: "press_but"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "reel_stop",
            loop: !1,
            volume: 1,
            ingamename: "reel_stop"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "reels",
            loop: !1,
            volume: 1,
            ingamename: "reels"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "choose_bonus_item",
            loop: !1,
            volume: 1,
            ingamename: "choose_bonus_item"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "start_reel",
            loop: !1,
            volume: 1,
            ingamename: "start_reel"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_hold",
            loop: !1,
            volume: 1,
            ingamename: "press_hold"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        b += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++)
            this.tryToLoadSound(s_aSoundsInfo[a], !1)
    }
    ;
    this.tryToLoadSound = function(a, b) {
        setTimeout(function() {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(a, d) {
                    for (var b = 0; b < s_aSoundsInfo.length; b++)
                        if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[b], !0);
                            break
                        }
                },
                onplayerror: function(a) {
                    for (var d = 0; d < s_aSoundsInfo.length; d++)
                        if (a === s_aSounds[s_aSoundsInfo[d].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[d].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[d].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[d].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, b ? 200 : 0)
    }
    ;
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("paytable", "./sprites/paytable.jpg");
        s_oSpriteLibrary.addSprite("but_play_bg", "./sprites/but_play_bg.png");
        s_oSpriteLibrary.addSprite("mask_slot", "./sprites/mask_slot.png");
        s_oSpriteLibrary.addSprite("spin_but", "./sprites/but_spin_bg.png");
        s_oSpriteLibrary.addSprite("coin_but", "./sprites/but_coin_bg.png");
        s_oSpriteLibrary.addSprite("info_but", "./sprites/but_info_bg.png");
        s_oSpriteLibrary.addSprite("bet_but", "./sprites/bet_but.png");
        s_oSpriteLibrary.addSprite("win_frame_anim", "./sprites/win_frame_anim.png");
        s_oSpriteLibrary.addSprite("but_lines_bg", "./sprites/but_lines_bg.png");
        s_oSpriteLibrary.addSprite("but_maxbet_bg", "./sprites/but_maxbet_bg.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("hit_area_col", "./sprites/hit_area_col.png");
        s_oSpriteLibrary.addSprite("hold_col", "./sprites/hold_col.png");
        s_oSpriteLibrary.addSprite("bonus_bg", "./sprites/bonus_bg.jpg");
        s_oSpriteLibrary.addSprite("bonus_item", "./sprites/bonus_item.png");
        s_oSpriteLibrary.addSprite("bonus_prize", "./sprites/bonus_prize.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        for (var a = 1; a < NUM_SYMBOLS + 1; a++)
            s_oSpriteLibrary.addSprite("symbol_" + a, "./sprites/symbol_" + a + ".png"),
            s_oSpriteLibrary.addSprite("symbol_" + a + "_anim", "./sprites/symbol_" + a + "_anim.png");
        for (a = 1; a < NUM_PAYLINES + 1; a++)
            s_oSpriteLibrary.addSprite("payline_" + a, "./sprites/payline_" + a + ".png");
        b += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    }
    ;
    this._onImagesLoaded = function() {
        e++;
        h.refreshLoader(Math.floor(e / b * 100))
    }
    ;
    this._onAllImagesLoaded = function() {}
    ;
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    }
    ;
    this._onRemovePreloader = function() {
        h.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    }
    ;
    this.gotoMenu = function() {
        new CMenu;
        k = STATE_MENU
    }
    ;
    this.gotoGame = function() {
        n = new CGame(p);
        k = STATE_GAME
    }
    ;
    this.gotoHelp = function() {
        new CHelp;
        k = STATE_HELP
    }
    ;
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    }
    ;
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    }
    ;
    this._update = function(a) {
        if (!1 !== c) {
            var d = (new Date).getTime();
            s_iTimeElaps = d - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = d;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps,
            s_iCntTime -= 1E3,
            s_iCntFps = 0);
            k === STATE_GAME && n.update();
            s_oStage.update(a)
        }
    }
    ;
    s_oMain = this;
    var p = a;
    PAYTABLE_VALUES = [];
    for (var l = 0; 8 > l; l++)
        PAYTABLE_VALUES[l] = a["paytable_symbol_" + (l + 1)];
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    SHOW_CREDITS = p.show_credits;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null, s_bFullscreen = !1, s_aSoundsInfo;
function CTextButton(a, c, e, b, k, h, n, p) {
    var l, d, r, m, g, q, v, u, A, z;
    this._init = function(a, b, c, e, g, h, k) {
        l = !1;
        d = 1;
        r = [];
        m = [];
        z = createBitmap(c);
        u = new createjs.Container;
        u.x = a;
        u.y = b;
        u.regX = c.width / 2;
        u.regY = c.height / 2;
        s_bMobile || (u.cursor = "pointer");
        u.addChild(z, A);
        p.addChild(u);
        A = new CTLText(u,14,5,c.width - 28,c.height - 10,k,"center",h,g,1,0,0,e,!0,!0,!1,!1);
        this._initListener()
    }
    ;
    this.unload = function() {
        u.off("mousedown", g);
        u.off("pressup", q);
        p.removeChild(u)
    }
    ;
    this.setVisible = function(a) {
        u.visible = a
    }
    ;
    this.setAlign = function(a) {
        A.textAlign = a
    }
    ;
    this.setTextX = function(a) {
        A.x = a
    }
    ;
    this.setScale = function(a) {
        d = u.scaleX = u.scaleY = a
    }
    ;
    this.enable = function() {
        l = !1
    }
    ;
    this.disable = function() {
        l = !0
    }
    ;
    this._initListener = function() {
        g = u.on("mousedown", this.buttonDown);
        q = u.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, d, b) {
        r[a] = d;
        m[a] = b
    }
    ;
    this.addEventListenerWithParams = function(a, d, b, c) {
        r[a] = d;
        m[a] = b;
        v = c
    }
    ;
    this.buttonRelease = function() {
        l || (playSound("press_but", 1, !1),
        u.scaleX = d,
        u.scaleY = d,
        r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(m[ON_MOUSE_UP], v))
    }
    ;
    this.buttonDown = function() {
        l || (u.scaleX = .9 * d,
        u.scaleY = .9 * d,
        r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]))
    }
    ;
    this.setPosition = function(a, d) {
        u.x = a;
        u.y = d
    }
    ;
    this.tweenPosition = function(a, d, b, c, e, g, h) {
        createjs.Tween.get(u).wait(c).to({
            x: a,
            y: d
        }, b, e).call(function() {
            void 0 !== g && g.call(h)
        })
    }
    ;
    this.changeText = function(a) {
        A.refreshText(a)
    }
    ;
    this.setX = function(a) {
        u.x = a
    }
    ;
    this.setY = function(a) {
        u.y = a
    }
    ;
    this.getButtonImage = function() {
        return u
    }
    ;
    this.getX = function() {
        return u.x
    }
    ;
    this.getY = function() {
        return u.y
    }
    ;
    this.getSprite = function() {
        return u
    }
    ;
    this.getScale = function() {
        return u.scaleX
    }
    ;
    this._init(a, c, e, b, k, h, n)
}
function CGfxButton(a, c, e, b) {
    var k, h, n, p, l, d, r, m, g;
    this._init = function(a, d, b, c) {
        k = !1;
        p = [];
        l = [];
        g = createBitmap(b);
        g.x = a;
        g.y = d;
        h = b.width;
        n = b.height;
        g.regX = b.width / 2;
        g.regY = b.height / 2;
        g.cursor = "pointer";
        !1 !== c && s_oStage.addChild(g);
        this._initListener()
    }
    ;
    this.unload = function() {
        g.off("mousedown", r);
        g.off("pressup", m);
        s_oStage.removeChild(g)
    }
    ;
    this.setVisible = function(a) {
        g.visible = a
    }
    ;
    this.enable = function() {
        k = !1;
        g.filters = [];
        g.cache(0, 0, h, n)
    }
    ;
    this.disable = function() {
        k = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        g.filters = [new createjs.ColorMatrixFilter(a)];
        g.cache(0, 0, h, n)
    }
    ;
    this._initListener = function() {
        r = g.on("mousedown", this.buttonDown);
        m = g.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, d, b) {
        p[a] = d;
        l[a] = b
    }
    ;
    this.addEventListenerWithParams = function(a, b, c, g) {
        p[a] = b;
        l[a] = c;
        d = g
    }
    ;
    this.buttonRelease = function() {
        k || (playSound("press_but", 1, !1),
        g.scaleX = 1,
        g.scaleY = 1,
        p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(l[ON_MOUSE_UP], d))
    }
    ;
    this.buttonDown = function() {
        k || (g.scaleX = .9,
        g.scaleY = .9,
        p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], d))
    }
    ;
    this.setPosition = function(a, d) {
        g.x = a;
        g.y = d
    }
    ;
    this.setX = function(a) {
        g.x = a
    }
    ;
    this.setY = function(a) {
        g.y = a
    }
    ;
    this.getButtonImage = function() {
        return g
    }
    ;
    this.getX = function() {
        return g.x
    }
    ;
    this.getY = function() {
        return g.y
    }
    ;
    this.getSprite = function() {
        return g
    }
    ;
    this._init(a, c, e, b);
    return this
}
function CToggle(a, c, e, b, k) {
    var h, n, p, l, d, r, m;
    this._init = function(a, d, b, c, e) {
        m = void 0 !== e ? e : s_oStage;
        n = [];
        p = [];
        e = new createjs.SpriteSheet({
            images: [b],
            frames: {
                width: b.width / 2,
                height: b.height,
                regX: b.width / 2 / 2,
                regY: b.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        h = c;
        l = createSprite(e, "state_" + h, b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        l.x = a;
        l.y = d;
        l.stop();
        s_bMobile || (l.cursor = "pointer");
        m.addChild(l);
        this._initListener()
    }
    ;
    this.unload = function() {
        l.off("mousedown", d);
        l.off("pressup", r);
        m.removeChild(l)
    }
    ;
    this._initListener = function() {
        d = l.on("mousedown", this.buttonDown);
        r = l.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, b, d) {
        n[a] = b;
        p[a] = d
    }
    ;
    this.setCursorType = function(a) {
        l.cursor = a
    }
    ;
    this.setActive = function(a) {
        h = a;
        l.gotoAndStop("state_" + h)
    }
    ;
    this.buttonRelease = function() {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("press_but", 1, !1);
        h = !h;
        l.gotoAndStop("state_" + h);
        n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(p[ON_MOUSE_UP], h)
    }
    ;
    this.buttonDown = function() {
        l.scaleX = .9;
        l.scaleY = .9;
        n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN])
    }
    ;
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    }
    ;
    this._init(a, c, e, b, k)
}
function CBetBut(a, c, e) {
    var b, k, h, n = [], p;
    this._init = function(a, d, c) {
        b = !1;
        k = [];
        h = [];
        c = s_oSpriteLibrary.getSprite("bet_but");
        var e = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: 0,
                regY: 0
            },
            animations: {
                on: [0, 1],
                off: [1, 2]
            }
        });
        p = createSprite(e, "on", 0, 0, c.width / 2, c.height);
        p.stop();
        p.x = a;
        p.y = d;
        p.regX = c.width / 2;
        p.regY = c.height / 2;
        p.cursor = "pointer";
        s_oStage.addChild(p);
        this._initListener()
    }
    ;
    this.unload = function() {
        p.off("mousedown", this.buttonDown);
        p.off("pressup", this.buttonRelease);
        s_oStage.removeChild(p)
    }
    ;
    this.disable = function(a) {
        b = a
    }
    ;
    this.setVisible = function(a) {
        p.visible = a
    }
    ;
    this.setOn = function() {
        p.gotoAndStop("on")
    }
    ;
    this.setOff = function() {
        p.gotoAndStop("off")
    }
    ;
    this._initListener = function() {
        p.on("mousedown", this.buttonDown);
        p.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        h[a] = c
    }
    ;
    this.addEventListenerWithParams = function(a, b, c, e) {
        k[a] = b;
        h[a] = c;
        n = e
    }
    ;
    this.buttonRelease = function() {
        k[ON_MOUSE_UP] && !1 === b && (playSound("press_but", 1, !1),
        k[ON_MOUSE_UP].call(h[ON_MOUSE_UP], n))
    }
    ;
    this.buttonDown = function() {
        k[ON_MOUSE_DOWN] && !1 === b && k[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], n)
    }
    ;
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    }
    ;
    this.setX = function(a) {
        p.x = a
    }
    ;
    this.setY = function(a) {
        p.y = a
    }
    ;
    this.getButtonImage = function() {
        return p
    }
    ;
    this.getX = function() {
        return p.x
    }
    ;
    this.getY = function() {
        return p.y
    }
    ;
    this._init(a, c, e)
}
function CMenu() {
    var a, c, e, b, k, h, n, p = null, l = null, d, r, m, g, q;
    this._init = function() {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        var v = s_oSpriteLibrary.getSprite("but_play_bg");
        r = new CTextButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT - 80,v,TEXT_PLAY,FONT_GAME,"#ffde00",58,s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            v = s_oSpriteLibrary.getSprite("audio_icon"),
            k = CANVAS_WIDTH - v.width / 4 - 10,
            h = v.height / 2 + 10,
            g = new CToggle(k,h,v,s_bAudioActive,s_oStage),
            g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
            setVolume("soundtrack", 1);
        SHOW_CREDITS ? (v = s_oSpriteLibrary.getSprite("but_credits"),
        a = v.height / 2 + 10,
        c = v.height / 2 + 10,
        m = new CGfxButton(a,c,v,s_oStage),
        m.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this),
        e = a + v.width + 10,
        b = c) : (e = v.height / 2 + 10,
        b = v.height / 2 + 10);
        v = window.document;
        var u = v.documentElement;
        p = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        l = v.exitFullscreen || v.mozCancelFullScreen || v.webkitExitFullscreen || v.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (p = !1);
        p && screenfull.isEnabled && (v = s_oSpriteLibrary.getSprite("but_fullscreen"),
        n = new CToggle(e,b,v,s_bFullscreen,s_oStage),
        n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 600).call(function() {
            q.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.refreshButtonPos = function(d, r) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(k - d, r + h);
        p && screenfull.isEnabled && n.setPosition(e + d, b + r);
        SHOW_CREDITS && m.setPosition(a + d, c + r)
    }
    ;
    this.unload = function() {
        r.unload();
        r = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            g.unload(),
            g = null;
        SHOW_CREDITS && m.unload();
        p && screenfull.isEnabled && n.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    }
    ;
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
        $(s_oMain).trigger("start_session")
    }
    ;
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ;
    this._onButCreditsRelease = function() {
        new CCreditsPanel
    }
    ;
    this.resetFullscreenBut = function() {
        p && screenfull.isEnabled && n.setActive(s_bFullscreen)
    }
    ;
    this._onFullscreenRelease = function() {
        s_bFullscreen ? l.call(window.document) : p.call(window.document.documentElement);
        sizeHandler()
    }
    ;
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function CGame(a) {
    var c = !1, e, b, k = !0, h, n, p, l, d, r, m, g, q, v, u, A = 0, z, F, D, J, G, L, E, N, K, S, Q, x, T, y, M = null, P, H;
    this._init = function() {
        h = GAME_STATE_IDLE;
        e = !0;
        F = u = l = n = 0;
        L = [0, 1, 2, 3, 4];
        p = L[0];
        d = NUM_PAYLINES;
        v = TOTAL_MONEY;
        g = MIN_BET;
        q = g * d;
        E = [];
        for (var a = 0; a < NUM_ROWS; a++) {
            E[a] = [];
            for (var b = 0; b < NUM_REELS; b++)
                E[a][b] = 0
        }
        s_oTweenController = new CTweenController;
        x = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(x);
        this._initReels();
        T = createBitmap(s_oSpriteLibrary.getSprite("mask_slot"));
        s_oStage.addChild(T);
        this._initStaticSymbols();
        this._initHitAreaColumn();
        y = new CInterface(g,q,v);
        P = new CBonusPanel;
        M = new CPayTablePanel;
        H = new CRechargePanel;
        v < q && H.show();
        v < q && y.disableSpin();
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        c = !0
    }
    ;
    this.unload = function() {
        stopSound("reels");
        s_oStage.removeChild(x);
        s_oStage.removeChild(T);
        y.unload();
        M.unload();
        H.unload();
        for (var a = 0; a < D.length; a++)
            D[a].unload();
        for (a = 0; a < NUM_ROWS; a++)
            for (var b = 0; b < NUM_REELS; b++)
                J[a][b].unload();
        P.unload()
    }
    ;
    this._initReels = function() {
        var a = REEL_OFFSET_X
          , b = REEL_OFFSET_Y
          , d = 0;
        D = [];
        for (var c = 0; c < NUM_REELS; c++)
            D[c] = new CReelColumn(c,a,b,d),
            D[c + NUM_REELS] = new CReelColumn(c + NUM_REELS,a,b + SYMBOL_SIZE * NUM_ROWS,d),
            a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS,
            d += REEL_DELAY
    }
    ;
    this._initStaticSymbols = function() {
        var a = REEL_OFFSET_X
          , b = REEL_OFFSET_Y;
        J = [];
        for (var d = 0; d < NUM_ROWS; d++) {
            J[d] = [];
            for (var c = 0; c < NUM_REELS; c++) {
                var e = new CStaticSymbolCell(d,c,a,b);
                J[d][c] = e;
                a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS
            }
            a = REEL_OFFSET_X;
            b += SYMBOL_SIZE
        }
    }
    ;
    this._initHitAreaColumn = function() {
        Q = [];
        S = [];
        d = 376;
        c = 116;
        for (var a = 0; a < NUM_REELS; a++) {
            var b = createBitmap(s_oSpriteLibrary.getSprite("hold_col"));
            b.x = d;
            b.y = c;
            b.visible = !1;
            s_oStage.addChild(b);
            d += 150;
            S.push(b);
            Q[a] = !1
        }
        N = [];
        K = [];
        var d = 381
          , c = 108;
        a = s_oSpriteLibrary.getSprite("hit_area_col");
        for (b = 0; b < NUM_REELS; b++) {
            var e = new CTLText(s_oStage,d,c + a.height - 20,a.width,30,30,"center","#fff",FONT_GAME,1,0,0,TEXT_HOLD,!0,!0,!1,!1);
            e.setShadow("#000", 1, 1, 2);
            N[b] = e;
            e = new CGfxButton(d + a.width / 2,c + a.height / 2,a);
            e.setVisible(!1);
            e.addEventListenerWithParams(ON_MOUSE_UP, this._onHitAreaCol, this, {
                index: b
            });
            d += 150;
            K.push(e)
        }
        this.disableColumnHitArea()
    }
    ;
    this.generateFinalSymbols = function() {
        for (var a = 0; a < NUM_ROWS; a++)
            for (var b = 0; b < NUM_REELS; b++)
                !1 === D[b].isHold() && (E[a][b] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]);
        a = this._checkForCombos();
        this._checkForBonus();
        return a
    }
    ;
    this._checkForCombos = function() {
        G = [];
        for (var a = z = 0; a < d; a++) {
            var b = s_aPaylineCombo[a]
              , c = []
              , e = E[b[0].row][b[0].col];
            if (e !== BONUS_SYMBOL) {
                var h = 1
                  , k = 1;
                for (c.push({
                    row: b[0].row,
                    col: b[0].col,
                    value: E[b[0].row][b[0].col]
                }); e === WILD_SYMBOL && k < NUM_REELS; )
                    h++,
                    e = E[b[k].row][b[k].col],
                    c.push({
                        row: b[k].row,
                        col: b[k].col,
                        value: E[b[k].row][b[k].col]
                    }),
                    k++;
                for (; k < b.length; k++)
                    if (E[b[k].row][b[k].col] === e || E[b[k].row][b[k].col] === WILD_SYMBOL) {
                        if (E[b[k].row][b[k].col] === BONUS_SYMBOL)
                            break;
                        h++;
                        c.push({
                            row: b[k].row,
                            col: b[k].col,
                            value: E[b[k].row][b[k].col]
                        })
                    } else
                        break;
                e !== BONUS_SYMBOL && 0 < s_aSymbolWin[e - 1][h - 1] && (z += s_aSymbolWin[e - 1][h - 1],
                G.push({
                    line: a + 1,
                    amount: s_aSymbolWin[e - 1][h - 1],
                    num_win: h,
                    value: e,
                    list: c
                }))
            }
        }
        return z * g > q ? !0 : !1
    }
    ;
    this._checkForBonus = function() {
        b = !1;
        A = 0;
        for (var a = [], d = 0; d < NUM_ROWS; d++)
            for (var c = 0; c < NUM_REELS; c++)
                E[d][c] === BONUS_SYMBOL && (a.push({
                    row: d,
                    col: c,
                    value: E[d][c]
                }),
                A++);
        A >= NUM_SYMBOLS_FOR_BONUS && (G.push({
            line: -1,
            amount: 0,
            num_win: A,
            value: BONUS_SYMBOL,
            list: a
        }),
        5 < A && (A = 5),
        b = !0)
    }
    ;
    this._generateRandSymbols = function() {
        for (var a = [], b = 0; b < NUM_ROWS; b++)
            a[b] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)];
        return a
    }
    ;
    this.reelArrived = function(a, b) {
        if (n > MIN_REEL_LOOPS)
            if (p === b) {
                if (!1 === D[a].isReadyToStop()) {
                    var f = a;
                    a < NUM_REELS ? (f += NUM_REELS,
                    D[f].setReadyToStop(),
                    D[a].restart([E[0][a], E[1][a], E[2][a]], !0)) : (f -= NUM_REELS,
                    D[f].setReadyToStop(),
                    D[a].restart([E[0][f], E[1][f], E[2][f]], !0))
                }
            } else
                D[a].restart(this._generateRandSymbols(), !1);
        else
            D[a].restart(this._generateRandSymbols(), !1),
            0 === a && n++
    }
    ;
    this.increaseReelLoops = function() {
        n += 2
    }
    ;
    this.stopNextReel = function() {
        l++;
        0 === l % 2 && (playSound("reel_stop", .3, !1),
        p = L[l / 2],
        l === 2 * NUM_REELS && this._endReelAnimation())
    }
    ;
    this._endReelAnimation = function() {
        stopSound("reels");
        l = n = 0;
        p = L[0];
        for (var a = 0; a < NUM_REELS; a++)
            Q[a] = !1,
            S[a].visible = !1,
            D[a].setHold(!1),
            D[a + NUM_REELS].setHold(!1);
        u = 0;
        if (0 < G.length) {
            for (var d = 0; d < G.length; d++) {
                M.highlightCombo(G[d].value, G[d].num_win);
                -1 !== G[d].line && y.showLine(G[d].line);
                var c = G[d].list;
                for (a = 0; a < c.length; a++)
                    J[c[a].row][c[a].col].show(c[a].value)
            }
            z *= g;
            z = parseFloat(z.toFixed(2));
            v += z;
            SLOT_CASH -= z;
            0 < z && (y.refreshMoney(v),
            y.refreshWinText(z));
            r = 0;
            h = GAME_STATE_SHOW_ALL_WIN;
            playSound("win", 1, !1);
            e = !0;
            !1 === b && (y.disableBetBut(!1),
            y.enableGuiButtons())
        } else
            e ? (this.enableColumnHitArea(),
            e = !1,
            y.enableSpin(),
            y.disableMaxBet()) : (y.disableBetBut(!1),
            y.enableGuiButtons(),
            e = !0),
            y.refreshWinText(0),
            h = GAME_STATE_IDLE;
        F++;
        F === R && (F = 0,
        $(s_oMain).trigger("show_interlevel_ad"));
        $(s_oMain).trigger("save_score", v)
    }
    ;
    this.hidePayTable = function() {
        M.hide()
    }
    ;
    this._showWin = function() {
        if (0 < m) {
            stopSound("win");
            if (-1 !== G[m - 1].line) {
                var a = G[m - 1].line;
                y.hideLine(a)
            }
            a = G[m - 1].list;
            for (var b = 0; b < a.length; b++)
                J[a[b].row][a[b].col].stopAnim()
        }
        m === G.length && (m = 0);
        -1 !== G[m].line && (a = G[m].line,
        y.showLine(a));
        a = G[m].list;
        for (b = 0; b < a.length; b++)
            J[a[b].row][a[b].col].show(a[b].value);
        m++
    }
    ;
    this._hideAllWins = function() {
        for (var a = 0; a < G.length; a++)
            for (var d = G[a].list, c = 0; c < d.length; c++)
                J[d[c].row][d[c].col].stopAnim();
        y.hideAllLines();
        m = r = 0;
        r = TIME_SHOW_WIN;
        h = GAME_STATE_SHOW_WIN;
        b && P.show(A, g)
    }
    ;
    this.enableColumnHitArea = function() {
        for (var a = 0; a < NUM_REELS; a++)
            N[a].setVisible(!0),
            K[a].setVisible(!0)
    }
    ;
    this.disableColumnHitArea = function() {
        for (var a = 0; a < NUM_REELS; a++)
            N[a].setVisible(!1),
            K[a].setVisible(!1)
    }
    ;
    this.activateLines = function(a) {
        d = a;
        this.removeWinShowing();
        a = g * d;
        q = a = Math.floor(100 * a) / 100;
        y.refreshTotalBet(q);
        y.refreshNumLines(d);
        a > v ? y.disableSpin() : y.enableSpin()
    }
    ;
    this.addLine = function() {
        d === NUM_PAYLINES ? d = 1 : d++;
        var a = g * d;
        q = a;
        q = Math.floor(100 * q) / 100;
        y.refreshTotalBet(q);
        y.refreshNumLines(d);
        a > v ? y.disableSpin() : y.enableSpin()
    }
    ;
    this.changeCoinBet = function() {
        var a = Math.floor(100 * (g + .05)) / 100;
        a > MAX_BET ? (g = MIN_BET,
        q = g * d,
        q = Math.floor(100 * q) / 100,
        y.refreshBet(g),
        y.refreshTotalBet(q),
        a = q) : (a *= d,
        g += .05,
        g = Math.floor(100 * g) / 100,
        q = a,
        q = Math.floor(100 * q) / 100,
        y.refreshBet(g),
        y.refreshTotalBet(q));
        a > v ? y.disableSpin() : y.enableSpin()
    }
    ;
    this.onMaxBet = function() {
        var a = MAX_BET;
        d = NUM_PAYLINES;
        a *= d;
        a = Math.floor(100 * a) / 100;
        g = MAX_BET;
        q = a;
        y.refreshBet(g);
        y.refreshTotalBet(q);
        y.refreshNumLines(d);
        a > v ? (y.disableSpin(),
        H.show()) : (y.enableSpin(),
        this.onSpin())
    }
    ;
    this._onHitAreaCol = function(a) {
        a = a.index;
        !0 === Q[a] ? (Q[a] = !1,
        S[a].visible = !1,
        N[a].setVisible(!0),
        u--,
        D[a].setHold(!1),
        D[a + NUM_REELS].setHold(!1)) : u < MAX_NUM_HOLD && (Q[a] = !0,
        u++,
        S[a].visible = !0,
        N[a].setVisible(!1),
        D[a].setHold(!0),
        D[a + NUM_REELS].setHold(!0),
        playSound("press_hold", 1, !1))
    }
    ;
    this.removeWinShowing = function() {
        M.resetHighlightCombo();
        y.resetWin();
        for (var a = 0; a < NUM_ROWS; a++)
            for (var b = 0; b < NUM_REELS; b++)
                J[a][b].hide();
        for (a = 0; a < D.length; a++)
            D[a].activate();
        h = GAME_STATE_IDLE
    }
    ;
    this.endBonus = function(a) {
        a *= g;
        a = parseFloat(a.toFixed(2));
        v += a;
        y.refreshMoney(v);
        SLOT_CASH -= a;
        y.disableBetBut(!1);
        y.enableGuiButtons();
        $(s_oMain).trigger("bonus_end", v);
        $(s_oMain).trigger("save_score", v)
    }
    ;
    this.onSpin = function() {
        if (e && v < q)
            H.show();
        else {
            stopSound("win");
            playSound("reels", .3, !1);
            this.disableColumnHitArea();
            y.disableBetBut(!0);
            this.removeWinShowing();
            MIN_WIN = s_aSymbolWin[0][s_aSymbolWin[0].length - 1];
            for (var a = 0; a < s_aSymbolWin.length; a++)
                for (var d = s_aSymbolWin[a], c = 0; c < d.length; c++)
                    0 !== d[c] && d[c] < MIN_WIN && (MIN_WIN = d[c]);
            MIN_WIN *= g;
            e && (v -= q,
            y.refreshMoney(v),
            SLOT_CASH += q,
            SLOT_CASH = parseFloat(SLOT_CASH.toFixed(2)),
            $(s_oMain).trigger("bet_placed", {
                bet: g,
                tot_bet: q
            }));
            if (!k && D[0].visible && D[1].visible && this._checkForCombos())
                this._assignWin();
            else if (SLOT_CASH < MIN_WIN) {
                do
                    a = this.generateFinalSymbols();
                while (!0 === a || b)
            } else if (Math.floor(100 * Math.random()) > WIN_OCCURRENCE) {
                do
                    a = this.generateFinalSymbols();
                while (!0 === a || b)
            } else
                this._assignWin();
            y.hideAllLines();
            y.disableGuiButtons();
            k = !1;
            h = GAME_STATE_SPINNING
        }
    }
    ;
    this._assignWin = function() {
        if (SLOT_CASH < BONUS_PRIZE[0][0] * g) {
            var a = 0;
            do {
                var d = this.generateFinalSymbols();
                a++
            } while ((!1 === d || z * g > SLOT_CASH || b) && 1E4 >= a)
        } else if (Math.floor(100 * Math.random()) >= BONUS_OCCURRENCE) {
            a = 0;
            do
                d = this.generateFinalSymbols(),
                a++;
            while ((!1 === d || z * g > SLOT_CASH || b) && 1E4 >= a)
        } else {
            a = 0;
            do {
                d = this.generateFinalSymbols();
                var c = 0;
                b && (c = A - 3);
                a++
            } while ((!1 === d || z * g + BONUS_PRIZE[c][0] * g > SLOT_CASH || !1 === b) && 1E4 >= a)
        }
        if (1E4 < a) {
            do
                d = this.generateFinalSymbols();
            while (!0 === d || b)
        }
    }
    ;
    this.setMoney = function(a) {
        v = a;
        y.refreshMoney(v);
        y.enableGuiButtons()
    }
    ;
    this.onInfoClicked = function() {
        h !== GAME_STATE_SPINNING && (M.isVisible() ? M.hide() : M.show())
    }
    ;
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", {
            img: "200x200.jpg",
            title: TEXT_CONGRATULATIONS,
            msg: TEXT_MSG_SHARE1 + v + TEXT_MSG_SHARE2,
            msg_share: TEXT_MSG_SHARING1 + v + TEXT_MSG_SHARING2
        })
    }
    ;
    this.getState = function() {
        return h
    }
    ;
    this.update = function() {
        if (!1 !== c)
            switch (h) {
            case GAME_STATE_SPINNING:
                for (var a = 0; a < D.length; a++)
                    D[a].update(p);
                break;
            case GAME_STATE_SHOW_ALL_WIN:
                r += s_iTimeElaps;
                r > TIME_SHOW_ALL_WINS && this._hideAllWins();
                break;
            case GAME_STATE_SHOW_WIN:
                r += s_iTimeElaps,
                r > TIME_SHOW_WIN && (r = 0,
                this._showWin())
            }
    }
    ;
    s_oGame = this;
    WIN_OCCURRENCE = a.win_occurrence;
    SLOT_CASH = a.slot_cash;
    BONUS_OCCURRENCE = a.bonus_occurrence;
    MIN_REEL_LOOPS = a.min_reel_loop;
    REEL_DELAY = a.reel_delay;
    TIME_SHOW_WIN = a.time_show_win;
    TIME_SHOW_ALL_WINS = a.time_show_all_wins;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    MAX_NUM_HOLD = a.max_hold;
    BONUS_PRIZE[0] = a.bonus_prize_for_3_symbol;
    BONUS_PRIZE[1] = a.bonus_prize_for_4_symbol;
    BONUS_PRIZE[2] = a.bonus_prize_for_5_symbol;
    PERC_WIN_PRIZE_1 = a.perc_win_prize_1;
    PERC_WIN_PRIZE_2 = a.perc_win_prize_2;
    PERC_WIN_PRIZE_3 = a.perc_win_prize_3;
    var R = a.num_spin_ads_showing;
    new CSlotSettings;
    this._init()
}
var s_oGame, s_oTweenController;
function CReelColumn(a, c, e, b) {
    var k, h, n, p, l, d, r, m, g, q, v, u, A, z, F;
    this._init = function(a, b, c, e) {
        p = n = h = k = !1;
        m = 0;
        l = a;
        r = e;
        d = l < NUM_REELS ? l : l - NUM_REELS;
        q = 0;
        v = MAX_FRAMES_REEL_EASE;
        g = REEL_STATE_START;
        u = c;
        A = u + SYMBOL_SIZE * NUM_ROWS;
        this.initContainer(b, c)
    }
    ;
    this.initContainer = function(a, b) {
        F = new createjs.Container;
        F.x = a;
        F.y = b;
        var d = 0;
        z = [];
        for (var c = 0; c < NUM_ROWS; c++) {
            var e = createSprite(s_aSymbolData[s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
            e.stop();
            e.x = 0;
            e.y = d;
            F.addChild(e);
            z[c] = e;
            d += SYMBOL_SIZE
        }
        s_oStage.addChild(F)
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(F)
    }
    ;
    this.activate = function() {
        u = F.y;
        A = u + SYMBOL_SIZE * NUM_ROWS;
        k = !0
    }
    ;
    this._setSymbol = function(a) {
        F.removeAllChildren();
        for (var b = 0, d = 0; d < a.length; d++) {
            var c = new createSprite(s_aSymbolData[a[d]],"static",0,0,SYMBOL_SIZE,SYMBOL_SIZE);
            c.stop();
            c.x = 0;
            c.y = b;
            F.addChild(c);
            z[d] = c;
            b += SYMBOL_SIZE
        }
    }
    ;
    this.setHold = function(a) {
        k = !1;
        p = a;
        m = 0
    }
    ;
    this.restart = function(a, b) {
        F.y = u = REEL_START_Y;
        A = u + SYMBOL_SIZE * NUM_ROWS;
        this._setSymbol(a);
        if (h = b) {
            q = 0;
            v = MAX_FRAMES_REEL_EASE;
            g = REEL_STATE_STOP;
            for (var d = 0; d < NUM_ROWS; d++)
                z[d].gotoAndStop("static");
            n = !0
        } else
            for (d = 0; d < NUM_ROWS; d++)
                z[d].gotoAndStop("moving")
    }
    ;
    this.setReadyToStop = function() {
        q = 0;
        v = MAX_FRAMES_REEL_EASE;
        g = REEL_STATE_STOP
    }
    ;
    this.isReadyToStop = function() {
        return h
    }
    ;
    this.isHold = function() {
        return p
    }
    ;
    this._updateStart = function() {
        0 === q && l < NUM_REELS && playSound("start_reel", .3, !1);
        q++;
        q > v && (q = 0,
        v /= 2,
        g++,
        u = F.y,
        A = u + SYMBOL_SIZE * NUM_ROWS);
        var a = s_oTweenController.easeInBack(q, 0, 1, v);
        a = s_oTweenController.tweenValue(u, A, a);
        F.y = a
    }
    ;
    this._updateMoving = function() {
        q++;
        q > v && (q = 0,
        u = F.y,
        A = u + SYMBOL_SIZE * NUM_ROWS);
        var a = s_oTweenController.easeLinear(q, 0, 1, v);
        a = s_oTweenController.tweenValue(u, A, a);
        F.y = a
    }
    ;
    this._updateStopping = function() {
        q++;
        if (q >= v)
            k = !1,
            q = 0,
            v = MAX_FRAMES_REEL_EASE,
            g = REEL_STATE_START,
            m = 0,
            h = !1,
            n && (n = !1,
            F.y = REEL_OFFSET_Y),
            s_oGame.stopNextReel();
        else {
            var a = s_oTweenController.easeOutCubic(q, 0, 1, v);
            a = s_oTweenController.tweenValue(u, A, a);
            F.y = a
        }
    }
    ;
    this.update = function(a) {
        if (!1 !== k && (m++,
        m > r))
            if (p)
                a === l && (k = !1,
                s_oGame.stopNextReel(),
                s_oGame.stopNextReel(),
                0 === l && s_oGame.increaseReelLoops());
            else
                switch (!1 === h && F.y > REEL_ARRIVAL_Y && s_oGame.reelArrived(l, d),
                g) {
                case REEL_STATE_START:
                    this._updateStart();
                    break;
                case REEL_STATE_MOVING:
                    this._updateMoving();
                    break;
                case REEL_STATE_STOP:
                    this._updateStopping()
                }
    }
    ;
    this._init(a, c, e, b)
}
function CInterface(a, c, e) {
    var b, k, h, n, p, l, d, r, m, g, q, v, u, A, z, F, D, J, G, L, E = null, N = null;
    this._init = function(a, c, e) {
        var x = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - x.width / 2 - 10;
        n = x.height / 2 + 10;
        m = new CGfxButton(h,n,x,!0);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (p = m.getX() - x.width,
        l = x.height / 2 + 10,
        u = new CToggle(p,l,s_oSpriteLibrary.getSprite("audio_icon"),s_bAudioActive,s_oStage),
        u.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        b = p - x.width) : b = h - x.width;
        k = x.height / 2 + 10;
        x = window.document;
        var K = x.documentElement;
        E = K.requestFullscreen || K.mozRequestFullScreen || K.webkitRequestFullScreen || K.msRequestFullscreen;
        N = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (E = !1);
        E && screenfull.isEnabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"),
        L = new CToggle(b,k,x,s_bFullscreen,s_oStage),
        L.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        x = s_oSpriteLibrary.getSprite("spin_but");
        g = new CTextButton(1094 + x.width / 2,CANVAS_HEIGHT - x.height / 2 - 4,x,TEXT_WIN + "\n0.00",FONT_GAME,"#ffde00",26,s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onSpin, this);
        x = s_oSpriteLibrary.getSprite("info_but");
        q = new CTextButton(320 + x.width / 2,CANVAS_HEIGHT - x.height / 2 - 4,x,TEXT_INFO,FONT_GAME,"#ffffff",32,s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onInfo, this);
        x = s_oSpriteLibrary.getSprite("but_lines_bg");
        v = new CTextButton(490 + x.width / 2,CANVAS_HEIGHT - x.height / 2 - 4,x,TEXT_LINES,FONT_GAME,"#ffffff",32,s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onAddLine, this);
        x = s_oSpriteLibrary.getSprite("coin_but");
        A = new CTextButton(678 + x.width / 2,CANVAS_HEIGHT - x.height / 2 - 4,x,TEXT_COIN,FONT_GAME,"#ffffff",32,s_oStage);
        A.addEventListener(ON_MOUSE_UP, this._onBet, this);
        x = s_oSpriteLibrary.getSprite("but_maxbet_bg");
        z = new CTextButton(866 + x.width / 2,CANVAS_HEIGHT - x.height / 2 - 4,x,TEXT_MAX_BET,FONT_GAME,"#ffffff",32,s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onMaxBet, this);
        D = new CTLText(s_oStage,354,15,200,68,34,"center","#ffde00",FONT_GAME,1,0,0,TEXT_MONEY + "\n" + e.toFixed(2) + TEXT_CURRENCY,!0,!0,!0,!1);
        G = new CTLText(s_oStage,490,CANVAS_HEIGHT - 98,184,24,24,"center","#ffde00",FONT_GAME,1,0,0,NUM_PAYLINES,!0,!0,!1,!1);
        F = new CTLText(s_oStage,684,CANVAS_HEIGHT - 98,184,24,24,"center","#ffde00",FONT_GAME,1,0,0,a.toFixed(2),!0,!0,!1,!1);
        J = new CTLText(s_oStage,890,CANVAS_HEIGHT - 98,184,24,24,"center","#ffde00",FONT_GAME,1,0,0,TEXT_BET + ": " + c.toFixed(2),!0,!0,!1,!1);
        x = s_oSpriteLibrary.getSprite("bet_but");
        d = [];
        a = new CBetBut(334 + x.width / 2,282 + x.height / 2,x,!0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 1);
        d[0] = a;
        a = new CBetBut(334 + x.width / 2,180 + x.height / 2,x,!0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 2);
        d[1] = a;
        a = new CBetBut(334 + x.width / 2,432 + x.height / 2,x,!0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 3);
        d[2] = a;
        a = new CBetBut(334 + x.width / 2,114 + x.height / 2,x,!0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 4);
        d[3] = a;
        a = new CBetBut(334 + x.width / 2,502 + x.height / 2,x,!0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 5);
        d[4] = a;
        r = [];
        for (a = 0; a < NUM_PAYLINES; a++)
            c = new createjs.Bitmap(s_oSpriteLibrary.getSprite("payline_" + (a + 1))),
            c.visible = !1,
            s_oStage.addChild(c),
            r[a] = c;
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.unload = function() {
        m.unload();
        m = null;
        g.unload();
        g = null;
        q.unload();
        q = null;
        v.unload();
        v = null;
        A.unload();
        A = null;
        z.unload();
        z = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            u.unload(),
            u = null;
        E && screenfull.isEnabled && L.unload();
        for (var a = 0; a < NUM_PAYLINES; a++)
            d[a].unload();
        s_oStage.removeAllChildren();
        s_oInterface = null
    }
    ;
    this.refreshButtonPos = function(a, d) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || u.setPosition(p - a, d + l);
        E && screenfull.isEnabled && L.setPosition(b - a, k + d);
        m.setPosition(h - a, d + n)
    }
    ;
    this.refreshMoney = function(a) {
        D.refreshText(TEXT_MONEY + "\n" + a.toFixed(2) + TEXT_CURRENCY)
    }
    ;
    this.refreshBet = function(a) {
        F.refreshText(a.toFixed(2))
    }
    ;
    this.refreshTotalBet = function(a) {
        J.refreshText(TEXT_BET + ": " + a.toFixed(2))
    }
    ;
    this.refreshNumLines = function(a) {
        G.refreshText(a);
        for (var b = 0; b < NUM_PAYLINES; b++)
            b < a ? (d[b].setOn(),
            r[b].visible = !0) : d[b].setOff();
        setTimeout(function() {
            for (var a = 0; a < NUM_PAYLINES; a++)
                r[a].visible = !1
        }, 1E3)
    }
    ;
    this.resetWin = function() {
        g.changeText("")
    }
    ;
    this.refreshWinText = function(a) {
        g.changeText(TEXT_WIN + "\n" + a.toFixed(2))
    }
    ;
    this.showLine = function(a) {
        r[a - 1].visible = !0
    }
    ;
    this.hideLine = function(a) {
        r[a - 1].visible = !1
    }
    ;
    this.hideAllLines = function() {
        for (var a = 0; a < NUM_PAYLINES; a++)
            r[a].visible = !1
    }
    ;
    this.disableBetBut = function(a) {
        for (var b = 0; b < NUM_PAYLINES; b++)
            d[b].disable(a)
    }
    ;
    this.enableGuiButtons = function() {
        g.enable();
        z.enable();
        A.enable();
        v.enable();
        q.enable()
    }
    ;
    this.enableSpin = function() {
        g.enable();
        z.enable()
    }
    ;
    this.disableSpin = function() {
        g.disable();
        z.disable()
    }
    ;
    this.enableMaxBet = function() {
        z.enable()
    }
    ;
    this.disableMaxBet = function() {
        z.disable()
    }
    ;
    this.disableGuiButtons = function() {
        g.disable();
        z.disable();
        A.disable();
        v.disable();
        q.disable()
    }
    ;
    this._onBetLineClicked = function(a) {
        this.refreshNumLines(a);
        s_oGame.activateLines(a)
    }
    ;
    this._onExit = function() {
        s_oGame.onExit()
    }
    ;
    this._onSpin = function() {
        s_oGame.onSpin()
    }
    ;
    this._onAddLine = function() {
        s_oGame.addLine()
    }
    ;
    this._onInfo = function() {
        s_oGame.onInfoClicked()
    }
    ;
    this._onBet = function() {
        s_oGame.changeCoinBet()
    }
    ;
    this._onMaxBet = function() {
        s_oGame.onMaxBet()
    }
    ;
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ;
    this.resetFullscreenBut = function() {
        E && screenfull.isEnabled && L.setActive(s_bFullscreen)
    }
    ;
    this._onFullscreenRelease = function() {
        s_bFullscreen ? N.call(window.document) : E.call(window.document.documentElement);
        sizeHandler()
    }
    ;
    s_oInterface = this;
    this._init(a, c, e);
    return this
}
var s_oInterface = null;
function CPayTablePanel() {
    var a, c, e, b;
    this._init = function() {
        b = new createjs.Container;
        e = createBitmap(s_oSpriteLibrary.getSprite("paytable"));
        b.addChild(e);
        this._createPayouts();
        new CTLText(b,546,280,190,110,21,"center","#ffff00",FONT_GAME,1,0,0,TEXT_HELP_WILD,!0,!0,!0,!1);
        new CTLText(b,880,280,190,110,21,"center","#ffff00",FONT_GAME,1,0,0,TEXT_HELP_BONUS,!0,!0,!0,!1);
        b.visible = !1;
        s_oStage.addChild(b);
        var a = this;
        b.on("pressup", function() {
            a._onExit()
        })
    }
    ;
    this.unload = function() {
        var a = this;
        b.off("pressup", function() {
            a._onExit()
        });
        s_oStage.removeChild(b)
    }
    ;
    this._createPayouts = function() {
        a = [];
        c = [];
        for (var e = [{
            x: 440,
            y: 90
        }, {
            x: 642,
            y: 90
        }, {
            x: 840,
            y: 90
        }, {
            x: 1035,
            y: 90
        }, {
            x: 440,
            y: 180
        }, {
            x: 642,
            y: 180
        }, {
            x: 840,
            y: 180
        }, {
            x: 1035,
            y: 180
        }], h = 0, n = 0; n < s_aSymbolWin.length; n++) {
            for (var p = [], l = 0; l < s_aSymbolWin[n].length; l++)
                p[l] = s_aSymbolWin[n][l];
            do
                l = p.indexOf(0),
                -1 !== l && p.splice(l, 1);
            while (-1 !== l);
            l = p.length;
            if (0 !== l) {
                var d = 25;
                4 === l && (d = 20);
                var r = e[h].y;
                a[n] = [];
                c[n] = [];
                for (var m = 0; m < l; m++) {
                    var g = new CTLText(b,e[h].x,r,50,d,d,"center","#ffffff",FONT_GAME,1,0,0,"X" + (5 - m),!0,!0,!1,!1);
                    a[n][m] = g;
                    g = new CTLText(b,e[h].x + 50,r,50,d,d,"center","#ffff00",FONT_GAME,1,0,0,p[l - m - 1],!0,!0,!1,!1);
                    c[n][m] = g;
                    r += d
                }
                h++
            }
        }
    }
    ;
    this.show = function() {
        b.visible = !0
    }
    ;
    this.hide = function() {
        b.visible = !1
    }
    ;
    this.resetHighlightCombo = function() {
        for (var b = 0; b < a.length; b++)
            for (var e = 0; e < a[b].length; e++)
                a[b][e].setColor("#ffffff"),
                c[b][e].setColor("#ffff00"),
                createjs.Tween.removeTweens(c[b][e].getText()),
                c[b][e].setAlpha(1)
    }
    ;
    this.highlightCombo = function(a, b) {
        a !== BONUS_SYMBOL && (c[a - 1][NUM_REELS - b].setColor("#ff0000"),
        this.tweenAlpha(c[a - 1][NUM_REELS - b].getText(), 0))
    }
    ;
    this.tweenAlpha = function(a, b) {
        var c = this;
        createjs.Tween.get(a).to({
            alpha: b
        }, 200).call(function() {
            1 === b ? c.tweenAlpha(a, 0) : c.tweenAlpha(a, 1)
        })
    }
    ;
    this._onExit = function() {
        s_oGame.hidePayTable()
    }
    ;
    this.isVisible = function() {
        return b.visible
    }
    ;
    this._init()
}
function CStaticSymbolCell(a, c, e, b) {
    var k = -1, h, n, p, l;
    this._init = function(a, b, c, e) {
        l = new createjs.Container;
        l.visible = !1;
        n = [];
        for (a = 0; a < NUM_SYMBOLS; a++)
            b = createSprite(s_aSymbolAnims[a], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE),
            b.stop(),
            b.x = c,
            b.y = e,
            b.on("animationend", this._onAnimEnded, null, !1, {
                index: a
            }),
            l.addChild(b),
            n[a] = b,
            n[a].visible = !1;
        a = {
            framerate: 60,
            images: [s_oSpriteLibrary.getSprite("win_frame_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 19]
            }
        };
        a = new createjs.SpriteSheet(a);
        p = new createSprite(a,"static",0,0,SYMBOL_SIZE,SYMBOL_SIZE);
        p.stop();
        p.x = c;
        p.y = e;
        l.addChild(p);
        s_oStage.addChild(l)
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(l)
    }
    ;
    this.hide = function() {
        -1 < k && (p.gotoAndStop("static"),
        p.visible = !1,
        n[k].gotoAndPlay("static"),
        l.visible = !1)
    }
    ;
    this.show = function(a) {
        p.gotoAndPlay("anim");
        p.visible = !0;
        for (var b = 0; b < NUM_SYMBOLS; b++)
            n[b].visible = b + 1 === a ? !0 : !1;
        n[a - 1].gotoAndPlay("anim");
        k = a - 1;
        h = n[a - 1].spriteSheet.getNumFrames();
        l.visible = !0
    }
    ;
    this._onAnimEnded = function(a, b) {
        n[b.index].currentFrame !== h && (n[b.index].stop(),
        setTimeout(function() {
            n[b.index].gotoAndPlay(1)
        }, 100))
    }
    ;
    this.stopAnim = function() {
        n[k].gotoAndStop("static");
        n[k].visible = !1;
        p.gotoAndStop("static");
        p.visible = !1
    }
    ;
    this._init(a, c, e, b)
}
function CTweenController() {
    this.tweenValue = function(a, c, e) {
        return a + e * (c - a)
    }
    ;
    this.easeLinear = function(a, c, e, b) {
        return e * a / b + c
    }
    ;
    this.easeInCubic = function(a, c, e, b) {
        b = (a /= b) * a * a;
        return c + e * b
    }
    ;
    this.easeBackInQuart = function(a, c, e, b) {
        b = (a /= b) * a;
        return c + e * (2 * b * b + 2 * b * a + -3 * b)
    }
    ;
    this.easeInBack = function(a, c, e, b) {
        return e * (a /= b) * a * (2.70158 * a - 1.70158) + c
    }
    ;
    this.easeOutCubic = function(a, c, e, b) {
        return e * ((a = a / b - 1) * a * a + 1) + c
    }
}
function CBonusPanel() {
    var a, c, e, b, k, h, n, p, l;
    this._init = function() {
        l = new createjs.Container;
        s_oStage.addChild(l);
        var a = createBitmap(s_oSpriteLibrary.getSprite("bonus_bg"));
        l.alpha = 0;
        l.visible = !1;
        l.addChild(a);
        a = {
            framerate: 6,
            images: [s_oSpriteLibrary.getSprite("bonus_item")],
            frames: {
                width: BONUS_ITEM_WIDTH,
                height: BONUS_ITEM_HEIGHT
            },
            animations: {
                idle: [0],
                item_clicked: [1, 14, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        b = [];
        for (var c = [{
            x: 253,
            y: 30
        }, {
            x: 577,
            y: 118
        }, {
            x: 946,
            y: 19
        }, {
            x: 262,
            y: 305
        }, {
            x: 927,
            y: 305
        }], e = 0; 5 > e; e++) {
            var g = createSprite(a, "idle", 0, 0, BONUS_ITEM_WIDTH, BONUS_ITEM_HEIGHT);
            g.on("click", this._onBonusItemReleased, this, !1, e);
            g.x = c[e].x;
            g.y = c[e].y;
            g.visible = !1;
            l.addChild(g);
            b[e] = g
        }
        a = s_oSpriteLibrary.getSprite("bonus_prize");
        h = [];
        n = [];
        h[0] = createBitmap(a);
        h[0].x = 300;
        h[0].y = CANVAS_HEIGHT - 90;
        l.addChild(h[0]);
        c = new createjs.Text("100","44px " + FONT_GAME,"#ffff00");
        c.textAlign = "left";
        c.x = h[0].x + a.width + 10;
        c.y = h[0].y + a.height / 2;
        c.textBaseline = "middle";
        l.addChild(c);
        n.push(c);
        h[1] = createBitmap(a);
        h[1].x = 600;
        h[1].y = CANVAS_HEIGHT - 90;
        l.addChild(h[1]);
        c = new createjs.Text("200","44px " + FONT_GAME,"#ffff00");
        c.textAlign = "left";
        c.x = h[1].x + a.width + 10;
        c.y = h[1].y + a.height / 2;
        c.textBaseline = "middle";
        l.addChild(c);
        n.push(c);
        h[2] = createBitmap(a);
        h[2].x = 900;
        h[2].y = CANVAS_HEIGHT - 90;
        l.addChild(h[2]);
        c = new createjs.Text("300","44px " + FONT_GAME,"#ffff00");
        c.textAlign = "left";
        c.x = h[2].x + a.width + 10;
        c.y = h[2].y + a.height / 2;
        c.textBaseline = "middle";
        l.addChild(c);
        n.push(c);
        p = [{
            x: 440,
            y: 129
        }, {
            x: 765,
            y: 219
        }, {
            x: 1134,
            y: 129
        }, {
            x: 450,
            y: 405
        }, {
            x: 1114,
            y: 405
        }]
    }
    ;
    this.unload = function() {
        for (var a = 0; 5 > a; a++)
            b[a].off("click", this._onBonusItemReleased)
    }
    ;
    this.show = function(c, h) {
        $(s_oMain).trigger("bonus_start");
        e = h;
        a = !1;
        switch (c) {
        case 3:
            k = BONUS_PRIZE[0];
            break;
        case 4:
            k = BONUS_PRIZE[1];
            break;
        case 5:
            k = BONUS_PRIZE[2];
            break;
        default:
            k = BONUS_PRIZE[0]
        }
        n[0].text = "X" + k[0];
        n[1].text = "X" + k[1];
        n[2].text = "X" + k[2];
        for (var d = 0; d < c; d++)
            b[d].visible = !0;
        l.visible = !0;
        createjs.Tween.get(l).to({
            alpha: 1
        }, 1E3)
    }
    ;
    this._onBonusItemReleased = function(d, h) {
        if (!a) {
            a = !0;
            do
                var l = Math.floor(Math.random() * s_aPrizeOccurence.length);
            while (k[s_aPrizeOccurence[l]] * e > SLOT_CASH);
            c = k[s_aPrizeOccurence[l]];
            b[h].gotoAndPlay("item_clicked");
            playSound("choose_bonus_item", 1, !1);
            this.endBonus(h)
        }
    }
    ;
    this.endBonus = function(a) {
        new CScoreText("X" + c,p[a].x,p[a].y);
        setTimeout(function() {
            l.alpha = 0;
            l.visible = !1;
            for (var a = 0; a < b.length; a++)
                b[a].visible = !1;
            s_oGame.endBonus(c)
        }, 4E3)
    }
    ;
    this._init()
}
function CScoreText(a, c, e) {
    var b;
    this._init = function(a, c, e) {
        b = new createjs.Text("00000","50px " + FONT_GAME,"#ff0000");
        b.textAlign = "center";
        b.text = a;
        b.x = c;
        b.y = e;
        b.alpha = 0;
        b.shadow = new createjs.Shadow("#000000",2,2,2);
        s_oStage.addChild(b);
        var h = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 400, createjs.Ease.quadIn).call(function() {
            h.moveUp()
        })
    }
    ;
    this.moveUp = function() {
        var a = b.y - 100
          , c = this;
        createjs.Tween.get(b).to({
            y: a
        }, 1E3, createjs.Ease.sineIn).call(function() {
            c.unload()
        })
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(b)
    }
    ;
    this._init(a, c, e)
}
function CCreditsPanel() {
    var a, c, e, b, k, h, n, p, l, d;
    this._init = function() {
        d = new createjs.Container;
        d.alpha = 0;
        s_oStage.addChild(d);
        var r = new createjs.Shape;
        r.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.addChild(r);
        c = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        d.addChild(c);
        n = new createjs.Shape;
        n.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = .01;
        n.on("click", this._onLogoButRelease);
        d.addChild(n);
        r = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 310;
        b = new CGfxButton(a,195,r,d);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        h = new createjs.Text(TEXT_CREDITS_DEVELOPED,"40px " + FONT_GAME,"#000");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2;
        h.y = 270;
        h.outline = 2;
        d.addChild(h);
        k = new createjs.Text(TEXT_CREDITS_DEVELOPED,"40px " + FONT_GAME,"#fff");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH / 2;
        k.y = 270;
        d.addChild(k);
        r = s_oSpriteLibrary.getSprite("logo_ctl");
        e = createBitmap(r);
        e.regX = r.width / 2;
        e.regY = r.height / 2;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        d.addChild(e);
        l = new createjs.Text("www.codethislab.com","34px " + FONT_GAME,"#000");
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = CANVAS_WIDTH / 2;
        l.y = 395;
        l.outline = 2;
        d.addChild(l);
        p = new createjs.Text("www.codethislab.com","34px " + FONT_GAME,"#fff");
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.x = CANVAS_WIDTH / 2;
        p.y = 395;
        d.addChild(p);
        createjs.Tween.get(d).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.refreshButtonPos = function(a, b) {}
    ;
    this.unload = function() {
        n.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(d)
    }
    ;
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    }
    ;
    this._init()
}
function CRechargePanel() {
    var a, c, e, b, k, h, n = this;
    this._init = function() {
        h = new createjs.Container;
        h.visible = !1;
        s_oStage.addChild(h);
        c = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        a = c.on("click", function() {});
        h.addChild(c);
        k = new CTLText(h,CANVAS_WIDTH / 2 - 300,170,600,150,40,"center","#000",FONT_GAME,1,0,0,TEXT_NO_MONEY,!0,!0,!0,!1);
        k.setOutline(3);
        new CTLText(h,CANVAS_WIDTH / 2 - 300,170,600,150,40,"center","#fff",FONT_GAME,1,0,0,TEXT_NO_MONEY,!0,!0,!0,!1);
        b = new CTextButton(CANVAS_WIDTH / 2 - 200,CANVAS_HEIGHT / 2 + 100,s_oSpriteLibrary.getSprite("info_but"),TEXT_EXIT,FONT_GAME,"#fff",40,h);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        e = new CTextButton(CANVAS_WIDTH / 2 + 200,CANVAS_HEIGHT / 2 + 100,s_oSpriteLibrary.getSprite("info_but"),TEXT_RECHARGE,FONT_GAME,"#fff",40,h);
        e.addEventListener(ON_MOUSE_UP, this._onRecharge, this)
    }
    ;
    this.unload = function() {
        c.off("click", a);
        b.unload();
        b = null;
        e.unload();
        s_oStage.removeChild(h)
    }
    ;
    this.show = function() {
        h.alpha = 0;
        h.visible = !0;
        createjs.Tween.get(h).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut)
    }
    ;
    this.hide = function() {
        h.visible = !1
    }
    ;
    this._onExit = function() {
        n.hide();
        s_oInterface.enableGuiButtons()
    }
    ;
    this._onRecharge = function() {
        $(s_oMain).trigger("recharge");
        n.hide()
    }
    ;
    this._init()
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var a = this._iFontSize; (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--,
            this._oText.font = a + "px " + this._szFont,
            this._oText.lineHeight = Math.round(a * this._fLineHeightFactor),
            this.__updateY(),
            this.__verticalAlign(),
            8 > a); )
                ;
            this._iFontSize = a
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -= (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
        case "middle":
            this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape,
        this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight),
        this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,this._iFontSize + "px " + this._szFont,this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
        case "center":
            this._oText.x = this._x + this._iWidth / 2;
            break;
        case "left":
            this._oText.x = this._x + this._iPaddingH;
            break;
        case "right":
            this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVisible: function(a) {
        this._oText.visible = a
    },
    setVerticalAlign: function(a) {
        this._bVerticalAlign = a
    },
    setOutline: function(a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function(a, c, e, b) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a,c,e,b))
    },
    setColor: function(a) {
        this._oText.color = a
    },
    setAlpha: function(a) {
        this._oText.alpha = a
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getX: function() {
        return this._x
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
function CTLText(a, c, e, b, k, h, n, p, l, d, r, m, g, q, v, u, A) {
    this._oContainer = a;
    this._x = c;
    this._y = e;
    this._iWidth = b;
    this._iHeight = k;
    this._bMultiline = u;
    this._iFontSize = h;
    this._szAlign = n;
    this._szColor = p;
    this._szFont = l;
    this._iPaddingH = r;
    this._iPaddingV = m;
    this._bVerticalAlign = v;
    this._bFitText = q;
    this._bDebug = A;
    this._oDebugShape = null;
    this._fLineHeightFactor = d;
    this._oText = null;
    g && this.__createText(g)
}
function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}
function extractRootDomain(a) {
    a = extractHostname(a);
    var c = a.split(".")
      , e = c.length;
    2 < e && (a = c[e - 2] + "." + c[e - 1]);
    return a
}
var getClosestTop = function() {
    var a = window
      , c = !1;
    try {
        for (; a.parent.document !== a.document; )
            if (a.parent.document)
                a = a.parent;
            else {
                c = !0;
                break
            }
    } catch (e) {
        c = !0
    }
    return {
        topFrame: a,
        err: c
    }
}
  , getBestPageUrl = function(a) {
    var c = a.topFrame
      , e = "";
    if (a.err)
        try {
            try {
                e = window.top.location.href
            } catch (k) {
                var b = window.location.ancestorOrigins;
                e = b[b.length - 1]
            }
        } catch (k) {
            e = c.document.referrer
        }
    else
        e = c.location.href;
    return e
}
  , TOPFRAMEOBJ = getClosestTop()
  , PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
    return !0
}
;
