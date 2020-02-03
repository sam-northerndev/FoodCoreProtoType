import React from "react"
// Utilities
import SEO from "../utils/seo"
// Components
import Layout from "../components/layout/Layout"
import LandingMenu from "../components/menu/LandingMenu"

const Index = () => (
  <Layout>
    <SEO title="Welcome" />
    <LandingMenu />
  </Layout>
)

export default Index
