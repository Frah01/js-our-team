let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg" 
    },
    {
        name: "Angela Carol",
        role:  "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role:  "Office Manager",
        image:  "walter-gordon-officer-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager-jpg"
    },
    {
        name:  "Scott Estrada",
        role:  "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name:  "Barbara Ramos",
        role:  "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },

]

let container = document.getElementById('content')


for(let i=0; i<team.length; i++){
    let teams = team[i];
    let element = `<div class="content card">${teams.name}${teams.role} ${teams.image}</div>`
    container.innerHTML += element
    console.log(`${teams.name} ${teams.role} ${teams.image}`)
}


 

