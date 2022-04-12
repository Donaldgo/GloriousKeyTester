//Const begin
const Akey = document.getElementById('A');
//Const end

//Event Listener begin
window.addEventListener("keypress" , (event) => {
    if (event.key === 'a') {
        keyA()
    }

})
//Event Listener end

//Function begin
function keyA(){
    document.getElementById('A').setAttribute('style', 'color: red');
}

//Function end