
window.onload = function(){
    
    
    const search = document.getElementsByTagName('button')
    search[0].addEventListener("click", function(event){
        var httpRequest = new XMLHttpRequest();
       
        httpRequest.onreadystatechange = function(){
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
                document.getElementById('result').innerHTML = this.responseText;
            }
        };
        httpRequest.open("GET", "superheroes.php",true);
        httpRequest.send();
        let item = document.getElementById('search').value;
        
    event.preventDefault()   
    });
    preventDefault()
}
/*

        */