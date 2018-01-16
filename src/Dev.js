import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Solution from '~/components/Solution'

const rootE = document.querySelector('react')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootE
   )
}

render(Solution)

if (module.hot) {
  module.hot.accept()
}
