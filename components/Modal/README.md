# Modal

A modal is a dialog box/popup window that is displayed on top of the current page. It also can use to create a drop down menu.

### `i-modal`

## Class Inheritance
Inherited from [`Container`](components/container/README.md)

## Properties

| Name                 | Description                                                | Type       | Default |
| ---------------      | -------------------------------------------------          | ---------- | ------- |
| title                | Define the title of `<i-modal>`                            | string     |         |
| showBackdrop         | Define show the backdrop when `<i-modal>` visible          | boolean    |         |
| closeIcon            | Define the close icon of `<i-modal>`                       | [Icon](components/customdatatype/README.me#icon) | |
| popupPlacement       | Define the popup placement when `<i-modal>` visible        | [modalPopupPlacementType](#modalpopupplacementtype) | |
| closeOnBackdropClick | Define can close the `<i-modal>` when showBackdrop is true | boolean    |         |
| item                 | Define the item of `<i-modal>`                             | Control    |         |

### modalPopupPlacementType
`center` \| `bottom` \| `bottomLeft` \| `bottomRight` \| `top` \| `topLeft` \| `topRight` \| `rightTop`

## Event

| **onOpen**|                                                     |
| -------------- | ---------------------------------------------- |
| Description    | Callback executed when open the modal          |
| Signature      | onOpen(target: Control)                        |

| **onClose**|                                                    |
| -------------- | ---------------------------------------------- |
| Description    | Callback executed when close the modal         |
| Signature      | onClose(target: Control)                       |

## Sample Code

### Property (For popup dialog)
```typescript(components/Modal/samples/i-modal_1.tsx)
click() {
    this.mdAlert.visible = true;
}
render() {
    return (
        <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
            <i-button caption="Show Modal" padding={{ top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }} onClick={this.click}></i-button>
            <i-modal id="mdAlert" height='300px' maxWidth="200px" title="Error" closeIcon={{ name: 'times' }} 
                closeOnBackdropClick={false} popupPlacement='center'
            >
                <i-panel id="commonTokenPanel" class="common-token">
                    <i-label caption="Common Token" />
                </i-panel>
            </i-modal>
        </i-panel>
    )
}
```
**Tip**: _The properties `id`, `height`, `maxWidth`, [`padding`](components/customdatatype/README.md#ispace) and the event `onClick` are inherited from [`Control`](components/Control/README.md)_

### Property (For drop down menu)
```typescript(components/Modal/samples/i-modal_2.tsx)
init() {
    super.init();
    this.renderWalletButton();
}
click() {
    this.dropdownModal.visible = true;
}
async renderWalletButton() {
    this.vstack = await VStack.create({
        gap: '10px'
    });
    this.btnSignal = await Button.create({
        caption: "Signal",
        padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' },
        margin: { left: '0.5rem' }
    });
    this.vstack.appendChild(this.btnSignal);
    this.btnUnsignal = await Button.create({
        caption: "Unsignal",
        padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' },
        margin: { left: '0.5rem' }
    });
    this.vstack.appendChild(this.btnUnsignal);
    
    this.dropdownModal.item = this.vstack;
}
render() {
    return (
        <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
            <i-panel top={120} left={20}>
                <i-button id="dropdownButon" caption="Signal" padding={{ top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }} onClick={this.click}></i-button>
                <i-modal id="dropdownModal" height='auto' showBackdrop={false} popupPlacement='bottom'></i-modal>
            </i-panel>
        </i-panel>
    )
}
```
**Tip**: _The properties `id`, `height`, `top`, `left`, [`padding`](components/customdatatype/README.md#ispace), [`margin`](components/customdatatype/README.md#ispace) and the event `onClick` are inherited from [`Control`](components/Control/README.md)_

### Events
```typescript(components/Modal/samples/i-modal_3.tsx)
click() {
    this.mdAlert.visible = true;
}
openHandle() {
    this.label1.caption = "Event called: onOpen Event";
}
closeHandle() {
    this.label1.caption = "Event called: onClose Event";
}
render() {
    return (
        <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
            <i-panel><i-label id='label1' caption='Event called: '></i-label></i-panel>
            <i-button caption="Show Modal" padding={{ top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }} onClick={this.click}></i-button>
            <i-modal id="mdAlert" height='300px' maxWidth="200px" title="Error" closeIcon={{ name: 'times' }} 
                closeOnBackdropClick={false} popupPlacement='center'
                onOpen={this.openHandle} onClose={this.closeHandle}
                >
                <i-panel id="commonTokenPanel" class="common-token">
                    <i-label caption="Common Token" />
                </i-panel>
            </i-modal>
        </i-panel>
    )
}
```
**Tip**: _The properties `id`, `height`, `maxWidth` are inherited from [`Control`](components/Control/README.md)_