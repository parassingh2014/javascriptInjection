document.cookie = "rmarwaha@noemail.com"
document.cookie = "PassWord"
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	var query = new URL(window.location).searchParams.get('query1')
    var query2 = new URL(window.location).searchParams.get('query2')
    var query3 = new URL(window.location).searchParams.get('query3')
	document.getElementById('query-input1').value = query;
    document.getElementById('query-input2').value = query2;
	document.getElementById('query-output').innerHTML = query + " Name: " + query2;
    localStorage.setItem("Query", query);
    localStorage.setItem("Query2", query2);    
}
