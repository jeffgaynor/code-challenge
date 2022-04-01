import Link from 'next/link';
import { List, ListItem, NavButton, NavIcon, NavTrigger } from './Nav.styles';

export const Nav = () => {
  return (
    <nav role="navigation">
      <NavButton type="checkbox" id="nav-btn" />
      <NavTrigger htmlFor="nav-btn">
        <NavIcon />
      </NavTrigger>
      <List>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/quick-recipes">Quick Recipes</Link>
        </ListItem>
        <ListItem>
          <Link href="/on-the-go">On the Go</Link>
        </ListItem>
        <ListItem>
          <Link href="/kids-meals">Kids Meals</Link>
        </ListItem>
        <ListItem>
          <Link href="/health">Health</Link>
        </ListItem>
      </List>
    </nav>
  );
};
