import './style.css';

function Header() {

  function handleInput(event) {
    console.log(event.target.value);
  }


  return (
    <header>
      <h1>Sabe o Preço</h1>
      <div className='container-input'>
        <input id='input-search' type='text'
          placeholder="Qual produto está procurando?"
          onInput={(event) => handleInput(event)}
        />
      </div>
      <div className='container-btn'>
        {/* <img id='btn-search' src='../assets/lupa.jpg' alt='Lupa de pesquisa' /> */}
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
