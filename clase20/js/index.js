function buscar(clave){

    const usersFiltered = USERS_DATA.data.filter(user => user.first_name.includes(clave) || user.last_name.includes(clave))

    const htmlUsers = Users(usersFiltered);
    document.getElementById('users').innerHTML = htmlUsers;
}

function render(){
    const htmlNavbar = Navbar('Mi primer pseudocomponente', buscar);
    document.getElementById('navbar').innerHTML = htmlNavbar;

    const htmlUsers = Users(USERS_DATA.data);
    document.getElementById('users').innerHTML = htmlUsers;
}

render();