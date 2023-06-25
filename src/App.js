import './App.css';
import micon from './assets/micon.webp';
import picon from './assets/picon.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import mike from "./assets/mike.png";
import mr from "./assets/mr.png";
import pix from "./assets/pix.png";
import deg from "./assets/deg.png";
import Teamp from "./team";
import me from "./assets/me.svg";
import mainf from "./assets/mainf";
import lastm from "./assets/lastm"
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import Scroll from "./scroll.js";
import s6 from "./assets/s6.png";
import Bottom from './bottom';
import wami from "./assets/wami.webp";



function App() {
  return (
    
    <div className='wrapper'>
    
    <div className="App">
     
      <div className="head">
      <a href='https://www.bitcoinwhales.io/' target="_blank"><img src={micon} className='icon1'/></a>
      <a href='https://twitter.com/Bitcoin' target="_blank"><img src={picon} className='icon2'/></a>
      </div>
      <Bottom className= "background">
      </Bottom>
      <h1 className='mheadt'>BITCOIN WHALES</h1>
      <div className='three'>
      <img src={p1} className='p1'/>
      <img src={p3} className='p2'/>
      <img src={p2} className='p3'/>
      </div>
      <div className='line'></div>
      <div className='infob'>
      <h1 className='minfo'>WHAT IS BITCOIN WHALES?</h1>
      
      <p className='infop'>Bitcoin Whales is a timeless digital art collection that is home to a community of creators, philanthropists, and entrepreneurs that fosters the desire to make history on ordinals. We aspire to provide genuine and meaningful experiences to connect with artists and builders where they can see our community as a safe haven.</p>
      </div>
      <div className="tmaind">
      <div className="tnum">
      <div className="tdis">
      <h1 className="num">
      181K+
      </h1>
      <p className="ds">
      Followers On Twitter
      </p>
      </div>
      <div className="tdis">
      <h1 className="num">
      16K+
      </h1>
      <p className="ds">
      Degens On Discord
        </p>
      </div>
      <div className="tdis">
      <h1 className="num">
      10000
      </h1>
      <p className="ds">
      Ordinals Will be Minted
        </p>
      </div>
      </div>
   </div>
      <div className='sbody'>
        <Scroll className="lol"/>
      </div>
    <div className='mmn'>
    Meet The Team
    </div>
    <div className="mainpd">
    <a href = "https://twitter.com/bl0ckchainsavvy"target="_blank" >
    <Teamp name = "Tosyo" dis ="Founder" pfp = {mr}/>
    </a>

    <a href = "https://twitter.com/lizardofshame" target="_blank">
    <Teamp name = "T1FF4NY" dis ="Co-Founder" pfp = {s6}/>
    </a>
    </div>

    <div className='abody'>
	<details open>
		<summary>
    How do the BitcoinWhales work?
		</summary>
		<div className='stext'>
		The BitcoinWhales are a collection of 10,000 pieces of art inscribed on the bitcoin blockchain and represented by serialized satoshis or "ordinals". Each whale is potent despite it’s size, more details coming soon.
    <br></br> <br></br>
According to the ordinal theory handbook: “Individual sats can be inscribed with arbitrary content, creating Bitcoin-native digital artifacts that can be held in a Bitcoin wallet and transferred using Bitcoin transactions. Inscriptions are as scarce, immutable, secure, and decentralized as Bitcoin itself.”
More details are shown in <a className='linkk' href='https://rodarmor.com/blog/ordinal-theory/' target='_blank' >ordinal theory</a>.
		</div>
	</details>
	<details>
		<summary>
    What do i need to receive, send and store a Bitcoin Whale?
		</summary>
		<div className='stext'>
    Any bitcoin ordinal wallet such as <a className='linkk' href='https://www.okx.com/web3' target='_blank' >okx</a>, <a className='linkk' href='https://unisat.io/' target='_blank' >unisat</a> and <a href='https://www.xverse.app/' className='linkk' target='_blank'>xverse</a> wallet link
		</div>
	</details>
	<details>
		<summary>
		Why bitcoin and not other blockchains?
		</summary>
		<div className='stext'>
    According to <a className='linkk' href='https://www.businessinsider.in/stock-market/news/bitcoin-whales-what-are-they-and-how-are-they-affecting-the-cryptocurrencys-price/articleshow/80437461.cms' target='_blank' >this article by Business Insider</a>, there are around 1,000 individuals who owns 40% of the market, Whales are known for accumulating bitcoin for long periods and has been valuing true scarcity over the years. Seeing bitcoin as the ultimate inflation hedge will further make whales accumulate more as we see more banks collapsing in the year 2023.
		</div>
	</details>
</div>

<div className='mainc'>
  <div className='c1'>
    <img className='bimg' src= {wami} />
  </div>
  <div className='c2'>
    <h1 className='fol'>Follow Us</h1>
    <div className='bbicon'>
      <a href='https://discord.com/invite/btcwhales' target='_blank'>
    <FaDiscord className='iccon'/></a>
    <a href='https://twitter.com/Bitcoin_Whales_' target='_blank'>
    <FaTwitter className='iccon'/>
    </a>
    </div>
  </div>
  <div className='c3'>
    <div className='bname'>
    <p className='textt'>Made with &hearts; by</p><a href='https://twitter.com/yeahbichscience' target='_blank'><p className='itallic'>yeahbitchscience</p></a>
    </div>
  </div>
</div>

</div>
    </div>
  );
}

export default App;
