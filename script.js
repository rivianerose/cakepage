var menuBtn = document.querySelector('#menu-aberto'); 
        menuBtn.addEventListener('click',()=>{
            let itemsMenu = document.querySelector('#menu-fechado');
            if(itemsMenu.classList.contains('show')){
                itemsMenu.classList.remove('show')   
               itemsMenu.classList.add('hide')   
            } else {
                itemsMenu.classList.remove('hide')   
               itemsMenu.classList.add('show')   
            }
          
        });