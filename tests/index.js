const should = require('should');

const processorUtilities = require('../index');

describe('processor utilities', () => {
    describe('event key check', () => {
        it('returns true when property is of specified type', () => processorUtilities.checkTypeAndKey({ type: 'my_type' }, 'my_type').should.eql(true));

        it('returns true when property is in list of specified types', () => processorUtilities.checkTypeAndKey({ type: 'my_type' }, ['other_type', 'my_type']).should.eql(true));

        it('returns false when property is not in list of specified types', () => processorUtilities.checkTypeAndKey({ type: 'yet_another_type' }, ['other_type', 'my_type']).should.eql(false));

        it('returns true when property is of specified type and event has specified key of value', () => processorUtilities.checkTypeAndKey({ type: 'my_type', my_key: 1 }, 'my_type', 'my_key').should.eql(true));

        it('returns true when property is of specified type and event has specified nested key of value', () => processorUtilities.checkTypeAndKey({ type: 'my_type', a: { b: 1 } }, 'my_type', 'a.b').should.eql(true));

        it('returns false when property is of specified type and event does not have specified nested key of value', () => processorUtilities.checkTypeAndKey({ type: 'my_type', a: { c: 1 } }, 'my_type', 'a.b').should.eql(false));

        it('returns true when property is of specified type and event has one of the specified keys with a value', () => processorUtilities.checkTypeAndKey({ type: 'my_type', a: { c: 1 } }, 'my_type', ['a.b', 'a.c']).should.eql(true));
    });
});
