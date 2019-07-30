import React from 'react'
import Slider from 'react-slick'
import API from '../../utils/API'
import axios from 'axios'
import GameData from '../gameData/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'


class Risk extends React.Component {
  state = {
    username: '',
    description: '',
    riskData: true
  }

  componentDidMount() {
    API.risk()
    .then(response => {
      console.log(response)
      this.setState(() => ({
        username: response.data.games[0].name,
        description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      }));
    })
    .catch(error => this.setState({ error, riskData: false }))
  }

  riskShowing = (response) => {
    this.setState(state => ({
        riskData: !state.riskData,
    }));
  }

  render () {
    return (
          <div>
            <img src='https://i.ebayimg.com/images/g/A88AAOSwIk9ag6rH/s-l300.jpg' alt='D and D'
            style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.riskShowing}
            />
            <GameData show={!this.state.riskData} username={this.state.username} description={this.state.description} />
          </div>
    )
  }
}

export default Risk
