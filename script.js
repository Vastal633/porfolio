

function change_color() {
    /// ........ color change of header.........
    document.getElementsByClassName("navbar")[0].style.backgroundColor = 'rgb(217 238 225)';
    //document.getElementById('navbar').style.backgroundColor = 'white';

    


    
    document.getElementById('li').style.color = "black";
    document.getElementById('li2').style.color = "black";
    document.getElementById('li3').style.color = "black";
    document.getElementById('moon').style.display = "block"
    document.getElementById('li').style.fontWeight = 'normal'
    document.getElementById('li2').style.fontWeight = 'normal'
    document.getElementById('li3').style.fontWeight = 'normal'
    document.getElementById('theme').style.display = 'none'
    document.getElementById('txt').style.color = 'black'

    //..... code for change color of body...........
    // body color
    let skill_section = document.getElementsByClassName('skill_section')
    for (let i = 0; i < skill_section.length; i++) {
        skill_section[i].style.backgroundColor = 'white'
    }
    
    document.getElementsByClassName('skill_section')[0].style.backgroundColor = '#d9eee1'
    document.getElementById('moon').style.cursor = 'pointer'

    //change the colors of cards
    let cards = document.getElementsByClassName('github')
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = '#e7e9eb'
        cards[i].style.color = 'black'
    }
    document.getElementsByClassName('h2')[0].firstElementChild.style.color = 'black'
    document.getElementsByClassName('bottom')[0].style.borderColor = 'black'
    let btn = document.getElementById('btn')
    btn.style.backgroundColor = "#282a35"
    btn.style.color = 'white'


    //changing bg image 

    let img = document.getElementsByClassName('bgimg')[0].style.backgroundImage ="URL('https://img.freepik.com/free-photo/abstract-blur-empty-green-gradient-studio-well-use-as-backgroundwebsite-templateframebusiness-report_1258-102220.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=ais')"
    
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
    document.getElementById('txt').style.color = 'white'

    document.getElementsByClassName('skill_section')[0].style.backgroundColor = '#222438'

    let cards = document.getElementsByClassName('github')
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = '#222438'
        cards[i].style.color = 'white'
    }
    document.getElementsByClassName('h2')[0].firstElementChild.style.color = '#1eff97'
    document.getElementsByClassName('bottom')[0].style.borderColor = '#1eff97'

    let btn = document.getElementById('btn')
    btn.style.backgroundColor = "#f8e9a1"
    btn.style.color = 'black'

    let img = document.getElementsByClassName('bgimg')[0].style.backgroundImage ="URL('https://i.pinimg.com/736x/6c/bb/36/6cbb36a34afe45944dc1280aed5f9c0c.jpg')"
    
}

// function hover(){
//     document.getElementById('li').style.backgroundColor =  'red'
//     document.getElementById('li2').style.backgroundColor =  'red'

//     document.getElementById('li3').style.backgroundColor =  'red'

// }
