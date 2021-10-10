
    let navigationBar = document.getElementById("navigationBar");
    
    function showmenu(){
        navigationBar.style.top = "0";
        navigationBar.classList.add('nav__list__show');
    }

    function hidemenu(){
        navigationBar.style.top = "-20rem";
        navigationBar.classList.remove('nav__list__show');
    }