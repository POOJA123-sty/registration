const form =document.querySelector("form");
const name1 =document.querySelector("#name");
const phone1 =document.querySelector("#phone");
const email1 =document.querySelector("#email");
const registration_no1 =document.querySelector("#registration_no");
const course1 =document.querySelector("#course");

// const displayButton = document.querySelector(".Display");
const enolop = document.querySelector(".envelope");
// displayButton.addEventListener('click' , () => {
//     enolop.classList.add('.envelope.show')
// });
const nameh2 = document.querySelector("#name-span");
const emailh2 = document.querySelector("#email-span");
const phoneh2 = document.querySelector("#phone-span");
const registrationh2 = document.querySelector("#registration-span");
const courseh2 = document.querySelector("#course-span");
// const nameh1 =document.querySelector("h1 span")


form.addEventListener("submit",function(e){
    e.preventDefault()

    let nameValue = name1.value;
  let phoneValue = phone1.value;
  let emailValue = email1.value;
  let registration_noValue = registration_no1.value;
  let courseValue = course1.value;

  nameh2.innerHTML = nameValue;
  emailh2.innerHTML = emailValue;
  phoneh2.innerHTML = phoneValue;
  registrationh2.innerHTML = registration_noValue;
  courseh2.innerHTML = courseValue;

  enolop.style.zIndex="2"  
  
});

const closeButton = document.querySelector('#close');
const card1 = document.querySelector('.card');

closeButton.addEventListener('click', () => {
  
  // card1.style.display = 'none';
   // Reset form fields
   name1.value = '';
   phone1.value = '';
   email1.value = '';
   registration_no1.value = '';
   course1.value = '';
 
   // Remove dynamically added text from span elements
   nameh2.innerHTML = '';
   emailh2.innerHTML = '';
   phoneh2.innerHTML = '';
   registrationh2.innerHTML = '';
   courseh2.innerHTML = '';
  enolop.style.zIndex="-1" ; 
  card1.scrollIntoView({ behavior: 'smooth' });



});





// ----------------
// <script>
// const displayButton = document.getElementById('display-button');
// const redPage = document.querySelector('.red-page');

// displayButton.addEventListener('click', () => {
//     redPage.classList.add('show');
// });
// </script>