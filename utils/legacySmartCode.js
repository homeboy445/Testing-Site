const _vwo_pc_custom = {
  a: 100,
  t: 100,
};
use_existing_jquery = false;
var _vis_opt_account_id = location.search.split("id=")[1]
  ? location.search.split("id=")[1]
  : "330514";
var _vis_opt_protocol =
  "https:" == document.location.protocol ? "https://" : "http://";
document.write(
  "<s" +
    'cript src="' +
    _vis_opt_protocol +
    "dev.visualwebsiteoptimizer.com/deploy/js_visitor_settings.php?v=1&a=" +
    _vis_opt_account_id +
    "&url=" +
    encodeURIComponent(document.URL) +
    "&random=" +
    Math.random() +
    '" type="text/javascript">' +
    "</s" +
    "cript>"
);

if (typeof _vis_opt_settings_loaded == "boolean") {
  if (use_existing_jquery) {
    document.write(
      "<s" +
        'cript src="' +
        _vis_opt_protocol +
        'd5phz18u4wuww.cloudfront.net/vis_opt_no_jquery.js" type="text/javascript">' +
        "</s" +
        "cript>"
    );
  } else {
    document.write(
      "<s" +
        'cript src="' +
        _vis_opt_protocol +
        'd5phz18u4wuww.cloudfront.net/vis_opt.js" type="text/javascript">' +
        "</s" +
        "cript>"
    );
  }
}

if (
  typeof _vis_opt_settings_loaded == "boolean" &&
  typeof _vis_opt_top_initialize == "function"
) {
  _vis_opt_top_initialize();
  vwo_$(document).ready(function () {
    _vis_opt_bottom_initialize();
  });
}
