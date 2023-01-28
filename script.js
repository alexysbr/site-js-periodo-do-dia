function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  // hora = 8
    
    if (hora >= 0 && hora < 7){
        //BOA MADRUGADA!
        msg.innerHTML = `Agora são ${hora} horas.<p><h4>BOA MADRUGADA!</h4></p>`
        img.src = 'amanhecer.png'
        document.body.style.background = 'darkslateblue'
    } else if (hora >= 7 && hora < 12){
         //BOM DIA!
         msg.innerHTML = `Agora são ${hora} horas.<p><h4>BOM DIA!</h4></p>`
         img.src = 'manha.png'
         document.body.style.background = 'aqua'
    } else if (hora >= 12 && hora <= 18){
        //BOa TARDE!
        msg.innerHTML = `Agora são ${hora} horas.<p><h4>BOA TARDE!</h4></p>`
        img.src = 'tarde.png'
        document.body.style.background = 'darkorange'
    } else {
        //BOA NOITE!
        msg.innerHTML = `Agora são ${hora} horas.<p><h4>BOA NOITE!</h4></p>`
        img.src = 'noite.png'
        document.body.style.background = 'black'
    }
}