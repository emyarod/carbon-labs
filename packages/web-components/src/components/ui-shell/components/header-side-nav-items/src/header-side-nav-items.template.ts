/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CDSHeaderSideNavItems from '@carbon/web-components/es/components/ui-shell/header-side-nav-items.js';
// @ts-ignore
import styles from './header-side-nav-items.scss?inline';

/**
 * Component extending the @carbon/web-components' header-side-nav-items
 */
class headerSideNavItems extends CDSHeaderSideNavItems {
  static styles = styles;
}

export default headerSideNavItems;