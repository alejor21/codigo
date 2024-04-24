import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './screens/Home';
import Analytics from './screens/Analytics';
import Chat from './screens/Chat';
import Notfound from './screens/Notfound';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <header className='bg-blue-300'>Header</header>
        <section className='bg-red-300'>
          
           <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </section>
        <footer className='bg-green-300'>
          <p>footer</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
