function triangleArea(a, b, c) {
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
console.log(triangleArea(5,6,7));
for(let i = 1; i<=20; i++) {
    console.log(i);
}
const arr = [1, "myname", true, "sam"]
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr[3]);
 let a = 30;
 let b = 40;
 if(a>b) {
    console.log("yes");
 } else{
    console.log("no")
 }
 if(a<b) {
    console.log("yes");
 } else{
    console.log("no");
 }
 if(a>=b) {
    console.log("yes");
 } else{
    console.log("no")
 }
 if(a<=b) {
    console.log("yes");
 } else{
    console.log("no")
 }
 if(a!==b) {
    console.log("yes");
 } else{
    console.log("no")
 }
 console.log(a!==b && a!=b);
 console.log(a!=b || a!==b);
 console.log(a==b || a<b);
 console.log(a<b || a!=b);
 console.log(a>b && b>a);







