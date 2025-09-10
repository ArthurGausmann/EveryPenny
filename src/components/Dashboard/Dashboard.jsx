import './Dashboard.css';
import UltGastos from '../UltGastos/UltGasto';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function Dashboard() {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [cardUG, setCardUG] = useState(false)

  const addCardUG = () => {
    setCardUG(ant => !ant)
  }

  
return (<>
<div className='dashboard'>
  <div className='db-header'>
    <div className='db-profile'>
      <img src='/logo.png' alt="Miniatura do Perfil" width='25px' height='25px'/>
      <h2>Perfil 2</h2>
    </div>
    <div className='db-layout'>
      <button onClick={() => setisModalOpen(true)}>Editar</button>
    </div>
  </div>
  {cardUG && <UltGastos/>}
</div>

<Modal isOpen={isModalOpen} onClose={() => setisModalOpen(false)}>
  <button onClick={addCardUG}>{cardUG ? 'Remover' : 'Adicionar'} card Últimos Gasto</button>
</Modal>
</>)}

export default Dashboard