// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name=this.name.value.trim();
  const email=this.email.value.trim();
  const message=this.message.value.trim();
  const formMessage=document.getElementById('formMessage');
  if(name && email && message){
    formMessage.style.color="green";
    formMessage.textContent="Thank you! Your message has been sent.";
    this.reset();
  } else {
    formMessage.style.color="red";
    formMessage.textContent="Please fill all fields.";
  }
});

// Stats Counter
function animateValue(id,start,end,duration){
  let obj=document.getElementById(id);
  let range=end-start;
  let current=start;
  let increment=end>start?1:-1;
  let stepTime=Math.abs(Math.floor(duration/range));
  let timer=setInterval(function(){
    current+=increment;
    obj.textContent=current;
    if(current==end){clearInterval(timer);}
  },stepTime);
}

// Animate stats when in viewport
const statsSection=document.getElementById('stats');
let statsAnimated=false;
window.addEventListener('scroll',()=>{
  const rect=statsSection.getBoundingClientRect();
  if(rect.top<window.innerHeight && !statsAnimated){
    animateValue("clients",0,120,2000);
    animateValue("projects",0,85,2000);
    animateValue("experience",0,5,2000);
    statsAnimated=true;
  }
});

// Back to Top
const topBtn=document.getElementById('topBtn');
window.onscroll=()=>{
  if(window.scrollY>300){ topBtn.style.display="block"; }
  else{ topBtn.style.display="none"; }
};
topBtn.addEventListener('click',()=>{ window.scrollTo({top:0,behavior:'smooth'}); });

// Mobile Menu Toggle
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('header nav');
menuToggle.addEventListener('click',()=>{ nav.classList.toggle('show'); });

// Navbar scroll effect
const navContainer=document.querySelector('.nav-container');
window.addEventListener('scroll',()=>{
  if(window.scrollY>100){ navContainer.classList.add('scrolled'); }
  else{ navContainer.classList.remove('scrolled'); }
});

// Scroll Fade-Up Animation
const faders=document.querySelectorAll('.fade-up');
const appearOptions={threshold:0.2};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); }
  });
},appearOptions);
faders.forEach(fader=>{ appearOnScroll.observe(fader); });