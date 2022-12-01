
function carregar() {
var msg = window.document.getElementById('msg2')
var img = window.document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora < 12) {
    alert('Bom dia')
} else if (hora <18) {
    document.body.style.background = 'purple'
   
    
} else {
    document.body.style.background = 'blue'
}




}