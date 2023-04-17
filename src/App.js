import React from 'react';
import { MainRoutes } from './routes';
import { MainLayout } from './layout';
import { ThemeProvider, CartProvider } from './context'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CartProvider>
          <MainLayout>
            <MainRoutes/>
          </MainLayout>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
