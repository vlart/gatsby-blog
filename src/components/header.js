import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from "gatsby-image"

// import logo from "../images/cl.png"


const HeaderWrapper = styled.div`
    background: #524763;
    margin-bottom: 1.45rem;
    overflow: hidden;
    position: relative;
    height: ${({isHome}) => (
      isHome? "50vh" : "25vh" 
    )};
    h1{
      img{
        height: 80px;
      }
    }
    h2{
      color:white;
    }

    
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index:2;
  display: flex;
  justify-content: space-between; 
`
const MainNav = styled.nav`
    ul {
      list-style: none;
      display: flex;
      padding-top:15px;
      li {
        margin-left:10px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        a {
          text-decoration: none;
          color: #fff;
          &:hover {
            border-bottom: 3px solid #524763;
          }
      }
    }
`


class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    const {location} = this.props
    if (location.pathname !== prevProps.location.pathname) {
    if (this.props.location.pathname === '/') {
      this.wrapper.animate([{height: "25vh" }, {height: "50vh" }], {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.86, 0, 0.07, 1)",
        iterations: 1
      })
    } else {
      this.wrapper.animate([{height: "50vh" }, {height: "25vh" }], {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.86, 0, 0.07, 1)",
        iterations: 1
      })
    }
  }
}
  render() {
    const { siteTitle, data, location} = this.props
    return (
      <HeaderWrapper 
        isHome={location.pathname ==='/'}
        ref= {(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
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
          <h2>{data.site.siteMetadata.desc} </h2>

            <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
          </HeaderContainer>
          <Img 
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%' ,
              height: '100%' ,
              opacity: 0.4
            }}
            sizes={data.background.sizes} />
        </HeaderWrapper>
    );
  }
}

export default Header;


