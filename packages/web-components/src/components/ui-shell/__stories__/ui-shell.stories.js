/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../components/ui-shell/ui-shell';
import '@carbon/web-components/es/components/ui-shell/index.js';
import { html } from 'lit';
import ArrowRight16 from '@carbon/web-components/es/icons/arrow--right/16';
import Fade16 from '@carbon/web-components/es/icons/fade/16';

import contentStyles from '@carbon/styles/scss/components/ui-shell/content/_content.scss?inline';
import {
  SIDE_NAV_COLLAPSE_MODE,
  SIDE_NAV_USAGE_MODE,
} from '../components/side-nav/defs';
import styles from './ui-shell-story.scss?inline';

const prefix = 'cds';

/**
 * More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
 */
export default {
  title: 'Components/Ui Shell',
  component: 'clabs-ui-shell',
};

/**
 * More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
 *
 * @type {{args: {label: string}, render: (function(*): TemplateResult<1>)}}
 */
export const Default = {
  args: {
    label: 'Ui Shell',
  },

  /**
   * Renders the template for Storybook
   * @param {object} args Storybook arguments
   * @returns {TemplateResult<1>}
   */
  render: (args) =>
    html` <clabs-ui-shell>
      ${args.label}${ArrowRight16({ slot: 'icon' })}
    </clabs-ui-shell>`,
};

const linksHref = 'https://www.carbondesignsystem.com/';

/**
 * StoryContent component renders the main content for the UI shell story.
 * It includes descriptions and examples of the UI shell's purpose, function,
 * responsive behavior, and secondary navigation.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} [props.useResponsiveOffset=true] - Determines whether to use responsive offset for the content.
 * @returns {TemplateResult} The HTML template for the story content.
 */
const StoryContent = ({ useResponsiveOffset = true }) => {
  /**
   * Toggles the modal
   */
  const toggleButton = () => {
    document.querySelector('cds-modal')?.toggleAttribute('open');
  };
  return html`
    <style type="text/css">
      ${contentStyles.cssText}
    </style>
    <main class="${prefix}--content ${prefix}-ce-demo-devenv--content">
      <div class="${prefix}--grid">
        <div class="${prefix}--row">
          <div
            class="${`${prefix}--col-lg-13 ${prefix}--offset-lg-3`}"
            style="${!useResponsiveOffset ? `margin-left: 16rem;` : ''}">
            <h2 style="margin: 0 0 30px">Purpose and function</h2>
            <p>
              The shell is perhaps the most crucial piece of any UI built with
              <a href="www.carbondesignsystem.com"> Carbon</a>. It contains the
              shared navigation framework for the entire design system and ties
              the products in IBM’s portfolio together in a cohesive and elegant
              way. The shell is the home of the topmost navigation, where users
              can quickly and dependably gain their bearings and move between
              pages.
              <br />
              <br />
              The shell was designed with maximum flexibility built in, to serve
              the needs of a broad range of products and users. Adopting the
              shell ensures compliance with IBM design standards, simplifies
              development efforts, and provides great user experiences. All IBM
              products built with Carbon are required to use the shell’s header.
              <br />
              <br />
              To better understand the purpose and function of the UI shell,
              consider the “shell” of MacOS, which contains the Apple menu,
              top-level navigation, and universal, OS-level controls at the top
              of the screen, as well as a universal dock along the bottom or
              side of the screen. The Carbon UI shell is roughly analogous in
              function to these parts of the Mac UI. For example, the app
              switcher portion of the shell can be compared to the dock in
              MacOS.
            </p>
            <h2 style="margin: 30px 0px">Header responsive behavior</h2>
            <p>
              As a header scales down to fit smaller screen sizes, headers with
              persistent side nav menus should have the side nav collapse into
              “hamburger” menu. See the example to better understand responsive
              behavior of the header.
            </p>
            <h2 style="margin: 30px 0px">Secondary navigation</h2>
            <p>
              The side-nav contains secondary navigation and fits below the
              header. It can be configured to be either fixed-width or flexible,
              with only one level of nested items allowed. Both links and
              category lists can be used in the side-nav and may be mixed
              together. There are several configurations of the side-nav, but
              only one configuration should be used per product section. If tabs
              are needed on a page when using a side-nav, then the tabs are
              secondary in hierarchy to the side-nav.
            </p>
            <cds-modal>
              <cds-modal-header>
                <cds-modal-close-button></cds-modal-close-button>
                <cds-modal-label>Account resources</cds-modal-label>
                <cds-modal-heading>Add a custom domain</cds-modal-heading>
              </cds-modal-header>
              <cds-modal-body>
                <cds-modal-body-content description>
                  Custom domains direct requests for your apps in this Cloud
                  Foundry organization to a URL that you own. A custom domain
                  can be a shared domain, a shared subdomain, or a shared domain
                  and host.
                </cds-modal-body-content>
              </cds-modal-body>
              <cds-modal-footer>
                <cds-modal-footer-button kind="secondary" data-modal-close
                  >Cancel</cds-modal-footer-button
                >
                <cds-modal-footer-button>Add</cds-modal-footer-button>
              </cds-modal-footer>
            </cds-modal>
            <cds-button @click="${toggleButton}">Launch modal</cds-button>
          </div>
        </div>
      </div>
    </main>
  `;
};

export const FixedSideNav = {
  name: 'Fixed SideNav',
  /**
   * Renders the template for Storybook
   * @returns {TemplateResult<1>}
   */
  render: () => {
    const result = html`
      <style>
        ${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        usage-mode="${SIDE_NAV_USAGE_MODE.REGULAR}"
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${StoryContent({ useResponsiveOffset: false })}
    `;
    result.hasMainTag = true;
    return result;
  },
};

export const FixedSideNavDivider = {
  name: 'Fixed SideNav w/Divider',
  /**
   * Renders the template for Storybook
   * @returns {TemplateResult<1>}
   */
  render: () => {
    const result = html`
      <style>
        ${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-divider></cds-side-nav-divider>
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${StoryContent({ useResponsiveOffset: false })}
    `;
    result.hasMainTag = true;
    return result;
  },
};

export const FixedSideNavIcons = {
  name: 'Fixed SideNav w/ Icons',
  /**
   * Renders the template for Storybook
   * @returns {TemplateResult<1>}
   */
  render: () => {
    const result = html`
      <style>
        ${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${StoryContent({ useResponsiveOffset: false })}
    `;
    result.hasMainTag = true;
    return result;
  },
};

export const HeaderBase = {
  /**
   * Renders the template for Storybook
   * @returns {TemplateResult<1>}
   */
  render: () =>
    // TODO: fix clabs-header vs cds-header
    html` <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
      </cds-header>
      <clabs-header aria-label="IBM Platform Name">
        <clabs-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</clabs-header-name
        >
      </clabs-header>`,
};
