document.addEventListener("atp", function(data) {
  browser.runtime.sendMessage({'method':'append-to-prefs','data':data.detail});
});