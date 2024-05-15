import { useEffect, useRef } from 'react'
import * as S from './style';

interface ShinyCardProps {
  children: React.ReactNode;
}

export const ShinyCard = ({ children }: ShinyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $card = cardRef.current;
    const $overlay = overlayRef.current;

    const mouseOnEvent = (e: MouseEvent) => {
      const [x, y] = [e.offsetX, e.offsetY];
      const rotateX = ((1 / 21) * y) - 10;
      const rotateY = ((-1 / 14) * x) + 10;
      $card?.style.setProperty('transform', `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      $overlay?.style.setProperty('background-position', `${(x / 5) + (y / 5)}%`);
      $overlay?.style.setProperty('filter', 'opacity(.8)');
    }

    const mouseOutEvent = () => {
      $card?.style.setProperty('transform', 'perspective(300px) rotateX(0deg) rotateY(0deg)')
      $overlay?.style.setProperty('filter', 'opacity(0)');
    }

    $card?.addEventListener('mousemove', mouseOnEvent);
    $card?.addEventListener('mouseout', mouseOutEvent);

    return () => {
      $card?.removeEventListener('mousemove', mouseOnEvent);
      $card?.removeEventListener('mouseout', mouseOutEvent);
    }
  }, []);

  return (
    <div ref={cardRef} style={{ position: "relative" }}>
      <S.Overlay ref={overlayRef} style={{ position: "absolute" }}></S.Overlay>
      {children}
    </div>
  )
}