
function add(a,num){
    a.push(num);
}
function remove(a,num){
     let index=a.indexOf(num);
     a.splice(index,1);
}
function sort(a){
     a.sort();
}
function sum(a){
     const sum=a.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
     return sum;
}
function average(a){
     let sum=0;
     a.forEach((el)=>sum+=el);
     let av=sum/a.length;
     return av;
}

let a=[5,3,8,1,2];
console.log("Initial array: ");
console.log(a);
add(a,4);
console.log("After adding 4: ");
console.log(a);
remove(a,3);
console.log("After removing 3: ");
console.log(a);
sort(a);
console.log("Sorted array: ");
console.log(a);
console.log("Sum of numbers: "+sum(a));
console.log("Average of numbers: "+average(a));