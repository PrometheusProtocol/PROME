function onReady(callback) {
  disableScrolling();
  var intervalId = window.setInterval(function() {
    // if (document.getElementsByTagName('body')[0] !== undefined) {
      
      if (document.readyState === "complete") {

        window.clearInterval(intervalId);
        callback.call(this);
      }

      // window.clearInterval(intervalId);
      // callback.call(this);
    // }
  }, 1500);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
  enableScrolling();
});

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

