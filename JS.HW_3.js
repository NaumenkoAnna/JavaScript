


  function checkage(age){

    let age_1 = 18
    let age_2 = 60
  
     if (isNaN(age)) {
         console.log("Error!")
     }
     else {
     if (age < age_1) {
       console.log("You don`t have access cause your age is - " + age + " ,it`s less then we need!")
    }
    
    else if (age >= age_2) {
        console.log("Keep calm and look Culture channel)")}
    
        
    else if ( age >= age_1 && age< age_2 ){
       console.log("Welcome!")}
    
       else {
        console.log("Technical work!")
    }}}
 
  checkage(7)
