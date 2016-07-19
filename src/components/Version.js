//@flow

/*******************************************************************************
 * Imports
 *******************************************************************************/

import React from 'react'

import { Version, Revision } from 'tldr/app'

/*******************************************************************************
 * Private
 *******************************************************************************/

const Origin   = `https://github.com/ostera/tldr.jsx/tree/${Revision}`

/*******************************************************************************
 * Public API
 *******************************************************************************/

export default () =>
  <a className="version" href={Origin}>v{Version}</a>
