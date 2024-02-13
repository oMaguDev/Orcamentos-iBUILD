import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import Input from '../components/form/Input';
import { Layout, Box, Flex} from '../components/Containers'
import Button from '../components/common/Button';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [franquia, setFranquia] = useState('');
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        console.log('Email: ', email);
        console.log('senha: ', password);
      const { data, signupError } = await supabase.auth.signUp({
        email,
        password,
      });
      const user = data.user
      if (signupError) {
        setError(signupError.message);
      } else {
        console.log('Usuário cadastrado:', user);
        console.log('Franquia:', franquia);
        const { data, error: insertError } = await supabase
        .from('detalhes_user')
        .insert([
            { id_user: user.id, id_franquia: franquia}
        ]);
        // Realize ações após o sucesso do cadastro, como redirecionamento
      }
    } catch (error) {
      setError('Erro ao cadastrar usuário.');
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <Layout>
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Box width="400px" padding="20px" borderRadius="8px" className='background-box'> 
          
          <form onSubmit={handleSignup}>
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Sua Senha"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Franquia"
              type="text"
              placeholder="Digite a Franquia"
              value={franquia}
              onChange={(e) => setFranquia(e.target.value)}
            />
            {error && <p>{error}</p>}
            <Button type="submit">Cadastrar</Button>
          </form>
          </Box>
          </Flex>
          </Layout>
  );
};

export default SignupPage;
