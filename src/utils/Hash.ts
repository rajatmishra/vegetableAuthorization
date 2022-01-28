import * as bcryptjs from 'bcryptjs';

export class Hash {
  static make(plainText) {
    const salt = bcryptjs.genSaltSync();
    return bcryptjs.hashSync(plainText, salt);
  }

  static compare(plainText, hash) {
    return bcryptjs.compareSync(plainText, hash);
  }
}
