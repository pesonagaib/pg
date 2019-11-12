function showOverflow() {
    document.getElementById("overflow").classList.toggle("show")
}

function wrap(e, t, n) {
    for (var r = document.querySelectorAll(t), i = 0; i < r.length; i++) {
        r[i].getAttribute("src") && (r[i].setAttribute("data-src", r[i].getAttribute("src")), r[i].removeAttribute("src")), r[i].setAttribute("class", "lazyload"), r[i].setAttribute("style", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: 0px;");
        var o = e + r[i].outerHTML + n;
        r[i].outerHTML = o
    }
}

function recentPosts(e) {
    if (document.getElementById("recent-posts")) {
        for (var t, n, r = e.feed.entry, i = "", o = document.getElementById("recent-posts"), a = 0; numPosts > a; a++) {
            for (var s = 0; numPosts > s; s++)
                if ("alternate" == r[a].link[s].rel) {
                    n = r[a].link[s].href;
                    break
                }
            var t = r[a].title.$t;
            i += '<li class="recent-posts"><a href="' + n + '" title="' + t + '" target="_blank">' + t + "</a></li>"
        }
        o.innerHTML = i
    }
}

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