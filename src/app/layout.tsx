import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import { Children } from '@/types';
import '../../styles/index.scss';
import Provider from './Provider';

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
