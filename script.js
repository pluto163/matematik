document.getElementById("basicInput").addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        val = document.getElementById("basicInput").value 
        document.getElementById("basicInput").value = eval(val)

    }
})

function wolf(mode){
    console.log("cebirr")
    q=String(document.getElementById("cebirInput").value)
    fetch("https://api.mathjs.org/v4/?expr="+q)
        .then(response => response.text())
        .then(text => document.getElementById("cebirİ").value = text)
    
}