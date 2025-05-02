const btn = document.getElementById('arriba');

window.addEventListener('scroll',()=>{
    boton();
}    )
function boton(){
    if(window.scrollY>80){
        btn.style.display ='block'       
    }
    else{
        btn.style.display = 'none'
    }
}
btn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

