import MyTitle from './Title.vue';

export default {
  title: 'Example/Title',
  component: MyTitle
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyTitle },
  template: '<my-title @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: '我是标题',
};