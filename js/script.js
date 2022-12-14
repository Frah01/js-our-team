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
    let element = 
    `<div class="card" style="width: 18rem;">
        <img src="${teams.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center">${teams.name}</p>
            <p class="card-text text-center">${teams.role}</p>
        </div>
    </div>`
    container.innerHTML += element
    console.log(`${teams.name} - ${teams.role} - ${teams.image}`)
}


 

