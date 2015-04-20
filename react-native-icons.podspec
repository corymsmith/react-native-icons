Pod::Spec.new do |s|
  s.name             = "react-native-icons"
  s.version          = "0.0.4"
  s.summary          = "React Native Icons Module"
  s.platform     = :ios, '7.0'
  s.requires_arc = true
  s.author = 'Cory Smith'
  s.homepage = "https://github.com/corymsmith/react-native-icons"
  s.source_files = 'ios/**/*.{h,m}'
  s.preserve_paths = "**/*.js"
  s.resources = ["**/**.ttf", "**/**.otf"]
end
