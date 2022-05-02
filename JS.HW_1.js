//1
var item_1;

//2
var item_1 = 5;

//3
console.log(item_1);

//4
var item_2;

//5
var item_2 = 3;

//6
console.log(item_2);

//7
var item_3;

//8
var item_3 = item_1 + item_2;

//9
console.log(item_3);

//10
var item_4;

//11
var item_4 = "Yolochka";

//12
console.log(item_4);

//13
console.log(item_3+item_4);

//14
console.log(item_3*item_4);

//15
var item_5;

//16
var item_5 = item_3;

//17
var item_6;

//18

var item_6_type;

//19
var item_6=15;

//20
var item_6_type = typeof(item_6);

//21 
console.log("item_6==" + item_6,"item_6_type==" + item_6_type);

//22

var item_7 =String(item_6);


//23
var item_7_type;

//24
var item_7_type=typeof(item_7);

//25
 console.log("item_7==" + item_7,"item_7_type==" + item_7_type);

//26-33
var age_1 = 99;
var age_2 = 18;
var age_3 = 60;



    if (age_1 < age_2) {
        console.log("You don`t have access cause your age is" + age_1 + "It`s less then")
    }
    
    else if (age_1 >= age_3) {
        console.log("Keep calm and look Culture channel.")}
    
        
    else if ( age_1 >= age_2 && age_1< age_3 ){
        console.log("Welcome!")
    }
     else {
        console.log("Technical work")
    }