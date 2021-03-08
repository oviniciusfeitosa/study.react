import './App.css';

import React from 'react';

function App() {
  return (

    <div className="App">
      <div className="col-auto ml-1 mt-5">
          <p className="h5">Avatar Letra</p><span className="br-avatar" title="Zé da Silva"><span className="image bg-support-01 text-secondary-01">z</span></span>
        </div>
    
      <div className="template-base">
      <nav id="skip-links">
        <div className="skip-links" aria-label="Acesso rápido">
          <a accessKey="1" href="#main-content">Ir para o Conteúdo<strong className="accesskey">1</strong></a>
          <a accessKey="2" href="#main-navigation">Ir para para Navegação<strong className="accesskey">2</strong></a>
          <a accessKey="3" href="#main-searchbox">Ir para para Busca<strong className="accesskey">3</strong></a>
        </div>
      </nav>
      <header className="br-header" id="header" data-sticky="data-sticky">
        <div className="container-lg">
          <div className="header-top">
            <div className="header-logo"><img src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-positive.png" alt="logo"/>
              <div className="header-sign">Assinatura</div>
            </div>
            <div className="header-actions">
              <div className="header-links dropdown">
                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Acesso Rápido</div>
                  </div><a className="br-item" href="javascript:void(0)">Link de acesso 1</a><a className="br-item" href="javascript:void(0)">Link de acesso 2</a><a className="br-item" href="javascript:void(0)">Link de acesso 3</a><a className="br-item" href="javascript:void(0)">Link de acesso 4</a>
                </div>
              </div><span className="br-divider vertical mx-half mx-sm-1"></span>
              <div className="header-functions dropdown">
                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i className="fas fa-th" aria-hidden="true"></i>
                </button>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Funcionalidades do Sistema</div>
                  </div>
                  <div className="align-items-center br-item">
                    <button className="br-button circle small" type="button"><i className="fas fa-chart-bar" aria-hidden="true"></i><span className="text">Funcionalidade 1</span>
                    </button>
                  </div>
                  <div className="align-items-center br-item">
                    <button className="br-button circle small" type="button"><i className="fas fa-headset" aria-hidden="true"></i><span className="text">Funcionalidade 2</span>
                    </button>
                  </div>
                  <div className="align-items-center br-item">
                    <button className="br-button circle small" type="button"><i className="fas fa-comment" aria-hidden="true"></i><span className="text">Funcionalidade 3</span>
                    </button>
                  </div>
                  <div className="align-items-center br-item">
                    <button className="br-button circle small" type="button"><i className="fas fa-adjust" aria-hidden="true"></i><span className="text">Funcionalidade 4</span>
                    </button>
                  </div>
                </div>
              </div><span className="br-divider vertical mx-half mx-sm-1"></span>
              <div className="header-search-trigger">
                <button className="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search"><i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <div className="header-login">
                <div className="header-sign-in">
                  <button className="br-button sign-in small" type="button" data-trigger="login"><i className="fas fa-user" aria-hidden="true"></i><span className="d-sm-inline">Entrar</span>
                  </button>
                </div>
                <div className="header-avatar d-none">
                  <div className="avatar dropdown"><span className="br-tag status small danger mr-n1">2</span><span className="br-avatar" title="Fulana da Silva"><span className="image"><img src="https://picsum.photos/id/823/400" alt="Avatar"/></span></span>
                    <button className="br-button circle small" type="button" aria-label="Abrir Menu de usuário" data-toggle="dropdown"><i className="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <div className="br-notification show">
                      <div className="notification-header">
                        <div className="row">
                          <div className="col-10"><span className="text-bold">Fulano da Silva</span><br/><small><a>nome.sobrenome@dominio.gov</a></small></div>
                        </div>
                      </div>
                      <div className="notification-body">
                        <div className="br-tab">
                          <nav className="tab-nav">
                            <ul>
                              <li className="tab-item">
                                <button type="button" data-panel="notif-item599" aria-label="notif-item599"><span className="name"><span className="icon"><i className="fas fa-image" aria-hidden="true"></i></span><span className="name">Item</span></span></button>
                              </li>
                              <li className="tab-item is-active">
                                <button type="button" data-panel="notif-item600" aria-label="notif-item600"><span className="name"><span className="icon"><i className="fas fa-image" aria-hidden="true"></i></span><span className="name">Item</span></span></button>
                              </li>
                            </ul>
                          </nav>
                          <div className="tab-content">
                            <div className="tab-panel" id="notif-item599">
                              <div className="br-list">
                                <button className="br-item" type="button"><i className="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                                </button><span className="br-divider"></span>
                                <button className="br-item" type="button"><i className="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                                </button><span className="br-divider"></span>
                                <button className="br-item" type="button"><i className="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                                </button>
                              </div>
                            </div>
                            <div className="tab-panel is-active" id="notif-item600">
                              <div className="br-list">
                                <button className="br-item" type="button"><span className="br-tag status small warning"></span><span className="text-bold">Título</span><span className="text-medium mb-2">25 de out</span><span>Nostrud consequat culpa ex mollit aute. Ex ex veniam ea labore laboris duis duis elit. Ex aute dolor enim aute Lorem dolor. Duis labore ad anim culpa. Non aliqua excepteur sunt eiusmod ex consectetur ex esse laborum velit ut aute.</span>
                                </button><span className="br-divider"></span>
                                <button className="br-item" type="button"><span className="text-bold">Título</span><span className="text-medium mb-2">24 de out</span><span>Labore nulla elit laborum nulla duis. Deserunt ad nulla commodo occaecat nulla proident ea proident aliquip dolore sunt nulla. Do sit eu consectetur quis culpa. Eiusmod minim irure sint nulla incididunt occaecat ipsum mollit in ut. Minim adipisicing veniam adipisicing velit nostrud duis consectetur aute nulla deserunt culpa aliquip.</span>
                                </button><span className="br-divider"></span>
                                <button className="br-item" type="button"><span className="br-tag status small warning"></span><span className="text-bold">Título</span><span className="text-medium mb-2">03 de out</span><span>Duis qui dolor dolor qui sint consectetur. Ipsum eu dolore ex anim reprehenderit laborum commodo. Labore do ut nulla eiusmod consectetur.</span>
                                </button><span className="br-divider"></span>
                                <button className="br-item" type="button"><span className="text-bold">Título</span><span className="text-medium mb-2">16 de mai</span><span>Sunt velit dolor enim mollit incididunt irure est. Ad ea Lorem culpa quis occaecat sunt in exercitation nisi. Sit laborum laborum dolor culpa ipsum velit. Non nulla nisi dolore et anim consequat officia deserunt amet qui. Incididunt exercitation irure labore ut Lorem culpa. Dolore ea irure pariatur ullamco culpa veniam amet dolor in fugiat pariatur ut. Sit non ut enim et incididunt tempor irure pariatur ex proident labore cillum dolore nisi.</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-menu">
              <div className="header-menu-trigger">
                <div className="br-menu" id="main-navigation">
                  <div className="menu-trigger">
                    <button className="br-button circle small" type="button" data-toggle="menu" aria-label="Abrir Menu Principal"><i className="fas fa-bars" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="menu-container">
                    <div className="row">
                      <div className="col-sm-4 col-lg-3">
                        <div className="menu-panel">
                          <div className="menu-header">
                            <div className="menu-close">
                              <button className="br-button circle" type="button" arial-label="Fechar o menu" data-dismiss="menu"><i className="fas fa-times" aria-hidden="true"></i>
                              </button>
                            </div>
                            <div className="menu-title"><img src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-positive.png" alt="Imagem ilustrativa"/></div>
                          </div>
                          <nav className="menu-body">
                            <div className="menu-folder"><a className="menu-item" href="javascript: void(0)"><span className="content">Agrupamento de menu 1</span></a>
                              <ul>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a></li>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a>
                                  <ul>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 1</span></a></li>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 1</span></a>
                                      <ul>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                      </ul>
                                    </li>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 1</span></a></li>
                                  </ul>
                                </li>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a></li>
                              </ul>
                            </div>
                            <div className="menu-folder"><a className="menu-item" href="javascript: void(0)"><span className="content">Agrupamento de menu 2</span></a>
                              <ul>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a></li>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a>
                                  <ul>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 2</span></a></li>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 2</span></a>
                                      <ul>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                      </ul>
                                    </li>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 2</span></a></li>
                                  </ul>
                                </li>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a></li>
                              </ul>
                            </div>
                            <div className="menu-folder"><a className="menu-item" href="javascript: void(0)"><span className="content">Agrupamento de menu 3</span></a>
                              <ul>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a></li>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a>
                                  <ul>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 3</span></a></li>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 3</span></a>
                                      <ul>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                        <li><a className="menu-item" href="javascript: void(0)"><span className="content">Último nível de menu</span></a></li>
                                      </ul>
                                    </li>
                                    <li><a className="menu-item" href="javascript: void(0)"><span className="content">Filho do item de menu 3</span></a></li>
                                  </ul>
                                </li>
                                <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu</span></a></li>
                              </ul>
                            </div>
                          </nav>
                          <div className="menu-footer">
                            <div className="menu-logos"><img src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-positive.png" alt="Imagem ilustrativa"/><img src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-positive.png" alt="Imagem ilustrativa"/></div>
                            <div className="menu-links"><a href="javascript: void(0)">Órgãos do Governo&nbsp;<i className="fas fa-external-link-square-alt" aria-hidden="true"></i></a><a href="javascript: void(0)">Legislação&nbsp;<i className="fas fa-external-link-square-alt" aria-hidden="true"></i></a></div>
                            <div className="menu-social">
                              <div className="text-semi-bold mb-1">Título</div>
                              <div className="sharegroup">
                                <div className="share"><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></div>
                                <div className="share"><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></div>
                                <div className="share"><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></div>
                                <div className="share"><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Whatsapp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></div>
                              </div>
                            </div>
                            <div className="menu-info">
                              <div className="text-center text-down-01">Todo o conteúdo deste site está publicado sob a licença <strong>Creative Commons Atribuição-SemDerivações 3.0</strong></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-scrim" data-dismiss="menu" ></div>
                  </div>
                </div>
              </div>
              <div className="header-info">
                <div className="header-title">Template básico</div>
                <div className="header-subtitle">Subtítulo do Header</div>
              </div>
            </div>
            <div className="header-search">
              <div className="br-input has-icon">
                <label htmlFor="main-searchbox">Texto da pesquisa</label>
                <input className="has-icon" id="main-searchbox" type="search" placeholder="O que você procura?"/>
                <button className="br-button circle small" type="button" aria-label="Pesquisar"><i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <button className="br-button circle search-close" type="button" aria-label="Fechar Busca"><i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <div className="container-lg">
          <div className="row" id="container-grid">
            <div className="col-sm-4 col-md-3" id="container-navigation">
              <div className="br-menu auxiliary">
                <div className="br-menu auxiliary">
                  <div className="menu-trigger">
                    <button className="br-button primary block" type="button" data-toggle="menu">Menu Auxiliar<i className="fas fa-angle-up" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="menu-container">
                    <div className="menu-panel">
                      <nav className="menu-body">
                        <div className="folder">
                          <ul>
                            <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu auxiliar 1</span></a></li>
                            <li><a className="menu-item active" href="javascript: void(0)"><span className="content">Item de menu ativo</span></a></li>
                            <li><a className="menu-item" href="javascript: void(0)"><span className="content">Item de menu auxiliar 3</span></a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="menu-scrim" datatype="menu" ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" id="container-content">
              <div className="br-breadcrumb pt-3">
                <ul className="crumb-list">
                  <li className="crumb home">
                    <div className="br-button circle"><span className="sr-only">Página inicial</span><i className="icon fas fa-home"></i></div>
                  </li>
                  <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Tela Anterior</a>
                  </li>
                  <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Tela Anterior2</a>
                  </li>
                  <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Tela Anterior3</a>
                  </li>
                  <li className="crumb"><i className="icon fas fa-chevron-right"></i><a href="javascript:void(0)">Tela Anterior4</a>
                  </li>
                  <li className="crumb" data-active="active"><i className="icon fas fa-chevron-right"></i><span>Tela Atual</span>
                  </li>
                </ul>
              </div>
              <div className="main-content pl-3" id="main-content">
                <p className="h2">Template básico</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur ratione suscipit voluptatem reprehenderit aut recusandae autem voluptas quo nulla tenetur, quos a dolores enim ad, cum, eius et odio!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="br-footer" id="footer">
        <div className="container-lg">
          <div className="logo text-center"><img src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-negative.png" alt="Imagem"/></div>
        </div><span className="br-divider my-3"></span>
        <div className="container-lg">
          <div className="info">
            <div className="text-down-01 text-medium pb-3 text-center">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
