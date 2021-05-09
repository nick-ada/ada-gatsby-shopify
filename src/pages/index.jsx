import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Navigation } from "../components/navigation"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  nav
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={container}>
        <h1 className={intro}>Welcome to the Future of Ada Diamonds</h1>
        <p className={callOut}>
          Goal of the new website is speed, speed, and more speed.
        </p>
        <p className={callToAction}>
          Gatsby + Shopify + Cloudinary + Builder.io
          
        </p>
        <Navigation className={nav} />
      </div>
      
    </Layout>
  )
}
