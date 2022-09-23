const $formLogin = document.querySelector('#formLogin');
const $username = document.querySelector('#username');
const $password = document.querySelector('#password');

$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = $username.value;
    const contrasenia = $password.value;


    if(username != '' && password != '') {
        fetch('https://api-shades-test.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify( {
                correo,
                contrasenia
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');

            if(token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);
                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                location.href = path +  'index.html';
            } else {
                localStorage.removeItem('token');
                alert('Correo electrónico o contraseña incorrecta')

                
            }
        })
    }

}) 