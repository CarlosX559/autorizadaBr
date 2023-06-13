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

function cardCertificado() {

  let btn_certificado = $(".icons_certificado");

  btn_certificado.on('click', function () {

    btn_certificado.removeClass('selected');
    $(this).addClass('selected');


    let selected = $(".icons_certificado.selected");
    let area_slide = $('.area_total .slide');
    
    for (let i = 0; i < area_slide.length; i++) {
      if (area_slide[i].attributes[2].value == 'false') {
        area_slide[i].attributes[2].value = 'true';
      }

    }
    switch (selected[0].attributes.id.nodeValue) {
      case 'icons_certificado_1':

        if (area_slide[0].attributes[2].value == 'true') {
          area_slide[0].attributes[2].value = 'false';
        }
        break;
      case 'icons_certificado_2':

        if (area_slide[1].attributes[2].value == 'true') {
          area_slide[1].attributes[2].value = 'false';
        }

        break;

      case 'icons_certificado_3':

        if (area_slide[2].attributes[2].value == 'true') {
          area_slide[2].attributes[2].value = 'false';
        }
        break;

      case 'icons_certificado_4':

        if (area_slide[3].attributes[2].value == 'true') {
          area_slide[3].attributes[2].value = 'false';
        }
        break;
    }
  });


}

cardCertificado();
