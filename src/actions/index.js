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

export function addItems(roomKey, _items) {
  return () => rooms[roomKey].push({
    items: _items
  });
}

export function watchFirebaseRoomsRef() {
  return function(dispatch) {
    rooms.on('child_added', data => {
      const newRoom = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      const room = firebase.default.database().ref().child('rooms')
      console.log(newRoom);
      console.log(room);
    });
  };
}

export const changeView = () => ({
  type: c.CHANGE_VIEW
});

export const changeJoinView = () => ({
  type: c.CHANGE_JOIN_VIEW
});

export const changePreviousView = () => ({
  type: c.CHANGE_PREVIOUS_VIEW
});

export const roomChecker = (key) => ({
  type: c.CHECK_ROOM,
  key
});

export function checkRoom(key) {

  return function(dispatch) {
    firebase.default.database().ref().child("rooms").on("value", function(snapshot) {
      if (snapshot.child(key).val()) {
        console.log(snapshot.child(key).val());
        console.log("yes");
        return dispatch(roomChecker(key));
      } else {
        console.log("no");
      }
      return;
    });
  }
}

export const addItem = (item) => ({
  type: c.ADD_ITEM,
  item
});

export const resetMain = () => ({
  type: c.RESET_MAIN
})

export function registerRoom() {
  return (dispatch) => {
    rooms.push({ active: false, });
    rooms.endAt().limitToLast(1).on('child_added', data => {
      // console.log(data);
      const newRoom = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      const room = firebase.default.database().ref().child('rooms');
      // console.log(newRoom);
      // console.log(room);
      firebase.default.database().ref('rooms/' + data.getKey()).set({
        id: data.getKey()
      });
      console.log(data.getKey());
      return dispatch(roomChecker(data.getKey()));
    });
  }
};

export function checkKey(key) {
  firebase.database().ref().child('rooms').forEach((room) => {
    if (room.id === key) {

    }
  });
};
