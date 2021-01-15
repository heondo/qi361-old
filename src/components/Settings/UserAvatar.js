import React from 'react'
import { connect } from 'react-redux'
import { View, ProfileImage } from '../atoms'

function UserAvatarComponent({ auth }) {
  return (
    <View>
      {/* Inside of here, render Settings icon and name */}
      <ProfileImage
        width="80px"
        height="80px"
        mg="auto"
        source={{ uri: auth.user.photoURL }}
      />
    </View>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const UserAvatar = connect(mapStateToProps)(UserAvatarComponent)
