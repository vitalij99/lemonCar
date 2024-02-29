import Hero from '@/app/_componets/Hero/Hero';
import Available from '@/app/_componets/Available/Available';
import Advantage from '@/app/_componets/Advantage/Advantage';
import Box from '@/app/_componets/Box/Box';
import Steps from '@/app/_componets/Steps/Steps';

import Contact from '@/app/_componets/Contact/Contact';
import Faq from '@/app/_componets/Faq/Faq';
import Carlist from '@/app/_componets/Carlist/Carlist';
import { getCarList } from '@/lib/carList';

export default async function Home() {
  const listCar = (await getCarList({ pagenation: 6 })) ?? [];
  return (
    <main>
      <Hero />
      <Available />
      <Advantage />

      <Carlist list={listCar} />
      <Steps />
      <Contact />
      <Faq />
    </main>
  );
}
