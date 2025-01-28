import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://example.com`;

test('Check Example Domain', async t => {
    const heading = Selector('h1');

    await t.expect(heading.innerText).eql('Example Domain');
});
