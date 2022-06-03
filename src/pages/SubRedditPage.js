import React from "react";
import { useParams } from "react-router-dom";

function SubRedditPage(){
    const {subRedditId} = useParams();

    return(
        <>
            <p>Ik ben SubReddit pagina: {subRedditId}.</p>
        </>
    );
}

export default SubRedditPage;