function addElement() {
  // 要素の作成フェーズ

  // 一番外のdivタグ
  const featureCol = document.createElement("div");
  featureCol.setAttribute("class", "col-sm-4 feature_col");
  featureCol.setAttribute("style", "height: 390px;");

  // feature_imgのdivタグ
  const featureImg = document.createElement("div");
  featureImg.classList.add("feature_img");

  // point3のpタグ
  const point = document.createElement("p");
  point.innerText = "point3";

  // feature_hexのdivタグ
  const featureHex = document.createElement("div");
  featureHex.classList.add("feature_hex");

  // その中のimgタグ
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "/codebase/program-school/common/img/feature_icon_03.png"
  );
  img.setAttribute("alt", "学習の習慣を身に付ける");

  featureHex.appendChild(img);
  featureImg.appendChild(point);
  featureImg.appendChild(featureHex);

  // feature_ttlのh3タグ
  const featureTitle = document.createElement("h3");
  featureTitle.classList.add("feature_ttl");
  featureTitle.innerText = "学習の習慣を身に付ける";

  // feature_txtのdivタグ
  const featureTxt = document.createElement("div");
  featureTxt.classList.add("feature_txt");
  featureTxt.innerText =
    "プログラミング教室が終わってからも学習の習慣が身に付けるように、プログラムを組んでいます。自主学習の環境作りとして、自主学習用の動画の配布、施設のを無料開放、チャットツールで質疑応答対応などを整えています。";

  featureCol.appendChild(featureImg);
  featureCol.appendChild(featureTitle);
  featureCol.appendChild(featureTxt);

  // 要素の追加フェーズ

  // feature_clmの参照
  const featureClm = document.getElementsByClassName("feature_clm")[0];
  featureClm.appendChild(featureCol);
}

// 上記は2-4の内容を関数に入れただけ。

let tokucho = document.getElementsByClassName("ttl_style-outer")[0];
let button = document.createElement("button");
button.innerText = "要素を追加";
button.type = "button";
tokucho.appendChild(button);

// 以下が新規の文
button.addEventListener("click", addElement);
