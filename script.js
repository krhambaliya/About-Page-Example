function create_account() {
  var n = document.getElementById("n1").value;
  var e = document.getElementById("e1").value;
  var p = document.getElementById("p1").value;
  var cp = document.getElementById("p2").value;
  var url = document.getElementById("url").value;
  var yes = document.getElementById("yes").value;
  var no = document.getElementById("no").value;
  
  var letters = /^[A-Za-z]+$/;
  var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  //other validations required code
  if (n == "" || e == "" || p == "" || cp == "" || url ==""){
    alert("Enter each details correctly");
  } else if (!letters.test(n)) {
    alert("Name is incorrect must contain alphabets only");
  } else if (!urlRegex.test(url)) {
    alert("Please enter perfect URL");
  } else if (!email_val.test(e)) {
    alert("Invalid email format please enter valid email id");
  }  else if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
    alert("Need to do yes for more Process");
  } else {
    alert("Thank You For Registration With Us");
  }
}
