import type { ChangePageProps } from './chat.type';

export interface CallPageProps extends ChangePageProps {
  id?: number;
  isMeet: boolean;
  setIsMeet: (isMeet: boolean) => void;
}
