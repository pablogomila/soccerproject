import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({suplentes, quitarSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
            suplentes.map(j => (
                <article className="suplente">
                        <div>
                            <p>{j.nombre}</p>
                            <button onClick={() => quitarSuplente(j)}>X</button>
                        </div>
                </article>
            ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: 'QUITAR_SUPLENTE',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)