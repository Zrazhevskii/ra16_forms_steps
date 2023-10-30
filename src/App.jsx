import './App.css';
import { Items } from './components/Items/Items';
import { data } from './data/data';
import { Form } from './components/Form/Form';


function App() {
  return (
      <div>
        <Form/>
          <div className='wrapper'>
              <div className='wrapper-title'>
                  <div>
                      <h4>Дата (ДД/MM/ГГ)</h4>
                  </div>
                  <div>
                      <h4>Пройдено (км)</h4>
                  </div>
                  <div>
                      <h4>Действия</h4>
                  </div>
              </div>
              <Items data={data}/>
          </div>
      </div>
  );
}

export default App;
