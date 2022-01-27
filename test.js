const data = [
  {
  "id": 1,
  "songname": "anyting",
  "singer": "KK"
  },
  {
  "id": 4,
  "songname": "kuchbhi",
  "singer": "Swift taylor"
  },
  {
    "id": 4,
    "songname": "kuchbhi",
    "singer": "Swift taylor"
    }
    
  ]

  const data1 = [
    {
    "id": 1,
    "songname": "anyting",
    "singer": "KK"
    },
    {
    "id": 3,
    "songname": "kuchbhi",
    "singer": "Swift taylor"
    }
    ]

    const findSong =  (name,nametwo) => {
      let abc =  data.filter(item => item.songname === name || item.singer.replace(/ /g,'').toUpperCase() === nametwo.replace(/ /g,'').toUpperCase());
      console.log(abc,'adsf')
    }
    findSong('kuchbhi','Swiftta');

    // const findkuch  = id => {
    //   data.map((item) => {
    //       let anc= data1.find(x => x.id === item.id)
    //       if(anc === undefined){
    //         console.log('undef')
    //       }else{
    //         console.log('true')
    //       }
    //    })

    // }
  
    // findkuch(5)
    

  // const deleteone =  () => {
   
  //   return data.filter(item => item.id != 4)
  // }

  // console.log( data[Math.floor(Math.random()*data.length)])


  // const newd =  [...data,{id:5,songname:"dontknow",singer:"me"}]

// console.log( abc.find(ele => ele.email === "aayushe@gmail.com" && ele.password === "1234") )
// console.log(abc.find(ele => ele.Title === "Easy on Me"));
// const bcd =  new Date();
// console.log(bcd.getFullYear()+bcd.getMilliseconds())

// const findUser =  (email,password) => {
//     abc.filter(ele => ele.email === email && ele.password === password)
// }

// console.log(findUser('aayushe@gmil.com','1234'))



