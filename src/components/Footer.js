import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from "../context";

const Footer = () => {
  return (
    <ProductConsumer>
      {value => {
        return <FooterWrapper>
          <div className="container py-3">
            <div className="row">
              <div className="col-md-6">
                <p className="text-capitalize">copyright &copy; Darko Radovic {new Date().getFullYear()} . all rights reserved{""}</p>
              </div>
              <div className="col-md-6 d-flex justify-content-around">
                {value.socialIcons.map(icon => {
                  return(
                  <a href={icon.url} key={icon.id}>{icon.icon}</a>
                  )
                })}
              </div>
            </div>
          </div>
        </FooterWrapper>
      }}
    </ProductConsumer>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;