import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import wave from '../../assets/Home/Shape-bg.png'
import PopUp from './PopUp';
import './Projects.css'

export default function Projects() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [projectName, setProjectName] = useState('');
    return (
        <div className='projects-container'>
            <div className='projects-header'>
                <h1>Proyectos</h1>
            </div>
            <div className='projects-body'>
                <div className='projects-body-item'>
                    <div className='row'>
                        <div className='size-card uno'>
                            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px" >
                                <div className='card-tilt-style primera-card'>
                                    <div className='column'>
                                        <div className='card-tilt-left'>
                                            <div className='card-imagen'>
                                                <img className='cardimage' src={wave} alt='projecto 1' />
                                            </div>
                                        </div>
                                        <div className='card-tilt-right'>
                                            <div className='card-text'>
                                                <div className='card-text-title'>
                                                    <h2>Pagina Web Tienda de Juegos</h2>
                                                </div>
                                                <div className='card-text-description'>
                                                    <p>Durante este proyecto se planteó la creación de una Web donde se pueda iniciar sesión
                                                        para realizar el registro de un vendedor, al cual se le pueden agregar los juegos que vendió.
                                                        <span className='card-text-description more' onClick={() => {setButtonPopUp(true); setProjectName('Pagina Web Tienda de Juegos')}}> Leer más</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='card-tilt-footer'>
                                                <div className='card-title'><h6>Tecnologias Usadas</h6></div>
                                                <div className='card-stats'>
                                                    <div className='stat'>
                                                        <i className="fas fa-database"></i>
                                                        <div className='type'>MySQL</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fas fa-code"></i>
                                                        <div className='type'>PHP</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <div className='value'>Modelo</div>
                                                        <div className='type'>MVC</div>
                                                    </div>
                                                    {/* <div className='card-button'>
                                                        <button className='card-button-style' onClick={() => {setButtonPopUp(true); setProjectName('Pagina Web Tienda de Juegos')}}>
                                                            Ver Proyecto
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                        <div className='size-card dos'>
                            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px" >
                                <div className='card-tilt-style segunda-card'>
                                    <div className='column'>
                                        <div className='card-tilt-left'>
                                            <div className='card-imagen'>
                                                <img className='cardimage' src={wave} alt='projecto 2' />
                                            </div>
                                        </div>
                                        <div className='card-tilt-right'>
                                            <div className='card-text'>
                                                <div className='card-text-title'>
                                                    <h2>App Registro de Pacientes</h2>
                                                </div>
                                                <div className='card-text-description'>
                                                    <p>El desafio que involucró el diseño de esta aplicación fue el de generar una base de datos de psicologos y sus
                                                        respectivos pacientes, para que los psicologos puedan registrar los pacientes que atienden.
                                                        <span className='card-text-description more' onClick={() => {setButtonPopUp(true); setProjectName('App Registro de Pacientes')}}> Leer más</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='card-tilt-footer'>
                                                <div className='card-title'><h6>Tecnologias Usadas</h6></div>
                                                <div className='card-stats'>
                                                    <div className='stat'>
                                                        <i className="fas fa-database"></i>
                                                        <div className='type'>FireBase</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fas fa-code"></i>
                                                        <div className='type'>Java</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fab fa-android"></i>
                                                        <div className='type'>Android</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                        <div className='size-card tres'>
                            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px" >
                                <div className='card-tilt-style tercera-card'>
                                    <div className='column'>
                                        <div className='card-tilt-left'>
                                            <div className='card-imagen'>
                                                <img className='cardimage' src={wave} alt='projecto 3' />
                                            </div>
                                        </div>
                                        <div className='card-tilt-right'>
                                            <div className='card-text'>
                                                <div className='card-text-title'>
                                                    <h2>App Monitor de Sensores</h2>
                                                </div>
                                                <div className='card-text-description'>
                                                    <p>Muchas veces se requiere obtener datos desde apis externas, para poder realizar distintas acciones con los datos obtenidos
                                                    para ello esta aplicación consta de obtener datos de una API externa, y luego usar estos datos para ser mostrados en tablas o 
                                                    en lo que sea que se requiera.
                                                    <span className='card-text-description more' onClick={() => {setButtonPopUp(true); setProjectName('App Monitor de Sensores')}}> Leer más</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='card-tilt-footer'>
                                                <div className='card-title'><h6>Tecnologias Usadas</h6></div>
                                                <div className='card-stats'>
                                                    <div className='stat'>
                                                        <i className="fas fa-server"></i>
                                                        <div className='type'>Api</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fas fa-code"></i>
                                                        <div className='type'>Java</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fab fa-windows"></i>
                                                        <div className='type'>Windows</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                        <div className='size-card cuatro'>
                            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px" >
                                <div className='card-tilt-style cuarta-card'>
                                    <div className='column'>
                                        <div className='card-tilt-left'>
                                            <div className='card-imagen'>
                                                <img className='cardimage' src={wave} alt='projecto 3' />
                                            </div>
                                        </div>
                                        <div className='card-tilt-right'>
                                            <div className='card-text'>
                                                <div className='card-text-title'>
                                                    <h2>App de Notas Grupales</h2>
                                                </div>
                                                <div className='card-text-description'>
                                                    <p>En la actualiadad aveces se tiende a mandas mensajes como notas a otras personas para mantener
                                                    una especie de lista de tareas, pero eso se puede hacer más practico con esta aplicación, ya que
                                                    se puede crear grupos de personas y crear tareas facilmente.
                                                    <span className='card-text-description more' onClick={() => {setButtonPopUp(true); setProjectName('App Notas Grupales')}}> Leer más</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='card-tilt-footer'>
                                                <div className='card-title'><h6>Tecnologias Usadas</h6></div>
                                                <div className='card-stats'>
                                                    <div className='stat'>
                                                        <i className="fas fa-database"></i>
                                                        <div className='type'>FireBase</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fas fa-code"></i>
                                                        <div className='type'>Dart</div>
                                                    </div>
                                                    <div className='stat'>
                                                        <i className="fas fa-mobile"></i>
                                                        <div className='type'>Flutter</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>

            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                {projectName === 'Pagina Web Tienda de Juegos' ?
                    <div className='popup-content'>
                        <div className='popup-image'>
                            <img className='cardimage' src={wave} alt='projecto 1' />
                        </div>
                        <div className='popup-text'>
                            {/* <h2>{projectName}</h2> */}
                            <h2>Pagina Web Tienda de Juegos</h2>
                            <p>Durante este proyecto se planteó la creación de una Web donde se pueda iniciar sesión
                                para realizar el registro de un vendedor, al cual se le pueden agregar los juegos que vendió.
                            </p>
                            <div className='popup-stats'>
                                <div className='stat'>
                                    <i className="fas fa-database"></i>
                                    <div className='type'>MySQL</div>
                                </div>
                                <div className='stat'>
                                    <i className="fas fa-code"></i>
                                    <div className='type'>PHP</div>
                                </div>
                                <div className='stat'>
                                    <div className='value'>Modelo</div>
                                    <div className='type'>MVC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : projectName === 'App Registro de Pacientes' ?
                        <div div className='popup-content'>
                            <div className='popup-image'>
                                <img className='cardimage' src={wave} alt='projecto 1' />
                            </div>
                            <div className='popup-text'>
                                <h2>App Registro de Pacientes</h2>
                                <p>El desafio que involucró el diseño de esta aplicación fue el de generar una base de datos de psicologos y sus
                                    respectivos pacientes, para que los psicologos puedan registrar los pacientes que atienden.
                                </p>
                                <div className='popup-stats'>
                                    <div className='stat'>
                                        <i className="fas fa-database"></i>
                                        <div className='type'>FireBase</div>
                                    </div>
                                    <div className='stat'>
                                        <i className="fas fa-code"></i>
                                        <div className='type'>Dart</div>
                                    </div>
                                    <div className='stat'>
                                        <i className="fas fa-mobile-alt"></i>
                                        <div className='type'>Flutter</div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        : projectName === 'App Monitor de Sensores' ?
                        <div div className='popup-content'>
                            <div className='popup-image'>
                                <img className='cardimage' src={wave} alt='projecto 1' />
                            </div>
                            <div className='popup-text'>
                                <h2>App Monitor de Sensores</h2>
                                <p>Muchas veces se requiere obtener datos desde apis externas, para poder realizar distintas acciones con los datos obtenidos
                                    para ello esta aplicación consta de obtener datos de una API externa, y luego usar estos datos para ser mostrados en tablas o
                                    en lo que sea que se requiera.
                                </p>
                                <div className='popup-stats'>
                                    <div className='stat'>
                                        <i className="fas fa-database"></i>
                                        <div className='type'>FireBase</div>
                                    </div>
                                    <div className='stat'>
                                        <i className="fas fa-code"></i>
                                        <div className='type'>Dart</div>
                                    </div>
                                    <div className='stat'>
                                        <i className="fas fa-mobile-alt"></i>
                                        <div className='type'>Flutter</div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    : null}
            </PopUp>
        </div>
    )
}