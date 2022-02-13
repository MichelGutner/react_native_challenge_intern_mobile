import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

export function handleSignIn() {
  navigation.reset({
    routes: [{ name: 'SignIn' }],
  });
}
