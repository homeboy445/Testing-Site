window._vwo_code =
  window._vwo_code ||
  (function () {
    var settings_tolerance = 2000,
      library_tolerance = 2500,
      /**
       * Note: While using your own website jquery. Two things are to be done:
       *   1. use_existing_jquery = true
       *    2. Change `https://dev.visualwebsiteoptimizer.com/plib/tag-{ACCOUNTID}.js` => `https://dev.visualwebsiteoptimizer.com/plib/tag-{ACCOUNTID}_nj.js` (added _nj to the tag-{accountId}.js)
       */
      use_existing_jquery = false,
      hide_element = "body",
      /* DO NOT EDIT BELOW THIS LINE */
      f = false,
      d = document,
      code = {
        use_existing_jquery: function () {
          return use_existing_jquery;
        },
        library_tolerance: function () {
          return library_tolerance;
        },
        finish: function () {
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
          window.settings_timer = setTimeout(function () {
            _vwo_code.finish();
          }, settings_tolerance);
          var a = d.createElement("style"),
            b = hide_element
              ? hide_element +
                "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}"
              : "",
            h = d.getElementsByTagName("head")[0];
          a.setAttribute("id", "_vis_opt_path_hides");
          a.setAttribute("type", "text/css");
          if (a.styleSheet) a.styleSheet.cssText = b;
          else a.appendChild(d.createTextNode(b));
          h.appendChild(a);
          return settings_timer;
        },
      };
    window._vwo_settings_timer = code.init();
    return code;
  })();

(function(){
  const link = document.createElement('link');
  link.rel = "preload";
  link.referrerpolicy = "no-referrer-when-downgrade";
  link.href = "https://dev.visualwebsiteoptimizer.com/j.php?a=4000166&f=1";
  link.as = "script";
  document.head.appendChild(link);
})();

(function(){
  const script = document.createElement('script');
  script.async = true;
  script.referrerPolicy = "no-referrer-when-downgrade";
  script.src = "https://dev.visualwebsiteoptimizer.com/j.php?a=4000166&f=1";
  script.onerror = () => {
    window._vwo_code.finish();
  };
  document.head.appendChild(script);
})();

