import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
// import { RNPhotoEditor } from 'react-native-photo-editor'

import {
  // DarkHeaderText,
  // ModalButtonText,
  // ModalView,
  // ModalButton,
  EmptySpace,
  FlexRow,
  ModalView,
  Row,
  Text,
  TransparentButton,
  View,
} from '../atoms'

const SelectEditImageModalComponent = ({
  theme,
  isModalVisible,
  setIsModalVisible,
  handleAddImagePress,
  handleEditImage,
}) => {
  const handleCancelPress = () => {
    setIsModalVisible(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        animationType="fade"
        backdropOpacity={0.8}
        transparent={true}
        isVisible={isModalVisible}
        onBackdropPress={handleCancelPress}
        coverScreen={false}
        style={{ alignItems: 'center' }}
      >
        <ModalView>
          <FlexRow>
            <TransparentButton onPress={handleAddImagePress}>
              <Text fontSize="18px">Add Image</Text>
            </TransparentButton>
          </FlexRow>
        </ModalView>
        {/* <ModalView>
          <DarkHeaderText fontSize="18px">Edit Selection</DarkHeaderText>
          <ModalButton onPress={handleEditImage}>
            <ModalButtonText>Edit Image...</ModalButtonText>
          </ModalButton>
          <ModalButton onPress={handleAddImagePress}>
            <ModalButtonText>Change Image...</ModalButtonText>
          </ModalButton>
          <Row>
            <EmptySpace />
            <ModalButton pd="0" onPress={handleCancelPress}>
              <ModalButtonText fontSize="16px">CANCEL</ModalButtonText>
            </ModalButton>
          </Row>
        </ModalView> */}
      </Modal>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

SelectEditImageModalComponent.propTypes = {
  isModalVisible: PropTypes.bool,
  setIsModalVisible: PropTypes.func,
  handleAddImagePress: PropTypes.func,
  selectedImage: PropTypes.object,
  setSelectedImage: PropTypes.func,
}

export const SelectEditImageModal = connect(mapStateToProps)(
  SelectEditImageModalComponent,
)
