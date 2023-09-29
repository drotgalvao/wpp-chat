import React from 'react'
import "./Grid2.css";


const Grid2 = () => {

  const products = [
    { id: 1, name: 'Produto 1', price: 10.99 },
    { id: 2, name: 'Produto 2', price: 19.99 },
    { id: 3, name: 'Produto 3', price: 14.99 },
    { id: 4, name: 'Produto 4', price: 9.99 },
    { id: 5, name: 'Produto 5', price: 29.99 },
    { id: 6, name: 'Produto 6', price: 39.99 },
    { id: 7, name: 'Produto 7', price: 49.99 },
    { id: 8, name: 'Produto 8', price: 59.99 },
    { id: 9, name: 'Produto 9', price: 69.99 },
    { id: 10, name: 'Produto 10', price: 79.99 },
    { id: 11, name: 'Produto 11', price: 89.99 },
    { id: 12, name: 'Produto 12', price: 99.99 },
    { id: 13, name: 'Produto 13', price: 109.99 },
    { id: 14, name: 'Produto 14', price: 119.99 },
    { id: 15, name: 'Produto 15', price: 129.99 },
    { id: 16, name: 'Produto 16', price: 139.99 },
    { id: 17, name: 'Produto 17', price: 149.99 },
    { id: 18, name: 'Produto 18', price: 159.99 },
    { id: 19, name: 'Produto 19', price: 169.99 },
    { id: 20, name: 'Produto 20', price: 179.99 },
    { id: 21, name: 'Produto 21', price: 189.99 },
    { id: 22, name: 'Produto 22', price: 199.99 },
    { id: 23, name: 'Produto 23', price: 209.99 },
    { id: 24, name: 'Produto 24', price: 219.99 },
    { id: 25, name: 'Produto 25', price: 229.99 },
    { id: 26, name: 'Produto 26', price: 239.99 },
    { id: 27, name: 'Produto 27', price: 249.99 },
    { id: 28, name: 'Produto 28', price: 259.99 },
    { id: 29, name: 'Produto 29', price: 269.99 },
    { id: 30, name: 'Produto 30', price: 279.99 },
    { id: 31, name: 'Produto 31', price: 289.99 },
    { id: 32, name: 'Produto 32', price: 299.99 },
    { id: 33, name: 'Produto 33', price: 309.99 },
  ];

  return (
    <div className="grid-container">
      <header className='header'>Seu cabeçalho aqui</header>
      <nav className='nav'>Sua navegação aqui</nav>
      <main className='main'>
        {/* Criar a nova grid para os produtos dentro da área 'main' */}
        <div className="product-grid">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <h3>{product.name}</h3>
              <p>Preço: R${product.price.toFixed(2)}</p>
              {/* Outros detalhes do produto, se necessário */}
            </div>
          ))}
        </div>
      </main>
      <aside className='aside'>Sua barra lateral aqui</aside>
      <footer className='footer'>Seu rodapé aqui</footer>
    </div>
  )
}

export default Grid2