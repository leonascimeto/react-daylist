import React from 'react';
import * as S from './styles';
import {format} from 'date-fns';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

//Componentes
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import typeIcons from '../../utils/typeIcons';

//icones
import IconTrash from '../../assets/icon-trash.svg';
import IconSave from '../../assets/icon-save.svg';

const Task = ({match}) => {
  const [redirect, setRedirect] = React.useState(false);
  const [type, setType] = React.useState(1);
  const [id, setId] = React.useState();
  const [done, setDone] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [date, setDate] = React.useState();
  const [hour, setHour] = React.useState();

  async function save(){
    if(!title)
      return alert('Necessário informar o título da tarefa')
    if(!date)
      return alert('Necessário informar a data da tarefa')
    if(!hour)
      return alert('Necessário informar a hora da tarefa')

    if(match.params._id){
      await api.put(`/task/${match.params._id}`, {
        macaddress: isConnected,
        type,
        title,
        description,
        done,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    }else{
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    }
  }

  async function loadTask(){
    await api.get(`/task/${match.params._id}`)
      .then(res => {
        setType(res.data.type);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setDate(format(new Date(res.data.when), 'yyyy-MM-dd'));
        setHour(format(new Date(res.data.when), 'HH:mm'));
        setDone(res.data.done)
      })
  }

  async function remove(){
    const confirm = window.confirm('Realmente deseja excluir a tarefa?')

    if(confirm){
      await api.delete(`/task/${match.params._id}`)
        .then(() => setRedirect(true))
    }

  }

  React.useEffect(()=>{
    if(!isConnected)
      setRedirect(true);

    loadTask();
  },[])



  return (
    <S.Container>
      {redirect && <Redirect to="/"/>}
      <Header />

      <S.Form>
        <S.TypeIcons>
          {
              typeIcons.map((icon, index) => (
              (index > 0)&& 
              <Tippy
              interactive={true}
              placement={'bottom'}
              content={
                <div>
                  <span>{icon.desc}</span>
                </div>
              }> 
                  <button 
                  type="button"
                  onClick={()=> setType(index)}
                  >
                  <img src={icon.img} alt="Tipo da tarefa" className={index && type !== index && 'inative'}/>
                  </button>
                </Tippy>

              ))
          }
        </S.TypeIcons>

        <S.Inputs>
          <label for="titulo">Título</label>
          <input id="titulo" value={title} type="text" placeholder="Dígite o número da tarefa" onChange={({target}) => setTitle(target.value)} />

          <label for="descricao">Descrição</label>
          <textarea rows="3" id="descricao" value={description} type="text" placeholder="Preencha com a descrição da tarefa"
          onChange={({target}) => setDescription(target.value)}
          ></textarea>

          <label for="data">Data</label>
          <input id="data" value={date} type="date"  
          onChange={({target}) => setDate(target.value)} />

          <label for="hora">Hora</label>
          <input id="hora" value={hour} type="time"
           onChange={({target}) => setHour(target.value)} />
        </S.Inputs>

        <S.Options>
          <label for="concluido">
            <input id="concluido" 
            type="checkbox"
            checked={done}
            onChange={() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </label>
          {match.params._id && 
          <button type="button" onClick={remove}>
            <img src={IconTrash} alt="Excluir" />
            EXCLUIR
          </button>}
          
        </S.Options>

        <S.Save>
          <button type="button" onClick={save}>
            <img src={IconSave} alt="Salvar" />
            SALVAR
          </button>
        </S.Save>

      </S.Form>

      <Footer />
    </S.Container>
  )
}

export default Task;
