# Radio Group

A radio group starts with the `<i-radio-group>` tag. Each radio group option starts with the `<i-radio>` tag.

### `i-radio-group`

Use as grouping radio buttons for users to select at most one radio button from a set. Checking one radio button that belongs to a radio group unchecks any previous checked radio button within the same group.

### Class Inheritance
Inherited from [`Control`](components/Control/README.md)

### Properties

| Name | Description | Type | Accepted Value | Default |
| --------------- | ------------------------ | -------- | ----------- | ------- |
| value | the value of selected **i-radio** | string |  |  |
| radioItems | the element of **i-radio** item | IRadioElement[] |  |  |

#### i-radio-group Sample Code (Property)
```
```

### Event

| **onChanged** |  |
| ----------- | ------------------------------------------- | 
| Description | Callback executed when radio changed |
| Signature   | onChanged?: any |

#### i-radio-group Sample Code (Event)
```
```

### Function

| **add** |  |
| ----------- | ------------------------------------------- | 
| Description | to add radio |
| Signature |  |

| **delete** |  |
| ----------- | ------------------------------------------- | 
| Description | to delete radio |
| Signature |  |

#### i-radio-group Sample Code (Function)
```
```

### `i-radio`

Use as radio buttons for user to select single option from multiple options.

### Class Inheritance
Inherited from [`Control`](components/Control/README.md)

### Properties

| Name | Description | Type | Accepted Value | Default |
| --------------- | ------------------------ | -------- | ----------- | ------- |
| caption | used to define the header of the **i-radio** | string |  |  |
| captionWidth | used to define the width of the **i-radio** header | number |  |  |
| value | the value of the **i-radio** | string |  |  |
| checked | used to define the **i-radio** checked  | boolean |  |  |

#### i-radio Sample Code (Property)
```
```