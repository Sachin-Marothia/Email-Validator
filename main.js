async function getdata(email){
    let data = await fetch(`https://api.emailvalidation.io/v1/info?apikey=ema_live_BPQ7o6hF21C42JGFD7cBCTP7wGCo83jxdxML9QmZ&email=${email}`)
    let emailresult = await data.json()


   
    displaydata(emailresult)
    
}

function displaydata(emailresult){
 
     
    let result={
        
        "user": `${emailresult.user}`,
        "email":`${emailresult.email}`,
        "free": `${emailresult.free}`,
        "role": `${emailresult.role}`,
        "score": `${emailresult.score}`,
        "state": `${emailresult.state}`,
        "domain": `${emailresult.domain}`,
        "reason": `${emailresult.reason}`,
        "mx_found": `${emailresult.mx_found}`,
        "catch_all": `${emailresult.catch_all}`,
        "disposable": `${emailresult.disposable}`,
        "smtp_check": `${emailresult.smtp_check}`,
        "did_you_mean": `${emailresult.did_you_mean}`,
        "format_valid": `${emailresult.format_valid}`
      }

      
let str=` `
for (key of Object.keys(result)){
  str =  str + `<div>${key} : ${result[key]}</div>`
  
}
console.log(str);
let resultcont = document.getElementById("resultcont")
resultcont.innerHTML = str
}

let input= document.getElementById("input")
let btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    getdata(input.value)
    resultcont.innerHTML=`<img src="img/loading.svg" alt="">`
})



