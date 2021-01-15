import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { Text, View, ProfileImage } from '../atoms'

function UserAvatarComponent({ auth }: RootState) {
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

const mapStateToProps = ({ auth, theme }: RootState) => {
  return { auth, theme }
}

export const UserAvatar = connect(mapStateToProps)(UserAvatarComponent)
