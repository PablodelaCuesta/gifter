import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const Gifter = () => {

    // Estructura de datos Inmutable
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState([])

    // const handleAdd = () => {
    //     /**
    //      * Lo mas interesante de este ejercicio es darse cuenta como se trabaja en React. En React trabajamos con estructuras de datos imnutables, por lo que deberemos de utilizar funciones que trabajan con estructuras inmutables. Para resolver este ejercicio se ha utilizado el operador Spread ... que nos permite obtener el array de categorias y agregarle el nuevo elemento al final o al principio.
    //      */
    //     // categories.push('Spiderman')
    //     setCategories( [...categories, 'Spiderman'] )

    // }

    return (
      <>
        <h2>Gifter</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>


        <ol>
            {
                categories.map( (category) =>  (
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ))
            }
        </ol>
      </>
    )
  
  }