import React from 'react'
import { ToastAndroid } from 'react-native'
import { Fab, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { panic } from '../actions'

class PanicButton extends React.Component {

  render() {
    const { panic, token, userID } = this.props
    return (
      <Fab
        active={false}
        style={{backgroundColor:'#FF2821'}}
        position="bottomLeft"
        onPress={()=> {
          ToastAndroid.showWithGravity('You just pressed Panic Button !', ToastAndroid.SHORT, ToastAndroid.CENTER)
          panic(token,userID)
        }}>
        <Icon name="alert" android="md-alert" style={{fontSize:60}} />
      </Fab>
    )
  }
}

PanicButton.propTypes = {
  panic: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  panic: (token,userID) => dispatch(panic(token,userID))
})

export default connect(null, mapDispatchToProps)(PanicButton)