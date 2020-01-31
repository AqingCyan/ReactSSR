import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends PureComponent {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div style={{ width: '100%', height: '50px', backgroundColor: 'orange' }}>
        <Link to="/">
          <h1 style={{ display: 'inline-block', color: 'black', marginRight: '20px' }}>首页</h1>
        </Link>
        {
          login
            ? (
              <div style={{ display: 'inline-block' }}>
                <Link to="/translation">
                  <h1 style={{ display: 'inline-block', color: 'black', marginRight: '20px' }}>翻译</h1>
                </Link>
                <div onClick={handleLogout} style={{ display: 'inline-block', width: '100px', color: 'black', marginRight: '20px' }}>
                  <h1 style={{ display: 'inline-block', color: 'black', marginRight: '20px' }}>注销</h1>
                </div>
              </div>
            ) : (
              <div onClick={handleLogin} style={{ display: 'inline-block', width: '100px', color: 'black', marginRight: '20px' }}>
                <h1>登录</h1>
              </div>
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login,
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
