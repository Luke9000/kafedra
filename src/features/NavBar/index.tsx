import clsx from 'clsx';
import Button from '../../shared/ui/button';
import styles from './styles.module.css';


interface Props {
    className?: string;
    marginTop?: number;
} 

const NavBar = ({className, marginTop}:Props) => {

  return (
    <div className={clsx(styles.navBar, className)}
    style={{ marginTop: `${marginTop}vh` }}>
        <Button text = 'Выпускники' status="default"> </Button>
        <Button text  = 'Преподаватели' status="active"> </Button>
        <Button text = 'История кафедры' status="default"> </Button>
    </div>
  )
}

export default NavBar