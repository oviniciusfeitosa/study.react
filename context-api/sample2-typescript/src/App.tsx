import React, { Fragment } from 'react';

import MyPage from './components/MyPage';
import { Theme } from './providers/Theme.enum';
import { ThemeContext } from './providers/ThemeContext';

const App = () => {

  const [theme, setTheme] = React.useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme , setTheme}}>
      <MyPage />
    </ThemeContext.Provider>
  );
};

export default App;
