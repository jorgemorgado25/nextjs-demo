import { FC } from 'react';
import styles from './DarkLayout.module.css';

console.log(styles);

export const DarkLayout: FC = ({ children }) => {
  return (
    <div className={ styles.bgColor}>
        <div>
            { children }
        </div>
    </div>
  )
}
