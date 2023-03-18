import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  changeMode = () => {
    const {mode} = this.state
    this.setState({mode: !mode})
    console.log(mode)
  }

  render() {
    const {mode} = this.state

    let divClass
    let headClass
    let buttonContext

    if (mode === true) {
      divClass = 'dark-mode'
      headClass = 'heading1'
      buttonContext = 'Light Mode'
    } else {
      divClass = 'light-mode'
      headClass = 'heading2'
      buttonContext = 'Dark Mode'
    }

    return (
      <div className="container">
        <div className={divClass}>
          <h1 className={headClass}>Click to change mode</h1>
          <button type="button" onClick={this.changeMode}>
            {buttonContext}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
