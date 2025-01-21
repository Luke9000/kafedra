import { setLocalStorageItem, getLocalStorageItem} from "../../shared/libs/manipulateLocalStarage/manipulateLocalStorage"; 
import clsx from 'clsx';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { TEST_DURATION } from "../../shared/global";
import Button from '../../shared/ui/button'


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