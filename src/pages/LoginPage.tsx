import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useAuth } from '../AuthContext';

// All the styles are now in a JavaScript object
const styles = {
  title: {
    fontFamily: 'Outfit, var(--mantine-font-family)',
    fontWeight: 500,
    textAlign: 'center',
  },
  subtitle: {
    color: 'var(--mantine-color-dimmed)',
    fontSize: 'var(--mantine-font-size-sm)',
    textAlign: 'center',
    marginTop: 5,
  },
};

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login();
      navigate('/admin');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <Container size={420} my={40}>
      <Title style={styles.title}>
        Admin Login
      </Title>

     

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <form onSubmit={handleLogin}>
          <TextInput
            label="Username"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            required
            radius="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
            mt="md"
            radius="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" radius="md" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}