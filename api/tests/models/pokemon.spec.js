const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(async () => await Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });

    describe('stats', () => {
      it('should works if has the correct fomart', (done) => {
        Pokemon.create({
          name: 'ParPar',
          hp: 15,
          attack: 45,
          defense: 56,
          speed: 23,
          height: 98,
          weight: 76
        })
        .then(() => done())
        .catch(() => done(new Error ('some stat is not integer')));
      })

      it('should throw an error if some stat is not an integer', (done) => {
        Pokemon.create({
          name: 'ParPar',
          hp: 15,
          attack: "one hundred",
          defense: 56,
          speed: 23,
          height: 98,
          weight: 76
        })
        .then(() => done(new Error ('some stat is not integer')))
        .catch(() => done());
      })
    })
  });
});


