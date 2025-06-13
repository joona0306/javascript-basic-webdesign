const workList = [
 {
  imgSrc: "img-1.png",
  title: "첫 번째 작업",
  desc: "첫 번째 작업에 대한 설명입니다.",
  date: "0000. 00. 00",
 },
 {
  imgSrc: "img-2.png",
  title: "두 번째 작업",
  desc: "두 번째 작업에 대한 설명입니다.",
  date: "0000. 00. 00",
 },
 {
  imgSrc: "img-3.png",
  title: "세 번째 작업",
  desc: "세 번째 작업에 대한 설명입니다.",
  date: "0000. 00. 00",
 },
 {
  imgSrc: "img-4.png",
  title: "네 번째 작업",
  desc: "네 번째 작업에 대한 설명입니다.",
  date: "0000. 00. 00",
 },
 {
  imgSrc: "img-5.png",
  title: "다섯 번째 작업",
  desc: "다섯 번째 작업에 대한 설명입니다.",
  date: "0000. 00. 00",
 },
 {
  imgSrc: "img-6.png",
  title: "여섯 번째 작업",
  desc: "여섯 번째 작업에 대한 설명입니다.",
  date: "0000. 00. 00",
 },
];

// console.log(workList);

let htmlTags = "";

workList.forEach((work, index) => {
 console.log(`${index}번: ${work.title}, ${work.desc}, ${work.date}`);

 htmlTags += `<div class="work">
    <div class="inner">
     <img src="images/${work.imgSrc}" alt="${work.title}" />
     <h2>${work.title}</h2>
     <p>${work.desc}</p>
     <span>${work.date}</span>
    </div>
   </div>`;

 console.log(htmlTags);
});

document.querySelector(".works-wrap").innerHTML = htmlTags;

// workList.map((work, index) => {
//  console.log(`${index}번: ${work.title}, ${work.desc}, ${work.date}`);
// });
