function show() {
    console.log(document.querySelector("#handle").value ) ;
    let add = document.querySelector("#handle").value ;
    if(localStorage.getItem("cfUrl").includes(add)) {
        alert("You are already added in the leaderboard") ;
    } else {
        //localStorage.setItem("hand" , add) ;
        localStorage.setItem("cfUrl",localStorage.getItem("cfUrl")+";"+add);
        window.location = "index.html" ;
    }
}
