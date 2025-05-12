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

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }

    });
},{
 threshold:0.3   
});

const sectionBrand = document.querySelector('.brand')
if(sectionBrand){
    observer.observe(sectionBrand)
}