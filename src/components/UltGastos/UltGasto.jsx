// Componente do card Último Gasto, onde o usuário pode adicionar os seus gastos variáveis recentes
import { useState } from 'react';
import './UltGasto.css';
import Modal from '../Modal/Modal'

function UltGastos() {
    const [isModalOpen, setisModalOpen] = useState(false)
    const [ultimosGastos, setUltimosGastos] = useState([]) // Define o useState para a lista de Últimos Gastos
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState('')
    const [data, setData] = useState('')


  class UltGasto {
    constructor(valor, tipo, data) {
      this.valor = parseFloat(valor).toFixed(2);
      this.tipo = tipo;

      const dataObj = new Date(data);
      const dataAjustada = new Date(dataObj.getTime() + dataObj.getTimezoneOffset() * 60000);
      this.data = dataAjustada.toLocaleDateString('pt-BR');
    }


    formatar() {
        return `R$ ${this.valor} - ${this.tipo} (${this.data})`
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!valor || !tipo || !data) {
      alert('Preencha todos os campos!');
      return;
    }

    const ug = new UltGasto(valor, tipo, data)
    setUltimosGastos([ug, ...ultimosGastos])

    setValor('')
    setTipo('')
    setData('')
    setisModalOpen(false)
  }

return (<>
<div className='card-ug'>
  <div className='ug-header'>
    <h3>Últimos gastos</h3>
    <button onClick={() => setisModalOpen(true)}>+</button>
  </div>
  <div className='ug-content'>
    <ul>{ultimosGastos.map((ug, index) => (<li key={index}><span>{ug.formatar()}</span></li>))}</ul>
  </div>
</div>

<Modal isOpen={isModalOpen} onClose={() => setisModalOpen(false)}>
  <div className='modalUg'>
    <form onSubmit={handleSubmit} className='formUg'>
      <input className='formGroup' type="number" placeholder='R$ 0,00' step='0.01' min='0' value={valor} onChange={(e) => setValor(e.target.value)} required />
      <select className='formGroup' value={tipo} onChange={(e) => setTipo(e.target.value)} required>
        <option value="" disabled>Selecione um tipo</option>
        <option value="Comida">Comida</option>
        <option value="Lazer">Lazer</option>
        <option value="Saúde">Saúde</option>
        <option value="Manutenção">Manutenção</option>
        <option value="Outros">Outros</option>
      </select>
      <input className='formGroup' type="date" value={data} onChange={(e) => setData(e.target.value)} required/>
      <button className='formGroup' type='submit'>Adicionar</button>
    </form>
  </div>
</Modal>
</>)}

export default UltGastos