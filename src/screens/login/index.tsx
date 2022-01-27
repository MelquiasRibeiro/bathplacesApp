import React, {useState} from 'react';
import {
  Container,
  Background,
  Logo,
  Form,
  Input,
  Button,
  ButtonDarkPart,
} from './styles';
import api from '../../services/api';
import {Text} from '../../components/Text';
import Toilet from '../../assets/images/toilet.png';
import BathLogo from '../../assets/images/logo.png';
import {colors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

const Home: React.FC = () => {
  const [email, setEmail] = useState('melquias@mail.com');
  const [password, setPassword] = useState('12344');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function handleLogin() {
    setLoading(true);
    try {
      const {data} = await api.post('session', {
        email,
        password,
      });
      if (data) {
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      setPassword('');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Background source={Toilet} resizeMode="contain" />
      <Logo source={BathLogo} />
      <Text size={30} lineHeight={40} weight={'Bold'} color={colors.titles}>
        {`Encontre o melhor e
mais proximo 
de voce.`}
      </Text>
      <Form>
        <Text
          style={{marginBottom: 5}}
          size={16}
          lineHeight={18}
          weight={'Bold'}
          color={colors.black}>
          Login
        </Text>
        <Input
          onChangeText={typedEmail => setEmail(typedEmail)}
          value={email}
          placeholder="Digite seu email"
        />
        <Input
          value={password}
          onChangeText={typedPassword => setPassword(typedPassword)}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <Button onPress={handleLogin}>
          <ButtonDarkPart />
          <Text
            align="center"
            size={16}
            lineHeight={18}
            weight={'Bold'}
            style={{flex: 1, marginLeft: -45}}
            color={colors.blocks}>
            {loading ? (
              <ActivityIndicator size={16} color={colors.blocks} />
            ) : (
              'ENTRAR'
            )}
          </Text>
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
