#import "SMXTabBarItemManager.h"
#import "SMXTabBarItem.h"
#import "RCTConvert.h"
#import "FAKIconImage.h"
#import "FontAwesomeKit.h"
#import <objc/runtime.h>

@implementation SMXTabBarItemManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
    return [[SMXTabBarItem alloc] init];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

- (UIImage *)loadIconImageUsingJSON:(id)json view:(SMXTabBarItem *)view
{
    NSDictionary *iconDict = json ? [RCTConvert NSDictionary:json] : [NSDictionary dictionary];
    NSString *iconString = iconDict[@"name"];
    UIColor *color = iconDict[@"color"] ? [RCTConvert UIColor:iconDict[@"color"]] : view.tintColor;
    CGFloat size = [iconDict[@"size"] floatValue];

    NSString *theIconName = iconString;
    NSArray *parts = [theIconName componentsSeparatedByString:@"|"];
    NSString *fontPrefix = parts[0];
    NSString *iconIdentifier = parts[1];

    id target;
    if([fontPrefix isEqualToString:@"fontawesome"]) {
        target = [FAKFontAwesome class];
    } else if([fontPrefix isEqualToString:@"ion"]) {
        target = [FAKIonIcons class];
    } else if([fontPrefix isEqualToString:@"zocial"]) {
        target = [FAKZocial class];
    } else if([fontPrefix isEqualToString:@"foundation"]) {
        target = [FAKFoundationIcons class];
    } else if([fontPrefix isEqualToString:@"material"]) {
        target = [FAKMaterial class];
    }

    SEL selector = NSSelectorFromString([NSString stringWithFormat:@"%@IconWithSize:",[self camelcase:iconIdentifier]]);

    if(!target || ![target respondsToSelector:selector]) {
        if(target) {
            NSLog(@"No icon '%@' in '%@' icon font", iconIdentifier, fontPrefix);
            RCTLogError(@"No icon '%@' in '%@' icon font", iconIdentifier, fontPrefix);
        } else {
            NSLog(@"No icon font named '%@'", fontPrefix);
            RCTLogError(@"No icon font named '%@'", fontPrefix);
        }
        return nil;
    }

    NSInvocation *inv = [NSInvocation invocationWithMethodSignature:[target methodSignatureForSelector:selector]];
    [inv setSelector:selector];
    [inv setTarget:target];
    [inv setArgument:&size atIndex:2]; //arguments 0 and 1 are self and _cmd respectively, automatically set by NSInvocation
    [inv retainArguments];
    [inv invoke];

    CFTypeRef result;
    [inv getReturnValue:&result];

    FAKIcon *icon = (__bridge id)result;
    [icon setAttributes:@{NSForegroundColorAttributeName: color}];

    return [icon imageWithSize:CGSizeMake(size,size)];
}

RCT_EXPORT_VIEW_PROPERTY(selected, BOOL);
RCT_CUSTOM_VIEW_PROPERTY(icon, NSDictionary, SMXTabBarItem)
{
    dispatch_queue_t backgroundQueue = dispatch_queue_create("com.smixxtape.reactnativeicons", 0);
    dispatch_async(backgroundQueue, ^{
        UIImage *image = [self loadIconImageUsingJSON:json view:view];
        
        if (image) {
            dispatch_async(dispatch_get_main_queue(), ^{
                [view setContentMode:UIViewContentModeCenter];
                view.barItem.image = image;
            });
        }
    });
}

RCT_CUSTOM_VIEW_PROPERTY(selectedIcon, NSDictionary, SMXTabBarItem)
{
    dispatch_queue_t backgroundQueue = dispatch_queue_create("com.smixxtape.reactnativeicons", 0);
    dispatch_async(backgroundQueue, ^{
        UIImage *image = [self loadIconImageUsingJSON:json view:view];
        
        if (image) {
            dispatch_async(dispatch_get_main_queue(), ^{
                [view setContentMode:UIViewContentModeCenter];
                view.barItem.selectedImage = image;
            });
        }
    });
}

RCT_REMAP_VIEW_PROPERTY(badgeValue, barItem.badgeValue, NSString);
RCT_CUSTOM_VIEW_PROPERTY(title, NSString, SMXTabBarItem)
{
    view.barItem.title = json ? [RCTConvert NSString:json] : defaultView.barItem.title;
    view.barItem.imageInsets = [view.barItem.title length] ? UIEdgeInsetsZero : (UIEdgeInsets){6, 0, -6, 0};
}

- (NSString *)camelcase:(NSString *)stringToCamelcase
{
    NSArray *components = [stringToCamelcase componentsSeparatedByString:@"-"];
    NSMutableString *output = [NSMutableString string];
    
    for (NSUInteger i = 0; i < components.count; i++) {
        if (i == 0) {
            [output appendString:components[i]];
        } else {
            [output appendString:[components[i] capitalizedString]];
        }
    }
    
    return [NSString stringWithString:output];
}

@end
