import Admin from '../_componets/Admin/Admin';
import DarkProvider from '../_componets/DarkProvider/DarkProvider';

export default function RootLayout({ children }) {
  return (
    <div>
      <DarkProvider>
        <Admin />
        {children}
      </DarkProvider>
    </div>
  );
}
