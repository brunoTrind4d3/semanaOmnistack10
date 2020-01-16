import React, { useEffect, useState } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post(
      '/devs',
      github_username,
      techs,
      latitude,
      longitude
    );
    console.log(response.data);
    setGithubUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            ></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            ></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/49998605?s=400&u=8e5960f291e93b224319f3e35208624fe9ad9ff6&v=4"
                alt="brunoTrind4d3"
              />
              <div className="user-info">
                <strong>Bruno Trindade</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>
              Graduando em Análise e Desenvolvimento de sistemas -SENAI FATESG.
              Java Web Developer. Flutter Mobile Developer.
            </p>
            <a href="http://github.com/brunoTrind4d3">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/49998605?s=400&u=8e5960f291e93b224319f3e35208624fe9ad9ff6&v=4"
                alt="brunoTrind4d3"
              />
              <div className="user-info">
                <strong>Bruno Trindade</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>
              Graduando em Análise e Desenvolvimento de sistemas -SENAI FATESG.
              Java Web Developer. Flutter Mobile Developer.
            </p>
            <a href="http://github.com/brunoTrind4d3">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/49998605?s=400&u=8e5960f291e93b224319f3e35208624fe9ad9ff6&v=4"
                alt="brunoTrind4d3"
              />
              <div className="user-info">
                <strong>Bruno Trindade</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>
              Graduando em Análise e Desenvolvimento de sistemas -SENAI FATESG.
              Java Web Developer. Flutter Mobile Developer.
            </p>
            <a href="http://github.com/brunoTrind4d3">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/49998605?s=400&u=8e5960f291e93b224319f3e35208624fe9ad9ff6&v=4"
                alt="brunoTrind4d3"
              />
              <div className="user-info">
                <strong>Bruno Trindade</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>
              Graduando em Análise e Desenvolvimento de sistemas -SENAI FATESG.
              Java Web Developer. Flutter Mobile Developer.
            </p>
            <a href="http://github.com/brunoTrind4d3">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
