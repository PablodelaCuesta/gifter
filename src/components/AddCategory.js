import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    /**
     * El estado tiene que contener algun valor para saber a futuro de que tipo de dato estamos manipulando
     */
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {

        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        /**
         * Una propiedad de set(useState) es que nos permite acceder a las categorias
         */

        if (inputValue.trim().length > 2) {
            // Validacion
            setCategories( cats => [inputValue, ...cats ])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}