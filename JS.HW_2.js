


  let age_1 = 10;
  let age_2 = 18
    let age_3 = 60
  
  const chackAge =  function (age){

    if(+age) {


    if (age < age_2) {
       alert("You don`t have access cause your age is" + age + "It`s less then we need")
    }
    
    else if (age >= age_3) {
        alert("Keep calm and look Culture channel.")}
    
        
    else if ( age >= age_2 && age< age_3 ){
       alert("Welcome!")
    }
     else {
        alert("Technical work")
    }}
   else {
      alert("Not integer value")
   }
   }



let agePrompt = prompt("Enter age");
chackAge (agePrompt);