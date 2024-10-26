import { useState } from 'react';
import { mint } from './Web3Service';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {

  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleWalletConnect = () => {

    if (!captcha) {
      setMessage("Check the I'm not robot box first");
      return;
    }

    setMessage('Requesting your tokens. Please, wait...');

    mint()
      .then((transaction) => {
        setMessage(`Your tokens were sent to ${localStorage.getItem('wallet')}. \n Transaction ID: ${transaction}`);
      })
      .catch((error) => {
        setMessage(error.response ? error.response.data : error.message);
      });
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">LoveCoin Faucet</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">About</a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your LoveCoins</h1>
        <p className="lead">Once a two days, earn coins for free just connecting your MetaMask below.</p>
        <p className="lead">
          <button onClick={handleWalletConnect} className="btn btn-lg btn-secondary fw-bold border-white bg-white">
            <img src="/assets/metamask.svg" alt="MetaMask logo" width={48} />
            Get my LoveCoins
          </button>
        </p>
        <div style={{ display: 'inline-flex' }}>
          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_RECAPTCHA_KEY}`}
            onChange={value => setCaptcha(value || "")}
          />
        </div>
        <p className='lead'>
          {message}
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Built by <a href="https://vouaprender.dev.br" className="text-white">Vouaprender</a></p>
      </footer>
    </div>
  );
}

export default App;
