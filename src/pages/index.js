import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'
import Navigation from '../components/navigation'

const Index = () => {
  return (
    <>
      <SEO />
      <Layout>
        <h1>Yeah!, I 'm a dev !!!</h1>
      </Layout>
    </>
  )
}


export default Index
