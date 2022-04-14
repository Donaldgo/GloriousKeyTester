//Const begin

//Const end

//Event Listener begin

//Keydown Events

//Keydown Keyrow1
window.addEventListener("keydown", (event) => {
    if (event.key === 'Tab'){
        keyTabdown()
    }
    if (event.key === 'q') {
        keyQdown()
    }
    if (event.key === 'w') {
        keyWdown()
    }

    if (event.key === 'e') {
        keyEdown()
    }

    if (event.key === 'r') {
        keyRdown()
    }

    if (event.key === 't') {
        keyTdown()
    }

    if (event.key === 'y') {
        keyYdown()
    }

    if (event.key === 'u') {
        keyUdown()
    }

    if (event.key === 'i') {
        keyIdown()
    }

    if (event.key === 'o') {
        keyOdown()
    }

    if (event.key === 'p') {
        keyPdown()
    }

    if (event.key === '[') {
        keyLeftBracketdown()
    }

    if (event.key === ']') {
        keyRightBracketdown()
    }
    console.log(event)
});

//Keydown Keyrow2
window.addEventListener("keydown",(event) => {
    if (event.key === 'CapsLock') {
        keyCapsdown()
    }

    if (event.key === 'a') {
        keyAdown()
    }

    if (event.key === 's'){
        keySdown()
    }

    if (event.key === 'd') {
        keyDdown()
    }

    if (event.key === 'f'){
        keyFdown() 
    }

    if (event.key === 'g'){
        keyGdown()
    }

    if (event.key === 'h'){
        keyHdown()
    }

    if (event.key === 'j'){
        keyJdown()
    }

    if(event.key === 'k'){
        keyKdown()
    }

    if (event.key === 'l'){
        keyLdown()
    }

    if (event.key === ';'){
        keySemiColondown()
    }

    if (event.key === "'"){
        keyQuotedown()
    }

    if (event.key === 'Enter')
    keyEnterdown()
});


//Keyup Events

//Keyup Keyrow1
window.addEventListener("keyup" , (event) => {
    if (event.key === 'Tab'){
        keyTabup()
    }
    if (event.key === 'q') {
        keyQup()
    }
    if (event.key === 'w') {
        keyWup()
    }

    if (event.key === 'e') {
        keyEup()
    }

    if (event.key === 'r') {
        keyRup()
    }

    if (event.key === 't') {
        keyTup()
    }

    if (event.key === 'y') {
        keyYup()
    }

    if (event.key === 'u') {
        keyUup()
    }

    if (event.key === 'i') {
        keyIup()
    }

    if (event.key === 'o') {
        keyOup()
    }

    if (event.key === 'p') {
        keyPup()
    }

    if (event.key === '[') {
        keyLeftBracketup()
    }

    if (event.key === ']') {
        keyRightBracketup()
    }

    console.log(event)
});

//Keyup Keyrow2
window.addEventListener('keyup', (event) => {
    if (event.key === 'CapsLock'){
        keyCapsup()
    }

    if (event.key === 'a'){
        keyAup()
    }

    if (event.key === 's'){
        keySup()
    }

    if (event.key === 'd'){
        keyDup()
    }

    if (event.key === 'f'){
        keyFup()
    }

    if (event.key === 'g'){
        keyGup()
    }

    if (event.key === 'h'){
        keyHup()
    }

    if (event.key === 'j'){
        keyJup()
    }

    if (event.key === 'k'){
        keyKup()
    }

    if (event.key === 'l'){
        keyLup()
    }

    if (event.key === ';'){
        keySemiColonup()
    }

    if (event.key === "'"){
        keyQuoteup()
    }

    if (event.key === 'Enter'){
        keyEnterup()
    }

});

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

function keyCapsdown(){
    document.getElementById('Caps').setAttribute('style', 'color: green');
}

function keyAdown(){
    document.getElementById('A').setAttribute('style', 'color: green');
}

function keySdown(){
    document.getElementById('S').setAttribute('style', 'color: green');
}

function keyDdown(){
    document.getElementById('D').setAttribute('style', 'color: green');
}

function keyFdown(){
    document.getElementById('F').setAttribute('style', 'color: green');
}

function keyGdown(){
    document.getElementById('G').setAttribute('style', 'color: green');
}

function keyHdown(){
    document.getElementById('H').setAttribute('style', 'color: green');
}

function keyJdown(){
    document.getElementById('J').setAttribute('style', 'color: green');
}

function keyKdown(){
    document.getElementById('K').setAttribute('style', 'color: green');
}

function keyLdown(){
    document.getElementById('L').setAttribute('style', 'color: green');
}

function keySemiColondown(){
    document.getElementById('SemiColon').setAttribute('style', 'color: green');
}

function keyQuotedown(){
    document.getElementById('Quotes').setAttribute('style', 'color: green');
}

function keyEnterdown(){
    document.getElementById('Enter').setAttribute('style', 'color: green');
}

//Keydown functions end

//Keyup functions begin

function keyTabup(){
    document.getElementById('Tab').setAttribute('style', 'color: yellow');
}

function keyQup(){
    document.getElementById('Q').setAttribute('style', 'color: yellow');
}

function keyWup(){
    document.getElementById('W').setAttribute('style', 'color: yellow');
}

function keyEup(){
    document.getElementById('E').setAttribute('style', 'color: yellow');
}

function keyRup(){
    document.getElementById('R').setAttribute('style', 'color: yellow');
}

function keyTup(){
    document.getElementById('T').setAttribute('style', 'color: yellow');
}

function keyYup(){
    document.getElementById('Y').setAttribute('style', 'color: yellow');
}

function keyUup(){
    document.getElementById('U').setAttribute('style', 'color: yellow');
}

function keyIup(){
    document.getElementById('I').setAttribute('style', 'color: yellow');
}

function keyOup(){
    document.getElementById('O').setAttribute('style', 'color: yellow');
}

function keyPup(){
    document.getElementById('P').setAttribute('style', 'color: yellow');
}

function keyLeftBracketup(){
    document.getElementById('Left-Bracket').setAttribute('style', 'color: yellow');
}

function keyRightBracketup(){
    document.getElementById('Right-Bracket').setAttribute('style', 'color: yellow');
}

function keyCapsup(){
    document.getElementById('Caps').setAttribute('style', 'color: yellow');
}

function keyAup(){
    document.getElementById('A').setAttribute('style', 'color: yellow');
}

function keySup(){
    document.getElementById('S').setAttribute('style', 'color: yellow');
}

function keyDup(){
    document.getElementById('D').setAttribute('style', 'color: yellow');
}

function keyFup(){
    document.getElementById('F').setAttribute('style', 'color: yellow');
}

function keyGup(){
    document.getElementById('G').setAttribute('style', 'color: yellow');
}

function keyHup(){
    document.getElementById('H').setAttribute('style', 'color: yellow');
}

function keyJup(){
    document.getElementById('J').setAttribute('style', 'color: yellow');
}

function keyKup(){
    document.getElementById('K').setAttribute('style', 'color: yellow');
}

function keyLup(){
    document.getElementById('L').setAttribute('Style', 'color: yellow');
}

function keySemiColonup(){
    document.getElementById('SemiColon').setAttribute('style', 'color: yellow');
}

function keyQuoteup(){
    document.getElementById('Quotes').setAttribute('style', 'color: yellow');
}

function keyEnterup(){
    document.getElementById('Enter').setAttribute('style', 'color: yellow');
}



//Keyup functions end

//Functions end