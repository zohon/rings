import { newSpecPage } from "@stencil/core/testing";
import { RingComponent } from "../ring-component";
describe('ring-component', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RingComponent],
            html: `<ring-component></ring-component>`,
        });
        expect(page.root).toEqualHtml(`
      <ring-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ring-component>
    `);
    });
});
//# sourceMappingURL=ring-component.spec.js.map
