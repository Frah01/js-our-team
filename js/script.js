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


for(let i=0; i<team.length; i++){
    let teams = team[i];
    document.getElementById('content').innerHTML += (`${teams.name} ${teams.role} ${teams.image}`)
}

// for(let key in team){
//     
//     console.log(team[key])
// }


 

