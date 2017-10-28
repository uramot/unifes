window.onload = function() {
  setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/word', true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var ul = document.querySelector('.words');
          ul.textContent = null;
          let words = JSON.parse(xhr.responseText);
          words.forEach(function(word) {
            let li = document.createElement('li');
            li.textContent = word.context;
            ul.appendChild(li);
          })
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.send(null);
  }, '2500')
}
