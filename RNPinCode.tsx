import React from 'react';
import {Button} from 'react-native';

import PINCode from '@haskkor/react-native-pincode';
import {PinResultStatus} from '@haskkor/react-native-pincode/dist/src/utils';

export const RNPinCode = () => (
  <PINCode
    status="enter"
    buttonComponentLockedPage={() => (
      <Button
        onPress={() => {
          console.log('xxx');
        }}
        title="Exit"
      />
    )}
    vibrationEnabled={false}
    pinStatus={PinResultStatus.initial}
    timeLocked={10000}
    handleResultEnterPin={(pin: string) => {
      console.log('handleResultEnterPin = ', pin);

      return pin === '1111';
    }}
    delayBetweenAttempts={500}
  />
);
