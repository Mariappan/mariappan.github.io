import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights, copyrightYear }) => (
  <footer>
    {copyrights ? (
      <span className="footerCopyrights">
        © {copyrightYear} {copyrights}
      </span>
    ) : (
      <>
        <span className="footerCopyrights">
          © {copyrightYear} Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
