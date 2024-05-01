import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import { CycleLoading } from '../Loading';

interface ObserveElementProps {
  isLoading: boolean;
  hasNext?: boolean;
  callback: () => void;
}

export const ObserveElement = ({ callback, isLoading, hasNext }: ObserveElementProps) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    callback()
  }, [inView, callback])
  
  return (
    <>
      {isLoading ? <CycleLoading /> :
        hasNext ? <div ref={ref}></div> : null}
    </>
  )
}