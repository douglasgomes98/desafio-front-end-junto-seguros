import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, MoviesCount } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import Logo from '~/assets/images/logo.svg';
import { ApplicationState } from '~/store/types';
import { Movie } from '~/store/modules/movies/types';

interface IMenuLink {
  to: string;
}

const MenuLink: React.FC<IMenuLink> = ({ to, children }) => {
  const match = useRouteMatch({
    path: to,
  });

  return (
    <Link className={match ? 'nav-link active' : 'nav-link'} to={to}>
      {children}
    </Link>
  );
};

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector<ApplicationState, Movie[]>(
    (state) => state.movies.list,
  );
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand h1 mb-0" to="/movies">
          <img src={Logo} alt="Junto Seguros" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <MenuLink to="/my_list">
                <MoviesCount>
                  <div>Minha Lista</div>
                  <span className="badge badge-secondary">{list.length}</span>
                </MoviesCount>
              </MenuLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-secondary pl-3 pr-3"
            onClick={() => handleSignOut()}
          >
            Sair
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
