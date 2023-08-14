# i-tree-view

## Class Inheritance
Inherited from [`Control`](components/Control/README.md)

## Properties

| Name         | Description           | Type | Accepted Values | Default |
| ------------ | --------------------- | ----------------------------- | ------- | ----------- |
| activeItem   | Define the a TreeNode as active | [TreeNode](components/customdatatype/README.md#itreenode) \| undefined             |         |             |
| data         | Define the contents of the TreeNodes | [ITreeNode\[\]](components/customdatatype/README.md#itreenode) |         |             |
| editable     | Allow the TreeView to be edited | boolean         |         | false         |
| items        | The returned value of the TreeNode component | [TreeNode\[\](#i-tree-node)            |         |             |
| actionButtons | Define the action buttons associated with the TreeView  | [Button\[\]](components/Button/README.md) |   |  |

## Events

| **onChanged** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onChanged(target: TreeView, node: TreeNode, oldValue: string, newValue: string) | 

| **onActiveChange** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onActiveChange(target: TreeView, prevNode?: TreeNode) | 

| **onContextMenu** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onContextMenu() | 

| **onRenderNode** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onRenderNode(target: TreeView, node: TreeNode) | 

| **onMouseEnterNode** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onMouseEnterNode(target: TreeView, node: TreeNode) | 

| **onMouseLeaveNode** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onMouseLeaveNode(target: TreeView, node: TreeNode) | 

| **onActiveButtonClick** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onActionButtonClick(target: TreeView, actionButton: Button, event: Event) | 

| **onLazyLoad** |   |
| ---------- | -------------------------- | 
| Description |  | 
| Signature | onLazyLoad(target: TreeView) | 

## Functions

| **add()** |   |
| ---------- | -------------------------- | 
| Description | Add a node to tree view | 
| Signature | add(parentNode: TreeNode, caption: string): TreeNode | 

| **clear()** |   |
| ---------- | -------------------------- | 
| Description | To clear all tree nodes | 
| Signature | clear():void | 

| **delete()** |   |
| ---------- | -------------------------- | 
| Description | To remove a node from tree view | 
| Signature | delete(node: TreeNode) |