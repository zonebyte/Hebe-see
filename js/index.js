
function signUp()                                    
{ 
    var name = document.forms["RegForm"]["first-name"];  
    var name = document.forms["RegForm"]["last-name"];               
    var email = document.forms["RegForm"]["email"];    
    var password = document.forms["RegForm"]["Password"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
    if (what.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        what.focus(); 
        return false; 
    } 
   
    return true; 
}