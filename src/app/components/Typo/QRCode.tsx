// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

import React from 'react';
import themed from 'components/Theme/themed';
import QRCodeImage from 'qrcode.react';
import Hint from './Hint';

interface Props {
    className?: string;
    value: string;
}

const QRCode: React.SFC<Props> = props => (
    <div className={props.className}>
        <div className="qrcode__image">
            <QRCodeImage value={props.value} />
        </div>
        <div className="qrcode__hint">
            <Hint icon="info-circle">{props.children}</Hint>
        </div>
    </div>
);

export default themed(QRCode)`
    display: flex;
    flex-direaction: row;
    align-items: center;
    margin-bottom: 30px;

    .qrcode__hint {
        padding-left: 20px;
        flex: 1;
    }
`;
