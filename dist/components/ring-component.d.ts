import type { Components, JSX } from "../../docs/dist/types/components";

interface RingComponent extends Components.RingComponent, HTMLElement {}
export const RingComponent: {
    prototype: RingComponent;
    new (): RingComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
