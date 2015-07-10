#import "SMXTabBarManager.h"
#import "SMXTabBar.h"
#import "RCTBridge.h"

@implementation SMXTabBarManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[SMXTabBar alloc] initWithEventDispatcher:_bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(barTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(translucent, BOOL);

@end
