document.addEventListener("DOMContentLoaded", function(e) {
  console.log("whee");
    var button = document.getElementById('mybutton');
    button.onclick = function() {
      chrome.runtime.sendMessage({id: document.getElementById('icras_id').value}, function(response) {
          console.log("got response");
          console.log(response);
    });
  };
});
