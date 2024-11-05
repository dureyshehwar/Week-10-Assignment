class Member {
    constructor(name,position){
        this.name = name;
        this.position =position;
    }
}
class Team{
    constructor(id,name){
        this.id= id;
        this.name = name;
        this.members = [];

    }
    addMember(member){
        this.members.push(member);

    }
   deleteMember(member){
    let index = this.members.indexOf(member);
    this.members.splice(index,1);
   }
}
let team = [];
let teamId = 0;
 
onclick('new-team',() => {
    team.push(new Team(teamId++,gotvalue('new-team-name'))); 
});

function onclick(id,action){
    let element= document.getElementById (id);
    element.addEventListener('click',action);
return  element;
}

function getvalue(id){
    return document.getElementById(id).value;
}


