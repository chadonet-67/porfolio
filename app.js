const sections = document.querySelectorAll('.section')
const SectBtns = document.querySelectorAll('.controlls')
const SectBtn = document.querySelectorAll('.control')
const allSects = document.querySelector('.main-container')


function pageTransitio(){
    for(let i=0; i<SectBtn.length; i++){
        SectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].classList= currentBtn[0].className.replace('active-btn',' ')
            this.className +=' active-btn'
        })
    }
    // section active
    allSects.addEventListener('click',(e)=>{
        const id = e.target.dataset.id
        // remove selected from other btns
        if(id){
            SectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })

    //dark theme
    const themeBtn = document.querySelector('.theme-btn')
     themeBtn.addEventListener('click',()=>{
         let element = document.body;
         element.classList.toggle('light-mode')
     })
}

pageTransitio();