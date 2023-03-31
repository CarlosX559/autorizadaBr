const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 3.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}

function faq() {

  const quest = document.querySelectorAll(".faq_quests");
  const aswer = document.querySelectorAll(".aswer");
  const img_icon = document.querySelectorAll('.quest img');

  for (let i = 0; i < quest.length; i++) {

      quest[i].addEventListener("click", () => {

          if (quest[i].classList.contains("close")) {
              quest[i].classList.toggle("close");
              aswer[i].classList.toggle("open");
              img_icon[i].src = 'img/+.png';
          } else {
              quest[i].classList.add("close");
              aswer[i].classList.add("open");

              img_icon[i].src = 'img/-.png';
          }


      });

  }


}
faq();