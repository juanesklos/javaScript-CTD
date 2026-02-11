//Create list of skills
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector("#skills");
const skillsList  = skillsSection.querySelector("ul");
console.log(console.log(skillsList))
for (let i = 0; i < skills.length; i++) {
  //console.log(skills[i]);
  const skill = document.createElement('li');
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

skillsSection.appendChild(skillsList);
//Creating Footer
const footerElement = document.createElement("footer");

//Some styles for footer
footerElement.style.backgroundColor = '#333';
footerElement.style.color = '#fff';
footerElement.style.textAlign = 'center';
footerElement.style.padding = '20px 0';
footerElement.style.marginTop = '20px';

//We put some text 
// footerElement.innerHTML = "<p>Footer DOM</p>";



//Goals
const today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);
const copyright = document.createElement('p');
console.log(copyright);
copyright.textContent = `Juan is in ©  ${thisYear}`;

footerElement.appendChild(copyright);

//Get the body
document.body.appendChild(footerElement);


