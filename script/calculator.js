const inp1=document.querySelector("#input1")
const inp2=document.querySelector("#input2")
const bt1=document.querySelector("#btn1")
const bt2=document.querySelector("#btn2")
const bt3=document.querySelector("#btn3")
const bt4=document.querySelector("#btn4")
const bt5=document.querySelector("#btn5")
const bt6=document.querySelector("#btnReset")
const bt7=document.querySelector("#clearResults")
const resultbox=document.querySelector("#resultText")


bt1.addEventListener("click",function(e){
    e.preventDefault();
const num1=inp1.value;
const num2=inp2.value;
sum=+num1 + +num2;
resultbox.innerText=sum;
});


bt2.addEventListener("click",function(e){
    e.preventDefault();
const num1=inp1.value;
const num2=inp2.value;
 sub=num1 - num2;
resultbox.innerText=sub;
});

bt3.addEventListener("click",function(e){
    e.preventDefault();
const num1=inp1.value;
const num2=inp2.value;
 mulp=num1 * num2;
resultbox.innerText=mulp;
});

bt4.addEventListener("click",function(e){
    e.preventDefault();
const num1=inp1.value;
const num2=inp2.value;
 divd=num1/num2;
resultbox.innerText=divd;
});

bt5.addEventListener("click",function(e){
    e.preventDefault();
const num1=inp1.value;
const num2=inp2.value;
 percent=num1/num2*100;
resultbox.innerText=`${percent} %`;
});

bt7.addEventListener("click",function(){
   resultbox.innerText=0;
});