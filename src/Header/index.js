import './style.css';

function Header() {

  const input = document.querySelector('input');

  function pesquisarProduto() {

  }

  return (
    <header>
      <h1>Sabe o Preço</h1>
      <div classname='container-input'>
        <input type='text' placeholder="Qual produto está procurando?" onKeyDown={pesquisarProduto()} />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
