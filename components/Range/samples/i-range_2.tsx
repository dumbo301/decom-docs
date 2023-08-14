import {Module, Label, Range} from '@ijstech/components';
export default class RangeSample extends Module{
    private label: Label;
    private range: Range;

    tipFormatter(value: any) {
        return `${Number(value).toFixed()}%`;
    }

    onChanged(){
        this.label.caption = 'Range value: ' + this.range.value.toString() + '%';
    }

    render() {
        return (
            <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
                <i-panel><i-label top={20} left={50} id='label' caption='Range value: 0%' padding={{left: 20}}></i-label></i-panel>
                <i-range id='range' top={50} left={50} width='200'
                    min={0} max={100} value={0} 
                    step={10} stepDots={10}
                    tooltipFormatter={this.tipFormatter}
                    tooltipVisible={true}
                    onChanged={this.onChanged}
                />
            </i-panel>
        )
    }
}