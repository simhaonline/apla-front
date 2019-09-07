/*---------------------------------------------------------------------------------------------
 *  Copyright (c) EGAAS S.A. All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from 'react';
import { INetworkEndpoint } from 'apla/auth';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { mainRoute } from 'lib/routing';
import platform from 'lib/platform';
import classnames from 'classnames';
import baseTheme from 'components/Theme/baseTheme';

import themed from 'components/Theme/themed';
import Auth from 'containers/Auth';
import Error from 'containers/Auth/Error';
import Splash from 'components/Splash';
import ModalProvider from 'containers/Modal/ModalProvider';
import NotificationsProvider from 'containers/Notifications/NotificationsProvider';
// import SecurityWarning from 'containers/SecurityWarning';
import ThemeProvider from 'components/Theme/ThemeProvider';
import Titlebar from 'components/Titlebar';
import Legal from 'components/Legal';
import Main from './Main';
import Layout from './Layout';

interface AppProps {
    network: INetworkEndpoint;
    locale: string;
    isSessionAcquired: boolean;
    isAuthenticated: boolean;
    isLoaded: boolean;
    isFatal: boolean;
    securityWarningClosed: boolean;
    localeMessages: { [key: string]: string };
    initialize?: () => void;
}

const ThemedApp = themed.div`
    &.platform-windows {
        border: solid 1px ${props => props.theme.windowBorder};
    }
`;

const StyledTitlebar = themed.div`
    background: ${props => props.theme.headerBackground};
    height: ${props => props.theme.headerHeight}px;
    line-height: ${props => props.theme.headerHeight}px;
    font-size: 15px;
    color: #fff;
    text-align: center;
`;

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        const appTitle = `Apla ${
            this.props.network ? '(' + this.props.network.apiHost + ')' : ''
        }`;
        const classes = classnames({
            'platform-desktop': platform.select({ desktop: true }),
            'platform-web': platform.select({ web: true }),
            'platform-windows': platform.select({ win32: true })
        });
        const isMain =
            !this.props.isFatal &&
            this.props.isLoaded &&
            this.props.isAuthenticated &&
            this.props.isSessionAcquired;

        return (
            <IntlProvider
                key={this.props.locale}
                locale={this.props.locale}
                defaultLocale="en-US"
                messages={this.props.localeMessages}
            >
                <ThemeProvider theme={baseTheme}>
                    <ThemedApp className={classes}>
                        <StyledTitlebar className="drag">
                            <Titlebar>{appTitle}</Titlebar>
                        </StyledTitlebar>
                        <ModalProvider />
                        <NotificationsProvider />

                        <Layout
                            type={isMain ? 'fullscreen' : 'window'}
                            footer={<Legal />}
                        >
                            {/* {platform.select({
                                web: !this.props.securityWarningClosed && (
                                    <SecurityWarning>
                                        <FormattedMessage
                                            id="general.security.warning"
                                            defaultMessage="Please use desktop version or mobile application for better security"
                                        />
                                    </SecurityWarning>
                                )
                            })} */}

                            <Switch>
                                {this.props.isFatal && (
                                    <Route path="/" component={Error} />
                                )}
                                {!this.props.isLoaded && (
                                    <Route path="/" component={Splash} />
                                )}
                                {!this.props.isAuthenticated && (
                                    <Route path="/" component={Auth} />
                                )}
                                {!this.props.isSessionAcquired && (
                                    <Route path="/" component={Splash} />
                                )}
                                <Route
                                    path={mainRoute}
                                    render={route => (
                                        <Main {...route.match.params} />
                                    )}
                                />
                            </Switch>
                        </Layout>
                    </ThemedApp>
                </ThemeProvider>
            </IntlProvider>
        );
    }
}

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

export default App;
