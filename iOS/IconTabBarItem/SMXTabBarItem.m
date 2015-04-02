
#import "SMXTabBarItem.h"

@implementation SMXTabBarItem

@synthesize barItem = _barItem;

- (UITabBarItem *)barItem
{
    if (!_barItem) {
        _barItem = [[UITabBarItem alloc] init];
    }
    return _barItem;
}



@end
