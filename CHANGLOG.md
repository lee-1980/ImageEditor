# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Types of changes:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.
- `Improved` for improvements done in existing functionality.

> Date format: YYYY-MM-DD
> If we have some "Breaking changes" we can mark it in message by `**BREAKING**` preffix, like:
> `- **BREAKING**: Some message`

---

## v4.3.8 - 2023-02-10

### Fixed

- Move crossOrigin = 'Anonymous' before .src for avoiding sometimes CORS issue (Issue [#242](https://github.com/scaleflex/filerobot-image-editor/issues/242)).
- Some filters/finetunes names are changed on saving the image in prod (Issue [#266](https://github.com/scaleflex/filerobot-image-editor/issues/266)).
- Issue of sometimes the canvas don't draw the main image (Issues [#251](https://github.com/scaleflex/filerobot-image-editor/issues/251) & [#276](https://github.com/scaleflex/filerobot-image-editor/issues/276)).
- 50x50 image and smaller is not working (Issue [#220](https://github.com/scaleflex/filerobot-image-editor/issues/220)).
- PEN as default TOOL don't work bug (Issue [#288](https://github.com/scaleflex/filerobot-image-editor/issues/288))
- Issue of button doesn't have a type (Issue [#268](https://github.com/scaleflex/filerobot-image-editor/issues/268)).


### Improved

- Filters' previews, Consider ratio in image filters preview by center cropping the image (Issue [#253](https://github.com/scaleflex/filerobot-image-editor/issues/253)).
- If no Annotation component found avoid showing error (possible to happen if provided wrong annotation type from developer side).
- The behavior of color picker, by splitting the saved fill/stroke/shadow colors (Issue [#285](https://github.com/scaleflex/filerobot-image-editor/issues/285)).
- Update TS types for `defaultSavedImageType`.
- Update `@scaleflex/ui`, `@scaleflex/icons`, `konva` & `react-konva`.

### Security

- Apply Dependabot suggested fixes/improvements.

## v4.3.7 - 2022-08-31

### Added

- Multiple rotate option https://github.com/scaleflex/filerobot-image-editor#rotate
- new Watermark scaling options https://github.com/scaleflex/filerobot-image-editor#watermark

## v4.3.6 - 2022-07-25

### Chore

- Bump version

## v4.3.5 - 2022-07-25

### Chore

- Bump version

## v4.3.4 - 2022-07-25

### Chore

- Bump version

## v4.3.3 - 2022-07-25

### Chore

- Bump version

## v4.3.0 - 2022-07-25

### Chore

- Support React 18

### Fixed

- Tab label text is not centered T7893
- Ellipse doesn't crop on first use in cloudimage T7490
- Topbar on small mobile screen

## v4.2.1 - 2022-06-7

### Fixed

- Npm versions with peer dependencies

### Fixed

- Reset button disregards the default provided crop ratio and replaces with the original image's ratio.

### Added

- `disableZooming` property for disabling zoom functionality & removing zoom-related UI.

### Improved

- Changed default value of `savingPixelRatio` to `4` instead of `8` for avoiding errors in some browsers and faster saving.
- Plugin's styles by adding background for the whole editor & decreasing the bottom spacing of tabs bottom bar on phone screens.
- Keep showing the save loading spinner in case of returning a Promise from `onSave` and hide it after the promise's resolving/rejection
- Enabling Possibility in `getCurrentImgDataFnRef` function to keep save loading spinner shown and hide it manually through params.

## v4.2.0 - 2022-04-26

### Fixed

- Reset button disregards the default provided crop ratio and replaces with the original image's ratio.

### Added

- `disableZooming` property for disabling zoom functionality & removing zoom-related UI.

### Improved

- Changed default value of `savingPixelRatio` to `4` instead of `8` for avoiding errors in some browsers and faster saving.
- Plugin's styles by adding background for the whole editor & decreasing the bottom spacing of tabs bottom bar on phone screens.
- Keep showing the save loading spinner in case of returning a Promise from `onSave` and hide it after the promise's resolving/rejection
- Enabling Possibility in `getCurrentImgDataFnRef` function to keep save loading spinner shown and hide it manually through params.

## v4.1.1 - 2022-03-29

### Fixed

- Typescript types of the plugin react component.

## v4.1.0 - 2022-03-28

### Added

- Zoom presets menu and its visibility control property `useZoomPresetsMenu`.

### Improved

- Zoom behavior to simulate the zooming percentage to the final image size.

### Fixed

- Typescript types of the plugin react component.

## v4.0.0 - 2022-03-17

### Added

- New features (more annotations, finetunes, more filters) with options for customization.
- New customization properties for fitting different usecases.
- Static CSS class names for HTML elements for styles customization.
- Fully responsive functionality & UI with different screens including phones & touch screens.
- Changing default save behavior and ability to customize from UI, Exporting & loading current design state.

### Improved

- Codebase is re-written with new structure.
- Performance & design UX.
- Rotation, crop & filter behaviors

### Changed

- Internal canvas library replaced with another library (KonvaJS) which has more features & faster.

### Fixed

- Different issues related to past version (v3).

## v3.12.17 - 2021-3-19

### Fixed

- Issue of cropping dimensions not accurate.

## v3.12.16 - 2021-3-05

### Added

- `exitFullscreenModal` callback function inside `onSaveAs` function for turning the fullscreen off in case it's opened.
- `dontCleanQuery` property inside `cloudimage` object to avoid cleaning the query of the passed image's URL and appending it to the cloudimage URL.

## v3.12.15 - 2021-2-25

### Improved

- The styles of footer for the editor with changing the full-screen icon.
- Moving react v17.0.1 & react-dom v17.0.1 from peerDependencies to dependencies for working with projects have lower versions of react.
- Improving full-screen logic.

### Added

- `finishButtonLabel` for customizing the label of the finish button.
- `imageName` & `imageMime` to the returned object in the callbacks passed in default/download mode.

### Fixed

- The icon of fullscreen at the footer wasn't shown for some OS users.
- The issue of not changing the width or height of the image before start editing.

## v3.12.14 - 2021-2-20

### Improved

- Update dependencies (styled-components v5.1.1, React v17.0.1, react-dom v17.0.1 & @babel).
- Switching to automatic runtime for JSX transformation.
- The styles of actions (save, save as, back, close, cancel & apply) buttons.

### Added

- `replaceCloseWithBackButton` for replacing the close icon at the top right with a back button at the top left.

### Removed

- `closeButtonProps` property from the config and replaced with the above `replaceCloseWithBackButton`.

## v3.12.13 - 2021-2-18

### Fixed

- The style of saveAs menu buttons.
- Text watermark is not applied in modify/cloudimage mode.
- Prohibit watermark positions square change if no watermark selected.
- Making text watermark default if no watermark images provided.
- Error while uploading the watermark image.
- Styles of un-selected watermark positions square.
- Resize tab's header style.

## v3.12.12 - 2021-2-15

### Added

- `onSaveAs` property to filerobot upload mode config for showing & handling Save As New Image Button as sliding item next to save button.
- `keepPropsAndMeta` property to uploadParams of filerobot upload mode config for keeping the provided `imageProperties` & `imageMeta` in the saved image.
- `onError` for handling the errors returned by the uploading process through filerobot or cloudimage.
- `secondary` property to theme's button object which is used in the background color of selectable button (ex. saveAs).

### Removed

- `saveMode` property from the filerobot upload mode config.

### Fixed

- Rarely happened issue of duplicated canvases when doing some operation.
- Warning of similar keys for canvases.

### Improved

- Styles of resizing image before editing warning.
- Moving `imageProperties`, `imageMeta` & `imageName` to uploadParams object of filerobot upload mode.

## v3.12.11 - 2021-1-6

### Added

- `closeButtonProps` property to the config for customizing the top left corner close button (ex. label & styles).

### Improved

- Plugin's container recognition (for being fullscreened) logic improved.
- Changed the place of fullscreen button to be bottom left corner besides undo/redo operations.

## v3.12.10 - 2021-1-4

### Added

- Close button (x) at the top left of the editor.

## v3.12.9 - 2020-12-23

### Fixed

- Watermark's text font selection is now updated with the chosen text font.

### Added

- support custom theme's colors for more elements.

## v3.12.8 - 2020-12-17

### Fixed

- showing the appropriate styles for the plugin while being showing inside page not as modal.

## v3.12.7 - 2020-11-23

### Fixed

- Styling of adjust controls by having spaces between each control.

## v3.12.6 - 2020-11-22

### Added

- `saveMode`, `imageProperties`, `imageMeta` & `imageName` properties into filerobot object of upload mode to be used in determining the save/upload mode of filerobot whether to have a newly created image without the old image's properties & meta, duplicate the image data with the edits (different name with same old image's properties & meta with considering the new edits/design) or replacing the main image with the newly edited one.

## v3.12.5 - 2020-11-22

### Fixed

- Watermark scaling box stays in its place if watermark is positioned from watermark's positioning squares.
- Image's stroke width input issue of not changing.
- Issue of multiple canvases on saving image.
- Cloudimage's mode generated url.

### Improved

- Improved the positioning of watermark in cloudimage mode.
- Adding selectors to the styled components.
- Applying watermark's default position when changing the watermark image.
- Scaling the watermark to 30% + 1.5% spacing when using watermark positioning sqaures and watermark's current size is bigger than 30% of edited image.
- Disabling scaling up the watermark image and allowing scaling down with scaling up to the max. size of the watermark image.

## v3.12.4 - 2020-11-19

### Improved

- Improved the positioning of watermark in cloudimage mode.
- Avoiding the overwriting of watermark's applying switcher styles.

## v3.12.3 - 2020-11-14

### Fixed

- Objects scaling on different image sizes issue.
- Canvas moving in while flipping issue.
- Text watermark position changing when undo then redo issue.
- Fixing issue of importing SVGs.

### Added

- added `lockScaleToPercentage` property to watermark object in config for scaling the watermark image and preventing users from re-scaling/re-sizing it.

### Improved

- Changing canvases selectors to be able to use multiple instances in same page.
- Using first url of watermark's urls array as the default watermark url if no string url property is provided.

## v3.12.2 - 2020-10-22

### Fixed

- Showing shapes borders in light color scheme.

### Added

- Watermark fonts for using those fonts in text watermark fonts field.
- Theme fonts for supporting those fonts in text & text watermark fonts field (if no fonts provided for watermark object).

## v3.12.1 - 2020-10-09

### Fixed

- Removing hot loader build paths from the complied library files.

### Improved

- Decreasing the library size a bit.

## v3.12.0 - 2020-10-07

### Fixed

- Watermark or added images quality is not destroyed and it would be relative to the edited image.
- The UI of font family field's dropdown while adding text through phone.
- Importing watermark/image through URL.

### Added

- noCapitalStrs prop for disabling the capitalization of strings.
- minCropAreaWidth & minCropAreaHeight props for limiting/fixing the customized crop area with minimum values.

### Improved

- Objects (Watermark/shapes...etc) on the image while editing became more accurate to the same positions & looking in produced/saved image which means after saving you will get the same looking (from position & quality of objects) as you are editing.
- Customizing the default element id regarding the used service by appending the used service to the id [|-cloudimage|-uploader].
- Replacing all used unsafe deprecated methods (UNSAFE\_\*).

## v3.11.5 - 2020-10-05

### Fixed

- bug with modal id. Added using modal id from config

## v3.11.4 - 2020-10-02

### Fixed

- Add classes for modal overlay and modal root container on purpose to manage plugin in external projects

## v3.11.3 - 2020-09-22

### Fixed

- Objects drag & drop error

## v3.11.2 - 2020-09-21

### Fixed

- Watermark issue when no urls provided in the configurations

### Added

- Touch support for moving objects' places

## v3.11.1 - 2020-09-16

### Fixed

- Watermark spinner is always shown if no watermark urls provided
- Watermark image upload issue

## v3.11.0 - 2020-09-03

### Fixed

- Text watermark design
- Problem of image saving without adding watermark in upload & modify modes

### Added

- showInModal & watermark.defaultText props
- onClose method's status

## v3.10.1 - 2020-08-12

### Changed

- update fonts

## v3.10.0 - 2020-08-12

### Added

- draw shapes, images, text with possibility to drag&drop and scale

## v3.9.6 - 2020-07-28

### Changed

- move back button into config

## v3.9.5 - 2020-07-27

### Fixed

- FocusPoint console error

### Changed

/ FocusPointPreview improvements (sizes)

## v3.9.4 - 2020-07-24

### Fixed

- go back button visibility

## v3.9.3 - 2020-06-18

### Fixed

- image sealing
- fixed problem of canvas rendering on SSR

### Added

- support for initial crop area (beginCropArea)

## v3.9.2 - 2020-06-13

### Fixed

- round the radius for cloudimage integration
- using blob as source

### Added

- round crop
- SSR support

## v3.9.1 - 2020-06-12

### Fixed

- onComplete method doesn't call with new callback syntax

## v3.9.0 - 2020-06-12

### Fixed

- calculating final size when zooming was applied on download
- problem with query sting on generate cloudimage url
- configuration of tools
- fix canvas initilization error

### Added

- image sealing
- support for onOpen & onClose methods
- fullscreen mode
- focus point

## v3.7.6 - 2020-05-17

### Fixed

- problem with localization
- mobile layout

## v3.7.2

### Added

- Add possibility to not prefix url when already using Filerobot URL

```js
...
filerobot: {
    token: 'xxxx',
    doNotPrefixURL: true
},
...
```

## v3.7.0

### Deprecated

- `fileUpload` watermark param is deprecated. Now there is possibility to switch watermark input among
  url, gallery, file upload

### Added

- possibility to change watermark input among url, gallery and file upload
