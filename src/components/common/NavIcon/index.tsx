import * as S from './style';

type IconKinds =
  "best" |
  "like" |
  "home" |
  "cart" |
  "history" |
  "person" |
  "recent" |
  "setting";

const iconURL = {
  best: "icon_best.png",
  like: "icon_like.png",
  home: "icon_home_2.svg",
  cart: "icon_cart.png",
  history: "icon_history.png",
  person: "icon_person.png",
  recent: "icon_recent.png",
  setting: "icon_setting.png"
} as const;

interface NavIconProps {
  name: IconKinds;
}

export const NavIcon = ({ name }: NavIconProps) => {
  return (
    <S.IconBox>
      <S.Icon src={`${import.meta.env.BASE_URL}assets/icons/${iconURL[name]}`} />
    </S.IconBox>
  )
}