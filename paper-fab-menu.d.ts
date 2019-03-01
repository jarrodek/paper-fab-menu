/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-fab-menu.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

declare namespace UiElements {

  /**
   * Material design:
   * [Floating Action Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)
   *
   * A floating action button represents the primary action in an application.
   *
   * Use the `<paper-fab-menu>` to display menu-like fab buttons and to promote actions.
   *
   * ### Example
   *
   * ```html
   * <paper-fab-menu color="teal" icon="add">
   * <paper-fab-menu-item color="teal" tooltip="Favorites" icon="star"></paper-fab-menu-item>
   * <paper-fab-menu-item color="teal" tooltip="Favorites" icon="star"></paper-fab-menu-item>
   * <paper-fab-menu-item color="teal" tooltip="Favorites" icon="star"></paper-fab-menu-item>
   * </paper-fab-menu>
   * ```
   *
   * ### Icons
   *
   * Import your `iron-icons` library and use icons you like.
   *
   * ```html
   * <link rel="import" href="bower_components/iron-icons/iron-icons.html">
   * <paper-fab-menu icon="add"></paper-fab-menu>
   * ```
   *
   * ### Styling
   * Style the menu using `<paper-fab>` variables and mixins.
   */
  class PaperFabMenu extends PolymerElement {

    /**
     * True when the menu is opened.
     */
    opened: number|null|undefined;

    /**
     * The color of the main button.
     */
    color: string|null|undefined;

    /**
     * The icon to render. It's binded to `paper-fab`'s icon property.
     */
    icon: string|null|undefined;

    /**
     * Computed value of the delay time when the list child is
     * opened / closed.
     */
    _delayTime: number|null|undefined;

    /**
     * If true then the children container is displayed.
     */
    readonly childrenVisible: boolean|null|undefined;

    /**
     * Tru if it's a Safari which need a fix...
     */
    safari: boolean|null|undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * Toogles the menu
     */
    toggle(): void;

    /**
     * Tests if the menu should be opened and opens it if nescesary.
     */
    _testOpen(): void;

    /**
     * Tests if the menu should be closed and closes it if nescesary
     */
    _testClose(): void;

    /**
     * Renders the mennu opened / closed
     *
     * @param opened Current menu state
     */
    _openedChanged(opened: Boolean|null): void;

    /**
     * Changes children opened state
     */
    _updateChildrenState(children: Array<Element|null>|null, opened: Boolean|null): void;

    /**
     * Updates animation delay time attribute in distributed children.
     */
    _updateDelay(children: Array<Element|null>|null): void;

    /**
     * Called when color has changed.
     *
     * @param color Color to set on the fab.
     */
    _colorChanged(color: String|null): void;

    /**
     * Closes menu when click is detected outside this control.
     */
    _detectClick(e: MouseEvent|null): void;
    _computeContentClass(safari: any): any;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "paper-fab-menu": UiElements.PaperFabMenu;
  }
}
