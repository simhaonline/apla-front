/*---------------------------------------------------------------------------------------------
 *  Copyright (c) EGAAS S.A. All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from 'react';

import Window from 'components/Window';
import AccountList from 'containers/AccountList';
import Button from 'components/Button/Button';
import HeaderSeparator from 'components/Header/HeaderSeparator';
import Header from 'components/Header';

interface Props {
    className?: string;
    isEmpty: boolean;
    networkStatus: 'ONLINE' | 'OFFLINE' | 'PENDING';
    activationEnabled: boolean;
    onCreate: () => any;
    onRecover: () => any;
}

const Auth: React.SFC<Props> = props => (
    <Window
        className={props.className}
        type="brand"
        header={
            <Header vertical>
                <HeaderSeparator />
            </Header>
        }
        footer={
            <div>
                <Button
                    className="btn btn-primary btn-block"
                    onClick={props.onCreate}
                >
                    Create or Recover Account
                </Button>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}
                >
                    Powered by&nbsp;
                    <a
                        href="https://apla.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apla
                    </a>
                </div>
            </div>
        }
    >
        <AccountList />
    </Window>
);

export default Auth;
