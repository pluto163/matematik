document.getElementById("basicInput").addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        val = document.getElementById("basicInput").value 
        document.getElementById("basicInput").value = eval(val)

    }
})

function sadelestir(){

}