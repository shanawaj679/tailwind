window.addEventListener("load",()=>{
    let b=JSON.parse(localStorage.getItem("note"))
    if(b!==null){
        document.getElementById("show").innerHTML=`<div>${b}</div>`
    }
})
document.getElementById("submit").addEventListener("click",function(){
    let a= document.getElementById("notes").value 
    if(a===""){
        alert("please enter a note")
    }
    localStorage.setItem("note",JSON.stringify(a));
    let b=JSON.parse(localStorage.getItem("note"))
  document.getElementById("show").innerHTML=`<div>${b}</div>`
})
document.getElementById("remove").addEventListener("click",()=>{
    localStorage.removeItem("note");
    document.getElementById("show").innerHTML=`<div></div>`
})