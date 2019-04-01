import PropTypes from 'prop-types'

export const card = PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
})

export const tab = PropTypes.string;