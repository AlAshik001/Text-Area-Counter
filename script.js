var messageinput = document.getElementById("messageinput")
var counder = document.getElementById("counder")
var warning = document.getElementById("warning")
var maxchars = 200
let warningshow = false

messageinput.addEventListener("input", function(){
        var currentlength = messageinput.value.length
        counder.textContent= currentlength + "/" + maxchars +"characters"
        
       if(currentlength >= maxchars){
        if(!warningshow){
            warning.classList.remove("hidden")
            warningshow= true
        }

        messageinput.value = messageinput.value.slice(0,maxchars)
        counder.textContent= maxchars + "/" + maxchars + "character"
    }

        else{
            warning.classList.add("hidden")
            warningshow = false
        }
       

    })







