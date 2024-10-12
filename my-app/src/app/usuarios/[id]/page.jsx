import axios from "axios";

// Función para obtener los detalles de un usuario específico desde la API
async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default async function UsuarioDetalles({ params }) {
    const usuario = await getUsuario(params.id); // Obtiene el id de los params de la URL

    return (
        <div>
            <h1>Detalles del Usuario</h1>
            <p><strong>ID:</strong> {usuario.id}</p>
            <p><strong>Nombre:</strong> {usuario.name}</p>
            <p><strong>Username:</strong> {usuario.username}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Teléfono:</strong> {usuario.phone}</p>
            <p><strong>Sitio Web:</strong> {usuario.website}</p>
            <h2>Dirección:</h2>
            <p><strong>Calle:</strong> {usuario.address.street}</p>
            <p><strong>Suite:</strong> {usuario.address.suite}</p>
            <p><strong>Ciudad:</strong> {usuario.address.city}</p>
            <p><strong>Código Postal:</strong> {usuario.address.zipcode}</p>
            <h2>Geolocalización:</h2>
            <p><strong>Latitud:</strong> {usuario.address.geo.lat}</p>
            <p><strong>Longitud:</strong> {usuario.address.geo.lng}</p>
            <h2>Compañía:</h2>
            <p><strong>Nombre:</strong> {usuario.company.name}</p>
            <p><strong>Eslogan:</strong> {usuario.company.catchPhrase}</p>
            <p><strong>BS:</strong> {usuario.company.bs}</p>
        </div>
    );
}
