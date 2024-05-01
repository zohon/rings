import { newE2EPage } from "@stencil/core/testing";
describe('ring-component', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ring-component></ring-component>');
        const element = await page.find('ring-component');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=ring-component.e2e.js.map
