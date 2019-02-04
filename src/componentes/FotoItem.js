import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>
            </section>            
        );
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-info">
              <div className="foto-info-likes">

                {this.props.foto.likers.map(liker=>{
                  return(
                    <a href="#">
                    {liker.login},
                    </a>
                  )
                })}

                curtiram

              </div>

              <p className="foto-info-legenda">
                <a className="foto-info-autor">autor</a>
                {this.props.foto.comentario}
              </p>

              <ul className="foto-info-comentarios">

                {this.props.foto.comentarios.map(comentario =>{
                  return(
                    <li className="comentario">
                      <a className="foto-info-autor">seguidor </a>
                      {comentario.texto}
                    </li>
                  )
                })}
               
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://scontent.fplu11-1.fna.fbcdn.net/v/t1.0-9/47094239_1688986687874550_429160175962685440_n.jpg?_nc_cat=107&_nc_ht=scontent.fplu11-1.fna&oh=3d70c7f8455dd8e9e0dfb8cfe773ba87&oe=5CF936B8" alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    {this.props.foto.loginUsuario}
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">{this.props.horario}</time>
            </header>            
        );
    }
}

export default class FotoItem extends Component {
    render(){
        return (
          <div className="foto">
            <FotoHeader foto={this.props.foto} />
            <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} />
            <FotoInfo foto={this.props.foto} />
            <FotoAtualizacoes/>
          </div>            
        );
    }
}