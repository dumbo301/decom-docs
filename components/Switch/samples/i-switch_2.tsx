import {Module, Label, Switch} from '@ijstech/components';
export default class ISwitchSample extends Module {
    private label: Label;
    private switchBox: Switch;

    onChanged() {
        this.label.caption = `The switch is ${(this.switchBox.checked) ? 'On' : 'Off'}`;
    }

    render() {
        return (
            <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
                <i-label id='label' caption="The switch is Off"></i-label>
                <i-switch id="switchBox"
                    checkedTrackColor="#070707" uncheckedTrackColor="#c5c5c5"
                    checkedThumbText="Off" uncheckedThumbText="On"
                    checkedText="Off" uncheckedText="On"
                    checked={true} onChanged={this.onChanged}
                ></i-switch>
            </i-panel>
        )
    }
}