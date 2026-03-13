# Mischievous Labs Simple Radial Menu

An easy to use, fully configurable radial menu component for Unreal Engine 5.

## Installation

1. Copy the `MLRadialMenu` folder into your project's `Plugins/` directory.
2. Regenerate your project files (right-click `.uproject` > Generate Visual Studio project files).
3. Open your project in the Unreal Editor. The plugin should be enabled automatically. You can verify under Edit > Plugins > search "Radial Menu".

## Quick Start

1. Open the Blueprint for your player character (or player controller).
2. Click **Add Component** and search for **MLRadial Menu**.
3. In the Details panel, add entries to the **Segments** array (2-12 segments). Each segment has:
   - **Id** - A unique string identifier returned when the segment is selected or hovered.
   - **Label** - Display text shown on the segment.
   - **Icon** - A `Texture2D` asset displayed on the segment.
   - **Icon Tint Color** - Per-segment icon color override (leave transparent to use the global tint).
4. Call **ShowMenu** and **HideMenu** from your Blueprint (e.g., bound to a key press).
5. Bind the **OnSegmentSelected** and **OnSegmentHovered** events to respond to player interaction.

When the menu opens, the mouse cursor is automatically centered on screen and input mode switches to Game and UI. When hidden, input returns to Game Only.

## Properties Reference

### Radial Menu (Top Level)

| Property | Type | Default | Description |
|---|---|---|---|
| Segments | Array | Empty | Segment data (Id, Label, Icon, IconTintColor). Array length determines segment count (2-12). |
| Menu Radius | float | 300 | Outer radius of the menu circle in pixels. |
| Enable Cancel Button | bool | true | Whether the center cancel button is interactive. |
| Inner Radius | float | 100 | Radius of the center hole in pixels. |
| Inner Padding | float | 10 | Gap between the center hole and the ring in pixels. |

### Segments

| Property | Type | Default | Description |
|---|---|---|---|
| Show Icons | bool | true | Whether to display icons on segments. |
| Show Labels | bool | true | Whether to display text labels on segments. |
| Icon Size | float | 32 | Size of segment icons in pixels. |
| Icon Tint Color | LinearColor | White | Global tint applied to all segment icons. White = no tint. |
| Label Font Size | int | 12 | Font size for segment labels. |
| Label Color | LinearColor | White | Color of segment label text. |
| Content Radius Position | float | 0.5 | Where to place icons/labels within the ring. 0 = inner edge, 0.5 = middle, 1 = outer edge. |

### Appearance

| Property | Type | Default | Description |
|---|---|---|---|
| Menu Color | LinearColor | (0.05, 0.05, 0.05, 0.85) | Background color of the ring. |
| Ring Thickness | float | 0 | Thickness of the ring in pixels. 0 = auto-fill the entire ring area. |
| Segment Background Color | LinearColor | Transparent | Fill color for non-hovered segments. Transparent = no fill. |
| Hover Color | LinearColor | (0.2, 0.2, 0.4, 0.6) | Highlight color for the hovered segment. |
| Divider Line Color | LinearColor | (0.8, 0.8, 0.8, 1.0) | Color of lines between segments. |
| Divider Line Thickness | float | 2 | Thickness of divider lines in pixels. |
| Inner Padding Color | LinearColor | Transparent | Color of the padding ring between the center hole and the menu ring. |

### Borders

| Property | Type | Default | Description |
|---|---|---|---|
| Outer Border Color | LinearColor | White | Color of the outer ring border. |
| Outer Border Thickness | float | 0 | Thickness in pixels. 0 = no border. |
| Inner Border Color | LinearColor | White | Color of the inner ring border. |
| Inner Border Thickness | float | 0 | Thickness in pixels. 0 = no border. |

### Cancel Button

| Property | Type | Default | Description |
|---|---|---|---|
| Cancel Button Color | LinearColor | (0.6, 0.1, 0.1, 1.0) | Color of the cancel button circle. |
| Cancel Button Icon | Texture2D | None | Optional icon texture. If set, replaces the solid circle and is tinted by Cancel Button Color. |

### Animation

| Property | Type | Default | Description |
|---|---|---|---|
| Enable Animation | bool | false | Whether to animate the menu on show/hide with a scale + opacity transition. |
| Animation Duration | float | 0.2 | Duration of the animation in seconds. |

### Events

| Event | Parameter | Description |
|---|---|---|
| OnSegmentSelected | SegmentId (String) | Fired when a segment is clicked. Returns the segment's Id. |
| OnSegmentHovered | SegmentId (String) | Fired when the hovered segment changes. Empty string = no segment hovered. |

## Blueprint Functions

| Function | Description |
|---|---|
| ShowMenu | Displays the radial menu, centers the cursor, and switches to UI input mode. |
| HideMenu | Hides the radial menu and restores game-only input mode. |
| IsMenuVisible | Returns true if the menu is currently visible. |

## Tips

- The cancel button in the center automatically calls **HideMenu** when clicked.
- Segment hover detection only works within the ring area (between Inner Radius + Inner Padding and Menu Radius).
- All color properties with a transparent default are effectively disabled until you set them to a visible color.
- Border thickness of 0 means no border is drawn, regardless of the border color.
- Per-segment **Icon Tint Color** overrides the global **Icon Tint Color** when its alpha is greater than 0.

## Engine Compatibility

- Unreal Engine 5.6+

## License

Copyright Mischievous Labs. All Rights Reserved.
