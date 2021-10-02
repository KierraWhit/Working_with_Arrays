var wrapperEle = document.body.querySelector(".wrapper");

//wrapperEle.innerHTML="Stuff";
var list = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]
for (var i =0; i<list.length; i++)
    if (list[i].warrior == true && list[i].health >= 10 && list[i].damage >= 2 && (list[i].includes = "a")) {
        var ele = document.createElement("div");
        var nameEle = document.createElement("h2");
        var healthEle = document.createElement("h3");
        var damageEle = document.createElement("h3");
        var warriorEle = document.createElement("h3");
        nameEle.innerHTML = "Name: " + list[i].name;
        healthEle.innerHTML = "Health: " + list[i].health;
        damageEle.innerHTML = "Damage: " + list[i].damage;
        warriorEle.innerHTML = "Warrior: " + list[i].warrior;

        ele.appendChild(nameEle);
        ele.appendChild(healthEle);
        ele.appendChild(damageEle);
        ele.appendChild(warriorEle);
        document.body.appendChild(ele);


    }