import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import logo from "./logo.svg"


const HeaderWrapper = styled.div`
    background: #524763;
    margin-bottom: 1.45rem;
    h1  {
      img {
        height:80px;
      }
    }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({siteTitle, data}) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}{/* <img src={link} alt=""/> */}
        </Link>
      </h1>
    <h4>{data.site.siteMetadata.desc}" </h4>

      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
