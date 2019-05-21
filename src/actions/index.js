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
    if (key) {
      console.log(key);
      firebase.default.database().ref().child("rooms").on("value", function(snapshot) {
        if (snapshot.child(key).val()) {
          console.log(snapshot.child(key).val());
          if (snapshot.child(key).val().items) {
            console.log(snapshot.child(key).val().items.itemList);
            dispatch(pullItems(key, snapshot.child(key).val().items.itemList));
          }
          return dispatch(roomChecker(key));
        } else {
          console.log("no");
        }
        return;
      });
    } else {
      console.log('here');
    }
  }
}

export const removeIndex = (items, roomId, index) => ({
  type: c.REMOVE_ITEM,
  items,
  roomId,
  index
})

export function removeItem(items, roomId, index) {
  return (dispatch) => {
    return dispatch(removeIndex(items, roomId, index));
  }
}

export function setSettings(roomId, settings) {
  return () => {
    firebase.default.database().ref('rooms/' + roomId + '/settings').set({
      minBid: settings.minBid,
      time: settings.time,
      tpi: settings.tpi
    });
  }
}

export const addItem = (item) => ({
  type: c.ADD_ITEM,
  item
});

export const guardMain = () => ({
  type: c.RESET_MAIN
});

export const clearLocal = () => ({
  type: c.CLEAR_ITEMS
});

export function resetMain() {
  return (dispatch) => {
    dispatch(guardMain());
    dispatch(clearLocal());
  }
};

export function registerRoom() {
  return (dispatch) => {
    dispatch(clearLocal());
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

export const fillItems = (items) => ({
  type: c.FILL_ITEMS,
  items
});

export function pullItems(roomId, items) {
  return (dispatch) => {

    return dispatch(fillItems(items));
  }
}

export function addToRoom(itemList, roomId) {
  return (dispatch) => {
    firebase.default.database().ref('rooms/' + roomId + '/items').set({itemList});
  }
}
