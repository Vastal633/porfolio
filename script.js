
function change_color(){
    document.getElementById('navbar').style.backgroundColor = "white";
    document.getElementById('li').style.color = "black";
    document.getElementById('li2').style.color = "black";
    document.getElementById('li3').style.color = "black";
    document.getElementById('moon').style.display = "block"
    document.getElementById('li').style.fontWeight = 'bolder'
    document.getElementById('li2').style.fontWeight = 'bolder'
    document.getElementById('li3').style.fontWeight = 'bolder'
    document.getElementById('theme').style.display = 'none'

}

function dark(){
    document.getElementById('navbar').style.backgroundColor = "#222438";
    document.getElementById('moon').style.display = "none"
    let t = document.getElementById('li').style.color = "white";
    let t2 = document.getElementById('li2').style.color = "white";
    let t3 = document.getElementById('li3').style.color = "white";

    document.getElementById('li').style.fontWeight = 'normal'
    document.getElementById('li2').style.fontWeight = 'normal'
    document.getElementById('li3').style.fontWeight = 'normal'
    document.getElementById('theme').style.display = 'block'

}

