import React from 'react'
import * as S from './styles'
import {format} from 'date-fns';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';
import Qr from 'qrcode.react';

//Componentes
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const QrCode = () => {
    const [mac, setMac] = React.useState();
    const [redirect, setRedirect] = React.useState(false);

    async function saveMac(){

      if(!mac)
        alert('Você precisa informar o numero que apareceu no celular!');
      else{
        await localStorage.setItem('@daylist/macaddress', mac);  
        setRedirect(true);
        window.location.reload();
    }
    }

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />
        <S.Content>
          <h1>CAPTURE O QRCODE PELO CELULAR</h1>
          <p>Suas atividades serão sincronizadas com o App</p>

          <S.Qrcode>
            <Qr value="getmacaddress" size={350} />
          </S.Qrcode>
          <S.CodeSync>
            <span>digite o nuúmero que aparece no seu celular</span>
            <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
            <button type="button" onClick={saveMac}>SINCRONIZAR</button>
          </S.CodeSync>
        </S.Content>
      <Footer />
    </S.Container>
  )
}

export default QrCode
