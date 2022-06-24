import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Button,
  Header,
  Main,
  Footer,
  Menu,
  MenuItem,
  Container,
  Submenu,
  Select,
  Option,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Col,
  Switch,
  Checkbox,
  Radio,
  Input,
  TimePicker,
  DatePicker,
  CheckboxGroup,
  RadioGroup,
  CheckboxButton,
  Carousel,
  CarouselItem,
  Breadcrumb,
  BreadcrumbItem,
  Notification,
} from "element-ui";

Vue.prototype.$notify = Notification;

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Input);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(CheckboxGroup);
Vue.use(RadioGroup);
Vue.use(CheckboxButton);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

