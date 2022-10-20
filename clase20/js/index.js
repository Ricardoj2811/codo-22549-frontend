function buscar(clave) {

    const usersFiltered = USERS_DATA.data.filter(user => user.first_name.toLowerCase().includes(clave.toLowerCase()) || user.last_name.toLowerCase().includes(clave.toLowerCase()))

    const htmlUsers = Users(usersFiltered);
    renderComponent('users', htmlUsers);
}

function render() {
    const htmlNavbar = Navbar('Mi primer pseudocomponente', buscar);
    renderComponent('navbar', htmlNavbar);

    search(1);
}

function search(page) {
    //ahora invoco a 
    
    const url = ` https://reqres.in/api/users${page >=1 ? `?page=${page}` : ''}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const htmlUsers = Users(data.data);
            renderComponent('users',htmlUsers);
            
            //ahora "cargo" el componente Paginator()
            const htmlPaginator = Paginator(data);
            renderComponent('paginator',htmlPaginator);
        }
    );
}

function renderComponent(id, component) {
    document.getElementById(id).innerHTML = component;
}

render();