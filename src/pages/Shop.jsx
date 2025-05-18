import React from 'react'
import { MdTableRows } from 'react-icons/md'
import { RiLayoutGrid2Fill } from 'react-icons/ri'
import products from '../assets/productslist'
import ProductCard from '../components/ProductCard'
const Shop = () => {
  return (
    <section  className=''>
        <div className=''>
            <div>
                <span>Categorie</span>
                <ul>
                    <li>ALL</li>
                    <li>SMARTPHONE</li>
                    <li>COMPUTERS</li>
                    <li>CAMERAS</li>
                    <li>ON SALES</li>
                </ul>
            </div>
            <div>
                <div>
                <RiLayoutGrid2Fill />
                <MdTableRows />
                </div>
                <select name="" id="">
                    <option value="">low to high</option>
                    <option value=""> high to low </option>
                    <option value=""> best seller </option>
                    <option value=""> New products</option>
                </select>
            </div>
        </div>
        <div>
            {products.map((product , index)=>{
                
                    <ProductCard product={product} key={index}/>
                

            })}
        </div>
    </section>
  )
}

export default Shop