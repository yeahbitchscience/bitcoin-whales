import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.jpeg";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import s7 from "./assets/s7.jpeg";
import s8 from "./assets/s8.png";
import s9 from "./assets/s9.png";
import s10 from "./assets/s10.png";
import './App.css';

function Scroll() {
    return (
        <section class="scrollport">
        <div><img className='simg' src={s1}/></div>
        <div><img className='simg' src={s2}/></div>
        <div><img className='simg' src={s3}/></div>
        <div><img className='simg' src={s4}/></div>
        <div><img className='simg' src={s5}/></div>
        <div><img className='simg' src={s6}/></div>
        <div><img className='simg' src={s7}/></div>
        <div><img className='simg' src={s8}/></div>
        <div><img className='simg' src={s9}/></div>
        <div><img className='simg' src={s10}/></div>
      </section>
    )
    }

    export default Scroll;