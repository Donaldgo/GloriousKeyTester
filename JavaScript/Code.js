//Const begin
//Const end

//Event Listener begin

//Keydown Events

window.addEventListener("keydown", (event) => {
    if (event.key === 'Tab'){
        keyTabdown()
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === 'q') {
        keyQdown()
    }

});



//Keyup Events

window.addEventListener("keyup" , (event) => {
    if (event.key === 'q') {
        keyQup()
    }
})
//Event Listener end

//Functions begin

//Keydown functions begin

function keyTabdown(){
    document.getElementById('Tab').setAttribute('style', 'color: green');
}

function keyQdown(){
    document.getElementById('Q').setAttribute('style', 'color: green');
}

function keyWdown(){
    document.getElementById('W').setAttribute('style', 'color: green');
}

function keyEdown(){
    document.getElementById('E').setAttribute('style', 'color: green');
}

function keyRdown(){
    document.getElementById('R').setAttribute('style', 'color: green');
}

function keyTdown(){
    document.getElementById('T').setAttribute('style', 'color: green');
}

function keyYdown(){
    document.getElementById('Y').setAttribute('style', 'color: green');
}

function keyUdown(){
    document.getElementById('U').setAttribute('style', 'color: green');
}

function keyIdown(){
    document.getElementById('I').setAttribute('style', 'color: green');
}

function keyOdown(){
    document.getElementById('O').setAttribute('style', 'color: green');
}

function keyPdown(){
    document.getElementById('P').setAttribute('style', 'color: green');
}

function keyLeftBracketdown(){
    document.getElementById('Left-Bracket').setAttribute('style', 'color: green');
}

function keyRightBracketdown(){
    document.getElementById('Right-Bracket').setAttribute('style', 'color: green');
}

//Keydown functions end

//Keyup functions begin

function keyQup(){
    document.getElementById('Q').setAttribute('style' , 'color: yellow')
}

//Keyup functions end

//Functions end