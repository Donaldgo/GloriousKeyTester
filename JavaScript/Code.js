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
});

//Keydown Keyrow2=========================================================
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

//Keydown Keyrow3===================================================

window.addEventListener("keydown" , (event) => {
    
    if (event.shiftKey & event.location === 1){
        keyLeftShiftdown()
    }

    if (event.key === 'z'){
        keyZdown()
    }

    if (event.key === 'x'){
        keyXdown()
    }

    if (event.key === 'c'){
        keyCdown()
    }

    if (event.key === 'v'){
        keyVdown()
    }

    if (event.key === 'b'){
        keyBdown()
    }

    if (event.key === 'n'){
        keyNdown()
    }

    if (event.key === 'm'){
        keyMdown()
    }

    if (event.key === ','){
        keyLessThandown()
    }

    if (event.key === '.'){
        keyGreaterThandown()
    }

    if (event.key === '/'){
        keyForwardSlashdown()
    }

    if (event.shiftKey & event.location === 2) {
        keyRightShiftdown()
    }

    console.log(event)
});

//Keyup Events

//Keyup Keyrow1=======================================================================
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
});

//Keyup Keyrow2==============================================================
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

//Keyup Keyrow3
window.addEventListener('keyup', (event) => {
    if (event.key === 'Shift' & event.location === 1){
        keyLeftShiftup()
    }

    if (event.key === 'z'){
        keyZup()
    }

    if (event.key === 'x'){
        keyXup()
    }

    if (event.key === 'c'){
        keyCup()
    }

    if (event.key === 'v'){
        keyVup()
    }

    if (event.key === 'b'){
        keyBup()
    }

    if (event.key === 'n'){
        keyNup()
    }

    if (event.key === 'm'){
        keyMup()
    }

    if (event.key === ','){
        keyLessThanup()
    }

    if (event.key === '.'){
        keyGreaterThanup()
    }

    if (event.key === '/'){
        keyForwardSlashup()
    }

    if (event.key === 'Shift' & event.location === 2){
        keyRightShiftup()
    }

    console.log(event)
});
//Event Listener end

//Functions begin

//Keydown functions begin

//Keyrow1============================================================================================
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

//Keyrow2================================================================================================
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

//Keyrow3=======================================================================================
function keyLeftShiftdown(){
    document.getElementById('LeftShift').setAttribute('style', 'color: green');
}

function keyZdown(){
    document.getElementById('Z').setAttribute('style', 'color: green');
}

function keyXdown(){
    document.getElementById('X').setAttribute('style', 'color: green');
}

function keyCdown(){
    document.getElementById('C').setAttribute('style', 'color: green');
}

function keyVdown(){
    document.getElementById('V').setAttribute('style', 'color: green');
}

function keyBdown(){
    document.getElementById('B').setAttribute('style', 'color: green');
}

function keyNdown(){
    document.getElementById('N').setAttribute('style', 'color: green');
}

function keyMdown(){
    document.getElementById('M').setAttribute('style', 'color: green');
}

function keyLessThandown(){
    document.getElementById('LessThan').setAttribute('style', 'color: green');
}

function keyGreaterThandown(){
    document.getElementById('GreaterThan').setAttribute('style', 'color: green');
}

function keyForwardSlashdown(){
    document.getElementById('ForwardSlash').setAttribute('style', 'color: green');
}

function keyRightShiftdown(){
    document.getElementById('RightShift').setAttribute('style', 'color: green');
}



//Keydown functions end

//Keyup functions begin

//Keyrow1=============================================================================
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


//Keyrow2=======================================================================================
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

//Keyrow3================================================================================

function keyLeftShiftup(){
    document.getElementById('LeftShift').setAttribute('style', 'color: yellow');
}

function keyZup(){
    document.getElementById('Z').setAttribute('style', 'color: yellow');
}

function keyXup(){
    document.getElementById('X').setAttribute('style', 'color: yellow');
}

function keyCup(){
    document.getElementById('C').setAttribute('style', 'color: yellow');
}

function keyVup(){
    document.getElementById('V').setAttribute('style', 'color: yellow');
}

function keyBup(){
    document.getElementById('B').setAttribute('style', 'color: yellow');
}

function keyNup(){
    document.getElementById('N').setAttribute('style', 'color: yellow');
}

function keyMup(){
    document.getElementById('M').setAttribute('style', 'color: yellow');
}

function keyLessThanup(){
    document.getElementById('LessThan').setAttribute('style', 'color: yellow');
}

function keyGreaterThanup(){
    document.getElementById('GreaterThan').setAttribute('style', 'color: yellow');
}

function keyForwardSlashup(){
    document.getElementById('ForwardSlash').setAttribute('style', 'color: yellow');
}

function keyRightShiftup(){
    document.getElementById('RightShift').setAttribute('style', 'color: yellow');
}

//Keyup functions end

//Functions end