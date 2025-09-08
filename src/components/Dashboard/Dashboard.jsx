import './Dashboard.css';
import UltGastos from '../UltGastos/UltGasto';

function Dashboard() {return (
<div className='dashboard'>
  <div className='db-header'>
    <div className='db-profile'>
      <img src='/logo.png' alt="Miniatura do Perfil" width='25px' height='25px'/>
      <h2>Perfil 2</h2>
    </div>
    <div className='db-layout'>
      <button>Editar</button>
    </div>
  </div>
  <UltGastos />
</div>
)}

export default Dashboard