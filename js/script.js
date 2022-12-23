 /*document.getElementById("change").onclick=function () {

	document.getElementById("change").innerHTML="See later!";
}


document.getElementById("alter").onclick=function() {
	
document.getElementById("add").innerHTML=" I think "+document.getElementById("add").innerHTML+"Awesome";

}

	document.getElementById("button_text").onclick=function() {

		document.getElementById("new text").innerHTML="<h1>new textnew textnew textnew text new textvnew textnew textnew textnew text<h1>";

	}

		document.getElementById("ALTER").onclick=function() {


			document.getElementById("moretext").style.margin="50px 50px 20px 10px";
			document.getElementById("moretext").style.color="red";
		}

		document.getElementById("red_circle").onclick=function() {

			document.getElementById("red_circle").style.display="none";

		}
		document.getElementById("blue_circle").onclick=function() {

			document.getElementById("blue_circle").style.display="none";

		}
		document.getElementById("orange_circle").onclick=function() {

			document.getElementById("orange_circle").style.display="none";

		}
		document.getElementById("green_circle").onclick=function() {

			document.getElementById("green_circle").style.display="none";

		}
		document.getElementById("block_button").onclick=function() {

			var textEnter=""
			textEnter=document.getElementById('block_input').value; 
			document.getElementById('blcok_change').innerHTML=textEnter;
		}

		document.getElementById('button').onclick=function(){

			var text1=""
			text1=document.getElementById('input').value;
			document.getElementById('paragraph').innerHTML=text1;
		}
		
		document.getElementById('button2').onclick=function() {

			document.getElementById('text2').style.color="red";
			document.getElementById('text2').style.fontSize="28px";
			
		}

		document.getElementById('button3').onclick=function(){
			var text2=""
			text2=document.getElementById('input2').value;
			document.getElementById('paragraph2').innerHTML=text2;
			
		}

		var array5 = new Array() ;
		array5[0]='Monday';
		array5[1]='Tuesday';
		array5[2]='Wednesday';
		array5[3]='Thursday';
		array5[4]='Friday';

		array5.push('suturday');
		array5.splice(4,0,"my Day");
		array5[1]='my day1';
		console.log(array5);


		document.getElementById('block_button3').onclick=function() {
				var myname=document.getElementById('block_input2').value;
				var name1="Maria";
				if(myname==name1) {
					 alert('Loading')
				}
				
				else {
					alert('NO,TRY AGAIN!')
				}
		}
		
		document.getElementById('block_guess').onclick=function() {
			var randomnumber = Math.random();
			randomnumber= randomnumber*4;
			randomnumber=Math.floor(randomnumber);
			
			if (document.getElementById('block_input4').value == randomnumber) {
				alert('Well done!');
			}

			else{
				alert('Nope!Try Again!'+ randomnumber);
			}

		}

	


		
			document.getElementById('block_button6').onclick=function() {

				var block_input6=document.getElementById('block_input6').value;
				
				var done = false;
				var number=1;
				while (done==false) {
				
				var block_button6 = Math.random();
				block_button6=block_button6*6;
				block_button6=Math.floor(block_button6);

			

				if (block_button6 == block_input6) {

					 done=true;
						alert('Well Done  it was a '  +  block_button6  + '. It took me  '  +  number++ +' guesses');
					
				}
				else{

					number++;
	
				}
				}
		}
	

					let array1 = [
						[1,2,3],
						[3,4,5],
						[7,9,8]
					]

					console.log(array1);
					 

					let arrr=[1,2,3];

					console.log(arrr);



					let obj =[{
						"color":"orange",
						"number":[899,7890],
						"cheked":true
					},
					{
						"color":"green",
						"number":[11,7230],
						"cheked":false
					},
					{
						"color":"red",
						"number":[78,71340],
						"cheked":false
					},
				]
				console.log(obj);
*/
/*
let age=prompt('What is your old?')

if(age>18){
	alert('Over 18')
}
else if(age<18,age>0) {
	alert("Under 18")
}
else if(age === 18){
	alert("I'm 18 years old")
}
else{
	alert("Error!")
}
*/
//obj

/*
let mydog = {
'name':"tom",
"legs":4,
"freinds":['sima','dima']
};
*/
//while
/*let numb=0
while (numb<10) {
	console.log(numb);
	if(numb==6){
		break;
	}
	numb++;
}*/
// do while
/*
let numb1=20;
 do{
console.log(numb1);
numb1--;
 }
 while(numb1>10)
*/
//for
/*
let  arr= [5,7,8,9,1,0];
for (let items=0; items<arr.length;items++) {
	console.log(arr[items]*2+2)
}*/

//for in
/*
let obj = {
	'name': "roma",
	'age': 18,
	'number': 834567876543,
}
for( let key in obj) {
	console.log( `ключ ${key}, значение ${obj[key]}`)

}
*/

//forEach
/*
let arr2=[9,5,1,9,10];

arr2.forEach(function(item,j,array4) {
	console.log (`значение ${item},
	элемент ${j}, 
	element*3 ${item*3}` )
	})*/


/*let arr1=[];
	for(let j=0; j<10; j+=2) {
		arr1.push(j);
	}
	console.log(arr1)*/

//mission1
/*let arr2=[];
for( let t=0;t<10;t++) {
	arr2.push(t*t);
}
console.log(arr2);


//mission2

let arr3=[2,3,4,5,5,6,7,8,99,,10,12,44]
let numb1=0;
for(i=0;i<arr3.length;i++){
if(arr3[i]%2==0){
	numb1++;
}

}
console.log(numb1);*/

//mission 3
/*let string="";
let arrr = ["hi", "me","my","you"];

for (let i=0; i<4; i++) {

string=string + "<p>"+ arrr[i] +"</p>"	
}

document.getElementById("block_string").innerHTML=string;
*/

/*
function my(name,age){

	return ("Hi , My name is "+ name+ ", Age:" +age)
}


let names ='petr'
let ages=29;

let res=(my(names,ages))
console.log(res)
*/
//Method this
/*let obj1 = {

	name:"Ivan",
	age:29,
	hi(){
		console.log("My name is " +this.name)
	}

}
obj1.hi()
*/
//sort array
/*
let arrrr=[1,2,5,7,20,10,30,29]
arrrr.sort((a, b) => a - b)
console.log(arrrr);
arrrr.sort()
*/
//fibonache
/*
function fibonache(number) {
let fib =[]
for(let i=0;i<number;i++) {
	if(i==0) fib[i]=1;
	else if (i==1) fib[i]=2;
	else fib[i]=fib[i-2]+fib[i-1];
}
return fib
}
let f=fibonache(15)
console.log(f)*/
/*
function factor (f){

	let fact=1;
	if(f==0) return fact;

	for(i=1;i<=f;i++) {
	fact *= i;
}
return fact

}
let a = factor(1);
console.log(a);
let b = factor(3);
console.log(b);
let c = factor(6);
console.log(c);*/

//3456 chet nechet

/*function numb2(number){

	number += "";
	let chet=0,nechet=0;
	for(i=0;i<number.length;i++) {
		if(number[i]%2==0) chet++;
		else nechet++;
	}
return {
	"Chet": chet,
	"Nechet":nechet
}
}
console.log(numb2(2222))*/

//generation  number
/*
function generation () {

let number = Math.floor(Math.random()*50)
for(let i=1;i<=10;i++){
 
result=+prompt(`Угадай сколько админу лет, Попытка № ${i},Введите число:`);        //result

if (result==number){
	return alert (`Вы угадали! Ваше число ${number}, Попыток:${i}`)
}
else if (result>number){
	 alert (`Ваше число ${result}, это больше колличества лет,Попыток:${i}`)
}
else if (result<number){
	 alert (`Ваше число ${result}, это меньше колличества лет,Попыток:${i}`)
}

}

	return alert (`Вы не угадали! Колличество лет админу ${number} `)




}
generation()*/
/*
let b = Date.now(new Date());
console.log(b)

for (let i=0; i<1000;i++){
console.log(0)
}


let a = Date.now(new Date());
console.log(a-b)

let time = new Date(2015,4,5,1,23,33,4)
*/

/*

const func = (name,value="1") =>name+value;
console.log(func("hello"))
*/




/*
let start = new Date().getTime();   //2 начало

				
	function getRandomColor() {               //random color
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }

function pausetime () {					// 5 функция паузы 
const top = Math.random() * 400;
const left = Math.random() * 500;
let width =Math.random()*400;
let height =Math.random()*350;


if (Math.random() > 0.5){                  // делаем круг
	document.getElementById("shape1").style.borderRadius = "50%";   //если размер больше 50%
}
else {
	document.getElementById("shape1").style.borderRadius = "0%";		//если размер больше 0%
}


document.getElementById("shape1").style.backgroundColor=getRandomColor();  // change color
document.getElementById("shape1").style.width = width +"px"	//change on width
document.getElementById("shape1").style.height = height +"px"	//change on height
document.getElementById("shape1").style.top = top +"px"			//change on verticale
document.getElementById("shape1").style.left = left +"px"	//change on horizontale 
document.getElementById("shape1").style.display="block";		//6 открывает квадрат
start = new Date().getTime();
}


 function dontstop ()  {

setTimeout(pausetime, Math.random()*3000) 		//7 запускает квадрат рандомно в течении 3 с

}


dontstop() 		//обязательно вызыввем функцию внутри

document.getElementById("shape1").onclick=function() {  // 0
	
document.getElementById("shape1").style.display="none";	  //1 нон скрывает квадрат

let end1 = new Date().getTime()			//3конец

let varios = (end - start) / 1000;		//4разница

document.getElementById("your_time").innerHTML=varios+ "s";  //1.2 высвечивает время разницу
 
dontstop()    //вызыввем функцию,но она квадрат не исчезает,делаем работу с стр 433,заупскаем функцию
}
*/
let start2 = new Date().getTime()  //3


function getRandomColor() {    //11
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function replay (){			
	if (Math.random()>0.5){       //10
		document.getElementById("shape2").style.borderRadius="50%";
	}else {
			document.getElementById("shape2").style.borderRadius="0%"
		}
	
		


	let top= Math.random()*400           	//9
	let left= Math.random()*400
	document.getElementById("shape2").style.backgroundColor = getRandomColor();  //12
	document.getElementById("shape2").style.left=left + "px";
	document.getElementById("shape2").style.top=top + "px";
	document.getElementById("shape2").style.display="block";	//7
	 start2 = new Date().getTime()			//9 whithout let
}



function round (){
	setTimeout(replay,Math.random()*3000)
}
round()				//8

document.getElementById("shape2").onclick=function() {   	//1

	document.getElementById("shape2").style.display="none";  //2

let end2 = new Date().getTime()   //4

let different= (end2-start2)/1000  //5

document.getElementById("reaction").innerHTML=different + "s";  //6

round()				//8
}

