

//Create list of skills
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector("#skills");
const skillsList  = skillsSection.querySelector("ul");

//Special features
skillsList.style.backgroundColor = "salmon";
skillsList.style.display = "flex";
skillsList.style.flexDirection = "column";
skillsList.style.alignItems = "flex-start";
skillsList.style.listStyleType = "disc";
skillsList.style.paddingLeft = "20px";
console.log(skillsList);

const space = document.createElement('br');
for (let i = 0; i < skills.length; i++) {
  //console.log(skills[i]);
  //const space = document.createElement('br');
  const skill = document.createElement('li');
  skill.innerHTML = skills[i];
  skill.style.display = "list-item";
  skill.style.float = "none";
  skillsList.appendChild(skill);
  //skillsList.appendChild(space);
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
//console.log(thisYear);
const copyright = document.createElement('p');
//console.log(copyright);
copyright.textContent = `Juan is in ©  ${thisYear}`;

footerElement.appendChild(copyright);

//Get the body
document.body.appendChild(footerElement);





//******************************* */
//Asynchronous Programming and Promises
const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener('submit', function(event) {

    event.preventDefault(); 
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log(name);
    console.log(email);
    console.log(message);

    const messageSection = document.getElementById("messages");
    const messageList  = messageSection.querySelector("ul");
    messageList.style.background = "salmon";
    messageList.style.backgroundColor = "salmon";
    messageList.style.display = "flex";
    messageList.style.flexDirection = "column";
    messageList.style.alignItems = "flex-start";
    messageList.style.listStyleType = "disc";
    messageList.style.paddingLeft = "20px";
    const newMessage  = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
                            <span> ${message} </span>
                            <br>
    `;
    //newMessage.innerHTML = `Algun mensaje`;
    
    //Remove button
    const removeButton  = document.createElement("button");
    removeButton.innerText = 'remove';
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function(){

      const entry = removeButton.parentNode;
      console.log("Entry" + entry);
      entry.remove();

    });

    newMessage.appendChild(space);
    newMessage.appendChild(removeButton);
    messageList.appendChild(space);
    messageList.appendChild(newMessage);
    if (messageForm) {
        event.target.reset();
    }


});


//******************************* */
//Fetch API

fetch('https://api.github.com/users/juanesklos/repos', {
  method:'GET',
  headers: {
    'Content-type': 'application/json'
  }
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then((repositories) => {
    console.log("repositories:", repositories);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    projectList.style.background = "salmon";
    projectList.style.backgroundColor = "salmon";
    projectList.style.display = "flex";
    projectList.style.flexDirection = "column";
    projectList.style.alignItems = "flex-start";
    projectList.style.listStyleType = "disc";
    projectList.style.paddingLeft = "20px";
    //console.log(projectSection);
    //console.log(projectList);

    projectList.innerHTML = "";
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    const errorItem = document.createElement("li");
    errorItem.innerText = "Unable to load projects right now. Please try again later.";
    projectList.appendChild(errorItem);
  });