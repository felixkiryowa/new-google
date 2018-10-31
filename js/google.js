document.getElementById("search").addEventListener("click",function(){
    var search_term = document.getElementById("search_term").value;
    if(search_term == "") {
        alert("Please enter a search term");
    }else {
        alert(search_term);
    }
});