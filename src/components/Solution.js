import React, {Component} from 'react'

export default class Solution extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      error: false
    }
  }

  parsePath(path) {
    return null
  }

  componentDidMount() {
    if (this.state.data == null) {
      let data = this.parsePath("findsbr.package.search")

      this.setState({data: data})
      console.log(data)
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    if ((nextState.data == null || nextState.data == undefined) && !this.state.error) {
      this.setState({error: true})
    }
  }

  renderResults() {
    let data = this.state.data

    let output = []
    for (let i in data) {
      output.append(<li>{ data[i] }</li>)
    }

    if (data.length < 1) {
      return (
        <div>
          <h1>No Results</h1>
        </div>
      )
    }

    return (
      <div>
        <h1>Result</h1>
        <ul> { output } </ul>
      </div>
    )
  }

  render () {
    if (this.state.error) {
      return <h1>Invalid Solution</h1>
    }

    if (this.state.data) {
      return this.renderResults()
    } else {
      return <h1>Parsing Data...</h1>
    }
  }
}
