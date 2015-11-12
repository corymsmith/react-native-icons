
#import "FAKIconImageManager.h"

#import <UIKit/UIKit.h>
#import "RCTConvert.h"
#import "FAKIconImage.h"
#import "FontAwesomeKit.h"
#import <objc/runtime.h>

@implementation FAKIconImageManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
    return [[FAKIconImage alloc] init];
}

RCT_REMAP_VIEW_PROPERTY(size, iconSize, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(name, NSString);
RCT_EXPORT_VIEW_PROPERTY(color, NSString);

RCT_CUSTOM_VIEW_PROPERTY(icon, NSDictionary, FAKIconImage)
{
    dispatch_queue_t backgroundQueue = dispatch_queue_create("com.smixxtape.reactnativeicons", 0);
    dispatch_async(backgroundQueue, ^{
        if(json) {
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
            } else if([fontPrefix isEqualToString:@"octicons"]) {
                target = [FAKOcticons class];
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
                return;
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
            
            UIImage *image = [icon imageWithSize:CGSizeMake(size,size)];
            dispatch_async(dispatch_get_main_queue(), ^{
                [view setContentMode:UIViewContentModeCenter];
                view.image = image;
            });
        }
    });
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
