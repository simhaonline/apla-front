/*---------------------------------------------------------------------------------------------
 *  Copyright (c) EGAAS S.A. All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { combineEpics } from 'redux-observable';
import displayDataEpic from './epics/displayDataEpic';
import fetchNotificationsEpic from './epics/fetchNotificationsEpic';
import buttonInteractionEpic from './epics/buttonInteractionEpic';
import signPdfEpic from './epics/signPdfEpic';
import signResultPdfEpic from './epics/signResultPdfEpic';

export default combineEpics(
    displayDataEpic,
    fetchNotificationsEpic,
    buttonInteractionEpic,
    signPdfEpic,
    signResultPdfEpic
);
