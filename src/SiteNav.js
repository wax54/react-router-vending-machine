import { NavLink } from 'react-router-dom';

const SiteNav = ({ pageList=[], className }) => (
    <nav className={className}>
        {pageList.map( ({ path, name }) => (
            <NavLink key={path} exact to={path}>{name}</NavLink>
        ))}
    </nav>
);
export default SiteNav