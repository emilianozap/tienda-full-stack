import React from 'react'
import { CardCategoria } from './StyledCategorias'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/Categories/categoriesSlice'

export const Categoria = ({img, title, category}) => {

  const selectedCategory = useSelector (state => state.categories.selectedCategory )

  const dispatch = useDispatch()

  return (
    <CardCategoria
    selected = {category === selectedCategory}
    onClick={()=> dispatch(selectCategory(category))}
    whileTap={{scale: 0.95}}>
        <img src={img} alt={title} />
        <h2>{title}</h2>




    </CardCategoria>
  )
}
