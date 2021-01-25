import MyCanvas from './Canvas.vue';

export default {
  title: 'Example/Canvas',
  component: MyCanvas,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCanvas },
  template: '<my-canvas v-bind="$props" />',
});

export const fillAutoWrapText = Template.bind({});
fillAutoWrapText.args = {
  description: '@description 自动换行填充文字(可带省略号)',
  label: 'fillAutoWrapText',
  method: 'fillAutoWrapText(ctx, text, 20, 80, 300, 50, "20px PingFang-SC-Heavy", 4)',
  param1: '@param { object } ctx canvas对象',
  param2: '@param { string } text 文字内容',
  param3: '@param { number } x 文字起点x坐标',
  param4: '@param { number } y 文字起点y坐标',
  param5: '@param { number } widthLimit 文字换行宽度',
  param6: '@param { number } lineHeight 文字行高',
  param7: '@param { string } font 文字字体',
  param8: '@param { number } lines 超出省略号显示的文字行数'
};

export const strokeAutoWrapText = Template.bind({});
strokeAutoWrapText.args = {
  description: '@description 自动换行中空文字(可带省略号)',
  label: 'strokeAutoWrapText',
  method: 'fillAutoWrapText(ctx, text, 20, 80, 300, 50, "20px PingFang-SC-Heavy", 5)',
  param1: '@param { object } ctx canvas对象',
  param2: '@param { string } text 文字内容',
  param3: '@param { number } x 文字起点x坐标',
  param4: '@param { number } y 文字起点y坐标',
  param5: '@param { number } widthLimit 文字换行宽度',
  param6: '@param { number } lineHeight 文字行高',
  param7: '@param { string } font 文字字体',
  param8: '@param { number } lines 超出省略号显示的文字行数'
};

export const fillRoundRect = Template.bind({});
fillRoundRect.args = {
  label: 'fillRoundRect'
};

export const strokeRoundRect = Template.bind({});
strokeRoundRect.args = {
  label: 'strokeRoundRect'
};

export const fillArrowCircle = Template.bind({});
fillArrowCircle.args = {
  label: 'fillArrowCircle'
};