const btn = document.querySelector("#btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
 //  document.body.classList.toggle("dark-theme");

 // 삼항연산자
 //  document.body.classList.contains("dark-theme")
 //   ? document.body.classList.remove("dark-theme")
 //   : document.body.classList.add("dark-theme");

 // if문
 if (body.classList.contains("dark-theme")) {
  body.classList.remove("dark-theme");
  btn.textContent = "다크 모드로 만들기";
 } else {
  body.classList.add("dark-theme");
  btn.textContent = "라이트 모드로 만들기";
 }

 //  // 혹시 버튼의 텍스트가 '다크 모드로 만들기'로 되어 있을 경우
 //  if (btn.textContent === "다크 모드로 만들기") {
 //   // 클릭하면 '라이트 모드로 만들기'로 변경
 //   btn.textContent = "라이트 모드로 만들기";

 //   // 그렇지 않은 경우 ('라이트 모드로 만들기'로 되어 있으면)
 //  } else {
 //   // 클릭하면 '다크 모드로 만들기'로 돌아가기
 //   btn.textContent = "다크 모드로 만들기";
 //  }
});
