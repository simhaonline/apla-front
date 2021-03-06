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

import * as actions from './actions';
import { IModal } from 'apla/modal';
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';
import modalShowHandler from './reducers/modalShowHandler';
import modalCloseHandler from './reducers/modalCloseHandler';

export type State =
    IModal;

export const initialState: State = {
    id: null,
    type: null,
    result: null,
    params: null
};

export default reducerWithInitialState<State>(initialState)
    .case(actions.modalShow, modalShowHandler)
    .case(actions.modalClose, modalCloseHandler);