import Admin from '../_componets/Admin/Admin';

export default function RootLayout({ children }) {
  return (
    <div>
      <Admin />
      {children}
    </div>
  );
}
