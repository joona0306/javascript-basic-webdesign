// 관찰 대상이 범위 안에 나타나면 실행하는 동작
const showKirin = (entries) => {
 const keyframes = {
  opacity: [0, 1],
  // translate: ["200px 0", 0],
  transform: ["translateX(200px)", "translateX(0)"],
 };
 //  console.log("기린입니다");
 //  console.log(entries);
 //  console.log(entries[0].target);

 entries[0].target.animate(keyframes, 2000);
};

const options = {
 //  root: document.querySelector("body"),
 rootMargin: "10px",
 threshold: 0.8,
};

// 관찰 로봇 설정
const kirinObserver = new IntersectionObserver(showKirin, options);
console.log(kirinObserver);

// #kirin을 관찰하도록 지시
kirinObserver.observe(document.querySelector("#kirin"));
