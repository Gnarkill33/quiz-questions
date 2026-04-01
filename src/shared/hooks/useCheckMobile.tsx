import { useEffect, useState } from 'react';

interface Props {
  breakpoint?: number;
  onDesktopTransition?: () => void;
}

export const useCheckMobile = ({ breakpoint = 768, onDesktopTransition }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= breakpoint;
      setIsMobile(mobile);
      if (!mobile && onDesktopTransition) {
        onDesktopTransition();
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint, onDesktopTransition]);

  return isMobile;
};
