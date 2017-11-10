import { Selector } from "testcafe";

// tslint:disable-next-line:no-unused-expression
fixture `Order`
    .page `https://joflashstudios.github.io/`;

test("Explode on spread operator", async (t) => {
    await t.expect(Selector('body').exists).eql(true);
});
