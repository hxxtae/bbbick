import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Badge,
  List,
  ListItem,
  ListItemButton
} from '@mui/material';
import {
  AttachMoney,
  Favorite,
  ImportContacts,
  MenuBook,
  Person,
  Search,
  SettingsApplications,
  ShoppingCart,
  Star
} from '@mui/icons-material';
import * as S from './style';
import { BadgeBoxProps, HeadProps, IconProps, LinkProps } from '@/interface/nav';

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
      return <MenuBook />
    }
    case '/best': {
      return <Star />
    }
    case '/like': {
      return <Favorite />
    }
    case '/ebooks': {
      return <ImportContacts />
      }
    case '/mypage': {
      return <Person />
    }
    case '/history': {
      return <AttachMoney />
    }
    case '/cart': {
      return <ShoppingCart />
    }
    case '/management': {
      return <SettingsApplications />
    }
    case '/search': {
      return <Search />
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