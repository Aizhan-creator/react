let user;

function checkout(){
   let checkout = prompt("Are you client?");
   if (checkout === "yes"){
      let login = prompt("Please, enter your login:");
      let password = prompt("Please, enter your password:");
      if (login === "Client" && password === "Aizhan"){
         user = "client";
      }else{
         alert("Wrong username or password");
      }
   }else if (checkout === "no"){
      let checkout = prompt("Are you admin?");
   }if (checkout === "yes"){
      let login = prompt("Please, enter your login:");
      let password = prompt("Please, enter your password:");
      if (login === "Admin" && password === "Aizhan"){
         user = "admin";
      }else{
         alert("Wrong username or password");
      }
   }
}
checkout();
if(user === "client"){
   alert("Successful CLIENT");
}
if(user === "admin"){
   alert("Successful ADMIN");
}
