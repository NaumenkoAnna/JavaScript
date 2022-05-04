
   let a=5
   let b=""
   let i=1
   while(i<=a){                //second 
       b+=":)";
       console.log(b);i++
   }
   
   
   function printSmile(stroka, numberOfRows){
       let c=0
    while(c<numberOfRows){                            //second* 
        stroka+=":)";
        console.log(stroka);c++
    }
    
   }
   
   printSmile("", 5)