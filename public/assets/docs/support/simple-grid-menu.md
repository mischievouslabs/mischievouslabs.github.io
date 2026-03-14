# Mischievous Labs Simple Grid Menu

> A grid based menu similar to a Stream Deck that allows you to give players a bunch of actions/options at once

## Installation

1. Copy the `MLGridMenu/` folder into your project's `Plugins/` directory
2. Regenerate project files (right-click `.uproject` > Generate Visual Studio project files)
3. Open the project in Unreal Editor — the plugin will be loaded automatically

## Quick Start

1. Select your PlayerController (or Pawn/Character) in the editor
2. Add the `MLGridMenu` component
3. In the component's Details panel, add entries to the `ButtonData` array
4. Configure layout and color properties as desired
5. Call `ShowMenu()` to display the grid, `HideMenu()` to dismiss it
6. Bind the `OnButtonPressed` event to handle button clicks

## Adding the Component

`UMLGridMenu` is an **ActorComponent** — add it to any actor that has access to a PlayerController:

- **PlayerController** (recommended) — add the component directly
- **Pawn / Character** — the component will automatically find the owning PlayerController

### Blueprint

1. Open your PlayerController Blueprint
2. Add Component > search for `MLGridMenu`
3. Configure properties in the Details panel

### C++

```cpp
// In your PlayerController header
UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "UI")
TObjectPtr<UMLGridMenu> GridMenuComponent;

// In the constructor
GridMenuComponent = CreateDefaultSubobject<UMLGridMenu>(TEXT("GridMenu"));
```

## Configuration

All configuration is done on the `UMLGridMenu` component. The widget is created and managed automatically.

### Layout Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Columns` | int32 | 4 | Number of columns in the grid |
| `VisibleRows` | int32 | 5 | Number of rows visible at once (determines widget height) |
| `ButtonSize` | float | 120.0 | Width and height of each button (square) |
| `ButtonPadding` | float | 10.0 | Spacing between buttons |
| `EdgePadding` | float | 10.0 | Padding around the grid inside the border |
| `IconTextSpacing` | float | 2.0 | Spacing between icon and label inside a button |
| `CornerRadius` | float | 12.0 | Radius of the rounded corners on the background |
| `bShowScrollBar` | bool | false | Show a scrollbar when content overflows |
| `ScrollBarThickness` | float | 8.0 | Width of the scrollbar (only used when `bShowScrollBar` is true) |

### Header Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bFixedHeaderRow` | bool | false | When true, the first row of buttons stays fixed above the scrollable area |
| `HeaderDividerColor` | FLinearColor | (0.3, 0.3, 0.3, 1.0) | Color of the divider line between the header row and content |
| `HeaderDividerThickness` | float | 1.0 | Thickness of the divider line between the header row and content |

### Title Bar Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bShowTitle` | bool | false | Show a title at the top of the menu |
| `TitleText` | FText | (empty) | Title text displayed at the top of the menu, left-justified |
| `TitleFontSize` | int32 | 16 | Font size for the title |
| `TitleTextColor` | FLinearColor | White | Color of the title text |
| `bShowSearchBox` | bool | false | Show a search box in the title bar to filter buttons by label |
| `SearchHintText` | FText | "Search..." | Hint text shown in the search box when empty |

The title bar area is displayed when either `bShowTitle` or `bShowSearchBox` is enabled. The title takes up ~67% of the width and the search box takes ~33%, right-justified. When only the search box is enabled (no title), it appears right-justified at ~33% width.

### Color Properties

| Property | Default | Description |
|----------|---------|-------------|
| `BackgroundColor` | Dark gray (0.02, 0.02, 0.02, 0.9) | Background fill color |
| `ButtonNormalColor` | (0.1, 0.1, 0.1, 1.0) | Button default color |
| `ButtonHoveredColor` | (0.2, 0.2, 0.2, 1.0) | Button color on hover |
| `ButtonPressedColor` | (0.05, 0.05, 0.05, 1.0) | Button color when pressed |
| `LabelTextColor` | White | Text color for button labels |
| `BorderColor` | (0.3, 0.3, 0.3, 1.0) | Color of the rounded border outline |

### Text Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `LabelFont` | FSlateFontInfo | Roboto Regular | Font for button labels |
| `LabelFontSize` | int32 | 12 | Font size for button labels |

## Button Data

Each button is defined by an `FMLGridMenuButtonData` struct:

| Field | Type | Description |
|-------|------|-------------|
| `Key` | FString | Unique identifier returned when the button is pressed |
| `Label` | FText | Display text shown on the button |
| `Icon` | TSoftObjectPtr\<UTexture2D\> | Optional icon texture (leave empty for text-only buttons) |

### Setting Button Data

**In the Details panel:** Add entries to the `ButtonData` array on the component.

**At runtime:** Call `SetButtonData` with a new array — this automatically rebuilds the grid if the menu is visible.

## Events

### OnButtonPressed (Delegate)

Multicast delegate on the component that fires when any button in the grid is clicked. Returns the `Key` string of the pressed button.

**Blueprint:** Bind via the Event Dispatchers panel or `Assign OnButtonPressed` node on the component.

**C++:**
```cpp
GridMenuComponent->OnButtonPressed.AddDynamic(this, &AMyController::HandleGridButton);

void AMyController::HandleGridButton(const FString& Key)
{
    UE_LOG(LogTemp, Log, TEXT("Button pressed: %s"), *Key);
}
```

## Blueprint Functions

All functions are called on the `UMLGridMenu` component:

| Function | Description |
|----------|-------------|
| `ShowMenu` | Shows the grid menu and switches to Game and UI input mode with mouse cursor visible |
| `HideMenu` | Hides the grid menu and restores game-only input mode |
| `IsMenuVisible` | Returns whether the menu is currently visible |
| `SetButtonData` | Updates the button data array and rebuilds the grid if the menu is visible |

## Show / Hide Behavior

- `ShowMenu()` makes the menu visible, enables the mouse cursor, and sets input mode to Game and UI so the player can click buttons while still receiving game input
- `HideMenu()` collapses the menu, hides the mouse cursor, and restores game-only input mode
- When the menu is shown, the search filter is reset automatically

## Fixed Header Row

When `bFixedHeaderRow` is enabled, the first `Columns` buttons in the `ButtonData` array are placed in a fixed row above the scrollable area. These buttons remain visible while the rest of the content scrolls beneath them. A configurable divider line separates the header from the scrollable content.

The header row counts as one of the `VisibleRows` — setting `VisibleRows` to 3 with a fixed header gives 1 header row + 2 scrollable content rows.

This is useful for category tabs, column headers, or persistent action buttons.

## Search Filtering

When `bShowSearchBox` is enabled, a search input appears in the title bar area. Typing in the search box filters buttons in real-time by matching against button label text (case-insensitive). The search filter is automatically cleared each time the menu is shown via `ShowMenu()`.

The search box can be used independently of the title — enable `bShowSearchBox` without `bShowTitle` to get a search-only title bar.

## License

Copyright 2026 Mischievous Labs. All Rights Reserved.
