import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  // Defina aqui as páginas que não precisam de verificação
  const noAuthRequiredPages = ['/login', '/signIn'];

  useEffect(() => {
    // Executa apenas no lado do cliente
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem('userId');

      // Verifica se a página atual está no array de páginas que não requerem autenticação
      const isAuthRequired = !noAuthRequiredPages.includes(router.pathname);

      // Se autenticação for necessária e não tiver `userId`, redireciona para o login
      if (isAuthRequired && !storedUserId) {
        router.push('/login');
      }
    }
  }, [router]);

  return <>{children}</>;
}
