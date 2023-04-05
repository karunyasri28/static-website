
function CLICK(){
let db={0:['ABCD','ABC@123'],1:['then','ABC@123'],2:['SivaDuke','Number03']};
let user_name=document.getElementById("username").value;
let password=document.getElementById("password").value;
let flag=false;
console.log(Object.keys(db));
    
    for(let i=0;i<Object.keys(db).length;i++){
        console.log(db[i][1]);
        
        if((db[i][0]==user_name)&&(db[i][1]==password)){
            flag=true;
            break;
        }
    }
    if(flag==true){
        window.location.href="primestar1.html";
    }
    else{
        alert("Invalid Username or Incorrect Password");
    }
}
