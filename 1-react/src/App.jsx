const App = () => (
  <div className="ProductPage">
    <div className="Page">
      <header>
        <h1>메뉴목록</h1>
      </header>
      <main>
        <ul>
          <li>
            <div className="ProductItem">
              <div className="description">
                <h2>고소한 바질 파스타</h2>
                <div>5,000</div>
                <button className="Button brand">주문하기</button>
              </div>
              <div className="thumbnail">
                <img src="./images/menu-고소한바질파스타.jpg"></img>
              </div>
            </div>
          </li>
        </ul>
      </main>
      <footer>
        <nav className="Navbar">
          <a href="#" className="active">
            메뉴목록
          </a>
          <a href="#">주문내역</a>
        </nav>
      </footer>
    </div>
  </div>
);

export default App;
