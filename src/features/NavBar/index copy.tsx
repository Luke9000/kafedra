import clsx from 'clsx';
import Button from '../../shared/ui/button';
import styles from './styles.module.css';


interface Props {
    className?: string;
} 

const NavBar = ({className}:Props) => {

  return (
    <div className={clsx(styles.navBar, className)}>
        <Button text = 'Выпускники' status="default"> </Button>
        <Button text  = 'Преподаватели' status="active"> </Button>
        <Button text = 'История кафедры' status="default"> </Button>
    </div>
  )
}

export default NavBar