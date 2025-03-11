import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '../src/app'
import Work from '../src/Work'
import { Playground } from '../src/playground'

export var storyboard = (
  <Storyboard>
    <Scene
      id='playground-scene'
      commentId='playground-scene'
      style={{
        width: 700,
        height: 759,
        position: 'absolute',
        left: 212,
        top: 128,
      }}
      data-label='Playground'
    >
      <Playground style={{}} />
    </Scene>
    <Scene
      id='app-scene'
      commentId='app-scene'
      style={{
        width: 1000,
        position: 'absolute',
        left: 1000,
        top: 128,
        height: 'max-content',
      }}
      data-label='My App'
    >
      <App style={{}} />
    </Scene>
    <Scene
      id='app-scene'
      commentId='3b72db4e-5695-42a7-8e01-9f3cd6d5'
      style={{
        width: 328,
        position: 'absolute',
        left: 2064,
        top: 128,
        height: 'max-content',
      }}
      data-label='Home'
    >
      <App style={{}} />
    </Scene>
    <Scene
      id='app-scene'
      commentId='fc02b840cf7082d128c45506ae4f1b51'
      style={{
        width: 1000,
        position: 'absolute',
        left: 2472,
        top: 128,
        height: 2188,
      }}
      data-label='Work'
    >
      <Work style={{}} />
    </Scene>
  </Storyboard>
)
