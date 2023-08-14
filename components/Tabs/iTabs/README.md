# i-tabs

## Class Inheritance
Inherited from [`Container`](components/container/README.md)

## Properties

| Name            | Description                                                     | Type        | Default |
| --------------- | -------------------------------------------------               | ----------  | ------- |
| activeTab       | allow user to active `<i-tab>` in the `<i-tab>` by Tab          | [Tab](components/Tabs/i-tab.md/)   | |
| activeTabIndex  | allow user to active `<i-tab>` in the `<i-tab>` by Tab's index  | number      | 0       |
| closable        | show close icon which allows user to close the active `<i-tab>` | boolean     | false   |
| draggable       | allow user to drag and drop the `<i-tab>` in the `<i-tab>`      | boolean     | false   |
| mode            | used to define the display mode of the `<i-tab>`                | [TabModeType](#tabmodetype) | |

### TabModeType
`horizontal` \| `vertical`

## Event

| **onChanged**  |                                                |
| -------------- | ---------------------------------------------- |
| Description    | Callback executed when active tab changed      |
| Signature      | onChanged(target: Tabs, activeTab: Tab)        |

| **onCloseTab** |                                                |
| -------------- | ---------------------------------------------- |
| Description    | Callback executed when the tab closed          |
| Signature      | onCloseTab(target: Tabs, tab: Tab)             |

## Function

| **add**        |                                                |
| -------------- | ---------------------------------------------- |
| Description    | to add tab                                     |
| Signature      | add(options?: ITab)                            |

| **delete**     |                                                |
| -------------- | ---------------------------------------------- |
| Description    | to remove a tab                                |
| Signature      | delete(tab: Tab)                               |