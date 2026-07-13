/*alert("Hello, World!");
//OBJECT
const profile = {
    fullName: "Narayan Shaw",
    isFollow: true,
    posts: 100,
    followers: "569K",
    following: 100,
    bio: "Web Developer",
};
for(let key in profile)
{
    console.log(key + ": " + profile[key]);
}

let a=4;
if(a%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

let age=25;
age>18?console.log("Adult"):console.log("Not Adult");
let name=prompt("Enter your name");
console.log("Hello " + name);

let item = "Basketball";
for(let val of item)
{
    console.log(val);
}*/

//ARRAY

/*let marks=[85,97,44,37,76,60];
let avg=0;
for(let i=0;i<marks.length;i++)
{
    avg=avg+marks[i];
}
console.log("Average Marks: " + (avg/marks.length));

let price=[250,645,300,900,50];
for(let i=0;i<price.length;i++)
{
    price[i]=price[i] - price[i]/10;
}
console.log("Discounted Prices: " + price);

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(0,1);
console.log("Updated Companies: " + companies);
companies.splice(1,1,"Ola");
console.log("Companies after adding Ola: " + companies);
companies.splice(5,0,"Amazon");
console.log("Companies after adding Amazon: " + companies);
*/

//FUNCTION 

/*function vowCount(str){
    let count=0;
    str=str.toUpperCase();
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=="A" || str[i]=="E" || str[i]=="I" || str[i]=="O" || str[i]=="U")
        {
            count++;
        }
    }
    return count;
}
console.log("Number of Vowels: " + vowCount("Hello World"));

//ARROW FUNCTION

let vow=(s) =>{
let count=0;
    s=s.toUpperCase();
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=="A" || s[i]=="E" || s[i]=="I" || s[i]=="O" || s[i]=="U")
        {
            count++;
        }
    }
    return count;
}

//CALLBACK FUNCTION

let arr=[5, 10, 15, 20, 25];
arr.forEach((val)=>{
    console.log(val**2);
})

let stuMarks=[85, 97, 78, 92, 88];
let highMarkers=stuMarks.filter((mark) =>{
    if(mark>90)
    {
        return mark;
    }
})
console.log("High Marks: " + highMarkers);

let n=prompt("Enter a number");
let arr1=[];
for(let i=0;i<n;i++)
{
   arr1[i]=i+1;
}
let sum=arr1.reduce((res,prev) =>{
    return res+prev;
})
console.log("Sum of first " + n + " natural numbers: " + sum);
*/
//Object Literals

let student = {
    name: "Narayan Shaw",
    age: 20,
    marks: 96,
};

let delhi = {
    latitude: 28.7041,
    longitude: 77.1025,
    null: 0, //null is a valid key in JavaScript objects but here it is converted as string "null" and not treated as a null keyword. It can be accessed using delhi["null"] or delhi.null
};

const item = {
    name: "Laptop",
    price: 50000,
    discount: 10,
    color: ["Silver", "Black", "Gray"],
};

//Object of objects

const classinfo = {
    aman:{
      grade: "A",
      city: "Delhi",  
    },
    ankit:{
        grade: "B",
        city: "Mumbai",
    },
    anshul:{
        grade: "A+",
        city: "Bangalore",
    },
};

//this keyword

const stdent = {
    name: "Narayan Shaw",
    age: 20,
    eng: 95,
    math: 96,
    phy: 94,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log("Average Marks: " + avg);
    }
};

//settimeout and setinterval

const object = {
    message: "Hello, World!",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout (object.logMessage, 1000); //undefined because this is not bound to the object and it refers to the global object where message is not defined