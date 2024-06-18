import { View, Text, Linking, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard'; // Updated Clipboard import

const SigninScreen: React.FC = () => {
  const [deviceCode, setDeviceCode] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');
  const navigation = useNavigation();

  const copyToClipboard = () => {
    Clipboard.setStringAsync(code);
    alert('Copied to clipboard');
  };

  const requestDeviceCode = async () => {
    const params = new URLSearchParams();
    params.append('client_id', '861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com');
    params.append('scope', 'https://www.googleapis.com/auth/youtube');

    try {
      const response = await fetch('https://oauth2.googleapis.com/device/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setDeviceCode(data.device_code);
      setCode(data.user_code);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    requestDeviceCode();
  }, []);

  const requestToken = async () => {
    const params = new URLSearchParams();
    params.append('client_id', '861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com');
    params.append('client_secret', 'SboVhoG9s0rNafixCSGGKXAT');
    params.append('device_code', deviceCode);
    params.append('grant_type', 'urn:ietf:params:oauth:grant-type:device_code');

    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'OAUTH_USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0 Cobalt/Version',
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAccessToken(data.access_token);
      await AsyncStorage.setItem('token', data.access_token);
      navigation.navigate('(songs)');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const openGoogleDeviceLink = async () => {
    await Linking.openURL('https://www.google.com/device');
  };

  return (
    <SafeAreaView>
      <Text style={{ color: '#000', margin: 10, fontSize: 30 }}>{code}</Text>
      <TouchableOpacity onPress={copyToClipboard}>
        <Text style={{ color: 'blue', margin: 10, fontSize: 20 }}>Copy Text</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGoogleDeviceLink}>
        <Text style={{ color: 'blue', margin: 10, fontSize: 20 }}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={requestToken}>
        <Text style={{ color: 'blue', margin: 10, fontSize: 20 }}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SigninScreen;
