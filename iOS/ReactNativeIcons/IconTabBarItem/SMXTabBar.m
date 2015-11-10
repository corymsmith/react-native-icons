#import "SMXTabBar.h"
#import "SMXTabBarItem.h"
#import "RCTEventDispatcher.h"
#import "RCTLog.h"
#import "RCTUtils.h"
#import "RCTView.h"
#import "RCTViewControllerProtocol.h"
#import "RCTWrapperViewController.h"
#import "UIView+React.h"

@interface SMXTabBar() <UITabBarControllerDelegate>

@end

@implementation SMXTabBar
{
  BOOL _tabsChanged;
  RCTEventDispatcher *_eventDispatcher;
  UITabBarController *_tabController;
  NSMutableArray *_tabViews;
}

- (id)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super initWithFrame:CGRectZero])) {
    _eventDispatcher = eventDispatcher;
    _tabViews = [[NSMutableArray alloc] init];
    _tabController = [[UITabBarController alloc] init];
    _tabController.delegate = self;
    [self addSubview:_tabController.view];
  }
  return self;
}

- (UIViewController *)backingViewController
{
  return _tabController;
}

- (void)dealloc
{
  _tabController.delegate = nil;
}

- (NSArray *)reactSubviews
{
  return _tabViews;
}

- (void)insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
  if (![view isKindOfClass:[SMXTabBarItem class]]) {
    //RCTLogError(@"subview should be of type IconTabBarItem");
    return;
  }
  [_tabViews insertObject:view atIndex:atIndex];
  _tabsChanged = YES;
}

- (void)removeReactSubview:(UIView *)subview
{
  if (_tabViews.count == 0) {
    RCTLogError(@"should have at least one view to remove a subview");
    return;
  }
  [_tabViews removeObject:subview];
  _tabsChanged = YES;
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  _tabController.view.frame = self.bounds;
}

- (void)reactBridgeDidFinishTransaction
{
  // we can't hook up the VC hierarchy in 'init' because the subviews aren't
  // hooked up yet, so we do it on demand here whenever a transaction has finished
  [self reactAddControllerToClosestParent:_tabController];
  
  if (_tabsChanged) {
    
    NSMutableArray *viewControllers = [NSMutableArray array];
    for (SMXTabBarItem *tab in [self reactSubviews]) {
      UIViewController *controller = tab.reactViewController;
      if (!controller) {
        controller = [[RCTWrapperViewController alloc] initWithContentView:tab];
      }
      [viewControllers addObject:controller];
    }
    
    _tabController.viewControllers = viewControllers;
    _tabsChanged = NO;
  }
  
  [[self reactSubviews] enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
    
    SMXTabBarItem *tab = [obj respondsToSelector:@selector(barItem)] ? (SMXTabBarItem*)obj : nil;
    
    if (tab){
      UIViewController *controller = _tabController.viewControllers[idx];
      controller.tabBarItem = tab.barItem;
      if (tab.selected){
        _tabController.selectedViewController = controller;
      }
    }
    
  }];
  
  /*
   [[self reactSubviews] enumerateObjectsUsingBlock:^(SMXTabBarItem *tab, NSUInteger index, BOOL *stop) {
   UIViewController *controller = _tabController.viewControllers[index];
   controller.tabBarItem = tab.barItem;
   if (tab.selected) {
   _tabController.selectedViewController = controller;
   }
   }];*/
  
}

#pragma mark - UITabBarControllerDelegate

- (BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController
{
  NSUInteger index = [tabBarController.viewControllers indexOfObject:viewController];
  SMXTabBarItem *tab = (SMXTabBarItem*)[self reactSubviews][index];
  [_eventDispatcher sendInputEventWithName:@"press" body:@{@"target": tab.reactTag}];
  return NO;
}

- (void)setBarTintColor:(UIColor *)barTintColor {
  _tabController.tabBar.barTintColor = barTintColor;
}

- (void)setTintColor:(UIColor *)tintColor {
  _tabController.tabBar.tintColor = tintColor;
  //    _tabController.tabBarItem.tintColor
}

- (void)setTranslucent:(BOOL)translucent {
  _tabController.tabBar.translucent = translucent;
}

@end
