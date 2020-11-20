import React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import CourseCart from '../components/Cart/Coursecart'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About us" />
    <CourseCart courses={data.courses}/>
    <Dualinfoblock heading="Out Team" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"})
  {
    childImageSharp 
    {
      fluid 
      {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    } 
  }
  courses: allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description
                image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
