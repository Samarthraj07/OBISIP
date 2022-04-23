let themeDot = document.getElementsByClassName("theme-dot")

for (var i = 0; themeDot.length > i; i++){
    themeDot[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = "style.css"
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = "blue.css"
    }
}