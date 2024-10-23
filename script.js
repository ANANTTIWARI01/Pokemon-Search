const EnterName = document.querySelector("#pokiid")
const LoadButton = document.querySelector("#Load")
const GetButton = document.querySelector("#Getpoki")
let  data;

const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0."  

                                                                       

const promise1  = Promise.resolve(baseUrl)  ;
// const promise2 = new Promise.

Promise.all([promise1]).then(resolve=>  resolve.json()).then((result)=>{
    console.log(result.results);
    
})



// fetch(baseUrl).then((response)=>
//     response.json()
// ).then((result)=>{
//      data = result.results.url     
// })

