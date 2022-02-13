import { useNavigation } from '@react-navigation/native';

export const handleRequeriRegisterButton = () => {
  const navigation = useNavigation();
  navigation.navigate('SignIn');
};
