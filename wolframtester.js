const prompt = require("prompt")

prompt.start();

prompt.get(["query"], (err, result)=>{
    fetch("https://api.wolframalpha.com/v1/result?i="+result.query+"&appid=4TH5K5-H3TYYKYYPX")
        .then(response => response.text())
        .then(text => console.log(text))
    
        if(err){console.log(err)}
    
})

