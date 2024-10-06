import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '정경호',
    'birthday': '970307',
    'gender': '남자',
    'job': '백수'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '권기은',
    'birthday': '010515',
    'gender': '여자',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동',
    'birthday': '440212',
    'gender': '남자',
    'job': '도둑'
  }
]

function App() {
  return (
    <div className='customer'>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
