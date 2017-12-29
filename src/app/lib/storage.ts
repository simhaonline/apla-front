import * as _ from 'lodash';

export interface IStoredData {
    id: string;
}

export interface IStoredKey extends IStoredData {
    id: string;
    encKey: string;
    address: string;
    ecosystems?: {
        [id: string]: {
            name?: string;
            avatar?: string;
            type?: string;
        }
    };
}

export const serializeData = (data: any) => {
    return JSON.stringify(data);
};

export const deserializeData = <T>(serialized: string) => {
    return JSON.parse(serialized) as T;
};

class Storage<T extends IStoredData> {
    private _storageKey: string;
    private _cache: T[];

    constructor(storageKey: string) {
        this._storageKey = storageKey;
    }

    saveAll = _.debounce((values: T[]) => {
        const data = serializeData(values);
        localStorage.setItem(this._storageKey, data);
    }, 100);

    loadAll() {
        if (!this._cache) {
            const data = localStorage.getItem(this._storageKey);
            this._cache = deserializeData<T[]>(data) || [];
        }
        return this._cache;
    }

    load(key: string) {
        const values = this.loadAll();
        for (let i = 0; i < values.length; i++) {
            if (key === values[i].id) {
                return values[i];
            }
        }
        return null;
    }

    save(value: T) {
        let values = this.loadAll();
        let foundIndex = -1;

        for (let i = 0; i < values.length; i++) {
            if (value.id === values[i].id) {
                foundIndex = i;
                break;
            }
        }

        if (-1 === foundIndex) {
            values.push(value);
        }
        else {
            values = [...values.slice(0, foundIndex), value, ...values.slice(foundIndex + 1, values.length)];
        }
        this.saveAll(values);
    }
}

const settingsStorage = {
    load(key: string, defaultValue: string = null) {
        return localStorage.getItem(key) || defaultValue;
    },

    save(key: string, value: string) {
        localStorage.setItem(key, value);
    },

    remove(key: string) {
        localStorage.removeItem(key);
    }
};

export default {
    settings: settingsStorage,
    accounts: new Storage<IStoredKey>('accountsz')
};