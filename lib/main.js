exports.main = function() {
  var data = require("sdk/self").data;
  var pageMod = require("sdk/page-mod");

  pageMod.PageMod({
    include: "*.travis-ci.org",
    contentScriptFile: [data.url("add-link.js")]
  });
};
