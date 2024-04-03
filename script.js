document.getElementById("basicInput").addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        val = document.getElementById("basicInput").value 
        document.getElementById("basicInput").value = eval(val)

    }
})

function wolf(mode){
    q=String(document.getElementById("basicInput").value)
fetch("https://api.wolframalpha.com/v1/result?i="+q+"&appid=4TH5K5-H3TYYKYYPX")
        .then(response => response.text())
        .then(text => document.getElementById("basicInput").value = text)
    
        if(err){console.log(err)}}