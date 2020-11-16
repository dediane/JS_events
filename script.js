//fonctionnalité 1 & 1-bis
function clique_footer(){
    var x = 0;

    function actionFooter(){
        x++;
        console.log("clique " + x + " fois") 
    }
    document.getElementsByTagName('footer')[0].addEventListener("click", actionFooter);
}

//fonctionnalité 2
function collapse_hamburger()
{
    var headerNav = document.getElementById("navbarHeader");
    var buttonNav = document.querySelector("button.navbar-toggler");
    buttonNav.addEventListener("click", () => {
        headerNav.classList.toggle("collapse");
    });
}
collapse_hamburger();

//fonctionnalité 3
function edit_red(){
    var CardElement = document.getElementsByClassName('card')[0]
    var ButtonElement = document.querySelector(".btn-outline-secondary");
    ButtonElement.addEventListener("click", () =>{
        CardElement.style="color:red"
    });
}
edit_red();

//fonctionnalité 4
function edit_green(){
    var CardElement= document.getElementsByClassName('card')[1]
    var ButtonElement = CardElement.querySelector(".btn-outline-secondary");
    var flag = false;
    ButtonElement.addEventListener("click", () =>{
        if (flag === false)
        {
            CardElement.style="color:green";
            flag = true;
        }
        else
        {
            CardElement.style="color:black";
            flag = false;
        }
    });
}
edit_green();

//fonctionnalité 5
function remove_bootstrap(){
    var getNav = document.querySelector('header')
    getNav.addEventListener("dblclick", () => {
        if (document.styleSheets[0].disabled === true)
        {
            document.styleSheets[0].disabled = false;
        }
        else
        {
            document.styleSheets[0].disabled = true;
        }
    });
}
remove_bootstrap();

