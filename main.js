let spans=document.querySelectorAll('span');
let divsB=document.querySelectorAll('.border');

const skillsP=()=>{
spans.forEach(element=>{
element.style.width=element.innerText;

})
};
skillsP()