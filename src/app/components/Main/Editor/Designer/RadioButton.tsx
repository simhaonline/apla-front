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

import * as React from 'react';
import * as classnames from 'classnames';
import styled from 'styled-components';

interface IRadioButtonProps {
    src?: any;
    value: string;
    title?: string;
    selectedValue?: string;
    onClick?: any;

}

interface IRadioButtonState {

}

const Wrapper = styled.div`
    display: inline-block;
    
    .b-bullet {
        display: inline-block;
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 2px;
        border: 1px solid #9aa7b3;
        margin-left: 1px;
        margin-right: 1px;
        cursor: pointer;
    }
    
    .b-bullet_selected {
        border-color: #62b2fc;
        background-color: #62b2fc;
    }
    
    .b-bullet>img, .b-bullet>span {
        line-height: 100%;
        text-align: center;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 2px;
        box-sizing: border-box;
        vertical-align: top;
    }
    
    
`;

export default class RadioButton extends React.Component<IRadioButtonProps, IRadioButtonState> {

    constructor(props: IRadioButtonProps) {
        super(props);
    }

    render() {
        const classes = classnames({
            'b-bullet': true,
            'b-bullet_selected': this.props.value === this.props.selectedValue
        });
        return (
            <Wrapper>
                <div className={classes} onClick={this.props.onClick.bind(this, this.props.value)} title={this.props.title || ''}>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }
}