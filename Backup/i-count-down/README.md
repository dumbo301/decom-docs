# i-count-down

## Usage

To display an animated count down counter which can be linked to a specific url .

## Properties

| Name  | Parameters     | Default | Description |
| ----- | -------------- | ------- | ----------- |
| value | value?: number |         |             |
| title | title?: string |         |             |
| link  | link?: string  |         |             |
| font  | font?: IFont   |         |             |

## Events

| Name     | Parameters     | Description |
| -------- | -------------- | ----------- |
| onFormat | onFormat?: any |             |

## Functions

| Name         | Parameters                                                       | Description |
| ------------ | ---------------------------------------------------------------- | ----------- |
| updateValue  | updateValue ( value: number )                                    |             |
| animateValue | animateValue( elm: HTMLElement, value: number, duration: number) |             |
