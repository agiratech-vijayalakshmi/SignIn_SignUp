let username=document.getElementById("name"),
    e_uname=document.getElementById("e_name"),
    email=document.getElementById("email-id"),
    e_email=document.getElementById("e_email"),
    pw=document.getElementById("pw"),
    e_password=document.getElementById("e_pw"),
    cpw=document.getElementById("cpw"),
    e_cpw=document.getElementById("e_cpw"),
    signin_pw=document.getElementById("spw"),
    signin_e_password=document.getElementById("se_pw");

var btn1=document.getElementById("signupbtn")
const tabs = document.querySelectorAll("[data-tab-target]");
const tabcontents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcontents.forEach((tabcont) => {
      tabcont.classList.remove("active");
    });
    target.classList.add("active");
    signin();
    signup();
  });
  
});
//   var check=function() {
  
// }        

          
// }
function signin(){
  //Password

  pw_pattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
 
  
  if(signin_pw.value=="")
  {
      signin_e_password.innerHTML="<br><span style='color: blue;'>Password required</span>";
      
      signin_pw.focus();
  }
  else if(pw_pattern.test(signin_pw.value)==false)
  {
    signin_e_password.innerHTML="<br><span style='color: red;'>Provide a valid password</span>";
    signin_pw.style.borderColor='red';
      // signin_pw.focus();
  }
  else
  {
    signin_e_password.innerHTML="<span style='color: green;'>Valid</span><br>";
    signin_pw.style.borderColor='green';
  }
}
function signup(){
   //Email-id
  
  mail_pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(email.value=="")
  {
    
      e_email.innerHTML="<br><span style='color: blue;'>Email id required</span>";
      email.focus();
  }
  else if(mail_pattern.test(email.value)==false)
  {
      e_email.innerHTML="<br><span style='color: red;'>Provide valid Email address</span>";
      email.focus();
  }
  else
  {
      e_email.innerHTML="<br><span style='color: green;'>Valid </span>";
      
  }
  //Password

  pw_pattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
 
  
  if(pw.value=="")
  {
      e_password.innerHTML="<br><span style='color: blue;'>Password required</span>";
      pw.focus();
  }
  else if(pw_pattern.test(pw.value)==false)
  {
      e_password.innerHTML="<br><span style='color: red;'>Provide a valid password</span>";
      pw.focus();
  }
  else
  {
      e_password.innerHTML="<span style='color: green;'>Valid</span><br>";
  }
   //confirm Password
   if (cpw.value =="") {
      e_cpw.innerHTML="<br><span style='color: blue;'>Re-enter the password</span>";
      cpw.focus();
  } else if(cpw.value!=pw.value){
      e_cpw.innerHTML =  "<span style='color: red;'>Password not Matching</span>";
      cpw.focus();
      }
   else {
       
    e_cpw.innerHTML ="<span style='color: green;'>Confirmed</span>";
  }
    
}

