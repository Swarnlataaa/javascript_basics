/*var name =prompt("What is your name? ");
var num=prompt("What is your favourite number? ");
println("Hello" +name +"!");
println(num +"Thats my favourite number too!");
println("Name is a "+typeof name);
println("num is a " + typeof num); */
var name =prompt("Please enter your name")
if(name!=null){
    document.getElementById("greeting")
    .innerHTML="Hello"+name+"Nice to see you!";
}
//run the codes in the browser windows object is not defined in the node.js environment
