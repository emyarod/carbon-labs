/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export const IdPrefixContext = React.createContext<string | null | undefined>(
  null
);

/**
 *
 */
export function useIdPrefix() {
  return React.useContext(IdPrefixContext);
}
