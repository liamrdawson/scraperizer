import {ScraperProvider} from './ScraperContext';

export default function Page({children}) {
    return(
        <ScraperProvider value={{
            hey: 'Ho',
            lets: 'Go'
        }}>
            <div className="page">
                {children}
            </div>
        </ScraperProvider>
    );  
}