import {App} from "../src/app";

describe('app.js should', () => {
   it('return a name', () =>{
       const app = new App();
       expect(app.name).toBe('Sebas');
   });
});