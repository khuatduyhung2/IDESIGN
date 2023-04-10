var searchBox=document.getElementById("search-bar");
        var Icon=document.getElementsByClassName("submit")[0];
        Icon.onclick=function(){
            searchBox.classList.toggle("active");
        }
        
        
        const buyBtns = document.querySelectorAll('.js-buy');
        const modelmuave = document.querySelector('.js-modelmuave');
        const closemmv = document.querySelector('.js-closemmv');
        const modelcontainer = document.querySelector('.js-modelcontainer');
        function showbuy(){
            modelmuave.classList.add('open');
        } 
        function hidebuy(){
            modelmuave.classList.remove('open');
        } 
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click',showbuy);
        }
        closemmv.addEventListener('click',hidebuy);
        modelmuave.addEventListener('click',hidebuy);
        modelcontainer.addEventListener('click',function(even){
            even.stopPropagation();
        })