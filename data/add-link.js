(function() {

  var lite_url = document.createElement("a");
  lite_url.textContent = 'Travis Lite';
  lite_url.id = 'travislite';
  lite_url.href = '#';
  lite_url.onclick = function() {
      var url = document.URL.replace('travis-ci.org', 'travis-lite.com');
      window.location.href = url;
  };

  var list_item = document.createElement("li");
  list_item.appendChild(lite_url);

  var nav = document.getElementById("navigation");
  nav.insertBefore(list_item, document.getElementsByClassName('traviscicom')[0]);

})();

