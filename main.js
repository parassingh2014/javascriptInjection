document.cookie = "username=rmarwaha@noemail.com";
document.cookie = "password=afe_password";
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	var query = new URL(window.location).searchParams.get('query')
   // var query2 = new URL(window.location).searchParams.get('query2')
    // var query3 = new URL(window.location).searchParams.get('query3')
	document.getElementById('query-input').value = query;
    //document.getElementById('query-input2').value = query2;
	document.getElementById('query-output').innerHTML = query //+ "  " + query2;
    localStorage.setItem("Number", query);
    //localStorage.setItem("InstituitionName", query2);    
}
/* <img src onerror="var username = localStorage.getItem('Number'); console.log(username);">
<img src onerror="var username = localStorage.getItem('Number'); console.log(username);">
<a href ="#" onclick="alert(JSON.stringify(localStorage))">Click</a>

<img src onerror="console.log(document.cookie)"> */

/* <a href ="#" onclick="alert(JSON.stringify(localStorage))">Click</a> */