import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import logo from '../../assets/logo.svg';
import bell from '../../assets/icon-bell.svg';

const Header = ({clickNotification}) => {
  const [countLateTask, setCountLateTask] = React.useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/${isConnected}`)
    .then(res => setCountLateTask(res.data.length));
  }

  async function logout(){
    localStorage.removeItem('@daylist/macaddress');
    window.location.reload();
  }

  useEffect(()=>{
    lateVerify()
  },[])

  return (
    <S.Container>
      <S.LeftSide>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Inicio</Link>
          <span className="divisor"></span>
        <Link to="/task">Nova Tarefa</Link>
          <span className="divisor"></span>
        {!isConnected ? <Link to="/qrcode">
          Sincronizar Com Celular
        </Link> :
        <button type="button" onClick={logout} id="btn-sair">Sair</button>
        }
        {countLateTask && isConnected &&
          <>
            <span className="divisor"></span>
            <button id="notification" onClick={clickNotification}>
              <img src={bell} alt="Notificações" />
              <span>{countLateTask}</span>
            </button>
        </>}
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
