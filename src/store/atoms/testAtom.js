import { atom } from 'recoil';

const testAtom = atom({
  key: 'this_is_a_test',
  default: 'Hello World, from Recoil Store',
});

export default testAtom;
