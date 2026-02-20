function goRegister(){
  window.location.href="register.html";
}
function goLogin(){
  window.location.href="index.html";
}

function register(){
  const user=document.getElementById("regUser").value;
  const pwd=document.getElementById("regPwd").value;

  if(!user||!pwd){
    alert("请填写完整信息");
    return;
  }

  localStorage.setItem("user",user);
  localStorage.setItem("pwd",pwd);

  window.location.href="home.html";
}

function login(){
  const user=document.getElementById("loginUser").value;
  const pwd=document.getElementById("loginPwd").value;

  const savedUser=localStorage.getItem("user");
  const savedPwd=localStorage.getItem("pwd");

  if(!savedUser){
    window.location.href="register.html";
    return;
  }

  if(user===savedUser && pwd===savedPwd){
    window.location.href="home.html";
  }else{
    alert("账号或密码错误");
  }
}
