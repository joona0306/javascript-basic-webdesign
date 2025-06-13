const text = document.querySelector("#text");
const count = document.querySelector("#count");

// 문자열의 length는 공백도 포함
const str1 = "안 녕하 세 요!";
console.log("str1의 length: ", str1.length);

// keyup 이벤트 대신 input 이벤트를 적용 하였음
text.addEventListener("input", () => {
 count.textContent = text.value.length;
 //  count.textContent = [...text.value].length;

 // 100자가 넘어가면
 if (text.value.length > 100) {
  // alert 클래스를 추가
  count.classList.add("alert");
  // 그렇지 않으면 (100자 이내라면)
 } else {
  // alert 클래스 제거
  count.classList.remove("alert");
 }
});
