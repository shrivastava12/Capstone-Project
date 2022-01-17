const abc = [
  {
    id: "1",
    email: "abc@gmail.com",
    password: "1234",
    first_name: "Pankaj",
    last_name: "shrivastava",
    location: "Earth",
    mobile_no: "7479530699",
  },
  {
    id: "2",
    email: "aayushe@gmail.com",
    password: "1234",
    first_name: "Ayushee",
    last_name: " Shrivastava",
    location: " Indore",
    mobile_no: " 8581045392",
  },
];

console.log( abc.find(ele => ele.email === "aayushe@gmail.com" && ele.password === "1234") )


// const findUser =  (email,password) => {
//     abc.filter(ele => ele.email === email && ele.password === password)
// }

// console.log(findUser('aayushe@gmil.com','1234'))
