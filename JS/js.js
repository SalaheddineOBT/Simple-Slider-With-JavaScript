window.onload = function(){
    var desc=document.getElementById("description"),
        nom=document.getElementById("name"),
        domaine=document.getElementById("domaine"),
        img=document.getElementById("imag"),
        nex=document.getElementById("next"),
        prev=document.getElementById("prev");

    var index=0;
    var len=0;

    fetch("./JS/data.json").then(res=>{
        return res.json();
    }).then(data=>{
        len=data.users.length;
        desc.innerHTML=data.users[index].description;
        nom.innerHTML=data.users[index].name;
        domaine.innerHTML=data.users[index].domaine;
        img.setAttribute("src",data.users[index].photo);      
    }).catch(err=>{
        console.error(err)
    });

    nex.onclick=()=>{
        if(index < len && index >= 0){
            index++;
            if(index===len){
                index=0;
            }
            fetch("./JS/data.json").then(res=>{
                return res.json();
            }).then(data=>{
                len=data.users.length;
                desc.innerHTML=data.users[index].description;
                nom.innerHTML=data.users[index].name;
                domaine.innerHTML=data.users[index].domaine;
                img.setAttribute("src",data.users[index].photo);      
            }).catch(err=>{
                console.error(err)
            });
        }
    }

    prev.onclick=()=>{
        if(index < len && index >= 0){
            if(index===0){
                index=len-1;
            }else{  
                index--;
            }
            fetch("./JS/data.json").then(res=>{
                return res.json();
            }).then(data=>{
                len=data.users.length;
                desc.innerHTML=data.users[index].description;
                nom.innerHTML=data.users[index].name;
                domaine.innerHTML=data.users[index].domaine;
                img.setAttribute("src",data.users[index].photo);      
            }).catch(err=>{
                console.error(err)
            });
        }
        // if(index < len){
        //     index--;
            
        //     if(index===0){
        //         index=len-1;
        //     }
        // }
    }
    

}
