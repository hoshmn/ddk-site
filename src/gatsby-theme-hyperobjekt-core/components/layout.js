import React, { useContext, useEffect } from "react"
import { useLocation } from "@reach/router"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import {
  Header,
  Content,
  Footer,
  SiteContext,
  Helmet,
} from "gatsby-theme-hyperobjekt-core"
import Page from "./layout/page"
// import Header from "./header/header"
import Main from "./layout/main"
// import Content from "./layout/content"
// import Footer from "./footer/footer"
// import { SiteContext } from "../utils/site-context"
// import Helmet from "./helmet"
const Layout = ({
  title,
  description,
  keywords,
  image,
  lang,
  isBlogPost,
  location: fmLocation,
  explorer = false,
  children,
  ...props
}) => {
  console.log("new layout, ", explorer)
  const { isHome, setIsHome } = useContext(SiteContext) // eslint-disable-line
  const location = useLocation()
  // add classes based on the page location
  const pageClasses = isHome
    ? "page--home"
    : location.pathname
        .replace(/^\/+|\/+$/g, "")
        .split("/")
        .map((name) => "page--" + name)
  // track home status in site context
  const home = location.pathname === "/"
  useEffect(() => {
    if (home) {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, []) // eslint-disable-line
  if (!explorer) {
    return (
      <Page className={pageClasses} {...props}>
        <Helmet
          {...{
            title,
            description,
            keywords,
            image,
            lang,
            isBlogPost,
            fmLocation,
          }}
        />
        <SkipNavLink />
        <Header />
        <Main>
          <SkipNavContent />
          <Content>
            {children}
            <h1>mother fucker!!!!</h1>
          </Content>
        </Main>
        <Footer />
      </Page>
    )
  } else {
    return (
      <Page className={pageClasses} {...props}>
        <Helmet
          {...{
            title,
            description,
            keywords,
            image,
            lang,
            isBlogPost,
            fmLocation,
          }}
        />
        {children}
      </Page>
    )
  }
}

export default Layout
