import * as React from 'react'

import * as Styles from './root.component.styl'
console.info(Styles)

export class RootComponent extends React.PureComponent {
  render() {
    return <div className={Styles['local']}>这是个root component</div>
  }
}
