import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { store } from '../store/index';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default appWithTranslation(MyApp);
