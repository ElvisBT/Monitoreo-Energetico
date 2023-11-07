// Conecta a la base de datos de Firebase
var cerrarSesionButton = document.getElementById('cerrar-sesion');

    cerrarSesionButton.addEventListener('click', function() {
        var user = firebase.auth().currentUser;
        if (user) {
            // El usuario está autenticado, procede a cerrar sesión.
            firebase.auth().signOut().then(function() {
                // Cierre de sesión exitoso, redireccionar o realizar otras acciones.
                window.location.href = 'index.html';
            }).catch(function(error) {
                // Manejar errores si ocurren durante el cierre de sesión.
                console.error('Error al cerrar sesión: ', error);
            });
        } else {
            // El usuario no está autenticado, no es necesario cerrar sesión.
            console.log('El usuario no está autenticado.');
        }
    });