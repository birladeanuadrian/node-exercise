import {reconstructAll, reconstructFirst} from '../src/main';
import {assert} from 'chai';

describe ('Find all Tests', () => {

    it ('Handles empty string', () => {
        const inputString = '';
        const words = ['the', 'quick', 'brown', 'fox'];

        const reconstructions = reconstructAll(inputString, words);
        assert.deepEqual(reconstructions, []);
    })

    it ('Detects simple reconstruction', () => {
        const inputString = 'thequickbrownfox';
        const words = ['the', 'quick', 'brown', 'fox'];

        const reconstructions = reconstructAll(inputString, words);
        const expected = [ [ 'the', 'quick', 'brown', 'fox' ] ];
        console.log('Reconstructions', reconstructions);
        assert.deepEqual(reconstructions, expected);
    });

    it ('Detects nothing', () => {
        const inputString = 'thequickbrownfo';
        const words = ['the', 'quick', 'brown', 'fox'];

        const reconstructions = reconstructAll(inputString, words);
        console.log('Reconstructions', reconstructions);
        assert.deepEqual(reconstructions, []);
    });

    it ('Detects multiple reconstructions', () => {
        const inputString = 'bedbathandbeyond';
        const words = ['bed', 'bath', 'bedbath', 'and', 'beyond'];

        const reconstructions = reconstructAll(inputString, words);
        const expected = [ [ 'bed', 'bath', 'and', 'beyond' ], [ 'bedbath', 'and', 'beyond' ] ];
        console.log('Reconstructions', reconstructions);
        assert.deepEqual(reconstructions, expected);
    });
});


describe('Find one tests', () => {
    it ('Handles empty string', () => {
        const inputString = '';
        const words = ['the', 'quick', 'brown', 'fox'];

        const reconstructions = reconstructFirst(inputString, words);
        assert.deepEqual(reconstructions, []);
    })

    it ('Detects simple reconstruction', () => {
        const inputString = 'thequickbrownfox';
        const words = ['the', 'quick', 'brown', 'fox'];

        const reconstructions = reconstructFirst(inputString, words);
        const expected = [ 'the', 'quick', 'brown', 'fox' ];
        console.log('Reconstructions', reconstructions);
        assert.deepEqual(reconstructions, expected);
    });

    it ('Detects nothing', () => {
        const inputString = 'thequickbrownfo';
        const words = ['the', 'quick', 'brown', 'fox'];

        const reconstructions = reconstructFirst(inputString, words);
        console.log('Reconstructions', reconstructions);
        assert.deepEqual(reconstructions, []);
    });

    it ('Detects one out of multiple options', () => {
        const inputString = 'bedbathandbeyond';
        const words = ['bed', 'bath', 'bedbath', 'and', 'beyond'];

        const reconstructions = reconstructFirst(inputString, words);
        const expected = [ 'bed', 'bath', 'and', 'beyond' ];
        console.log('Reconstructions', reconstructions);
        assert.deepEqual(reconstructions, expected);
    });
});
