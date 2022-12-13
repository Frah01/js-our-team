let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg" 
    },
    {
        name: "Angela Carol",
        role:  "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role:  "Office Manager",
        image:  "./img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name:  "Scott Estrada",
        role:  "Developer",
        image: "./img/scott-estrada-developer.jpg"
    },
    {
        name:  "Barbara Ramos",
        role:  "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg"
    },

]

let container = document.getElementById('content')


for(let i=0; i<team.length; i++){
    let teams = team[i];
    let element = `<div class="content-js card"><h4>${teams.name}</h4> <h4>${teams.role}</h4> <div><img src="${teams.image}"</div></div>`
    container.innerHTML += element
    console.log(`${teams.name} ${teams.role} ${teams.image}`)
}


 

