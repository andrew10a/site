function theme(){
    const toggleTheme = document.querySelector('.toggle-theme') 
    let el = document.documentElement

    toggleTheme.addEventListener('click', () =>{
       
        if(el.hasAttribute('data-theme')){
            el.removeAttribute('data-theme')
            localStorage.removeItem('theme')
        } else{
                el.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            }
        
    })
    if(localStorage.getItem('theme') !== null){
        el.setAttribute('data-theme', 'dark')
    }
}
theme()

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
