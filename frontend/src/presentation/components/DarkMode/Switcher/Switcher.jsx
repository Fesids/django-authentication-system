import React, { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../useDarkSide';

export default function Switcher() {
const [colorTheme, setTheme] = useDarkSide()
const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

const toggleDarkMode = checked => {
setTheme(colorTheme);
setDarkSide(checked);
};

return (
<>
    <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={32} />
    </div>
</>
);
}