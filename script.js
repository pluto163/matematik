document.getElementById("basicInput").addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        val = document.getElementById("basicInput").value 
        document.getElementById("basicInput").value = eval(val)

    }
})

function wolf(mode){
    q=String(document.getElementById("cebirInput").value)
    fetch("https://math.fr3d.onrender.com/wolfram?input="+q)
        .then(response => response.text())
        .then(text => document.getElementById("cebirİ").value = text)
    
        if(err){console.log(err)}}