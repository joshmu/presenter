module.exports.set_hide_desktop = flag => `
  defaults write com.apple.finder CreateDesktop -bool ${flag.toString()}; killall Finder
`
