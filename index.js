// const url = "https://cat-fact.herokuapp.com/facts" ;

var url =  "https://codeforces.com/api/user.info?handles=messi_10db;saurabhchaubey112;omium;mhtkrag;Vedant_Singh;kkrishna694;Rituraj379" ;
// localStorage.setItem("cfUrl", url) ;

// const getcf =  async () => {
//     console.log("getting data.....") ;
//     let res =  await fetch(url) ;
//     // console.log(res) ;
//     let data = await res.json() ;
//     // console.log(data) ;
//     // console.log(data[0].rating) ;

//     const arr = (data.result) ;
//     console.log(arr) ;

// }

function addUser(name, rating) {
    let user = document.createElement("div") ;
    user.className = "user" ;

    let user_name = document.createElement("div") ;
    user_name.className = "name" ;
    let nam = document.createElement("h2") ;
    nam.innerText = name ;
    user_name.append(nam) ;
    user.append(user_name) ;

    let user_rating = document.createElement("div") ;
    user_rating.className = "rating" ;
    let rate = document.createElement("h2") ;
    rate.innerText = rating ;
    user_rating.append(rate) ;
    user.append(user_rating) ;

    document.querySelector(".container").append(user) ;

}

const getCf = async () => {
    let res = await fetch(localStorage.getItem("cfUrl")) ;
    let data = await res.json() ;

    console.log(res) ;

    console.log(data) ;

    console.log(data.result) ;

    if(data.status != "OK") {
        let wrong=localStorage.getItem("cfUrl");
        let index=wrong.lastIndexOf(";");
        localStorage.setItem("cfUrl",wrong.substring(0,index));
        alert("Wrong cf handle entered!!!") ;
        window.location.assign("register.html") ;
    } else {
        let users = data.result ;
        users.sort((a,b) => b.rating - a.rating) ;
        users.forEach(user => {
        if("firstName" in user) {
            console.log(user.firstName , " : " , user.rating) ;
            addUser(user.firstName, user.rating) ;
        } else {
            console.log(user.handle, " : " , user.rating) ;
            addUser(user.handle, user.rating) ;
        }
        
    });
    }
    
}


// var n = localStorage.getItem("hand") ;
// var new_url = localStorage.getItem("cfUrl") + `;${n}` ;
// localStorage.setItem("cfUrl", new_url) ;
// console.log(new_url) ;

getCf() ;





