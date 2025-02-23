import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header/index'
import Toolbar from '../../widgets/Toolbar'


interface Props {
    children?: React.ReactNode
}

export default function DashboardLayout({ children}:Props ) {

  return (
    <>
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
      <Toolbar></Toolbar>
    </>

  );
}