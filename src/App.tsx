import {AppRouter} from './app/router';import {StudentProvider} from './app/providers/StudentProvider';import {A11yProvider} from './app/providers/A11yProvider';
export default function App(){return <A11yProvider><StudentProvider><AppRouter/></StudentProvider></A11yProvider>}
