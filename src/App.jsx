import './assets/_variables.scss';
import './assets/app.scss';
import './assets/normalize.scss';

// module scss
// номера страницы import Pagination from './libs/components/Pagination.module.scss';

// components
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBLock';

// массив пицц
import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock {...obj} key={obj.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
