import React from 'react'
import { Provider } from 'react-redux'
import store from './store.js'
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import style from './styles.css'

function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>EDmanager</h1>
        <Jugadores />
        <EquipoSeleccionado />

      </main>
    </Provider>
  )
}

export default App
