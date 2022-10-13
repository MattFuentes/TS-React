import PropTypes from 'prop-types'

const getMessage = () => {
    const message = 'Hola, soy Matias'
    return message
}

export const FirstApp = ({ title, subTitle, name}) => {

    return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{ JSON.stringify( newMessage )}</h1> */}
        <h2>{ subTitle }</h2>
        <h2>{ name }</h2>
    </>
    
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Matias Fuentes'
}
