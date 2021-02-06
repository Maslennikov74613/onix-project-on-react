import React from 'react';
 import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state={
            ids : ["about",'work','system'],
            text:{
                about : 'We help to transform your dreams intoreality with quality architecture solutions. From a simple idea, through a complex process to a spectacular result.',
              
                work : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nostrum deleniti, explicabo deserunt necessitatibus quibusdam, tempore.',
              
                system : 'Voluptatem, nostrum deleniti, explicabo deserunt necessitatibus quibusdam, tempore.Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
            mainText:'We help to transform your dreams intoreality with quality architecture solutions. From a simple idea, through a complex process to a spectacular result.'
        }
    }
    changeText = (event)=>{
        let target = event.target.id;
        console.log(target);
        if(this.state.ids.includes(target)) {
            console.log(this.state.text[target]);
            this.setState({mainText : this.state.text[target]});
        };
    }
  
  render(){
  
    return (
            <body>
                <div className="empty-header"></div>
                 <header className='header change-color'>
                      <img className='logo' src="./hex.png" alt="logo"/>
                      <div className="sidebar-top">
                          <div className="sidebar-top-button">CASES</div>
                          <ul className="sidebar-top-content">
                              <li><a href="#">Link 1</a></li>
                              <li><a href="#">Link 2</a></li>
                              <li><a href="#">Link 3</a></li>
                          </ul>
                      </div>
                      <div className="sidebar-top">
                          <div className="sidebar-top-button">CLIENTS</div>
                          <ul className="sidebar-top-content">
                              <li><a href="#">Link 4</a></li>
                              <li><a href="#">Link 5</a></li>
                              <li><a href="#">Link 6</a></li>
                          </ul>
                      </div>
                      <div className="sidebar-top">
                          <div className="sidebar-top-button">REVIEWS</div>
                          <ul className="sidebar-top-content">
                              <li><a href="#">Link 7</a></li>
                              <li><a href="#">Link 8</a></li>
                              <li><a href="#">Link 9</a></li>
                          </ul>
                      </div>
                 </header>

              <div className='empty-area'></div>

              <main className='main'>
                  <div className='tagline-area'>
                      <p className='main-tagline'>Simple ideas,<br/>stunning results.</p>              
                  </div>
                  <div id='sidebarLeft' onMouseOver={this.changeText}>
                    <div id='about' >ABOUT </div>
                    <div id='work' >WORK</div>
                    <div id='system' >SYSTEM</div>                 
                </div>      
                <div class='text-area main-text' >
                        {this.state.mainText}
                </div>
              </main>

              <div className='right-side-1'>
                  <div className="button-hire-us">
                      <a href="#"> HIRE US</a>
                  </div>
              </div>

              <div className='right-side-2'>
                  <div className='some-data'>
                      <table >
                          <tbody>
                            <tr>
                                <td className="num">376</td>
                            </tr>
                            <tr>
                                <td className="else">finished projects</td>
                            </tr>
                            <tr>
                                <td className="num">35</td>
                            </tr>
                            <tr>
                                <td className="else">countries</td>
                            </tr>
                            <tr>
                                <td className="num">299</td>
                            </tr>
                            <tr>
                                <td className="else">5/5 reviews</td>
                            </tr> 
                          </tbody>
                      </table>
                  </div>
              </div>
              <div className='recent_work'>
                  <p>Recent work</p>
              </div>
              <div className='empty_slider-1'></div>
              <div className='empty_slider-2'></div>       

              <footer className='footer'> 
                    <div className="container">
                        <ul>
                            <li>&copy;Масленников Влад</li>
                            <li><a className="btn-ref" href="https://github.com/Maslennikov74613">GIT HUB</a></li>
                            <li><a className="btn-ref" href="https://dribbble.com/shots/14777095-Architecture-Agency-Landing-Page/attachments/6482343?mode=media">Cсылка на оригинал дизайна</a></li>
                        </ul>
                    </div>
                    <div className="container">
                        <ul >
                            <li><a href="#" >Clients</a></li>
                            <li><a href="#">Revievs</a></li>
                            
                        </ul>
                    </div>
                    <div className="container">
                        <ul>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Warranty</a></li>
                            <li><a href="#">About company</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#anchor-up" className="anchor-up">
                          <img src="https://cdn.icon-icons.com/icons2/1372/PNG/512/arrow-33_91010.png" alt="anchor-up"/>
                         </a>
                    </div>
                          
              </footer>
             </body>

    );
  }
}

export default App;
