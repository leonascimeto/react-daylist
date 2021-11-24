import React from 'react';
import * as S from './styles';
import { format } from 'date-fns'
import typeIcons from '../../utils/typeIcons';


const TaskCard = ({type, title, when, done}) => {

  const date = React.useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = React.useMemo(() => format(new Date(when), 'HH:mm'));

  return (
    <S.Container done={done}>
      <S.Main>
        <img src={typeIcons[type].img} alt="Tipo" />
        <span>{title}</span>
      </S.Main>
      <S.Info>
        <span>{date}</span>
        <span>{hour}</span>
      </S.Info>
    </S.Container>
  )
}

export default TaskCard;
