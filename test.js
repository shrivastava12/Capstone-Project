const data = [
  {
  "id": 1,
  "songname": "anyting",
  "singer": "KK"
  },
  {
  "id": 2,
  "songname": "anyting",
  "singer": "KK"
  },
  {
  "id": 3,
  "songname": "anyting",
  "singer": "Ed shreen"
  },
  {
  "id": 4,
  "songname": "kuchbhi",
  "singer": "Swift taylor"
  }
  ]

  const deleteone =  () => {
   
    return data.filter(item => item.id != 4)
  }

  console.log( data[Math.floor(Math.random()*data.length)])


  // const newd =  [...data,{id:5,songname:"dontknow",singer:"me"}]

// console.log( abc.find(ele => ele.email === "aayushe@gmail.com" && ele.password === "1234") )
// console.log(abc.find(ele => ele.Title === "Easy on Me"));
// const bcd =  new Date();
// console.log(bcd.getFullYear()+bcd.getMilliseconds())

// const findUser =  (email,password) => {
//     abc.filter(ele => ele.email === email && ele.password === password)
// }

// console.log(findUser('aayushe@gmil.com','1234'))



