#import <UIKit/UIKit.h>

@class RCTEventDispatcher;

@interface SMXTabBar : UIView

@property (nonatomic, copy) UIColor *tintColor;
@property (nonatomic, assign) UIColor *barTintColor;
@property (nonatomic, assign) BOOL translucent;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
