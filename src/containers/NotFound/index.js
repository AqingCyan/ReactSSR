import React, { PureComponent } from 'react'

class NotFound extends PureComponent {
  componentWillMount() {
    const { staticContext } = this.props
    if (staticContext) {
      staticContext.NotFound = true
    }
  }

  render() {
    return <h1>404 找不到页面</h1>
  }
}

export default NotFound
