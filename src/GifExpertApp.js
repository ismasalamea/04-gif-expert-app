import { useState } from "react"
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One punch'])

    //const handleAdd = () => {
    //    setCategorias( cats => ([...categorias, 'HunterxHunter']));
    //}


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategorias={setCategorias} />
            <ol>
                {
                    categorias.map(categoria => (
                        <GiftGrid 
                            key = { categoria }
                            categoria={categoria}
                        />
                    ))}
            </ol>
        </>

    )
}
