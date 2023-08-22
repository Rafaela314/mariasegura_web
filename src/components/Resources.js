import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        let resourcesList = [
            {
                id:1,
                title: "What is harressment",
                description: "a trainning about haressment",
                created_at: "1987-03-13",
                cover: "harressment01",
                type: "video",
                runtime: "116",
                classification: "thrid-party",
                link: "www.google.com",
                file: "",
            }, 
            {
                id:2,
                title: "harressment book",
                description: "book about haressment",
                created_at: "1987-03-13",
                cover: "harressment02",
                type: "pdf",
                runtime: "5",
                classification: "authoral",
                link: "www.bucket.com",
                file: "",
            }, 

        ];

        setResources(resourcesList)
    }, []);


    return(
        <>
        <div className="text-center">
            <h2>Recursos</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map((m) => (
                    <tr key={m.id}>
                        <td>
                            <Link to={`/resources/${m.id}`}>
                                {m.title}
                            </Link>
                        </td>
                        <td>{m.description}</td>
                    </tr>
                    ))}
                </tbody>
            </table> 
        </div>
        </>
    )
}

export default Resources;