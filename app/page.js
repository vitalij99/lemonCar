import Hero from './_componets/Hero/Hero';
import Available from './_componets/Available/Available';
import Advantage from './_componets/Advantage/Advantage';
import Box from './_componets/Box/Box';
import Steps from './_componets/Steps/Steps';
import Reviews from './_componets/Reviews/Reviews';

import Contact from './_componets/Contact/Contact';
import Faq from './_componets/Faq/Faq';
import Carlist from './_componets/Carlist/Carlist';

export default function Home() {
  return (
    <main>
      <Hero />
      <Available />
      <Advantage />
      <Box />
      <Carlist />
      <Steps />
      <Reviews />
      <Contact />
      <Faq />
    </main>
  );
}
