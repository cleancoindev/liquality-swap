import React, { Component } from 'react'
import { generateExpiration, expirationDurations } from '../../utils/expiration'

import ClockIcon from '../../icons/clock.svg'
import LockIcon from '../../icons/lock.svg'
import './InitiatorExpirationInfo.css'

class InitiatorExpirationInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expiration: generateExpiration()
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        expiration: generateExpiration()
      })
    }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return <div className='InitiatorExpirationInfo'>
      <div className='row justify-content-start'>
        <p class="mb-3"><strong>What happens when you swap?</strong></p>
        <p class="mb-2"><img src={LockIcon} className='InitiatorExpirationInfo_icon' alt='Lock Icon' />When initiating the swap your funds will be securely locked into escrow</p>
        <p class="mb-2"><img src={ClockIcon} className='InitiatorExpirationInfo_icon' alt='Clock Icon' />If the swap doesn't complete within {Number(expirationDurations.b.asHours().toFixed(2))} hours, your funds will be released in {Number(expirationDurations.a.asHours().toFixed(2))} hours at {this.state.expiration.format('LT')}</p>
      </div>
    </div>
  }
}

export default InitiatorExpirationInfo
