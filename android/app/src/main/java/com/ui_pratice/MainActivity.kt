package com.ui_pratice

import android.os.Bundle // 👈 REQUIRED IMPORT for 'onCreate' parameter

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView
import com.swmansion.rnscreens.fragment.restoration.RNScreensFragmentFactory

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "UI_Pratice"

  /**
   * Overrides onCreate to initialize RNScreensFragmentFactory for proper fragment handling.
   */
     override fun onCreate(savedInstanceState: Bundle?) { // 👈 Corrected: added Bundle? parameter
    supportFragmentManager.fragmentFactory = RNScreensFragmentFactory()
    super.onCreate(savedInstanceState)
  }
  
  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   * and wraps the Root View with RNGestureHandlerEnabledRootView.
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      object : DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled) {
        override fun createRootView(): RNGestureHandlerEnabledRootView {
          return RNGestureHandlerEnabledRootView(this@MainActivity)
        }
      }
}