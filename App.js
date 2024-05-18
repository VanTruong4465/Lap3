import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import RootComponent from './src/routers/index';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  // const [defaultUserCreated, setDefaultUserCreated] = useState(false);

  // useEffect(() => {
  //   const createDefaultUser = async () => {
  //     try {
  //       // Kiem tra xem co tai khoan mac dinh nao chua
  //       const userSnapshot = await firestore().collection('user').get();
  //       if (userSnapshot.empty && !defaultUserCreated) {
  //         // Neu khong co tao 1 tai khoan mac dinh
  //         await firestore().collection('user').add({
  //           email: 'tien@gmail.com',
  //           password: '123456',
  //           name: 'Trần Hùng Tiến',
  //           role: 'admin',

  //         });
  //         setDefaultUserCreated(true);
  //       }
  //     } catch (error) {
  //       console.error('Error creating default user:', error);
  //       Alert.alert('Error', 'An error occurred while creating default user');
  //     }
  //   };

  //   createDefaultUser();
  // }, [defaultUserCreated]);

  return (
    <RootComponent />
  );
};

export default App;
