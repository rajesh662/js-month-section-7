


let a= prompt("enter")
const date = new Date(a);

  month = date.getMonth();
 
if( 0<=month && 3>=month){
	document.write("spring");
}
else if( 4<=month && 7>=month ){
	document.write("summar");
}
else if(8<=month && 11>=month){
	document.write("winter");
}
else{
	document.write("enter they correct month")
}


