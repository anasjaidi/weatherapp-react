import FooterLayout from '../layouts/home/footer-layout';
import HeaderLayout from '../layouts/home/header-layout';
import MainLayout from '../layouts/home/main-layout';

function HomeContainer() {

  return (
    <div className='h-dvh flex flex-col'>
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </div>
  );
}

export default HomeContainer;
