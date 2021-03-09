import React, { Component } from 'react'
import { render } from 'react-dom'
import { ReactTechnology, Github, PHP, HTML, CSS } from './information'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  constructor() {
    super()

    this.state = {
      selection: 1,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, index, value) {
    //set selection to the value selected
    this.setState({ selection: value })
  }

  pageControl() {
    if (this.state.selection === 1) {
      return ReactTechnology()
    } else if (this.state.selection === 2) {
      return Github()
    } else if (this.state.selection === 3) {
      return PHP()
    } else if (this.state.selection === 4) {
      return HTML()
    } else if (this.state.selection === 5) {
      return CSS()
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          {/* <AppBar
            title='My App'
            style={{
              background: '#ffb400', //hex color values (yellow)
            }}
            titleStyle={{
              color: '#FFFFF', //color of text (black)
            }}
            showMenuIconButton={false}
          /> */}
          <DropDownMenu
            value={this.state.selection}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText='React Technologies' />
            <MenuItem value={2} primaryText='GitHub ' />
            <MenuItem value={3} primaryText='PHP' />
            <MenuItem value={4} primaryText='HTML' />
            <MenuItem value={5} primaryText='CSS' />
          </DropDownMenu>
          <br />
          <br />
          <br />
          <center>{this.pageControl()}</center>
        </MuiThemeProvider>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
export default App
