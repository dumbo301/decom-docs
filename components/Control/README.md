# Control

## Description

Control is the base class for all components that are visible at run time.  Controls are visual components, meaning the user can see them and possibly interact with them at run time. All controls have properties, methods, and events that describe aspects of their appearance, such as the position of the control, the cursor or hint associated with the control, methods to paint or move the control, and events that respond to user actions.

Control has many protected properties and methods that are used or published by its descendants.

## Properties

| Name            | Description                                       | Type       | Default |
| --------------- | ------------------------------------------------- | ---------- | ------- |
| contextMenu |   | Modal |   |
| dock |   | DockStyle |   |
| enabled |    | boolean |   |
| tooltip |    | ToolTip |   |
| id |    | string |   |
| visible | boolean |   |   |
| stack |    | IStack |   |
| parent |    |   |   |
| tag | For storing any custom properties defined by developers | any |   |
| linkTo |    | string |   |
| zIndex |    |   |   |
| backgroundColor |    | string |   |
| border |    | IBorder  |   |
| grid |    | IGrid |   |
| lineHeight |    | LineHeightType  |   |
| left |   | number \| sting |   |
| bottom |   | number \| sting |   |
| right |   | number \| sting |   |
| top |   | number \| sting |   |
| height |   | number \| sting |   |
| width |   | number \| sting |   |
| maxWidth |   | number \| sting |   |
| minWidth |   | number \| sting |   | 
| margin |    | ISpace |   |
| padding |    | ISpace |   |
| anchorLeft |   | boolean |   |
| anchorBottom |    | boolean |   |
| anchorRight |   | boolean   |   |
| anchorTop |   | boolean |   |

## Events

| onClick |   |
| ------- | ---------- |
| Description |  |
| Signature | onClick(target: Control, event: Event) => void |

| onDblClick |   |
| ------- | ---------- |
| Description |  |
| Signature | onBdlClick(target: Control, event: Event) => void |

| onContextMenu |   |
| ------- | ---------- |
| Description |  |
| Signature | onContextMenu(target: Control, event: Event) => void |
