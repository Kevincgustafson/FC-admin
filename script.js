function openSidebar () {
    console.log('test');
    var x = document.querySelector ("#sidebar-wrapper");
    if (x !== null) {
        if (x.classList.contains('toggled')) {
            x.classList.remove('toggled');
        } else {
          x.classList.add('toggled');  
        }
        
    }
     return true;
    
}
    

