/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { settings } from '@carbon-labs/utilities/es/settings/index.js';
import sideNavMenu from './src/side-nav-menu.template.js';

const { stablePrefix: clabsPrefix } = settings;

/**
 * Component extending the @carbon/web-components' side-nav-menu
 */
@customElement(`${clabsPrefix}-side-nav-menu`)
class CLABSSideNavMenu extends sideNavMenu {}

export default CLABSSideNavMenu;
