// MIT License
// 
// Copyright (c) 2016-2018 AplaProject
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { Action } from 'redux';
import { Dispatch } from 'react-redux';
import { IRootState } from 'modules';

const state: IRootState = {
    auth: {
        loadedSeed: '',
        isAuthenticated: true,
        isLoggingIn: false,
        isCreatingAccount: false,
        createAccountError: '',
        isImportingAccount: false,
        importAccountError: '',
        id: '4158839290248807330',
        session: {
            sessionToken: '',
            refreshToken: '',
            apiHost: 'http://127.0.0.1:7079'
        },
        defaultAccount: '',
        account: {
            id: '4158839290248807330',
            encKey: '',
            address: '0415-8839-2902-4880-7330',
            ecosystem: '1',
            ecosystemName: null,
            username: 'founder'
        },
        role: {
            id: 1,
            name: 'Admin'
        },
        roles: null,
        privateKey: '',
        ecosystem: '1'
    },
    content: {
        preloading: true,
        preloadingError: null,
        stylesheet: 'body {\n\t\t  /* You can define your custom styles here or create custom CSS rules */\n\t\t}',
        navigationResizing: false,
        section: 'editor',
        sections: {},
        notifications: []
    },
    modal: {
        id: null,
        type: null,
        result: null,
        params: null
    },
    engine: {
        nodeHost: 'http://127.0.0.1:7079',
        localeMessages: {},
        isCollapsed: true,
        isLoaded: true,
        isOffline: false,
        isConnecting: false
    },
    editor: {
        pending: false,
        tabIndex: 0,
        tabs: [
            {
                type: 'page',
                id: '1',
                'new': false,
                name: 'default_page',
                tool: 'constructor',
                value: 'Image(Src: /img/dummy.png, Alt: Image)\r\nP(Class: text-primary, Body:\r\n Paragraph text here\r\n)\r\nForm() {\r\n Label(Body:\r\n  Firstname:\r\n )\r\n Input(Class: form-control, Name: sample input)\r\n}\r\nForm() {\r\n Label(Body:\r\n  Lastname:\r\n )\r\n Input(Class: form-control, Name: sample input)\r\n Button(Body:\r\n  Submit\r\n )\r\n}',
                initialValue: 'Image(Src: /img/dummy.png, Alt: Image)\r\nP(Class: text-primary, Body:\r\n Paragraph text here\r\n)\r\nForm() {\r\n Label(Body:\r\n  Firstname:\r\n )\r\n Input(Class: form-control, Name: sample input)\r\n}\r\nForm() {\r\n Label(Body:\r\n  Lastname:\r\n )\r\n Input(Class: form-control, Name: sample input)\r\n Button(Body:\r\n  Submit\r\n )\r\n}',
                dirty: false,
                preview: null,
                designer: {
                    data: {
                        jsonData: [
                            {
                                tag: 'image',
                                attr: {
                                    alt: 'Image',
                                    src: '/img/dummy.png'
                                },
                                id: 'tag_0'
                            },
                            {
                                tag: 'p',
                                attr: {
                                    'class': 'text-primary'
                                },
                                children: [
                                    {
                                        tag: 'text',
                                        text: 'Paragraph text here',
                                        id: 'tag_2'
                                    }
                                ],
                                id: 'tag_1',
                                childrenText: 'Paragraph text here'
                            },
                            {
                                tag: 'form',
                                children: [
                                    {
                                        tag: 'label',
                                        children: [
                                            {
                                                tag: 'text',
                                                text: 'Firstname:',
                                                id: 'tag_5'
                                            }
                                        ],
                                        id: 'tag_4',
                                        childrenText: 'Firstname:'
                                    },
                                    {
                                        tag: 'input',
                                        attr: {
                                            'class': 'form-control',
                                            name: 'sample input'
                                        },
                                        id: 'tag_6'
                                    }
                                ],
                                id: 'tag_3',
                                childrenText: null
                            },
                            {
                                tag: 'form',
                                children: [
                                    {
                                        tag: 'label',
                                        children: [
                                            {
                                                tag: 'text',
                                                text: 'Lastname:',
                                                id: 'tag_9'
                                            }
                                        ],
                                        id: 'tag_8',
                                        childrenText: 'Lastname:'
                                    },
                                    {
                                        tag: 'input',
                                        attr: {
                                            'class': 'form-control',
                                            name: 'sample input'
                                        },
                                        id: 'tag_10'
                                    },
                                    {
                                        tag: 'button',
                                        children: [
                                            {
                                                tag: 'text',
                                                text: 'Submit',
                                                id: 'tag_12'
                                            }
                                        ],
                                        id: 'tag_11',
                                        childrenText: 'Submit'
                                    }
                                ],
                                id: 'tag_7',
                                childrenText: null
                            },
                            {
                                tag: 'table',
                                id: 'tag_13',
                                attr: {
                                    source: 'keysStr',
                                    columns: 'KEY_ID=id,MONEY=amount'
                                }
                            }
                        ],
                        treeData: [
                            {
                                title: 'image',
                                children: null,
                                expanded: true,
                                id: 'tag_0',
                                selected: false,
                                logic: false,
                                canMove: true,
                                canDrop: false,
                                tag: {
                                    tag: 'image',
                                    attr: {
                                        alt: 'Image',
                                        src: '/img/dummy.png'
                                    },
                                    id: 'tag_0'
                                }
                            },
                            {
                                title: 'p: Paragraph text here',
                                children: null,
                                expanded: true,
                                id: 'tag_1',
                                selected: false,
                                logic: false,
                                canMove: true,
                                canDrop: true,
                                tag: {
                                    tag: 'p',
                                    attr: {
                                        'class': 'text-primary'
                                    },
                                    children: [
                                        {
                                            tag: 'text',
                                            text: 'Paragraph text here',
                                            id: 'tag_2'
                                        }
                                    ],
                                    id: 'tag_1',
                                    childrenText: 'Paragraph text here'
                                }
                            },
                            {
                                title: 'form',
                                children: [
                                    {
                                        title: 'label: Firstname:',
                                        children: null,
                                        expanded: true,
                                        id: 'tag_4',
                                        selected: false,
                                        logic: false,
                                        canMove: true,
                                        canDrop: true,
                                        tag: {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Firstname:',
                                                    id: 'tag_5'
                                                }
                                            ],
                                            id: 'tag_4',
                                            childrenText: 'Firstname:'
                                        }
                                    },
                                    {
                                        title: 'input',
                                        children: null,
                                        expanded: true,
                                        id: 'tag_6',
                                        selected: false,
                                        logic: false,
                                        canMove: true,
                                        canDrop: false,
                                        tag: {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_6'
                                        }
                                    }
                                ],
                                expanded: true,
                                id: 'tag_3',
                                selected: false,
                                logic: false,
                                canMove: true,
                                canDrop: true,
                                tag: {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Firstname:',
                                                    id: 'tag_5'
                                                }
                                            ],
                                            id: 'tag_4',
                                            childrenText: 'Firstname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_6'
                                        }
                                    ],
                                    id: 'tag_3',
                                    childrenText: null
                                }
                            },
                            {
                                title: 'form',
                                children: [
                                    {
                                        title: 'label: Lastname:',
                                        children: null,
                                        expanded: true,
                                        id: 'tag_8',
                                        selected: false,
                                        logic: false,
                                        canMove: true,
                                        canDrop: true,
                                        tag: {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Lastname:',
                                                    id: 'tag_9'
                                                }
                                            ],
                                            id: 'tag_8',
                                            childrenText: 'Lastname:'
                                        }
                                    },
                                    {
                                        title: 'input',
                                        children: null,
                                        expanded: true,
                                        id: 'tag_10',
                                        selected: false,
                                        logic: false,
                                        canMove: true,
                                        canDrop: false,
                                        tag: {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_10'
                                        }
                                    },
                                    {
                                        title: 'button: Submit',
                                        children: null,
                                        expanded: true,
                                        id: 'tag_11',
                                        selected: false,
                                        logic: false,
                                        canMove: true,
                                        canDrop: true,
                                        tag: {
                                            tag: 'button',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Submit',
                                                    id: 'tag_12'
                                                }
                                            ],
                                            id: 'tag_11',
                                            childrenText: 'Submit'
                                        }
                                    }
                                ],
                                expanded: true,
                                id: 'tag_7',
                                selected: false,
                                logic: false,
                                canMove: true,
                                canDrop: true,
                                tag: {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Lastname:',
                                                    id: 'tag_9'
                                                }
                                            ],
                                            id: 'tag_8',
                                            childrenText: 'Lastname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_10'
                                        },
                                        {
                                            tag: 'button',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Submit',
                                                    id: 'tag_12'
                                                }
                                            ],
                                            id: 'tag_11',
                                            childrenText: 'Submit'
                                        }
                                    ],
                                    id: 'tag_7',
                                    childrenText: null
                                }
                            },
                            {
                                title: 'table',
                                children: null,
                                expanded: true,
                                id: 'tag_13',
                                selected: false,
                                logic: false,
                                canMove: true,
                                canDrop: false,
                                tag: {
                                    tag: 'table',
                                    id: 'tag_13',
                                    attr: {
                                        source: 'keysStr',
                                        columns: 'KEY_ID=id,MONEY=amount'
                                    }
                                }
                            }
                        ],
                        selectedTag: null,
                        pageTemplate: 'Image(Src: /img/dummy.png, Alt: Image)\nP(Class: text-primary, Body:\n Paragraph text here\n)\nForm() {\n Label(Body:\n  Firstname:\n )\n Input(Class: form-control, Name: sample input)\n}\nForm() {\n Label(Body:\n  Lastname:\n )\n Input(Class: form-control, Name: sample input)\n Button(Body:\n  Submit\n )\n}\nTable(Source: keysStr, Columns: "KEY_ID=id,MONEY=amount")'
                    },
                    history: {
                        data: [
                            [
                                {
                                    tag: 'image',
                                    attr: {
                                        alt: 'Image',
                                        src: '/img/dummy.png'
                                    },
                                    id: 'tag_0'
                                },
                                {
                                    tag: 'p',
                                    attr: {
                                        'class': 'text-primary'
                                    },
                                    children: [
                                        {
                                            tag: 'text',
                                            text: 'Paragraph text here',
                                            id: 'tag_2'
                                        }
                                    ],
                                    id: 'tag_1',
                                    childrenText: 'Paragraph text here'
                                },
                                {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Firstname:',
                                                    id: 'tag_5'
                                                }
                                            ],
                                            id: 'tag_4',
                                            childrenText: 'Firstname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_6'
                                        }
                                    ],
                                    id: 'tag_3',
                                    childrenText: null
                                },
                                {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Lastname:',
                                                    id: 'tag_9'
                                                }
                                            ],
                                            id: 'tag_8',
                                            childrenText: 'Lastname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_10'
                                        },
                                        {
                                            tag: 'button',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Submit',
                                                    id: 'tag_12'
                                                }
                                            ],
                                            id: 'tag_11',
                                            childrenText: 'Submit'
                                        }
                                    ],
                                    id: 'tag_7',
                                    childrenText: null
                                }
                            ],
                            [
                                {
                                    tag: 'image',
                                    attr: {
                                        alt: 'Image',
                                        src: '/img/dummy.png'
                                    },
                                    id: 'tag_0'
                                },
                                {
                                    tag: 'p',
                                    attr: {
                                        'class': 'text-primary'
                                    },
                                    children: [
                                        {
                                            tag: 'text',
                                            text: 'Paragraph text here',
                                            id: 'tag_2'
                                        }
                                    ],
                                    id: 'tag_1',
                                    childrenText: 'Paragraph text here'
                                },
                                {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Firstname:',
                                                    id: 'tag_5'
                                                }
                                            ],
                                            id: 'tag_4',
                                            childrenText: 'Firstname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_6'
                                        }
                                    ],
                                    id: 'tag_3',
                                    childrenText: null
                                },
                                {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Lastname:',
                                                    id: 'tag_9'
                                                }
                                            ],
                                            id: 'tag_8',
                                            childrenText: 'Lastname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_10'
                                        },
                                        {
                                            tag: 'button',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Submit',
                                                    id: 'tag_12'
                                                }
                                            ],
                                            id: 'tag_11',
                                            childrenText: 'Submit'
                                        }
                                    ],
                                    id: 'tag_7',
                                    childrenText: null
                                },
                                {
                                    tag: 'table',
                                    id: 'tag_13',
                                    attr: {
                                        source: 'keysStr',
                                        columns: 'KEY_ID=id,MONEY=amount'
                                    }
                                }
                            ],
                            [
                                {
                                    tag: 'image',
                                    attr: {
                                        alt: 'Image',
                                        src: '/img/dummy.png'
                                    },
                                    id: 'tag_0'
                                },
                                {
                                    tag: 'p',
                                    attr: {
                                        'class': 'text-primary'
                                    },
                                    children: [
                                        {
                                            tag: 'text',
                                            text: 'Paragraph text here',
                                            id: 'tag_2'
                                        }
                                    ],
                                    id: 'tag_1',
                                    childrenText: 'Paragraph text here'
                                },
                                {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Firstname:',
                                                    id: 'tag_5'
                                                }
                                            ],
                                            id: 'tag_4',
                                            childrenText: 'Firstname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_6'
                                        }
                                    ],
                                    id: 'tag_3',
                                    childrenText: null
                                },
                                {
                                    tag: 'form',
                                    children: [
                                        {
                                            tag: 'label',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Lastname:',
                                                    id: 'tag_9'
                                                }
                                            ],
                                            id: 'tag_8',
                                            childrenText: 'Lastname:'
                                        },
                                        {
                                            tag: 'input',
                                            attr: {
                                                'class': 'form-control',
                                                name: 'sample input'
                                            },
                                            id: 'tag_10'
                                        },
                                        {
                                            tag: 'button',
                                            children: [
                                                {
                                                    tag: 'text',
                                                    text: 'Submit',
                                                    id: 'tag_12'
                                                }
                                            ],
                                            id: 'tag_11',
                                            childrenText: 'Submit'
                                        }
                                    ],
                                    id: 'tag_7',
                                    childrenText: null
                                },
                                {
                                    tag: 'table',
                                    id: 'tag_13',
                                    attr: {
                                        source: 'keysStr',
                                        columns: 'KEY_ID=id,MONEY=amount'
                                    }
                                },
                                {
                                    tag: 'imageinput',
                                    id: 'tag_14',
                                    attr: {
                                        format: 'jpg',
                                        name: 'sample image',
                                        ratio: '2/1',
                                        width: '100'
                                    }
                                }
                            ]
                        ],
                        position: 2,
                        canUndo: true,
                        canRedo: true
                    }
                }
            }
        ]
    },
    tx: {
        transactions: null
    },
    gui: {
        window: 'main'
    },
    io: {},
    storage: {
        locale: 'en-US',
        accounts: [],
        navigationSize: 230,
        fullNodes: [
            'http://127.0.0.1:7079'
        ]
    },
    socket: {
        session: null,
        socket: null,
        connected: false,
        notifications: [],
        subscriptions: []
    },
    loadingBar: 0,
    router: {
        location: {
            pathname: '/editor',
            search: '',
            hash: '',
            key: '6r7g5h',
            state: ''
        }
    }
};

const dispatch: Dispatch<any> = (action: Action) => null;

const MockStore = {
    getState: () => state,
    dispatch
};

export default MockStore;