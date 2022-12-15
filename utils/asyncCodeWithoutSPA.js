is_spa = 0;
//window._vis_opt_cookieDays=5;
window._vwo_code =
  window._vwo_code ||
  (function () {
    if (location.search.split("cookieDay=")[1]) {
      _vis_opt_cookieDays = parseFloat(location.search.split("cookieDay=")[1]);
    }
    var account_id = location.search.split("id=")[1]
        ? location.search.split("id=")[1]
        : "6000189",
      settings_tolerance = 5000,
      library_tolerance = 5000,
      use_existing_jquery = false,
      /* DO NOT EDIT BELOW THIS LINE */
      f = false,
      d = document;
    console.log("account id:- ", account_id);
    return {
      use_existing_jquery: function () {
        return use_existing_jquery;
      },
      library_tolerance: function () {
        return library_tolerance;
      },
      finish: function () {
        console.log("hello");
        if (!f) {
          f = true;
          var a = d.getElementById("_vis_opt_path_hides");
          if (a) a.parentNode.removeChild(a);
        }
      },
      finished: function () {
        return f;
      },
      load: function (a) {
        var b = d.createElement("script");
        b.src = a;
        b.type = "text/javascript";
        b.innerText;
        b.onerror = function () {
          _vwo_code.finish();
        };
        d.getElementsByTagName("head")[0].appendChild(b);
      },
      init: function () {
        settings_timer = setTimeout("_vwo_code.finish()", settings_tolerance);
        var a = d.createElement("style"),
          b =
            "body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}",
          h = d.getElementsByTagName("head")[0];
        a.setAttribute("id", "_vis_opt_path_hides");
        a.setAttribute("type", "text/css");
        if (a.styleSheet) a.styleSheet.cssText = b;
        else a.appendChild(d.createTextNode(b));
        h.appendChild(a);
        this.load(
          "//dev.visualwebsiteoptimizer.com/j.php?a=" +
            account_id +
            "&u=" +
            encodeURIComponent(d.URL) +
            "&r=" +
            Math.random() +
            "&f=" +
            is_spa
        );
        return settings_timer;
      },
    };
  })();
_vwo_settings_timer = _vwo_code.init();
