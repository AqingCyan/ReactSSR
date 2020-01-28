import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { getHomeList } from './store/actions'

class Home extends PureComponent {
  componentDidMount() {
    const { gethomelist } = this.props
    gethomelist()
  }

  getList() {
    const { list } = this.props
    return list.map(({ id, title }) => <p key={id}>· {title}</p>)
  }

  render() {
    return (
      <div>
        <Header />
        {this.getList()}
        <button type="button" onClick={() => alert('click this')}>Click me!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.home.newsList,
})

const mapDispatchToProps = (dispatch) => ({
  gethomelist() {
    dispatch(getHomeList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
