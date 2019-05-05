import React from 'react'
import styled from "styled-components";
import { ProductConsumer } from "../../context";

const ProductFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const { search, minPrice, maxPrice, company, price, shipping, handleChange, storeProducts } = value;

        /* let companies = storeProducts.map(item => item.company);
        console.log(companies);  jer ovde ce da nam se ponavljaju kompanije npr: gooogl nikkon nikkon */

        let companies = new Set()
        companies.add('all');
        for(let product in storeProducts){
          companies.add(storeProducts[product]['company'])
        }
        //console.log(companies);
        companies = [...companies]

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                <div>
                  <label htmlFor="search">search products</label>
                  <input type="text" name="search" id="search" onChange={handleChange} value={search} className="filter-item"></input>
                </div>

                <div>
                  <label htmlFor="company">company</label>
                  <select name="company" id="company" onChange={handleChange} value={company} className="filter-item">
                    {companies.map((company, index) => {
                      return <option key={index} value={company}>{company}</option>
                    })}
                  </select>
                </div>

                <div>
                  <label htmlFor="price"><p className="mb-2">product price: <span>€ {price}</span></p></label>
                  <input type="range" name="price" id="price" min={minPrice} max={maxPrice} className="filter-price" value={price} onChange={handleChange}></input>
                </div>

                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input type="checkbox" name="shipping" id="shipping" onChange={handleChange} checked={shipping && true} />
                  </div>
              </FilterWrapper>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

export default ProductFilter;

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;