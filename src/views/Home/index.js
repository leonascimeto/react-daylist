import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//Componentes
import Header from '../../Components/Header';
import FilterCard from '../../Components/FilterCard';
import Footer from '../../Components/Footer';
import TaskCard from '../../Components/TaskCard';
import Title from '../../Components/Title'

const Home = () => {
  const [filterActived, setFilterActived] = React.useState('all');
  const [tasks, setTasks] = React.useState([]);
  const [redirect, setRedirect] = React.useState(false);
  
  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
    .then(res => setTasks(res.data));
  }

  function notification(){
    setFilterActived('late')
  }

  React.useEffect(()=>{
    loadTasks();
    if(!isConnected){
      setRedirect(true)
    }
  },[filterActived, redirect])

  return (
    <S.Container>
      {redirect && <Redirect to='/qrcode' />}
    <Header clickNotification={notification} />
    <S.FilterArea>
        <button type="button" onClick={() => {setFilterActived('all')}}>
          <FilterCard title="Todos" actived={filterActived === 'all'}/>
        </button>
        <button type="button" onClick={() => {setFilterActived('today')}} >
          <FilterCard title="Hoje" actived={filterActived === 'today'}/>
        </button>
        <button type="button" onClick={() => {setFilterActived('week')}}>
          <FilterCard title="Semana" actived={filterActived === 'week'}/>
        </button>
        <button type="button" onClick={() => {setFilterActived('month')}}>
          <FilterCard title="Mês" actived={filterActived === 'month'}/>
        </button>
        <button type="button"  onClick={() => {setFilterActived('year')}}>
          <FilterCard title="Ano" actived={filterActived === 'year'}/>
        </button>
      </S.FilterArea>
    {filterActived === 'late' ? (<Title title="tarefas atrasadas"/>) : (<Title title="tarefas"/>)}
    <S.Content>
      {
        tasks.map(item => (
          <Link to={`/task/${item._id}`}>
            <TaskCard type={item.type} title={item.title} when={item.when} done={item.done}/>
          </Link>
        ))
      }
    </S.Content>
    <Footer />
    </S.Container>
  )
}

export default Home;
