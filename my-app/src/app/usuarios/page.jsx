import axios from "axios";
import Link from "next/link";

// Función que obtiene los usuarios desde la API de JSONPlaceholder
async function getUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await getUsuarios(); // Llama a la función para obtener los usuarios
    
    return (
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>
                                {/* Hipervínculo con el nombre que lleva a la página de detalles del usuario */}
                                <Link href={`/usuarios/${usuario.id}`}>
                                    {usuario.name}
                                </Link>
                            </td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
