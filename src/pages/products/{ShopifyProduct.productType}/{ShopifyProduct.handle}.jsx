import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../../components/layout"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo"
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import {
  //productBox,
  productDetailsWrapper,
  container,
  header,
  productImageWrapper,
  productImageList,
  productImageListItem,
  scrollForMore,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  labelFont,
  breadcrumb,
  tagList,
  addToCartStyle,
  metaSection,
  productDescription,
  productDetailsTabs,
  productTabs,
  productDetails,
  navBreadcrumbLink,
  tabContent,
  tabCurrent,
  productPrice,
  inquireButton

} from "./product-page.module.css"

export default function Product({ data: { product, suggestions } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1

  return (
    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <main>
        <div className={container}>
        <div>
          <div className={productDetailsWrapper}>
            {hasImages && (
              <div className={productImageWrapper}>
                <div
                  role="group"
                  aria-label="gallery"
                  aria-describedby="instructions"
                >
                  <ul className={productImageList}>
                    {images.map((image, index) => (
                      <li
                        key={`product-image-${image.id}`}
                        className={productImageListItem}
                      >
                        <GatsbyImage
                          objectFit="contain"
                          loading={index === 0 ? "eager" : "lazy"}
                          alt={
                            image.altText
                              ? image.altText
                              : `Product Image of ${title} #${index + 1}`
                          }
                          image={image.gatsbyImageData}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                {hasMultipleImages && (
                  <div className={scrollForMore}>
                    <span aria-hidden="true">←</span> scroll for more{" "}
                    <span aria-hidden="true">→</span>
                  </div>
                )}
              </div>
            )}
            {!hasImages && (
              <span className={noImagePreview}>No Preview image</span>
            )}

            <div className={productDetails}>
              <div className={breadcrumb}>
                <Link to="/bridal-jewelry-home/" className={navBreadcrumbLink}>Bridal</Link>
                <Link to="/lab-diamond-engagement-rings-all" className={navBreadcrumbLink}>Engagement Rings</Link>
                <Link to="/solitaire-engagement-rings/" className={navBreadcrumbLink}>Solitaires</Link>
              </div>
              <h1 className={header}>{title}</h1>
              <div className={productDetailsTabs}>
                <ul className={productTabs}>
                    <li className={tabCurrent} data-tab="tab-details">DETAILS</li>
                    <li class="tab-link middle-tab" data-tab="tab-price">PRICING</li>
                    <li class="tab-link" data-tab="tab-share">SHARE</li>
                </ul>
                <div class="tabs-wrapper tabs-3">
                    <div id="tab-details" className={tabContent} >
                      <div className={productPrice} >Setting from {price}</div>
                      <p className={productDescription}>{description}</p>
                      {/*<div class="ds-info-block">
                          An absolute classic, the Six Prong Solitaire can be customized with or without a knife edge. Band widths available from 1.8 - 3.5mm.&nbsp;
                          <div class="info-label">
                            DELIVERY TIME    
                            <span class="ds-info-data-tts">
                                1-2 Weeks
                                <div class="tooltip">
                                  <img src="https://www.adadiamonds.com/assets/questionmark.png" height="10" width="10" />
                                  <span class="tooltiptext">
                                      Delivery time is an estimate<br />of production and shipping time<br />following final design approval.
                                      <hr />
                                      In a hurry? Rush services available<br />or choose a <a href="/ready-to-ship-jewelry">Ready to Ship</a> piece.
                                  </span>
                                </div>
                            </span>
                          </div>
            </div>
            onPress={showInquireModal}
            
            */}

            <div className={inquireButton}>
            <button
  
  title="Inquire"
  color="#841584"
  accessibilityLabel="Inquire with a Diamond Concierge"
>INQUIRE</button>
</div>
                      {/*<div class="sqs-block button-block sqs-block-button pdp-details-inquire-button" data-block-type="53">
                          <div class="sqs-block-content">
                            <div class="ds-view-option sqs-block-button-container--center" data-alignment="center" data-button-size="small"><a onclick="showInquireModal()" class="sqs-block-button-element--small sqs-block-button-element match-height" id="inquire-anchor">INQUIRE</a></div>
                          </div>
          </div>*/}
          </div>
                    <div id="tab-price" class="tab-content">
                      {/*<div class="ds-info-block">
                          <div class="tab-pricing-table">
                            <table>
                                <tbody>
                                  <tr>
                                      <td>$1,500<br />(Setting Only)</td>
                                      <td>14kt Gold</td>
                                  </tr>
                                  <tr>
                                      <td>$1,600<br />(Setting Only)</td>
                                      <td>18kt Gold</td>
                                  </tr>
                                  <tr>
                                      <td>$1,800<br />(Setting Only)</td>
                                      <td>Platinum</td>
                                  </tr>
                                </tbody>
                            </table>
                          </div>
                      </div>
                      <div class="sqs-block button-block sqs-block-button" data-block-type="53">
                          <div class="sqs-block-content">
                            <div class="ds-view-diamond-price sqs-block-button-container--center" data-alignment="center" data-button-size="small"><a class="sqs-block-button-element--small sqs-block-button-element match-height" id="pricing-button" onclick="openPricingModal()">SEE CENTER STONE PRICING</a></div>
                          </div>
                      </div>
                      <div class="sqs-block button-block sqs-block-button pdp-details-inquire-button" data-block-type="53">
                          <div class="sqs-block-content">
                            <div class="ds-view-option sqs-block-button-container--center" data-alignment="center" data-button-size="small"><a onclick="showInquireModal()" class="sqs-block-button-element--small sqs-block-button-element match-height" id="inquire-anchor">INQUIRE</a></div>
                          </div>
            </div>*/}
                    </div>
                    <div id="tab-share" class="tab-content product-share-tab built-in-buttons">
                      {/*<h3 class="dah-title">Send a Hint</h3>
                      <div class="dah-body">
                          
                      </div>
                      <h3 class="share-title">Share</h3>
                      <div class="ProductItem-details-share">

                      </div>*/}   
                    </div>
                </div>
              </div>


              
              {/*<h2 className={priceValue}>
                <span>{price}</span>
            </h2>
              <fieldset className={optionsWrapper}>
                {hasVariants &&
                  options.map(({ id, name, values }, index) => (
                    <div className={selectVariant} key={id}>
                      <select
                        aria-label="Variants"
                        onChange={(event) => handleOptionChange(index, event)}
                      >
                        <option value="">{`Select ${name}`}</option>
                        {values.map((value) => (
                          <option value={value} key={`${name}-${value}`}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
              </fieldset>
              <div className={addToCartStyle}>
                <NumericInput
                  aria-label="Quantity"
                  onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                  onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                  onChange={(event) => setQuantity(event.currentTarget.value)}
                  value={quantity}
                  min="1"
                  max="20"
                />
                <AddToCart
                  variantId={productVariant.storefrontId}
                  quantity={quantity}
                  available={available}
                />
              </div>
              <div className={metaSection}>
                {/*<span className={labelFont}>Type</span>
                <span className={tagList}>
                  <Link to={product.productTypeSlug}>
                    {product.productType}
                  </Link>
                </span>

                <span className={labelFont}>Tags</span>
                <span className={tagList}>
                  {product.tags.map((tag) => (
                    <Link to={`/search?t=${tag}`}>{tag}</Link>
                  ))}
                </span>
                  </div>*/}
            </div>
          </div>
        </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/products/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
