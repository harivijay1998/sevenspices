document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");
    const bar = document.getElementById("option");

    if (nav && bar) {  // Check if both elements exist
        bar.addEventListener("mouseover", function(){
            console.log("button_mouseovered")
            nav.classList.toggle("active");
        });
    } else {
        console.error("Elements not found.");
    }
});



const addtocart = document.getElementById('d2');
const tracking = document.getElementById('d3');
const payment = document.getElementById('d5');
const rating = document.getElementById('d6');
const menu = document.getElementById('d4')

const phoneImg1 = document.getElementById('imgphone1');
const phoneImg2 = document.getElementById("imgphone2");
const phoneImg3 = document.getElementById("imgphone3");
const phoneImg4 = document.getElementById("imgphone4");
const phoneImg5 = document.getElementById("imgphone5");
const phoneImg6 = document.getElementById("imgphone6");


const innerRing = document.getElementById('ic2');
const innerRing3 = document.getElementById('ic3');
const innerRing4 = document.getElementById('ic4');
const innerRing5 = document.getElementById('ic5');
const innerRing6 = document.getElementById('ic6');
const innerRing1 = document.getElementById('ic1');


phoneImg2.style.display = 'none';
phoneImg3.style.display = 'none';
phoneImg4.style.display = 'none';
phoneImg5.style.display = 'none';
phoneImg6.style.display ='none'


phoneImg1.style.transition = 'opacity 0.2s ease-in-out';
phoneImg2.style.transition = 'opacity 0.2s ease-in-out';
phoneImg3.style.transition = 'opacity 0.2s ease-in-out';
phoneImg4.style.transition = 'opacity 0.2s ease-in-out';
phoneImg5.style.transition = 'opacity 0.2s ease-in-out';
phoneImg6.style.transition = 'opacity 0.2s ease-in-out';

const showPhoneImage = (element, phoneImgToShow) => {
  
  isHoveredImageDisplayed = true;

  
  phoneImg1.style.display = 'none';
  phoneImg2.style.display = 'none';
  phoneImg3.style.display = 'none';
  phoneImg4.style.display = 'none';
  phoneImg5.style.display = 'none';
  phoneImg6.style.display = 'none';


  phoneImgToShow.style.display = 'block';
};

const updateInnerRingColor = (element, color) => {
  element.style.backgroundColor = color;
};

addtocart.addEventListener('mouseover', () => {
  showPhoneImage(addtocart, phoneImg2);
  updateInnerRingColor(innerRing, "red");
  updateInnerRingColor(innerRing1,"")
});

addtocart.addEventListener('mouseout', () => {
  showPhoneImage(addtocart, phoneImg1); 
  updateInnerRingColor(innerRing, "");
  updateInnerRingColor(innerRing1,"red")
});



tracking.addEventListener('mouseover', () => {
  showPhoneImage(tracking, phoneImg3);
  updateInnerRingColor(innerRing3, "red");
  updateInnerRingColor(innerRing1,"")
});

tracking.addEventListener('mouseout', () => {
  showPhoneImage(tracking, phoneImg1); 
  updateInnerRingColor(innerRing3, "");
  updateInnerRingColor(innerRing1,"red")
});



payment.addEventListener('mouseover',()=>{
  showPhoneImage(payment,phoneImg4);
  updateInnerRingColor(innerRing5,"red");
  updateInnerRingColor(innerRing1,"")
})

payment.addEventListener('mouseout', () => {
  showPhoneImage(payment, phoneImg1); 
  updateInnerRingColor(innerRing5, "");
  updateInnerRingColor(innerRing1,"red")
});


rating.addEventListener('mouseover', () => {
  showPhoneImage(rating, phoneImg5); 
  updateInnerRingColor(innerRing6, "red");
  updateInnerRingColor(innerRing1,"")
});

rating.addEventListener('mouseout', () => {
  showPhoneImage(rating, phoneImg1); 
  updateInnerRingColor(innerRing6, "");
  updateInnerRingColor(innerRing1,"red")
});

menu.addEventListener('mouseover', () => {
  showPhoneImage(menu, phoneImg6); 
  updateInnerRingColor(innerRing4, "red");
  updateInnerRingColor(innerRing1,"")
});

menu.addEventListener('mouseout', () => {
  showPhoneImage(menu, phoneImg1); 
  updateInnerRingColor(innerRing4, "");
  updateInnerRingColor(innerRing1,"red")
});