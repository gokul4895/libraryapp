let email=document.getElementById("email");
let pwd=document.getElementById("pwd");


function validate()
{
    if(email.value=="")
    {
        alert("Email cannot be blank");
        return false;
    }
    else if(pwd.value=="")
    {
        alert("Please provide the password");
        return false;
    }
    else if(pwd.value.length <=8)

{
    alert("Password is short");
    pwd.style.border="2px solid red";
}
else
return true;
}