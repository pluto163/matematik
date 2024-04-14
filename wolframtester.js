const prompt = require("prompt")


prompt.start();

prompt.get(["query"], (err, result)=>{
    fetch("https://www.wolframalpha.com/input?i=10*2")
        .then(response => response.text())
        .then(text => console.log(text))
    
        if(err){console.log(err)}
    
})

