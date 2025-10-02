let lista = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')


let count = lista.length; //3
let active = 0; //indice 0, é o morango
console.log(count)

next.onclick = ()=> {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    active++; //nova pagina


    //se ativo > limite, volta pro inicio ,indice 0
    if(active >= count){
        active = 0;
    }
    lista[active].classList.add('active') //proxima página recebe ativo

   
};

prev.onclick = ()=> {
    let activeOld= document.querySelector('.active')
    activeOld.classList.remove('active')


    if (active === 0) {
        active = count - 1;
    } else {
        active--;
    }
    lista[active].classList.add('active')

    
};