import React, {useCallback} from 'react';
import {TouchableOpacity, View, Dimensions, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {Text} from '../text/Text';
import {useAppAlert} from '@src/hooks/app';
import {Colors} from '@src/assets';

const width = Dimensions.get('window').width;

export const Alert = () => {
  const {alert, onSetAlert} = useAppAlert();

  const onClose = useCallback(() => {
    onSetAlert({isVisible: false, title: '', content: ''});
  }, [onSetAlert]);

  return (
    <View>
      <Modal isVisible={!!alert?.isVisible} backdropOpacity={0.4}>
        <View style={styles.primaryView}>
          <View style={styles.secondView}>
            <View style={styles.modalView}>
              <Text preset="h3">{alert?.title ?? ''}</Text>
              <View style={styles.contentView}>
                <Text style={styles.contentText}>{alert?.content ?? ''}</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={onClose}>
                  <Text style={styles.buttonText} text="common.close" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 30,
  },
  buttonText: {
    color: Colors.redCinnabar,
    fontWeight: '500',
  },
  primaryView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    alignItems: 'center',
    elevation: 10,
    backgroundColor: Colors.white,
    borderRadius: 16,
  },
  contentView: {
    marginTop: 13,
    width: '100%',
  },
  contentText: {
    lineHeight: 22,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 16,
    padding: 24,
    width: width - 80,
  },
});
