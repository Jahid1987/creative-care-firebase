// Top nav 
const controllTopNav = (e) => {
  sessionStorage.setItem('topNavItem', e.target.text)
}


// toggle Active class of all links 
const subNavItems = document.querySelector('#subnav').children;

Array.from(subNavItems).forEach(item => {
  // console.log(item.pathname.replace('.html', '').replace('/', ''))
  if(location.pathname.indexOf(item.pathname.replace('.html', '').replace('/', '')) !== -1){
    item.classList.add('active')
    // sessionStorage.setItem('subjectName', item.pathname)
  }
})


// Sign up form
function openSignupForm() {
    closeLoginForm();
    document.getElementById("singupForm").style.display = "block";
  }
  
  function closeSignupForm() {
    document.getElementById("singupForm").style.display = "none";
  }

// Login form 
function openLoginForm() {
    closeSignupForm();
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
  }
// user profile
function openUserProfile() {
    closeLoginForm();
    document.getElementById("userProfile").style.display = "block";
  }
  
  function closeUserProfile() {
    document.getElementById("userProfile").style.display = "none";
  }
