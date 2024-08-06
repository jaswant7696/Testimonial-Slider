const testimonial =[
    {
    name: ".cow",
    photoUrl: "./img/cow.jpg"  ,
    text:".Are you asking for information about cows? Cows are domesticated animals commonly raised for their milk, meat, and leather. ",

    },
    {
      name:".Cobra",
      photoUrl:"./img/cobra.jpg",
      text:".Are you referring to the snake, the programming language, or something else entirely? Let me know so I can provide you with the most relevant information!",
    },
    {
      name:".Tiger",
      photoUrl:"./img/tiger.jpg",
      text:".The tiger is a member of the genus Panthera and the largest living cat species native to Asia. It has a powerful, muscular body with a large head and paws",
    },
    {
      name:".Dog",
      photoUrl:"./img/Dog.jpg",
      text:".The dog is a domesticated descendant of the wolf. Also called the domestic dog, it was domesticated from an extinct population of Pleistocene wolves over 14,000 years ago",
    },
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonial[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonial .length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}