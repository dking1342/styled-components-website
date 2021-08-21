import React from 'react'
import { content } from './productdata'
import { ProductsContainer, Productsh1, ProductsWrapper, ProductsCard, ProductsIcon, Productsh2, Productsp } from './ProductsElements'

interface ProductsProps {

}

const ProductsPage: React.FC<ProductsProps> = () => {



    return(
        <ProductsContainer id="products">
            <Productsh1>Our Products</Productsh1>
            <ProductsWrapper>
                {
                    content.map(item=>(
                        <ProductsCard key={item.id}>
                            <ProductsIcon src={item.img} />
                            <Productsh2>{item.heading}</Productsh2>
                            <Productsp>{item.text}</Productsp>
                        </ProductsCard>
                    ))
                }
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default ProductsPage