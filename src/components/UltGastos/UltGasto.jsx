// Componente do card Último Gasto, onde o usuário pode adicionar os seus gastos variáveis recentes
import { useState } from 'react';
import './UltGasto.css';
import Modal from '../Modal/Modal'

function UltGastos() {
const [isModalOpen, setisModalOpen] = useState(false)
const [ultimosGastos, setUltimosGastos] = useState([]) // Define o useState para a lista de Últimos Gastos
const [novoUg, setNovoUg] = useState('') // useState para adicionar um novo item a lista Últimos Gastos


  class UltGasto {
    constructor(valor, tipo, data) {
      this.valor = valor;
      this.tipo = tipo;
      this.data = data;
    }

    validarDados() {
      for (let key in this) {
        if (this[key] === undefined || this[key] === "") {
          console.error(`O campo '${key}' é obrigatório!`)
          return false
        } 
      } return true
    }
  }

  function addNovoUg() {
    const valor = document.getElementById('valor').value
    const tipo = document.getElementById('tipo').value
    const data = document.getElementById('data').value

    const ug = new UltGasto(valor, tipo, data)

    alert('Dados coletados com sucesso!')

    if (ug.validarDados()) {
      alert('Gasto registrado com sucesso!')
      setUltimosGastos([...ultimosGastos, { text: `R$ ${ug}` }])
    }
  }    

return (<>
<div className='card-ug'>
  <div className='ug-header'>
    <h3>Últimos gastos</h3>
    <button onClick={() => setisModalOpen(true)}>+</button>
  </div>
  <div className='ug-content'>
    <ul> {ultimosGastos.map((ug, index) => (<li key={index}><span>{ug.text}</span></li>))}
      <li>R$ 35,42 - Comida</li>
    </ul>
  </div>
</div>

<Modal isOpen={isModalOpen} onClose={() => setisModalOpen(false)}>
  <div className='modalUg'>
    <form action="" className='formUg'>
      <input className='formGroup' type="number" placeholder='R$ 0,00' id='valor' step='0.01' min='0' required />
      <select className='formGroup' id="tipo" required>
        <option value="" disabled selected>Selecione um tipo</option>
        <option value="Comida">Comida</option>
        <option value="Lazer">Lazer</option>
        <option value="Saúde">Saúde</option>
        <option value="Manutenção">Manutenção</option>
        <option value="Outros">Outros</option>
      </select>
      <input className='formGroup' type="date" id='data' placeholder='DD-MM-AAAA' required/>
      <button className='formGroup' type='submit' onClick={addNovoUg}>Adcionar</button>
    </form>
  </div>
</Modal>
</>)}

export default UltGastos