import axios from "axios";
async function getUniversidades() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Universidades() {
    const universidades = await getUniversidades(); // Rename the variable to avoid conflict
    return (
        <>
            <h1>Universidades</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Universidad</th>
                        <th>Sitio Web</th>
                    </tr>
                </thead>
                <tbody>
                    {universidades.map((universidad, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td> {/* Correctly render the id */}
                            <td>{universidad.name}</td>
                            <td>{universidad.web_pages[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}