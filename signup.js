function signup(){
    let Email_id=document.getElementById("email").value;
    let Phone_no=document.getElementById("phone").value;
    let Username=document.getElementById("username").value;
    let Password=document.getElementById("password").value;
    let Confirm_password=document.getElementById("con_password").value;

    let flag=false;
    for(let i=0;i<Email_id.length;i++){
        if(Email_id[i]=='@'){
            flag=true;
            break;
        }
    }
    if(flag!=true){
        alert("Invalid mail id. Please try again...");
        return;
    }

    
    if(!((Phone_no.length==10)&&(Phone_no[0]=='6')||(Phone_no[0]=='7')||(Phone_no[0]=='8')||(Phone_no[0]=='9'))){
        alert("Invalid Phone Number. Please try again");
        return;

    }

    if((Password.length>=8)&&(Password.length<=16)){
        let lower=0;
        let upper=0;
        let Number=0;
        let special=0;
        for(let i=0;i<Password.length;i++){
            if(("A"<=Password[i])&&(Password[i]<='Z')){
                upper++;
            }
            else if(('a'<=Password[i])&&(Password[i]<='z')){
                lower++;
            }
            else if(('0'<=Password[i])&&(Password[i]<='9')){
                Number++;
            }
            else{
                special++;
            }

        }
        if(!(upper>=1)&&(lower>=1)&&(Number>=1)&&(special>=1)){
            alert("Password is not a strong.Please try again...");
            return;
        }
    }
    else{
        alert("Password should consist minimum 8 character and maximum 16 character.Please try again...");
        return;

    }

    if(Password!=Confirm_password){
        alert("Password and confirm password doesn't match. Please try again...");
        return;
    }

    window.location.href="prime.html";

    


}