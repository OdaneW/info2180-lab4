
window.onload = function(){
    
    
    const search = document.getElementsByTagName('button')
    search[0].addEventListener("click", function(){
        var httpRequest = new XMLHttpRequest();
       
        httpRequest.onreadystatechange = function(){
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
                alert(this.responseText)
            }
        };
        httpRequest.open("GET", "superheroes.php",true);
        httpRequest.send();
        
        
    });

    
}
/*

        */