import React from 'react'
import { connect } from 'react-redux'

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
            titulares.map(j => (
                <article className="titular">
                        <div>
                            <p>{j.nombre}</p>
                            <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                </article>
            ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({ 
            type: 'QUITAR_TITULAR',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)