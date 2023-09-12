
import { useSelector } from 'react-redux'
import { Categoria } from './Categoria'
import { CategoriasContainer } from './StyledCategorias'

export const Categorias = () => {

  const categories = useSelector(state => state.categories.categories)
  return (
    <CategoriasContainer>
        {
           categories.map((category)=>(<Categoria key={category.id} {...category}/>)) 
        }

    </CategoriasContainer>
  )
}
