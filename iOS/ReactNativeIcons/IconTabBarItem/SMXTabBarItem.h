
#import <UIKit/UIKit.h>

@interface SMXTabBarItem : UIView
@property (nonatomic, assign) NSString *name;
@property (nonatomic, assign) NSNumber *iconSize;
@property (nonatomic, assign) UIColor *color;
@property (nonatomic, copy) NSString *icon;
@property (nonatomic, assign, getter=isSelected) BOOL selected;
@property (nonatomic, readonly) UITabBarItem *barItem;

@end
