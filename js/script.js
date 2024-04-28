"use strict";

/*
let veta = document.querySelector('telo');
let slovo = document.querySelector('slovo');
if {
	let result = veta.value.indexOf('slovo');
} return alert(slovo sa nachádza);

else {
	slovo sa nenachádza
}

*/

/*
let veta = document.getElementById('telo');
let slovo = document.getElementById('slovo');
let result = veta.value.indexOf(slovo.value); // Use slovo.value instead of 'slovo'

if (result !== -1) {
    alert("Slovo sa nachádza.");
} else {
    alert("Slovo sa nenachádza.");
}
*/

/*uloha 6.3 na vypracovanie*/

let text = "ahoj magda ako sa mas,pozdrav doma"
let slovo = document.getElementById('telo');
let button = document.getElementById('btn');
button.addEventListener("click", () => {
	if (text.includes("ahoj")) {
		alert("Text sa nachádza.");
	} else {
		alert("Text sa nenachádza.");
	}


})  
let text1 = document.getElementById('veta').textContent;
const slovo1 = "clovek";

const indexy = [];
let index = text1.indexOf(slovo1);

while (index !== -1) {
  indexy.push(index);
  index = text1.indexOf(slovo1, index + 1);
}

console.log(indexy); // [11, 20]


 let textpole = document.getElementById('textovepole');


 textpole.addEventListener("change", () => {
this.veta.innerHTML = "";

this.veta.innerHTML =  textovepole.value;
});

 let image = document.getElementById('obrazok');
 let btn2 = document.getElementById('butonik');



 btn2.addEventListener("click", () => {
    image.setAttribute("class", "democlass");
});


 /*uloha na local Storage*/

 let color_data = {
	farba: "#ffffff",
	farba1: "#ff0000",
	farba2: "#00ff00",
	farba3: "##0000ff",
	farba4: "#ffff00"
	
}

let farba1 = document.getElementById('colorvyber');
let body = document.getElementById("telo")

function uloz_data() {
	let posielam_data = JSON.stringify(color_data)
	localStorage.setItem("color_data", posielam_data)
}

let vybrana_polozka = localStorage.getItem("color_data")
vybrana_polozka = JSON.parse(vybrana_polozka) || {};

farba1.addEventListener("click", () => {
	     const color = farba1.getAttribute('data-color');
          body.style.backgroundColor = color;
          vybrana_polozka['farba'] = color;
          uloz_data();
    })



/*progress bar*/


    let progres = $('#progres');
    let win = $(window);
	let odvrchu;


 
win.scroll(function() {
	odvrchu = win.scrollTop() // od vrchu už mame,
  


	let maximalna_vyska = Math.round(($(document).height() - $(window).height()) );
  
	let vypocet = odvrchu * 100 / maximalna_vyska;

	 progres.css("width", vypocet + '%');
    
	})


  let progres1 = $('#progres');
    let win1 = $(window);
	let odvrchu1;


 /*document-height je vyška celeho body v html*/
/*window-height je vyška od hora dole kde aktualne som na stránke*/
win1.scroll(function() {
	odvrchu1 = win1.scrollTop() // 
    
	let maximalna_vyska = Math.round(($(document).height() - $(window).height()) );/*vyška celeho body - vyška okna 
	na ktorom som zascrollovany aktualne */

	let vypocet = odvrchu1 * 100 / maximalna_vyska; /*vzorec trojčlenka na vypočet*/

	 progres1.css("width", vypocet + '%'); /*pre premennu progres pridáme širku a z premennej 
	 vypočet sa zisti že koľko sa ma pridať širky*/
    
	})

   /* akordeon efekt*/
   /*popis čo to robi : ak kliknem na gombik tak ramcek prida trieda active čiže na tu ktoru
   kliknem bude zafarbena a otvori sa ten text pod tym */

let ramcek = $('.acordeon');
let panel = $('.panel');

$("button").click(function(evt) {
  evt.preventDefault();
  let ramcek = $(this); // No need to redefine ramcek
  let panel = ramcek.next('.panel'); // No need to redefine panel

  ramcek.toggleClass("active");

  if (ramcek.hasClass("active")) {
    panel.slideUp();
  } else {
    panel.slideDown(); // Corrected from slidedown() to slideDown()
  }
});



 



 


/*uloha taby*/

function nastav_vysku() {
   let smer = $('#tab_smer').height() ;
   let hlas =  $('#tab_hlas').height() ;
   let republika =  $('#tab_republika').height() ;
   let maxp_vyska = Math.max(smer,hlas,republika);
   console.log(maxp_vyska)
 
    $('.tab_texty').height(maxp_vyska);
  }
   


$(window).resize(function() {
    nastav_vysku();
});


$(document).ready(function() {
        nastav_vysku();
   });

function taby(a = $(".taby  .aktivne")){
	let id = a.attr("href")
	let p = $(id);
	p.parent().height( p.outerHeight() )
	p.fadeIn().siblings().fadeOut()
}
taby()



$(".taby nav a").click(function (evt) {
	evt.preventDefault()
    $(this).addClass("aktivne").siblings().removeClass("aktivne")
	taby()
	nastav_vysku();
   });

/*this sa použiva */


let img = $('#obrazok');
let party = $('#party');
let party2 = $('#party2');
let treneri = $('#treneri');
let strava = $('#strava');
let prva = $('#ramceky img');
let druha = $('#ramceky1 img');
let cena1 = $('#cena1');
let cena2 = $('#cena2');
let rozpocet = 50;


$('#strava img').click(function(){
    if(rozpocet > 0) {
        let img = $(this)
        img.clone().appendTo("#party")

        rozpocet = rozpocet -1
        $("#rozpocet_span").text(rozpocet)
    }
})


$('#trener img').click(function(){
    if(rozpocet > 9) {
        let img = $(this).clone(); 
        img.appendTo("#party"); 

        rozpocet = rozpocet - 10; 
        $("#rozpocet_span").text(rozpocet); 
    }
});

/*čiže chceme aby na kliknutie do galerie sa nam otvoril obrazok
potom na kliknutie na šipku sa nam bude meniť obrazok bud do prava alebo do ľava
taktiež nam to bude počítať od 1/6 čislice*/

/*lightbox*/



    let fotky = []; 
    let fotky_pozicia;
    let fotky_title;

    const img_lightbox = $("#lightbox_img img");
    const p_lightbox = $("#lightbox_img p");
    const title_lightbox = $("#lightbox_img").find("title");
    const lightbox_pre_img = $("#lightbox_img");

    $(".kod").click(function(evt) {
        evt.preventDefault();

        fotky_pozicia = $(".kod").index(this); 
        fotky = $(".kod").map(function() {
            return $(this).attr("src"); 
        }).get();

        img_lightbox.attr("src", fotky[fotky_pozicia]);
        p_lightbox.text("1/" + fotky.length);

        lightbox_pre_img.fadeIn(600);
    });

    lightbox_pre_img.click(function() {
        lightbox_pre_img.fadeOut(600);
    });

    // Clicking on the navigation arrows
    $(".sipky").click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    });

    $(".sipka1").click(function() {
        lightbox_dolava();
    });
    $(".sipka2").click(function() {
        lightbox_doprava();
    });

    function lightbox_doprava() {
        fotky_pozicia = (fotky_pozicia + 1) % fotky.length;

        img_lightbox.attr("src", fotky[fotky_pozicia]);
        p_lightbox.text(fotky_pozicia + 1 + "/" + fotky.length);
    
    
    title_lightbox.text($(".kod").eq(fotky_pozicia).attr("title"));
    }

    function lightbox_dolava() {
        fotky_pozicia = (fotky_pozicia - 1 + fotky.length) % fotky.length;
        img_lightbox.attr("src", fotky[fotky_pozicia]);
        p_lightbox.text(fotky_pozicia + 1 + "/" + fotky.length);
     title_lightbox.text($(".kod").eq(fotky_pozicia).attr("title"));
    }

    
    $(document).keydown(function(evt) {
        if (lightbox_pre_img.css("display") == "block") {
            if (evt.key == "ArrowLeft") {
                lightbox_dolava();
            } else if (evt.key == "ArrowRight") {
                lightbox_doprava();
            } else if (evt.key == "Escape") {
                lightbox_pre_img.fadeOut(600);
            }
        }
    });

    /*chceme spraviť že skrze cyklus pridáme 30 hviezd s 4 rôznymi veľkostami. a rozmiestni ich po
    stránke náhodne */
  
   

 function pridajhviezdy() {
    let velkosti = ["8px", "10px", "12px", "14px"];
    let pocet = 30;
 for (let i = 0; i < pocet; i++) {
    for (let velkost of velkosti) {
         let randomTop = Math.floor(Math.random() * ($("#parallax").height() - 610)); 
         let randomLeft = Math.floor(Math.random() * ($("#parallax").width() - 20)); 

        $("#parallax").append($('<img>', {
            class: 'stars',
            src: 'stars.png',
            width: velkost,
            css: {
                    position: 'absolute',
                    top: randomTop + 'px',
                    left: randomLeft + 'px'
                }

             
        }));



      

    }

    
}
}
pridajhviezdy()

$(document).ready(function() {
    let predosli_slide = $(".kolotoč .karta:first-child");

    function kolotoc(right) {
        let slide = right.closest(".karta");
        let predchadzajuci_slide = predosli_slide;

        if (right.attr("id") === "right") {
            predchadzajuci_slide = predosli_slide.next();
            if (!predchadzajuci_slide.length) {
                predchadzajuci_slide = $(".kolotoč .karta:first-child");
            }
        } else {
            predchadzajuci_slide = predosli_slide.prev();
            if (!predchadzajuci_slide.length) {
                predchadzajuci_slide = $(".kolotoč .karta:last-child");
            }
        }

        predosli_slide.removeClass("active");
        predchadzajuci_slide.addClass("active");

        predosli_slide = predchadzajuci_slide;
    }

    $(".obal a").click(function(evt) {
        evt.preventDefault();
        kolotoc($(this));
    });
});

       
       



/*formulár*/



  $(document).ready(function() {
    let formular = $("#formularik");
    let button1 = $("#submit");
    let input = $("#phone");
    let input1 = $("#email");
    
    button1.click(function(evt) {
        evt.preventDefault();

        let inputValue = input.val();
        let inputValue1 = input1.val(); 

        if (inputValue.includes("0")) {
            let result = inputValue.replace("0", "+421");
            input.val(result);
        } else if (inputValue1.includes("@") && inputValue1.includes(".")) {
        
            return true; 
        } else {
            alert("Zadajte správny formát e-mailu.");
        }
    });
});


/*kolotoč-carousel*/
let hranica_vlavo = 0;
let hranica_vpravo = 3;
let celkovy_presun = 0;
let hodnota = 24
$("#left").click(function(e){
  e.preventDefault();
  console.log("ideme do lava");
  console.log($(".karta").outerHeight());
  let sirka_jedneho_boxu = $(".karta").innerWidth();

  if (hranica_vlavo > 0) {
    celkovy_presun += sirka_jedneho_boxu + hodnota;
    $(".karta").css("transform", `translateX(${celkovy_presun}px)`); 
    hranica_vlavo--;
    hranica_vpravo++;
  }

  if(hranica_vlavo < celkovy_presun){
    stopPropagation()
  }
});

$("#right").click(function(e){
  e.preventDefault();
  console.log("ideme do prava");
  console.log($(".karta").outerHeight()); 
  let sirka_jedneho_boxu = $(".karta").innerWidth();

  if (hranica_vpravo > 0) {
    celkovy_presun -= sirka_jedneho_boxu + hodnota ;
    $(".karta").css("transform", `translateX(${celkovy_presun}px)`); // Update the translateX value
    hranica_vlavo++;
    hranica_vpravo--;
  }
});
