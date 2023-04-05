function login() {
    const email = document.querySelector('.box[type="email"]').value;
    const password = document.querySelector('.box[type="password"]').value;
    const rememberMe = document.querySelector('#remember-me').checked;
  
    console.log(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
  }
  
  const loginButton = document.querySelector('.btn');
  loginButton.addEventListener('click', login);
  
  // Select an existing element or create a new one to append the login button, email, and password to
  const textContent = document.querySelector('#some-element');
  
  // Append the login button, email, and password to the selected element
  textContent.appendChild(loginButton);
  textContent.appendChild(document.createElement('br')); // Add a line break between elements
  textContent.appendChild(document.createTextNode('Email: '));
  textContent.appendChild(document.createTextNode(email));
  textContent.appendChild(document.createElement('br')); // Add a line break between elements
  textContent.appendChild(document.createTextNode('Password: '));
  textContent.appendChild(document.createTextNode(password));
  

















 0




    