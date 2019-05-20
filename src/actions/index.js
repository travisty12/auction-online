import constants from './../constants';
const { c } = constants;
const { firebaseConfig } = constants;
// import v4 from 'uuid/v4';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);
const rooms = firebase.default.database().ref('rooms');
console.log(rooms);

export function addRoom(_items, _time, _min, _tpi) {
  return () => rooms.push({
    items: _items,
    time: _time,
    min: _min,
    tpi: _tpi
  });
}

export function watchFirebaseRoomsRef() {
  return function(dispatch) {
    rooms.on('child_added', data => {
      const newRoom = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      console.log(newRoom);
    });
  };
}

export const addItem = (item) => ({
  type: c.ADD_ITEM,
  item
});

export const registerRoom = (email) => ({
  type: c.REGISTER_ROOM,
  email
});

export const checkKey = (key) => ({
  type: c.CHECK_KEY,
  key
});
