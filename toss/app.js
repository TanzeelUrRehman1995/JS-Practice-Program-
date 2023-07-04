var flipTheCoin;
function startToss() {
  flipTheCoin = setInterval(function () {
    var num = Math.round(Math.random());
    console.log(num);

    if (num) {
      document.getElementById("flipTheCoin").src = "../image/head.jpg";
    } else {
      document.getElementById("flipTheCoin").src = "../image/tail.jpg";
    }
  }, 100);
}

function endToss(){
    clearInterval(flipTheCoin);
}