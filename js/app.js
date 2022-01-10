
    let ham =document.querySelector('.ham');
    let times =document.querySelector('.times');
    let mobnav =document.querySelector('.mob-nav');

     


    ham.addEventListener('click',function(){
        mobnav.classList.add('open');
    })

    times.addEventListener('click',function(){
        mobnav.classList.remove('open');

    })