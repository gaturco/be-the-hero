const genereateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should genereate an unique ID', () => {
        const id = genereateUniqueId();
        
        expect(id).toHaveLength(8);
    })
})