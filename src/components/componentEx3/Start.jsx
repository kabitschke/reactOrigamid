import { Home } from './Home';
import { Produtos } from './Produtos';

export const Start = () => {
  const { pathname } = window.location;
  return (
    <header>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>

      {pathname === '/' && <Home />}
      {pathname === '/produtos' && <Produtos />}
    </header>
  );
};
