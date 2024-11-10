import logo from './logo.png';
import vt from './vt.png';
import bg from './bg.png';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='wrap'>
        <div style={{backgroundImage: `url("${bg}")`}} className='cover'>
          <div className='cover-info'>
            <div className='message'>Good <br /> Afternoon,</div>
          </div>
        </div>
        <div className='content'>
          <div className='header'>
            <a href="/" className='logo'>
              <img src={logo} alt=""/>
            </a>
            <div className='heading'>Performance Marketing Agency</div>
          </div>
          <div className='form'>
            <div className='form-panel'>
              <img src={vt} alt="" className='vector'/>
              <div className='title'>{'No account created'}</div>
              <div className='desc'>{'Sync up now, growth with InnoDi'}</div>
              <div className='cta'>
                <div className='register'>Register</div>
                <div className='login'>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
