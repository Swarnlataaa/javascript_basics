//splice on the array 
const regnumber=['12bce001','12bce002','12bce003'];
const studentname=['Satish','Ram','Mathew'];
const marks = [30,40,50];
const k = [regnumber,studentname,marks];
k.splice(1,1,"A","B","C");
console.log(k);
