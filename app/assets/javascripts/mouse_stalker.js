$(document).ready(function() {
  var doc = document;
  var body = doc.body;

  var stalker = doc.createElement("div");
  stalker.id = "stalker";
  stalker.innerHTML = '<img src="https://icondecotter.jp/data/13045/391359365/a4a661badcf5a64b6de134160a876b76.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる

  var stalker2 = doc.createElement("div");
  stalker2.id = "stalker2";
  stalker2.innerHTML = '<img src="https://icondecotter.jp/data/13045/391359365/a4a661badcf5a64b6de134160a876b76.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる

  var stalker3 = doc.createElement("div");
  stalker3.id = "stalker3";
  stalker3.innerHTML = '<img src="https://icondecotter.jp/data/13045/391359365/a4a661badcf5a64b6de134160a876b76.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる

  var stalker4 = doc.createElement("div");
  stalker4.id = "stalker4";
  stalker4.innerHTML = '<img src="https://icondecotter.jp/data/13045/391359365/a4a661badcf5a64b6de134160a876b76.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる

  var stalker5 = doc.createElement("div");
  stalker5.id = "stalker5";
  stalker5.innerHTML = '<img src="https://icondecotter.jp/data/13045/391359365/a4a661badcf5a64b6de134160a876b76.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる

  var stalker6 = doc.createElement("div");
  stalker6.id = "stalker6";
  stalker6.innerHTML = '<img src="https://icondecotter.jp/data/13045/391359365/a4a661badcf5a64b6de134160a876b76.png" alt="マウスストーカー" width="70" height="70">'; //表示させる要素 画像であれば img 要素を入れる

  body.appendChild(stalker);
  body.appendChild(stalker2);
  body.appendChild(stalker3);
  body.appendChild(stalker4);
  body.appendChild(stalker5);
  body.appendChild(stalker6);

  body.addEventListener("mousemove", function(e) {
        stalker.style.left = e.clientX - 45 + "px"; //35 は要素の長さの半分
        stalker.style.top = e.clientY - 70 + "px"; //80 は縦の位置 各自調整
        stalker2.style.left = e.clientX - 45 + "px"; //35 は要素の長さの半分
        stalker2.style.top = e.clientY - 70 + "px"; //80 は縦の位置 各自調整
        stalker3.style.left = e.clientX - 45 + "px"; //35 は要素の長さの半分
        stalker3.style.top = e.clientY - 70 + "px"; //80 は縦の位置 各自調整
        stalker4.style.left = e.clientX - 45 + "px"; //35 は要素の長さの半分
        stalker4.style.top = e.clientY - 70 + "px"; //80 は縦の位置 各自調整
        stalker5.style.left = e.clientX - 45 + "px"; //35 は要素の長さの半分
        stalker5.style.top = e.clientY - 70 + "px"; //80 は縦の位置 各自調整
        stalker6.style.left = e.clientX - 45 + "px"; //35 は要素の長さの半分
        stalker6.style.top = e.clientY - 70 + "px"; //80 は縦の位置 各自調整
  }, false);

})()
