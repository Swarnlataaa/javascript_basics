//creating a 2d array in javascript
//const k = [[12,23,14,15],["satish","ram","mathew"]]
//console.log(k[0][0]);
//console.log(k[1][0]);

//traversing and printing all elements in the array
//k.length will print the number of rows 
//k[0].length will print the number of elements in first row 
const k = [[12,23,14,15],["satish","ram","mathew","tom"]]
for(let row=0;row<k.length;row++)
{
    for(let col=0;col<k[row].length;col++)
    {
        console.log(k[row][col]);
    }
}