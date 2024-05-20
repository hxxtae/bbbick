import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Badge from '@muiDom/Badge';
import List from '@muiDom/List';
import ListItem from '@muiDom/ListItem';
import ListItemButton from '@muiDom/ListItemButton';
import { BadgeBoxProps, HeadProps, IconProps, LinkProps } from '@/interface/nav';
import SearchIcon from '@icons/Search';
import { NavIcon } from '@/components/common/NavIcon';
import * as S from './style';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <List sx={{
      fontSize: 14,
      bgcolor: "bg.card",
      p: 0,
      pt: "20px",
      pb: "20px",
      borderRight: 1,
      borderBottom: 1,
      borderColor: "border.main",
      "&:last-child": {
        flexGrow: 1
      }
    }}>
      {children}
    </List>
  )
}

export const Head1 = ({ title }: HeadProps) => {
  return (
    <S.H1>{ title }</S.H1>
  )
}

export const Head2 = ({ title }: HeadProps) => {
  return (
    <S.H2 sx={{ pl: "20px", pt: "10px", pb: "10px" }}>{ title }</S.H2>
  )
}

export const Item = ({ name, path, badgeContent }: LinkProps) => {
  const { pathname } = useLocation()

  return (
    <Link to={path}>
      <ListItem sx={{ padding: 0, fontSize: "14px", bgcolor: path === pathname ? "border.main" : null }}>
        <ListItemButton sx={{ p: 0, pl: "20px", pt: "5px", pb: "5px", fontSize: "14px" }}>
          <S.IconBox>
            <BadgeBox badgeContent={badgeContent}>
              <Icon pathName={path} />
            </BadgeBox>
          </S.IconBox>
          <S.Text sx={{ fontSize: 14, fontWeight: 600, color: 'text.main'}}>
            {name}
          </S.Text>
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export const Icon = ({ pathName }: IconProps) => {
  switch (pathName) {
    case '/': {
      return <NavIcon name="home" />
    }
    case '/best': {
      return <NavIcon name="best" />
    }
    case '/like': {
      return <NavIcon name="like" />
    }
    case '/recent': {
      return <NavIcon name="recent" />
    }
    case '/mypage': {
      return <NavIcon name="person" />
    }
    case '/history': {
      return <NavIcon name="history" />
    }
    case '/cart': {
      return <NavIcon name="cart" />
    }
    case '/management': {
      return <NavIcon name="setting" />
    }
    case '/search': {
      return <SearchIcon />
    }
    default: {
      break;
    }
  }
}

export const BadgeBox = ({ children, badgeContent = 0 }: BadgeBoxProps) => {
  return (
    <Badge badgeContent={badgeContent} color="primary">
      {children}
    </Badge>
  )
}

export const Nav = Object.assign(Container, {
  Head1,
  Head2,
  Item
})