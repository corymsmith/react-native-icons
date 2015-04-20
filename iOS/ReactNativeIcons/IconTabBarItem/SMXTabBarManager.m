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

RCT_EXPORT_VIEW_PROPERTY(barTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor);

@end
