import Hero from './_componets/Hero/Hero';
import Available from './_componets/Available/Available';
import Advantage from './_componets/Advantage/Advantage';
import Box from './_componets/Box/Box';
import Steps from './_componets/Steps/Steps';

import Contact from './_componets/Contact/Contact';
import Faq from './_componets/Faq/Faq';
import Carlist from './_componets/Carlist/Carlist';
import { getCarList } from '@/lib/carList';

export default async function Home() {
  const listCar = (await getCarList({ pagenation: 6 })) ?? [];
  return (
    <main>
      <Hero />
      <Available />
      <Advantage />
      <Box />
      <Carlist list={listCar} />
      <Steps />
      <Contact />
      <Faq />
    </main>
  );
}
