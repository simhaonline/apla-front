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

import { connect } from 'react-redux';
import { IRootState } from 'modules';
import findNotificationsCount from 'modules/socket/util/findNotificationsCount';

import MainTabs from 'components/Main/MainTabs';

const mapStateToProps = (state: IRootState) => {
    const section = state.sections.sections[state.sections.mainSection];
    const notifications = findNotificationsCount(
        state.socket,
        state.auth.wallet
    );

    if (!section) {
        return {
            page: '',
            notifications
        };
    }

    const page = section.page;

    if (!page) {
        return {
            page: '',
            notifications
        };
    }

    return {
        page: page.name,
        notifications
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
