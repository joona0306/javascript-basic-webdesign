window.addEventListener("scroll", () => {
 // console.log("스크롤했습니다!");
 console.log("scrollY: ", window.scrollY);
 const pageHeight = document.documentElement.scrollHeight;
 // console.log("전체페이지높이: ", pageHeight);
 const viewHeight = document.documentElement.clientHeight;
 // console.log("표시영역높이: ", viewHeight);
 const percentage = (window.scrollY / (pageHeight - viewHeight)) * 100;

 // document.querySelector("#bar").style.width = percentage + "%";
 document.querySelector("#bar").style.width = `${percentage}%`;
});
