window.onload = function () {
  var toTop = document.getElementById('toTop');
  var clientHeight = document.documentElement.clientHeight;
  var timer = null;
  var isTop = true;
  window.onscroll = function(){
   var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
   if (scrollTop > clientHeight) {
    toTop.style.display='block';
   }
   else{
    toTop.style.display='none';
   }
   if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;
  }
  toTop.onclick=function(){
    clearInterval(timer);
    timer=setInterval(function(){
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      var speed=Math.ceil(scrollTop/5);
      document.documentElement.scrollTop=document.body.scrollTop=scrollTop-speed;
      isTop = true;
      if (scrollTop==0) {
        clearInterval(timer);
      }
    },30)

  }
}