

function change_color() {
    /// ........ color change of header.........
    document.getElementsByClassName("navbar")[0].style.backgroundColor = 'white';
    //document.getElementById('navbar').style.backgroundColor = 'white';

    


    
    document.getElementById('li').style.color = "black";
    document.getElementById('li2').style.color = "black";
    document.getElementById('li3').style.color = "black";
    document.getElementById('moon').style.display = "block"
    document.getElementById('li').style.fontWeight = 'normal'
    document.getElementById('li2').style.fontWeight = 'normal'
    document.getElementById('li3').style.fontWeight = 'normal'
    document.getElementById('theme').style.display = 'none'
    document.getElementById('logo-txt').style.color = 'black'

    //..... code for change color of body...........
    // body color
    let skill_section = document.getElementsByClassName('skill_section')
    for (let i = 0; i < skill_section.length; i++) {
        skill_section[i].style.backgroundColor = 'white'
    }
    
    document.getElementById('moon').style.cursor = 'pointer'
}

function dark() {
    document.getElementById('navbar').style.backgroundColor = "#222438";
    document.getElementById('moon').style.display = "none"
    let t = document.getElementById('li').style.color = "white";
    let t2 = document.getElementById('li2').style.color = "white";
    let t3 = document.getElementById('li3').style.color = "white";

    document.getElementById('li').style.fontWeight = 'normal'
    document.getElementById('li2').style.fontWeight = 'normal'
    document.getElementById('li3').style.fontWeight = 'normal'
    document.getElementById('theme').style.display = 'block'
    document.getElementById('logo-txt').style.color = 'white'
    let skill_section = document.getElementsByClassName('skill_section')
    for (let i = 0; i < skill_section.length; i++) {
        skill_section[i].style.backgroundColor = '#222438'
    }
}

// function hover(){
//     document.getElementById('li').style.backgroundColor =  'red'
//     document.getElementById('li2').style.backgroundColor =  'red'

//     document.getElementById('li3').style.backgroundColor =  'red'

// }

