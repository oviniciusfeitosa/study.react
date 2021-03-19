import React from 'react';

import { Theme } from '../providers/Theme.enum';
import { useTheme } from '../providers/ThemeContext';

const MyPage: React.FC = () => {

    const { theme, setTheme } = useTheme();
console.log
    return (
        <div>
            <h1>My Page</h1>
            <button onClick={() => setTheme(Theme.Dark)}>switch to dark theme</button>
        </div>
    );
}

export default MyPage;