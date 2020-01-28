import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'

const Home = (props) => {
  const { name } = props
  return (
    <div>
      <Header />
      <h1>Hello {name}</h1>
      <p>Let us learn SSR</p>
      <button type="button" onClick={() => alert('click this')}>Click me!</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.name,
})

export default connect(mapStateToProps, null)(Home)
