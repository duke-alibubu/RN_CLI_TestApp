# Some Materials
## Blah Blah Stuff
- Look for the first commit *FIRST COMMIT - HOT FIX* to see how to fix the first-time installation problem. Don't ask me why there's a need to do it - because Facebook product is damn buggy. That zz all.

## PDF handling
- `https://www.npmjs.com/package/react-native-pdf`

## File Viewer && Doc Picker
- `https://www.npmjs.com/package/react-native-file-viewer`

## Video Player
- `https://www.npmjs.com/package/react-native-video`
- After this, building on Android might fail with multidex error. Check this link for answers `https://stackoverflow.com/questions/49886597/multidex-issue-with-flutter#answer-54680454`
- For custom controls, consider `https://www.npmjs.com/package/react-native-video-controls`

## Flex Box
- `https://www.w3.org/TR/css-flexbox-1/#flex-item`

## My Custom Video Player:
- Dependencies: 
    + Slider for Progressbar: `https://www.npmjs.com/package/@react-native-community/slider`
    + VideoPlayer (as above)
    + SVG icons dependencies : `https://github.com/kristerkari/react-native-svg-transformer`. Remember this SVG transformer itself has a handful of dependencies on its own, so remember to npm install all of them. Also, checkout this article for metro configuring the SVG transformer: `https://medium.com/faun/add-custom-svg-icons-to-your-expo-app-279b492f6a15`

# Next task
- Conditionally display the control logic.
    + Redesign Replay icon && rework the logic again !!!
- Wrap seperately into a component.