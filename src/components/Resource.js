import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Resource = () => {

    const [resource, setResource] = useState({});

    let { id } = useParams();

    useEffect(() => {
        let myresource =  {
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
        }
        setResource(myresource);
    }, [id])
    
    return(
        <div>
            <h2>{resource.title}</h2>
            <small><em>{resource.description}</em></small>
            <p>{resource.link}</p>
          
            <hr /> 
        </div>
    )
}

export default Resource;