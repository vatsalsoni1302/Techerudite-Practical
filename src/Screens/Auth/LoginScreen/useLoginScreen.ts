import Loader from '@/Components/AppLoader/Loader';
import Screens from '@/Helpers/Screens';
import Utility from '@/Helpers/Utility';
import {useNavigation} from '@/Hooks';
import {APICall, EndPoints} from '@/Network';
import {setUserData} from '@/Redux/Reducers';
import Constants from '@/Theme/Constants';

import StorageMMKV from '@/Theme/StorageMMKV';
import {CommonActions} from '@react-navigation/native';
import _ from 'lodash';
import {useCallback, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(
    __DEV__ ? 'testpracticaluser001@mailinator.com' : '',
  );
  const [password, setPassword] = useState(__DEV__ ? 'Test@123' : '');

  const onPressVoid = useCallback(() => {
    Alert.alert('Coming Soon');
  }, []);

  const onPressLogin = useCallback(() => {
    Keyboard.dismiss();
    if (!_.trim(email)) {
      Alert.alert('Please enter email');
      return;
    }
    if (Utility.isValid(email)) {
      Alert.alert('Please enter valid email');
      return;
    }
    if (!_.trim(password)) {
      Alert.alert('Please enter password');
      return;
    }

    const formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    Loader.isLoading(true);
    APICall('post', formdata, EndPoints.login, {
      'Content-Type': 'multipart/form-data',
    })
      .then((resp: any) => {
        if (resp.status === 200 && resp.data?.data) {
          dispatch(setUserData(resp?.data?.data?.user));
          StorageMMKV.setItem(
            Constants.StorageKeys.token,
            resp.data?.data?.token,
          );
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: Screens.Main,
                },
              ],
            }),
          );
        } else {
          Alert.alert('Something went wrong');
        }
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      })
      .finally(() => {
        Loader.isLoading(false);
      });
  }, [dispatch, email, navigation, password]);

  return {onPressLogin, email, password, setEmail, setPassword, onPressVoid};
};
