const pass = document.getElementById('password');
        const confirm = document.getElementById('confirmPassword');
        const error = document.getElementById('errors');
        const formRegister = document.getElementById('register');
        const usrName = document.getElementById('username');

        formRegister.addEventListener('submit', (e) => {

            let messages = []
            if (pass.value != confirm.value) {
                messages.push("password mismatch");



            }

            if (messages.length > 0) {
                e.preventDefault()
                error.textContent = messages.join(', ');

            }

        })