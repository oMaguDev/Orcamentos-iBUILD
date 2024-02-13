import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import Router, { useRouter } from 'next/router';
import { Layout, Box, Flex, TitleContainer, ExplainingP } from '../components/Containers'
import Button from '../components/common/Button'
import Input from '../components/form/Input';
import RadioButtons from '../components/common/RadioButtons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();

    const {error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log('dados: ',data)
    const user = data.user
    if (error) {
      console.error('Erro na autenticação:', error.message);
    } else {
      console.log('Usuário autenticado:', user);
      const { data, error } = await supabase
      .from('detalhes_user')
      .select('*') // seleciona todas as colunas
      .eq('id_user', user.id); // filtra para encontrar a linha com o id_user correspondente

      if (error) {
          console.error('Erro ao buscar dados:', error);
          return;
      }

  console.log('Dados do usuário:', data);
  localStorage.setItem('userId', user.id);
  localStorage.setItem('franquia', data[0].id_franquia);;
  router.push('/');
    }}

  return (
    <Layout>
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Box width="400px" padding="20px" borderRadius="8px">
        <form onSubmit={handleLogin}>
          <Input 
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <Input
            label="Senha"
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        
          <Button type="submit">Entrar</Button>
          <div>
          <Button 
            variant="outline"
            onClick={() => Router.push('/signIn')}
          >
            Criar Conta
          </Button>
          </div>
          <RadioButtons>
            <RadioButtons.Option value="1">Franquia 1</RadioButtons.Option>
            
          </RadioButtons>
        </form>
        </Box>
      </Flex>
    </Layout>
  );
}
export default LoginPage;