import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['Android', 'iOS', 'Windows'];

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     // setCategories( ['Mac', ...categories]);
    //     setCategories( cats => [...cats, 'Mac']);
    // }

    return (
        <>
            <h2 className="title">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );

}

export default GifExpertApp;